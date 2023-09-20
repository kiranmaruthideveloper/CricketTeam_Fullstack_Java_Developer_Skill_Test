import { Component } from '@angular/core';
import { PlayerService } from '../player.service';
import { player } from '../Player';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  constructor(private playerService : PlayerService, private teamService:TeamService){}

  player : player = {id:0, name:'', role:''}
  roles:string[]=this.playerService.getRoles();
  players : player[] = this.playerService.getPlayers().map(player=>({...player,selectedRole:''}));

  selectedRole : string =''

  addPlayer(){
    this.player.id = this.playerService.getPlayers().length+1;
    this.playerService.addPlayer(this.player);
    this.players.push({ ...this.player, selectedRole: '' });
    this.player = {id:0, name:'', role:''};
  }


  deletePlayer(playerId:number){
    this.playerService.deletePlayer(playerId);
    this.players = this.playerService.getPlayers().map(player => ({ ...player, selectedRole: '' }));

  }

  changeRole(player:player){
    if(player.selectedRole){
      player.role = player.selectedRole
           this.playerService.updatePlayerRole(player.id,player.selectedRole);
          }
  }

  addToTeam(player:player){
    this.teamService.addToTeam(player);
  }

  removeFromTeam(playerId:number){
    this.teamService.removeFromTeam(playerId);
  }
  
}
