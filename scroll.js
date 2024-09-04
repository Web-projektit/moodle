// When back arrow is clicked, show previous section
const base = 'http://localhost:3001/notes/';

window.onpopstate = function(event) {
    console.log(event.state.section);
    showSection(event.state.section);
}


// Shows given section
function showSection(section) {
    const url = base + section;
    // Find section text from server
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // Log text and display on page
        console.log(data);
        document.querySelector('#content').innerHTML = data.content;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('button').forEach(button => {
        button.onclick = function() {
            const section = this.dataset.section;

            // Add the current state to the history
            history.pushState({section: section}, "", `section${section}`);
            showSection(section);
        };
    });
});