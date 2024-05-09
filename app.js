const body = document.querySelector('.body');

function lobby() {
    gameTitle = document.querySelector('#titlescreen').remove()
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
}

function goToLobby() {
    document.querySelector('#start').addEventListener('click', (e) => {
        lobby()
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

    let monsterName = document.querySelector("#monstername");
    let monsterHealth = document.querySelector("#monsterhealth");

    let status = document.querySelector("#status")

    let trackPlayerXp = parseInt(playerXp.innerHTML);
    let trackPlayerHealth = parseInt(playerHealth.innerHTML);
    let trackPlayerGold = parseInt(playerGold.innerHTML);

    let trackMonsterName = parseInt(monsterName.innerHTML);
    let trackMonsterHealth = parseInt(monsterHealth.innerHTML);

    let playerAttackDamage = 10

    let playerStats = {
        health: trackPlayerHealth,
        xp: trackPlayerXp,
        gold: trackPlayerGold
    }

    document.querySelector("#attack").addEventListener('click', (e) => {
        trackMonsterHealth -= playerAttackDamage;
        monsterHealth.innerHTML = trackMonsterHealth;
      });

    if (monsterHealth <= 0){

    }
}

goToLobby()