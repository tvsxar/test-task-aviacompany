import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

function TicketsSortButtons() {
  const [value, setValue] = useState("cheapest");

  const handleChange = (e, newValue) => {
    if (newValue !== null) setValue(newValue);
  };

  const buttonStyles = {
    flexGrow: 1, 
    fontSize: "1rem",
    fontWeight: 500,
    height: "3rem",
    border: "none",
    bgcolor: "white",
    color: "black",
    borderRadius: 0,
    color: '#5e5e5eff',
    "&.Mui-selected": {
      bgcolor: "#1e84ebff",
      color: "white",
    },
    "&:hover": {
      bgcolor: "white",
    },
    "&.Mui-selected:hover": {
      bgcolor: "#1e84ebff",
    },
    "&:focus-visible": {
      outline: "none",
    },
    ".MuiTouchRipple-root": {
      display: "none",
    },
  };

  return (
    <ToggleButtonGroup
      fullWidth
      value={value}
      exclusive
      onChange={handleChange}
      aria-label="Sort tickets"
      sx={{
        bgcolor: "white",
        borderRadius: 1.5,
        overflow: "hidden",
        display: "flex",
        width: '100%',
        boxShadow: 1
      }}
    >
      <ToggleButton
        value="cheapest"
        sx={{
          ...buttonStyles,
          "&.MuiButtonBase-root:focus": {
            outline: "none",
          },
        }}
      >
        Самый дешёвый
      </ToggleButton>
      <ToggleButton
        value="fastest"
        sx={{
          ...buttonStyles,
          "&.MuiButtonBase-root:focus": {
            outline: "none",
          },
        }}
      >
        Самый быстрый
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default TicketsSortButtons;
