---
title: "Object : méthode statique preventExtensions()"
short-title: preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode statique **`Object.preventExtensions()`** empêche l'ajout de nouvelles propriétés à un objet (c'est-à-dire empêche les extensions futures de l'objet). Elle empêche également la réaffectation du prototype de l'objet.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.preventExtensions()")}}

```js interactive-example
const object = {};

Object.preventExtensions(object);

try {
  Object.defineProperty(object, "toto", {
    value: 42,
  });
} catch (e) {
  console.log(e);
  // Résultat attendu : TypeError: Impossible de définir la propriété toto, l'objet n'est pas extensible
}
```

## Syntaxe

```js-nolint
Object.preventExtensions(obj)
```

### Paramètres

- `obj`
  - : L'objet qu'on souhaite rendre non-extensible.

### Valeur de retour

L'objet rendu non-extensible.

## Description

Un objet est extensible si de nouvelles propriétés peuvent lui être ajoutées.
`Object.preventExtensions()` marque un objet comme n'étant plus extensible, de sorte qu'il n'a jamais de propriétés au-delà de celles qu'il possède au moment où il a été marqué comme non extensible. Notez que les propriétés d'un objet non extensible, en général, peuvent encore être _supprimées_. Tenter d'ajouter de nouvelles propriétés à un objet non extensible échoue, soit silencieusement, soit, en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode), en lançant une {{JSxRef("TypeError")}}.

Contrairement à {{JSxRef("Object.seal()")}} et {{JSxRef("Object.freeze()")}}, `Object.preventExtensions()` invoque un comportement intrinsèque de JavaScript et ne peut pas être remplacé par une composition de plusieurs autres opérations. Il a également son homologue `Reflect` (qui n'existe que pour les opérations intrinsèques), {{JSxRef("Reflect.preventExtensions()")}}.

`Object.preventExtensions()` empêche uniquement l'ajout de propriétés propres. Des propriétés peuvent encore être ajoutées au prototype de l'objet.

Cette méthode rend le `[[Prototype]]` de la cible immuable&nbsp;; toute réaffectation de `[[Prototype]]` lève une `TypeError`. Ce comportement est spécifique à la propriété interne `[[Prototype]]`&nbsp;; les autres propriétés de l'objet cible restent mutables.

Il n'existe aucun moyen de rendre un objet extensible à nouveau une fois qu'il a été rendu non extensible.

## Exemples

### Utiliser `Object.preventExtensions()`

```js
// Object.preventExtensions retourne l'objet
// qui n'est pas extensibles.
const obj = {};
const obj2 = Object.preventExtensions(obj);
obj === obj2; // true

// Par défaut, les objets sont extensibles.
const vide = {};
Object.isExtensible(vide); // true

// Ils peuvent être rendus non extensibles
Object.preventExtensions(vide);
Object.isExtensible(vide); // false

// Object.defineProperty lève une exception
// lorsqu'on tente d'ajouter de nouvelles propriétés
const nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, "new", {
  value: 8675309,
}); // lève une TypeError

// En mode strict, toute tentative d'ajout d'une propriété
// à un objet qui n'est pas extensible lève une exception TypeError
function echec() {
  "use strict";
  // lève une TypeError
  nonExtensible.newProperty = "FAIL";
}
echec();
```

Le prototype d'un objet non extensible est immuable&nbsp;:

```js
const fixe = Object.preventExtensions({});
// lève une TypeError
fixe.__proto__ = { oh: "hey" };
```

### Argument d'une valeur primitive

Dans ES5, si l'argument passé à cette méthode n'est pas un objet (un primitif), cela entraîne une exception {{JSxRef("TypeError")}}. Dans ES2015, elle retourne `false` sans aucune erreur si un argument non-objet est passé, puisque les primitifs sont, par définition, immuables.

```js
Object.preventExtensions(1);
// TypeError : 1 n'est pas un objet (code ES5)

Object.preventExtensions(1);
// 1                                (code ES2015)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Object.isExtensible()")}}
- La méthode statique {{JSxRef("Object.seal()")}}
- La méthode statique {{JSxRef("Object.isSealed()")}}
- La méthode statique {{JSxRef("Object.freeze()")}}
- La méthode statique {{JSxRef("Object.isFrozen()")}}
- La méthode statique {{JSxRef("Reflect.preventExtensions()")}}
