---
title: "HTMLTextAreaElement : méthode setSelectionRange()"
short-title: setSelectionRange()
slug: Web/API/HTMLTextAreaElement/setSelectionRange
l10n:
  sourceCommit: 76d6c2c2bcca61d0d14ed464356716090097bc7a
---

{{APIRef("HTML DOM")}}

La méthode **`setSelectionRange()`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} définit les positions de début et de fin de la sélection de texte courante, et éventuellement la direction, dans un élément HTML {{HTMLElement("textarea")}}. Cela met à jour immédiatement l'état de la sélection, bien que la surbrillance visuelle n'apparaisse que lorsque l'élément est sélectionné. La direction indique dans quel sens la sélection doit être considérée comme ayant eu lieu&nbsp;; par exemple, que la sélection a été définie par l'utilisateur·ice en cliquant et en faisant glisser de la fin du texte sélectionné vers le début. De plus, les évènements {{DOMxRef("HTMLTextAreaElement.select_event", "select")}} et {{DOMxRef("HTMLTextAreaElement.selectionchange_event", "selectionchange")}} sont déclenchés.

Cette méthode met à jour immédiatement les propriétés {{DOMxRef("HTMLTextAreaElement.selectionStart")}}, {{DOMxRef("HTMLTextAreaElement.selectionEnd")}} et {{DOMxRef("HTMLTextAreaElement.selectionDirection")}}, quel que soit l'état de sélection. La surbrillance visuelle de la sélection nécessite que l'élément soit sélectionné.

> [!NOTE]
> Bien que `setSelectionRange()` mette à jour immédiatement les propriétés de sélection, la surbrillance visuelle de la sélection n'apparaît que lorsque le `<textarea>` est sélectionné. Sélectionner l'élément déclenchera également un évènement `selectionchange`.

Pour sélectionner **tout** le texte d'un élément `<textarea>`, utilisez la méthode {{DOMxRef("HTMLTextAreaElement.select()")}}.

## Syntaxe

```js-nolint
setSelectionRange(selectionStart, selectionEnd)
setSelectionRange(selectionStart, selectionEnd, selectionDirection)
```

### Paramètres

- `selectionStart`
  - : L'indice du premier caractère sélectionné. Un indice supérieur à la longueur de la valeur de l'élément est considéré comme pointant à la fin de la valeur. Voir la propriété {{DOMxRef("HTMLTextAreaElement.selectionStart", "selectionStart")}} pour plus d'informations.
- `selectionEnd`
  - : L'indice du caractère _après_ le dernier caractère sélectionné. Un indice supérieur à la longueur de la valeur de l'élément est considéré comme pointant à la fin de la valeur. Si `selectionEnd` est inférieur à `selectionStart`, alors les deux sont considérés comme ayant la valeur de `selectionEnd`. Voir la propriété {{DOMxRef("HTMLTextAreaElement.selectionEnd", "selectionEnd")}} pour plus d'informations.
- `selectionDirection` {{Optional_Inline}}
  - : Le mot-clé `"forward"`, `"backward"` ou la valeur par défaut `"none"` — indiquant la direction dans laquelle la sélection est considérée comme ayant été effectuée. Voir la propriété {{DOMxRef("HTMLTextAreaElement.selectionDirection", "selectionDirection")}} pour plus d'informations.

### Valeur retournée

Aucune ({{JSxRef("undefined")}}).

## Exemples

```js
const textarea = document.getElementById("text-box");
const chars = textarea.textLength;
// si la valeur contient plus de 10 caractères
if (chars > 10) {
  // L'élément doit être sélectionné pour pouvoir sélectionner une plage de
  // texte à l'intérieur
  textarea.focus();
  // sélectionner le texte entre le cinquième caractère depuis le début et
  // le cinquième caractère depuis la fin
  textarea.setSelectionRange(5, chars - 5);
} else {
  // sinon sélectionner tout le texte
  textarea.select();
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("textarea")}}
- L'interface {{DOMxRef("HTMLTextAreaElement")}}
- La méthode {{DOMxRef("HTMLTextAreaElement.select()")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.textLength")}}
- L'API {{DOMxRef("Selection")}}
- Le pseudo-élément {{CSSxRef("::selection")}}
