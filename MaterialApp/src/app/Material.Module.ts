import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
@NgModule({
    imports:
        [
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            MatTableModule,
            HttpClientModule,
            FormsModule,
            MatPaginatorModule
        ]
})
export class MaterialModule {

}