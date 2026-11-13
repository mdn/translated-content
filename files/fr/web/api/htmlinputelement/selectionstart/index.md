---
title: "HTMLInputElement : propriété selectionStart"
short-title: selectionStart
slug: Web/API/HTMLInputElement/selectionStart
l10n:
  sourceCommit: 7a255a5942e2e3edb4cc5c1604a7bb597d34157f
---

{{APIRef("HTML DOM")}}

La propriété **`selectionStart`** de l'interface {{DOMxRef("HTMLInputElement")}} définit la position de début de la sélection de texte actuelle dans un élément HTML {{HTMLElement("input")}}.

## Valeur

Un nombre positif.

## Description

La propriété `selectionStart` est un nombre représentant l'index basé sur zéro du caractère immédiatement avant le premier caractère sélectionné dans un `<input>` de type texte. La propriété peut être utilisée pour récupérer ou définir la position de début.

Lorsqu'aucun texte n'est sélectionné, la valeur de `selectionStart` et de {{DOMxRef("HTMLInputElement.selectionEnd", "selectionEnd")}} est la position du curseur à l'intérieur de l'élément `<input>`.

Définir `selectionStart` sur une valeur supérieure à la valeur actuelle de `selectionEnd` met à jour les deux propriétés avec la nouvelle valeur. Les valeurs supérieures à la longueur de la valeur de l'élément `<input>` sont considérées comme la fin de la valeur.

La propriété `selectionStart` ne s'applique qu'aux éléments `<input>` de types `text`, `search`, `url`, `tel` et `password`. Pour les autres types d'éléments `<input>`, la lecture de la propriété retourne `null` et sa définition déclenche une exception `InvalidStateError` {{DOMxRef("DOMException")}}.

La valeur de la propriété peut être récupérée et définie sans que l'élément `<input>` ait la sélection, mais l'élément doit avoir la sélection pour que le pseudo-élément CSS {{CSSxRef("::selection")}} corresponde au texte sélectionné.

Définir `selectionStart` sur une nouvelle valeur déclenche les évènements {{DOMxRef("HTMLInputElement.selectionchange_event", "selectionchange")}} et {{DOMxRef("HTMLInputElement.select_event", "select")}}.

## Exemples

### Utilisation simple

Cet exemple affiche le texte sélectionné ainsi que ses positions de début et de fin. Sélectionnez du texte dans le champ de saisie, puis cliquez sur le bouton.

### HTML

```html
<label for="boite-texte">Sélectionnez du texte&nbsp;:</label>
<input id="boite-texte" type="text" value="Le renard brun rapide." />
<button id="afficher-selection" type="button">Afficher la sélection</button>
<p id="sortie">Aucune sélection signalée pour le moment.</p>
```

### JavaScript

```js
const boiteTexte = document.querySelector("#boite-texte");
const sortie = document.querySelector("#sortie");

document.querySelector("#afficher-selection").addEventListener("click", () => {
  const start = boiteTexte.selectionStart;
  const end = boiteTexte.selectionEnd;
  const selectedText = boiteTexte.value.substring(start, end);

  sortie.textContent = `Vous avez sélectionné « ${selectedText} » (début : ${start}, fin : ${end}).`;
});
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("input")}}
- L'interface {{DOMxRef("HTMLInputElement")}}
- La propriété {{DOMxRef("HTMLInputElement.selectionEnd")}}
- La propriété {{DOMxRef("HTMLInputElement.selectionDirection")}}
- L'évènement {{DOMxRef("HTMLInputElement.selectionchange_event", "selectionchange")}}
- La méthode {{DOMxRef("HTMLInputElement.select()")}}
- La méthode {{DOMxRef("HTMLInputElement.setSelectionRange()")}}
- La méthode {{DOMxRef("HTMLInputElement.setRangeText()")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.selectionStart")}}
- L'interface {{DOMxRef("Selection")}}
- Le pseudo-élément CSS {{CSSxRef("::selection")}}
