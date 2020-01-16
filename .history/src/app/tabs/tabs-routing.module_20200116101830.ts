import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'feed',
      loadChildren: () => import('./feed/feed.module').then( m => m.FeedPageModule)
    },
    {
      path: 'uploaded',
      loadChildren: () => import('./uploaded/uploaded.module').then( m => m.UploadedPageModule)
    },
    {
      path: 'profile',
      loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}