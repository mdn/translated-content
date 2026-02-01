---
title: "HTMLTableElement : propriété tHead"
short-title: tHead
slug: Web/API/HTMLTableElement/tHead
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("HTML DOM")}}

La propriété **`tHead`** de l'interface {{DOMxRef("HTMLTableElement")}} représente l'élément HTML {{HTMLElement("thead")}} d'un tableau ({{HTMLElement("table")}}). Sa valeur sera `null` s'il n'existe pas un tel élément.

## Valeur

Un objet {{DOMxRef("HTMLTableSectionElement")}}.

## Exemples

```js
if (table.tHead === myHeadEl) {
  // …
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface qui implémente cette propriété&nbsp;: {{DOMxRef("HTMLTableElement")}}.
