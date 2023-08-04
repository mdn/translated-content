---
title: Element.prepend()
slug: Web/API/Element/prepend
---

{{APIRef("DOM")}}

La méthode **`Element.prepend()`** permet d'insérer un ensemble d'objets [`Node`](/fr/docs/Web/API/Node) ou des chaînes de caractères avant le premier élément enfant de l'élément courant. Les chaînes de caractères sont insérées comme des nœuds [`Text`](/fr/docs/Web/API/Text).

## Syntaxe

```js
prepend(param1);
prepend(param1, param2);
prepend(param1, param2, /* ... ,*/ paramN);
```

### Paramètres

- `param1`, …, `paramN`
  - : Un ensemble d'objets [`Node`](/fr/docs/Web/API/Node) ou de chaînes de caractères à insérer.

### Valeur de retour

`undefined`.

### Exceptions

- [`DOMException`](/fr/docs/Web/API/DOMException) `HierarchyRequestError`
  - : Levée lorsque le nœud ne peut pas être inséré à l'endroit indiqué dans la hiérarchie.

## Exemples

### Ajouter un élément

```js
let div = document.createElement("div");
let p = document.createElement("p");
let span = document.createElement("span");
div.append(p);
div.prepend(span);

console.log(div.childNodes); // NodeList [ <span>, <p> ]
```

### Ajouter du texte

```js
let div = document.createElement("div");
div.append("Du texte");
div.prepend("Titre : ");

console.log(div.textContent); // "Titre : Du texte"
```

### Ajouter un élément et du texte

```js
let div = document.createElement("div");
let p = document.createElement("p");
div.prepend("Du texte", p);

console.log(div.childNodes); // NodeList [ #text "Du texte", <p> ]
```

### `prepend()` n'est pas disponible dans la portée créée par `with`

La méthode `prepend()` ne fait pas partie de la portée créée par une instruction `with`. Voir [`Symbol.unscopables`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables) pour plus d'informations.

```js
let div = document.createElement("div");

with (div) {
  prepend("toto");
}
// ReferenceError: prepend is not defined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Element.append()`](/fr/docs/Web/API/Element/append)
- [`Node.appendChild()`](/fr/docs/Web/API/Node/appendChild)
- [`Node.insertBefore()`](/fr/docs/Web/API/Node/insertBefore)
- [`Element.before()`](/fr/docs/Web/API/Element/before)
- [`Element.insertAdjacentElement()`](/fr/docs/Web/API/Element/insertAdjacentElement)
- [`NodeList`](/fr/docs/Web/API/NodeList)
