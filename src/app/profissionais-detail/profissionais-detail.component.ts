import { Component, OnInit, Input } from '@angular/core';
import { Profissional } from '../profissionais/profissional.class';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { ProfissionalService } from '../services/profissional.service';

@Component({
  selector: 'app-profissionais-detail',
  templateUrl: './profissionais-detail.component.html',
  styleUrls: ['./profissionais-detail.component.css']
})
export class ProfissionaisDetailComponent implements OnInit {
  @Input() profissional : Profissional;

  constructor(private route: ActivatedRoute,
              private serviceProfissional: ProfissionalService,
              private location : Location) { }

  ngOnInit() {
    this.getProfissional();
  }

  getProfissional(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.serviceProfissional.getProfissional(id).
      subscribe(profissional=> this.profissional = profissional);
  }

  goBack(): void{
    this.location.back();
  }

  save(): void{
    this.serviceProfissional.updateProfissional(this.profissional)
    .subscribe(() => this.goBack());
  }

}
