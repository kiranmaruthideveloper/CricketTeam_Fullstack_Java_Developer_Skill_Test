import { Injectable } from '@angular/core';
import { ROLES, player } from './Player';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private players: player[]=[]

  constructor() {

    this.players =[
      {id:1, name:'Virat', role:'Batsman'},
      {id:2, name:'Rohit', role:'Batsman'},
      {id:3, name:'Jasprit', role:'Bowler'},
      {id:4, name:'KL Rahul', role:'WicketKeeper'},
      {id:5, name:'SuryaKumarYadav', role:'Batsman'},
      {id:6, name:'Mohammed Siraj', role:'Bowler'},
      {id:7, name:'Mohammed Shami', role:'Bowler'},
      {id:8, name:'MS Dhoni', role:'WicketKeeper'},
    ];
   }

   getPlayers():player[]{
    return this.players;
   }

   addPlayer(player:player){
     this.players.push(player);
   }

   updatePlayerRole(playerId: number, newRole:string){
    const playerIndex = this.players.findIndex(player=>player.id === playerId)
    if(playerIndex !== -1){
      this.players[playerIndex].role = newRole;
    }
   }

   deletePlayer(playerId: number){
    this.players = this.players.filter(player=>player.id !==playerId);
   }

   getRoles():string[]{
    return ROLES;
   }
}
