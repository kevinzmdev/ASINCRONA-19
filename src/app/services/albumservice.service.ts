import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Albums } from '../models/albums';
@Injectable({
  providedIn: 'root'
})
export class AlbumserviceService {

  //crear isntancia de HttpClient
    constructor(private http: HttpClient ) { }
  
  //Definir la url de la API
    apiUser = environment.apiURL + 'photos/';

  //metodos
    getAllAlbums():Observable<Albums[]>{

    return this.http.get<Albums[]>(this.apiUser);
    }
}
