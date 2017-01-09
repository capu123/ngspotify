import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { SpotifyService } from '../../services/spotify.service';
import {Artist} from '../../../Artist';
import {Album} from '../../../Album';

@Component({
  selector: 'my-album',
  templateUrl: './album.component.html'
})
export class AlbumComponent implements OnInit{
    id:string;
    album: Album;
    

    constructor(private _spotifyService:SpotifyService, 
                private _route: ActivatedRoute,
                private _router: Router) {
    }

    ngOnInit(): void {
        this._route.params
            .map(params=>params['id'])
            .subscribe((id)=>{
                this._spotifyService.getAlbum(id)
                    .subscribe(album=>{
                        this.album = album;
                    })
            })
    }
}