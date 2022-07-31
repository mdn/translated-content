---
title: Element.replaceWith()
slug: Web/API/Element/replaceWith
translation_of: Web/API/Element/replaceWith
browser-compat: api.Element.replaceWith
---
{{APIRef("DOM")}}

La méthode **`Element.replaceWith()`** remplace l'élément courant dans la liste des enfants de son parent par un ensemble d'objets [`Node`](/fr/docs/Web/API/Node) ou de chaînes de caractères.

Les chaînes de caractères sont insérées comme des nœuds [`Text`](/fr/docs/Web/API/Text).

## Syntaxe

```js
replaceWith(param1)
replaceWith(param1, param2)
replaceWith(param1, param2, /* ... ,*/ paramN)
```

### Paramètres

- `param1`, …, `paramN`
  - : Un ensemble d'objets [`Node`](/fr/docs/Web/API/Node) ou de chaînes de caractères par lesquels remplacer l'élément.

### Exceptions

- [`DOMException`](/fr/docs/Web/API/DOMException) `HierarchyRequestError`
  - : Levée lorsque le nœud ne peut pas être inséré à l'emplacement indiqué dans la hiérarchie.

## Exemples

### Utiliser `replaceWith()`

```js
const div = document.createElement("div");
const p = document.createElement("p");
div.appendChild(p);
const span = document.createElement("span");

p.replaceWith(span);

console.log(div.outerHTML);
// "<div><span></span></div>"
```

### `replaceWith()` ne fait pas partie de la portée de `with`

La méthode `replaceWith()` ne fait pas partie de la portée créée par une instruction `with`. Voir [`Symbol.unscopables`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables) pour plus d'informations.

```js
with(node) {
  replaceWith("toto");
}
// ReferenceError: replaceWith is not defined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Node.replaceChild()`](/fr/docs/Web/API/Node/replaceChild)
- [`NodeList`](/fr/docs/Web/API/NodeList)
