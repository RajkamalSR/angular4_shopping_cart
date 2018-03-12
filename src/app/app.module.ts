
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AddtocartService } from './services/addtocart.service';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ProductlistComponent,
    NotfoundpageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'',
        component: HomepageComponent
      },
      {
        path:'products',
        component: ProductlistComponent
      },
      {
        path:'**',
        component: NotfoundpageComponent
      }
    ])
  ],
  providers: [AddtocartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
