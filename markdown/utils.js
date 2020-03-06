const log = console.log.bind(console)

const e = selector => document.querySelector(selector)

const es = selector => document.querySelectorAll(selector)

const appendHtml = (element, html) => element.insertAdjacentHTML('beforeend', html)

const find = (element, selector) => {
    return element.querySelector(selector)
}

const findAll = (element, selector) => {
    return element.querySelectorAll(selector)
}

const EventType = {
    click: 'click',
    popstate: 'popstate',
    mouseover: 'mouseover',
    mouseout: 'mouseout',
    keyup: 'keyup',
}

const bindEvent = (element, eventName, callback) => {
    element.addEventListener(eventName, callback)
}

// 给所有的元素绑定事件
const bindAll = (elements, eventName, callback) => {
    for (let v of elements) {
        let element = v
        bindEvent(element, eventName, callback)
    }
}

const toggleClass = (element, className) => {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

const removeClassAll = (className) => {
    let selector = '.' + className
    let elements = document.querySelectorAll(selector)
    for (let v of elements) {
        let element = v
        element.classList.remove(className)
    }
}

const floor = num => Math.floor(num)
  // 生成 1 到 number 之间的随机整数
const random = num => Math.ceil(Math.random() * num)

const sty = obj => JSON.stringify(obj)
const par = obj => JSON.parse(obj)