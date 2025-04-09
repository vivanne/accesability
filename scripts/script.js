// document.addEventListener("keydown", function(event) {
//     // Controleer waar de focus ligt
//     const focusedElement = document.activeElement;
//     console.log("Het actieve element is:", focusedElement);

//     // Markeren met Ctrl + M
//     if ((event.ctrlKey || event.metaKey) && event.key === "m") {
//         event.preventDefault();
//         highlightSelection();
//     }

//     // Verwijderen van markering met Ctrl + U
//     if ((event.ctrlKey || event.metaKey) && event.key === "u") {
//         event.preventDefault();
//         removeHighlights();
//     }
// });

// function highlightSelection() {
//     let selection = window.getSelection();
//     if (!selection.rangeCount) return;

//     let range = selection.getRangeAt(0);
//     let span = document.createElement("span");
//     span.className = "highlight";
//     span.setAttribute("aria-label", "Gemarkeerde tekst");
//     span.setAttribute("role", "mark");
//     span.appendChild(range.extractContents());
//     range.insertNode(span);

//     // Verplaats de focus naar het gemarkeerde element
//     span.focus();
// }

// function removeHighlights() {
//     document.querySelectorAll(".highlight").forEach(span => {
//         let parent = span.parentNode;
//         while (span.firstChild) {
//             parent.insertBefore(span.firstChild, span);
//         }
//         parent.removeChild(span);
//     });
// }


document.addEventListener("DOMContentLoaded", function() {
    splitSentences();
});

document.addEventListener("keydown", function(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === "m") {
        event.preventDefault();
        highlightCurrentSentence();
    }
});

// Functie om alle zinnen in een paragraaf te splitsen in <span>
function splitSentences() {
    document.querySelectorAll("p").forEach(paragraph => {
        let text = paragraph.innerHTML;
        let sentences = text.match(/[^.!?]+[.!?]/g); // Splitsen op leestekens
        
        if (!sentences) return;

        paragraph.innerHTML = ""; // Leegmaken en opnieuw opbouwen

        sentences.forEach(sentence => {
            let span = document.createElement("span");
            span.textContent = sentence.trim() + " ";
            span.setAttribute("tabindex", "0"); // Maakt de zin focusbaar
            paragraph.appendChild(span);
        });
    });
}

// Functie om de huidige zin te markeren
function highlightCurrentSentence() {
    let activeElement = document.activeElement; // Zin waar de focus is

    if (activeElement.tagName === "SPAN") {
        activeElement.classList.toggle("highlight"); // Markeren of demarkeren
    }
}



// knoppen


const body = document.body;
let currentSize = 1; // in rem

document.getElementById("increase-font").addEventListener("click", () => {
  if (currentSize < 2) {
    currentSize += 0.1;
    body.style.fontSize = `${currentSize}rem`;
  }
});

document.getElementById("decrease-font").addEventListener("click", () => {
  if (currentSize > 0.6) {
    currentSize -= 0.1;
    body.style.fontSize = `${currentSize}rem`;
  }
});