import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Disc } from 'src/app/models/disc';

@Component({
  selector: 'app-disc',
  templateUrl: './disc.component.html',
  styleUrls: ['./disc.component.scss']
})
export class DiscComponent implements OnInit {
  @Input() disc: Disc;
  constructor() { }

  ngOnInit() {
  }

}
