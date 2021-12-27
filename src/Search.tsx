import { SearchRounded } from "@mui/icons-material";
import { IconButton, InputBase, Paper } from "@mui/material";
import { useEffect } from "react";
import { pokemonWithPower$ } from "./store/observables";
export const Search = () => {
  useEffect(() => {
    const subs = pokemonWithPower$.subscribe(console.log);

    return () => {
      subs.unsubscribe();
    };
  }, []);

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Your Favorite Pokemon"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchRounded />
      </IconButton>
    </Paper>
  );
};
