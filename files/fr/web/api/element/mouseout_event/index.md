---
title: "Element : évènement mouseout"
short-title: mouseout
slug: Web/API/Element/mouseout_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

L'évènement **`mouseout`** est déclenché à partir d'un {{DOMxRef("Element")}} lorsqu'un dispositif de pointage (généralement une souris) déplace le curseur en dehors de l'élément ou de l'un de ses fils.

`mouseout` est également apporté à un élément si le curseur se déplace dans un élément fils, car l'élément fils peut masquer la zone visible de l'élément.

Si l'élément cible a des éléments fils, les évènements `mouseout` et `mouseover` sont déclenchés lorsque la souris passe sur les limites de ces éléments également, et pas seulement sur l'élément cible lui-même. En général, le comportement des évènements {{DOMxRef("Element/mouseenter_event", "mouseenter")}} et {{DOMxRef("Element/mouseleave_event", "mouseleave")}} est plus logique, car ils ne sont pas affectés par le déplacement dans les éléments fils.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("mouseout", (event) => { })

onmouseout = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("MouseEvent")}}. Hérite de {{DOMxRef("UIEvent")}} et de {{DOMxRef("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Exemples

Les exemples suivants montrent l'utilisation de l'évènement `mouseout`.

### `mouseout` et `mouseleave`

Dans l'exemple suivant, on illustre la différence entre les évènements `mouseout` et {{DOMxRef("Element/mouseleave_event", "mouseleave")}}. Ce dernier est ajouté à {{HTMLElement("ul")}} pour colorer la liste en violet lorsque la souris quitte `<ul>`. `mouseout` est ajouté à la liste pour colorer l'élément ciblé en orange lorsque la souris le quitte.

Lorsqu'on essaie cet exemple, on constate que `mouseout` est envoyé aux éléments individuels de la liste, tandis que `mouseleave` est géré sur la liste entière, en raison de la hiérarchie des éléments et du fait que les éléments de la liste masquent la liste sous-jacente.

#### HTML

```html
<ul id="test">
  <li>élément 1</li>
  <li>élément 2</li>
  <li>élément 3</li>
</ul>
```

#### JavaScript

```js
const test = document.getElementById("test");

// On affiche la liste en violet lorsque le curseur quitte l'élément <ul>
test.addEventListener(
  "mouseleave",
  function (event) {
    // on cible la cible de mouseleave
    event.target.style.color = "purple";

    // on réinitialise la couleur après quelques instants
    setTimeout(function () {
      event.target.style.color = "";
    }, 1000);
  },
  false,
);

// On affiche les éléments <li> en orange lorsque la souris les quitte
test.addEventListener(
  "mouseout",
  function (event) {
    // on cible la cible de mouseout
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

{{EmbedLiveSample("`mouseout` et `mouseleave`", 640, 200)}}

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
- L'évènement {{DOMxRef("Element/mouseover_event", "mouseover")}}
- L'évènement {{DOMxRef("Element/mouseenter_event", "mouseenter")}}
- L'évènement {{DOMxRef("Element/mouseleave_event", "mouseleave")}}
- L'évènement {{DOMxRef("Element/contextmenu_event", "contextmenu")}}
- L'évènement {{DOMxRef("Element/pointerout_event", "pointerout")}}
