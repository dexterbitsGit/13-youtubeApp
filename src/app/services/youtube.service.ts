import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  // https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyBczsC9nqZBQECiJYDXKM7aPvOUjEqbFww&playlistId=UU2ZEYYMMDt7mNOxKOzoQtqQ&maxResults=4

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apikey = 'AIzaSyBczsC9nqZBQECiJYDXKM7aPvOUjEqbFww';
  private playlist = 'UU2ZEYYMMDt7mNOxKOzoQtqQ';
  private nextPageToken = '';

  constructor(private http: HttpClient) {}

  getVideos() {
    const url = ` ${this.youtubeUrl}/playlistItems`;
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '4')
      .set('playlistId', this.playlist)
      .set('key', this.apikey);

    return this.http.get(url, { params });
  }
}
