import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DealsService {
  constructor(private db: AngularFireDatabase) {
  }

  addDeal(listPath, description: String, imageUrl: String, place: String, title: String) {
    this.db.list(listPath).push({
      description: description,
      imageUrl: imageUrl,
      place: place,
      title: title
    });
  }

  getDeals(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  deleteDeal(listPath, key: String) {
    this.db.list(listPath).remove(key);
  }
}
