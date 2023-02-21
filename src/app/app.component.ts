import { Component } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numbers$: Observable<number>;
  constructor() {}
}

//create array
const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

numbers$.subscribe((Value) => console.log(Value));

//maniou
numbers$
  .pipe(map((value) => value * 2))
  .subscribe((value) => console.log(value));

//create an observable may using objects
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'bob', age: 27 },
  { id: 3, name: 'charlie', age: 25 },
  { id: 4, name: 'dave', age: 45 },
];

console.log('\n');
//using from operator
const users$ = from(users);
users$.subscribe((users) => console.log(users));

console.log('\n');
//manipulate the data emitted by the observable using map operator and display users  names in all caps and double theirv age
console.log('\n');
users$
  .pipe(
    map((users) => ({
      id: users.id,
      name: users.name.toUpperCase(),
      age: users.age * 2,
    }))
  )

  .subscribe((users) => console.log(users));

//use 'rxjs'operator to display the name in uppercase and age is doubled
