---
title: "Window : évènement blur"
short-title: blur
slug: Web/API/Window/blur_event
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef}}

L'évènement **`blur`** est déclenché lorsqu'un élément perd la sélection.

L'opposé de `blur` est {{DOMxRef("Window/focus_event", "focus")}}.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("blur", (event) => { })

onblur = (event) => { }
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

Cet exemple modifie l'apparence d'un document lorsqu'il perd la sélection. Il utilise {{DOMxRef("EventTarget.addEventListener()", "addEventListener()")}} pour surveiller les évènements {{DOMxRef("Window/focus_event", "focus")}} et `blur`.

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

La valeur de {{DOMxRef("Document.activeElement")}} varie selon les navigateurs pendant le traitement de cet évènement ([bogue Firefox 452307 <sup>(angl.)</sup>](https://bugzil.la/452307))&nbsp;: IE10 la définit sur l'élément qui recevra la sélection, tandis que Firefox et Chrome la définissent souvent sur le `body` du document.

## Voir aussi

- Évènement associé&nbsp;: {{DOMxRef("Window/focus_event", "focus")}}
- Cet évènement sur les cibles `Element`&nbsp;: évènement {{DOMxRef("Element/blur_event", "blur")}}
