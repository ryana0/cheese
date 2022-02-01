const types = document.querySelector('#namePath')
const typesLength = document.querySelector('#namePath').getTotalLength()
let path = document.querySelector('#cheesePath')
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength + ' ' + pathLength
path.style.strokeDashoffset = pathLength - 350

types.style.strokeDasharray = typesLength + ' ' + typesLength
types.style.strokeDashoffset = typesLength


window.addEventListener('scroll', () => {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    var drawLength = pathLength * scrollPercentage
    path.style.strokeDashoffset = pathLength - drawLength

    if(window.scrollY >= '3100') {
        types.classList.add('drawIn')
    }
})

