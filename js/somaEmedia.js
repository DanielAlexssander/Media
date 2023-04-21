function soma() {
    const numbers = [...arguments]
    return numbers.reduce(function(n1, n2) {
        return n1 + n2
    })
}
function media() {
    return soma(...arguments) / arguments.length
}

console.log(soma(1, 2, 3, 4, 5))
console.log(media(1, 2, 3, 4, 5))