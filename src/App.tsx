import { Box, Container, CssBaseline, Paper, Typography } from "@mui/material";
import { Pokemons } from "./Pokemons";
import { Search } from "./Search";
import { useStyles } from "./styles";

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Paper style={{ minHeight: "100vh" }}>
        <Container maxWidth="lg">
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
            <Box className={classes.root}>
              <Box style={{ width: "70%" }}>
                <Pokemons />
              </Box>
            </Box>
          </div>
        </Container>
      </Paper>
    </>
  );
}

export default App;
