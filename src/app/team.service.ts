import { Injectable } from '@angular/core';
import { player } from './Player';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  private teamPlayers: player[]=[];

  getTeamPlayers(): player[]{
       return this.teamPlayers;
  }

  addToTeam(player:player){
    this.teamPlayers.push(player);
  }

  removeFromTeam(playerId:number){
    this.teamPlayers = this.teamPlayers.filter(player=>player.id!==playerId )
  }

  
}
