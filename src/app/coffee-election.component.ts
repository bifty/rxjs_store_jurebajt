import { Component, OnInit } from '@angular/core';
import { CoffeeElectionStore } from './coffee-election.store';
import { Observable } from 'rxjs/Observable';
import { CoffeeElectionState } from './coffee-election-state';
import { map } from 'rxjs/operators';

type candidates = { name: string, votes: number };

@Component({
  selector: 'coffee-election',
  templateUrl: './coffee-election.component.html',
  providers: [CoffeeElectionStore]
})
export class CoffeeElectionComponent implements OnInit {


  candidatesState$ = new Observable<CoffeeElectionState>();
  candidates$ = new Observable<candidates[]>();

  constructor(private store: CoffeeElectionStore) { }

  ngOnInit(): void {
    this.candidatesState$ = this.store.state$;
    this.candidates$ = this.candidatesState$.pipe(
      map(state => state.candidates)
    );
  }

}
