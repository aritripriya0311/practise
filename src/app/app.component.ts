import { AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'launchPad';
  flag: string[] = ['false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false'];

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.flag[i] = 'true'
    }
  }

  containerSelect(id: number) {
    this.flag = ['false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false']
    this.flag[id] = 'true';
    console.log(this.flag);
  }
  containerSelectAll() {
    for (let i = 0; i < 10; i++) {
      this.flag[i] = 'true'
    }
  }

}
