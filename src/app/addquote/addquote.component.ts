import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addquote',
  templateUrl: './addquote.component.html',
  styleUrls: ['./addquote.component.css']
})
export class AddquoteComponent implements OnInit {

@Output() quoteButler = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
