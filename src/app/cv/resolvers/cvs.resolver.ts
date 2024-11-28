import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class CvsResolver implements Resolve<Cv[]> {
  constructor(private cvService: CvService) {}

  resolve(): Observable<Cv[]> {
    return this.cvService.getCvs();
  }
}
