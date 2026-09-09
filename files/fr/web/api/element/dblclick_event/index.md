---
title: "Element : évènement dblclick"
short-title: dblclick
slug: Web/API/Element/dblclick_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

L'évènement **`dblclick`** se déclenche lorsqu'un bouton d'un dispositif de pointage (comme le bouton principal d'une souris) est double-cliqué&nbsp;; c'est-à-dire lorsqu'on clique rapidement deux fois sur un même élément dans un laps de temps très court.

`dblclick` est déclenché après deux évènements {{DOMxRef("Element/click_event", "click")}} (et par extension, après deux paires d'évènements {{DOMxRef("Element.mousedown_event", "mousedown")}} et {{DOMxRef("Element.mouseup_event", "mouseup")}}).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("dblclick", (event) => { })

ondblclick = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("MouseEvent")}}. Hérite de {{DOMxRef("UIEvent")}} et {{DOMxRef("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Exemples

Dans cet exemple, on modifie la taille d'une tuile lorsqu'on double-clique dessus.

### JavaScript

```js
const tuile = document.querySelector("aside");

tuile.addEventListener("dblclick", (e) => {
  tuile.classList.toggle("large");
});
```

### HTML

```html
<aside>
  <h3>Une tuile</h3>
  <p>Double-cliquer pour redimensionner cet objet.</p>
</aside>
```

### CSS

```css
aside {
  background: #ffee99;
  border-radius: 1em;
  display: inline-block;
  padding: 1em;
  transform: scale(0.9);
  transform-origin: 0 0;
  transition: transform 0.6s;
  user-select: none;
}

.large {
  transform: scale(1.3);
}
```

### Résultat

{{EmbedLiveSample("Exemples", 700, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre&nbsp;: Introduction aux évènements](/fr/docs/Learn_web_development/Core/Scripting/Events)
- L'évènement {{DOMxRef("Element/auxclick_event", "auxclick")}}
- L'évènement {{DOMxRef("Element/click_event", "click")}}
- L'évènement {{DOMxRef("Element/contextmenu_event", "contextmenu")}}
- L'évènement {{DOMxRef("Element/mousedown_event", "mousedown")}}
- L'évènement {{DOMxRef("Element/mouseup_event", "mouseup")}}
- L'évènement {{DOMxRef("Element/pointerdown_event", "pointerdown")}}
- L'évènement {{DOMxRef("Element/pointerup_event", "pointerup")}}
