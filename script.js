
let mykey = config.API_KEY
console.log(mykey);
// ${}



async function getLeagueAccount(name){
        
    // Use backticks (links von ß/? --> ` <-- ) und "${}" für Variablenf
    const response = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${mykey}`);

    let data = await response.json();

    let test = "Anton"
    test = "Linus"


    console.log(data.summonerLevel)
    console.log(data.puuid)
}

getLeagueAccount("tsich")