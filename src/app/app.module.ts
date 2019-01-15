import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServinglocationComponent } from './servinglocation/servinglocation.component';
import { ShowmenuComponent } from './showmenu/showmenu.component';
import { ReviewCartComponent } from './review-cart/review-cart.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServinglocationComponent,
    ShowmenuComponent,
    ReviewCartComponent,
    ProfileComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
