---
title: GlobalEventHandlers.onresize
slug: Web/API/GlobalEventHandlers/onresize
translation_of: Web/API/window.onresize
translation_of_original: Web/API/Element.onresize
browser-compat: api.GlobalEventHandlers.onresize
---
{{ApiRef}}

La propriété **`onresize`**,rattachée au mixin [`GlobalEventHandlers`](/fr/docs/Web/API/GlobalEventHandlers), est [un gestionnaire d'évènements](/fr/docs/Web/Events/Event_handlers) qui permet de traiter les évènements [`resize`](/fr/docs/Web/API/Window/resize_event).

Un évènement `resize` est déclenché après que la fenêtre a été redimensionnée.

## Syntaxe

```js
window.onresize = refFonction;
```

### Value

`refFonction` est un nom de fonction ou une [expression de fonction](/fr/docs/Web/JavaScript/Reference/Operators/function). La fonction reçoit un objet [`FocusEvent`](/fr/docs/Web/API/FocusEvent) comme unique argument.

## Exemple

### Journaliser l'évolution de la taille de la fenêtre

#### HTML

```html
<p>Redimensionnez la fenêtre pour déclencher l'évènement <code>resize</code>.</p>
<p>Hauteur de la fenêtre : <span id="height"></span></p>
<p>Largeur de la fenêtre : <span id="width"></span></p>
```

#### JavaScript

```js
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function resize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = resize;
```

#### Résultat

{{EmbedLiveSample("")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement [`resize`](/fr/docs/Web/API/Window/resize_event)
