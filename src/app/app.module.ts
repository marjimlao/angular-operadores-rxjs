import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapToComponent } from './components/map-to/map-to.component';

import { MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { FinalizeComponent } from './components/finalize/finalize.component';
import { HttpClientModule } from '@angular/common/http';
import { SwitchMapComponent } from './components/switch-map/switch-map.component';
import { PluckComponent } from './components/pluck/pluck.component';
import { StartWithComponent } from './components/start-with/start-with.component';
import { ToArrayComponent } from './components/to-array/to-array.component';
import { PartitionComponent } from './components/partition/partition.component';
import { EmptyComponent } from './components/empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    MapToComponent,
    FinalizeComponent,
    SwitchMapComponent,
    PluckComponent,
    StartWithComponent,
    ToArrayComponent,
    PartitionComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
