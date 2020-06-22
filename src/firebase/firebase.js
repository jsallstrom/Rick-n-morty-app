import * as firebase from "firebase";

// ok so we need to get values from
// process.env.NODE_ENV, set it to production, development and undefined
// and use it here
// the problem is getting the

// environment variables are variables that are available through a global process.env Object

var firebaseConfig = {
     apiKey: process.env.FIREBASE_API_KEY,
     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
     databaseURL: process.env.FIREBASE_DATABASE_URL,
     projectId: process.env.FIREBASE_PROJECT_ID,
     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,

     // I think these stuff below is for firebase.analytics()
     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
     appId: process.env.FIREBASE_APP_ID,
     // measurementId: "G-44517H2XSZ", do we need this?
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.database();

// firebase does NOT support arrays that good, so we will be storing data like this:

database.ref("favs").push({
     // by using push, firebase will create a  unique id
     name: "rick n morty episode",
     season: 1,
     number: 2,
     summary: "TextTextText",
});

database.ref("favs/-M9Sm_kWVzVsa--z0DZn").update({
     number: 7,
});

database.ref("favs/-M9Sm_kWVzVsa--z0DZn").remove();

database
     .ref("favs")
     .once("value")
     .then((snapshot) => {
          const favs = [];
          snapshot.forEach((childSnapshot) => {
               favs.push({
                    // push in an object
                    id: childSnapshot.key, // the key property here (if u check documentation) is ACTually the id automaticly created by firebase
                    ...childSnapshot.val(), // here we copy in rest of the values
               });
          });
          console.log(favs);
     });

// this one fires everytime anything changes in favs
const subscribeToValueChange = database.ref("favs").on("value", (snapshot) => {
     const favs = [];
     snapshot.forEach((childSnapshot) => {
          favs.push({
               id: childSnapshot.key, // id
               ...childSnapshot.val(),
          });
     });
     console.log(favs);
});

// here we are using the "child_removed" to subscribe to whenever a favourite is removed from the database
const subscribeToValueRemoved = database.ref("favs").on("child_removed", (snapshot) => {
     console.log("A child has been removed");
     console.log(snapshot.key, snapshot.val());
}); // child_removed

// here we are using the "child_changed" to subscribe to
// when an object is changed
const subscribeToChildChanged = database.ref("favs").on("child_changed", (snapshot) => {
     console.log("A child has been changed");
     console.log(snapshot.key, snapshot.val());
});

// This doesnt only get called when a new child, it also
// gets called for all the childs already in the datbase
const subscribeToChildAdded = database.ref("favs").on("child_added", (snapshot) => {
     console.log("A child was added to the database, praise the lord!");
     console.log(snapshot.key, snapshot.val());
});
