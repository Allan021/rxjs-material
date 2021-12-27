import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox, FormControlLabel, Grid, Paper } from "@mui/material";
import { useState } from "react";
import { useObservable } from "./hooks/useObservable";
import { Pokemon } from "./models/Pokemon";
import { pokemonFilteredSubject$ } from "./store/observables";
import { useStyles } from "./styles";

export const Pokemons = () => {
  const classes = useStyles();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  useObservable(pokemonFilteredSubject$, setPokemons);
  console.log(pokemons);
  return (
    <Grid container gap={2} style={{ paddingTop: "1rem" }}>
      {pokemons.length > 0 &&
        pokemons.map((p) => (
          <Grid item sm={12} md={4} lg={3} key={p.id}>
            <Paper elevation={3} className={classes.pokemonMiniCard}>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                }
                label={p.name}
              />
            </Paper>
          </Grid>
        ))}
    </Grid>
  );
};
