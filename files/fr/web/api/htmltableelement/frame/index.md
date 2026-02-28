---
title: "HTMLTableElement : propriété frame"
short-title: frame
slug: Web/API/HTMLTableElement/frame
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

La propriété **`frame`** de l'interface {{DOMxRef("HTMLTableElement")}} est une chaîne de caractères qui indique quelles bordures extérieures du tableau doivent être affichées.

## Valeur

L'une des valeurs suivantes&nbsp;:

- `void`
  - : Aucun côté. Valeur par défaut.
- `"above"`
  - : Côté supérieur
- `"below"`
  - : Côté inférieur
- `"hsides"`
  - : Uniquement le haut et le bas
- `"vsides"`
  - : Uniquement les côtés droit et gauche
- `"lhs"`
  - : Uniquement le côté gauche
- `"rhs"`
  - : Uniquement le côté droit
- `"box"`
  - : Les quatre côtés
- `"border"`
  - : Les quatre côtés

## Exemples

```js
// Définir la bordure de TableA sur 'border'
const t = document.getElementById("TableA");
t.frame = "border";
t.border = "2px";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
