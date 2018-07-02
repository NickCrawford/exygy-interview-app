import { Component, OnInit } from '@angular/core';

import { Document } from '../document';
import { DocumentService } from '../document.service';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  documents: Document[] = [];

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.getDocuments();
  }

  /** Retrieve the list of documents from the server */
  getDocuments(): void {
    this.documentService.getDocuments()
      .subscribe(documents => this.documents = documents);
  }

}
