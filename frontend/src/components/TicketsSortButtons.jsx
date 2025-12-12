import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import {
  toggleButtonGroupStyles,
  toggleButtonStyles,
} from "../styled/components/TicketSortButtons";

function TicketsSortButtons({ filters, setFilters }) {
  const handleChange = (e, newValue) => {
    if (newValue !== null) setFilters({ ...filters, sort: newValue });
  };

  return (
    <ToggleButtonGroup
      fullWidth
      value={filters.sort}
      exclusive
      onChange={handleChange}
      aria-label="Sort tickets"
      sx={toggleButtonGroupStyles}
    >
      <ToggleButton value="cheapest" sx={toggleButtonStyles}>
        Самый дешёвый
      </ToggleButton>
      <ToggleButton value="fastest" sx={toggleButtonStyles}>
        Самый быстрый
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default TicketsSortButtons;
