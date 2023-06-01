import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Clinica } from "./clinica";
import { Observable } from "rxjs";

@Injectable()
export class ClinicaService {

    constructor(private http: HttpClient) { }

    private apiURL : string = 'http://localhost:8080/';

    listarClinicas() : Observable<Clinica[]> {
        
        return this.http.get<Clinica[]>(this.apiURL + "clinicas");
    }
}






    // @Autowired

    // Java
    // somar( int numero1 )
    
    // Angular
    // somar( numero1 int ) 