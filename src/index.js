exports.min = function min(array) {
    if (array && array.length > 0) {
        array.sort((a, b) => a - b)
        return array[0]
    }
    return 0
}

exports.max = function max(array) {
    if (array && array.length > 0) {
        array.sort((a, b) => a - b)
        return array[array.length - 1]
    }
    return 0
}

exports.avg = function avg(array) {
    let result = 0
    let i = 0
    if (array && array.length > 0) {
        array.forEach(num => {
            result += num
            i++
        })
        return result / i
    }
    return 0
}
