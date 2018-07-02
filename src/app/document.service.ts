import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Document } from './document';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private documentsUrl = 'http://exygy-challenge-backend.herokuapp.com/documents';
  private apiKeyParam = `api_key=${123}`;

  constructor(
    private http: HttpClient,
  ) { }

  /** GET document records from the server */
  getDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.documentsUrl}?${this.apiKeyParam}`)
      .pipe(
        // tap(documents => this.log(`fetched documents`)),
        catchError(this.handleError('getDocuments', []))
      )
  }

  /** GET document by id. Will 404 if id not found */
  getDocument(id: number): Observable<Document> {
    const url = `${this.documentsUrl}/${id}?${this.apiKeyParam}`;
    return this.http.get<Document>(url).pipe(
      // tap(_ => this.log(`fetched document id=${id}`)),
      catchError(this.handleError<Document>(`getDocument id=${id}`))
    );
  }

  queryDocuments(queryString: string): Observable<Document[]> {
    const url = `${this.documentsUrl}?search=${queryString}&${this.apiKeyParam}`;
    return this.http.get<Document[]>(url).pipe(
      catchError(this.handleError<Document>(`queryDocuments`))
    )
  }

  /** PUT update the document on the server */
  updateDocument(document: Document): Observable<any> {
    return this.http.put(this.documentsUrl, document, httpOptions).pipe(
      // tap(_ => this.log(`updated document id=${document.id}`)),
      catchError(this.handleError<any>(`updateDocument`))
    )
  }

  private log(message: string): void {
    console.log('DocumentService: ' + message);
    // this.messageService.add('DocumentService: ' + message);
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
