---
title: Object.isSealed()
slug: Web/JavaScript/Reference/Global_Objects/Object/isSealed
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Méthode
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/isSealed
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/isSealed
---
{{JSRef}}

La méthode **`Object.isSealed()`** permet de déterminer si un objet est scellé.

{{EmbedInteractiveExample("pages/js/object-issealed.html")}}

## Syntaxe

```js
Object.isSealed(obj)
```

### Paramètres

- `obj`
  - : L'objet dont on souhaite savoir s'il est scellé.

### Valeur de retour

Un booléen indiquant si l'objet est scellé ou non.

## Description

Renvoie `true` si l'objet est scellé, `false` sinon. Un objet scellé est un objet qui n'est pas {{jsxref("Object.isExtensible", "extensible","",1)}} et dont toutes les propriétés sont non-configurables (on ne peut donc pas les retirer, en revanche on peut avoir un droit de modification).

## Exemples

```js
// Par défaut, les objets ne sont pas scellés
var vide = {};
Object.isSealed(vide); // false

// Si un objet vide est rendu non-extensible,
// il est scellé
Object.preventExtensions(vide);
Object.isSealed(vide); // true

// Ce qui n'est pas vrai pour un objet non-vide,
// sauf si toutes ses propriétés sont non-configurables
var avecPropriétés = { pif: "paf pouf" };
Object.preventExtensions(avecPropriétés);
Object.isSealed(avecPropriétés); // false

// Si on rend les propriétés non configurables,
// l'objet est scellé
Object.defineProperty(avecPropriétés, "pif", { configurable: false });
Object.isSealed(avecPropriétés); // true

// La méthode la plus simple est d'utiliser Object.seal.
var scellé = {};
Object.seal(scellé);
Object.isSealed(scellé); // true

// Un objet scellé est, par définition, non-extensible
Object.isExtensible(scellé); // false

// Un objet scellé peut être gelé mais ce n'est pas
// nécessaire. gelé signifie que les propriétés ne
// peuvent pas être modifiées
Object.isFrozen(scellé); // true

var s2 = Object.seal({ p: 3 });
Object.isFrozen(s2); // false ("p" est toujours modifiable)

var s3 = Object.seal({ get p() { return 0; } });
// pour les accesseurs, seule l'accès en
// configuration est important
Object.isFrozen(s3); // true 
```

## Notes

Pour ES5, si l'argument passé à la méthode n'est pas un objet mais une valeur d'un autre type primitif, cela entraînera une exception {{jsxref("TypeError")}}. Pour ES2015, une valeur qui n'est pas un objet sera traitée comme si c'était un objet scellé et la méthode renverra `true`.

```js
Object.isSealed(1);
// TypeError: 1 is not an object (ES5 code)

Object.isSealed(1);
// true                          (ES2015 code)
```

## Spécifications

| Spécification                                                                            | État                         | Commentaires                                            |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.11', 'Object.isSealed')}}             | {{Spec2('ES5.1')}}     | Définition initiale. Implémentée avec JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-object.issealed', 'Object.isSealed')}}     | {{Spec2('ES6')}}         |                                                         |
| {{SpecName('ESDraft', '#sec-object.issealed', 'Object.isSealed')}} | {{Spec2('ESDraft')}} |                                                         |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Object.isSealed")}}

## Voir aussi

- {{jsxref("Object.seal()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
