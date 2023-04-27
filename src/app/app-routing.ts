import { Route } from "@angular/router";
import { LayoutComponent } from "../settings/theme/layout/layout.component";

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: '' }, // PAGE NOT FOUND
  // PUBLIC ROUTING
  { path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./public/home/home.module').then(m => m.HomeModule) },
    ]
  },
  // AUTH ROUTING
  { path: '', component: LayoutComponent, children: [] },
  // AUTHENTICATED ROUTING
  { path: '', component: LayoutComponent, children: []}
];
