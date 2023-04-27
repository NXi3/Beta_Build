import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './app-routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ThemeModule } from "../settings/theme/theme.module";
import { ExtraOptions, PreloadAllModules, RouterModule } from "@angular/router";
import {ThemeLayoutModule} from "../settings/layout/layout.module";

const router: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, router),
    // THEME MODULES
    ThemeModule.forRoot(),
    ThemeLayoutModule.forRoot(),
    // FIREBASE MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
