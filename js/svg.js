const SVG_NS = 'http://www.w3.org/2000/svg';

window.createSVG = function(attributes) {
    const svg = document.createElementNS(SVG_NS, "svg");
    
    Object.keys(attributes).forEach(name => svg.setAttribute(name, attributes[name]));

    return svg;
}

window.createPath = function(path, attributes) {
    const path_el = document.createElementNS(SVG_NS, "path");
    
    path_el.setAttribute('d', path);
    Object.keys(attributes).forEach(name => path_el.setAttribute(name, attributes[name]));

    return path_el;
}