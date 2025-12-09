import { Paper, Typography, Box } from "@mui/material";
import {
  ticketPaper,
  ticketHeaderBox,
  ticketRowBox,
  columnBox,
  priceText,
  carrierText,
  boldText,
  grayText,
} from "../styled/components/TicketItem/TicketItemStyles";

const TicketItem = () => (
  <Paper sx={ticketPaper}>
    <Box sx={ticketHeaderBox}>
      <Typography sx={priceText} variant="h6">
        12 000
      </Typography>
      <Typography sx={carrierText} variant="subtitle1">
        S7 AirLines
      </Typography>
    </Box>

    <Box>
      <Box sx={ticketRowBox}>
        <Box sx={columnBox}>
          <Box>
            <Typography variant="body2" sx={grayText}>
              WAW → HKT
            </Typography>
            <Typography variant="body2" sx={boldText}>
              10:45 – 08:00
            </Typography>
          </Box>

          <Box>
            <Typography variant="body2" sx={grayText}>
              HKT → WAW
            </Typography>
            <Typography variant="body2" sx={boldText}>
              11:20 – 00:50
            </Typography>
          </Box>
        </Box>

        <Box sx={columnBox}>
          <Box>
            <Typography variant="body2" sx={grayText}>
              В ПУТИ
            </Typography>
            <Typography variant="body2" sx={boldText}>
              21ч 15м
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={grayText}>
              В ПУТИ
            </Typography>
            <Typography variant="body2" sx={boldText}>
              13ч 30м
            </Typography>
          </Box>
        </Box>

        <Box sx={columnBox}>
          <Box>
            <Typography variant="body2" sx={grayText}>
              2 ПЕРЕСАДКИ
            </Typography>
            <Typography variant="body2" sx={boldText}>
              HKG, JNB
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={grayText}>
              1 ПЕРЕСАДКА
            </Typography>
            <Typography variant="body2" sx={boldText}>
              HKG
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  </Paper>
);

export default TicketItem;
