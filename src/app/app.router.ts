import { RouterModule, Routes, PreloadAllModules, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes=[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent}
]
export const RouterComponent = RouterModule.forRoot(appRoutes,{enableTracing:false,preloadingStrategy:PreloadAllModules})
