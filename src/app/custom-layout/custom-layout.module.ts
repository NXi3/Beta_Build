import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../settings/theme/layout/layout.module';
import { CustomLayoutComponent } from './custom-layout.component';
import { SidenavModule } from '../../settings/theme/layout/sidenav/sidenav.module';
import { ToolbarModule } from '../../settings/theme/layout/toolbar/toolbar.module';
import { FooterModule } from '../../settings/theme/layout/footer/footer.module';
import { ConfigPanelModule } from '../../settings/theme/components/config-panel/config-panel.module';
import { SidebarModule } from '../../settings/theme/components/sidebar/sidebar.module';
import { QuickpanelModule } from '../../settings/theme/layout/quickpanel/quickpanel.module';


@NgModule({
  declarations: [CustomLayoutComponent],
  imports: [
    CommonModule,
    LayoutModule,
    SidenavModule,
    ToolbarModule,
    FooterModule,
    ConfigPanelModule,
    SidebarModule,
    QuickpanelModule
  ]
})
export class CustomLayoutModule {
}
