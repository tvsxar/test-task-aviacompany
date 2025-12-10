import axios from "axios";

export const fetchSearchId = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/search`);
  return data.searchId;
};

export const fetchTickets = async (searchId) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_URL}/tickets?searchId=${searchId}`
  );
  return data.tickets;
};
