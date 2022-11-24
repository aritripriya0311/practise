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
  searchedText: string = '';
  all: boolean = false;
  id: number = -1;

  buttons: string[] = [
    'Set up your CRM', 'Marketplace apps', 'Recommended for you', 'Generate more leads',
    'Engage with contacts', 'Manage your deals', 'Measure sales performance', 'Automate your work',
    'Admin Settings', 'Recents'
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
    []
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

  }




}
