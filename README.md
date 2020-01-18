### Click and drag slider

This is a unique way to display a slider through event listeners for mouse events and getting positions on the page.

Index.html includes a wrapper div and 25 items representing slides with numbers.

Some important css properties here are overflow-x: scroll => provides scrolling mechanism, white-space: nowrap => the text stays on the same line, user-select: none => text of the element and sub-elements is not able to be selected.

Also inline-flex property makes the flex container display inline. 

item:nth-child helps us to target each slide, even and odd slides. With even slides, we set transform to rotate y-position and with odd slides we turn the values into negative. Along with perspective property, we get the folded paper effect.

Our goal was to remember the initial click and the distance we covered by moving the mouse. That distance is applied to slider container.

Using let we define a flag variable, starting value variable and scrolled amount variable. Next, we attach event listeners to slider container.

Mousedown event triggers a function which sets isDown to true, adds a class to change the background color, cursor and scale. startX uses event.pageX to determine where on the page we clicked and offsetLeft to adjust it for possible margin/padding. The scrollLeft variable gets the amount we moved (left or right)using the scrollLeft method on slider.

Mouseleave and mouseup functions keep isDown false and remove active class.

Mousemove function passes an event argument through an anonymous funcion. When isDown is true, we run e.preventDefault. Next we calculate x position. The x variable gives us the position of the cursor when we move left or right, minus possible slider offsetLeft. Our walk variable indicates how far we have deviated from our initial click. Finally, we subtract the value for the walk from scrollLeft, in order to move the slides left or right in the container.

