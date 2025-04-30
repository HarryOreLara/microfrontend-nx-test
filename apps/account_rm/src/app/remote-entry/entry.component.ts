import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-account-rm-entry',
  templateUrl: './entry.component.html',
  imports: [CommonModule, StyleClassModule, ButtonModule],
})
export class RemoteEntryComponent {}
