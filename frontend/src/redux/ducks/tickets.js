import { createSlice } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchSearchId, fetchTickets } from "../../api/ticketsApi";

const initialState = {
  tickets: [],
  loading: false,
  error: null,
};

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    setTickets(state, action) {
      state.tickets = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

// Saga
function* fetchTicketsWorker(action) {
  try {
    yield put(setLoading(true));
    const searchId = yield call(fetchSearchId);

    let allTickets = [];
    let done = false;

    while (!done) {
      try {
        const { tickets, stop } = yield call(fetchTickets, searchId);
        console.log("New tickets:", tickets);
        allTickets = [...allTickets, ...tickets];
        done = stop;
      } catch (err) {
        console.warn("One tickets request failed, retrying...");
      }
    }

    yield put(setTickets(allTickets));
  } catch (error) {
    yield put(setError(error.message));
  } finally {
    yield put(setLoading(false));
  }
}

export function* ticketsWatcher() {
  console.log("ticketsWatcher STARTED");
  yield takeLatest("tickets/fetchTickets", fetchTicketsWorker);
}

export const { setTickets, setLoading, setError } = ticketsSlice.actions;

export default ticketsSlice.reducer;
