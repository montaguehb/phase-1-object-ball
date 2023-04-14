const gameObject = () => {
    teamObj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "white"],
            players: ["Alan Anderson", "Reggie Evans", "Brook Lopez", "Mason Plumlee", "Jason Terry"],
            number: [0, 30, 11, 1, 31],
            shoe: [16, 14, 17, 19, 15],
            points:[22, 12, 17, 26, 19],
            rebounds: [12, 12, 19, 12, 2],
            assists: [12, 12, 10, 6, 2],
            steals:[3, 12, 3, 3 ,4],
            blocks: [1, 12, 1, 8, 11],
            slamDunks: [1, 7, 15, 5, 1]
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: ["Jeff Adrien", "Bismak Biyombo", "DeSagna Diop", "Ben Gordon", "Brendan Haywood"],
            number: [4, 0, 2, 8, 33],
            shoe: [18, 16, 14, 15, 15],
            points:[10, 12, 24, 33, 6],
            rebounds: [1, 4, 12, 3, 12],
            assists: [1, 7, 12, 2, 12],
            steals:[2, 7, 4, 1, 22],
            blocks: [7, 15, 5, 1, 5],
            slamDunks: [2, 10, 5, 0, 12]
        }
    };
    return teamObj;
}

let playerObj = gameObject();

const playerIndex = player => {
    for (let location in playerObj) {
        let playerIndex = playerObj[location].players.findIndex((playerArray) => playerArray === player);
        if(playerIndex !== -1) {
            return [playerIndex, location];
        }
    }
    console.error("Player not found");
}

const numPointsScored = player => {
    const playerInfo = playerIndex(player);
    return playerObj[playerInfo[1]].points[playerInfo[0]]
}

const shoeSize = player => {
    const playerInfo = playerIndex(player);
    return playerObj[playerInfo[1]].shoe[playerInfo[0]]
}

const playerStats = player => {
    const playerInfo = playerIndex(player);
    const newPlayerObj = {};
    for(const [key, value] of Object.entries(playerObj[playerInfo[1]])) {
        if (key !== "colors") {
            newPlayerObj[key] = value[playerInfo[0]] 
        } 
    }
    return newPlayerObj
}


const bigShoeRebounds = () => {
    const playerIndex = [];
    const allShoes = [];
    for(let location in playerObj) {
        for(let shoeSizes in playerObj[location].shoe) {
            allShoes.push(playerObj[location].shoe[shoeSizes])
        }
    }
    for (let location in playerObj) {
        playerIndex.push(playerObj[location].shoe.findIndex((playerArray) => playerArray === Math.max(...allShoes)));
        if(playerIndex !== -1) {
            return playerObj[location].players[playerIndex];
        }
    }
    
    
}

const teamColors = team => playerObj[team].colors;

const teamNames = () => Object.keys(playerObj);

const playerNumbers = team => playerObj.team.number;

