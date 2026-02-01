---
title: "HTMLInputElement : propriété name"
short-title: name
slug: Web/API/HTMLInputElement/name
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`name`** de l'interface {{DOMxRef("HTMLInputElement")}} indique le nom de l'élément HTML {{HTMLElement("input")}}. Elle reflète l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/input#name) de l'élément.

## Valeur

Une chaîne de caractères représentant le nom de l'élément.

## Exemple

Étant donné le HTML suivant&nbsp;:

```html
<p>
  <label for="planet">Sur quelle planète êtes-vous né&nbsp;?</label>
  <input id="planet" type="text" name="origin" />
</p>
```

Vous pouvez utiliser la propriété `name` pour lire ou modifier le nom de l'élément `<input>`&nbsp;:

```js
const inputElement = document.querySelector("#planet");
console.log(`Nom de l'élément : ${inputElement.name}`); // "Nom de l'élément : origin"
inputElement.name = "planet"; // met à jour le nom de l'élément
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLInputElement.value")}}
- La propriété {{DOMxRef("HTMLInputElement.type")}}
