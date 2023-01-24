import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contactmanager-app',
  template: `
    <app-side-nav></app-side-nav>
  `,
  styles: [
  ]
})
export class ContactmanagerAppComponent implements OnInit {

  constructor(iconRegistery: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistery.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
  }

  ngOnInit(): void {
  }

}
