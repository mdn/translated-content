---
title: 'TypeError: "x" has no properties'
slug: Web/JavaScript/Reference/Errors/No_properties
---

{{jsSidebar("Errors")}}

## Message

```
TypeError: Unable to get property {x} of undefined or null reference (Edge)
TypeError: null has no properties (Firefox)
TypeError: undefined has no properties (Firefox)
```

## Type d'erreur

{{jsxref("TypeError")}}.

## Quel est le problème ?

Les valeurs {{jsxref("null")}} et {{jsxref("undefined")}} n'ont aucunes propriétés auxquelles accéder.

## Exemples

```js example-bad
null.toto;
// TypeError: null has no properties

undefined.truc;
// TypeError: undefined has no properties
```

## Voir aussi

- {{jsxref("null")}}
- {{jsxref("undefined")}}
