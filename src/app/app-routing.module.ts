import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path: '', component: FirstComponentComponent},
                        {path: 'list', component: ListRenderComponent},
                        {path: 'two-way-data-binding', component: TwoWayBindingComponent},
                        {path: 'list/:id', component: ItemDetailComponent}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
