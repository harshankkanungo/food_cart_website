import { createStore } from "redux";
import { reducer } from "./redux/reducers/main";

let store = createStore(reducer);

export default store;
