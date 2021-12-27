import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap,
} from "rxjs";
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

export const searchSubject$ = new BehaviorSubject("");
export const pokemonFilteredSubject$ = searchSubject$.pipe(
  debounceTime(750),
  distinctUntilChanged(),
  tap((val) => console.log(val)),
  switchMap((searchTerm) =>
    pokemonWithPower$.pipe(
      map((p) =>
        p.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm))
      )
    )
  )
);

export const Selected = new BehaviorSubject<number[]>([]);
