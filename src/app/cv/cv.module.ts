import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { CvCardComponent } from './cv-card/cv-card.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { MasterDetailsCvComponent } from './master-details-cv/master-details-cv.component';
import { CardProfilComponent } from '../components/card-profil/card-profil.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultImagePipe } from './pipes/default-image.pipe';

const routes: Routes = [
  { path: '', component: CvComponent },
  { path: 'add', component: AddCvComponent, canActivate: [AuthGuard] },
  { path: ':id', component: DetailsCvComponent },
];

@NgModule({
  declarations: [
    DefaultImagePipe,
    AddCvComponent,
    CvComponent,
    DetailsCvComponent,
    ListComponent,
    ItemComponent,
    CvCardComponent,
    AutocompleteComponent,
    MasterDetailsCvComponent,
    CardProfilComponent,
    EmbaucheComponent,
    CardProfilComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, 
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvModule {}
