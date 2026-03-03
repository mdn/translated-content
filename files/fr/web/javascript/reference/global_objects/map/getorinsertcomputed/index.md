---
title: "Map : méthode getOrInsertComputed()"
short-title: getOrInsertComputed()
slug: Web/JavaScript/Reference/Global_Objects/Map/getOrInsertComputed
l10n:
  sourceCommit: af88df72d0ee1da6fd1be412f615e8b4caf98e70
---

La méthode **`getOrInsertComputed()`** des instances de {{JSxRef("Map")}} retourne la valeur correspondant à la clé définie dans cette `Map`. Si la clé n'est pas présente, elle insère une nouvelle entrée avec la clé et une valeur par défaut calculée à partir d'une fonction de rappel donnée, puis retourne la valeur insérée.

Utilisez cette méthode à la place de {{JSxRef("Map.prototype.getOrInsert()")}} lorsque la valeur par défaut est coûteuse à calculer et que vous souhaitez éviter de la calculer sauf si cela est réellement nécessaire.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Map.prototype.getOrInsertComputed()")}}

```js interactive-example
const map = new Map([["toto", "truc"]]);
const defaultCreator = (key) => `par défaut pour ${key}`;

console.log(map.getOrInsertComputed("toto", defaultCreator));
// Sortie attendue : "truc"

console.log(map.getOrInsertComputed("tata", defaultCreator));
// Sortie attendue : "par défaut pour tata"
```

## Syntaxe

```js-nolint
getOrInsertComputed(key, callback)
```

### Paramètres

- `key`
  - : La clé de l'élément à retourner depuis l'objet `Map`. Les clés des objets sont comparées par {{Glossary("Object_reference", "référence")}}, et pas par valeur.
- `callback`
  - : Une fonction qui retourne la valeur à insérer et à retourner si la clé n'est pas déjà présente dans l'objet `Map`. La fonction est appelée avec l'argument suivant&nbsp;:
    - `key`
      - : La même clé qui a été passée à `getOrInsertComputed()`.

### Valeur de retour

La valeur associée à la clé définie dans l'objet `Map`. Si la clé n'est pas trouvée, le résultat de `callback(key)` est inséré et retourné.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `callback` n'est pas appelable.

## Exemples

### Éviter le calcul inutile de la valeur par défaut

Lors de l'utilisation de {{JSxRef("Map.prototype.getOrInsert()")}}, la valeur par défaut est calculée à chaque fois, même si elle n'est pas nécessaire. Avec `getOrInsertComputed()`, la valeur par défaut n'est calculée que lorsque cela est nécessaire.

```js
const map = new Map([["toto", "truc"]]);
const createurParDefaut = (key) => {
  console.log(`Créer la valeur par défaut pour ${key}`);
  return `valeur par défaut pour ${key}`;
};

map.getOrInsert("toto", createurParDefaut("toto")); // Affiche "Créer la valeur par défaut pour toto"
map.getOrInsertComputed("toto", createurParDefaut); // N'affiche rien
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Map.prototype.getOrInsertComputed` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#map-upsert)
- [Prothèse d'émulation es-shims de `Map.prototype.getOrInsertComputed` <sup>(angl.)</sup>](https://www.npmjs.com/package/map.prototype.getorinsertcomputed)
- L'objet {{JSxRef("Map")}}
- La méthode {{JSxRef("Map.prototype.get()")}}
- La méthode {{JSxRef("Map.prototype.set()")}}
- La méthode {{JSxRef("Map.prototype.has()")}}
- La méthode {{JSxRef("Map.prototype.getOrInsert()")}}
