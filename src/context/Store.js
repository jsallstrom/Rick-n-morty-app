import React from "react";
import reducer from "./Reducer";

const initialState = {
     episodes: [],
     favourites: [],
};

export const Store = React.createContext(initialState);

export function StoreProvider(props) {
     const [state, dispatch] = React.useReducer(reducer, initialState);
     return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>;
}
