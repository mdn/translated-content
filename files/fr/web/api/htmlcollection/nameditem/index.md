---
title: "HTMLCollection : méthode namedItem()"
short-title: namedItem()
slug: Web/API/HTMLCollection/namedItem
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("DOM")}}

La méthode **`namedItem()`** de l'interface {{DOMxRef("HTMLCollection")}} retourne le premier {{DOMxRef("Element")}} de la collection dont l'attribut `id` ou `name` correspond au nom défini, ou `null` si aucun élément ne correspond.

En JavaScript, au lieu d'appeler `collection.namedItem("value")`, vous pouvez aussi accéder directement à l'entrée par nom sur la collection, par exemple `collection["value"]`, sauf si ce nom entre en conflit avec l'une des propriétés existantes de `HTMLCollection`.

## Syntaxe

```js-nolint
namedItem(key)
```

### Paramètres

- `key`
  - : Une chaîne de caractères représentant la valeur de l'attribut `id` ou `name` de l'élément recherché.

### Valeur de retour

Le premier objet {{DOMxRef("Element")}} dans la {{DOMxRef("HTMLCollection")}} correspondant à `key`, ou [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null) s'il n'y en a pas. Retourne toujours `null` si `key` est la chaîne vide.

## Exemple

### HTML

```html
<div id="personal">
  <span name="title">Dr.</span>
  <span name="first-name">Carina</span>
  <span name="last-name">Anand</span>
  <span id="degree">(MD)</span>
</div>
```

### JavaScript

```js
const container = document.getElementById("personal");

// Retourne le HTMLSpanElement nommé "title" ; si aucun élément de ce nom n'existe, null est retourné
const titleSpan = container.children.namedItem("title");

// Les variantes suivantes retournent undefined au lieu de null si aucun élément ne correspond au nom ou à l'id
const firstNameSpan = container.children["first-name"];
const lastNameSpan = container.children["last-name"];

// Retourne l'élément <span> dont l'id est "degree"
const degreeSpan = container.children.namedItem("degree");

const output = document.createElement("div");
output.textContent = `Result: ${titleSpan.textContent} ${firstNameSpan.textContent} ${lastNameSpan.textContent} ${degreeSpan.textContent}`;

container.insertAdjacentElement("afterend", output);
```

{{EmbedLiveSample("Exemple")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
