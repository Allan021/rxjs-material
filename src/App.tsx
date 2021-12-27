import { Box, Container, CssBaseline, Paper, Typography } from "@mui/material";
import { Search } from "./Search";

function App() {
  return (
    <>
      <CssBaseline />
      <Paper style={{ minHeight: "100vh" }}>
        <Container maxWidth="sm">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              align="center"
              marginBottom={3}
              color="initial"
            >
              Pokemon App
            </Typography>
            <Search />
          </div>
        </Container>
      </Paper>
    </>
  );
}

export default App;
