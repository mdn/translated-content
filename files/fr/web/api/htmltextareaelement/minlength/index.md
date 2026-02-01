---
title: "HTMLTextAreaElement : propriété minLength"
short-title: minLength
slug: Web/API/HTMLTextAreaElement/minLength
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{APIRef("HTML DOM")}}

La propriété **`minLength`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} indique le nombre minimal de caractères (en {{Glossary("UTF-16", "unités de code UTF-16")}}) requis pour que la valeur de l'élément HTML {{HTMLElement("textarea")}} soit valide. Elle reflète l'attribut [`minlength`](/fr/docs/Web/HTML/Reference/Elements/textarea#minlength) de l'élément. `-1` signifie qu'il n'y a pas d'exigence de longueur minimale.

> [!NOTE]
> Si la zone de texte a une valeur, et que cette valeur contient moins de caractères que ce qu'exige l'attribut `minlength`, l'élément est considéré comme non valide et la propriété {{DOMxRef("ValidityState.tooShort", "tooShort")}} de l'objet {{DOMxRef("ValidityState")}} sera `true`.

## Valeur

Un nombre représentant la valeur de l'attribut `minlength` de l'élément si présent, ou `-1`.

## Exemples

Pour le HTML suivant&nbsp;:

```html
<p>
  <label for="comment">Commentaire</label>
  <textarea id="comment" minlength="10" maxlength="200"></textarea>
</p>
```

Vous pouvez utiliser la propriété `minLength` pour lire ou définir la valeur de l'attribut `minlength` du `<textarea>`&nbsp;:

```js
const textareaElement = document.querySelector("#comment");
console.log(`Valeur minLength de l'élément : ${textareaElement.minLength}`); // "Valeur minLength de l'élément : 10"
textareaElement.minLength = 5; // met à jour la valeur de l'attribut minlength de l'élément
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLTextAreaElement.value")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.maxLength")}}
- La propriété {{DOMxRef("ValidityState.tooShort")}}
