---
title: "Window : évènement blur"
short-title: blur
slug: Web/API/Window/blur_event
l10n:
  sourceCommit: 8b77a013c518ef1b62534a8446a60732d582a24b
---

{{APIRef("UI Events")}}

L'évènement **`blur`** est déclenché lorsque la fenêtre a perdu la sélection, par exemple lorsque l'utilisateur·ice déplace la sélection de la page vers la barre d'adresse. La sélection peut être sur la zone d'affichage du document ou sur un élément à l'intérieur de celle-ci.

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

## Voir aussi

- Évènement associé&nbsp;: {{DOMxRef("Window/focus_event", "focus")}}
- Cet évènement sur les cibles `Element`&nbsp;: évènement {{DOMxRef("Element/blur_event", "blur")}}
