---
title: "HTMLInputElement : propriété maxLength"
short-title: maxLength
slug: Web/API/HTMLInputElement/maxLength
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{APIRef("HTML DOM")}}

La propriété **`maxLength`** de l'interface {{DOMxRef("HTMLInputElement")}} indique le nombre maximal de caractères (en {{Glossary("UTF-16", "unités de code UTF-16")}}) autorisé pour la valeur de l'élément HTML {{HTMLElement("input")}}, ainsi que le nombre maximal de caractères autorisé pour que la valeur soit valide. Elle reflète l'attribut [`maxlength`](/fr/docs/Web/HTML/Reference/Elements/input#maxlength) de l'élément. `-1` signifie qu'il n'y a aucune limite sur la longueur de la valeur.

> [!NOTE]
> Les navigateurs empêchent généralement les utilisateur·ice·s de saisir plus de caractères que ce que permet l'attribut `maxlength`. Si la longueur est supérieure, l'élément est considéré comme invalide et la propriété {{DOMxRef("ValidityState.tooLong", "tooLong")}} de l'objet {{DOMxRef("ValidityState")}} sera à `true`.

## Valeur

Un nombre représentant la valeur `maxlength` de l'élément si elle est présente, ou `-1`.

## Exemple

Étant donné le HTML suivant&nbsp;:

```html
<p>
  <label for="password">Votre mot de passe</label>
  <input id="password" type="password" minlength="8" maxlength="20" />
</p>
```

Vous pouvez utiliser la propriété `maxLength` pour lire ou modifier la valeur de l'attribut `maxlength` de l'élément `<input>`&nbsp;:

```js
const inputElement = document.querySelector("#password");
console.log(`maxLength de l'élément : ${inputElement.maxLength}`); // "maxLength de l'élément : 20"
inputElement.maxLength = 18; // met à jour la valeur de l'attribut maxlength
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLInputElement.value")}}
- La propriété {{DOMxRef("HTMLInputElement.minLength")}}
- La propriété {{DOMxRef("ValidityState.tooLong")}}
