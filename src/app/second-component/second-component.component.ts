import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  token : string
  constructor() { }

  ngOnInit(): void {
    this.token = 'jlferwhajofinbwiohajioq2j4qiqolsbnoeieusvijkevhioe'
  }

}
