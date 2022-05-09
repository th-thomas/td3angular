import { Component, Input, OnDestroy } from '@angular/core';
import { IFiltres } from 'src/app/models/filtres.model';
import { Vol } from 'src/app/models/vol.model';
import { VolService } from '../../services/vol.service';
import { Subscription } from 'rxjs';
import { PassagerService } from 'src/app/services/passager.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-airfrance',
  templateUrl: './view-airfrance.component.html',
  styleUrls: ['./view-airfrance.component.scss']
})
export class ViewAirFranceComponent implements OnDestroy {

  vols: Vol[] = [];
  volSelectionne!: Vol;
  type!: string;

  private _subscriptions = new Subscription();

  constructor(
    private _volService: VolService,
    private _passagerService: PassagerService,
    private _activatedRoute: ActivatedRoute) { }

  /**
   * Réaction à la mise à jour des filtres
   * On souhaite récupérer les vols qui correspondent aux filtres passés en paramètre
   * en utilisant le service défini dans le constructeur
   * @param filtres récupérés depuis le composant enfant
   */
  onFiltresEvent(filtres: IFiltres): void {
    const code: string = filtres.aeroport.icao;
    const debut: number = filtres.debut.getTime() / 1000;
    const fin: number = filtres.fin.getTime() / 1000;
    if (this.type == "atterrissages") {
      const volsSubscription = this._volService.getVolsArrivee(code, debut, fin).subscribe((value) => {
        this.vols = value;
      });
      this._subscriptions.add(volsSubscription);
    }
    else {
      const volsSubscription = this._volService.getVolsDepart(code, debut, fin).subscribe((value) => {
        this.vols = value;
      });
      this._subscriptions.add(volsSubscription);
    }
  }

  selectVol(volSelectionne: Vol) {
    this.volSelectionne = volSelectionne;
    const passagersSubscription = this._passagerService.getPassagers(volSelectionne.icao).subscribe((value) => {
      volSelectionne.passagers = value;
    });
    this._subscriptions.add(passagersSubscription);
  }

  ngOnInit(): void {
    const routeSubscription = this._activatedRoute.data.subscribe((data$) => {
      this.type = data$['type'] ? data$['type'] : 'decollages';
      console.log(data$['type']);
    });
    this._subscriptions.add(routeSubscription);
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }
}
