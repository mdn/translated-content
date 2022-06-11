---
title: Window.parent
slug: Web/API/Window/parent
translation_of: Web/API/Window/parent
browser-compat: api.Window.parent
---
{{APIRef}}

La propriété **`Window.parent`** est une référence au parent de la fenêtre ou du cadre embarqué (<i lang="en">subframe</i>).

Si une fenêtre n'a pas de parent, la propriété `parent` sera une référence à elle-même.

Lorsqu'une fenêtre est chargée dans un élément [`<iframe>`](/fr/docs/Web/HTML/Element/iframe), [`<object>`](/fr/docs/Web/HTML/Element/object), ou [`<frame>`](/fr/docs/Web/HTML/Element/frame), son parent correspond à la fenêtre de l'élément qui embarque la fenêtre.

## Valeur

Un objet `Window` ou [`<iframe>`](/fr/docs/Web/HTML/Element/iframe).

## Exemples

```js
if (window.parent != window.top) {
  // Nous sommes à plus d'un niveau de profondeur
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`window.frameElement`](/fr/docs/Web/API/Window/frameElement) renvoie l'élément spécifique (par exemple `<iframe>`) dans lequel `window` est embarqué.
- [`window.top`](/fr/docs/Web/API/Window/top) renvoie une référence à la fenêtre de plus haut niveau.
