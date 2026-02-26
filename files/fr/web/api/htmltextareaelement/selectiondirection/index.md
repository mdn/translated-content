---
title: "HTMLTextAreaElement : propriété selectionDirection"
short-title: selectionDirection
slug: Web/API/HTMLTextAreaElement/selectionDirection
l10n:
  sourceCommit: 76d6c2c2bcca61d0d14ed464356716090097bc7a
---

{{APIRef("HTML DOM")}}

La propriété **`selectionDirection`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} indique la direction actuelle de la sélection. Les valeurs possibles sont `"forward"`, `"backward"` et `"none"`. La valeur `forward` indique que la sélection a été effectuée dans le sens début-fin de la langue courante, tandis que `backward` indique la direction opposée. La valeur `none` apparaît si la direction est inconnue. Elle peut être utilisée pour lire ou modifier la direction du texte sélectionné dans le `<textarea>`.

Définir la propriété `selectionDirection` à une nouvelle valeur déclenche les évènements {{DOMxRef("HTMLTextAreaElement.selectionchange_event", "selectionchange")}} et {{DOMxRef("HTMLTextAreaElement.select_event", "select")}}.

## Valeur

Une chaîne de caractères&nbsp;: `"forward"`, `"backward"` ou `"none"`.

## Exemples

```js
const textarea = document.getElementById("text-box");
const end = textarea.selectionDirection;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("textarea")}}
- L'interface {{DOMxRef("HTMLTextAreaElement")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.selectionStart")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.selectionEnd")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.textLength")}}
- La méthode {{DOMxRef("HTMLTextAreaElement.select()")}}
- La méthode {{DOMxRef("HTMLTextAreaElement.setSelectionRange()")}}
- La méthode {{DOMxRef("HTMLTextAreaElement.setRangeText()")}}
- L'interface {{DOMxRef("HTMLInputElement.selectionDirection")}}
- L'interface {{DOMxRef("Selection")}}
- Le pseudo-élément CSS {{CSSxRef("::selection")}}
