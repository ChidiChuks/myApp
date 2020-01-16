import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.tabs.select('feed')
  }

  fileChanged(event) {
    const files = event.target.files
    console.log(files)
  }

}
