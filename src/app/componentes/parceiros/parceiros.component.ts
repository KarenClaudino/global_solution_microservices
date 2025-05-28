import { Component } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  standalone: true,
  imports: [],
  templateUrl: './parceiros.component.html',
  styleUrl: './parceiros.component.css'
})
export class ParceirosComponent {

  titulo = 'Nossos Parceiros';
  

  logoIBM = 'assets/images/ibm.png';
  logoMedicos = 'assets/images/medicos.png';
  logoInpe = 'assets/images/inpe.png';
  logoDefesa = 'assets/images/defesa-civil.png';
}
