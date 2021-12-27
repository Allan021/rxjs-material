import { BehaviorSubject, map } from "rxjs";
import { Pokemon } from "../models/Pokemon";

const SimplePokemon$ = new BehaviorSubject<Pokemon[]>([]);

fetch("./pokemon.json")
  .then((resp) => resp.json())
  .then((data) => SimplePokemon$.next(data));

export const pokemonWithPower$ = SimplePokemon$.pipe(
  map((pokemon) => [
    ...pokemon.map((p) => ({
      ...p,
      power:
        p.attack +
        p.defense +
        p.hp +
        p.special_attack +
        p.special_defense +
        p.speed,
    })),
  ])
);
