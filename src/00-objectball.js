let gameObject = () => {
    const nba = {
        home: {
          teamName: "Brooklyn Nets",
          colors: ["Black", "White"],
          players: {
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },
            "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },
            "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
            },
            "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            },
          }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
              "Jeff Adrien": {
                  number: 4,
                  shoe: 18,
                  points: 10,
                  rebounds: 1,
                  assists: 1,
                  steals: 2,
                  blocks: 7,
                  slamDunks: 2
              },
              "Bismak Biyombo": {
                  number: 0,
                  shoe: 16,
                  points: 12,
                  rebounds: 4,
                  assists: 7,
                  steals: 7,
                  blocks: 15,
                  slamDunks: 10
              },
              "DeSagna Diop": {
                  number: 2,
                  shoe: 14,
                  points: 24,
                  rebounds: 12,
                  assists: 12,
                  steals: 4,
                  blocks: 5,
                  slamDunks: 5
              },
              "Ben Gordon": {
                  number: 8,
                  shoe: 15,
                  points: 33,
                  rebounds: 3,
                  assists: 2,
                  steals: 1,
                  blocks: 1,
                  slamDunks: 0
              },
              "Brendan Haywood": {
                  number: 33,
                  shoe: 15,
                  points: 6,
                  rebounds: 12,
                  assists: 12,
                  steals: 22,
                  blocks: 5,
                  slamDunks: 12
              },
            }
        } 
      }
    return nba
}

let homeTeamName = () => {
  let object = gameObject();
  return object["home"]["teamName"];
}
  

let numPointsScored = (playerName) => {
    const Object = gameObject()
    let playerScore = {}

    for (let team in Object) {
      if (Object[team].players[playerName]) {
        playerScore = Object[team].players[playerName].points;
      }
    }
    return playerScore;
}

console.log(numPointsScored("Jeff Adrien"))

let shoeSize = (playerName) => {
    const Object = gameObject()
    let playerShoe = {} 

    for (let team in Object) {
        if (Object[team].players[playerName]) {
          playerShoe = Object[team].players[playerName].shoe;
        }
    }
    return playerShoe
}

console.log(shoeSize("Jeff Adrien"))

let teamColors = (playerName) => {
    const Object = gameObject()
    let color = {} 

    for (let team in Object) {
        if (Object[team].players[playerName]) {
          color = Object[team].colors;
        }
    }
    return color
}

console.log(teamColors("Jeff Adrien"))

let teamNames = () => {
    const Object = gameObject()
    const teams = []
    teams.push(Object.home.teamName)
    teams.push(Object.away.teamName)
    return teams
}

console.log(teamNames())

let playerNumbers = (teamName) => {
    const Object = gameObject();
    const numbers = [];
    for (let team in Object) {
      if (teamName === Object[team].teamName) {
        let players = Object[team].players;
        for (let playerKey in players) {
          numbers.push(players[playerKey].number);
        }
      }
    }
    return numbers;
}

console.log(playerNumbers("Brooklyn Nets"))

let playerStats = (playerName) => {
    const Object = gameObject();
    let stats = {}
    for (let team in Object) {
        if (Object[team].players[playerName]) {
          stats = Object[team].players[playerName];
        }
    }
    return stats
}

console.log(playerStats("Jeff Adrien"))

let bigShoeRebounds = () => {
    const Object = gameObject();
    let maxShoeSize = 0;
    let rebounds = 0;
    for (let team in Object) {
        let players = Object[team].players;
        for (let player in players) {
            if (players[player].shoe > maxShoeSize) {
            maxShoeSize = players[player].shoe;
            rebounds = players[player].rebounds;
        }
    }
  }
  return rebounds;
}

console.log(bigShoeRebounds())