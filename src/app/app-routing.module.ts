import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details-page/details-page.component';
import { FormComponent } from './form/form.component';

// const routes: Routes = [
//   { path: 'details', component: DetailsPageComponent },
//   { path: 'search1', component: FormComponent, data: { name: 'Order search list-1' } },
//   { path: 'search2', component: FormComponent, data: { name: 'Order search list-2' } },
//   { path: 'search3', component: FormComponent, data: { name: 'Order search list-3' } },
//   { path: 'search4', component: FormComponent, data: { name: 'Order search list-4' } }
// ];
// const routes: Routes = [
//   { path: 'details', component: DetailsPageComponent },
//   {
//     path: 'search',
//     children: [
//       { path: '1', component: FormComponent, data: { name: 'Order search list-1' } },
//       { path: '2', component: FormComponent, data: { name: 'Order search list-2' } },
//       { path: '3', component: FormComponent, data: { name: 'Order search list-3' } },
//       { path: '4', component: FormComponent, data: { name: 'Order search list-4' } }

//     ]
//   },
// ];
const routes: Routes = [
  { path: 'details', component: DetailsPageComponent },
  {
    path: 'search',
    children: [
      { path: '', component: FormComponent },
      { path: ':id', component: FormComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
