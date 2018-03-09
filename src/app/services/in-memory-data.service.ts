import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const profissionais = [
            {id: 11, name: 'David Benicá'},
            {id: 12, name: 'Raul Chequer'},
            {id: 13, name: 'Caito Mainier'},
            {id: 14, name: 'Daniel Furlan'},
            {id: 15, name: 'Leandro Ramos'},
            {id: 16, name: 'Juliano Enrico'},
            {id: 17, name: 'Renan da Towner'},
            {id: 18, name: 'Vice-consul de Honduras'},
            {id: 19, name: 'Rogerinho da van'},
            {id: 20, name: 'Maurílio dos Anjos'},
            {id: 21, name: 'Simone'}
        ]
    return {profissionais};
    }
}