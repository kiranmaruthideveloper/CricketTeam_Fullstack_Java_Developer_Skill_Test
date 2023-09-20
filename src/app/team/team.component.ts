import { Component } from '@angular/core';
import { PlayerService } from '../player.service';
import { TeamService } from '../team.service';
import { player } from '../Player';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
constructor(private playerservice:PlayerService, private teamService:TeamService){}

getPlayersByRole(role:string){
   return this.teamService.getTeamPlayers().filter(player=>player.role === role);
}

getPlayersinTeam():player[]{
  return this.teamService.getTeamPlayers();
}

removeFromTeam(playerId:number){
this.teamService.removeFromTeam(playerId)
}
}
