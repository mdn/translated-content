---
title: "Window : propriété locationbar"
short-title: locationbar
slug: Web/API/Window/locationbar
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

La propriété **`locationbar`** de l'interface {{DOMxRef("Window")}} retourne l'objet `locationbar`.

Ceci fait partie d'un groupe de propriétés de `Window` qui contiennent une propriété booléenne `visible`, qui représentait autrefois si une partie particulière de l'interface utilisateur d'un navigateur web était visible ou non.

Pour des raisons de confidentialité et d'interopérabilité, la valeur de la propriété `visible` est maintenant `false` si cette `Window` est une fenêtre contextuelle, et `true` sinon.

## Valeur

Un objet contenant une seule propriété&nbsp;:

- `visible` {{ReadOnlyInline}}
  - : Une propriété booléenne, `false` si cette `Window` est une fenêtre contextuelle, et `true` sinon.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("window.menubar")}}
- La propriété {{DOMxRef("window.personalbar")}}
- La propriété {{DOMxRef("window.scrollbars")}}
- La propriété {{DOMxRef("window.statusbar")}}
- La propriété {{DOMxRef("window.toolbar")}}
