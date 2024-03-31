import { Component } from '@angular/core';
import { HeaderComponent } from '../../Header__Footer/header/header.component';
import { FooterComponent } from '../../Header__Footer/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { CuerpoComponent } from '../cuerpo/cuerpo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,CuerpoComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
