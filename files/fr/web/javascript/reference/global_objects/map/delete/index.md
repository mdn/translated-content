---
title: "Map : méthode delete()"
short-title: delete()
slug: Web/JavaScript/Reference/Global_Objects/Map/delete
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

La méthode **`delete()`** des instances de {{JSxRef("Map")}} supprime l'entrée définie par la clé de cette `Map`.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Map.prototype.delete()")}}

```js interactive-example
const map = new Map();
map.set("bar", "foo");

console.log(map.delete("bar"));
// Résultat attendu : true
// True indique une suppression réussie

console.log(map.has("bar"));
// Résultat attendu : false
```

## Syntaxe

```js-nolint
delete(key)
```

### Paramètres

- `key`
  - : La clé de l'entrée à supprimer de l'objet `Map`. Les clés des objets sont comparées par {{Glossary("Object_reference", "référence")}}, et pas par valeur.

### Valeur de retour

`true` si une entrée a été supprimée avec succès de l'objet `Map`. `false` si la clé n'est pas trouvée dans l'objet `Map`.

## Exemples

### Utiliser la méthode `delete()`

```js
const maMap = new Map();
maMap.set("truc", "toto");

console.log(maMap.delete("truc")); // Retourne true. Supprimé avec succès.
console.log(maMap.has("truc")); // Retourne false. L'élément "truc" n'est plus présent.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Map")}}
- La méthode {{JSxRef("Map.prototype.clear()")}}
- La méthode {{JSxRef("Map.prototype.get()")}}
- La méthode {{JSxRef("Map.prototype.set()")}}
- La méthode {{JSxRef("Map.prototype.has()")}}
