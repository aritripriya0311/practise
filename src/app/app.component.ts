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
        title: 'Import contacts', iconName: 'account_circle', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Connect your email', iconName: 'email', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Add your first deal', iconName: 'currency_exchange', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: ' Send your first email', iconName: 'forward_to_inbox', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Automate processes using workflow', iconName: 'lan', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Invite your team', iconName: 'person_outline', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Get the mobile app', iconName: 'stay_current_portrait', url: 'https://satisfic.com/', hotKey: '->'
      },
    ],
    //tab2
    [
      {
        title: 'Accounting and invoicing', iconName: 'receipt_long', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Data sync', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Files and proposals', iconName: 'folder', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Collaboration', iconName: 'group_add', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Customer support', iconName: 'face_6', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Contacts,email, and calendar', iconName: 'account_circle', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Lead generation', iconName: 'account_box', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'More apps', iconName: 'extension', url: 'https://satisfic.com/', hotKey: ''
      },
    ],
    //tab3
    [
      {
        title: 'Import contacts', iconName: 'account_circle', url: 'https://satisfic.com/', hotKey: 'Ctrl+I'
      },
      {
        title: 'Create sales sequence', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: 'Ctrl+S'
      },
      {
        title: 'Build your deal pipeline', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: 'Ctrl+D'
      },
      {
        title: 'Create workflow', iconName: 'lan', url: 'https://satisfic.com/', hotKey: 'Ctrl+H'
      },
      {
        title: 'Invite your team', iconName: 'people', url: 'https://satisfic.com/', hotKey: 'Ctrl+U'
      },
      {
        title: 'Connect your email and calendar', iconName: 'email', url: 'https://satisfic.com/', hotKey: 'Ctrl+E'
      },
    ],
    //tab4
    [
      {
        title: 'Integrate webforms', iconName: 'article', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Track your website', iconName: 'work', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Import contacts', iconName: 'account_circle', url: 'https://satisfic.com/', hotKey: 'Ctrl+I'
      },
      {
        title: 'Connect your email and calendar', iconName: 'email', url: 'https://satisfic.com/', hotKey: 'Ctrl+E'
      }
    ],
    //tab5
    [
      {
        title: 'Send Mail', iconName: 'forward_to_inbox', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Create sales sequence', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: 'Ctrl+S'
      },
      {
        title: 'Score your contacts', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Set up phone', iconName: 'wifi_calling', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Send SMS', iconName: 'send_to_mobile', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Create sales activity', iconName: 'content_paste', url: 'https://satisfic.com/', hotKey: ''
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
        title: 'Set quotas for your team', iconName: 'trending_up', url: 'https://satisfic.com/', hotKey: ''
      }
    ],
    //tab7
    [
      {
        title: 'View sales dashboard', iconName: 'timeline', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'Create sales report', iconName: 'leaderboard', url: 'https://satisfic.com/', hotKey: ''
      }
    ],
    //tab8
    [
      {
        title: 'Create work flow', iconName: 'play_circle', url: 'https://satisfic.com/', hotKey: 'Ctrl+H'
      },
      {
        title: 'Create auto-assignment rule', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      }
    ],
    //tab9
    [
      {
        title: 'Invite your team', iconName: 'group', url: 'https://satisfic.com/', hotKey: 'Ctrl+U'
      },
      {
        title: 'Manage roles and permissions', iconName: 'near_me', url: 'https://satisfic.com/', hotKey: ''
      }
    ],
    //tab10
    [
      {
        title: 'links', iconName: 'insert_link', url: 'https://satisfic.com/', hotKey: ''
      }
    ],
    //tab11
    [
      {
        title: 'How to manage my contacts', iconName: 'play_circle', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'How to create sales sequence', iconName: 'play_circle', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'How to manage my deal pipeline', iconName: 'play_circle', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'How to manage users in added in my account', iconName: 'play_circle', url: 'https://satisfic.com/', hotKey: ''
      },
      {
        title: 'How to manage user roles and permissions', iconName: 'play_circle', url: 'https://satisfic.com/', hotKey: ''
      },
    ],
  ];

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(e: any) {
    if((e.ctrlKey || e.metaKey) && e.keyCode == 75) {
      e.preventDefault();
      window.location.href="https://satisfic.com/";
      //console.log("ctrl k")
    }
    if((e.ctrlKey || e.metaKey) && e.keyCode == 73) {
      e.preventDefault();
      window.location.href="https://satisfic.com/";
      //console.log("ctrl i")
    }
    if((e.ctrlKey || e.metaKey) && e.keyCode == 69) {
      e.preventDefault();
      window.location.href="https://satisfic.com/";
      //console.log("ctrl e")
    }
    if((e.ctrlKey || e.metaKey) && e.keyCode == 83) {
      e.preventDefault();
      window.location.href="https://satisfic.com/";
      //console.log("ctrl s")
    }
    if((e.ctrlKey || e.metaKey) && e.keyCode == 68) {
      e.preventDefault();
      window.location.href="https://satisfic.com/";
      //console.log("ctrl d")
    }
    if((e.ctrlKey || e.metaKey) && e.keyCode == 72) {
      e.preventDefault();
      window.location.href="https://satisfic.com/";
      //console.log("ctrl h")
    }
    if((e.ctrlKey || e.metaKey) && e.keyCode == 85) {
      e.preventDefault();
      window.location.href="https://satisfic.com/";
      //console.log("ctrl u")
    }
    if(e.keyCode == 39) {
      e.preventDefault();
      window.location.href="https://satisfic.com/";
      //console.log("->")
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
