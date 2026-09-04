---
title: "HTMLTextAreaElement : propriété maxLength"
short-title: maxLength
slug: Web/API/HTMLTextAreaElement/maxLength
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{APIRef("HTML DOM")}}

La propriété **`maxLength`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} indique le nombre maximal de caractères (en {{Glossary("UTF-16", "unités de code UTF-16")}}) autorisé pour la valeur de l'élément HTML {{HTMLElement("textarea")}}, ainsi que le nombre maximal de caractères autorisé pour que la valeur soit valide. Elle reflète l'attribut [`maxlength`](/fr/docs/Web/HTML/Reference/Elements/textarea#maxlength) de l'élément. `-1` signifie qu'il n'y a pas de limite à la longueur de la valeur.

> [!NOTE]
> Les navigateurs empêchent généralement les utilisateur·ice·s d'entrer plus de caractères que l'attribut `maxlength` autorise. Si la longueur est supérieure, l'élément est considéré comme non valide et la propriété {{DOMxRef("ValidityState.tooLong", "tooLong")}} de l'objet {{DOMxRef("ValidityState")}} sera `true`.

## Valeur

Un nombre représentant la valeur de l'attribut `maxlength` de l'élément si présent, ou `-1`.

## Exemples

Pour le HTML suivant&nbsp;:

```html
<p>
  <label for="comment">Commentaire</label>
  <textarea id="comment" minlength="10" maxlength="200"></textarea>
</p>
```

Vous pouvez utiliser la propriété `maxLength` pour lire ou définir la valeur de l'attribut `maxlength` du `<textarea>`&nbsp;:

```js
const textareaElement = document.querySelector("#comment");
console.log(`Valeur maxLength de l'élément : ${textareaElement.maxLength}`); // "Valeur maxLength de l'élément : 200"
textareaElement.maxLength = 220; // met à jour la valeur de l'attribut maxlength de l'élément
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLTextAreaElement.value")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.minLength")}}
- La propriété {{DOMxRef("ValidityState.tooLong")}}
