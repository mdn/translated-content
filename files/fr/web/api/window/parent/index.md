---
title: "Window : propriété parent"
short-title: parent
slug: Web/API/Window/parent
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

La propriété **`parent`** de l'interface {{DOMxRef("Window")}} est une référence au parent
de la fenêtre ou du sous-cadre (<i lang="en">subframe</i>).

Si une fenêtre n'a pas de parent, la propriété `parent` sera une référence à elle-même.

Lorsqu'une fenêtre est chargée dans un élément {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, ou {{HTMLElement("frame")}}, son parent correspond à la fenêtre de l'élément qui embarque la fenêtre.

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
