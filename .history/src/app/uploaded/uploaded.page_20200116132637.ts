import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/Http';

@Component({
  selector: 'app-uploaded',
  templateUrl: './uploaded.page.html',
  styleUrls: ['./uploaded.page.scss'],
})
export class UploadedPage implements OnInit {

  constructor(public http: ) { }

  ngOnInit() {
  }

  fileChanged(event) {
    const files = event.target.files
    console.log(files)
  }

}
