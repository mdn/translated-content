---
title: compositionstart
slug: Web/API/Element/compositionstart_event
---

{{APIRef}}

L'événement **`compositionstart`** est déclenché lorsqu'un système de composition de texte tel qu'une {{glossary("input method editor","méthode de saisie")}} démarre une nouvelle session de composition.

Par exemple, cet événement pourrait être déclenché après qu'un utilisateur a commencé à saisir un caractère chinois en utilisant un [Pinyin](https://en.wikipedia.org/wiki/Pinyin) IME.

<table class="properties">
  <tbody>
    <tr>
      <th>Propagation</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th>Annulable</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("CompositionEvent")}}</td>
    </tr>
    <tr>
      <th>Propriété du gestionnaire d'événements</th>
      <td>Aucune</td>
    </tr>
  </tbody>
</table>

## Exemples

```js
const inputElement = document.querySelector('input[type="text"]');

inputElement.addEventListener("compositionstart", (event) => {
  console.log(`generated characters were: ${event.data}`);
});
```

### Exemple concret

#### HTML

```html
<div class="control">
  <label for="name"
    >Sur macOS, cliquez dans la zone de texte ci-dessous,<br />
    puis tapez <kbd>option</kbd> + <kbd>`</kbd>, puis <kbd>a</kbd> :</label
  >
  <input type="text" id="example" name="example" />
</div>

<div class="event-log">
  <label>Event log:</label>
  <textarea readonly class="event-log-contents" rows="8" cols="25"></textarea>
  <button class="clear-log">Clear</button>
</div>
```

```css hidden
body {
  padding: 0.2rem;
  display: grid;
  grid-template-areas: "control log";
}

.control {
  grid-area: control;
}

.event-log {
  grid-area: log;
}

.event-log-contents {
  resize: none;
}

label,
button {
  display: block;
}

input[type="text"] {
  margin: 0.5rem 0;
}

kbd {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

#### JS

```js
const inputElement = document.querySelector('input[type="text"]');
const log = document.querySelector(".event-log-contents");
const clearLog = document.querySelector(".clear-log");

clearLog.addEventListener("click", () => {
  log.textContent = "";
});

function handleEvent(event) {
  log.textContent = log.textContent + `${event.type}: ${event.data}\n`;
}

inputElement.addEventListener("compositionstart", handleEvent);
inputElement.addEventListener("compositionupdate", handleEvent);
inputElement.addEventListener("compositionend", handleEvent);
```

#### Résultat

{{ EmbedLiveSample('Exemple_concret', '100%', '180px') }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Événements liés : {{domxref("Element/compositionend_event", "compositionend")}}, {{domxref("Element/compositionupdate_event", "compositionupdate")}}.
