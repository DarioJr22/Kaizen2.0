import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ListTransacComponent } from './list-transac/list-transac.component';
import { AvatarComponent } from './avatar/avatar.component';
import { MultiCardsComponent } from './multi-cards/multi-cards.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSliderModule } from '@angular/material/slider';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar/calendar.component';
import { ToolkitComponent } from './toolkit/toolkit.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    InputComponent,
    ListTransacComponent,
    AvatarComponent,
    MultiCardsComponent,
    SidebarComponent,
    CalendarComponent,
    ToolkitComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,

    //Material
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatTreeModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSliderModule,
    MatRadioModule,

    //Outros
    NgxMaskDirective,
    NgxMaskPipe,
    ReactiveFormsModule


  ],

  exports:[
    InputComponent,
    ListTransacComponent,
    AvatarComponent,
    MultiCardsComponent,
    SidebarComponent,
    CalendarComponent,
    ToolkitComponent,
    ButtonComponent

  ],

  providers:[
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: 'ttlDefault', useValue: 3000 },
    provideNgxMask()
  ]
})
export class SharedModule { }
