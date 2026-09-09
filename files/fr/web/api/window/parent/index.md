---
title: "Window : propriété parent"
short-title: parent
slug: Web/API/Window/parent
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

La propriété **`parent`** de l'interface {{DOMxRef("Window")}} est une référence au parent
de la fenêtre ou du sous-cadre (<i lang="en">subframe</i> en anglais).

Si une fenêtre n'a pas de parent, la propriété `parent` est une référence à elle-même.

Lorsqu'une fenêtre est chargée dans un élément HTML {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, ou {{HTMLElement("frame")}}, son parent correspond à la fenêtre de l'élément qui embarque la fenêtre.

## Valeur

Un objet `Window` ou {{HTMLElement("iframe")}}.

## Exemples

```js
if (window.parent !== window.top) {
  // Nous sommes à plus d'un niveau de profondeur
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("window.frameElement")}} retourne l'élément spécifique (par exemple `<iframe>`) dans lequel `window` est embarqué.
- La propriété {{DOMxRef("Window.top")}} retourne une référence à la fenêtre de plus haut niveau.
