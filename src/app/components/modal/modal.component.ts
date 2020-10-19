import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {CloseWindow} from '../../store/modal.actions';
import {Observable} from 'rxjs';
import {ModalState} from '../../store/modal.state';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Select(ModalState.getDate) selected$: Observable<Date>;


  constructor(private store: Store) {
  }

  close(): void {
    this.store.dispatch(new CloseWindow({show: false, date: new Date()}));
  }

  ngOnInit(): void {

  }


}
