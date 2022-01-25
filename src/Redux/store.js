import { createStore } from "redux";
import Timer from "./reducer/timereducer";
const store = createStore(Timer);
export default store;
