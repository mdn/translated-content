---
title: "Map : méthode get()"
short-title: get()
slug: Web/JavaScript/Reference/Global_Objects/Map/get
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

La méthode **`get()`** des instances de {{JSxRef("Map")}} retourne la valeur correspondant à la clé dans cette `Map`, ou `undefined` s'il n'y en a pas. Les valeurs des objets sont retournées sous la même référence que celle qui a été initialement stockée, et non sous forme de copie, de sorte que les modifications apportées à l'objet retourné seront reflétées partout où cette référence est utilisée, y compris à l'intérieur de la `Map`.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Map.prototype.get()")}}

```js interactive-example
const map = new Map();
map.set("toto", "truc");

console.log(map.get("toto"));
// Sortie attendue : "truc"

console.log(map.get("tata"));
// Sortie attendue : undefined
```

## Syntaxe

```js-nolint
get(key)
```

### Paramètres

- `key`
  - : La clé de la valeur à retourner depuis l'objet `Map`. Les clés des objets sont comparées par {{Glossary("Object_reference", "référence")}}, et pas par valeur.

### Valeur de retour

La valeur associée à la clé définie dans l'objet `Map`. Si la clé n'est pas trouvée, {{JSxRef("undefined")}} est retournée.

## Exemples

### Utiliser la méthode `get()`

```js
const maMap = new Map();
maMap.set("truc", "toto");

maMap.get("truc"); // Retourne "toto".
maMap.get("machin"); // Retourne undefined.
```

### Utiliser `get()` pour récupérer une référence à un objet

```js
const arr = [];
const maMap = new Map();
maMap.set("toto", arr);

maMap.get("toto").push("truc");

console.log(arr); // ["truc"]
console.log(maMap.get("toto")); // ["truc"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Map")}}
- La méthode {{JSxRef("Map.prototype.delete()")}}
- La méthode {{JSxRef("Map.prototype.set()")}}
- La méthode {{JSxRef("Map.prototype.has()")}}
