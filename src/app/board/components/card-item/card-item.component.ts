import { IUser } from './../../models/IUser';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICard } from'../../models/ICardList';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() card: ICard
  @Input() isDone: boolean
  @Output() removeCard = new EventEmitter<string>()
  @Output() editCard = new EventEmitter<string>()

  public isExpanded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleView() {
    this.isExpanded = !this.isExpanded;
  }

  removeItem(event?: Event) {
    this.removeCard.emit(this.card.id);
  }

  editItem(event?: Event) {
    this.editCard.emit(this.card.id);
  }

  assigneeFullName(user: IUser) {
    return `${user.firstName+' '+user.lastName}`;
  }
}
