let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};

console.log(`all data`, netflix);
console.log(`season info`, netflix.season1.seasonInfo);
console.log(`specific episode name`, netflix.season1.seasonInfo.episodeInfo[0].episodeName);

console.log(`specific episode name and number`, netflix.season1.seasonInfo.episodeInfo[0].episodeName, netflix.season1.seasonInfo.episodeInfo[0].episode);


let x=`hello`;

console.log(`variable x contains the string ${x}`);

//JSON objects
//javascript object notation
//the json syntax is derived from regular object syntax, but the JSON format is text only
//json exists as a string
//json data is what we reccieve when we fetch data from a server
// since it is text only, it must be converted to a native java script object to access and use the data
































let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

//object.keys()
//object.values()

console.log(Object.keys(spaceJam.toonSquad));

console.log(Object.keys(spaceJam.toonSquad.duck));

console.log(Object.values(spaceJam.nbaPlayers));