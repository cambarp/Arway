import { Component } from '@angular/core';
import { HeaderComponent } from '../../../Header__Footer/header/header.component';
import { FooterComponent } from '../../../Header__Footer/footer/footer.component';
import { CManualidadesComponent } from '../cmanualidades/c-manualidades.component';

@Component({
  selector: 'app-manualidades',
  standalone: true,
  imports: [HeaderComponent,CManualidadesComponent,FooterComponent],
  templateUrl: './manualidades.component.html',
  styleUrl: './manualidades.component.css'
})
export class ManualidadesComponent {

}
