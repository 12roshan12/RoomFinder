import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomListComponent } from './room-list/room-list.component';
import { MainComponent } from './main.component';


const routes: Routes = [
    {
        path: '', component: MainComponent,
        children: [
            {
                path: '', component: HomeComponent
            },
            {
                path: 'rooms', component: RoomListComponent
            },
            {
                path: 'details', component: RoomDetailsComponent
            },
        ]
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
