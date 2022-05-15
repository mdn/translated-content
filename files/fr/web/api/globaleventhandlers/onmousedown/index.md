---
title: GlobalEventHandlers.onmousedown
slug: Web/API/GlobalEventHandlers/onmousedown
translation_of: Web/API/GlobalEventHandlers/onmousedown
browser-compat: api.GlobalEventHandlers.onmousedown
---
{{ApiRef("HTML DOM")}}

La propriété **`onmousedown`**, rattachée au mixin [`GlobalEventHandlers`](/fr/docs/Web/API/GlobalEventHandlers), est [un gestionnaire d'évènements](/fr/docs/Web/Events/Event_handlers) qui permet de traiter les évènements [`mousedown`](/fr/docs/Web/API/Element/mousedown_event).

L'évènement `mousedown` est déclenché lorsqu'on appuie sur le bouton de la souris.

> **Note :** Le gestionnaire d'évènements opposé à `onmousedown` est [`onmouseup`](/fr/docs/Web/API/GlobalEventHandlers/onmouseup).

## Syntaxe

```js
cible.onmousedown = refFonction;
```

### Valeur

`refFonction` est un nom de fonction ou une [expression de fonction](/fr/docs/Web/JavaScript/Reference/Operators/function). La fonction reçoit un objet [`MouseEvent`](/fr/docs/Web/API/MouseEvent) comme unique argument.

## Exemple

Cet exemple révèle une partie d'une image lorsqu'on appuie et maintient un bouton de souris. Il utilise les gestionnaires d'évènements `onmousedown`, [`onmouseup`](/fr/docs/Web/API/GlobalEventHandlers/onmouseup), et [`onmousemove`](/fr/docs/Web/API/GlobalEventHandlers/onmousemove).

### HTML

```html
<div class="container">
  <div class="view" hidden></div>
  <img src="rhino.jpg">
</div>
```

### CSS

```css
.container {
  width: 300px;
  height: 227px;
  background: black;
}

.view {
  position: absolute;
  width: 100px;
  height: 100px;
  background: white;
  border-radius: 50%;
}

img {
  mix-blend-mode: darken;
}
```

### JavaScript

```js
function showView(event) {
  view.removeAttribute('hidden');
  view.style.left = event.clientX - 50 + 'px';
  view.style.top = event.clientY - 50 + 'px';
  event.preventDefault();
}

function moveView(event) {
  view.style.left = event.clientX - 50 + 'px';
  view.style.top = event.clientY - 50 + 'px';
}

function hideView(event) {
  view.setAttribute('hidden', '');
}

const container = document.querySelector('.container');
const view = document.querySelector('.view');

container.onmousedown = showView;
container.onmousemove = moveView;
document.onmouseup = hideView;
```

### Résultat

{{EmbedLiveSample("", 700, 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement [`mousedown`](/fr/docs/Web/API/Element/mousedown_event)
