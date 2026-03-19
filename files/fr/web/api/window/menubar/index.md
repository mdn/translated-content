---
title: "Window : propriété menubar"
short-title: menubar
slug: Web/API/Window/menubar
l10n:
  sourceCommit: 62cedc63226017e9e7d0718b6fea3529ca8dbf37
---

{{APIRef}}

La propriété **`menubar`** de l'interface {{DOMxRef("Window")}} retourne l'objet `menubar`.

Ceci fait partie d'un groupe de propriétés de `Window` qui contiennent une propriété booléenne `visible`, qui représentait autrefois si une partie particulière de l'interface utilisateur d'un navigateur web était visible ou non.

Pour des raisons de confidentialité et d'interopérabilité, la valeur de la propriété `visible` est maintenant `false` si cette `Window` est une fenêtre s'ouvrant par-dessus (<i lang="en">popup</i> en anglais), sinon `true`.

## Valeur

Un objet contenant une seule propriété&nbsp;:

- `visible` {{ReadOnlyInline}}
  - : Une propriété booléenne, `false` si cette `Window` est une fenêtre s'ouvrant par-dessus, sinon `true`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Window.locationbar")}}
- La propriété {{DOMxRef("Window.personalbar")}}
- La propriété {{DOMxRef("Window.scrollbars")}}
- La propriété {{DOMxRef("Window.statusbar")}}
- La propriété {{DOMxRef("Window.toolbar")}}
