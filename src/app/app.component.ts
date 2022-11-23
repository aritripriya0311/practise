import { AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'launchPad';
  searchedText: string = '';
  all: boolean = false;
  id: number = -1;

  buttons: string[] = [
    'Set up your CRM', 'Marketplace apps', 'Recommended for you', 'Generate more leads',
    'Engage with contacts', 'Manage your deals', 'Measure sales performance', 'Automate your work',
    'Admin Settings', 'Recents'
  ];

  ngOnInit(): void {
    this.all = true;
  }

  containerSelect(id: number) {
    this.all = false;
    this.id = id;
  }
  containerSelectAll() {
    this.all = true;
  }
  filterResults() {
    console.log(this.searchedText);
  }
}
