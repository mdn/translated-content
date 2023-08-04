---
title: Element.append()
slug: Web/API/Element/append
---

{{APIRef("DOM")}}

La méthode **`Element.append()`** ajoute un ensemble d'objets [`Node`](/fr/docs/Web/API/Node) ou de chaînes de caractères après le dernier enfant d'`Element`. Les chaînes de caractères sont insérées comme des nœuds [`Text`](/fr/docs/Web/API/Text).

Voici les différences entre `Element.append()` et [`Node.appendChild()`](/fr/docs/Web/API/Node/appendChild)&nbsp;:

- `Element.append()` permet d'ajouter des chaînes de caractères tandis que `Node.appendChild()` accepte uniquement les objets [`Node`](/fr/docs/Web/API/Node).
- `Element.append()` n'a pas de valeur de retour alors que `Node.appendChild()` renvoie l'objet [`Node`](/fr/docs/Web/API/Node) ajouté.
- `Element.append()` permet d'ajouter plusieurs nœuds et chaînes de caractères tandis que `Node.appendChild()` ne permet d'ajouter qu'un seul nœud.

## Syntaxe

```js
append(param1);
append(param1, param2);
append(param1, param2, /* ... ,*/ paramN);
```

### Paramètres

- `param1`, …, `paramN`
  - : Un ensemble d'objets [`Node`](/fr/docs/Web/API/Node) ou de chaînes de caractères à insérer.

### Exceptions

- [`DOMException`](/fr/docs/Web/API/DOMException) `HierarchyRequestError`
  - : Levée lorsque le nœud ne peut être inséré à l'emplacement indiqué dans la hiérarchie.

## Exemples

### Ajouter un élément

```js
let div = document.createElement("div");
let p = document.createElement("p");
div.append(p);

console.log(div.childNodes); // NodeList [ <p> ]
```

### Ajouter du texte

```js
let div = document.createElement("div");
div.append("Du texte");

console.log(div.textContent); // "Du texte"
```

### Ajouter un élément et du texte

```js
let div = document.createElement("div");
let p = document.createElement("p");
div.append("Du texte", p);

console.log(div.childNodes); // NodeList [ #text "Du texte", <p> ]
```

### `append()` est hors de la portée créée par `with`

La méthode `append()` n'est pas disponible dans la portée créée par une instruction `with`. Voir [`Symbol.unscopables`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables) pour plus d'informations.

```js
let div = document.createElement("div");

with (div) {
  append("toto");
}
// ReferenceError: append is not defined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Element.prepend()`](/fr/docs/Web/API/Element/prepend)
- [`Node.appendChild()`](/fr/docs/Web/API/Node/appendChild)
- [`Element.after()`](/fr/docs/Web/API/Element/after)
- [`Element.insertAdjacentElement()`](/fr/docs/Web/API/Element/insertAdjacentElement)
- [`NodeList`](/fr/docs/Web/API/NodeList)
