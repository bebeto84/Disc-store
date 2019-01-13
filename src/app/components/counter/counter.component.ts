import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { faCompactDisc, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { DiscService } from 'src/app/services/disc.service';
import { Observable } from 'rxjs';
import { Disc } from 'src/app/models/disc';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {

  icon: IconDefinition = faCompactDisc;
  @Input() count: Number;

  constructor(
  ) { }

  ngOnInit() {
  }

}
