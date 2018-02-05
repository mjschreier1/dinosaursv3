import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  showPreview: boolean = false;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

  togglePreview(): void {
    this.showPreview === true ? this.showPreview = false : this.showPreview = true
  }

}
