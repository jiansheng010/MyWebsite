import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#272727';
  }

  // tslint:disable-next-line:typedef
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
