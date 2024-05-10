const body = document.querySelector('.body');
let playerGoldFr = 50;

function lobby(del) {
    gameTitle = document.querySelector(del).remove()
    body.innerHTML = `
        <div id="buttons">
            <button id="fight">Fight</button>
        </div>
    `
    document.querySelector('#fight').addEventListener('click', (e) => {
        pickAFight()
    })
}

function pickAFight() {
    gameTitle = document.querySelector('#buttons').remove()
    body.innerHTML = `
        <div id="monsters">
            <div id="goblinstats">
                <h1 id="text">Monster: Goblin</h1>
                <p class="desc">This is the weakest monster and losing to it will yeild in you getting made fun of!!!</p>
                <button id="fightgoblin">Fight</button>
            </div>
            <br>
            <div id="dragonstats">
                <h1 id="text">Monster: Dragon</h1>
                <p class="desc">This dragon is sleeping in a cave. If you pick a fight, you will anger the dragon, making his health double from 150 to 300, and his all of his attacks damage will double!!</p>
                <button id="fightdragon">Fight</button>
            </div>
        </div>
    `
    document.querySelector('#fightdragon').addEventListener('click', (e) => {
        dragonFight()
    });
    document.querySelector('#fightgoblin').addEventListener('click', (e) => {
        goblinFight()
    });
}

function goToLobby() {
    document.querySelector('#start').addEventListener('click', (e) => {
        lobby('#titlescreen')
    });
}

function dragonFight() {
    document.querySelector('#monsters').remove()
    body.innerHTML = `
        <div class="box">
            <div class="stats">
                <p class="indstats">XP: <b id="xp">0</b></p>
                <p class="indstats">|</p>
                <p class="indstats">Health: <b id="health">100</b></p>
                <p class="indstats">|</p>
                <p class="indstats">Gold: <b id="gold">50</b></p>
            </div>
            <div class="options">
                <button id="attack">Attack</button>
                <button id="dodge">Dodge</button>
                <button id="run">Run</button>
            </div>
            <div class="monsterstats">
                <p class="monster">Monster Name: <b id="monstername">Dragon</b></p>
                <p class="monster">|</p>
                <p class="monster">Health: <b id="monsterhealth">300</b></p>
            </div>
            <div class="whathappen">
                <p id="status">You are fighting a monster</p>
            </div>
        </div>
    `
    let playerXp = document.querySelector("#xp");
    let playerHealth = document.querySelector("#health");
    let playerGold = document.querySelector("#gold");

    let playerAttack = document.querySelector("#attack");
    let playerDodge = document.querySelector("#dodge");
    let playerRun = document.querySelector("#run");

    let monsterHealth = document.querySelector("#monsterhealth");

    let status = document.querySelector("#status")

    let trackPlayerXp = parseInt(playerXp.innerHTML);
    let trackPlayerHealth = parseInt(playerHealth.innerHTML);
    let trackPlayerGold = parseInt(playerGold.innerHTML);
    let trackMonsterHealth = parseInt(monsterHealth.innerHTML);

    let playerAttackDamage = 10

    trackPlayerGold = playerGoldFr
    playerGold.innerHTML = trackPlayerGold;

        playerAttack.addEventListener('click', (e) => {
            trackMonsterHealth -= playerAttackDamage;
            monsterHealth.innerHTML = trackMonsterHealth;
            trackPlayerHealth -= 20;
            playerHealth.innerHTML = trackPlayerHealth;
            if (trackPlayerHealth <= 0) {
                lossScreen("Dragon")
                playerGoldFr -= 20

            }
            if (trackMonsterHealth <= 0){
                playerGoldFr += 20
                winScreen("Dragon")
            }
        });
      playerDodge.addEventListener('click', (e) => {
            trackPlayerHealth += 20;
            playerHealth.innerHTML = trackPlayerHealth;
            if (trackPlayerHealth > 100) {
                trackPlayerHealth = 100
                playerHealth.innerHTML = trackPlayerHealth;
            } 
        });

        playerRun.addEventListener('click', (e) => {
            playerGoldFr -= 5
            ranScreen("Dragon")
        });

}

