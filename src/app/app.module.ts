import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { GreetingComponent } from './shared/greeting/greeting.component';
import { MessageFormComponent } from './shared/message-form/message-form.component';
import { SkillsModule } from './modules/skills/skills.module';

@NgModule({
    declarations: [AppComponent, GreetingComponent, MessageFormComponent],
    imports: [BrowserModule, FormsModule, SkillsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}