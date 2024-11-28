import { Component } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { catchError, map, Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  selectedCv: Cv | null = null;
  date = new Date();
  cvs: Cv[] = [];
  constructor(
    private cvService: CvService,
    private route: ActivatedRoute, private router: Router
  ) {}
   
  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.cvs = data['cvs']; 
    });
  }

  selectedCv$: Observable<Cv> = this.cvService.selectCv$;
}
