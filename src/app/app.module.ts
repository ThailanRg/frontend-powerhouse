import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './componentes/screen-two/input/input.component';
import { ContentComponent } from './componentes/screen-two/content/content.component';
import { UserComponent } from './componentes/screen-two/content/user/user.component';
import { BotComponent } from './componentes/screen-two/content/bot/bot.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './componentes/screen-two/header/header.component';
import { ScreenTwoComponent } from './componentes/screen-two/screen-two.component';
import { ScreenOneComponent } from './componentes/screen-one/screen-one.component';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ContentComponent,
    UserComponent,
    BotComponent,
    HeaderComponent,
    ScreenTwoComponent,
    ScreenOneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
