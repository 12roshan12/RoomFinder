import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SwiperModule } from "swiper/angular";
import { RoomsectionComponent } from "./roomsection/roomsection.component";
import { MainComponent } from "./main.component";
import { MainRoutingModule } from "./main.routing";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { RoomDetailsComponent } from "./room-details/room-details.component";
import { RoomListComponent } from "./room-list/room-list.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from "@angular/material/select";
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        SwiperModule,
        MatIconModule,
        MatSidenavModule,
        MatSliderModule
    ],
    declarations: [
        MainComponent,
        HomeComponent,
        RoomsectionComponent,
        FooterComponent,
        RoomDetailsComponent,
        RoomListComponent,
    ],
    providers: []
})

export class MainModule { }