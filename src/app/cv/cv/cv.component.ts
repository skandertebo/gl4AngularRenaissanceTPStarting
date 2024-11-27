import { Component } from "@angular/core";
import { Cv } from "../model/cv";
import { LoggerService } from "../../services/logger.service";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import { catchError, map, Observable, of } from "rxjs";
@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  cvs$: Observable<Cv[]> ;
  juniors$: Observable<Cv[]> ; 
  seniors$: Observable<Cv[]> ;
  selectedCv: Cv | null = null;
  currentTab: "junior" | "senior" = "junior";
  date = new Date();
  constructor(
    private logger: LoggerService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {
    this.cvs$=this.cvService.getCvs().pipe(
      catchError( error => {
        this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
        return of(this.cvService.getFakeCvs());
        
      }),
    );
    this.juniors$=this.cvs$.pipe(
      map(cvs=>cvs.filter(cv=>cv.age<40))
    );
    this.seniors$=this.cvs$.pipe(
      map(cvs=>cvs.filter(cv=>cv.age>=40))
    );
    this.logger.logger("je suis le cvComponent");
    this.toastr.info("Bienvenu dans notre CvTech");
  }
  changeTab(tab: 'junior' | 'senior') {
    this.currentTab = tab;
  }
  selectedCv$: Observable<Cv> = this.cvService.selectCv$;
}
