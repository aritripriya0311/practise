import { AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'launchPad';
  buttons: string[] = [
    'Set up your CRM', 'Marketplace apps', 'Recommended for you', 'Generate more leads',
    'Engage with contacts', 'Manage your deals', 'Measure sales performance', 'Automate your work',
    'Admin Settings', 'Recents'
  ];
  flag: string[] = ['false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false'];

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.flag[i] = 'true'
    }
  }

  containerSelect(id: number) {
    this.flag = ['false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false']
    this.flag[id] = 'true';
  }
  containerSelectAll() {
    for (let i = 0; i < 10; i++) {
      this.flag[i] = 'true'
    }
  }

}
