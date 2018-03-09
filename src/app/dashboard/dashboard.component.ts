import { Component, OnInit } from '@angular/core';
import {Profissional} from '../profissionais/profissional.class';
import {ProfissionalService} from '../services/profissional.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  profissionais: Profissional[];
  constructor(private serviceProfissional : ProfissionalService) { }

  ngOnInit() {
    this.getProfissionais();
  }

  getProfissionais(){
    this.serviceProfissional.getProfissionais().subscribe(
      profissionais => this.profissionais = profissionais.slice(1,5)
    );
    
  }

}
