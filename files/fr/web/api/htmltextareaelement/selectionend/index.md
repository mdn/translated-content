---
title: "HTMLTextAreaElement : propriété selectionEnd"
short-title: selectionEnd
slug: Web/API/HTMLTextAreaElement/selectionEnd
l10n:
  sourceCommit: 76d6c2c2bcca61d0d14ed464356716090097bc7a
---

{{APIRef("HTML DOM")}}

La propriété **`selectionEnd`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} indique la position de fin de la sélection de texte courante dans un élément HTML {{HTMLElement("textarea")}}. Il s'agit d'un nombre représentant l'index final du texte sélectionné. Elle peut être utilisée pour lire ou définir l'index de fin du texte sélectionné dans le `<textarea>`.

Lorsqu'aucun texte n'est sélectionné, la valeur de {{DOMxRef("HTMLTextAreaElement.selectionStart", "selectionStart")}} et de `selectionEnd` correspond à la position du curseur à l'intérieur de l'élément `<textarea>`.

Définir `selectionEnd` à une valeur inférieure à la valeur actuelle de {{DOMxRef("HTMLTextAreaElement.selectionStart", "selectionStart")}} met à jour les propriétés `selectionEnd` et `selectionStart` à cette valeur. Si les deux valeurs sont inférieures à 0, les deux propriétés sont définies à la valeur de la propriété {{DOMxRef("HTMLTextAreaElement.textLength", "textLength")}}.

La valeur de la propriété peut être lue et définie sans que le `<textarea>` ait le focus, mais l'élément doit avoir le focus pour que le pseudo-élément CSS {{CSSxRef("::selection")}} corresponde au texte sélectionné.

Définir la propriété `selectionEnd` à une nouvelle valeur déclenche les évènements {{DOMxRef("HTMLTextAreaElement.selectionchange_event", "selectionchange")}} et {{DOMxRef("HTMLTextAreaElement.select_event", "select")}}.

## Valeur

Un nombre qui n'est pas négatif.

## Exemples

```js
const textarea = document.getElementById("text-box");
const end = textarea.selectionEnd;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("textarea")}}
- L'interface {{DOMxRef("HTMLTextAreaElement")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.selectionStart")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.selectionDirection")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.textLength")}}
- L'évènement {{DOMxRef("HTMLTextAreaElement.selectionChange_event", "selectionChange")}}
- La méthode {{DOMxRef("HTMLTextAreaElement.select()")}}
- La méthode {{DOMxRef("HTMLTextAreaElement.setSelectionRange()")}}
- La méthode {{DOMxRef("HTMLTextAreaElement.setRangeText()")}}
- La propriété {{DOMxRef("HTMLInputElement.selectionEnd")}}
- L'API {{DOMxRef("Selection")}}
- Le pseudo-élément CSS {{CSSxRef("::selection")}}
