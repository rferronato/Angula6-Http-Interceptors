import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

/** Mock client-side authentication/authorization service */
@Injectable()
export class PostsService {

    heroesUrl = 'https://jsonplaceholdder.typicode.com/posts';  // URL to web api
    private handleError: HandleError;

    constructor(
        private http: HttpClient,
        httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('HeroesService');
    }

    /** GET heroes from the server */
    getHeroes(): Observable<any[]> {
        return this.http.get<any[]>(this.heroesUrl)
            .pipe(
                catchError(this.handleError('Busca de Herois', []))
            );
    }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/