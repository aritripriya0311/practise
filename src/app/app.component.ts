import { OnInit } from '@angular/core';
import { Component, HostListener } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

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
  placeholderName: string = '';

  buttons: string[] = [
    'Set up your CRM', 'Marketplace apps', 'Recommended for you', 'Generate more leads',
    'Engage with contacts', 'Manage your deals', 'Measure sales performance', 'Automate your work',
    'Admin Settings', 'Recents', 'Help center'
  ];

  placeholders = ['Welcome! Make the most of your CRM...', 'Search for "files" ',
    'Anything you are looking for?', 'Try "web forms"', 'To talk to your contacts , try "set up phone"',
    'Start with "add a deal"', 'Try "connect email"', 'Try "connect email"',
    'Want to add team members? Try "invite team"...', 'Try "connect email"',
    'Search "how to create workflows"'
  ];

  tabs: any[] = [
    //tab1
    [
      {
        title: 'Import contacts', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Connect your email', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Add your first deal', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: ' Send your first email', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Automate processes using workflow', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Invite your team', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Get the mobile app', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: '->'
      },
    ],
    //tab2
    [
      {
        title: 'Accounting and invoicing', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Data sync', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Files and proposals', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Collaboration', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Customer support', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Contacts,email, and calendar', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Lead generation', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'More apps', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
    ],
    //tab3
    [
      {
        title: 'Import contacts', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: 'Ctrl+I'
      },
      {
        title: 'Create sales sequence', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: 'Ctrl+S'
      },
      {
        title: 'Build your deal pipeline', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: 'Ctrl+D'
      },
      {
        title: 'Create workflow', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: 'Ctrl+H'
      },
      {
        title: 'Invite your team', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: 'Ctrl+U'
      },
      {
        title: 'Connect your email and calendar', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: 'Ctrl+E'
      },
    ],
    //tab4
    [
      {
        title: 'Integrate webforms', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Track your website', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Import contacts', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: 'Ctrl+I'
      },
      {
        title: 'Connect your email and calendar', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: 'Ctrl+E'
      }
    ],
    //tab5
    [
      {
        title: 'Send Mail', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Create sales sequence', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: 'Ctrl+S'
      },
      {
        title: 'Score your contacts', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Set up phone', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Send SMS', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Create sales activity', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
    ],
    //tab6
    [
      {
        title: 'Build your deal pipeline', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: 'Ctrl+D'
      },
      {
        title: 'Create sales quotes', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Set quotas for your team', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      }
    ],
    //tab7
    [
      {
        title: 'View sales dashboard', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Create sales report', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      }
    ],
    //tab8
    [
      {
        title: 'Create work flow', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: 'Ctrl+H'
      },
      {
        title: 'Create auto-assignment rule', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      }
    ],
    //tab9
    [
      {
        title: 'Invite your team', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: 'Ctrl+U'
      },
      {
        title: 'Manage roles and permissions', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      }
    ],
    //tab10
    [
      {
        title: 'links', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      }
    ],
    //tab11
    [
      {
        title: 'How to manage my contacts', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'How to create sales sequence', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'How to manage my deal pipeline', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'How to manage users in added in my account', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'How to manage user roles and permissions', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
    ],
  ];

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(e: any) {
    if((e.ctrlKey || e.metaKey) && e.keyCode == 75) {
      e.preventDefault();
      window.location.href="https://www.udemy.com/course/advanced-javascript-concepts/";
      console.log("ctrl k")
    }
    if((e.ctrlKey || e.metaKey) && e.keyCode == 73) {
      window.location.href="https://www.udemy.com/course/advanced-javascript-concepts/";
      console.log("ctrl i")
    }
    if((e.ctrlKey || e.metaKey) && e.keyCode == 69) {
      window.location.href="https://www.udemy.com/course/advanced-javascript-concepts/";
      console.log("ctrl e")
    }
    if((e.ctrlKey || e.metaKey) && e.keyCode == 83) {
      window.location.href="https://www.udemy.com/course/advanced-javascript-concepts/";
      console.log("ctrl s")
    }
    if((e.ctrlKey || e.metaKey) && e.keyCode == 68) {
      window.location.href="https://www.udemy.com/course/advanced-javascript-concepts/";
      console.log("ctrl d")
    }
    if((e.ctrlKey || e.metaKey) && e.keyCode == 72) {
      window.location.href="https://www.udemy.com/course/advanced-javascript-concepts/";
      console.log("ctrl h")
    }
    if((e.ctrlKey || e.metaKey) && e.keyCode == 85) {
      window.location.href="https://www.udemy.com/course/advanced-javascript-concepts/";
      console.log("ctrl u")
    }
  }

  ngOnInit(): void {
    this.all = true;
    this.placeholderName = 'Try "connect email"';
  }

  containerSelect(id: number) {
    this.all = false;
    this.id = id;
    this.placeholderName = this.placeholders[id];
  }
  containerSelectAll() {
    this.all = true;
    this.placeholderName = 'Try "connect email"';
  }


  

}
