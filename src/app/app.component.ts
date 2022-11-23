import { AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'launchPad';
  flag: string[] = ['false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false'];
  searchArray: any[] = [];
  subscribeApi: any;

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

//   search() {
//     let input = document.getElementById('commandbar-input-search')
//     input=input?.innerHTML.toLowerCase() ;
//     let x = document.getElementsByClassName('list-group-item');
      
//     for (let i = 0; i < x.length; i++) { 
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display="none";
//         }
//         else {
//             x[i].style.display="list-item";                 
//         }
//     }
//  }

// search(){
// const searchInput = document.getElementById("commandbar-input-search");
// const namesFromDOM: HTMLCollectionOf<HTMLLIElement> = document.getElementsByTagName('li');

// searchInput?.addEventListener("keyup", (event) => {
//   const  value  = event.target;
  
//   // get user search input converted to lowercase
//   const searchQuery = value;
//   console.log("test7",searchQuery)
  
//   // for (const nameElement of namesFromDOM) {
//   //     // store name text and convert to lowercase
//   //     let name = nameElement.textContent.toLowerCase();
      
//   //     // compare current name to search input
//   //     if (name.includes(searchQuery)) {
//   //         // found name matching search, display it
//   //         nameElement.style.display = "block";
//   //     } else {
//   //         // no match, don't display name
//   //         nameElement.style.display = "none";
//   //     }
//   // }
// }
// )

// }
// };


// unSubApiCall = () => {
//   if (this.subscribeApi != undefined) {
//     this.subscribeApi.unsubscribe();
    
//   }
// };

// search = (evt: any) => {
  
//   let input = (<HTMLInputElement>document.getElementById('commandbar-input-search'));
//   let filter = input?.value.toUpperCase();
//   //let ul = document.getElementById("myUL")?.innerText;
//   let li = document.getElementsByTagName('li') ;

//   for (let i = 0; i < li.length; i++) {
    
//     const a = li[i].getElementsByTagName("a")[0];
    
//     let txtValue = a?.textContent || a?.innerText;
//     if (txtValue?.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//     //console.log("test 8", a)
//   }
  

//       // console.log("test2", ul);
//       // console.log("test3", filter);
    
      
//        console.log("test4", li)
    
// }



}
