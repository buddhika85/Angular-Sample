import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css'],
  styles: [
    `
      .online {
        color: white;
      }
    `
  ]
})
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = 'Offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  ngOnInit() {}

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    if (this.serverStatus === 'Online') {
      return 'green';
    } else {
      return 'red';
    }
  }
}
