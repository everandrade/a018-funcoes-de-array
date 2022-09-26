/* Crie um array de números que contenha 8 números.
Depois disso, utilize este array para criar
 duas funcões de array `map()`: */

const tresNumeros = arrayNumeros.map((numeros) =>{
    return numeros * 3
}
)
console.log("Array de números multiplicados por 3:", tresNumeros)

/* 2. A segunda deve retornar um novo array contendo os números divididos por 2. 
Crie uma `const metades`, e guarde o valor do array nesta const; */

const metade = arrayDeNumeros.map((numeros)=>numeros / 2)
    console.log("Array original dividido por 2:", metade)