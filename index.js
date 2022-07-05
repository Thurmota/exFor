let spaceship = prompt("Digite o nome da nave")

let charToReplace = prompt('Qual caractere você quer substitui?')

let replacementeChar = prompt('Por qual caractere você deseja substituir?')

let newSpaceship = ''

for(let pos = 0; pos < spaceship.length; pos++) {
    if(spaceship[pos] == charToReplace) {
        newSpaceship += replacementeChar
    } else {
        newSpaceship += spaceship[pos]
    }
}

alert('O novo nome da nave é: ' + newSpaceship)