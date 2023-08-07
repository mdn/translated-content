---
title: Event.eventPhase
slug: Web/API/Event/eventPhase
---

{{ApiRef("DOM")}}

La propriété en lecture seule **`eventPhase`**, rattachée à l'interface [`Event`](/fr/docs/Web/API/Event), indique la phase du flux d'évènement en cours d'évaluation.

## Valeur

Cette propriété renvoie un entier qui indique la phase actuelle d'évaluation du flux d'évènement. Les valeurs possibles sont&nbsp;:

- `Event.NONE (0)`
  - : L'évènement n'est pas en cours de traitement à ce moment.
- `Event.CAPTURING_PHASE (1)`
  - : L'évènement est en train d'être propagé sur les ancêtres de la cible. Le processus démarre avec [`Window`](/fr/docs/Web/API/Window), suivi de [`Document`](/fr/docs/Web/API/Document), suivi de [`HTMLHtmlElement`](/fr/docs/Web/API/HTMLHtmlElement), et ainsi de suite jusqu'à ce que le parent de la cible soit atteint. [Les gestionnaires d'évènements](/fr/docs/Web/API/EventTarget/addEventListener) enregistrés en mode de capture lorsque [`EventTarget.addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) a été appelé seront déclenchés lors de cette phase.
- `Event.AT_TARGET (2)`
  - : L'évènement est arrivé jusqu'à [la cible de l'évènement](/fr/docs/Web/API/EventTarget). Les gestionnaires d'évènements enregistrés pour cette phase sont appelés à ce moment. Si [`Event.bubbles`](/fr/docs/Web/API/Event/bubbles) vaut `false`, le traitement de l'évènement est terminé après la fin de cette phase.
- `Event.BUBBLING_PHASE (3)`
  - : L'évènement est propagé en remontant parmi les ancêtres de la cible dans l'ordre inverse, en commençant par le parent direct, jusqu'à finalement atteindre l'objet [`Window`](/fr/docs/Web/API/Window) contenant. C'est _le bouillonnement_ (<i lang="en">bubbling</i> en anglais). Il se produit uniquement si [`Event.bubbles`](/fr/docs/Web/API/Event/bubbles) vaut `true`. [Les gestionnaires d'évènement](/fr/docs/Web/API/EventTarget/addEventListener) enregistrés pour cette phase sont déclenchés lors de ce processus.

## Exemple

### HTML

```html
<h4>Chaîne de propagation d'un évènement</h4>
<ul>
  <li>Cliquez sur 'd1'</li>
  <li>Analysez la chaîne de propagation de l'évènement</li>
  <li>Cliquez sur le div suivant et répétez l'expérience</li>
  <li>Changez le mode de capture</li>
  <li>Répétez l'expérience</li>
</ul>
<input type="checkbox" id="chCapture" />
<label for="chCapture">Utiliser la capture</label>
<div id="d1">
  d1
  <div id="d2">
    d2
    <div id="d3">
      d3
      <div id="d4">d4</div>
    </div>
  </div>
</div>
<div id="divInfo"></div>
```

### CSS

```css
div {
  margin: 20px;
  padding: 4px;
  border: thin black solid;
}

#divInfo {
  margin: 18px;
  padding: 8px;
  background-color: white;
  font-size: 80%;
}
```

### JavaScript

```js
let clear = false,
  divInfo = null,
  divs = null,
  chCapture = null;

window.onload = function () {
  divInfo = document.getElementById("divInfo");
  divs = document.getElementsByTagName("div");
  chCapture = document.getElementById("chCapture");
  chCapture.onclick = function () {
    removeListeners();
    addListeners();
    clearDivs();
  };
  clearDivs();
  addListeners();
};

function removeListeners() {
  for (const div of divs) {
    if (div.id != "divInfo") {
      div.removeEventListener("click", onDivClick, true);
      div.removeEventListener("click", onDivClick, false);
    }
  }
}

function addListeners() {
  for (const div of divs) {
    if (div.id != "divInfo") {
      if (chCapture.checked) {
        div.addEventListener("click", onDivClick, true);
      } else {
        div.addEventListener("click", onDivClick, false);
        div.onmousemove = function () {
          clear = true;
        };
      }
    }
  }
}

function onDivClick(e) {
  if (clear) {
    clearDivs();
    clear = false;
  }
  if (e.eventPhase == 2) {
    e.currentTarget.style.backgroundColor = "red";
  }
  const level =
    e.eventPhase == 0
      ? "none"
      : e.eventPhase == 1
      ? "capturing"
      : e.eventPhase == 2
      ? "target"
      : e.eventPhase == 3
      ? "bubbling"
      : "error";
  const para = document.createElement("p");
  para.textContent = `${e.currentTarget.id}; eventPhase: ${level}`;
  divInfo.appendChild(para);
}

function clearDivs() {
  for (let i = 0; i < divs.length; i++) {
    if (divs[i].id != "divInfo") {
      divs[i].style.backgroundColor = i & 1 ? "#f6eedb" : "#cceeff";
    }
  }
  divInfo.textContent = "";
}
```

### Résultat

{{EmbedLiveSample("", '', '700')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
