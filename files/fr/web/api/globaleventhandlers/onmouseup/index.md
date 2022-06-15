---
title: GlobalEventHandlers.onmouseup
slug: Web/API/GlobalEventHandlers/onmouseup
translation_of: Web/API/GlobalEventHandlers/onmouseup
browser-compat: api.GlobalEventHandlers.onmouseup
---
{{ApiRef("HTML DOM")}}

La propriété **`onmouseup`**, rattachée au mixin [`GlobalEventHandlers`](/fr/docs/Web/API/GlobalEventHandlers), est [un gestionnaire d'évènements](/fr/docs/Web/Events/Event_handlers) qui permet de traiter les évènements [`mouseup`](/fr/docs/Web/API/Element/mouseup_event).

Un évènement `mouseup` se produit lorsqu'on relâche le bouton de la souris.

> **Note :** Le gestionnaire d'évènements opposé à `onmouseup` est [`onmousedown`](/fr/docs/Web/API/GlobalEventHandlers/onmousedown).

## Syntaxe

```js
cible.onmouseup = refFonction;
```

### Valeur

`refFonction` est un nom de fonction ou une [expression de fonction](/fr/docs/Web/JavaScript/Reference/Operators/function). La fonction reçoit un objet [`MouseEvent`](/fr/docs/Web/API/MouseEvent) comme unique argument.

## Exemple

Dans cet exemple, une «&nbsp;tartine&nbsp;» se cache lorsqu'on clique avec la souris sur le grille-pain puis réapparaît lorsqu'on relâche le bouton. L'exemple utilise les gestionnaires d'évènements [`onmousedown`](/fr/docs/Web/API/GlobalEventHandlers/onmousedown) et `onmouseup`.

### HTML

```html
<div class="container">
  <div class="toaster"></div>
  <div class="toast">Coucou le monde !</div>
</div>
```

### CSS

```css
.container {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%);
}

.toaster {
  width: 160px;
  height: 110px;
  background: #bbb;
  border-radius: 10px 10px 0 0;
}

.toast {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -1;
  width: 100px;
  height: 50px;
  padding: 10px;
  background: #ed9;
  border-radius: 10px 10px 0 0;
  transform: translate(-50%, -90px);
  transition: transform .3s;
}

.depressed {
  transform: translate(-50%, -50%);
}
```

### JavaScript

```js
function depress() {
  toast.classList.add('depressed');
}

function release() {
  toast.classList.remove('depressed');
}

const toaster = document.querySelector('.toaster');
const toast = document.querySelector('.toast');

toaster.onmousedown = depress;
document.onmouseup = release;
```

### Résultat

{{EmbedLiveSample("", 700, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement [`mouseup`](/fr/docs/Web/API/Element/mouseup_event)
