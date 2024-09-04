const base = 'http://localhost:3001/notes';
const ol = document.querySelector('#notes')
// Start with first post
let counter = 0;
// Load posts 20 at a time
const quantity = 20;

// When DOM loads, render the first 20 posts
document.addEventListener('DOMContentLoaded', load);

// If scrolled to bottom, load the next 20 posts
window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        load();
    }
};

// Load next set of posts
function load() {
    // Set start and end post numbers, and update counter
    const start = counter;
    const end = start + quantity + 1;
    counter = end;
    const url = `${base}?_start=${start}&_end=${end}`;

    // Get new posts and add posts
    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(add_post);
    })
};

// Add a new post with given contents to DOM
function add_post(item) {
    // Create new post
    const post = document.createElement('li');
    post.className = 'post';
    post.innerHTML = item.content;
    console.log("item id:",item.id);
    // Add post to DOM
    ol.append(post);
};