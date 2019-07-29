import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatetoyComponent } from './createtoy/createtoy.component';
import { ToygalleryComponent } from './toygallery/toygallery.component';
import { ToyinfoComponent } from './toyinfo/toyinfo.component';
import { PnfComponent } from './pnf/pnf.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ToyService} from './service/toy.service';
import {FileSelectDirective} from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    CreatetoyComponent,
    ToygalleryComponent,
    ToyinfoComponent,
    PnfComponent,
    FileSelectDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
  ],
  providers: [ToyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
