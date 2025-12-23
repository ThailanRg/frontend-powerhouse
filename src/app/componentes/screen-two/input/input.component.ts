import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/ApiService';
import { TextGenerationRequest } from 'src/app/service/request/textgeneration/TextGenerationRequest';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  newItem: string = "";

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {

  }

  addItem() {
    if (!this.newItem.trim()) return;
    const object = { name: "user", message: this.newItem, }
    this.apiService.addtinItem(object);
    this.requestTextGeneration(this.newItem)
    this.newItem = ""
  }

  requestTextGeneration(prompt: string) {
    console.log("recebemos esse texto: " + prompt)
    const request: TextGenerationRequest = {
      model: "gpt-5-nano",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    }
    this.apiService.textGeneration(request).subscribe( (data) => { 
        const myObject = { name: "user", message: data.message} 
        this.apiService.addtinItem(myObject)
      }
    )
  }

  requestMicrophonePermission() {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(stream => {
        console.log('Permissão concedida', stream);
        stream.getTracks().forEach(track => track.stop());
      })
      .catch(error => {
        console.error('Permissão negada ou erro:', error);
      });
  }

  requestCameraPermission() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(stream => { console.log('Permissão concedida', stream); stream.getTracks().forEach(track => track.stop()); })
      .catch(error => {
        console.error('Permissão negada ou erro:', error);
      });
  }

}
