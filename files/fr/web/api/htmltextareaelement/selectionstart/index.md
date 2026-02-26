---
title: "HTMLTextAreaElement : propriété selectionStart"
short-title: selectionStart
slug: Web/API/HTMLTextAreaElement/selectionStart
l10n:
  sourceCommit: 083de2f5a832aef7994a043e00cb953703e4a5d5
---

{{APIRef("HTML DOM")}}

La propriété **`selectionStart`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} indique la position de début de la sélection de texte courante dans un élément HTML {{HTMLElement("textarea")}}. Il s'agit d'un nombre représentant l'index de début du texte sélectionné. Elle peut être utilisée pour lire ou définir l'index de début du texte sélectionné dans le `<textarea>`.

Lorsqu'aucun texte n'est sélectionné, la valeur de `selectionStart` et de {{DOMxRef("HTMLTextAreaElement.selectionEnd", "selectionEnd")}} correspond à la position du curseur à l'intérieur de l'élément `<textarea>`.

Définir `selectionStart` à une valeur supérieure à la valeur actuelle de {{DOMxRef("HTMLTextAreaElement.selectionEnd", "selectionEnd")}} met à jour les propriétés `selectionStart` et `selectionEnd` à cette valeur. Si cette valeur est supérieure ou égale à {{DOMxRef("HTMLTextAreaElement.textLength", "textLength")}}, les deux propriétés sont définies à la valeur de la propriété `textLength`.

La valeur de la propriété peut être lue et définie sans que le `<textarea>` ait le focus, mais l'élément doit avoir le focus pour que le pseudo-élément CSS {{CSSxRef("::selection")}} corresponde au texte sélectionné.

Définir la propriété `selectionStart` à une nouvelle valeur déclenche les évènements {{DOMxRef("HTMLTextAreaElement.selectionchange_event", "selectionchange")}} et {{DOMxRef("HTMLTextAreaElement.select_event", "select")}}.

## Valeur

Un nombre qui n'est pas négatif.

## Exemples

```js
const textarea = document.getElementById("text-box");
const start = textarea.selectionStart;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("textarea")}}
- L'interface {{DOMxRef("HTMLTextAreaElement")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.selectionEnd")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.selectionDirection")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.textLength")}}
- La méthode {{DOMxRef("HTMLTextAreaElement.select()")}}
- La méthode {{DOMxRef("HTMLTextAreaElement.setSelectionRange()")}}
- La méthode {{DOMxRef("HTMLTextAreaElement.setRangeText()")}}
- La propriété {{DOMxRef("HTMLInputElement.selectionStart")}}
- L'API {{DOMxRef("Selection")}}
- Le pseudo-élément CSS {{CSSxRef("::selection")}}
