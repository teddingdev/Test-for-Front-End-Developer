import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.sass']
})
export class ExampleComponent implements OnInit {
  title = 'Test-for-Front-End-Developer';

  constructor() { }

  ngOnInit(): void {
  }

}
