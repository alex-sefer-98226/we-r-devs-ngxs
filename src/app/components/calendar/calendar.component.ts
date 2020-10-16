import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {ShowWindow} from '../../store/modal.actions';
import {Observable} from 'rxjs';
import {ModalState} from '../../store/modal.state';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {


  currentDate: Date = new Date();
  selectedDate: null | Date = null;
  showDate: Date = this.currentDate;
  monthNames: Array<string> = [ // вроде как не нужно, благодаря пайпам
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  weekDayNames: Array<string> = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  DAYS_IN_WEEK = 7;

  Month = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  isLeapYear(year): boolean {
    return !(year % 4 || (!(year % 100) && year % 400));
  }

  isToday(day: Date): boolean {
    return this.areEqual(day, new Date());
  }

  areEqual(a: Date, b: Date): boolean {
    if (!a || !b) {
      return false;
    }

    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }

  getDaysInMonth(date): number {
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = this.DAYS_IN_MONTH[month];

    if (this.isLeapYear(year) && month === this.Month.February) {
      return daysInMonth + 1;
    } else {
      return daysInMonth;
    }
  }

  getMonthData(year, month): Array<Array<Date>> {
    const result: Array<Array<Date> | Array<undefined> | undefined> = [];
    const date = new Date(year, month);
    const daysInMonth = this.getDaysInMonth(date);
    const monthStartsOn = date.getDay();
    let day = 1;

    for (let i = 0; i < (daysInMonth + monthStartsOn) / this.DAYS_IN_WEEK; i++) {
      result[i] = [];

      for (let j = 0; j < this.DAYS_IN_WEEK; j++) {
        if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
          result[i][j] = undefined;
        } else {
          result[i][j] = new Date(year, month, day++);
        }
      }
    }

    return result;
  }

  constructor(private store: Store) {

  }

  open(date: Date): void {
    this.store.dispatch(new ShowWindow({show: true, date: this.selectedDate}));
  }

  ngOnInit(): void {

  }

  get year(): number {
    return this.showDate.getFullYear();
  }

  get month(): number {
    return this.showDate.getMonth();
  }

  handleNextMonthButtonClick(): void {
    this.showDate = new Date(this.showDate.getFullYear(), this.showDate.getMonth() + 1);
  }

  handlePrevMonthButtonClick(): void {
    this.showDate = new Date(this.showDate.getFullYear(), this.showDate.getMonth() - 1);
  }

  handleDayClick(date: Date | undefined): void {
    console.log(date);
    if (date === undefined) {
      console.log(undefined);
      return;
    }
    this.selectedDate = date;
    this.open(date);

  }
}

