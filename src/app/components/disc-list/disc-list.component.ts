import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Disc } from 'src/app/models/disc';
import { DiscService } from 'src/app/services/disc.service';

@Component({
  selector: 'app-disc-list',
  templateUrl: './disc-list.component.html',
  styleUrls: ['./disc-list.component.scss']
})
export class DiscListComponent implements OnInit {

  @Input() discs: Disc[];
  constructor(
    ) { }

  ngOnInit() {
  }

}
