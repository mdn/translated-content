---
title: "HTMLTextAreaElement : méthode setRangeText()"
short-title: setRangeText()
slug: Web/API/HTMLTextAreaElement/setRangeText
l10n:
  sourceCommit: 76d6c2c2bcca61d0d14ed464356716090097bc7a
---

{{APIRef("HTML DOM")}}

La méthode **`setRangeText()`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} remplace une plage de texte dans un élément HTML {{HTMLElement("textarea")}} par un nouveau texte passé en argument.

Des paramètres optionnels supplémentaires incluent le début de la section de texte à modifier, la fin de la section, et un mot-clé définissant quelle partie du `<textarea>` doit être sélectionnée après la mise à jour du texte. Si les arguments `startSelection` et `endSelection` ne sont pas fournis, la plage correspond à la sélection.

Le dernier argument détermine comment la sélection sera définie après le remplacement du texte. Les valeurs possibles sont `"select"`, qui sélectionne le texte nouvellement inséré, `"start"`, qui place la sélection juste avant le texte inséré, `"end"`, qui place la sélection juste après le texte inséré, ou la valeur par défaut `"preserve"`, qui tente de préserver la sélection.

De plus, les évènements {{DOMxRef("HTMLTextAreaElement.select_event", "select")}} et {{DOMxRef("HTMLTextAreaElement.selectionchange_event", "selectionchange")}} sont déclenchés.

## Syntaxe

```js-nolint
setRangeText(replacement)
setRangeText(replacement, startSelection)
setRangeText(replacement, startSelection, endSelection)
setRangeText(replacement, startSelection, endSelection, selectMode)
```

### Paramètres

- `replacement`
  - : La chaîne de caractères à insérer.
- {{DOMxRef("HTMLTextAreaElement.selectionStart", "selectionStart")}} {{Optional_Inline}}
  - : L'indice du premier caractère sélectionné. Un indice supérieur à la longueur de la valeur de l'élément est considéré comme pointant à la fin de la valeur.
- {{DOMxRef("HTMLTextAreaElement.selectionEnd", "selectionEnd")}} {{Optional_Inline}}
  - : L'indice du caractère _après_ le dernier caractère sélectionné. Un indice supérieur à la longueur de la valeur de l'élément est considéré comme pointant à la fin de la valeur. Si `selectionEnd` est inférieur à `selectionStart`, alors les deux sont considérés comme ayant la valeur de `selectionEnd`.
- `selectMode` {{Optional_Inline}}
  - : Un mot-clé, soit `select`, `start`, `end` ou la valeur par défaut `preserve`, définissant comment la sélection doit être définie après le remplacement du texte.

### Valeur retournée

Aucune ({{JSxRef("undefined")}}).

## Exemples

Cliquez sur le bouton dans cet exemple pour remplacer une partie du texte dans la zone de texte. Le texte nouvellement inséré sera mis en surbrillance (sélectionné) après coup.

### HTML

```html
<label for="ta">Exemple de saisie de texte&nbsp;:</label>
<textarea id="ta">
  Ce texte n'a PAS été mis à jour.
</textarea>
<button id="btn">Mettre à jour le texte</button>
```

### JavaScript

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  changeText();
});

function changeText() {
  const textarea = document.getElementById("ta");
  textarea.focus();
  textarea.setRangeText("ALREADY", 14, 17, "select");
}
```

### Résultat

{{EmbedLiveSample("Examples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("textarea")}}
- L'interface {{DOMxRef("HTMLTextAreaElement")}}
- La méthode {{DOMxRef("HTMLTextAreaElement.select()")}}
- La méthode {{DOMxRef("HTMLTextAreaElement.setSelectionRange()")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.textLength")}}
- L'API {{DOMxRef("Selection")}}
- Le pseudo-élément CSS {{CSSxRef("::selection")}}
