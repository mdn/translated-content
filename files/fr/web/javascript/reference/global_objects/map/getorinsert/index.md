---
title: "Map : méthode getOrInsert()"
short-title: getOrInsert()
slug: Web/JavaScript/Reference/Global_Objects/Map/getOrInsert
l10n:
  sourceCommit: 5956b80db199b86203b2cdfafe3e6ce45b6ad3c3
---

La méthode **`getOrInsert()`** des instances de {{JSxRef("Map")}} retourne la valeur correspondant à la clé définie dans cette `Map`. Si la clé n'est pas présente, elle insère une nouvelle entrée avec la clé et une valeur par défaut donnée, puis retourne la valeur insérée.

Si le calcul de la valeur par défaut est coûteux, envisagez d'utiliser {{JSxRef("Map.prototype.getOrInsertComputed()")}} à la place, qui prend une fonction de rappel pour calculer la valeur par défaut uniquement si elle est réellement nécessaire.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Map.prototype.getOrInsert()")}}

```js interactive-example
const map = new Map([["toto", "truc"]]);
console.log(map.getOrInsert("toto", "défaut"));
// Sortie attendue : "truc"

console.log(map.getOrInsert("baz", "défaut"));
// Sortie attendue : "défaut"
```

## Syntaxe

```js-nolint
getOrInsert(key, defaultValue)
```

### Paramètres

- `key`
  - : La clé de la valeur à retourner depuis l'objet `Map`. Les clés des objets sont comparées par {{Glossary("Object_reference", "référence")}}, et pas par valeur.
- `defaultValue`
  - : La valeur à insérer et à retourner si la clé n'est pas déjà présente dans l'objet `Map`.

### Valeur de retour

La valeur associée à la clé définie dans l'objet `Map`. Si la clé n'est pas trouvée, `defaultValue` est inséré et retourné.

## Description

La méthode `getOrInsert()` est équivalente à ce qui suit&nbsp;:

```js
if (map.has(cle)) {
  return map.get(cle);
}
map.set(cle, valeurDefaut);
return valeurDefaut;
```

C'est également similaire au modèle suivant (qui est légèrement moins fiable si `null` ou `undefined` sont des valeurs valides dans vos tableaux associatifs)&nbsp;:

```js
map.set(cle, map.get(cle) ?? valeurDefaut);
```

## Exemples

### Tableaux associatifs multiples

Dans un tableau associatif où chaque clé est associée à un tableau de valeurs, vous pouvez utiliser `getOrInsert()` pour vous assurer que le tableau existe pour une clé donnée avant d'essayer d'y ajouter une nouvelle valeur.

```js
map.getOrInsert(cle, []).push(valeur);
```

### Appliquer des valeurs par défaut

Vous pouvez utiliser `getOrInsert()` pour vous assurer qu'une clé existe dans un tableau associatif, même si vous n'avez pas encore besoin de sa valeur. Cela permet généralement de normaliser les entrées des utilisateur·ice·s.

Imaginez que vous avez un tableau associatif des préférences des utilisateur·ice·s, et que vous voulez vous assurer qu'une certaine préférence est toujours définie sur une valeur par défaut si l'utilisateur·ice ne l'a pas définie&nbsp;:

```js
const options = readConfig();
options.getOrInsert("theme", "light");
options.getOrInsert("fontSize", 14);

// Plus tard dans votre code, vous pouvez supposer en toute sécurité que ces options existent
document.body.dataset.theme = options.get("theme");
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Map.prototype.getOrInsert` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#map-upsert)
- [Prothèse d'émulation es-shims de `Map.prototype.getOrInsert` <sup>(angl.)</sup>](https://www.npmjs.com/package/map.prototype.getorinsert)
- L'objet {{JSxRef("Map")}}
- La méthode {{JSxRef("Map.prototype.get()")}}
- La méthode {{JSxRef("Map.prototype.set()")}}
- La méthode {{JSxRef("Map.prototype.has()")}}
- La méthode {{JSxRef("Map.prototype.getOrInsertComputed()")}}
