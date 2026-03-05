---
title: "Map : méthode has()"
short-title: has()
slug: Web/JavaScript/Reference/Global_Objects/Map/has
l10n:
  sourceCommit: 0574ac1985889d2ccce1b61e42db98d74ac1bbcb
---

La méthode **`has()`** des instances de {{JSxRef("Map")}} retourne un booléen indiquant si une entrée avec la clé définie existe dans cette `Map` ou non.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Map.prototype.has()")}}

```js interactive-example
const map = new Map();
map.set("toto", "truc");

console.log(map.has("toto"));
// Sortie attendue : true

console.log(map.has("baz"));
// Sortie attendue : false
```

## Syntaxe

```js-nolint
has(key)
```

### Paramètres

- `key`
  - : La clé de l'entrée à tester pour sa présence dans l'objet `Map`. Les clés des objets sont comparées par {{Glossary("Object_reference", "référence")}}, et pas par valeur.

### Valeur de retour

Retourne `true` si une entrée avec la clé définie existe dans l'objet `Map`, sinon `false`.

## Exemples

### Utiliser la méthode `has()`

```js
const maMap = new Map();
maMap.set("truc", "toto");

maMap.has("truc"); // true
maMap.has("bidule"); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Map")}}
- La méthode {{JSxRef("Map.prototype.delete()")}}
- La méthode {{JSxRef("Map.prototype.get()")}}
- La méthode {{JSxRef("Map.prototype.set()")}}
