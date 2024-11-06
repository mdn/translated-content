---
title: Object.getOwnPropertySymbols()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
---

{{JSRef}}

La méthode **`Object.getOwnPropertySymbols()`** renvoie un tableau contenant tous les symboles des propriétés trouvées directement sur un objet donné.

{{EmbedInteractiveExample("pages/js/object-getownpropertysymbols.html")}}

## Syntaxe

```js
Object.getOwnPropertySymbols(obj);
```

### Paramètres

- `obj`
  - : L'objet dont on souhaite lister les symboles des propriétés propres.

### Valeur de retour

Un tableau des symboles trouvés directement sur l'objet passé en argument.

## Description

De la même façon que {{jsxref("Object.getOwnPropertyNames()")}}, il est possible d'avoir la liste des symboles des propriétés d'un objet donné sous forme d'un tableau. La méthode {{jsxref("Object.getOwnPropertyNames()")}} ne contiendra uniquement que les propriétés « nommées » d'un objet et non pas les propriétés uniquement accessibles via un symbole.

Par défaut, aucun objet ne possède de propriété accessible via un symbole à l'état initial. Ainsi, `Object.getOwnPropertySymbols()` renvoie un tableau vide sauf si des propriétés nommées avec des symboles ont été définies pour l'objet.

## Exemples

```js
var obj = {};
var a = Symbol("a");
var b = Symbol.for("b");

obj[a] = "symboleLocal";
obj[b] = "symboleGlobal";

var objectSymboles = Object.getOwnPropertySymbols(obj);

console.log(objectSymboles.length); // 2
console.log(objectSymboles); // [Symbol(a), Symbol(b)]
console.log(objectSymboles[0]); // Symbol(a)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Symbol")}}
