---
title: "Element : méthode replaceWith()"
short-title: replaceWith()
slug: Web/API/Element/replaceWith
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

La méthode **`replaceWith()`** de l'interface {{DOMxRef("Element")}} remplace cet `Element` dans la liste des enfants de son parent par un ensemble d'objets {{DOMxRef("Node")}} ou de chaînes de caractères. Les chaînes de caractères sont insérées comme des nœuds équivalents {{DOMxRef("Text")}}.

## Syntaxe

```js-nolint
replaceWith(param1)
replaceWith(param1, param2)
replaceWith(param1, param2, /* …, */ paramN)
```

### Paramètres

- `param1`, …, `paramN`
  - : Un ensemble d'objets {{DOMxRef("Node")}} ou de chaînes de caractères par lesquels remplacer l'élément.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Levée lorsque le nœud ne peut pas être inséré à l'emplacement défini dans la hiérarchie.

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

### `replaceWith()` ne fait pas partie de la portée

La méthode `replaceWith()` ne fait pas partie de la portée créée par une instruction `with`. Voir {{JSxRef("Symbol.unscopables")}} pour plus d'informations.

```js
with (node) {
  replaceWith("toto");
}
// ReferenceError: replaceWith is not defined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Node.replaceChild()")}}
- L'interface {{DOMxRef("NodeList")}}
- La méthode {{DOMxRef("CharacterData.replaceWith()")}}
- La méthode {{DOMxRef("DocumentType.replaceWith()")}}
