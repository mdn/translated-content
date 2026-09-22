---
title: "Object : méthode statique isSealed()"
short-title: isSealed()
slug: Web/JavaScript/Reference/Global_Objects/Object/isSealed
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode statique **`Object.isSealed()`** permet de déterminer si un objet est [scellé](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/seal).

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.isSealed()")}}

```js interactive-example
const object = {
  toto: 42,
};

console.log(Object.isSealed(object));
// Résultat attendu : false

Object.seal(object);

console.log(Object.isSealed(object));
// Résultat attendu : true
```

## Syntaxe

```js-nolint
Object.isSealed(obj)
```

### Paramètres

- `obj`
  - : L'objet dont on souhaite savoir s'il est scellé.

### Valeur de retour

Un booléen ({{JSxRef("Boolean")}}) indiquant si l'objet est scellé ou non.

## Description

Retourne `true` si l'objet est scellé, `false` sinon. Un objet est scellé s'il n'est pas {{JSxRef("Object/isExtensible", "extensible", "", 1)}} et si toutes ses propriétés ne sont pas configurables et donc pas supprimables (mais pas nécessairement non modifiables).

## Exemples

### Utiliser `Object.isSealed()`

```js
// Les objets ne sont pas scellés par défaut.
const vide = {};
Object.isSealed(vide); // false

// Si un objet vide est rendu non-extensible,
// il est scellé
Object.preventExtensions(vide);
Object.isSealed(vide); // true

// Ce n'est pas le cas d'un objet non vide,
// sauf si toutes ses propriétés sont non configurables.
const hasProp = { fee: "fie foe fum" };
Object.preventExtensions(hasProp);
Object.isSealed(hasProp); // false

// Mais si vous les rendez toutes non configurables,
// l'objet devient scellé.
Object.defineProperty(hasProp, "fee", {
  configurable: false,
});
Object.isSealed(hasProp); // true

// Le moyen le plus simple de sceller un objet, bien sûr,
// est Object.seal.
const scelle = {};
Object.seal(scelle);
Object.isSealed(scelle); // true

// Un objet scellé est, par définition, non-extensible.
Object.isExtensible(scelle); // false

// Un objet scellé peut être gelé,
// mais ce n'est pas obligatoire.
Object.isFrozen(scelle); // true
// (toutes les propriétés également non modifiables)

const s2 = Object.seal({ p: 3 });
Object.isFrozen(s2); // false
// ('p' est toujours modifiable)

const s3 = Object.seal({
  get p() {
    return 0;
  },
});
Object.isFrozen(s3); // true
// (seule la possibilité de configuration compte pour les propriétés d'accès)
```

### Argument d'une valeur primitive

Dans ES5, si l'argument passé à cette méthode n'est pas un objet (un primitif), cela entraîne une exception {{JSxRef("TypeError")}}. Dans ES2015, elle retourne `false` sans aucune erreur si un argument non-objet est passé, puisque les primitifs sont, par définition, immuables.

```js
Object.isSealed(1);
// TypeError: 1 n'est pas un objet (code ES5)

Object.isSealed(1);
// true                          (code ES2015)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Object.seal()")}}
- La méthode statique {{JSxRef("Object.preventExtensions()")}}
- La méthode statique {{JSxRef("Object.isExtensible()")}}
- La méthode statique {{JSxRef("Object.freeze()")}}
- La méthode statique {{JSxRef("Object.isFrozen()")}}
