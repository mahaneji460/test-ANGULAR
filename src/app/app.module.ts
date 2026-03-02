import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-maha-neji/home.component';
import { ListResComponent } from './list-res-maha-neji/list-res.component';
import { UpdateResComponent } from './update-res-maha-neji/update-res.component';
import { AddResComponent } from './add-res-maha-neji/add-res.component';
import { DetailesResComponent } from './detailes-res-maha-neji/detailes-res.component';
import { HeaderComponent } from './header-maha-neji/header.component';
import { DeleteComponent } from './delete-maha-neji/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListResComponent,
    UpdateResComponent,
    AddResComponent,
    DetailesResComponent,
    HeaderComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
