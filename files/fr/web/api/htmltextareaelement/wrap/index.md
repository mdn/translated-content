---
title: "HTMLTextAreaElement : propriété wrap"
short-title: wrap
slug: Web/API/HTMLTextAreaElement/wrap
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`wrap`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} indique comment le contrôle doit renvoyer à la ligne la valeur lors de la soumission du formulaire. Elle reflète l'attribut [`wrap`](/fr/docs/Web/HTML/Reference/Elements/textarea#wrap) de l'élément HTML `<textarea>`. Notez que la valeur `"hard"` n'a d'effet que lorsque l'attribut {{DOMxRef("HTMLTextAreaElement.cols", "cols")}} est également défini.

## Valeur

Voir [`wrap`](/fr/docs/Web/HTML/Reference/Elements/textarea#wrap) pour les valeurs possibles. La valeur par défaut est `"soft"`.

## Exemples

```js
const textareaElement = document.getElementById("comment");
const oldWrap = textareaElement.wrap;
textareaElement.wrap = "hard"; // Ajoute des retours à la ligne (CR+LF) lors de la soumission du formulaire
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("textarea")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.cols")}}
