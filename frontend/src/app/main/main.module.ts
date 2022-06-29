import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SwiperModule } from "swiper/angular";
import { RoomsectionComponent } from "./roomsection/roomsection.component";
import { MainComponent } from "./main.component";
import { MainRoutingModule } from "./main.routing";
import { MaterialModule } from "../material/material.module";
import { FooterComponent } from "./footer/footer.component";
import { RoomDetailsComponent } from "./room-details/room-details.component";
import { RoomListComponent } from "./room-list/room-list.component";
import { HomeComponent } from "./home/home.component";


@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        SwiperModule
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