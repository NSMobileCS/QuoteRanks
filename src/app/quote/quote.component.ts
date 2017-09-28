import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quote;

  voteUP = () => this.quote.score += 1;

  constructor() { }

  ngOnInit() {
  }


}