function goblinFight() {
    document.querySelector('#monsters').remove()
    body.innerHTML = `
        <div class="box">
            <div class="stats">
                <p class="indstats">XP: <b id="xp">0</b></p>
                <p class="indstats">|</p>
                <p class="indstats">Health: <b id="health">100</b></p>
                <p class="indstats">|</p>
                <p class="indstats">Gold: <b id="gold">50</b></p>
            </div>
            <div class="options">
                <button id="attack">Attack</button>
                <button id="dodge">Dodge</button>
                <button id="run">Run</button>
            </div>
            <div class="monsterstats">
                <p class="monster">Monster Name: <b id="monstername">Goblin</b></p>
                <p class="monster">|</p>
                <p class="monster">Health: <b id="monsterhealth">75</b></p>
            </div>
            <div class="whathappen">
                <p id="status">You are fighting a monster</p>
            </div>
        </div>
    `
    let playerXp = document.querySelector("#xp");
    let playerHealth = document.querySelector("#health");
    let playerGold = document.querySelector("#gold");

    let playerAttack = document.querySelector("#attack");
    let playerDodge = document.querySelector("#dodge");
    let playerRun = document.querySelector("#run");

    let monsterHealth = document.querySelector("#monsterhealth");

    let status = document.querySelector("#status")

    let trackPlayerXp = parseInt(playerXp.innerHTML);
    let trackPlayerHealth = parseInt(playerHealth.innerHTML);
    let trackPlayerGold = parseInt(playerGold.innerHTML);
    let trackMonsterHealth = parseInt(monsterHealth.innerHTML);

    let playerAttackDamage = 10

    trackPlayerGold = playerGoldFr
    playerGold.innerHTML = trackPlayerGold;

        playerAttack.addEventListener('click', (e) => {
            trackMonsterHealth -= playerAttackDamage;
            monsterHealth.innerHTML = trackMonsterHealth;
            trackPlayerHealth -= 5;
            playerHealth.innerHTML = trackPlayerHealth;
            if (trackPlayerHealth <= 0) {
                lossScreen("Goblin")
                playerGoldFr -= 50
                if (playerGoldFr < 0) {
                    playerGoldFr = 0
                }

            }
            if (trackMonsterHealth <= 0){
                playerGoldFr += 20
                winScreen("Goblin")
            }
        });
      playerDodge.addEventListener('click', (e) => {
            trackPlayerHealth += 20;
            playerHealth.innerHTML = trackPlayerHealth;
            if (trackPlayerHealth > 100) {
                trackPlayerHealth = 100
                playerHealth.innerHTML = trackPlayerHealth;
            } 
        });

        playerRun.addEventListener('click', (e) => {
            playerGoldFr -= 5
            if (playerGoldFr < 0) {
                playerGoldFr = 0
            }
            ranScreen("Goblin")
        });

}


function winScreen(Monster) {
    document.querySelector('.box').remove()
    body.innerHTML = `
        <div id="temp">
            <h1 id="win">You beat a ${Monster}</h1>
            <p id="losses"> You Gained 20 gold for winning!</p>
            <button id="lobby">Go back to lobby</button>
        </div>
    `
    document.querySelector('#lobby').addEventListener('click', (e) => {
        lobby('#temp')
    });
}

function lossScreen(Monster) {
    document.querySelector('.box').remove()
    body.innerHTML = `
        <div id="temp">
            <h1 id="win">You lost to a ${Monster}</h1>
            <p id="losses"> You lost 20 gold for not winning</p>
            <button id="lobby">Go back to lobby</button>
        </div>
    `
    document.querySelector('#lobby').addEventListener('click', (e) => {
        lobby('#temp')
    });
}

function ranScreen(Monster) {
    document.querySelector('.box').remove()
    body.innerHTML = `
        <div id="temp">
            <h1 id="win">You ran from a ${Monster}</h1>
            <p id="losses"> You lost 5 gold for being scared</p>
            <button id="lobby">Go back to lobby</button>
        </div>
    `
    document.querySelector('#lobby').addEventListener('click', (e) => {
        lobby('#temp')
    });
}

goToLobby()