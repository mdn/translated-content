---
title: GlobalEventHandlers.onmouseout
slug: Web/API/GlobalEventHandlers/onmouseout
translation_of: Web/API/GlobalEventHandlers/onmouseout
browser-compat: api.GlobalEventHandlers.onmouseout
---
{{ApiRef("HTML DOM")}}

La propriété **`onmouseout`**, rattachée au mixin [`GlobalEventHandlers`](/fr/docs/Web/API/GlobalEventHandlers), est [un gestionnaire d'évènements](/fr/docs/Web/Events/Event_handlers) qui permet de traiter les évènements [`mouseout`](/fr/docs/Web/API/Element/mouseout_event).

Un évènement `mouseout` est déclenché lorsque la souris quitte un élément. Par exemple, si la souris se déplace en dehors d'une image d'une page web, l'évènement `mouseout` est déclenché pour cet élément d'image.

## Syntaxe

```js
cible.onmouseout = refFonction;
```

### Valeur

`refFonction`est un nom de fonction ou une [expression de fonction](/fr/docs/Web/JavaScript/Reference/Operators/function). La fonction reçoit un objet [`MouseEvent`](/fr/docs/Web/API/MouseEvent) comme unique argument.

## Exemple

Cet exemple ajoute des gestionnaires d'évènements `onmouseout` et `onmouseover` sur un paragraphe. Essayez de déplacer votre souris sur le paragraphe et en dehors.

### HTML

```html
<p>Testez votre souris ici !</p>
```

### JavaScript

```js
const p = document.querySelector('p');
p.onmouseover = logMouseOver;
p.onmouseout = logMouseOut;

function logMouseOver() {
  p.textContent = 'évènement mouseover détecté';
}

function logMouseOut() {
  p.textContent = 'évènement mouseout détecté';
}
```

### Résultat

{{EmbedLiveSample("")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
