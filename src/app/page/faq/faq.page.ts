import { Component, OnInit } from '@angular/core';

import { initializeApp } from 'firebase/app';
import { collection, query, where, onSnapshot, getFirestore } from 'firebase/firestore';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  app = initializeApp(environment.firebase);
  db = getFirestore();
  faq: any;

  constructor() { }

  ngOnInit() {

    const q = query(collection(this.db, 'faq'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      this.faq = [];
      querySnapshot.forEach((doc) => {

        this.faq.push(doc.data());
        this.faq.push(doc.id);

      });

      console.log(this.faq);
    });

  }

}
