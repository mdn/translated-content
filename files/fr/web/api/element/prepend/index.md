---
title: "Element : méthode prepend()"
short-title: prepend()
slug: Web/API/Element/prepend
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

La méthode **`prepend()`** de l'interface {{DOMxRef("Element")}} insère un ensemble d'objets {{DOMxRef("Node")}} ou de chaînes de caractères avant le premier enfant de l'élément. Les chaînes de caractères sont insérées comme des nœuds {{DOMxRef("Text")}} équivalents.

## Syntaxe

```js-nolint
prepend(param1)
prepend(param1, param2)
prepend(param1, param2, /* …, */ paramN)
```

### Paramètres

- `param1`, …, `paramN`
  - : Un ensemble d'objets {{DOMxRef("Node")}} ou de chaînes de caractères à insérer.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
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

### La méthode `prepend()` est inaccessible dans la portée

La méthode `prepend()` ne fait pas partie de la portée créée par une instruction `with`.
Voir {{JSxRef("Symbol.unscopables")}} pour plus d'informations.

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

- La méthode {{DOMxRef("Element.append()")}}
- La méthode {{DOMxRef("Node.appendChild()")}}
- La méthode {{DOMxRef("Node.insertBefore()")}}
- La méthode {{DOMxRef("Element.before()")}}
- La méthode {{DOMxRef("Element.insertAdjacentElement()")}}
- L'interface {{DOMxRef("NodeList")}}
