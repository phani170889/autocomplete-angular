import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-typeahead",
  templateUrl: "./typeahead.component.html",
  styleUrls: ["./typeahead.component.css"]
})
export class TypeAheadComponent implements OnInit {
  options: string[] = ["student on the bus", "useless stuff", "stubhub tickets", "user study"];
  objectOptions = [
    { name: "student on the bus" },
    { name: "useless stuff" },
    { name: "stubhub tickets" },
    { name: "user study" },
  ];
   
  formControl = new FormControl();

  // Use Observable to help filter with list of options
  filteredOptions: Observable<string[]>;

  ngOnInit(){
    this.filteredOptions = this.formControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  // Filter function
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }
  
  // To display values
  displayFn(subject) {
    return subject ? subject.name : undefined;
  }
}
