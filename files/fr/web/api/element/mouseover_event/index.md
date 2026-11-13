---
title: "Element : évènement mouseover"
short-title: mouseover
slug: Web/API/Element/mouseover_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

L'évènement **`mouseover`** est déclenché à partir d'un objet {{DOMxRef("Element")}} lorsqu'un dispositif de pointage (comme une souris ou un trackpad) déplace le curseur sur l'élément ou sur l'un de ses éléments fils.

Si l'élément cible a des éléments fils, les évènements `mouseout` et `mouseover` sont déclenchés lorsque la souris passe sur les limites de ces éléments également, et pas seulement sur l'élément cible lui-même. En général, le comportement des évènements {{DOMxRef("Element/mouseenter_event", "mouseenter")}} et {{DOMxRef("Element/mouseleave_event", "mouseleave")}} est plus logique, car ils ne sont pas affectés par le déplacement dans les éléments fils.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("mouseover", (event) => { })

onmouseover = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("MouseEvent")}}. Hérite de {{DOMxRef("UIEvent")}} et de {{DOMxRef("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Exemples

L'exemple suivant illustre la différence entre les évènements `mouseover` et {{DOMxRef("Element/mouseenter_event", "mouseenter")}}.

### HTML

```html
<ul id="test">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

### JavaScript

```js
const test = document.getElementById("test");

// Ce gestionnaire n'est exécuté qu'une fois lorsque le curseur se
// déplace sur la liste
test.addEventListener(
  "mouseenter",
  function (event) {
    // on met l'accent sur la cible de mouseenter
    event.target.style.color = "purple";

    // on réinitialise la couleur après quelques instants
    setTimeout(function () {
      event.target.style.color = "";
    }, 500);
  },
  false,
);

// Ce gestionnaire est exécuté à chaque fois que le curseur se déplace
// sur un autre élément de la liste
test.addEventListener(
  "mouseover",
  function (event) {
    // on met l'accent sur la cible de mouseover
    event.target.style.color = "orange";

    // on réinitialise la couleur après quelques instants
    setTimeout(function () {
      event.target.style.color = "";
    }, 500);
  },
  false,
);
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre&nbsp;: Introduction aux évènements](/fr/docs/Learn_web_development/Core/Scripting/Events)
- L'évènement {{DOMxRef("Element/mousedown_event", "mousedown")}}
- L'évènement {{DOMxRef("Element/mouseup_event", "mouseup")}}
- L'évènement {{DOMxRef("Element/mousemove_event", "mousemove")}}
- L'évènement {{DOMxRef("Element/click_event", "click")}}
- L'évènement {{DOMxRef("Element/dblclick_event", "dblclick")}}
- L'évènement {{DOMxRef("Element/mouseout_event", "mouseout")}}
- L'évènement {{DOMxRef("Element/mouseenter_event", "mouseenter")}}
- L'évènement {{DOMxRef("Element/mouseleave_event", "mouseleave")}}
- L'évènement {{DOMxRef("Element/contextmenu_event", "contextmenu")}}
- L'évènement {{DOMxRef("Element/pointerover_event", "pointerover")}}
