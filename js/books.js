const SVG_NS = 'http://www.w3.org/2000/svg';

const books = [{
    title: "Yongen-Wanderer",
    location: "Your Room",
    condition: "Clean your room",
    chapters: 1,
    reward: "Shortcuts to Batting Cages and Bath",
    auto_read: true
}, {
    title: "The Great Thief",
    location: "School Library",
    condition: "Unlock Arsene",
    chapters: 2,
    reward: "Knowledge +3",
    auto_read: false
}, {
    title: "Pirate Legend",
    location: "School Library",
    condition: "Ryuji Joins Party",
    chapters: 2,
    reward: "Guts +3",
    auto_read: false
}, {
    title: "Zorro the Outlaw",
    location: "School Library",
    condition: "Morgana Joins Party",
    chapters: 2,
    reward: "Kindness +3",
    auto_read: false
}, {
    title: "The Alluring Dancer",
    location: "School Library",
    condition: "Ann Joins Party",
    chapters: 2,
    reward: "Charm +3",
    auto_read: false
}, {
    title: "The Gallant Rogue",
    location: "School Library",
    condition: "Yusuke Joins Party",
    chapters: 2,
    reward: "Guts +3",
    auto_read: false
}, {
    title: "The Illusory Popess",
    location: "School Library",
    condition: "Makoto Joins Party",
    chapters: 2,
    reward: "Kindness +3",
    auto_read: false
}, {
    title: "Cry of Cthulu",
    location: "School Library",
    condition: "Futaba Joins Party",
    chapters: 2,
    reward: "Guts +3",
    auto_read: false
}, {
    title: "Woman in the Dark",
    location: "School Library",
    condition: "Haru Joins Party",
    chapters: 2,
    reward: "Proficiency +3",
    auto_read: false
}, {
    title: "Tidying the Heart",
    location: "Shibuya Bookstore",
    condition: "-",
    chapters: 2,
    reward: "Proficiency +3",
    auto_read: false,
    price: 700
}, {
    title: "Buchiko's Story",
    location: "Shibuya Bookstore",
    condition: "-",
    chapters: 2,
    reward: "Kindness +3",
    auto_read: false,
    price: 700
}, {
    title: "Medjed Menace",
    location: "Shibuya Bookstore",
    condition: "Available on 5/6",
    chapters: 2,
    reward: "Knowledge +3",
    auto_read: false,
    price: 1200
}, {
    title: "Wise Men's Words",
    location: "Shibuya Bookstore",
    condition: "Available on 6/1",
    chapters: 2,
    reward: "Knowledge +3",
    auto_read: false,
    price: 700
}, {
    title: "Ghost Encounters",
    location: "Shibuya Bookstore",
    condition: "Available on 7/1",
    chapters: 2,
    reward: "Guts +3",
    auto_read: false,
    price: 700
}, {
    title: "Playing the Game",
    location: "Shibuya Bookstore",
    condition: "Available on 7/16",
    chapters: 2,
    reward: "Charm +3",
    auto_read: false,
    price: 700
}, {
    title: "Weekend Parks",
    location: "Shibuya Bookstore",
    condition: "Available on 5/18",
    chapters: 1,
    reward: "Unlocks Inokashira Park",
    auto_read: true,
    price: 1800
}, {
    title: "Vague",
    location: "Shibuya Bookstore",
    condition: "Available on 5/18",
    chapters: 1,
    reward: "Unlocks Harajuku",
    auto_read: true,
    price: 1800
}, {
    title: "Nightlife Hotspots",
    location: "Shibuya Bookstore",
    condition: "Available on 6/1",
    chapters: 1,
    reward: "Unlocks Odaiba Seaside Park",
    auto_read: true,
    price: 1800
}, {
    title: "Fishpond Spotter",
    location: "Shibuya Bookstore",
    condition: "Available on 7/16",
    chapters: 1,
    reward: "Unlocks Ichigaya",
    auto_read: true,
    price: 1800
}, {
    title: "Tokyo Shrines",
    location: "Shibuya Bookstore",
    condition: "Available on 9/1",
    chapters: 1,
    reward: "Unlocks Meiji Shrine",
    auto_read: true,
    price: 1800
}, {
    title: "Musty Pages",
    location: "Shibuya Bookstore",
    condition: "Available on 9/1",
    chapters: 1,
    reward: "Unlocks Jinbocho",
    auto_read: true,
    price: 1800
}, {
    title: "Museum of Stars",
    location: "Shibuya Bookstore",
    condition: "Available on 9/1",
    chapters: 1,
    reward: "Unlocks Ikebukuro",
    auto_read: true,
    price: 1800
}];

