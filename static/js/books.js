/* The Jinbocho and Request Reward books are missing */
window.books = {};

function onClickBookmark(e) {
    const title = e.currentTarget.getAttribute('data-title');
    const chapter = parseInt(e.currentTarget.getAttribute('data-chapter'));
    const book = window.books[title];
    
    if(chapter === book.chapters_read) book.chapters_read = 0;
    else book.chapters_read = chapter;

    localStorage.setItem(`bookmark-${title}`, book.chapters_read);

    for(var i = 0; i < book.progress_td.childElementCount; i++) {
        const bookmark = book.progress_td.children[i];

        if(i < book.chapters_read) bookmark.classList.add("read");
        else bookmark.classList.remove("read");
    };
}

function onChangeCheckbox(e) {
    localStorage.setItem(`book-${e.currentTarget.id.substr(3)}`, e.currentTarget.checked);
}

function load_book_from_row(row) {
    const checkbox = row.children[5].children[0];
    const progress_td = row.children[6];
    const total_chapters = row.children[6].children.length;
    const slug = progress_td.children[0].getAttribute("data-title");
    
    const acquired = localStorage.getItem(`book-${slug}`) === 'true';
    const chapters_read = parseInt(localStorage.getItem(`bookmark-${slug}`));
    
    if(acquired) checkbox.checked = true;
    checkbox.onchange = onChangeCheckbox;

    for(var i = 0; i < progress_td.childElementCount; i++) {
        const bookmark = progress_td.children[i];
        bookmark.onclick = onClickBookmark;

        if(i < chapters_read) bookmark.classList.add("read");
        else bookmark.classList.remove("read");
    }
    
    window.books[slug] = {
        // Basic info about the book
        title: row.children[0].textContent,
        location: row.children[1].textContent,
        conditions: row.children[2].textContent,
        chapters: total_chapters,
        reward: row.children[4].textContent,
        price: parseInt(row.children[5].textContent) || undefined,

        // Interactivity info
        chapters_read: chapters_read,
        progress_td: progress_td
    };
}

document.querySelector("#books tbody").childNodes.forEach(load_book_from_row);
document.querySelector("#magazines tbody").childNodes.forEach(load_book_from_row);
