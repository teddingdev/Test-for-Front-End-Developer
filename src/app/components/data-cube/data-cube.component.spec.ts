import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCubeComponent } from './data-cube.component';

describe('DataCubeComponent', () => {
  let component: DataCubeComponent;
  let fixture: ComponentFixture<DataCubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
