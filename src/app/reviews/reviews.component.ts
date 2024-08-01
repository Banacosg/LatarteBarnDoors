import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ReviewsService } from './reviews.service';
import { Review } from './reviews';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [NgFor],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
})
export class ReviewsComponent implements OnInit {
  container!: ViewContainerRef;
  reviews: Review[] = [];
  constructor(private reviewData: ReviewsService) {
    this.reviews = reviewData.getReviews();
  }

  ngOnInit(): void {}

  addDynamicComponent(el: Element, comment: string) {
    if (el.children.length < 1) {
      //If there is already a comment
      const para = document.createElement('p');
      para.innerText = comment;
      // const node = document.createTextNode(comment);
      // para.appendChild(node);
      el.appendChild(para);
    } else {
      el.innerHTML = '';
    }
  }

  toggleCommentButton(curButton: HTMLElement) {
    let imageStyle = curButton.style.backgroundImage;
    if (imageStyle === 'url("../../assets/Dropup arrow.png")') {
      curButton.style.backgroundImage =
        "url('../../assets/Dropdown arrow.png')";
    } else {
      curButton.style.backgroundImage = "url('../../assets/Dropup arrow.png')";
    }
  }
}
