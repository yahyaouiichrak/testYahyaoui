import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postList = [
    { id: '1', titre: 'Premier post', contenu: 'détails premier post' },
    { id: '2', titre: 'deuxieme post', contenu: 'détails deuxième post' },
    { id: '3', titre: 'troisieme post', contenu: 'détails troisième post' },
    { id: '4', titre: 'quaterieme post', contenu: 'détails troisième post' },
  ];

  getPosts() {
    return this.postList;
  }
}
