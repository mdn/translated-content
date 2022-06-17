---
title: GlobalEventHandlers.onfocus
slug: Web/API/GlobalEventHandlers/onfocus
translation_of: Web/API/GlobalEventHandlers/onfocus
browser-compat: api.GlobalEventHandlers.onfocus
---
{{ApiRef("HTML DOM")}}

La propriété **`onfocus`**, , rattachée au mixin [`GlobalEventHandlers`](/fr/docs/Web/API/GlobalEventHandlers), est [un gestionnaire d'évènements](/fr/docs/Web/Events/Event_handlers) qui permet de traiter les évènements [`focus`](/fr/docs/Web/API/Element/focus_event).

L'évènement `focus` est déclenché lorsque la personne active le focus sur un élément.

Afin que `onfocus` soit déclenché sur les éléments qui ne sont pas des éléments `<input>`, il faut que ces derniers aient un attribut [`tabindex`](/fr/docs/Web/HTML/Global_attributes#attr-tabindex). Voir la section [Remettre l'accessibilité au clavier](/fr/docs/Learn/Accessibility/HTML#remettre_laccessibilité_au_clavier) pour plus de détails.

> **Note :** Le gestionnaire d'évènement opposé à `onfocus` est [`onblur`](/fr/docs/Web/API/GlobalEventHandlers/onblur).

## Syntaxe

```js
cible.onfocus = refFonction;
```

### Value

`refFonction` est un nom de fonction ou une [expression de fonction](/fr/docs/Web/JavaScript/Reference/Operators/function). La fonction reçoit un objet [`FocusEvent`](/fr/docs/Web/API/FocusEvent) comme unique argument.

## Exemple

Cet exemple utilise [`onblur`](/fr/docs/Web/API/GlobalEventHandlers/onblur) et `onfocus` pour changer le texte au sein d'un élément [`<input>`](/fr/docs/Web/HTML/Element/Input).


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

- L'évènement [`focus`](/fr/docs/Web/API/Element/focus_event)
- Le gestionnaire d'évènement dual&nbsp;: [`GlobalEventHandlers.onblur`](/fr/docs/Web/API/GlobalEventHandlers/onblur)
