import { Component, inject, OnInit } from "@angular/core";
import { FormBuilder, AbstractControl } from "@angular/forms";
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap, catchError, of } from "rxjs";
import { CvService } from "../services/cv.service";
import { Cv } from "../model/cv";

@Component({
  selector: "app-autocomplete",
  templateUrl: "./autocomplete.component.html",
  styleUrls: ["./autocomplete.component.css"],
})
export class AutocompleteComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);
  cvSuggestions: Cv[] = [];
  selectedCv: Cv | null = null;

  constructor(
    private router: Router,
  ) {}


  get search(): AbstractControl {
    return this.form.get("search")!;
  }
  form = this.formBuilder.group({ search: [""] });

  ngOnInit(): void {
    this.form.controls["search"].valueChanges
      .pipe(
        debounceTime(100),
        distinctUntilChanged(),
        switchMap((value) => {
          const trimmedValue = value?.trim() || "";
            if (trimmedValue === "") {
            this.cvSuggestions = []; 
            return of([]);
          }
          return this.cvService.selectByName(trimmedValue).pipe(
            catchError((error) => {
              return of([]); 
            })
          );
        })
      )
      .subscribe((results: Cv[]) => {
        this.cvSuggestions = results; 
      });
  }
  

  selectCv(cv: Cv): void {
    this.router.navigate([`/cv/${cv.id}`]);
  }
}
