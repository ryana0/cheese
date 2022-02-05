const types = document.querySelector('#namePath')
const typesLength = document.querySelector('#namePath').getTotalLength()
let path = document.querySelector('#cheese').querySelector('path')
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength + ' ' + pathLength
path.style.strokeDashoffset = pathLength - 400

types.style.strokeDasharray = typesLength + ' ' + typesLength
types.style.strokeDashoffset = typesLength

const main = document.querySelector('#cheeseLineContain')
const typesEl = document.querySelector('#types')
const cheeseSection = document.querySelector('#cheeseSection')

window.addEventListener('scroll', () => {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    var drawLength = (pathLength *scrollPercentage * 1.5)
    path.style.strokeDashoffset = (pathLength - 350) - (drawLength)

    if(scrollPercentage >= '0.4') {
        types.classList.add('drawIn')
    } else {
        types.classList.remove('drawIn')
    }
})

document.querySelectorAll('.cardL').forEach(element => {
    element.addEventListener('click', () => {
        if(element.classList.contains('slideIn')) {
            element.classList.remove('slideIn')
            element.style.marginLeft = '-6vw'
        } else {
            element.classList.add('slideIn')
            setTimeout(() => {
                element.style.gridColumn = 'grid-column: 2 !important;'
                element.style.marginLeft = '0'
            }, 500);
        }
    })
})

document.querySelectorAll('.cardR').forEach(element => {
    element.addEventListener('click', () => {
        if(element.classList.contains('slideIn2')) {
            element.style.marginLeft = '6vw'
            element.classList.remove('slideIn2')
        } else {
            element.classList.add('slideIn2')
            setTimeout(() => {
                element.style.gridColumn = 'grid-column: 2 !important;'
                element.style.marginLeft = '0'
            }, 500);
        }
    })
})