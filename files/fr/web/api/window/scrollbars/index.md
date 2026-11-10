---
title: "Window : propriété scrollbars"
short-title: scrollbars
slug: Web/API/Window/scrollbars
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Retourne l'objet `scrollbars`.

Il s'agit de l'une des propriétés de `Window` qui contiennent une propriété booléenne `visible`, qui sert à indiquer si une partie particulière de l'interface utilisateur d'un navigateur web est visible ou non.

Pour des raisons de confidentialité et d'interopérabilité, la valeur de la propriété `visible` est désormais `false` si cette `Window` est une fenêtre contextuelle, et `true` dans le cas contraire.

## Valeur

Un objet contenant une seule propriété&nbsp;:

- `visible` {{ReadOnlyInline}}
  - : Une propriété booléenne, `false` si cette `Window` est une fenêtre contextuelle, et `true` dans le cas contraire.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("window.locationbar")}}
- La propriété {{DOMxRef("window.menubar")}}
- La propriété {{DOMxRef("window.personalbar")}}
- La propriété {{DOMxRef("window.statusbar")}}
- La propriété {{DOMxRef("window.toolbar")}}
