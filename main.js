const types = document.querySelector('#namePath')
const typesLength = document.querySelector('#namePath').getTotalLength()
let path = document.querySelector('#cheesePath')
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength + ' ' + pathLength
path.style.strokeDashoffset = pathLength - 400

types.style.strokeDasharray = typesLength + ' ' + typesLength
types.style.strokeDashoffset = typesLength


window.addEventListener('scroll', () => {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) + 0.05
    var drawLength = pathLength * scrollPercentage
    path.style.strokeDashoffset = (pathLength - 350) - (drawLength)

    if(scrollPercentage >= 0.50) {
        types.classList.add('drawIn')
    } else {
        types.classList.remove('drawIn')
    }
})

document.querySelectorAll('.cardL').forEach(element => {
    element.addEventListener('click', () => {
        element.classList.add('slideIn')
        setTimeout(() => {
            element.style.gridColumn = 'grid-column: 2 !important;'
            element.style.transform = 'translateX(0)'
        }, 500);
    })
})