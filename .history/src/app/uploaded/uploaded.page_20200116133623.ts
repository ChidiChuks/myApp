import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/Http';

@Component({
  selector: 'app-uploaded',
  templateUrl: './uploaded.page.html',
  styleUrls: ['./uploaded.page.scss'],
})
export class UploadedPage implements OnInit {

  constructor(public http: Http) { }

  ngOnInit() {
  }

  fileChanged(event) {
    const files = event.target.files

    const data = new FormData()
    data.append('file', files[0])
    data.append('UPLOADCARE_STORE', '1')
    data.append('UPLOADCARE_PUB_KEY')

    this.http.post('https://upload.uploadcare.com/base/', data)
    .subscribe(event => {
      console.log(event)
    })
  }

}
