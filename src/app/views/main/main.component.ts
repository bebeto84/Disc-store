import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { DiscService } from 'src/app/services/disc.service';
import { Disc } from 'src/app/models/disc';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

  discs$: Observable<Disc[]>;
  constructor(
    private discService: DiscService
    ) { }

  ngOnInit() {
    this.discs$ = this.discService.getDiscs();
  }

}
