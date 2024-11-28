import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { TodoComponent } from "./todo/todo/todo.component";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { ColorComponent } from "./components/color/color.component";
import { FrontComponent } from "./templates/front/front.component";
import { AdminComponent } from "./templates/admin/admin.component";
import { LoginComponent } from "./auth/login/login.component";
import { NF404Component } from "./components/nf404/nf404.component";
import { AuthGuard } from "./auth/guards/auth.guard";
import { AddCvComponent } from "./cv/add-cv/add-cv.component";
import { CvComponent } from "./cv/cv/cv.component";
import { DetailsCvComponent } from "./cv/details-cv/details-cv.component";
import { RhComponent } from "./optimizationPattern/rh/rh.component";
import { ProductsComponent } from "./products/products.component";
import { MasterDetailsCvComponent } from "./cv/master-details-cv/master-details-cv.component";
import { CvResolver } from "./cv/resolvers/cv.resolver";
import { CvsResolver } from "./cv/resolvers/cvs.resolver";

const routes: Route[] = [
  { path: "login", component: LoginComponent },
  { path: "rh", component: RhComponent },
  {
    path: "cv",
    component: CvComponent,
    resolve: { cvs: CvsResolver }
  },
  { path: "cv/add", component: AddCvComponent, canActivate: [AuthGuard] },
  { path: "cv/:id", component: DetailsCvComponent, resolve: { cv: CvResolver }},
  { path: "products", component: ProductsComponent },
  {
    path: 'master-details',
    resolve: { cvs: CvsResolver },
    component: MasterDetailsCvComponent,
    children: [
      {
        path: ':id',
        component: DetailsCvComponent,
        resolve: { cv: CvResolver },
      }
    ]
  },
  {
    path: "",
    component: FrontComponent,
    children: [
      { path: "todo", component: TodoComponent },
      { path: "word", component: MiniWordComponent },
    ],
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [{ path: "color", component: ColorComponent }],
  },
  { path: "**", component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
