console.log(rankead())

function numberVictory (victory, defeat) {
    let result = victory - defeat
    return result
}

function rankead () {
    let winRate = numberVictory(1200, 50)
    let rank

    if (winRate <= 10) {
        rank = "Ferro"
    } else if (winRate >= 11 && winRate <= 20) {
        rank = "Bronze"
    } else if (winRate >= 21 && winRate <= 50) {
        rank = "Prata"
    } else if (winRate >= 51 && winRate <= 80) {
        rank = "Ouro"
    } else if (winRate >= 81 && winRate <= 90) {
        rank = "Diamante"
    } else if (winRate >= 91 && winRate <= 100) {
        rank = "Lendário"
    } else if (winRate > 100) {
        rank = "Imortal"
    } else {
        rank = "Unrankead"
    }

    return `O Herói tem de saldo de ${winRate} está no nível de ${rank}`
}