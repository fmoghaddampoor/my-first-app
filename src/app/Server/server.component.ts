import {Component} from "@angular/core"

@Component({
  selector: 'app-server',
  templateUrl: "./server.component.html",
  styleUrls: ['./servers.component.scss']
})
export class ServerComponent {

  // Server id
  serverId: number = 10;

  // Server status
  serverStatus: string = 'Down';

  allowNewServer: boolean = false;

  serverCreationStatus: string = "No server is created";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  OnCreateServer(){
    this.serverCreationStatus = 'New server is created successfully';
  }
}
