---
title: "HTMLTextAreaElement : propriété cols"
short-title: cols
slug: Web/API/HTMLTextAreaElement/cols
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`cols`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} est un entier positif représentant la largeur visible du contrôle de texte multiligne, en largeurs moyennes de caractères. Elle reflète l'attribut [`cols`](/fr/docs/Web/HTML/Reference/Elements/textarea#cols) de l'élément HTML `<textarea>`.

## Valeur

Un entier positif. La valeur par défaut est `20`.

## Exemples

```js
const textareaElement = document.getElementById("comment");
textareaElement.cols = 80;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("textarea")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.rows")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.wrap")}}
- La propriété CSS {{CSSxRef("resize")}}
