---
title: "HTMLTextAreaElement : évènement select"
short-title: select
slug: Web/API/HTMLTextAreaElement/select_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Selection API")}}

L'évènement **`select`** de {{DOMxRef("Selection", "l'API Selection")}} se déclenche lorsqu'un texte a été sélectionné.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("select", (event) => { })

onselect = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

### Journalisation de la sélection

```html
<textarea>Essayez de sélectionner du texte dans cet élément.</textarea>
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

const textarea = document.querySelector("textarea");
textarea.addEventListener("select", logSelection);
```

{{EmbedLiveSample("Journalisation de la sélection")}}

### Équivalent `onselect`

Vous pouvez aussi définir le gestionnaire d'évènement avec la propriété `onselect`&nbsp;:

```js
textarea.onselect = logSelection;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLTextAreaElement.select()")}}
