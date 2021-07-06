import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() listComments: any;
  @Output() upadteLastComment = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onEmit(){
    this.upadteLastComment.emit(new Date());
  }

}
