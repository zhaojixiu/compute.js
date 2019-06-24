//补
function padding0(num) {
    let str = ''
    while (num--) str += '0'
    return str
}

//科学记数法 => 字符串
function noExponent(number) {
    const data = String(number).split(/[eE]/)
    if (data.length == 1) return data[0]

    let z = ''
    const sign = number < 0 ? '-' : ''
    const str = data[0].replace('.', '')
    let mag = Number(data[1]) + 1;

    if (mag < 0) {
        z = sign + '0.'
        while (mag++) z += '0'
        return z + str.replace(/^\-/, '')
    }
    mag -= str.length
    while (mag--) z += '0'
    return str + z
}

function split(number) {
    let str
    if (number < 1e-6) {
        str = noExponent(number)
    } else {
        str = number + ''
    }
    const index = str.lastIndexOf('.')
    if (index < 0) {
        return [str, 0]
    } else {
        return [str.replace('.', ''), str.length - index - 1]
    }
}

/**
 * 判断传入的操作符  返回对应的计算公式
 * x: 操作数1
 * y: 操作数2
 * sign: 操作符
 * z: 精度
 */
function operate(x, y, sign, z) {
    switch (sign) {
        case '+': return (x + y) / z
        case '-': return (x - y) / z
        case '*': return (x * y) / (z * z)
        case '/': return (x / y)
    }
}

/**
 * 解决小数精度问题
 * x: 操作数1
 * y: 操作数2
 * sign: 操作符
 */
function Compute(x, y, sign) {
    const arrL = split(x)
    const arrR = split(y)
    let fLen = Math.max(arrL[1], arrR[1])

    if (fLen === 0) {
        return operate(Number(x), Number(y), sign, 1)
    }
    const precision = Math.pow(10, fLen)
    if (arrL[1] !== arrR[1]) {
        if (arrL[1] > arrR[1]) {
            arrR[0] += padding0(arrL[1] - arrR[1])
        } else {
            arrL[0] += padding0(arrR[1] - arrL[1])
        }
    }
    return operate(Number(arrL[0]), Number(arrR[0]), sign, precision)
}

/**
 * 计算方法：
 * 加: Compute(0.3, 0.2, '+')
 * 减: Compute(0.3, 0.2, '-')
 * 乘: Compute(0.3, 0.2, '*')
 * 除: Compute(0.3, 0.2, '/')
 */

//四舍五入函数
function Round(number, fraction) {
    return Math.round(number * Math.pow(10, fraction)) / Math.pow(10, fraction)
}
