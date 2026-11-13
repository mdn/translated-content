---
title: "Window : propriété statusbar"
short-title: statusbar
slug: Web/API/Window/statusbar
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

La propriété **`statusbar`** de l'interface {{DOMxRef("Window")}} retourne l'objet `statusbar`.

Ceci est l'un d'un groupe de propriétés `Window` qui contiennent une propriété booléenne `visible`, utilisée pour représenter si une partie particulière de l'interface utilisateur d'un navigateur web est visible ou non.

Pour des raisons de confidentialité et d'interopérabilité, la valeur de la propriété `visible` est désormais `false` si cette `Window` est une fenêtre contextuelle, et `true` sinon.

## Valeur

Un objet contenant une seule propriété&nbsp;:

- `visible` {{ReadOnlyInline}}
  - : Une propriété booléenne, `false` si cette `Window` est une fenêtre contextuelle, et `true` sinon.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("window.locationbar")}}
- La propriété {{DOMxRef("window.menubar")}}
- La propriété {{DOMxRef("window.personalbar")}}
- La propriété {{DOMxRef("window.scrollbars")}}
- La propriété {{DOMxRef("window.toolbar")}}
