import {
  BehaviorSubject,
  combineLatestWith,
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
  combineLatestWith(pokemonWithPower$),
  map(([search, pokemon]) =>
    pokemon.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
  )
);

export const Selected$ = new BehaviorSubject<number[]>([]);

export const Pokemons$ = pokemonFilteredSubject$.pipe(
  combineLatestWith(Selected$),
  map(([pokemon, selected]) =>
    pokemon.map((p) => ({
      ...p,
      selected: selected.includes(p.id),
    }))
  )
);

export const Deck$ = Pokemons$.pipe(
  map((pokemon) => pokemon.filter((p) => p.selected))
);
