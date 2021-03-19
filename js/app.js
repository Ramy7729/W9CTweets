// Created an array of 10 objects, each one with their own set of properties: tweet, username, created_at and age.
var tweets = [
    {tweet: `the Earth is definitely flat`, username: `Someguy`, created_at: `07-07-2009`, age: 77},
    {tweet: `"How about if I sleep a little bit longer and forget all this nonsense`, username: `DudefromthatKafkabook`, created_at: `07-17-2011`, age: 87},
    {tweet: `it's a meeeeeeeeeeeeeeeeee......Mario!!!`, username: `Mario`, created_at: `01-27-2012`, age: 27},
    {tweet: `Beauty is everywhere. You only have to look to see it.`, username: `Bob Ross`, created_at: `08-27-2013`, age: 37},
    {tweet: `To be without some of the things you want is an indispensable part of happiness.`, username: `bert@Russ`, created_at: `04-07-2015`, age: 70},
    {tweet: `One must imagine Sisyphus happy.`, username: `DaManCamus`, created_at: `07-17-2016`, age: 67},
    {tweet: `If ‘The Flintstones’ has taught us anything, it’s that pelicans can be used to mix cement.`, username: `Homer_Simpson`, created_at: `03-07-2017`, age: 47},
    {tweet: `The man who has a conscience suffers whilst acknowledging his sin. That is his punishment-- as well as prison.`, username: `Raskolnikov`, created_at: `10-110-2019`, age: 87},
    {tweet: `If it is not right do not do it; if it is not true do not say it.`, username: `Marcus`, created_at: `05-07-2020`, age: 97},
    {tweet: `Don't you ever compare me to Family Guy.`, username: `Cartmen`, created_at: `01-07-2021`, age: 57}
];

// Used the for loop to access the object.
for (var counter = 0; counter < tweets.length; counter++) {
    // Printed out the objects properties.
    console.log(`Tweet: `+tweets[counter].tweet+` Username: `+tweets[counter].username+` Created at: `+tweets[counter].created_at);
}
