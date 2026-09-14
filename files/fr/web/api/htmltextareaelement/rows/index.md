---
title: "HTMLTextAreaElement : propriété rows"
short-title: rows
slug: Web/API/HTMLTextAreaElement/rows
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`rows`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} est un entier positif représentant les lignes de texte visibles du contrôle de texte. Elle reflète l'attribut [`rows`](/fr/docs/Web/HTML/Reference/Elements/textarea#rows) de l'élément HTML `<textarea>`.

## Valeur

Un entier positif. La valeur par défaut est `2`.

## Exemples

```js
const textareaElement = document.getElementById("comment");
const textLines = textareaElement.rows;
textareaElement.rows = textLines + 2;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("textarea")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.cols")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.wrap")}}
- La propriété CSS {{CSSxRef("resize")}}
