import {Component, OnChanges, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {ModalState} from '../../store/modal.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  @Select(ModalState.getStatus) isShowingModal$: Observable<boolean>;
  @Select(ModalState.getDate) selected$: Observable<Date>;


  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }


}
