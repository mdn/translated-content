---
title: 'TypeError: "x" is not a non-null object'
slug: Web/JavaScript/Reference/Errors/No_non-null_object
tags:
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/No_non-null_object
original_slug: Web/JavaScript/Reference/Erreurs/No_non-null_object
---
{{JSSidebar("Errors")}}

## Message

    TypeError: Invalid descriptor for property {x} (Edge)
    TypeError: "x" is not a non-null object (Firefox)
    TypeError: Property description must be an object: "x" (Chrome)
    TypeError: Invalid value used in weak set (Chrome)

## Type d'erreur

{{jsxref("TypeError")}}

## Quel est le problème ?

Un objet devrait être trouvé et n'est pas fourni. La valeur {{jsxref("null")}} n'est pas un objet et ne fonctionnera pas, il est nécessaire de fournir un véritable objet pour que le code en question fonctionne.

## Exemples

### Absence d'un descripteur de propriété

Lorsqu'on utilise des méthodes telles que {{jsxref("Object.create()")}}, {{jsxref("Object.defineProperty()")}} ou {{jsxref("Object.defineProperties()")}}, le paramètre optionnel de description des propriétés doit être un descripteur sous la forme d'un objet. Si la valeur fournie n'est pas un objet (mais par exemple un nombre), l'appel à la méthode déclenchera une erreur :

```js example-bad
Object.defineProperty({}, 'cle', 1);
// TypeError: 1 is not a non-null object

Object.defineProperty({}, 'cle', null);
// TypeError: null is not a non-null object
```

Un descripteur de propriété valide aura la structure suivante :

```js example-good
Object.defineProperty({}, 'cle', { value: 'toto', writable: false });
```

### Les clés de `WeakMap` et `WeakSet` sont des objets

Les objets {{jsxref("WeakMap")}} et {{jsxref("WeakSet")}} utilisent des objets comme clé. On ne peut pas utiliser d'autres types de valeurs pour les clés de ces objets.

```js example-bad
var ws = new WeakSet();
ws.add('toto');
// TypeError: "toto" is not a non-null object
```

À la place, on utilisera des objets :

```js example-good
ws.add({toto: 'truc'});
ws.add(window);
```

## Voir aussi

- {{jsxref("Object.create()")}}
- {{jsxref("Object.defineProperty()")}}, {{jsxref("Object.defineProperties()")}}
- {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}
