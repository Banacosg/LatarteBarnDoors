import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  titleName!: string;

  constructor(@Inject(DOCUMENT) private _doc: Document) {}

  ngOnInit() {
    this.titleName = this._doc.title;
  }
}
