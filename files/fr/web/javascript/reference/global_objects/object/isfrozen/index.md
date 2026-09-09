---
title: "Object : méthode statique isFrozen()"
short-title: isFrozen()
slug: Web/JavaScript/Reference/Global_Objects/Object/isFrozen
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode statique **`Object.isFrozen()`** permet de déterminer si un objet est {{JSxRef("Object/freeze", "gelé", "", 1)}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.isFrozen()")}}

```js interactive-example
const object = {
  foo: 42,
};

console.log(Object.isFrozen(object));
// Résultat attendu : false

Object.freeze(object);

console.log(Object.isFrozen(object));
// Résultat attendu : true
```

## Syntaxe

```js-nolint
Object.isFrozen(obj)
```

### Paramètres

- `obj`
  - : L'objet dont on souhaite vérifier s'il est gelé.

### Valeur de retour

Un booléen ({{JSxRef("Boolean")}}) qui indique si oui ou non l'objet passé en argument est gelé.

## Description

Un objet est gelé si et seulement s'il n'est pas {{JSxRef("Object.isExtensible", "extensible","",1)}}, que toutes ses propriétés sont non-configurables et que ses propriétés de données (c'est-à-dire les propriétés qui ne sont pas des accesseurs ou des mutateurs) ne sont pas accessibles en écriture.

## Exemples

### Utiliser `Object.isFrozen()`

```js
//  Un nouvel objet créé est extensible et est donc dégelé
Object.isFrozen({}); // false

// Un objet vide et non extensible est gelé
const videGele = Object.preventExtensions({});
Object.isFrozen(videGele); // true

// Un nouvel objet avec une propriété est également extensible,
// et donc dégelé.
const uneProp = { p: 42 };
Object.isFrozen(uneProp); // false

// Empêcher l'extension de l'objet ne le rend toujours pas
// gelé, car la propriété est toujours
// configurable (et accessible en écriture).
Object.preventExtensions(uneProp);
Object.isFrozen(uneProp); // false

// Supprimer cette propriété rend l'objet trivialement gelé.
delete uneProp.p;
Object.isFrozen(uneProp); // true

// Un objet non-extensible et avec une propriété qui n'est pas accessible
// en écriture mais toujours configurable n'est pas gelé
const pasEcrivable = { e: "plep" };
Object.preventExtensions(pasEcrivable);
Object.defineProperty(pasEcrivable, "e", {
  writable: false,
}); // le rend non accessible en écriture
Object.isFrozen(pasEcrivable); // false

// Changer cette propriété en non-configurable rend alors l'objet gelé.
Object.defineProperty(pasEcrivable, "e", {
  configurable: false,
}); // le rend non-configurable
Object.isFrozen(pasEcrivable); // true

// Un objet non-extensible avec une propriété non-configurable
// mais accessible en écriture n'est pas gelé.
const nonConfigurable = { release: "le kraken !" };
Object.preventExtensions(nonConfigurable);
Object.defineProperty(nonConfigurable, "release", {
  configurable: false,
});
Object.isFrozen(nonConfigurable); // false

// Changer cette propriété comme ne pouvant pas être écrite
// rend alors l'objet gelé.
Object.defineProperty(nonConfigurable, "release", {
  writable: false,
});
Object.isFrozen(nonConfigurable); // true

// Un objet non-extensible avec un accesseur
// configurable n'est pas gelé
const accesseur = {
  get manger() {
    return "miam";
  },
};
Object.preventExtensions(accesseur);
Object.isFrozen(accesseur); // false

// Lorsque nous rendons cette propriété non configurable, elle est gelée.
Object.defineProperty(accesseur, "manger", {
  configurable: false,
});
Object.isFrozen(accesseur); // true

// Mais le moyen le plus simple de geler un objet
// est d'appeler la méthode Object.freeze sur celui-ci.
const gele = { 1: 81 };
Object.isFrozen(gele); // false
Object.freeze(gele);
Object.isFrozen(gele); // true

// Par définition, un objet gelé est non-extensible.
Object.isExtensible(gele); // false

// Par définition, un objet gelé est scellé.
Object.isSealed(gele); // true
```

### Argument d'une valeur primitive

Dans ES5, si l'argument passé à cette méthode n'est pas un objet (un primitif), cela entraîne une exception {{JSxRef("TypeError")}}. Dans ES2015, elle retourne `false` sans aucune erreur si un argument non-objet est passé, puisque les primitifs sont, par définition, immuables.

```js
Object.isFrozen(1);
// TypeError: 1 n'est pas un objet (code ES5)

Object.isFrozen(1);
// true                            (code ES2015)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Object.freeze()")}}
- La méthode statique {{JSxRef("Object.preventExtensions()")}}
- La méthode statique {{JSxRef("Object.isExtensible()")}}
- La méthode statique {{JSxRef("Object.seal()")}}
- La méthode statique {{JSxRef("Object.isSealed()")}}
