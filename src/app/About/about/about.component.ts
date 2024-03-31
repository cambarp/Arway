import { Component } from '@angular/core';
import { HeaderComponent } from '../../Header__Footer/header/header.component';
import { FooterComponent } from '../../Header__Footer/footer/footer.component';
import { CAboutComponent } from '../cabout/c-about.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent,CAboutComponent,FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
