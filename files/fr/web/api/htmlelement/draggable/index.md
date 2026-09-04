---
title: "HTMLElement : propriété draggable"
short-title: draggable
slug: Web/API/HTMLElement/draggable
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{APIRef("HTML Drag and Drop API")}}

La propriété **`draggable`** de l'interface {{DOMxRef("HTMLElement")}} permet d'obtenir ou de définir une valeur primitive {{JSxRef("Boolean")}} indiquant si l'élément est déplaçable.

Elle reflète la valeur de l'attribut HTML universel [`draggable`](/fr/docs/Web/HTML/Reference/Global_attributes/draggable).

## Valeur

Une valeur primitive {{JSxRef("Boolean")}} qui vaut `true` si l'élément est déplaçable, sinon `false`.

## Exemples

L'exemple suivant montre comment activer ou désactiver la possibilité de déplacer un élément avec un script&nbsp;:

```js
const draggableElement = document.querySelector(".draggable-element");
const notDraggableElement = document.querySelector(".not-draggable-element");

// activer la possibilité de déplacer l'élément cible
draggableElement.draggable = true;

// désactiver la possibilité de déplacer l'élément cible
notDraggableElement.draggable = false;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML universel [`draggable`](/fr/docs/Web/HTML/Reference/Global_attributes/draggable)
- [Présentation de l'API HTML Drag and Drop](/fr/docs/Web/API/HTML_Drag_and_Drop_API)
