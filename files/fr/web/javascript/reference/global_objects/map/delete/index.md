---
title: Map.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Map/delete
---

{{JSRef}}

La méthode **`delete()`** permet de retirer un élément donné d'un objet `Map` grâce à sa clé.

{{InteractiveExample("JavaScript Demo: Map.prototype.delete()")}}

```js interactive-example
const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.delete("bar"));
// Expected result: true
// True indicates successful removal

console.log(map1.has("bar"));
// Expected result: false
```

## Syntaxe

```js
maMap.delete(clé);
```

### Paramètres

- `clé`
  - : Ce paramètre obligatoire correspond à la clé de l'élément qu'on souhaite retirer de l'objet `Map`.

### Valeur de retour

Un booléen. La méthode renvoie `true` si un élément de l'objet `Map` a bien été retiré ou `false` si l'élément n'existe pas.

## Exemples

```js
var maMap = new Map();
maMap.set("truc", "toto");

maMap.delete("truc"); // Renvoie true. La suppression est OK.
maMap.has("truc"); // Renvoie false. "truc" n'est plus présent.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Map")}}
