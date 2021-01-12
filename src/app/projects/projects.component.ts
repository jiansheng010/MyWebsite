import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
