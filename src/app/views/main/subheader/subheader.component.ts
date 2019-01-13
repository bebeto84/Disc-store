import { Component, OnInit } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {NewDiscComponent} from '../../../components/new-disc/new-disc.component';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit {

  // Inject overlay service
  constructor(private overlay: Overlay) { }

  ngOnInit() {
  }

  createDisc(ev: Event) {
    this.open();
  }

  open() {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
    // Returns an OverlayRef (which is a PortalHost)
    const overlayRef = this.overlay.create(new OverlayConfig({
      width: 400,
      /** The height of the overlay panel. If a number is provided, pixel units are assumed. */
      height: 600,
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    }));

    // Create ComponentPortal that can be attached to a PortalHost
    const filePreviewPortal = new ComponentPortal(NewDiscComponent);

    // Attach ComponentPortal to PortalHost
    overlayRef.attach(filePreviewPortal);

    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
  }
}
