import { Component, OnInit } from '@angular/core';

import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import {ToyService} from '../service/toy.service';

const URL = 'http://localhost:4000/toys/upload';


@Component({
  selector: 'app-createtoy',
  templateUrl: './createtoy.component.html',
  styleUrls: ['./createtoy.component.css']
})
export class CreatetoyComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

  constructor(private toy: ToyService) { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
    };
  }

  onSubmit(data: any) {
    console.log(data);

    this.toy.createToy(data).subscribe((res) => {
      alert('Data uploaded successfully');
    }, (err) => {
      console.log(err);
    });
  }

}