/* The Shinjuku, Jinbocho and Request Reward books are missing */

const bookmarks = {};

const rem_size = parseFloat(getComputedStyle(document.documentElement).fontSize);

function createBookmark(id) {
    const size = [287, 404];
    const scale = rem_size / Math.max(size[0], size[1]);
    const read = localStorage.getItem(id) === "true";
    bookmarks[id] = read;

    const svg = document.createElementNS(SVG_NS, "svg");
    svg.id = id;
    svg.setAttribute('viewbox', '-58 0 404 404.54135');
    svg.setAttribute('width', `${size[0]*scale}`);
    svg.setAttribute('height', `${size[1]*scale}`);

    const path = document.createElementNS(SVG_NS, "path");

    path.setAttribute('d', 'm277.527344 0h-267.257813c-5.523437 0-10 4.476562-10 10v374.527344c-.011719 7.503906 4.183594 14.378906 10.855469 17.804687 6.675781 3.429688 14.707031 2.832031 20.796875-1.550781l111.976563-80.265625 111.976562 80.269531c6.097656 4.367188 14.121094 4.960938 20.792969 1.535156 6.667969-3.425781 10.863281-10.292968 10.863281-17.792968v-374.527344c0-5.523438-4.480469-10-10.003906-10zm0 0');
    path.setAttribute('fill', read ? 'green' : 'white');
    path.setAttribute('transform', `scale(${scale},${scale})`);

    svg.appendChild(path);

    return svg;
}

function onClickBookmark(e) {
    const read = !bookmarks[e.currentTarget.id];
    bookmarks[e.currentTarget.id] = read;

    e.currentTarget.querySelector("path").setAttribute("fill", read ? "green" : "white");
    localStorage.setItem(e.currentTarget.id, read);
}

books.forEach(book => {
    const tr = document.createElement("tr");
    const title_td = document.createElement("td");
    title_td.textContent = book.title;

    const location_td = document.createElement("td");
    location_td.textContent = book.location;

    const condition_td = document.createElement("td");
    condition_td.textContent = book.condition;

    const chapters_td = document.createElement("td");
    chapters_td.textContent = book.chapters;

    const reward_td = document.createElement("td");
    reward_td.textContent = book.reward;

    const price_td = document.createElement("td");
    price_td.textContent = book.price ? `${book.price}¥` : "-";

    const autoread_td = document.createElement("td");
    autoread_td.textContent = book.auto_read ? "Yes" : "No";

    const progress_td = document.createElement("td");
    const title_slug = book.title.toLowerCase().replace(" ", "-");

    for(var i = 0; i < book.chapters; i++) {
        const svg = createBookmark(`bookmark-${title_slug}-${i+1}`);
        svg.onclick = onClickBookmark;
        progress_td.appendChild(svg);
    }

    tr.appendChild(title_td);
    tr.appendChild(location_td);
    tr.appendChild(condition_td);
    tr.appendChild(chapters_td);
    tr.appendChild(reward_td);
    tr.appendChild(price_td);
    tr.appendChild(autoread_td);
    tr.appendChild(progress_td);

    document.querySelector("#books tbody").appendChild(tr);
});