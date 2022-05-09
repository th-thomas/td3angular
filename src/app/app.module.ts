import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltresComponent } from './components/filtres/filtres.component';
import { ListePassagersComponent } from './components/liste-passagers/liste-passagers.component';
import { ListeVolsComponent } from './components/liste-vols/liste-vols.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ViewAirFranceComponent } from './components/view-airfrance/view-airfrance.component';
import { ClasseVolDirective } from './classe-vol.directive';
import { ClasseBagageWarningDirective } from './classe-bagage-warning.directive';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatBadgeModule} from '@angular/material/badge'; 

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    FiltresComponent,
    ListeVolsComponent,
    ToolbarComponent,
    ListePassagersComponent,
    ViewAirFranceComponent,
    ClasseVolDirective,
    ClasseBagageWarningDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatTableModule,
    MatBadgeModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
