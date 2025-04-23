let lastFocusedSpan = null;
let noteCounter = 1; // ✨ TELLER VOOR NOTITIES

const styleMenu = document.getElementById("style-menu");

document.addEventListener("DOMContentLoaded", function() {
    splitSentences();
});

document.addEventListener("keydown", function(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === "h") {
        event.preventDefault();
        toggleHighlightCurrentSentence();
    }

    if (event.key === "j") {
        const active = document.activeElement;

        if (
            !active.closest(".notitie") &&
            active.tagName !== "TEXTAREA" &&
            active.tagName !== "INPUT"
        ) {
            const menu = document.getElementById('style-menu');
            menu.classList.toggle('hidden');
            toggleTabIndex();
        }
    }

        // F om inhoudsopgave popover te toggelen
        if (event.key.toLowerCase() === "f") {
            const activeElement = document.activeElement;

            // Skip if typing in a textarea or input
            if (activeElement.tagName === "TEXTAREA" || activeElement.tagName === "INPUT") {
            return;
            }

            const button = document.querySelector("[popovertarget='inhoudsopgave-menu']");
            if (button) {
            button.click(); // Triggert popover toggle
            }
        }

    // if (event.key === "f") {
    //     const active = document.activeElement;
    
    //     if (
    //         !active.closest(".notitie") &&
    //         active.tagName !== "TEXTAREA" &&
    //         active.tagName !== "INPUT"
    //     ) {
    //         const menu = document.getElementById('inhoudsopgave-menu');
    //         const isHidden = menu.classList.toggle('hidden');
    
    //         // Zet tabIndex goed
    //         toggleTabIndex();
    
    //         // Zet focus op eerste linkje zodra zichtbaar
    //         if (!isHidden) {
    //             const firstLink = menu.querySelector('a');
    //             if (firstLink) {
    //                 setTimeout(() => {
    //                     firstLink.focus();
    //                 }, 0); // wacht tot DOM klaar is met togglen
    //             }
    //         }
    //     }
    // }


    if (event.key === " " && document.activeElement.tagName === "SPAN") {
        event.preventDefault();
        const span = document.activeElement;
        const parentNote = span.closest(".notitie");

        if (parentNote) {
            editNoteSpan(parentNote);
        } else {
            addInlineInput(span);
        }
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        navigateColorMenu(event.key);
    }

    if (event.key === "Enter" && document.activeElement.classList.contains("color-option")) {
        selectColor();
    }

    if (event.key === "Escape" && document.activeElement.classList.contains("color-option")) {
        removeColorMenu();
    }
});

function toggleHighlightCurrentSentence() {
  let activeElement = document.activeElement;

  if (activeElement.tagName === "SPAN") {
    if (activeElement.classList.contains("highlighted")) {
        activeElement.classList.remove("highlighted");
        removeColorMenu();
        console.log("Highlight removed");
    } else {
        lastFocusedSpan = activeElement;
        activeElement.classList.add("highlighted");
    
        // 🔥 UNIEK ID TOEVOEGEN
        if (!activeElement.id) {
            activeElement.id = "highlight-" + crypto.randomUUID();
        }
    
        addToInhoudsopgave(activeElement);
        showColorMenu(activeElement);
        console.log("Highlight applied, text color set to black");
    }
    
  } else {
      console.log("No span selected");
  }
}



function toggleTabIndex() {
  const menu = document.getElementById('style-menu');
  const bodyElements = Array.from(document.body.querySelectorAll('p, span, button, a'));

  if (menu.classList.contains('hidden')) {
      bodyElements.forEach(element => {
          element.setAttribute('tabindex', '0');
      });
  } else {
      bodyElements.forEach(element => {
          if (!element.closest('#style-menu')) {
              element.setAttribute('tabindex', '-1');
          }
      });
  }
}

function addToInhoudsopgave(span) {
    const inhoudsopgave = document.getElementById("inhoudsopgave-menu");
    const section = span.closest("section");
    const sectionId = section ? section.id : "overig";
    const sectionTitle = section ? section.querySelector("h2, h1, h3, h4, h5")?.textContent || "Zonder titel" : "Overig";
    const sentence = span.textContent.trim();

    let sectionList = inhoudsopgave.querySelector(`[data-section="${sectionId}"]`);

    if (!sectionList) {
        const wrapper = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = sectionTitle;
        wrapper.appendChild(title);

        const ul = document.createElement("ul");
        ul.setAttribute("data-section", sectionId);
        ul.classList.add("inhoudsopgave-lijst");

        wrapper.appendChild(ul);
        inhoudsopgave.appendChild(wrapper);

        sectionList = ul;
    }

    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = sentence;
    a.href = `#${span.id}`;
    a.setAttribute("aria-label", `Spring naar markering: ${sentence}`);
    a.setAttribute("data-highlight-id", span.id);
    a.tabIndex = 0;

    a.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            document.getElementById(span.id)?.scrollIntoView({ behavior: "smooth", block: "center" });
            span.focus();
        }
    });

    li.appendChild(a);
    sectionList.appendChild(li); // ✅ FIX HIER
}


document.addEventListener("DOMContentLoaded", toggleTabIndex);

function showColorMenu(targetSpan) {
    removeColorMenu();

    const menu = document.createElement("div");
    menu.classList.add("color-menu");

    const colors = ["red", "yellow", "green", "blue", "purple"];

    colors.forEach(color => {
        const btn = document.createElement("button");
        btn.classList.add("color-option", color);
        btn.setAttribute("aria-label", `Markeer met ${color}`);
        btn.addEventListener("click", () => {
          targetSpan.style.backgroundColor = getComputedStyle(btn).backgroundColor;
          targetSpan.style.color = "black";
          removeColorMenu();
      });
        menu.appendChild(btn);
    });

    document.body.appendChild(menu);

    const rect = targetSpan.getBoundingClientRect();
    menu.style.top = `${window.scrollY + rect.bottom + 5}px`;
    menu.style.left = `${window.scrollX + rect.left}px`;

    menu.firstChild.focus();

    document.addEventListener("click", handleOutsideClick);
}

function removeColorMenu() {
    const existing = document.querySelector(".color-menu");
    if (existing) existing.remove();
    document.removeEventListener("click", handleOutsideClick);

    if (lastFocusedSpan) {
        lastFocusedSpan.focus();
    }
}

function handleOutsideClick(e) {
    if (!e.target.closest(".color-menu")) {
        removeColorMenu();
    }
}

function navigateColorMenu(direction) {
    const menu = document.querySelector(".color-menu");
    if (!menu) return;

    const options = Array.from(menu.querySelectorAll(".color-option"));
    let currentIndex = options.findIndex(option => option.classList.contains("selected"));

    if (currentIndex === -1) currentIndex = 0;

    options[currentIndex].classList.remove("selected");

    if (direction === "ArrowDown") {
        currentIndex = (currentIndex + 1) % options.length;
    } else if (direction === "ArrowUp") {
        currentIndex = (currentIndex - 1 + options.length) % options.length;
    }

    options[currentIndex].classList.add("selected");
    options[currentIndex].focus();
}

function selectColor() {
    const selectedOption = document.querySelector(".color-option.selected");
    if (!selectedOption) return;

    const activeElement = document.activeElement;
    activeElement.style.backgroundColor = getComputedStyle(selectedOption).backgroundColor;

    removeColorMenu();
}

function splitSentences() {
    document.querySelectorAll("p").forEach(paragraph => {
        let text = paragraph.innerHTML;
        let sentences = text.match(/[^.!?]+[.!?]/g);

        if (!sentences) return;

        paragraph.innerHTML = "";

        sentences.forEach(sentence => {
            let span = document.createElement("span");
            span.textContent = sentence.trim() + " ";
            span.setAttribute("tabindex", "0");
            paragraph.appendChild(span);
        });
    });
}

// -------------------- CUSTOM NOTES -------------------------

function addInlineInput(targetSpan) {
    const paragraph = targetSpan.closest("p");
    const allSpans = Array.from(paragraph.querySelectorAll("span"));
    const index = allSpans.indexOf(targetSpan);
    if (index === -1) return;

    const beforeSpans = allSpans.slice(0, index + 1);
    const afterSpans = allSpans.slice(index + 1);

    const beforePara = document.createElement("p");
    beforeSpans.forEach(span => beforePara.appendChild(span));

    const afterPara = document.createElement("p");
    afterSpans.forEach(span => afterPara.appendChild(span));

    const input = document.createElement("textarea");
    input.placeholder = "Voeg je notitie toe...";
    input.classList.add("inline-input");
    input.style.display = "block";
    input.style.margin = "1.5em 0";
    input.style.padding = "6px 10px";
    input.style.fontSize = "1rem";
    input.setAttribute("tabindex", "0");

    paragraph.replaceWith(beforePara);
    beforePara.after(input, afterPara);

    input.focus();
    autoResizeTextarea(input); // <-- hier meteen al

    input.addEventListener("input", function () {
        autoResizeTextarea(input);
    });

    input.addEventListener("keydown", function(e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            const noteText = input.value.trim();
            if (noteText !== "") {
                const wrapper = document.createElement("div");
                wrapper.classList.add("notitie-wrapper");
                
                const label = document.createElement("p");
                label.textContent = `Notitie ${noteCounter}`;
                label.classList.add("notitie-label");
                
                const notePara = document.createElement("p");
                notePara.classList.add("notitie");
                notePara.setAttribute("tabindex", "0");
                notePara.setAttribute("aria-label", `Notitie ${noteCounter}`);
                notePara.setAttribute("role", "region");
                
                wrapper.appendChild(label);
                wrapper.appendChild(notePara);
                
                noteCounter++;

                noteText.split(/(?<=[.!?])\s+/).forEach(sentence => {
                    const span = document.createElement("span");
                    span.textContent = sentence.trim() + " ";
                    span.setAttribute("tabindex", "0");
                    notePara.appendChild(span);
                });

                input.replaceWith(wrapper);
            } else {
                input.remove();
            }
        }
    });
}

document.addEventListener("keydown", function(event) {
    const active = document.activeElement;

    if (active.tagName === "SPAN" && active.closest(".notitie")) {
        if ((event.ctrlKey || event.metaKey) && event.key === "e") {
            event.preventDefault();
            editNoteSpan(active.closest("p"));
        }

        if ((event.key === "Backspace" || event.key === "Delete") && !event.ctrlKey && !event.metaKey) {
            event.preventDefault();
            deleteNoteSpan(active.closest("p"));
        }
    }
});

function autoResizeTextarea(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

function editNoteSpan(notePara) {
    const allText = Array.from(notePara.querySelectorAll("span"))
        .map(span => span.textContent.trim())
        .join(" ");

    const input = document.createElement("textarea");
    input.value = allText;
    input.classList.add("inline-input");
    input.style.display = "block";
    input.style.margin = "1.5em 0";
    input.style.padding = "6px 10px";
    input.style.fontSize = "1rem";
    input.setAttribute("tabindex", "0");

    notePara.replaceWith(input);
    input.focus();

    input.addEventListener("input", function () {
        autoResizeTextarea(input);
    });

    input.addEventListener("keydown", function(e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            const noteText = input.value.trim();
            if (noteText !== "") {
                const newPara = document.createElement("p");
                newPara.classList.add("notitie");
                newPara.setAttribute("tabindex", "0");
                newPara.setAttribute("aria-label", `Notitie ${noteCounter}`);
                newPara.setAttribute("role", "region");
                noteCounter++;

                noteText.split(/(?<=[.!?])\s+/).forEach(sentence => {
                    const span = document.createElement("span");
                    span.textContent = sentence.trim() + " ";
                    span.setAttribute("tabindex", "0");
                    newPara.appendChild(span);
                });

                input.replaceWith(newPara);
            } else {
                input.remove();
            }
        }
    });
}

function deleteNoteSpan(notePara) {
    const confirmDelete = confirm("Wil je deze notitie verwijderen?");
    if (confirmDelete) {
        const wrapper = notePara.closest(".notitie-wrapper");
        if (wrapper) {
            wrapper.remove();
        } else {
            notePara.remove();
        }
    }
}

