import { Component, OnInit } from '@angular/core';
 
import { Observable, Subject } from 'rxjs';
 
import { debounceTime, distinctUntilChanged, switchMap, startWith } from 'rxjs/operators';
 
import { Document } from '../_models';
import { DocumentService } from '../_services';
 
@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: [ './browse.component.css' ]
})
export class BrowseComponent implements OnInit {
  documents$: Observable<Document[]>;
  private searchTerms = new Subject<string>();
  searchString = '';
 
  constructor(private documentService: DocumentService) {}
 
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  clearSearch(): void {
    this.searchString = '';
    this.search('');
  }
 
  ngOnInit(): void {
    this.documents$ = this.searchTerms.pipe(
      startWith(''),
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.documentService.queryDocuments(term)),
    );
  }
}
