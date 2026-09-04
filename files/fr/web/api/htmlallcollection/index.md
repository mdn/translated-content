---
title: HTMLAllCollection
slug: Web/API/HTMLAllCollection
l10n:
  sourceCommit: 5b9e4bb67e5cb4bb2b780e7338a6560463e5a1a7
---

{{APIRef("DOM")}}

L'interface **`HTMLAllCollection`** représente une collection de _tous_ les éléments du document, accessibles par index (comme un tableau) et par un [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) d'élément. Elle est retournée par la propriété {{DOMxRef("document.all")}}.

`HTMLAllCollection` a une forme très similaire à {{DOMxRef("HTMLCollection")}}, mais il existe de nombreuses différences subtiles de comportement — par exemple, `HTMLAllCollection` peut être appelé comme une fonction, et sa méthode `item()` peut être appelée avec une chaîne de caractères représentant l'attribut `id` ou `name` d'un élément.

## Propriétés d'instance

- {{DOMxRef("HTMLAllCollection.length")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Retourne le nombre d'éléments dans la collection.

## Méthodes d'instance

- {{DOMxRef("HTMLAllCollection.item()")}} {{Deprecated_Inline}}
  - : Retourne l'élément situé au décalage défini dans la collection, ou l'élément dont la valeur de l'attribut `id` ou `name` correspond à la chaîne de caractères donnée. Retourne `null` si aucun élément n'est trouvé.
- {{DOMxRef("HTMLAllCollection.namedItem()")}} {{Deprecated_Inline}}
  - : Retourne le premier [élément](/fr/docs/Web/API/Element) de la collection dont l'attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) ou `name` correspond à la chaîne de caractères donnée, ou `null` si aucun élément ne correspond.

## Utiliser dans JavaScript

### Accès indexé

En plus des méthodes ci-dessus, les éléments d'une `HTMLAllCollection` peuvent être accessibles par des indices entiers et des noms de propriétés sous forme de chaînes de caractères. L'attribut HTML `id` peut contenir `:` et `.` comme caractères valides, ce qui nécessiterait l'utilisation de la notation entre crochets pour l'accès aux propriétés. `collection[i]` est équivalent à `collection.item(i)`, où `i` peut être un entier, une chaîne de caractères contenant un entier ou une chaîne de caractères représentant un `id`.

### Appeler comme une fonction

Un objet `HTMLAllCollection` est appelable. Lorsqu'il est appelé sans arguments ou avec `undefined`, il retourne `null`. Sinon, il retourne la même valeur que la méthode {{DOMxRef("HTMLAllCollection/item", "item()")}} lorsqu'elle est appelée avec les mêmes arguments.

### Comportement spécial de conversion de type

Pour des raisons historiques, `document.all` est un objet qui se comporte de la manière suivante comme `undefined`&nbsp;:

- Il est [faiblement égal](/fr/docs/Web/JavaScript/Reference/Operators/Equality) à `undefined` et `null`.
- Il est [équivalent à faux](/fr/docs/Glossary/Falsy) dans les contextes booléens.
- Son [`typeof`](/fr/docs/Web/JavaScript/Reference/Operators/typeof) est `"undefined"`.

Ces comportements spéciaux garantissent que le code suivant&nbsp;:

```js
if (document.all) {
  // En supposant que nous sommes dans IE ; fournir une logique spéciale
}
// En supposant que nous sommes dans un navigateur moderne
```

Ces comportements garantissent que le code continue de fonctionner correctement même si le code est exécuté dans un navigateur qui implémente `document.all` pour des raisons de compatibilité.

Cependant, dans tous les autres contextes, `document.all` reste un objet. Par exemple&nbsp;:

- Il n'est pas [strictement égal](/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality) à `undefined` ou `null`.
- Lorsqu'il est utilisé sur le côté gauche de [l'opérateur de coalescence nulle](/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) (`??`) ou de [l'opérateur de chaînage optionnel](/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining) (`?.`), il ne provoquera pas l'arrêt prématuré de l'expression.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLCollection")}}
