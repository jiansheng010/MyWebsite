import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  switchMode() {
    console.log('Test');
    if (this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor === 'white') {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#272727';
      document.getElementById('mat-toolbar-footer-color').style.backgroundColor = '#272727';
      document.getElementById('mat-toolbar-header-color').style.backgroundColor = '#272727';
      document.getElementById('flat-button-color-one').style.backgroundColor = '#272727';
      document.getElementById('flat-button-color-two').style.backgroundColor = '#272727';
      document.getElementById('flat-button-color-three').style.backgroundColor = '#272727';
      document.getElementById('flat-button-color-four').style.backgroundColor = '#272727';
      document.getElementById('intro').style.color = 'white';
      document.getElementById('flat-button-color-one').style.color = 'white';
      document.getElementById('flat-button-color-two').style.color = 'white';
      document.getElementById('flat-button-color-three').style.color = 'white';
      document.getElementById('flat-button-color-four').style.color = 'white';
    } else {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
      document.getElementById('mat-toolbar-footer-color').style.backgroundColor = 'white';
      document.getElementById('mat-toolbar-header-color').style.backgroundColor = 'white';
      document.getElementById('flat-button-color-one').style.backgroundColor = 'white';
      document.getElementById('flat-button-color-two').style.backgroundColor = 'white';
      document.getElementById('flat-button-color-three').style.backgroundColor = 'white';
      document.getElementById('flat-button-color-four').style.backgroundColor = 'white';
      document.getElementById('intro').style.color = '#272727';
      document.getElementById('flat-button-color-one').style.color = '#272727';
      document.getElementById('flat-button-color-two').style.color = '#272727';
      document.getElementById('flat-button-color-three').style.color = '#272727';
      document.getElementById('flat-button-color-four').style.color = '#272727';
    }
  }
}
