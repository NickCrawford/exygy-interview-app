import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slat-info',
  templateUrl: './slat-info.component.html',
  styleUrls: ['./slat-info.component.scss']
})
export class SlatInfoComponent implements OnInit {

  @Input() document: Document;

  constructor() { }

  ngOnInit() {
  }

}
