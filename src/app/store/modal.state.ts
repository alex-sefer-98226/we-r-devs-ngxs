import {Action, Selector, State, StateContext} from '@ngxs/store';
import {CloseWindow, ShowWindow} from './modal.actions';

export interface ModalStateModel {
  show: boolean;
  date: Date;
}

@State<ModalStateModel>({
  name: 'show',
  defaults: {
    show: false,
    date: new Date()
  }
})

export class ModalState {
  show: boolean;
  date: Date;

  @Selector()
  static getStatus(state: ModalStateModel): boolean {
    return state.show;
  }

  @Selector()
  static getDate(state: ModalStateModel): Date {
    return state.date;
  }

  @Action(CloseWindow)
  closeModal({getState, patchState}: StateContext<ModalStateModel>, {payload}: CloseWindow): void {
    patchState({
      ...payload
    });
  }

  @Action(ShowWindow)
  showModal({getState, patchState}: StateContext<ModalStateModel>, {payload}: ShowWindow): void {
    const state = getState();
    patchState({
      ...payload
    });
  }

}
