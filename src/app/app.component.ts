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

  placeholders = ['Welcome! Make the most of your CRM...', 'Search for "SlacK" ',
    'Anything you are looking for?', 'Try "web forms"', 'To talk to your contacts , try "set up phone"',
    'start with "add a deal"', 'Try "connect email"', 'Try "connect email"',
    'Want to add team members? Try "invite team"...', 'Try "connect email"',
    'Search "how to create workflows"'

  ];

  tabs: any[] = [
    //tab1
    [
      {
        title: 'Import contacts', iconName: 'account_circle'
      },
      {
        title: 'Connect your email', iconName: 'email'
      },
      {
        title: 'Add your first deal', iconName: 'currency_exchange'
      },
      {
        title: ' Send your first email', iconName: 'forward_to_inbox'
      },
      {
        title: 'Automate processes using workflow', iconName: 'lan'
      },
      {
        title: 'Invite your team', iconName: 'person_outline'
      },
    ],
    //tab2
    [
      {
        title: 'Accounting and invoicing', iconName: 'receipt_long'
      },
      {
        title: 'Data sync', iconName: 'near_me'
      },
      {
        title: 'Files and proposals', iconName: 'folder'
      },
      {
        title: 'Collaboration', iconName: 'group_add'
      },
      {
        title: 'Customer support', iconName: 'face'
      },
      {
        title: 'Contacts,email, and calendar', iconName: 'account_circle'
      },
      {
        title: 'Lead generation', iconName: 'account_box'
      },
      {
        title: 'More apps', iconName: 'extension'
      },
    ],
    //tab3
    [
      {
        title: 'Import contacts', iconName: 'account_circle'
      },
      {
        title: 'Create sales sequence', iconName: 'near_me'
      },
      {
        title: 'Build your deal pipeline', iconName: 'near_me'
      },
      {
        title: 'Create workflow', iconName: 'lan'
      },
      {
        title: 'Invite your team', iconName: 'people'
      },
      {
        title: 'Connect your email and calendar', iconName: 'email'
      },
    ],
    //tab4
    [
      {
        title: 'Integrate webforms', iconName: 'article'
      },
      {
        title: 'Track your website', iconName: 'work'
      },
      {
        title: 'Import contacts', iconName: 'account_circle'
      },
      {
        title: 'Connect your email and calendar', iconName: 'email'
      }
    ],
    //tab5
    [
      {
        title: 'Send email', iconName: 'forward_to_inbox'
      },
      {
        title: 'Create sales sequence', iconName: 'near_me'
      },
      {
        title: 'Score your contacts', iconName: 'near_me'
      },
      {
        title: 'Set up phone', iconName: 'wifi_calling'
      },
      {
        title: 'Send SMS', iconName: 'send_to_mobile'
      },
      {
        title: 'Create sales activity', iconName: 'content_paste'
      },
    ],
    //tab6
    [
      {
        title: 'Build your deal pipeline', iconName: 'near_me'
      },
      {
        title: 'Create sales quotes', iconName: 'near_me'
      },
      {
        title: 'Set quotas for your team', iconName: 'trending_up'
      }
    ],
    //tab7
    [
      {
        title: 'View sales dashboard', iconName: 'timeline'
      },
      {
        title: 'Create sales report', iconName: 'leaderboard'
      }
    ],
    //tab8
    [
      {
        title: 'Create work flow', iconName: 'play_circle'
      },
      {
        title: 'Create auto-assignment rule', iconName: 'near_me'
      }
    ],
    //tab9
    [
      {
        title: 'Invite your team', iconName: 'group'
      },
      {
        title: 'Manage roles and permissions', iconName: 'near_me'
      }
    ],
    //tab10
    [],
    //tab11
    [
      {
        title: 'How to manage my contacts', iconName: 'play_circle'
      },
      {
        title: 'How to create sales sequence', iconName: 'play_circle'
      },
      {
        title: 'How to manage my deal pipeline', iconName: 'play_circle'
      },
      {
        title: 'How to manage users in added in my account', iconName: 'play_circle'
      },
      {
        title: 'How to manage user roles and permissions', iconName: 'play_circle'
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
