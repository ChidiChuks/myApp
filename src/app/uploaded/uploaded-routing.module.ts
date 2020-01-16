import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadedPage } from './uploaded.page';

const routes: Routes = [
  {
    path: '',
    component: UploadedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadedPageRoutingModule {}
