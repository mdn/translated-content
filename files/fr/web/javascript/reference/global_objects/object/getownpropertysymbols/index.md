---
title: "Object : méthode statique getOwnPropertySymbols()"
short-title: getOwnPropertySymbols()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode statique **`Object.getOwnPropertySymbols()`** retourne un tableau contenant tous les symboles des propriétés trouvées directement sur un objet donné.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.getOwnPropertySymbols()")}}

```js interactive-example
const object = {};
const a = Symbol("a");
const b = Symbol.for("b");

object[a] = "localSymbol";
object[b] = "globalSymbol";

const objectSymbols = Object.getOwnPropertySymbols(object);

console.log(objectSymbols.length);
// Résultat attendu : 2
```

## Syntaxe

```js-nolint
Object.getOwnPropertySymbols(obj)
```

### Paramètres

- `obj`
  - : L'objet dont on souhaite lister les symboles des propriétés propres.

### Valeur de retour

Un tableau des symboles trouvés directement sur l'objet passé en argument.

## Description

De la même façon que {{JSxRef("Object.getOwnPropertyNames()")}}, il est possible d'obtenir toutes les propriétés symboliques d'un objet donné sous forme d'un tableau de symboles. Notez que {{JSxRef("Object.getOwnPropertyNames()")}} ne contient pas les propriétés symboliques d'un objet et uniquement les propriétés de type chaîne de caractères.

Comme tous les objets n'ont pas de propriétés symboliques propres initialement, `Object.getOwnPropertySymbols()` retourne un tableau vide sauf si vous avez défini des propriétés symboliques sur votre objet.

## Exemples

### Utiliser `Object.getOwnPropertySymbols()`

```js
const obj = {};
const a = Symbol("a");
const b = Symbol.for("b");

obj[a] = "localSymbol";
obj[b] = "globalSymbol";

const objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // 2
console.log(objectSymbols); // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0]); // Symbol(a)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Object.getOwnPropertySymbols` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-symbol)
- La méthode statique {{JSxRef("Object.getOwnPropertyNames()")}}
- L'objet natif {{JSxRef("Symbol")}}
