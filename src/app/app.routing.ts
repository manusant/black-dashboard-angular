import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {IconsComponent} from "./icons/icons.component";
import {MapComponent} from "./map/map.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {RtlComponent} from "./rtl/rtl.component";
import {TablesComponent} from "./tables/tables.component";
import {TypographyComponent} from "./typography/typography.component";
import {UserComponent} from "./user/user.component";

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'icons',
        component: IconsComponent,
    },
    {
        path: 'map',
        component: MapComponent,
    },
    {
        path: 'notifications',
        component: NotificationsComponent,
    },
    {
        path: 'rtl',
        component: RtlComponent,
    },
    {
        path: 'tables',
        component: TablesComponent,
    },
    {
        path: 'typography',
        component: TypographyComponent,
    },
    {
        path: 'user',
        component: UserComponent,
    },
    {
        path: '*',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [],
})
export class AppRoutingModule {
}