import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MkhouseComponent } from './project/mkhouse/mkhouse.component';
import { CodeboxComponent } from './project/codebox/codebox.component';
import { CoffeeShopComponent } from './project/coffee-shop/coffee-shop.component';
import { CkComponent } from './project/ck/ck.component';
import { MommyoComponent } from './project/mommyo/mommyo.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectLayoutComponent } from './projects/project-layout/project-layout.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'projects', component: ProjectsComponent },
    {
        path: 'projects', component: ProjectLayoutComponent,
        children: [
            { path: '', redirectTo: 'mommyo', pathMatch: 'full' },
            { path: 'mkhouse', component: MkhouseComponent },
            { path: 'codebox', component: CodeboxComponent },
            { path: 'coffeeShop', component: CoffeeShopComponent },
            { path: 'mommyo', component: MommyoComponent },
            { path: 'ck', component: CkComponent },
        ]
    },
    { path: 'mkhouse', component: MkhouseComponent },
    { path: 'codebox', component: CodeboxComponent },
    { path: 'coffeeShop', component: CoffeeShopComponent },
    { path: 'mommyo', component: MommyoComponent },
    { path: 'ck', component: CkComponent },

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }