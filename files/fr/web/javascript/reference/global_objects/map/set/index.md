---
title: Map.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/Map/set
l10n:
  sourceCommit: 3cfd663738e9963157d90f359789d675a6662ec2
---

{{JSRef}}

La méthode **`set()`** ajoute ou met à jour un élément avec une `clé` et une `valeur` données à un objet `Map`.

{{EmbedInteractiveExample("pages/js/map-prototype-set.html")}}

## Syntaxe

```js
maMap.set(clé, valeur);
```

### Paramètres

- `clé`
  - : Ce paramètre représente la clé de l'élément à ajouter à l'objet `Map`.
- `valeur`
  - : Ce paramètre représente la valeur de l'élément à ajouter à l'objet `Map`.

### Valeur de retour

L'objet `Map` courant (auquel l'élément a été ajouté).

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

La méthode `set()` renvoie le même objet `Map` et on peut donc la « chaîner » pour des opérations successives :

```js
// On ajoute de nouveaux éléments
// en enchaînant les appels à set()
maMap.set("truc", "toto").set(1, "tototruc").set(2, "bidule");
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.has()")}}
