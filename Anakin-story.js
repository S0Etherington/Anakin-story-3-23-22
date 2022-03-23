let anakinAttack = 25;
let obiwanAttack = 35;
let anakinHealth = 100;
let anakinDefense = 0

if(anakinAttack > obiwanAttack) {
  console.log ("Anakin has the higher attack")
}else if(obiwanAttack > anakinAttack){
  console.log ("Obi Wan has the higher attack")
}else{
  conolse.log ("The force is with both of them")
}

if(anakinHealth <= 0){
  console.log ("Anakin has fallen.")
}else{
  anakinHealth -= obiwanAttack
  console.log(`Ankakin's health is now ${anakinHealth}`)
}

console.log("Anakin activated his force shield")

anakinDefense += 25
console.log(`Anakin's defense is now ${anakinDefense}`)

if(anakinHealth <= obiwanAttack - anakinDefense){
  console.log("Anakin has fallen")
}else{
  anakinHealth -= obiwanAttack - anakinDefense
  console.log (`Anakin's health is now ${anakinHealth}`)
}

console.log('Anakin takes a stim pack')

if(anakinHealth + 50 >= 100){
  anakinHealth = 100
  console.log(`Anakin's health is now ${anakinHealth}`)
}else{
  anakinHealth += 50
  console.log(`Anakin's health is now ${anakinHealth}`)
}

for(let i = 0; i < 5; i++){
  anakinHealth -= obiwanAttack - anakinDefense
  console.log(`Anakin's health is now ${anakinHealth}`)
}

while(anakinHealth > 0){  anakinHealth -= obiwanAttack - anakinDefense
  console.log(`Anakin's health is now ${anakinHealth}`)
if(anakinHealth <= 0){
  console.log("Ankakin dead...or is he?")
  }
}