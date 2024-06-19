// Function for Page Transitions
window.onload = () => {
    const transitionElements = document.querySelector('.transition'),
          anchors = document.querySelectorAll('a')

    setTimeout(() => {
        transitionElements.classList.remove('is-active')
    }, 500)

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i]

        anchor.addEventListener('click', e => {
            let target = e.currentTarget.href

            transitionElements.classList.add('is-active')

            setTimeout(() => {
                window.location.href = target
            }, 500)
            
            e.preventDefault()
        })
    }
}