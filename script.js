const slider = document.querySelector('.items');
// flag boolean variable, depending on clicking or not
let isDown = false;
// when user initially clicks down
let startX;
// slider scrollLeft
let scrollLeft;

// mouse events: mousedown, moseleave, mouseup, mousemove
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    // pageX takes into account any horizontal scrolling of the page
    // console.log(e.pageX);
    // in case there are margins on the slider, we subtract them with offsetLeft
    startX = e.pageX - slider.offsetLeft;
    // console.log(startX)
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // stop the function from running
    // console.count(isDown);
    // console.log(startX);
    e.preventDefault(); // stop selecting text
    // figure out where the cursor is when user is moving it
    const x = e.pageX - slider.offsetLeft;
    // console.log({x, startX});
    // how far did we go from initial click
    const walk = (x - startX) * 3; // for every px moved, we scroll the slider 3px
    // console.log(walk);
    // we have captured the scrollLeft value in initial click
    // so that now we can reference it here
    slider.scrollLeft = scrollLeft - walk;
});