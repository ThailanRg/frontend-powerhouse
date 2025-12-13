import { Component, OnInit } from '@angular/core';
import { ProviderData } from 'src/app/service/ProviderData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {

  constructor(
    private providerData: ProviderData
  ) { }

  list = this.providerData.conversation

  ngOnInit(): void {

  }

}
