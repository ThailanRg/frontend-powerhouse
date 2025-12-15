import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './componentes/input/input.component';
import { ContentComponent } from './componentes/content/content.component';
import { UserComponent } from './componentes/content/user/user.component';
import { BotComponent } from './componentes/content/bot/bot.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './componentes/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ContentComponent,
    UserComponent,
    BotComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
