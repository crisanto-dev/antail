import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {
  questions = [
    {
      question: 'Deleniti ad consectetur perspiciatis eos vero sed accusantium? Saepe, animi?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia eaque asperiores tempore, possimus doloribus impedit cupiditate adipisci est explicabo deleniti ad consectetur perspiciatis eos vero sed accusantium? Saepe, animi.'
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia eaque asperiores tempore, possimus doloribus impedit cupiditate adipisci est explicabo deleniti ad consectetur perspiciatis eos vero sed accusantium? Saepe, animi.'
    },
    {
      question: 'Deleniti ad consectetur perspiciatis eos vero sed accusantium?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia eaque asperiores tempore, possimus doloribus impedit cupiditate adipisci est explicabo deleniti ad consectetur perspiciatis eos vero sed accusantium? Saepe, animi.'
    },
    {
      question: 'Asperiores tempore, possimus doloribus impedit cupiditate?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia eaque asperiores tempore, possimus doloribus impedit cupiditate adipisci est explicabo deleniti ad consectetur perspiciatis eos vero sed accusantium? Saepe, animi.'
    },
    {
      question: 'Ad consectetur perspiciatis eos vero sed accusantium?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia eaque asperiores tempore, possimus doloribus impedit cupiditate adipisci est explicabo deleniti ad consectetur perspiciatis eos vero sed accusantium? Saepe, animi.'
    },
    {
      question: 'Doloribus impedit cupiditate adipisci est explicabo deleniti ad ?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia eaque asperiores tempore, possimus doloribus impedit cupiditate adipisci est explicabo deleniti ad consectetur perspiciatis eos vero sed accusantium? Saepe, animi.'
    },
    {
      question: 'Deleniti ad consectetur perspiciatis eos vero sed accusantium?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia eaque asperiores tempore, possimus doloribus impedit cupiditate adipisci est explicabo deleniti ad consectetur perspiciatis eos vero sed accusantium? Saepe, animi.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
