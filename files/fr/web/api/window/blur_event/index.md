---
title: GlobalEventHandlers.onblur
slug: Web/API/Window/blur_event
translation_of: Web/API/GlobalEventHandlers/onblur
original_slug: Web/API/GlobalEventHandlers/onblur
browser-compat: api.GlobalEventHandlers.onblur
---
{{ApiRef("HTML DOM")}}

La propriété **`onblur`**, rattachée au mixin [`GlobalEventHandlers`](/fr/docs/Web/API/GlobalEventHandlers), est [le gestionnaire d'évènements](/fr/docs/Web/Events/Event_handlers) qui permet de traiter les évènements [`blur`](/fr/docs/Web/API/Element/blur_event). Elle est disponible sur les interfaces [`Element`](/fr/docs/Web/API/Element), [`Document`](/fr/docs/Web/API/Document), et [`Window`](/fr/docs/Web/API/Window).

L'évènement `blur` est déclenché lorsqu'un élément perd le focus.

> **Note :** Le gestionnaire d'évènement opposé à `onblur` est [`onfocus`](/fr/docs/Web/API/GlobalEventHandlers/onfocus).

## Syntaxe

```js
cible.onblur = refFonction;
```

### Valeur

`refFonction` est un nom de fonction ou une [expression de fonction](/fr/docs/Web/JavaScript/Reference/Operators/function). La fonction reçoit un objet [`FocusEvent`](/fr/docs/Web/API/FocusEvent) comme unique argument.

## Exemple

Cet exemple utilise `onblur` et [`onfocus`](/fr/docs/Web/API/GlobalEventHandlers/onfocus) pour changer le texte au sein d'un élément [`<input>`](/fr/docs/Web/HTML/Element/Input).

### HTML

```html
<input type="text" value="Cliquez ici">
```

### JavaScript

```js
let input = document.querySelector('input');

input.onblur = inputBlur;
input.onfocus = inputFocus;

function inputBlur() {
  input.value = 'Le focus a été perdu';
}

function inputFocus() {
  input.value = 'Le focus est là';
}
```

### Résultat

Essayez de cliquer à l'intérieur et en dehors du champ pour voir son contenu être modifié.

{{EmbedLiveSample('')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement [`blur`](/fr/docs/Web/API/Element/blur_event)
- Le gestionnaire d'évènement dual&nbsp;: [`GlobalEventHandlers.onfocus`](/fr/docs/Web/API/GlobalEventHandlers/onfocus)
