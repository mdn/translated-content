---
title: "Window : propriété length"
short-title: length
slug: Web/API/Window/length
l10n:
  sourceCommit: 62cedc63226017e9e7d0718b6fea3529ca8dbf37
---

{{APIRef}}

La propriété **`length`** de l'interface {{DOMxRef("Window")}} retourne le nombre de cadres (<i lang="en">frames</i> en anglais) (que ce soit des éléments HTML {{HTMLElement("frame")}} ou {{HTMLElement("iframe")}}) dans la fenêtre.

## Valeur

Un nombre.

## Exemples

```js
if (window.length) {
  // Il s'agit d'un document avec des sous-cadres
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
