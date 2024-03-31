import { Component } from '@angular/core';
import { HeaderComponent } from '../../../Header__Footer/header/header.component';
import { FooterComponent } from '../../../Header__Footer/footer/footer.component';
import { CCalzadoComponent } from '../Ccalzado/c-calzado.component';

@Component({
  selector: 'app-calzado',
  standalone: true,
  imports: [HeaderComponent,CCalzadoComponent,FooterComponent],
  templateUrl: './calzado.component.html',
  styleUrl: './calzado.component.css'
})
export class CalzadoComponent {

}
