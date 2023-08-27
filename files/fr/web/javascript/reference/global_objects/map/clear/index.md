---
title: Map.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Map/clear
---

{{JSRef}}

La méthode **`clear()`** supprime tous les éléments d'un objet `Map`.

{{EmbedInteractiveExample("pages/js/map-prototype-clear.html")}}

## Syntaxe

```js
maMap.clear();
```

### Valeur de retour

{{jsxref("undefined")}}.

## Exemple

### Utiliser la méthode `clear()`

```js
var maMap = new Map();
maMap.set("truc", "bidule");
maMap.set(1, "toto");

maMap.size; // 2
maMap.has("truc"); // true

maMap.clear();

maMap.size; // 0
maMap.has("truc"); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Map")}}
