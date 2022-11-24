import { OnInit } from '@angular/core';
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
        title: 'Import contacts', iconName: 'near_me'
      },
      {
        title: 'Connect your email', iconName: 'near_me'
      },
      {
        title: 'Add your first deal', iconName: 'near_me'
      },
      {
        title: ' Send your first email', iconName: 'near_me'
      },
      {
        title: 'Automate processes using workflow', iconName: 'near_me'
      },
      {
        title: 'Invite your team', iconName: 'near_me'
      },
    ],
    //tab2
    [
      {
        title: 'Accounting and invoicing', iconName: 'near_me'
      },
      {
        title: 'Data sync', iconName: 'near_me'
      },
      {
        title: 'Files and proposals', iconName: 'near_me'
      },
      {
        title: 'Collaboration', iconName: 'near_me'
      },
      {
        title: 'Customer support', iconName: 'near_me'
      },
      {
        title: 'Contacts,email, and calendar', iconName: 'near_me'
      },
      {
        title: 'Lead generation', iconName: 'near_me'
      },
      {
        title: 'More apps', iconName: 'near_me'
      },
    ],
    //tab3
    [
      {
        title: 'Import contacts', iconName: 'near_me'
      },
      {
        title: 'Create sales sequence', iconName: 'near_me'
      },
      {
        title: 'Build your deal pipeline', iconName: 'near_me'
      },
      {
        title: 'Create workflow', iconName: 'near_me'
      },
      {
        title: 'Invite your team', iconName: 'near_me'
      },
      {
        title: 'Connect your email and calendar', iconName: 'near_me'
      },
    ],
    //tab4
    [
      {
        title: 'Integrate webforms', iconName: 'near_me'
      },
      {
        title: 'Track your website', iconName: 'near_me'
      },
      {
        title: 'Import contacts', iconName: 'near_me'
      },
      {
        title: 'Connect your email and calendar', iconName: 'near_me'
      }
    ],
    //tab5
    [
      {
        title: 'Send Mail', iconName: 'near_me'
      },
      {
        title: 'Create sales sequence', iconName: 'near_me'
      },
      {
        title: 'Score your contatcs', iconName: 'near_me'
      },
      {
        title: 'Set up phone', iconName: 'near_me'
      },
      {
        title: 'Send SMS', iconName: 'near_me'
      },
      {
        title: 'Create sales activity', iconName: 'near_me'
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
        title: 'Set quotas for your team', iconName: 'near_me'
      }
    ],
    //tab7
    [
      {
        title: 'View sales dashboard', iconName: 'near_me'
      },
      {
        title: 'Create sales report', iconName: 'near_me'
      }
    ],
    //tab8
    [
      {
        title: 'Create work flow', iconName: 'near_me'
      },
      {
        title: 'Create auto-assignment rule', iconName: 'near_me'
      }
    ],
    //tab9
    [
      {
        title: 'Invite your team', iconName: 'near_me'
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
        title: 'How to manage my contacts', iconName: 'near_me'
      },
      {
        title: 'How to create sales sequence', iconName: 'near_me'
      },
      {
        title: 'How to manage my deal pipeline', iconName: 'near_me'
      },
      {
        title: 'How to manage users in added in my account', iconName: 'near_me'
      },
      {
        title: 'How to manage user roles and permissions', iconName: 'near_me'
      },
    ],
  ];

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
