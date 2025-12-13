import { Injectable } from "@angular/core"


@Injectable({
    providedIn: 'root'
})
export class ProviderData {

    conversation: any[] = [
        {
            name: "bot",
            message: "olá, sou vox estou aqui para lhe apoiar",
        },
        {
            name: "user",
            message: "crie para mim uma instacia ec2",
        },
        {
            name: "bot",
            message: "processando sua solição",
        },
        {
            name: "bot",
            message: "solição enviada para aws",
        },
        {
            name: "bot",
            message: "instancia criada com sucesso",
        },
    ]

    addtinItem(item: any) {
        this.conversation.push(item)
    }
}
