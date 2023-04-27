import { ModuleWithProviders, NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { SharedModule } from "../shared/shared.module";
import { SidenavModule } from "../theme/layout/sidenav/sidenav.module";
import { ToolbarModule } from "../theme/layout/toolbar/toolbar.module";
import { FooterModule } from "../theme/layout/footer/footer.module";
import { ConfigPanelModule } from "../theme/components/config-panel/config-panel.module";
import { SidebarModule } from "../theme/components/sidebar/sidebar.module";
import { QuickpanelModule } from "../theme/layout/quickpanel/quickpanel.module";
import { LayoutModule } from "../theme/layout/layout.module";


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    SharedModule,
    LayoutModule,
    SidenavModule,
    ToolbarModule,
    FooterModule,
    ConfigPanelModule,
    SidebarModule,
    QuickpanelModule,
  ]
})
export class ThemeLayoutModule {
  static forRoot(): ModuleWithProviders<ThemeLayoutModule> {
    return {
      ngModule: ThemeLayoutModule,
      providers: []
    }
  }
}
