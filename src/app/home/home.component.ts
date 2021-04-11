// tslint:disable:typedef
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Typewriter from '../../../node_modules/t-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#272727';

    const myName = document.querySelector('.my-name');
    const somethingIAm = document.querySelector('.something-i-am');

    const options = {
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 50,
      typeColor: '#6D64A4',
      cursorColor: 'white',
    };

    const myNameWriter = new Typewriter(myName, options);
    const somethingIAmWriter = new Typewriter(somethingIAm, options);

    myNameWriter.strings(3000, 'Jian Sheng Teoh', '张 建 盛').start();

    somethingIAmWriter
      .strings(
        3000,
        'software engineer',
        'full stack web developer',
        'food lover',
        'CS enthusiast'
      )
      .start();
  }

  public setTitle() {
    this.titleService.setTitle('Home - JS Teoh');
  }
}
