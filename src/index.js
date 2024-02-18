const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
 return pokemons.length
};
console.log(`I have ${countThem()} pokemons!`)


const orderThem = () => {
  // order the pokemons alphabetically
  return pokemons.sort()
};
console.log(orderThem())

const flipThem = () => {
  // reverse the order of the pokemons
  return pokemons.reverse()
};
console.log(flipThem())

const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
  return pokemons.map(pokemons=>pokemons.toUpperCase())
};
console.log(makeThemBig())

const onlyTheBs = () => {
  // only print the pokemons that starts with B
  return pokemons.filter(pokemons => pokemons.charAt(0) === "B")
};
console.log(onlyTheBs())


const notTheCs = () => {
  // remove all pokemons that starts with C
  return pokemons.filter(pokemons=> pokemons.charAt(0) !== "C")
};
console.log(notTheCs())

const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
 pokemons.forEach((item, index)=> console.log(`number ${index} - ${item} `)) 
};
nameAndIdThanks()

const catchPokemon = name => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.push("TRista")
  console.log(pokemons) 
};
catchPokemon()

// ???
const didICatchIt = name => {
  // check the pokemons to see if a specific pokemon is in the array
//const pocName = ()=>{pokemons["Ivysaur"]}
//console.log (pokemons.find(pocName))
console.log(pokemons.includes("Ivysaur"))
}
didICatchIt()




const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
  pokemons.splice(2,0,"Clefairy")
  console.log(pokemons)
};
addInThirdPlace()

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
  //pokemons.sort((a,b) => b.length - a.length)
  //console.log(pokemons)
};
