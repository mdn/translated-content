---
title: "HTMLInputElement : évènement select"
short-title: select
slug: Web/API/HTMLInputElement/select_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

L'évènement **`select`** de l'interface {{DOMxRef("HTMLInputElement")}} est déclenché lorsqu'une portion de texte est sélectionnée.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou affectez un gestionnaire d'évènements à la propriété correspondante.

```js-nolint
addEventListener("select", (event) => { })

onselect = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

### Journal de sélection

```html
<input value="Essayez de sélectionner du texte dans cet élément." />
<p id="log"></p>
```

```js
function logSelection(event) {
  const log = document.getElementById("log");
  const selection = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd,
  );
  log.textContent = `Vous avez sélectionné : ${selection}`;
}

const input = document.querySelector("input");
input.addEventListener("select", logSelection);
```

{{EmbedLiveSample("Journal de sélection")}}

### Équivalent `onselect`

Vous pouvez aussi définir le gestionnaire d'évènements via la propriété `onselect`&nbsp;:

```js
input.onselect = logSelection;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
