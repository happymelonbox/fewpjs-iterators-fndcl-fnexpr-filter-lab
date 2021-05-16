

function findMatching(drivers, string){
    let bobbies = drivers.filter(word => word === string || word === string.toLowerCase())
    return bobbies
}

function fuzzyMatch(drivers, letters){
    let who = drivers.filter(name => name.startsWith(letters))
    return who
}

function matchName(drivers, name){
    let thatGuy = drivers.filter(him => him.name === name)
    return thatGuy
}