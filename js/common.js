// Creates slug from title
function slugify(text) {
    return text.toLowerCase().replace(/ /g, "-");
}