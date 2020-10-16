import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {CloseWindow} from '../../store/modal.actions';
import {ModalState} from '../../store/modal.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Select(ModalState.getDate) selected$: Observable<Date>;

  day: Observable<number>|number;

  constructor(private store: Store) {
    this.day = this.store.select(state => state.getDay());
  }

  close(): void {
    this.store.dispatch(new CloseWindow({show: false, date: new Date()}));
  }

  ngOnInit(): void {
    console.log(this.selected$);

  }


}
