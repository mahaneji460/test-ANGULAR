import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddResComponent } from './add-res-maha-neji/add-res.component';
import { UpdateResComponent } from './update-res-maha-neji/update-res.component';
import { ListResComponent } from './list-res-maha-neji/list-res.component';
import { HomeComponent } from './home-maha-neji/home.component';
import { DetailesResComponent } from './detailes-res-maha-neji/detailes-res.component';
import { DeleteComponent } from './delete-maha-neji/delete.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'residences', component: ListResComponent },
  { path: 'add-residence', component: AddResComponent },
  { path: 'residence-details/:id', component: DetailesResComponent },
  { path: 'update-residence/:id', component: UpdateResComponent },
  { path: 'delete-residence/:id', component: DeleteComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



