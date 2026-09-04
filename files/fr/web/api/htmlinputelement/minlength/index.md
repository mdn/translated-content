---
title: "HTMLInputElement : propriété minLength"
short-title: minLength
slug: Web/API/HTMLInputElement/minLength
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{APIRef("HTML DOM")}}

La propriété **`minLength`** de l'interface {{DOMxRef("HTMLInputElement")}} indique le nombre minimal de caractères (en {{Glossary("UTF-16", "unités de code UTF-16")}}) requis pour que la valeur de l'élément HTML {{HTMLElement("input")}} soit valide. Elle reflète l'attribut [`minlength`](/fr/docs/Web/HTML/Reference/Elements/input#minlength) de l'élément. `-1` signifie qu'il n'y a aucune exigence de longueur minimale.

> [!NOTE]
> Si le champ de saisie a une valeur, et que cette valeur contient moins de caractères que ce qu'exige l'attribut `minlength`, l'élément est considéré comme invalide et la propriété {{DOMxRef("ValidityState.tooShort", "tooShort")}} de l'objet {{DOMxRef("ValidityState")}} sera à `true`.

## Valeur

Un nombre représentant la valeur `minlength` de l'élément si elle est présente, ou `-1`.

## Exemple

Étant donné le HTML suivant&nbsp;:

```html
<p>
  <label for="password">Votre mot de passe</label>
  <input id="password" type="password" minlength="8" maxlength="20" />
</p>
```

Vous pouvez utiliser la propriété `minLength` pour lire ou modifier la valeur de l'attribut `minlength` de l'élément `<input>`&nbsp;:

```js
const inputElement = document.querySelector("#password");
console.log(`minLength de l'élément : ${inputElement.minLength}`); // "minLength de l'élément : 8"
inputElement.minLength = 12; // met à jour la valeur de l'attribut minlength
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLInputElement.value")}}
- La propriété {{DOMxRef("HTMLInputElement.maxLength")}}
- La propriété {{DOMxRef("ValidityState.tooShort")}}
