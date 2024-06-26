const progress = document.getElementById('progress')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const circles = document.querySelectorAll('.circle') // because we are working with more than one circle we can use the querySelectorAll to enact a node list

let currentActive = 1   

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})
prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    
}



