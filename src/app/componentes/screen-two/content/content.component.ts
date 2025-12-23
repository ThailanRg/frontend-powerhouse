import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/ApiService';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {

  constructor(
    private providerData: ApiService
  ) { }

  list = this.providerData.conversation

  ngOnInit(): void {

  }

}
