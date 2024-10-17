const searchIcon = document.getElementById('searchIcon')
const searchEngine = document.getElementById('searchEngine')


searchIcon.addEventListener('click', function () {
        searchEngine.classList.toggle('active')
    })