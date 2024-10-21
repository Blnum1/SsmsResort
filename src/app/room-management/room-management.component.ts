import { Component, OnInit } from '@angular/core';
import { RoomService } from '../service/room.service';


@Component({
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styleUrls: ['./room-management.component.css']
})
export class RoomManagementComponent implements OnInit {
  rooms: any[] = [];
  selectedRoom: any = null;
  newRoom = {
    room_name: '',
    room_desc: '',
    room_price: 0
  };

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms() {
    this.roomService.getRooms().subscribe(data => {
      this.rooms = data;
    });
  }

  addRoom() {
    this.roomService.addRoom(this.newRoom).subscribe({
      next: (response) => {
        console.log('Room added successfully', response);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }

  editRoom(room: any) {
    this.selectedRoom = room;
  }

  updateRoom() {
    this.roomService.updateRoom(this.selectedRoom.room_id, this.selectedRoom).subscribe(() => {
      this.loadRooms();
      this.selectedRoom = null;
    });
  }

  deleteRoom(id: number) {
    this.roomService.deleteRoom(id).subscribe(() => {
      this.loadRooms();
    });
  }
}
