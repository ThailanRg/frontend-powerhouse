import { Component, Input, OnInit } from '@angular/core';
import { ProviderData } from 'src/app/service/ProviderData';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  newItem: string = "";

  constructor(
    private providerData: ProviderData
  ) { }

  ngOnInit(): void {

  }

  addItem() {
    if (!this.newItem.trim()) return;
    const object = { name: "user", message: this.newItem, }
    this.providerData.addtinItem(object);
    this.newItem = ""
  }

  requestMicrophonePermission() {

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(stream => {
        console.log('Permissão concedida', stream);

        // Se não for usar agora, libere o microfone
        stream.getTracks().forEach(track => track.stop());
      })
      .catch(error => {
        console.error('Permissão negada ou erro:', error);
      });
  }

  requestCameraPermission() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(stream => {
        console.log('Permissão concedida', stream);

        // Para a câmera se não for usar agora
        stream.getTracks().forEach(track => track.stop());
      })
      .catch(error => {
        console.error('Permissão negada ou erro:', error);
      });
  }

}
