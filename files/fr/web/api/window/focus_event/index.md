---
title: "Window : évènement focus"
short-title: focus
slug: Web/API/Window/focus_event
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef}}

L'évènement **`focus`** est déclenché lorsqu'un élément reçoit la sélection.

L'opposé de `focus` est {{DOMxRef("Window/blur_event", "blur")}}.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utiliser le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("focus", (event) => { })

onfocus = (event) => { }
```

## Type d'évènement

Un {{DOMxRef("FocusEvent")}}. Hérite de {{DOMxRef("UIEvent")}} et {{DOMxRef("Event")}}.

{{InheritanceDiagram("FocusEvent")}}

## Propriétés de l'évènement

_Cette interface hérite aussi des propriétés de son parent {{DOMxRef("UIEvent")}}, et indirectement de {{DOMxRef("Event")}}._

- {{DOMxRef("FocusEvent.relatedTarget")}}
  - : Un {{DOMxRef("EventTarget")}} représentant une cible secondaire pour cet évènement. Dans certains cas (comme lors d'un passage par tabulation dans ou hors d'une page), cette propriété peut être définie sur `null` pour des raisons de sécurité.

## Exemples

### Exemple interactif

Cet exemple modifie l'apparence d'un document lorsqu'il perd la sélection. Il utilise {{DOMxRef("EventTarget.addEventListener()", "addEventListener()")}} pour surveiller les évènements `focus` et {{DOMxRef("Window/blur_event", "blur")}}.

#### HTML

```html
<p id="log">Cliquez sur ce document pour lui donner la sélection.</p>
```

#### CSS

```css
.paused {
  background: #dddddd;
  color: #555555;
}
```

#### JavaScript

```js
const log = document.getElementById("log");

function pause() {
  document.body.classList.add("paused");
  log.textContent = "SÉLECTION PERDUE !";
}

function play() {
  document.body.classList.remove("paused");
  log.textContent =
    "Ce document a la sélection. Cliquez en dehors du document pour la perdre.";
}

window.addEventListener("blur", pause);
window.addEventListener("focus", play);
```

#### Résultat

{{EmbedLiveSample("Exemple interactif")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Évènement associé&nbsp;: {{DOMxRef("Window/blur_event", "blur")}}
- Cet évènement sur les cibles `Element`&nbsp;: évènement {{DOMxRef("Element/focus_event", "focus")}}
