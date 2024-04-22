---
title: Set.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Set/clear
---

{{JSRef}}

La méthode **`clear()`** permet de retirer tous les éléments d'un ensemble `Set`.

{{EmbedInteractiveExample("pages/js/set-prototype-clear.html")}}

## Syntaxe

```js
monSet.clear();
```

### Valeur de retour

{{jsxref("undefined")}}.

## Exemples

```js
var monSet = new Set();
monSet.add(1);
monSet.add("toto");

monSet.size; // 2
monSet.has("toto"); // true

monSet.clear();

monSet.size; // 0
monSet.has("truc"); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

### Voir aussi

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
