import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import {Profissional} from '../profissionais/profissional.class';
import {ProfissionalService} from '../services/profissional.service';

@Component({
  selector: 'app-profissional-search',
  templateUrl: './profissional-search.component.html',
  styleUrls: ['./profissional-search.component.css']
})
export class ProfissionalSearchComponent implements OnInit {
  profissionais$: Observable<Profissional[]>;
  private searchTerms = new Subject<string>();

  constructor(private profissionalService : ProfissionalService) { }

  search(term: string):void{
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.profissionais$ = this.searchTerms.pipe(
      //esperar passar 300 milissegundos da ultima teclada para iniciar a consulta
      debounceTime(300),

      //somente pesquisar apenas uma vez o mesmo termo
      distinctUntilChanged(),
      
      //a cada digitação de novo termo, trocar pelo novo e descartar antigo observable
      switchMap((term: string) => this.profissionalService.searchProfissionais(term)),
    );
  }

}
