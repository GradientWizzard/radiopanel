import { MomentModule } from 'ngx-moment';
import { ToastrModule } from 'ngx-toastr';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

import { UiModule } from '~lib/ui/ui.module';
import { Pages } from './pages';
import { RolesRoutingModule } from './roles-routing.module';

@NgModule({
	declarations: [
		Pages
	],
	imports: [
		CommonModule,
		RolesRoutingModule,
		RouterModule,
		UiModule,
		ReactiveFormsModule,
		ToastrModule,
		MatDialogModule,
		MomentModule,
	],
})
export class RolesModule { }
