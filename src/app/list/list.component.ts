import { Component, OnInit } from '@angular/core';
import contactList from '../shared/contactList.json'
import recent from '../shared/recentContacts.json'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
   data:Array<object>=[];
   recent:Array<object>=[];
  constructor() {
    this.data=contactList.data;
    this.recent=recent.data;
  }

  ngOnInit(): void {
    console.log(this.recent);
  }

}
