import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  providers: []
})
export class QuestionsComponent implements OnInit {

  description: String;
  title: String;
  imageURL: String;
  place: String;

  level: string;
  levels: string[];
  questions: Observable<any[]>;
  a: number[];

  constructor(private db: AngularFireDatabase) {
    this.level = '1'; // Default
    this.levels = [];

    // Load questions
    this.loadQuestions();

    // Get levels
    this.db.list('levels').snapshotChanges(['child_added'])
      .subscribe(actions => {
        actions.forEach(action => {
          if (this.levels.indexOf(action.key) == -1) {
            this.levels.push(action.key);
          }
          // Save Level Count
          this.db.object('level_info/count').set(Math.max(...this.levels.map(Number)));
        });
      });
  }

  loadQuestions() {
    // Use snapshotChanges().map() to store the key
    this.questions = this.getQuestionList().snapshotChanges().map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
    });
  }

  addItem() {
    this.getQuestionList().push({
      title: this.title,
      description: this.description,
      imageURL: this.imageURL,
      place: this.place
    });
  }

  updateItem(key: string, title: string, description: string, place: string, imageUrl: string) {
    this.getQuestionList().update(key, {
      title: title,
      description: description,
      place: place,
      imageUrl: imageUrl
    });
  }

  deleteItem(key: string) {
    this.getQuestionList().remove(key);
  }

  deleteEverything() {
    this.getQuestionList().remove();
  }


  getQuestionList() {
    return this.db.list('deals');
  }

  addNewLevel() {
    let newNum = 1;
    while (this.levels.indexOf(newNum.toString()) > -1) {
      newNum++;
    }
    this.levels.push(newNum.toString());
    this.level = newNum.toString();
    this.loadQuestions();
  }

  addDefaultDeals() {
    this.getQuestionList().push(
      {
        description: 'You will never get a discount like this!',
        imageUrl: 'https://livekindlyproduction-8u6efaq1lwo6x9a.stackpathdns.com/wp-content/uploads/2017/08/pizza-vegan-1280x640.jpg',
        place: 'CrazyHut',
        title: 'Some Pizza'
      }
    );
    this.getQuestionList().push(
      {
        'description': 'Clothes of your dreams',
        'imageUrl': 'https://www.dhresource.com/0x0s/f2-albu-g5-M00-C1-99-rBVaJFhozYiATXqgAAH1iciKmqo369.jpg/2017-spring-kids-birthday-baby-party-wear.jpg',
        'place': 'Odel',
        'title': 'Party frocks'
      }
    );
    this.getQuestionList().push(
      {
        'description': 'You will never get a discount like this!',
        'imageUrl': 'https://livekindlyproduction-8u6efaq1lwo6x9a.stackpathdns.com/wp-content/uploads/2017/08/pizza-vegan-1280x640.jpg',
        'place': 'CrazyHut',
        'title': 'Some Pizza'
      }
    );
    this.getQuestionList().push(
      {
        'description': 'Black and Navy Blue Chiffon Printed Maxi Skirt and Deep Cut Top',
        'imageUrl': 'https://promolk.blob.core.windows.net/deals/promo.lk-deals-6bac3202c8384801bd198246ea12284e.jpg',
        'place': 'Zigzag.lk',
        'title': 'Maxi Skirt and Deep Cut Top'
      }
    );
    this.getQuestionList().push(
      {
        'description': '25% Off on Selected Daily Essentials & Household Items',
        'imageUrl': 'http://discount365.lk/wp-content/uploads/2018/06/arpico-discount-and-offers-1024x1024.jpg',
        'place': 'Arpico Supercentre',
        'title': 'Daily Essentials & Household Items'
      }
    );
    this.getQuestionList().push(
      {
        'description': '50% off – Cotton Collection Plus',
        'imageUrl': 'http://discount365.lk/wp-content/uploads/2018/06/cotton-collection-plus-50-discount-1024x1024.jpg',
        'place': 'Cotton Collection ',
        'title': '50% off'
      }
    );
    this.getQuestionList().push(
      {
        'description': '50% off – SHORES OF EUROPE',
        'imageUrl': 'http://discount365.lk/wp-content/uploads/2018/06/travel-offer-discount365.lk_-796x1024.jpg',
        'place': 'Jetwing Travels',
        'title': 'SHORES OF EUROPE'
      }
    );
    this.getQuestionList().push(
      {
        'description': 'Fly swiftly and comfortably between Colombo and Hambantota on our scheduled flights and enjoy a 25% discount valid upto 30th June 2018.',
        'imageUrl': 'http://discount365.lk/wp-content/uploads/2018/05/fly-hambantota-cinnaman-air-discount365-1024x532.jpg',
        'place': 'Cinnamon Air',
        'title': '25% off – Fly to Hambantota'
      }
    );
    this.getQuestionList().push(
      {
        'description': 'NDB Credit Cards 30% Savings on food on Cafe Bagatalle Dine Now',
        'imageUrl': 'http://discount365.lk/wp-content/uploads/2018/05/Cafe-Bagatalle_Discount365_Offers_Discounts_Promotions_Deals_Colombo_Sri-Lanka-1024x863.jpg',
        'place': 'Cafe Bagatalle',
        'title': '30% Savings on food'
      }
    );
    this.getQuestionList().push(
      {
        'description': 'Commercial Bank of Ceylon PLC Up to 40% Discount For Credit & Debit cards Vehicle Tyres',
        'imageUrl': 'http://discount365.lk/wp-content/uploads/2018/02/Commercial-Bank-of-Ceylon-PLC_Discount365_Offers_Discounts_Promotions_Deals_Colombo_Sri-Lanka-1024x535.jpg',
        'place': 'Commercial Bank Credit & Debit',
        'title': '40% Discount For Vehicle Tyres'
      }
    );
  }

  ngOnInit() {
  }

}
