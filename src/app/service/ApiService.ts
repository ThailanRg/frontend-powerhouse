import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Message } from "./response/MessageResponse"
import { TextGenerationRequest } from "./request/textgeneration/TextGenerationRequest"


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        private http:HttpClient
    ){}

    conversation: any[] = []

    addtinItem(item: any) {
        this.conversation.push(item)
    }

    textGeneration(data:TextGenerationRequest):Observable<Message>{
        console.log("request" + data)
        return this.http.post<Message>("http://localhost:8080/tg", data)
    }

}
