---
title: Reflect.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible
---

{{JSRef}}

La méthode statique **`Reflect.isExtensible()`** permet de déterminer si un objet est extensible (i.e. si on peut lui ajouter de nouvelles propriétés). Elle est semblable à la méthode {{jsxref("Object.isExtensible()")}} (modulo [quelques différences](#diffs)).

{{InteractiveExample("JavaScript Demo: Reflect.isExtensible()", "taller")}}

```js interactive-example
const object1 = {};

console.log(Reflect.isExtensible(object1));
// Expected output: true

Reflect.preventExtensions(object1);

console.log(Reflect.isExtensible(object1));
// Expected output: false

const object2 = Object.seal({});

console.log(Reflect.isExtensible(object2));
// Expected output: false
```

## Syntaxe

```js
Reflect.isExtensible(cible);
```

### Paramètres

- `cible`
  - : L'objet cible dont on souhaite savoir s'il est extensible.

### Valeur de retour

Un {{jsxref("Boolean","booléen", "",1)}} qui indique si la cible est extensible ou non.

### Exceptions

Une erreur {{jsxref("TypeError")}} si `cible` n'est pas un {{jsxref("Object")}}.

## Description

La méthode `Reflect.isExtensible` permet de déterminer si un objet est extensible (autrement dit si on peut lui ajouter de nouvelles propriétés). Cette méthode est semblable à la méthode {{jsxref("Object.isExtensible()")}}.

## Exemples

### Utiliser `Reflect.isExtensible()`

Voir aussi {{jsxref("Object.isExtensible()")}}.

```js
// Les nouveaux objets sont extensibles.
var vide = {};
Reflect.isExtensible(vide); // true

// ...mais ça peut être changé.
Reflect.preventExtensions(vide);
Reflect.isExtensible(vide); // false

// Par définition, les objets scellés
// ne sont pas extensibles.
var scellé = Object.seal({});
Reflect.isExtensible(scellé); // false

// Par définition, les objets gelés sont
// également non-extensibles.
var gelé = Object.freeze({});
Reflect.isExtensible(gelé); // false
```

### Différence avec `Object.isExtensible()`

Si le premier argument passé à la méthode n'est pas un objet (autrement dit si la valeur est une valeur primitive), cela provoquera une exception {{jsxref("TypeError")}}. La méthode {{jsxref("Object.isExtensible()")}} aurait commencé par convertir l'argument en un objet.

```js
Reflect.isExtensible(1);
// TypeError: 1 is not an object

Object.isExtensible(1);
// false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Reflect")}}
- {{jsxref("Object.isExtensible()")}}
