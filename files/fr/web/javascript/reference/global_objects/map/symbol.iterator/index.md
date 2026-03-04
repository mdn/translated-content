---
title: "Map : méthode [Symbol.iterator]()"
short-title: "[Symbol.iterator]()"
slug: Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`[Symbol.iterator]()`** des instances de {{JSxRef("Map")}} implémente le [protocole itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) et permet aux objets `Map` d'être utilisés par la plupart des syntaxes s'attendant à des itérables, comme la [syntaxe de décomposition](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax) et les boucles {{JSxRef("Statements/for...of", "for...of")}}. Elle retourne un [objet itérateur de map](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator) qui retourne les paires clé-valeur de la map dans l'ordre d'insertion.

La valeur initiale de cette propriété est le même objet fonction que la valeur initiale de la propriété {{JSxRef("Map.prototype.entries")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Map.prototype[Symbol.iterator]()")}}

```js interactive-example
const map = new Map();

map.set("0", "toto");
map.set(1, "truc");

const iterator = map[Symbol.iterator]();

for (const item of iterator) {
  console.log(item);
}
// Sortie attendue : Array ["0", "toto"]
// Sortie attendue : Array [1, "truc"]
```

## Syntaxe

```js-nolint
map[Symbol.iterator]()
```

### Paramètres

Aucun.

### Valeur de retour

La même valeur de retour que {{JSxRef("Map.prototype.entries()")}}&nbsp;: un nouvel [objet itérateur itérable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator) qui retourne les paires clé-valeur de la map.

## Exemples

### Itérer en utilisant `for..of`

```js
const maMap = new Map();
maMap.set("0", "toto");
maMap.set(1, "truc");
maMap.set({}, "bidule");

for (const entree of maMap) {
  console.log(entree);
}
// ["0", "toto"]
// [1, "truc"]
// [{}, "bidule"]

for (const [cle, valeur] of maMap) {
  console.log(`${cle}: ${valeur}`);
}
// 0: toto
// 1: truc
// [Object]: bidule
```

### Itérer manuellement avec l'itérateur

Vous pouvez toujours appeler manuellement la méthode `next()` de l'objet itérateur retourné pour obtenir un contrôle maximal sur le processus d'itération.

```js
const maMap = new Map();
maMap.set("0", "toto");
maMap.set(1, "truc");
maMap.set({}, "bidule");

const mapIter = maMap[Symbol.iterator]();

console.log(mapIter.next().value); // ["0", "toto"]
console.log(mapIter.next().value); // [1, "truc"]
console.log(mapIter.next().value); // [Object, "bidule"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Map")}}
- La méthode {{JSxRef("Map.prototype.entries()")}}
- La méthode {{JSxRef("Map.prototype.keys()")}}
- La méthode {{JSxRef("Map.prototype.values()")}}
- La propriété statique {{JSxRef("Symbol.iterator")}}
- [Les protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Iteration_protocols)
