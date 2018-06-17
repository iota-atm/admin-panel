import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class DealsService {
  constructor(private db: AngularFireDatabase) {
  }

  addDeals(description: String, imageUrl: String, place: String, title: String) {
    this.db.list('deals').push({
      description: description,
      imageUrl: imageUrl,
      place: place,
      title: title
    });
  }


}
