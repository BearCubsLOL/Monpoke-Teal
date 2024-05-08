function lobby() {
    gameTitle = document.querySelector('#titlescreen').remove()
    
}

function goToLobby() {
    document.querySelector('#start').addEventListener('click', (e) => {
        lobby()
    });
}

function monsterFight() {
}


// let playerXp = document.querySelector("#xp");
// let playerHealth = document.querySelector("#health");
// let playerGold = document.querySelector("#gold");

// let playerAttack = document.querySelector("#attack");
// let playerDodge = document.querySelector("#dodge");
// let playerRun = document.querySelector("#run");

// let monsterName = document.querySelector("#monstername");
// let monsterHealth = document.querySelector("#monsterhealth");

// let status = document.querySelector("#status")

// let trackPlayerXp = parseInt(playerXp.innerHTML);
// let trackPlayerHealth = parseInt(playerHealth.innerHTML);
// let trackPlayerGold = parseInt(playerGold.innerHTML);

// let trackMonsterName = parseInt(monsterName.innerHTML);
// let trackMonsterHealth = parseInt(monsterHealth.innerHTML);

// let playerAttackDamage = 10

// let playerStats = {
//     health: trackPlayerHealth,
//     xp: trackPlayerXp,
//     gold: trackPlayerGold
// }

// document.querySelector("#attack").addEventListener('click', (e) => {
//     trackMonsterHealth -= playerAttackDamage;
//     monsterHealth.innerHTML = trackMonsterHealth;
//   });

// if (monsterHealth <= 0){

// }
goToLobby()