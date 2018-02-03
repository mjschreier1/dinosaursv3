import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Jobs } from '../models/Jobs'

@Injectable()
export class JobsService {
  jobsUrl: string = '../../assets/listing.json'

  constructor(public _http: HttpClient) { }

  getJobs(): Observable<Jobs> {
    return this._http.get<Jobs>(this.jobsUrl)
  }

}
