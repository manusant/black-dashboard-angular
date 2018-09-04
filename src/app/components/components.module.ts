import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {SearchModalComponent} from './search-modal/search-modal.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {ThemeManagerComponent} from './theme-manager/theme-manager.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NavbarComponent,
        SearchModalComponent,
        SidebarComponent,
        FooterComponent,
        ThemeManagerComponent
    ],
    exports: [
        NavbarComponent,
        SearchModalComponent,
        SidebarComponent,
        FooterComponent,
        ThemeManagerComponent
    ]
})
export class ComponentsModule {
}
