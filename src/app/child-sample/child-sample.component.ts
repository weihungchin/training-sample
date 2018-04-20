import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-child-sample',
  templateUrl: './child-sample.component.html',
  styleUrls: ['./child-sample.component.css']
})
export class ChildSampleComponent implements OnInit, OnChanges, OnDestroy {
  @Input('isClick') isClick: boolean;
  @Output() isChildClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    console.log('this is ngOnInit');
  }

  ngOnChanges() {
    console.log('onChange triggered');
    console.log(`from ngOnChanges`, this.isClick);
  }

  onClick() {
    console.log('from child sample');
    const outputString = 'Clicked';
    this.isChildClick.emit(outputString);
  }

  ngOnDestroy() {
    console.log('bye');
  }
}
