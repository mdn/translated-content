---
title: "Element : évènement compositionstart"
short-title: compositionstart
slug: Web/API/Element/compositionstart_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("UI Events")}}

L'évènement **`compositionstart`** est déclenché lorsqu'un système de composition de texte tel qu'une {{Glossary("input method editor", "méthode de saisie")}} démarre une nouvelle session de composition.

Par exemple, cet évènement peut être déclenché lorsqu'un·e utilisateur·ice commence à saisir un caractère chinois en utilisant une {{Glossary("Input method editor", "méthode de saisie")}} [Pinyin](https://fr.wikipedia.org/wiki/Hanyu_pinyin).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("compositionstart", (event) => { })

oncompositionstart = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("CompositionEvent")}}. Hérite de {{DOMxRef("UIEvent")}} et de {{DOMxRef("Event")}}.

{{InheritanceDiagram("CompositionEvent")}}

## Propriétés de l'évènement

_Cette interface hérite également des propriétés de son parent, {{DOMxRef("UIEvent")}}, et de son ancêtre — {{DOMxRef("Event")}}._

- {{DOMxRef("CompositionEvent.data")}} {{ReadOnlyInline}}
  - : Retourne les caractères générés par la méthode de saisie qui a déclenché l'évènement&nbsp;; cela varie en fonction du type d'évènement qui a généré l'objet `CompositionEvent`.
- {{DOMxRef("CompositionEvent.locale")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Retourne la locale de la méthode de saisie actuelle (par exemple, la locale de la disposition du clavier si la composition est associée à une {{Glossary("Input method editor", "méthode de saisie")}}).

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

- Évènements associés&nbsp;: {{DOMxRef("Element/compositionend_event", "compositionend")}}, {{DOMxRef("Element/compositionupdate_event", "compositionupdate")}}.
