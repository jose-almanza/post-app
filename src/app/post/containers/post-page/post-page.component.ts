import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../store/post.model';
import { PostService } from '../../store/post.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private postService: PostService) {}


  ngOnInit() {    
    this.postService.loadPost();
    this.posts$ = this.postService.getAllPosts();
  }

}
