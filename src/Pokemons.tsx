import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox, FormControlLabel, Grid, Paper } from "@mui/material";
import { useState } from "react";
import { useObservable } from "./hooks/useObservable";
import { Pokemon } from "./models/Pokemon";
import {
  pokemonFilteredSubject$,
  Pokemons$,
  Selected$,
} from "./store/observables";
import { useStyles } from "./styles";

export const Pokemons = () => {
  const classes = useStyles();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  useObservable(Pokemons$, setPokemons);

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
                    checked={Selected$.value.includes(p.id)}
                    checkedIcon={<Favorite />}
                    onChange={() => {
                      if (Selected$.value.includes(p.id)) {
                        Selected$.next(
                          Selected$.value.filter((id) => id !== p.id)
                        );
                      } else {
                        Selected$.next([...Selected$.value, p.id]);
                      }
                    }}
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
