

module.exports = function reverse (n) {
    if(n < 0) n = Math.abs(n)
     let str = n.toString();
    let reverseArr = str.split('').reverse()
    let reverseStr = reverseArr.join('')
    let num = Number(reverseStr)
    return num 
}
