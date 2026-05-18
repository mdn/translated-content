---
title: "HTMLInputElement : propriété selectionEnd"
short-title: selectionEnd
slug: Web/API/HTMLInputElement/selectionEnd
l10n:
  sourceCommit: e970f0765da11f7a6461cdb6693c40a39ecb6934
---

{{APIRef("HTML DOM")}}

La propriété **`selectionEnd`** de l'interface {{DOMxRef("HTMLInputElement")}} est un nombre qui représente l'index de fin du texte sélectionné. En d'autres termes, elle représente l'index du caractère **qui suit immédiatement** la sélection. De même, lorsqu'il n'y a pas de sélection, elle retourne le décalage du caractère qui suit immédiatement la position actuelle du curseur dans le champ de saisie.

> [!NOTE]
> Selon la [spécification WHATWG des formulaires <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply), la propriété `selectionEnd` ne s'applique qu'aux champs de saisie de types texte, recherche, URL, téléphone et mot de passe. Dans les navigateurs modernes, une exception est levée lors de la définition de la propriété `selectionEnd` sur les autres types de champs de saisie. De plus, cette propriété retourne `null` lors de l'accès à la propriété `selectionEnd` sur des éléments de saisie qui ne sont pas textuels.

Si `selectionEnd` est inférieur à `selectionStart`, alors les deux sont
considérés comme la valeur de `selectionEnd`.

## Valeur

Un nombre positif.

## Exemples

### HTML

```html
<!-- utiliser selectionEnd sur un élément de saisie qui n'est pas textuel -->
<label for="color">Propriété selectionEnd sur type=color</label>
<input id="color" type="color" />

<!-- utiliser selectionEnd sur un élément de saisie textuel -->
<fieldset>
  <legend>Propriété selectionEnd sur type=text</legend>
  <label for="pin">Saisie du PIN</label>
  <input type="text" id="pin" value="PIN impossible : 102-12-145" />
  <button id="pin-btn" type="button">Correction du PIN</button>
</fieldset>
```

### JavaScript

```js
const colorEnd = document.getElementById("color");
const text = document.querySelector("#pin");
const pinBtn = document.querySelector("#pin-btn");
const validPinChecker = /^\d{3}-\d{2}-\d{3}/g;
const selectionEnd = text.value.length;
const selectedText = text.value.substring(text.selectionStart, selectionEnd);

pinBtn.addEventListener("click", () => {
  const correctedText = selectedText.replace(validPinChecker, "");
  text.value = correctedText;
});

// ouvrir la console du navigateur pour vérifier la sortie
console.log(colorEnd.selectionEnd); // Sortie : null
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLTextAreaElement.selectionEnd")}}
- La propriété {{DOMxRef("HTMLInputElement.selectionStart")}}
- La méthode {{DOMxRef("HTMLInputElement.setSelectionRange()")}}
