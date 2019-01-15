import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowmenuComponent } from './showmenu/showmenu.component';
import { ServinglocationComponent } from './servinglocation/servinglocation.component';
import { ReviewCartComponent } from './review-cart/review-cart.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [
  { path: '', redirectTo: '/servinglocation', pathMatch: 'full' },
  { path: 'servinglocation', component: ServinglocationComponent },
  { path: 'showmenu', component: ShowmenuComponent },
  { path: 'reviewcart', component: ReviewCartComponent },
  { path: 'submitorder', component: OrderSummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
