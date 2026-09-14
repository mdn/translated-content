---
title: "Document : propriété hidden"
short-title: hidden
slug: Web/API/Document/hidden
l10n:
  sourceCommit: 54c533a1750f2804d5bec13e1afeed1113fde5d9
---

{{APIRef("DOM")}}

La propriété en lecture seule **`hidden`** de l'interface {{DOMxRef("Document")}} retourne une valeur booléenne indiquant si la page est considérée comme cachée ou non.
Cela peut être utilisé pour vérifier si le document est en arrière-plan, dans une fenêtre minimisée ou autrement non visible pour l'utilisateur·ice.

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
