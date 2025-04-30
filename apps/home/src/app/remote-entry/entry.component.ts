import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';

@Component({
  imports: [CommonModule, StyleClassModule, ButtonModule],
  selector: 'app-home-entry',
  templateUrl: './entry.component.html',
})
export class RemoteEntryComponent {}
