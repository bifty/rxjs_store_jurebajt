const CANDIDATES = [
  { name: 'Americano', votes: 5 },
  { name: 'Cappuccino', votes: 4 },
  { name: 'Espresso', votes: 3 },
  { name: 'Macchiato', votes: 2 },
  { name: 'Café Latte', votes: 1 },
];

type candidates = { name: string, votes: number };
export class CoffeeElectionState {
  candidates: candidates[] = CANDIDATES;
}
