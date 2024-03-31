import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CalzadoComponent } from './Productos/calzaprinci/calzado/calzado.component';
import { ManualidadesComponent } from './Productos/m_principal/manualidades/manualidades.component';
import { HomeComponent } from './Principal/home/home.component';
import { VestimentaComponent } from './Productos/p_vestiment/vestimenta/vestimenta.component';

export const routes: Routes = [
    { path: 'Home' ,component:HomeComponent},
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Vestimenta', component:VestimentaComponent},
    { path: 'Calzado', component:CalzadoComponent},
    { path: 'Accesorios', component:ManualidadesComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
