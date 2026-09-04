---
title: "Element : méthode append()"
short-title: append()
slug: Web/API/Element/append
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

La méthode **`append()`** de l'interface {{DOMxRef("Element")}} insère un ensemble d'objets {{DOMxRef("Node")}} ou de chaînes de caractères après le dernier enfant de l'élément. Les chaînes de caractères sont insérées comme des nœuds équivalents {{DOMxRef("Text")}}.

Différences avec {{DOMxRef("Node.appendChild()")}}&nbsp;:

- `Element.append()` permet d'ajouter des chaînes de caractères tandis que `Node.appendChild()` accepte uniquement les objets {{DOMxRef("Node")}}.
- `Element.append()` n'a pas de valeur de retour alors que `Node.appendChild()` retourne l'objet {{DOMxRef("Node")}} ajouté.
- `Element.append()` permet d'ajouter plusieurs nœuds et chaînes de caractères tandis que `Node.appendChild()` ne permet d'ajouter qu'un seul nœud.

## Syntaxe

```js-nolint
append(param1)
append(param1, param2)
append(param1, param2, /* …, */ paramN)
```

### Paramètres

- `param1`, …, `paramN`
  - : Un ensemble d'objets {{DOMxRef("Node")}} ou de chaînes de caractères à insérer.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
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

La méthode `append()` n'est pas disponible dans la portée créée par une instruction `with`. Voir {{JSxRef("Symbol.unscopables")}} pour plus d'informations.

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

- La méthode {{DOMxRef("Element.prepend()")}}
- La méthode {{DOMxRef("Node.appendChild()")}}
- La méthode {{DOMxRef("Element.after()")}}
- La méthode {{DOMxRef("Element.insertAdjacentElement()")}}
- L'interface {{DOMxRef("NodeList")}}
