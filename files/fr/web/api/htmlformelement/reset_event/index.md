---
title: "HTMLFormElement : évènement reset"
short-title: reset
slug: Web/API/HTMLFormElement/reset_event
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("HTML DOM")}}

L'évènement **`reset`** de l'interface {{DOMxRef("HTMLFormElement")}} se déclenche lorsqu'un élément HTML {{HTMLElement("form")}} est réinitialisé.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} ou définissez une propriété gestionnaire d'évènements.

```js-nolint
addEventListener("reset", (event) => { })

onreset = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

Cet exemple utilise {{DOMxRef("EventTarget.addEventListener()")}} pour écouter les réinitialisations de formulaire, et enregistre le {{DOMxRef("Event.timeStamp")}} actuel à chaque occurrence.

### HTML

```html
<form id="form">
  <label>Champ de test&nbsp;: <input type="text" /></label>
  <br /><br />
  <button type="reset">Réinitialiser le formulaire</button>
</form>
<p id="log"></p>
```

### JavaScript

```js
const form = document.getElementById("form");
const log = document.getElementById("log");

function logReset(event) {
  log.textContent = `Formulaire réinitialisé ! Horodatage : ${event.timeStamp}`;
}

form.addEventListener("reset", logReset);
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("form")}}
