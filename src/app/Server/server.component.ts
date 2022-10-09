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

  getServerStatus(){
    return this.serverStatus;
  }
}
