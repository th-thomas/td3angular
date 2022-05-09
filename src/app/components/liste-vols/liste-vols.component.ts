import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vol } from 'src/app/models/vol.model';

@Component({
  selector: 'app-liste-vols',
  templateUrl: './liste-vols.component.html',
  styleUrls: ['./liste-vols.component.scss']
})
export class ListeVolsComponent {
  @Input() vols!: Vol[];
  @Input() type!: string;

  @Output() volSelectionEvent = new EventEmitter<Vol>();

  onVolClick(vol: Vol) {
    this.volSelectionEvent.emit(vol);
  }
}
