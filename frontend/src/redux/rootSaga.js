import { all } from "redux-saga/effects";
import { ticketsWatcher } from "./tickets/ticketsSaga";

export default function* rootSaga() {
  yield all([ticketsWatcher()]);
}
