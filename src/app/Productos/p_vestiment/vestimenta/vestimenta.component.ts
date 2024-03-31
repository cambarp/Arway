import { Component } from '@angular/core';
import { HeaderComponent } from '../../../Header__Footer/header/header.component';
import { FooterComponent } from '../../../Header__Footer/footer/footer.component';
import { CVestimentaComponent } from '../cvestimenta/c-vestimenta.component';

@Component({
  selector: 'app-vestimenta',
  standalone: true,
  imports: [HeaderComponent,CVestimentaComponent,FooterComponent],
  templateUrl: './vestimenta.component.html',
  styleUrl: './vestimenta.component.css'
})
export class VestimentaComponent {

}
