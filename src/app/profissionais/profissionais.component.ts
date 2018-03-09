import { Component, OnInit } from '@angular/core';

import { Profissional } from './profissional.class';
import {ProfissionalService} from '../services/profissional.service';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css']
})
export class ProfissionaisComponent implements OnInit {

  profissionais:Profissional[];
  profissional: Profissional;
  selectedProfissional:Profissional;

  constructor(private profissionalService: ProfissionalService) {
    //this.selectedProfissional = PROFISSIONAIS[Math.random() * 10];
   }


   getProfissionais(): void{
     this.profissionalService.getProfissionais()
     .subscribe(
       profissionais => this.profissionais = profissionais,
     );
   }

  ngOnInit() {
    this.getProfissionais();
  }

  onSelect(profissional: Profissional): void{
    this.selectedProfissional = profissional;
  }

  add(nameProf:string) :void {
    nameProf = nameProf.trim();
    if(!nameProf){ return;};
    this.profissionalService.addProfissional({ name : nameProf } as Profissional)
        .subscribe(profissional => {
          this.profissionais.push(profissional);
        });
  }

  delete(profissional: Profissional){
    this.profissionais = this.profissionais.filter(p => p !== profissional);
    this.profissionalService.deleteProfissional(profissional).subscribe();
  }

}
