import { TicketsList, TicketsFilter, TicketsSortButtons } from '../components'
import { Container, Box } from "@mui/material";
import { containerStyles, leftBoxStyles, rightBoxStyles } from '../styled/pages/TicketsPageStyles';

function TicketsPage() {
  // there will be logic
  return (
    <Container maxWidth="md" sx={containerStyles}>
      <Box
        sx={leftBoxStyles}
      >
        <TicketsFilter />

        <Box
          sx={rightBoxStyles}
        >
          <TicketsSortButtons />
          <TicketsList />
        </Box>
      </Box>
    </Container>
  );
}

export default TicketsPage;
