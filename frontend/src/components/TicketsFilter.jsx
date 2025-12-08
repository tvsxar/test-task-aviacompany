import {
  Paper,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const checkboxStyles = {
  color: "#1e84ebff",
  "&.Mui-checked": {
    color: "#1e84ebff",
  },
};

const formControlStyles = {
  width: '100%',
  borderRadius: 1,
  "&:hover": {
    bgcolor: "#e6f0ff",
  },
};

function TicketsFilter() {
  return (
    <Paper
      sx={{
        p: 2,
        borderRadius: 1,
        mb: 2,
        bgcolor: "white",
        maxHeight: "17rem",
        minWidth: '15rem'
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontSize: "1rem", mb: 1, color: "#5e5e5eff" }}
      >
        Количество пересадок
      </Typography>

      <FormGroup sx={{ width: '100%' }}>
        <FormControlLabel
          control={<Checkbox sx={checkboxStyles} />}
          label="Все"
          sx={formControlStyles}
        />
        <FormControlLabel
          control={<Checkbox sx={checkboxStyles} />}
          label="Без пересадок"
          sx={formControlStyles}
        />
        <FormControlLabel
          control={<Checkbox sx={checkboxStyles} />}
          label="1 пересадка"
          sx={formControlStyles}
        />
        <FormControlLabel
          control={<Checkbox sx={checkboxStyles} />}
          label="2 пересадки"
          sx={formControlStyles}
        />
        <FormControlLabel
          control={<Checkbox sx={checkboxStyles} />}
          label="3 пересадки"
          sx={formControlStyles}
        />
      </FormGroup>
    </Paper>
  );
}

export default TicketsFilter;
