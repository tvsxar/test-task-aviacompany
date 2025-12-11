import { media } from "../globals";

export const containerStyles = {
  mt: 4,
};

export const leftBoxStyles = {
  display: "flex",
  gap: 2,
  width: "100%",
  flexDirection: "column",
  [media.sm]: {
    flexDirection: "row",
  },
};

export const rightBoxStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  flex: 1,
};
