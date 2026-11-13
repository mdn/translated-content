---
title: "Object : méthode statique isExtensible()"
short-title: isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Object/isExtensible
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode statique **`Object.isExtensible()`** détermine si un objet est extensible (c'est-à-dire s'il peut avoir de nouvelles propriétés ajoutées).

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.isExtensible()")}}

```js interactive-example
const object = {};

console.log(Object.isExtensible(object));
// Résultat attendu : true

Object.preventExtensions(object);

console.log(Object.isExtensible(object));
// Résultat attendu : false
```

## Syntaxe

```js-nolint
Object.isExtensible(obj)
```

### Paramètres

- `obj`
  - : L'objet dont on souhaite vérifier s'il est extensible.

### Valeur de retour

Un booléen ({{JSxRef("Boolean")}}) qui indique si oui ou non l'objet passé en argument peut être étendu.

## Description

Les objets sont extensibles par défaut&nbsp;: on peut leur ajouter de nouvelles propriétés, et leur `[[Prototype]]` peut être réassigné. Un objet peut être marqué comme non-extensible en utilisant l'une des méthodes {{JSxRef("Object.preventExtensions()")}}, {{JSxRef("Object.seal()")}}, {{JSxRef("Object.freeze()")}}, ou {{JSxRef("Reflect.preventExtensions()")}}.

## Exemples

### Utiliser `Object.isExtensible()`

```js
// Les nouveaux objets sont extensibles.
const vide = {};
Object.isExtensible(vide); // true

// Ils peuvent être rendus non-extensibles.
Object.preventExtensions(vide);
Object.isExtensible(vide); // false

// Les objets scellés sont, par définition, non-extensibles.
const scelle = Object.seal({});
Object.isExtensible(scelle); // false

// Les objets gelés sont également, par définition, non-extensibles.
const gele = Object.freeze({});
Object.isExtensible(gele); // false
```

### Argument d'une valeur primitive

Dans ES5, si l'argument passé à cette méthode n'est pas un objet (un primitif), cela entraîne une exception {{JSxRef("TypeError")}}. Dans ES2015, elle retourne `false` sans aucune erreur si un argument non-objet est passé, puisque les primitifs sont, par définition, immuables.

```js
Object.isExtensible(1);
// TypeError: 1 n'est pas un objet (code ES5)

Object.isExtensible(1);
// false                           (code ES2015)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Object.preventExtensions()")}}
- La méthode statique {{JSxRef("Object.seal()")}}
- La méthode statique {{JSxRef("Object.isSealed()")}}
- La méthode statique {{JSxRef("Object.freeze()")}}
- La méthode statique {{JSxRef("Object.isFrozen()")}}
- La méthode statique {{JSxRef("Reflect.isExtensible()")}}
