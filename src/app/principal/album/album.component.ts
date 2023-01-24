import { Component, OnInit } from '@angular/core';
import { Albums } from '../../models/albums';
import { AlbumserviceService } from '../../services/albumservice.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  listado = new Array();
  
  //Consumir servicio
  constructor(private albumService : AlbumserviceService) { }

  //ejecutar el metodo
  ngOnInit(): void {
    
    //Recupera JSON devuelto por la API
    this.albumService.getAllAlbums().subscribe({
      next: (AllAlbums:Albums[]) =>this.listado= AllAlbums,
      error: (e) => console.error(e),
      complete :() => console.info("La API devolvio todos los registros")
    });



  }


}
