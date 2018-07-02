/* 3rd party libraries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* our own custom components */
import { SlatInfoComponent } from './slat-info/slat-info.component';

@NgModule({
  imports: [
    /* angular stuff */
    CommonModule,
    RouterModule,
    
    /* 3rd party components */

  ],
  declarations: [
    SlatInfoComponent,
  ],
  exports: [
    /* angular stuff */
    CommonModule,

    /* 3rd party components */

    /* our own custom components */
    SlatInfoComponent,
  ]
})
export class SharedModule { }