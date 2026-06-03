---
title: "Window : propriété personalbar"
short-title: personalbar
slug: Web/API/Window/personalbar
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

La propriété **`personalbar`** de l'interface {{DOMxRef("Window")}} retourne l'objet `personalbar`.

Ceci fait partie d'un groupe de propriétés de `Window` qui contiennent une propriété booléenne `visible`, qui était utilisée pour représenter si une partie particulière de l'interface utilisateur d'un navigateur web était visible ou non.

Pour des raisons de confidentialité et d'interopérabilité, la valeur de la propriété `visible` est maintenant `false` si cette `Window` est une fenêtre affichée par dessus (<i lang="en">popup</i> en anglais), et `true` sinon.

## Valeur

Un objet contenant une seule propriété&nbsp;:

- `visible` {{ReadOnlyInline}}
  - : Une propriété booléenne, `false` si cette `Window` est une fenêtre affichée par dessus, et `true` sinon.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("window.locationbar")}}
- La propriété {{DOMxRef("window.menubar")}}
- La propriété {{DOMxRef("window.scrollbars")}}
- La propriété {{DOMxRef("window.statusbar")}}
- La propriété {{DOMxRef("window.toolbar")}}
