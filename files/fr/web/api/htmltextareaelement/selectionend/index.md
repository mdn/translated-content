---
title: "HTMLTextAreaElement : propriété selectionEnd"
short-title: selectionEnd
slug: Web/API/HTMLTextAreaElement/selectionEnd
l10n:
  sourceCommit: 7a255a5942e2e3edb4cc5c1604a7bb597d34157f
---

{{APIRef("HTML DOM")}}

La propriété **`selectionEnd`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} indique la position de fin de la sélection de texte courante dans un élément HTML {{HTMLElement("textarea")}}.

## Valeur

Un nombre qui n'est pas négatif.

## Description

La propriété `selectionEnd` est un nombre représentant l'indice basé sur zéro du caractère immédiatement après le dernier caractère sélectionné dans un `<textarea>`. La propriété peut être utilisée pour obtenir ou définir la position de fin.

Lorsqu'aucun texte n'est sélectionné, la valeur de {{DOMxRef("HTMLTextAreaElement.selectionStart", "selectionStart")}} et de `selectionEnd` correspond à la position du curseur à l'intérieur de l'élément `<textarea>`.

Définir `selectionEnd` à une valeur inférieure à la valeur actuelle de {{DOMxRef("HTMLTextAreaElement.selectionStart", "selectionStart")}} met à jour les propriétés `selectionEnd` et `selectionStart` à cette valeur. Si les deux valeurs sont inférieures à 0, les deux propriétés sont définies à la valeur de la propriété {{DOMxRef("HTMLTextAreaElement.textLength", "textLength")}}.

La valeur de la propriété peut être lue et définie sans que le `<textarea>` ait la sélection, mais l'élément doit avoir la sélection pour que le pseudo-élément CSS {{CSSxRef("::selection")}} corresponde au texte sélectionné.

Définir la propriété `selectionEnd` à une nouvelle valeur déclenche les évènements {{DOMxRef("HTMLTextAreaElement.selectionchange_event", "selectionchange")}} et {{DOMxRef("HTMLTextAreaElement.select_event", "select")}}.

## Exemples

### Utilisation simple

Cet exemple affiche le texte sélectionné ainsi que ses positions de début et de fin. Sélectionnez du texte dans la zone de texte, puis cliquez sur le bouton.

#### HTML

```html
<label for="boite-texte">Sélectionnez du texte&nbsp;:</label>
<textarea id="boite-texte" rows="3">The quick brown fox.</textarea>
<button id="afficher-selection" type="button">Afficher la sélection</button>
<p id="sortie">Aucune sélection signalée pour le moment.</p>
```

#### JavaScript

```js
const boiteTexte = document.querySelector("#boite-texte");
const sortie = document.querySelector("#sortie");

document.querySelector("#afficher-selection").addEventListener("click", () => {
  const start = boiteTexte.selectionStart;
  const end = boiteTexte.selectionEnd;
  const selectedText = boiteTexte.value.substring(start, end);

  sortie.textContent = `Vous avez sélectionné "${selectedText}" (début : ${start}, fin : ${end}).`;
});
```

#### Résultat

{{EmbedLiveSample("Exemples")}}

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
- L'évènement {{DOMxRef("HTMLTextAreaElement.selectionchange_event", "selectionchange")}}
- La méthode {{DOMxRef("HTMLTextAreaElement.select()")}}
- La méthode {{DOMxRef("HTMLTextAreaElement.setSelectionRange()")}}
- La méthode {{DOMxRef("HTMLTextAreaElement.setRangeText()")}}
- La propriété {{DOMxRef("HTMLInputElement.selectionEnd")}}
- L'API {{DOMxRef("Selection")}}
- Le pseudo-élément CSS {{CSSxRef("::selection")}}
