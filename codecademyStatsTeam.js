const team = {
  _players: [
    {firstName: "Stephen",
    lastName: "Halk",
    age: 28},
    {firstName: "Ren",
    lastName: "William",
    age: 30},
    {firstName: "Bose",
    lastName: "worl",
    age: 25},
  ],
  
  _games: [
    {opponent: "Swish",
    teamPoints: 6,
    opponentPoints: 4},
    {opponent: "Mos",
    teamPoints: 5,
    opponentPoints: 9},
    {opponent: "Nice",
    teamPoints: 2,
    opponentPoints: 4},
  ],
  
  get players() {
    return this._players;
  },
  
  get games() {
    return this._games;
  },
  
  addPlayer: function(firstName, lastName, age) {
    const newPlayer = {firstName: firstName,
                   lastName: lastName,
                   age: age};
    this._players.push(newPlayer);
  },
  
  addGame: function(opponentName, teamPoints, opponentPoints) {
    const newGame = {opponent: opponentName,
                    teamPoints: teamPoints,
                    opponentPoints: opponentPoints};
    this._games.push(newGame);
  },
  
};

//team.addPlayer('Steph', 'Curry', 28);
//team.addPlayer('Lisa', 'Leslie', 44);
//team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Frontiers', 6, 4);
team.addGame('Benchers', 5, 9);
team.addGame('Speakers', 2, 4);

console.log(team.players);
console.log();
console.log(team.games);
