import { Paper, Typography, Box } from "@mui/material";

const styles = {
  fontWeight: 600
}

const grayStyles = {
  ...styles,
  color: '#9a9a9aff'
}

function TicketItem() {
  return (
    <Paper sx={{ p: 2, mb: 2, width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography sx={{ fontWeight: 'bold', fontSize: '1.75rem', color: '#1e84ebff'}} variant="h6">12 000</Typography> 
        <Typography sx={{ fontWeight: 600, color: 'gray', fontSize: '1.25rem'}} variant="subtitle1">S7 AirLines</Typography>
      </Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: 'space-between',
            alignItems: "flex-start",
            mb: 1,
          }}
        >

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box>
              <Typography variant="body2" sx={grayStyles}>
                WAW → HKT
              </Typography>
              <Typography variant="body2" sx={styles}>
                10:45 – 08:00
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" sx={grayStyles}>
                HKT → WAW
              </Typography>
              <Typography variant="body2" sx={styles}>
                11:20 – 00:50
              </Typography>
            </Box>
          </Box>


          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box>
              <Typography variant="body2" sx={grayStyles}>
                В ПУТИ
              </Typography>
              <Typography variant="body2" sx={styles}>
                21ч 15м
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={grayStyles}>
                В ПУТИ
              </Typography>
              <Typography variant="body2" sx={styles}>
                13ч 30м
              </Typography>
            </Box>
          </Box>


          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box>
              <Typography variant="body2" sx={grayStyles}>
                2 ПЕРЕСАДКИ
              </Typography>
              <Typography variant="body2" sx={styles}>
                HKG, JNB
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={grayStyles}>
                1 ПЕРЕСАДКА
              </Typography>
              <Typography variant="body2" sx={styles}>
                HKG
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default TicketItem;