export interface Modal {
  show: boolean;
  date: Date;
}

export enum ActionsType {
  SHOW_MODAL = '[MODAL] show',
  CLOSE_MODAL = '[MODAL] close'
}

export class ShowWindow{
  public static readonly type = ActionsType.SHOW_MODAL;
  constructor(public payload: Modal) {
  }
}

export class CloseWindow{
  public static readonly type = ActionsType.CLOSE_MODAL;
  constructor(public payload: Modal) {
  }
}
