import { MessagesRequest } from "./MessagesRequest";

export interface TextGenerationRequest{
    model:string,
    messages:MessagesRequest[]
}