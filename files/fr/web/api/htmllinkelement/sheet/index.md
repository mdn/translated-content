---
title: "HTMLLinkElement : propriété sheet"
short-title: sheet
slug: Web/API/HTMLLinkElement/sheet
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`sheet`** de l'interface {{domxref("HTMLLinkElement")}} contient la feuille de style associée à cet élément.

Une feuille de style est associée à un `HTMLLinkElement` si `rel="stylesheet"` est utilisé avec `<link>`.

## Valeur

Un objet {{DOMxRef("StyleSheet")}}, ou `null` si aucun n'est associé à l'élément.

## Exemples

```html
<link rel="stylesheet" href="styles.css" />
```

La propriété `sheet` de l'objet `HTMLLinkElement` retournera l'objet {{domxref("StyleSheet")}} décrivant le fichier `styles.css`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
