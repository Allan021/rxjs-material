import { SearchRounded } from "@mui/icons-material";
import { IconButton, InputBase, Paper } from "@mui/material";
import { useState } from "react";

import { searchSubject$ } from "./store/observables";

export const Search = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Your Favorite Pokemon"
        inputProps={{ "aria-label": "Search Pokemon" }}
        onChange={(e) => {
          const value = e.target.value;
          setSearch(value);
          searchSubject$.next(value);
        }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchRounded />
      </IconButton>
    </Paper>
  );
};
