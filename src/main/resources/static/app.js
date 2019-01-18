
// Print a message in console.
console.log("I'm printing something in the console");

//Add a <p> element (manually on your HTML) , get it from JavaScript (use getElementById)
// and print its content (textContent) in the console.

let p = document.getElementById("p");
p.textContent = "I love to print stuff in the terminal";
console.log(p.textContent);

// Using JavaScript, create and add another <p> element (use createElement)
// with the same content (textContent) as the other <p> you added in the HTML.
// Note that you need a <div> in the HTML so you could insert the new <p> there
// as a child (appendChild). So add the <div> manually in the HTML first.

let div = document.createElement("div");
div.textContent = (p.textContent);

let container = document.getElementById("container");
container.appendChild(div);

//Detect onmouseover (similar to onclick) on the first paragraph and every time it happens,
// add a <p> element with the message "mouse detected" in the <div>.

function mouseOver() {

    let mouseOver = document.createElement("p");

    p.onmouseover = function () {
        mouseOver.textContent = "mouse detected";
        container.appendChild(mouseOver);
    }

}

// Now, keep a counter variable with the times the mouse was detected and,
// instead of creating paragraphs, display one message like this: "mouse detected 5 times".

function countOver(){

    let mouseOver = document.createElement("p");
    let count = 0;

    p.onmouseover = function () {
        count++;
        mouseOver.textContent = "mouse detected " + count + " times";
        container.appendChild(mouseOver);


    }

}