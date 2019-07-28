import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.css']
})
export class SuccessModalComponent implements OnInit {
  @Input() public modalHeaderText: string;
  @Input() public modalBodyText: string;
  @Input() public okButtonText: string;
  @Output() public redirectOnOk = new EventEmitter(); //  emit an event from a child to a parent component

  constructor() { }

  ngOnInit() {
  }

  emmitEvent() {
    this.redirectOnOk.emit();
  }

}
