import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './module-import-guard';

import { HeaderBarComponent } from './header-bar/header-bar.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderBarComponent,
  ],
  declarations: [
    HeaderBarComponent,
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}