---
title: Object.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
---

{{JSRef}}

La méthode **`Object.preventExtensions()`** permet d'empêcher l'ajout de nouvelles propriétés à un objet (i.e. d'étendre l'objet grâce à de nouvelles caractéristiques).

{{EmbedInteractiveExample("pages/js/object-preventextensions.html")}}

## Syntaxe

```js
Object.preventExtensions(obj);
```

### Paramètres

- `obj`
  - : L'objet qu'on souhaite rendre non-extensible.

### Valeur de retour

L'objet rendu non-extensible.

## Description

Un objet est extensible si on peut lui ajouter de nouvelles propriétés. `Object.preventExtensions()` marque un objet et le rend non-extensible. Ainsi, cet objet ne pourra avoir d'autres propriétés que celles à l'instant où il a été marqué comme non-extensible. Attention, les propriétés existantes d'un objet non-extensible peuvent toujours être supprimées. Toute tentative d'ajout de nouvelles propriétés à un objet non-extensible échouera, soit de façon silencieuse, soit en levant une exception {{jsxref("TypeError")}} (le plus souvent en {{jsxref("Strict_mode", "mode strict", "", 1)}}).

`Object.preventExtensions()` n'empêche que l'ajout des propriétés directement sur l'objet, il n'empêche pas d'ajouter des propriétés sur le prototype.

Cette méthode rend la propriété interne `[[prototype]]` de la cible immuable, toute réaffectation de `[[prototype]]` déclenchera une exception `TypeError`. Ce comportement est spécifique à la propriété interne `[[prototype]]`, les autres propriétés de la cible restent modifiables.

Si, grâce à cette méthode, on peut rendre un objet non-extensible, il n'existe aucune méthode pour effectuer l'action inverse (rendre un objet non-extensible à nouveau extensible).

## Exemples

```js
// Object.preventExtensions renvoie l'objet
// non-extensible.
var obj = {};
var obj2 = Object.preventExtensions(obj);
obj === obj2; // true

// Par défaut, les objets sont extensibles.
var vide = {};
Object.isExtensible(vide); // true

// ...mais cela peut être modifié.
Object.preventExtensions(vide);
Object.isExtensible(vide) === false);

// Object.defineProperty lève une exception
// lorsqu'on tente d'ajouter de nouvelles propriétés
var nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);

Object.defineProperty(nonExtensible, 'nouvelle', { value: 8675309 });
/ lève une TypeError

// En mode strict, toute tentative d'ajout
// lève une exception TypeError
function échec() {
  'use strict';
  nonExtensible.nouvelleProp = 'ÉCHEC'; //
}
échec();

// EXTENSION (ne fonctionne que pour les moteurs
// qui utilisent __proto__ ) :
// Le prototype (via __proto__) d'un objet non-extensible
// n'est pas modifiable :
var fixed = Object.preventExtensions({});
fixed.__proto__ = { oh: 'hey' }; // lève une TypeError
```

## Notes

Pour ES5, si l'argument passé à la méthode n'est pas un objet mais une valeur d'un autre type primitif, cela entraînera une exception {{jsxref("TypeError")}}. Pour ES2015, une valeur qui n'est pas un objet sera traitée comme un objet ordinaire qui n'est pas extensible et la méthode renverra cette valeur.

```js
Object.preventExtensions(1);
// TypeError : 1 n'est pas un object (code ES5)

Object.preventExtensions(1);
// 1                             (code ES2015)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Reflect.preventExtensions()")}}
