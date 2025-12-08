import TicketsList from "../components/TicketsList";
import TicketsFilter from "../components/TicketsFilter";
import TicketsSortButtons from "../components/TicketsSortButtons";
import { Container, Box } from "@mui/material";

function TicketsPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          width: "100%",
        }}
      >
        <TicketsFilter />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            flex: 1,
          }}
        >
          <TicketsSortButtons />
          <TicketsList />
        </Box>
      </Box>
    </Container>
  );
}

export default TicketsPage;