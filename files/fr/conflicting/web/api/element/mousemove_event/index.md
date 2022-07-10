---
title: GlobalEventHandlers.onmousemove
slug: conflicting/Web/API/Element/mousemove_event
translation_of: Web/API/GlobalEventHandlers/onmousemove
original_slug: Web/API/GlobalEventHandlers/onmousemove
browser-compat: api.GlobalEventHandlers.onmousemove
---
{{ApiRef("HTML DOM")}}

La propriété **`onmousemove`**, rattachée au mixin [`GlobalEventHandlers`](/fr/docs/Web/API/GlobalEventHandlers), est [un gestionnaire d'évènements](/fr/docs/Web/Events/Event_handlers) qui permet de traiter les évènements [`mousemove`](/fr/docs/Web/API/Element/mousemove_event).

Un évènement `mousemove` est déclenché lorsqu'on déplace la souris.

## Syntaxe

```js
cible.onmousemove = refFonction;
```

### Valeur

`refFonction`est un nom de fonction ou une [expression de fonction](/fr/docs/Web/JavaScript/Reference/Operators/function). La fonction reçoit un objet [`MouseEvent`](/fr/docs/Web/API/MouseEvent) comme unique argument.

## Exemples

### Bulles d'information

Cet exemple crée des bulles d'information qui suivent la souris. Il utilise les gestionnaires d'évènements `onmousemove`, [`onmouseover`](/fr/docs/Web/API/GlobalEventHandlers/onmouseover), et [`onmouseout`](/fr/docs/Web/API/GlobalEventHandlers/onmouseout).

#### HTML

```html
<p><a href="#" data-tooltip="Premier lien">Voir une bulle d'information ici&hellip;</a></p>
<p><a href="#" data-tooltip="Deuxième lien">&hellip; ou ici !</a></p>
```

#### CSS

```css
.tooltip {
  position: absolute;
  z-index: 9999;
  padding: 6px;
  background: #ffd;
  border: 1px #886 solid;
  border-radius: 5px;
}
```

#### JavaScript

```js
const tooltip = new (function() {
  const node = document.createElement('div');
  node.className = 'tooltip';
  node.setAttribute('hidden', '');
  document.body.appendChild(node);

  this.follow = function(event) {
    node.style.left = event.clientX + 20 + 'px';
    node.style.top = event.clientY + 10 + 'px';
  };

  this.show = function(event) {
    node.textContent = event.target.dataset.tooltip;
    node.removeAttribute('hidden');
  };

  this.hide = function() {
    node.setAttribute('hidden', '');
  };
})();

const links = document.querySelectorAll('a');

links.forEach(link => {
  link.onmouseover = tooltip.show;
  link.onmousemove = tooltip.follow;
  link.onmouseout = tooltip.hide;
});
```

#### Résultat

{{EmbedLiveSample("")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement [`mousemove`](/fr/docs/Web/API/Element/mousemove_event)
