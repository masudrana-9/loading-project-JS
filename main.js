function changeLoadingState() {
    const finalLoadingState = document.querySelector('.final-loading-state')
    const loadingText = document.querySelector('.loading-text span')

    let count = 5
    let timeoutId = setInterval(() => {
        if(count > 100) {
            clearInterval(timeoutId)
        } else {
            finalLoadingState.style.width = count +'%'
            finalLoadingState.style.backgroundColor = 'red'
            loadingText.textContent = count +'%'
            count +=5
        }
        
        
    }, 100)
}

changeLoadingState()