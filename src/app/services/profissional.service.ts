import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {tap,map,catchError} from 'rxjs/operators';

import{Profissional} from '../profissionais/profissional.class';
import{MessageService} from './message.service';
import{HttpClient,HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'})
  };

@Injectable()
export class ProfissionalService {
  private profsUrl = 'api/profissionais';
  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getProfissionais() : Observable<Profissional[]>{
    this.messageService.add('ProfissionalService: fetched profissionais');
    return this.http.get<Profissional[]>(this.profsUrl)
    .pipe(
      tap(profissionais => this.log(`fetched profissionais`)),
      catchError(this.handleError('getProfissionais', []))
    );
  }

  getProfissional(id) : Observable<Profissional>{
    const url = `${this.profsUrl}/${id}`;
    this.messageService.add(`ProfissionaisService: fetched profissional id=${id}`);
    return this.http.get<Profissional>(url).pipe(
      tap(_ => this.log(`fetched profissional id=${id}`)),
      catchError(this.handleError<Profissional>(`getProfissioal id=${id}`))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string){
    this.messageService.add('ProfissionalService: ' + message);
  }

  updateProfissional(profissional : Profissional) : Observable<any>{
    return this.http.put(this.profsUrl,profissional,httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${profissional.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  } 

  addProfissional(profissional : Profissional) : Observable<Profissional>{
          return this.http.post<Profissional>(this.profsUrl, profissional, httpOptions).pipe(
            tap((profissional: Profissional) => this.log(`added profissional w/ id=${profissional.id}`)),
            catchError(this.handleError<Profissional>('addProfissional'))
    );
  }

  deleteProfissional(profissional : Profissional | number){
    const id = typeof profissional === 'number' ? profissional : profissional.id;
    const url = `${this.profsUrl}/${id}`;
    return this.http.delete<Profissional>(url,httpOptions).pipe(
      tap(_ => this.log(`deleted profissional id=${id}`)),
      catchError(this.handleError<Profissional>('deleteProfissional'))
    );
  }

  searchProfissionais(term: string): Observable<Profissional[]>{
    if(!term.trim()){
      return of([]);
    }

    return this.http.get<Profissional[]>(`api/profissionais/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Profissional[]>('searchProfissionais',[]))
    );
  }


}
