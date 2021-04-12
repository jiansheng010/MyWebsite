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

    const hiItsMe = document.querySelector('.intro-top-first');
    const myName = document.querySelector('.my-name');
    const somethingIAm = document.querySelector('.something-i-am');

    const optionsRegularOnce = {
      loop: false,
      typeSpeed: 50,
      cursorColor: 'white',
    };

    const optionsRetractLoopWithoutCursor = {
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 50,
      typeColor: '#6D64A4',
      cursorColor: 'white',
    };

    const optionsRetractLoopWithCursor = {
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 50,
      typeColor: '#6D64A4',
    };

    const hiItsMeWriter = new Typewriter(hiItsMe, optionsRegularOnce);
    const myNameWriter = new Typewriter(
      myName,
      optionsRetractLoopWithoutCursor
    );
    const somethingIAmWriter = new Typewriter(
      somethingIAm,
      optionsRetractLoopWithCursor
    );

    hiItsMeWriter.type("Hi, it's me,").start();

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