// ------------------ SLIDERS -------------------

document.getElementById('menu-toggle').addEventListener('click', function () {
  const menu = document.getElementById('style-menu');
  menu.classList.toggle('hidden');
});

const sliders = document.querySelectorAll('input[type="range"]');
sliders.forEach(slider => {
  slider.addEventListener('click', function(event) {
      event.stopPropagation();
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const fontSizeSlider = document.getElementById("font-size-slider");
  const fontWeightSlider = document.getElementById("font-weight-slider");
  const lineHeightSlider = document.getElementById("line-height-slider");
  const bodyMarginSlider = document.getElementById("body-margin-slider");

  const fontSizeValue = document.getElementById("font-size-value");
  const fontWeightValue = document.getElementById("font-weight-value");
  const lineHeightValue = document.getElementById("line-height-value");
  const bodyMarginValue = document.getElementById("body-margin-value");

  fontSizeSlider.addEventListener("input", function() {
      const value = fontSizeSlider.value;
      fontSizeValue.textContent = `${value}px`;
      document.body.style.fontSize = `${value}px`;
  });

  fontWeightSlider.addEventListener("input", function() {
      const value = fontWeightSlider.value;
      fontWeightValue.textContent = value;
      document.body.style.fontWeight = value;
  });

  lineHeightSlider.addEventListener("input", function() {
      const value = lineHeightSlider.value;
      lineHeightValue.textContent = value;
      document.body.style.lineHeight = value;
  });

  bodyMarginSlider.addEventListener("input", function() {
      const value = bodyMarginSlider.value;
      bodyMarginValue.textContent = `${value}vmin`;
      document.body.style.margin = `${value}vmin`;
  });
});



// fkdljfkajdlfjdlkjflaf

let currentTrap = null;

function trapFocusWithin(container) {
    const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])'
    ];

    const focusableElements = container.querySelectorAll(focusableSelectors.join(','));
    if (focusableElements.length === 0) return;

    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    function handleTrap(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstEl) {
                    e.preventDefault();
                    lastEl.focus();
                }
            } else {
                if (document.activeElement === lastEl) {
                    e.preventDefault();
                    firstEl.focus();
                }
            }
        }

        if (e.key === 'Escape') {
            container.hidePopover?.();
            removeTrap();
        }
    }

    function removeTrap() {
        document.removeEventListener('keydown', handleTrap);
        if (currentTrap === container) currentTrap = null;
    }

    // Sluit de vorige trap
    if (currentTrap && currentTrap !== container) {
        currentTrap.hidePopover?.();
        document.removeEventListener('keydown', handleTrap); // extra voorzichtig
    }

    // Activeer nieuwe trap
    currentTrap = container;
    document.addEventListener('keydown', handleTrap);
    firstEl.focus();
}

// Koppel focus trap aan meerdere popovers
['#inhoudsopgave-menu'].forEach(selector => {
    const popover = document.querySelector(selector);
    if (!popover) return;

    popover.addEventListener('toggle', () => {
        if (popover.matches(':popover-open')) {
            trapFocusWithin(popover);
        } else {
            document.removeEventListener('keydown', handleTrap); // Ensure trap is removed when popover is closed
        }
    });

    // Ensure focus trapping is enforced when the popover is opened
    popover.addEventListener('focusout', (e) => {
        if (!popover.contains(e.relatedTarget)) {
            const focusableElements = popover.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])');
            if (focusableElements.length > 0) {
                e.preventDefault();
                focusableElements[0].focus(); // Redirect focus back to the first element
            }
        }
    });
});

// Handle the style menu separately since it uses a class toggle
['#style-menu'].forEach(selector => {
    const stylenav = document.querySelector(selector);
    if (!stylenav) return;

    const observer = new MutationObserver(() => {
        if (!stylenav.classList.contains('hidden')) {
            trapFocusWithin(stylenav);
        } else {
            document.removeEventListener('keydown', handleTrap); // Remove trap when menu is hidden
        }
    });

    observer.observe(stylenav, { attributes: true, attributeFilter: ['class'] });
});



// STYLE MENU-------

