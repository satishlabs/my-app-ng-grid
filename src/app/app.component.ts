import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  columnDefs = [
    {field: 'make' },
    {field: 'model' },
    {field: 'price'},
     {field: 'Test'}
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 ,Test: 'Test1'},
    { make: 'Ford', model: 'Mondeo', price: 32000 ,Test: 100},
    { make: 'Porsche', model: 'Boxter', price: 72000,Test:'10test' }
    
];

}
