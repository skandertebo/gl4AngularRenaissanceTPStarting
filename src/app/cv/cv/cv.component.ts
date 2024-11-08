import { Component } from "@angular/core";
import { Cv } from "../model/cv";
import { LoggerService } from "../../services/logger.service";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import { catchError, Observable, of } from "rxjs";
@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  cvs: Cv[] = [];
  date = new Date();
  constructor(
    private logger: LoggerService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {
    this.cvService.getCvs().pipe(catchError(()=>{
        this.cvs = this.cvService.getFakeCvs();
        this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
          return of(this.cvs);
    })).subscribe({
      next: (cvs) => {
        this.cvs = cvs;
      }});
      this.logger.logger("je suis le cvComponent");
      this.toastr.info("Bienvenu dans notre CvTech");
    }
    selectedCv$: Observable<Cv> = this.cvService.selectCv$;
}
