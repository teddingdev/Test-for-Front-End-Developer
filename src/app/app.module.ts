import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

import { ExampleComponent } from './components/example/example.component';
import { DataCubeComponent } from './components/data-cube/data-cube.component';
import { DataPageComponent } from './pages/data-page/data-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    DataCubeComponent,
    DataPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
