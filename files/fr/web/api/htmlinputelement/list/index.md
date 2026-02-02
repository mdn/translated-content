---
title: "HTMLInputElement : propriété list"
short-title: list
slug: Web/API/HTMLInputElement/list
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`list`** de l'interface {{DOMxRef("HTMLInputElement")}} retourne le {{DOMxRef("HTMLDataListElement")}} pointé par l'attribut HTML [`list`](/fr/docs/Web/HTML/Reference/Elements/input#list) de l'élément, ou `null` si l'attribut `list` n'est pas défini ou si la valeur de l'attribut `list` n'est associée à aucun `<datalist>` dans le même arbre.

> [!NOTE]
> Il s'agit d'une propriété en lecture seule. Pour associer un `<datalist>` à un élément, définissez la valeur de l'attribut `list` avec {{DOMxRef("Element.setAttribute", "setAttribute()")}}.

## Valeur

Un objet {{DOMxRef("HTMLDataListElement")}} ou `null`.

## Exemple

Étant donné le HTML suivant&nbsp;:

```html
<label for="planet">De quelle planète venez-vous&nbsp;?</label>
<input id="planet" type="text" list="superhero" />
<datalist id="superhero">
  <option value="Azarath"></option>
  <option value="Krypton"></option>
  <option value="Tamaran"></option>
</datalist>
```

Vous pouvez récupérer l'élément `<datalist>` associé à l'élément `<input>`&nbsp;:

```js
const inputElement = document.querySelector("#planet");
console.log(inputElement.list); // retourne le HTMLDatalistElement du superhero
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLInputElement.value")}}
- La propriété {{DOMxRef("HTMLInputElement.type")}}
- L'interface {{DOMxRef("HTMLDataListElement")}}
- L'interface {{DOMxRef("HTMLOptionElement")}}
- L'interface {{DOMxRef("HTMLCollection")}}
- L'élément HTML {{HTMLElement("input")}}
- L'élément HTML {{HTMLElement("datalist")}}
- L'élément HTML {{HTMLElement("option")}}
