---
title: "Document : propriété hidden"
short-title: hidden
slug: Web/API/Document/hidden
l10n:
  sourceCommit: 9b89bf6c59aa5f4dfe7e68b7e4fee42507d67cc4
---

{{APIRef("DOM")}}

La propriété en lecture seule **`hidden`** de l'interface {{DOMxRef("Document")}} retourne une valeur booléenne indiquant si la page est considérée comme cachée ou non.

La propriété {{DOMxRef("Document.visibilityState")}} fournit un moyen alternatif de déterminer si la page est cachée.

## Valeur

Une valeur booléenne, `true` si la page est cachée, sinon `false`.

## Exemples

```js
document.addEventListener("visibilitychange", () => {
  console.log(document.hidden);
  // Modifier le comportement…
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Document.visibilityState")}}
