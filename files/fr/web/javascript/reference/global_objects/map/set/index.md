---
title: "Map : méthode set()"
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/Map/set
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

La méthode **`set()`** des instances de {{JSxRef("Map")}} ajoute une nouvelle entrée avec une clé et une valeur définies à cette `Map`, ou met à jour une entrée existante si la clé existe déjà.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Map.prototype.set()")}}

```js interactive-example
const map = new Map();
map.set("tata", "toto");

console.log(map.get("tata"));
// Sortie attendue : "toto"

console.log(map.get("truc"));
// Sortie attendue : undefined
```

## Syntaxe

```js-nolint
set(key, value)
```

### Paramètres

- `key`
  - : La clé de l'entrée à ajouter ou à modifier dans l'objet `Map`. Peut être n'importe quelle valeur. Les clés des objets sont comparées par {{Glossary("Object_reference", "référence")}}, et pas par valeur.
- `value`
  - : La valeur de l'entrée à ajouter ou à modifier dans l'objet `Map`. Peut être n'importe quelle valeur.

### Valeur de retour

L'objet `Map` concerné.

## Exemples

### Utiliser la méthode `set()`

```js
const maMap = new Map();

// On ajoute de nouveaux éléments à l'objet map
maMap.set("truc", "toto");
maMap.set(1, "bidule");

// On met à jour un élément
maMap.set("truc", "fuuu");
```

### Utiliser la méthode `set()` avec un enchaînement

La méthode `set()` renvoie le même objet `Map` et on peut donc la chaîner pour des opérations successives&nbsp;:

```js
// Ajouter de nouveaux éléments au tableau associatif avec chaînage.
maMap.set("truc", "toto").set(1, "tototruc").set(2, "bidule");
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Map")}}
- La méthode {{JSxRef("Map.prototype.delete()")}}
- La méthode {{JSxRef("Map.prototype.get()")}}
- La méthode {{JSxRef("Map.prototype.has()")}}
