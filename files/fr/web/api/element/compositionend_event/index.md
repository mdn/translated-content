---
title: "Element : évènement compositionend"
short-title: compositionend
slug: Web/API/Element/compositionend_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

L'évènement **`compositionend`** est déclenché lorsque la composition d'un texte avec une {{Glossary("input method editor", "méthode de saisie")}} est terminée ou annulée.

Par exemple, cet évènement peut être déclenché lorsqu'un·e utilisateur·ice saisit un caractère chinois en utilisant une {{Glossary("Input method editor", "méthode de saisie")}} [Pinyin](https://fr.wikipedia.org/wiki/Hanyu_pinyin).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("compositionend", (event) => { })

oncompositionend = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("CompositionEvent")}}. Hérite de {{DOMxRef("UIEvent")}} et de {{DOMxRef("Event")}}.

{{InheritanceDiagram("CompositionEvent")}}

## Exemples

```js
const elementSaisie = document.querySelector('input[type="text"]');

elementSaisie.addEventListener("compositionend", (event) => {
  console.log(`caractères générés : ${event.data}`);
});
```

### Exemple interactif

#### HTML

```html
<div class="controle">
  <p>
    Premièrement, sélectionnez la zone de texte, puis ouvrez la méthode de
    saisie&nbsp;:
  </p>
  <ul>
    <li>sur macOS, appuyez sur <kbd>option</kbd> + <kbd>`</kbd></li>
    <li>sur Windows, appuyez sur <kbd>windows</kbd> + <kbd>.</kbd></li>
  </ul>
  <label for="exemple">Exemple de saisie</label>
  <input type="text" id="exemple" name="exemple" />
</div>

<div class="journal-event">
  <label for="journalEvent">Journal évènement&nbsp;:</label>
  <textarea
    readonly
    class="contenu-journal-event"
    rows="8"
    cols="25"
    id="journalEvent"></textarea>
  <button class="effacer-journal">Effacer</button>
</div>
```

```css hidden
body {
  padding: 0.2rem;
  display: grid;
  grid-template-areas: "control log";
}

.controle {
  grid-area: control;
}

.journal-event {
  grid-area: log;
}

.contenu-journal-event {
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

#### JavaScript

```js
const elementSaisie = document.querySelector('input[type="text"]');
const journal = document.querySelector(".contenu-journal-event");
const effacerJournal = document.querySelector(".effacer-journal");

effacerJournal.addEventListener("click", () => {
  journal.textContent = "";
});

function gestionEvenement(event) {
  journal.textContent += `${event.type}: ${event.data}\n`;
}

elementSaisie.addEventListener("compositionstart", gestionEvenement);
elementSaisie.addEventListener("compositionupdate", gestionEvenement);
elementSaisie.addEventListener("compositionend", gestionEvenement);
```

#### Résultat

{{EmbedLiveSample("Exemple interactif", "100%", 180)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Évènements associés&nbsp;: {{DOMxRef("Element/compositionstart_event", "compositionstart")}}, {{DOMxRef("Element/compositionupdate_event", "compositionupdate")}}.
