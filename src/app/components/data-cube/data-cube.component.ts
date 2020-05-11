import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-cube',
  templateUrl: './data-cube.component.html',
  styleUrls: ['./data-cube.component.sass']
})
export class DataCubeComponent implements OnInit {
  @Input() propertyName: string;
  @Input() value: string;

  constructor() { }

  ngOnInit(): void {
  }

}
