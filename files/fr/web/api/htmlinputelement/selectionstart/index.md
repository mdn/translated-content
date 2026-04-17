---
title: "HTMLInputElement : propriété selectionStart"
short-title: selectionStart
slug: Web/API/HTMLInputElement/selectionStart
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

La propriété **`selectionStart`** de l'interface {{DOMxRef("HTMLInputElement")}} est un nombre qui représente l'index de début du texte sélectionné. Lorsqu'aucun texte n'est sélectionné, elle retourne la position du curseur dans l'élément HTML `<input>`.

> [!NOTE]
> Selon la [spécification WHATWG des formulaires <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply), la propriété `selectionStart` ne s'applique qu'aux champs de saisie de types texte, recherche, URL, téléphone et mot de passe. Dans les navigateurs modernes, une exception est levée lors de la définition de la propriété `selectionStart` sur les autres types de champs de saisie. De plus, cette propriété retourne `null` lors de l'accès à la propriété `selectionStart` sur des éléments de saisie qui ne sont pas textuels.

Si `selectionStart` est supérieur à `selectionEnd`, alors les deux sont considérés comme la valeur de `selectionEnd`.

## Valeur

Un nombre positif.

## Exemples

### HTML

```html
<!-- utiliser selectionStart sur un élément de saisie qui n'est pas textuel -->
<label for="color">Propriété selectionStart sur type=color</label>
<input id="color" type="color" />

<!-- utiliser selectionStart sur un élément de saisie textuel -->
<fieldset>
  <legend>Propriété selectionStart sur type=text</legend>
  <label for="statement">Sélectionner le mot 'mdn' dans le texte&nbsp;: </label>
  <input
    type="text"
    id="statement"
    value="Le mdn est un dépôt de documentation." />
  <button id="statement-btn">Sélectionner le mot mdn</button>
</fieldset>
```

### JavaScript

```js
const inputElement = document.getElementById("statement");
const statementBtn = document.getElementById("statement-btn");
const colorStart = document.getElementById("color");

statementBtn.addEventListener("click", () => {
  inputElement.selectionStart = 4;
  inputElement.selectionEnd = 7;
  inputElement.focus();
});

// ouvrir la console du navigateur pour vérifier la sortie
console.log(colorStart.selectionStart); // Sortie : null
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLTextAreaElement.selectionStart")}}
- La propriété {{DOMxRef("HTMLInputElement.selectionEnd")}}
- La méthode {{DOMxRef("HTMLInputElement.setSelectionRange()")}}
