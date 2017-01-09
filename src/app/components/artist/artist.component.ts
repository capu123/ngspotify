import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { SpotifyService } from '../../services/spotify.service';
import {Artist} from '../../../Artist';
import {Album} from '../../../Album';

@Component({
  selector: 'my-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {
    id:string;
    artist: Artist[];
    albums: Album[];
    

    constructor(private _spotifyService:SpotifyService, 
                private _route: ActivatedRoute,
                private _router: Router) {
    }

    ngOnInit(): void {
        this._route.params
            .map(params=>params['id'])
            .subscribe((id)=>{
                this._spotifyService.getArtist(id)
                    .subscribe(artist=>{
                        this.artist = artist;
                    })

                this._spotifyService.getAlbums(id)
                    .subscribe(albums=>{
                        this.albums = albums.items;
                    })
            })
    }

    onBack(): void {
        this._router.navigate(['/']);
    }
}