---
title: 'TypeError: can''t redefine non-configurable property "x"'
slug: Web/JavaScript/Reference/Errors/Cant_redefine_property
tags:
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Cant_redefine_property
original_slug: Web/JavaScript/Reference/Erreurs/Cant_redefine_property
---
{{jsSidebar("Errors")}}

## Message

    TypeError: Cannot modify non-writable property {x} (Edge)
    TypeError: can't redefine non-configurable property "x" (Firefox)
    TypeError: Cannot redefine property: "x" (Chrome)

## Type d'erreur

{{jsxref("TypeError")}}

## Quel est le problème ?

On essaie de redéfinir une propriété alors que celle-ci est [non-configurable](/fr/docs/Web/JavaScript/Structures_de_données#Propriétés). L'attribut `configurable` permet d'indiquer si la propriété peut être supprimée d'un objet et si ses attributs (en dehors de `writable`) peuvent être modifiés. Généralement, les propriétés d'un objet créées avec un [initialisateur d'objet](/fr/docs/Web/JavaScript/Reference/Opérateurs/Initialisateur_objet) sont configurables. Cependant, lorsqu'on utilise la méthode {{jsxref("Object.defineProperty()")}}, la propriété n'est pas configurable par défaut.

## Exemples

### Propriétés non-configurables créées avec `Object.defineProperty()`

La méthode {{jsxref("Object.defineProperty()")}} crée des propriétés non-configurables si on n'indique pas le contraire :

```js example-bad
var obj = Object.create({});
Object.defineProperty(obj, "toto", {value: "machin"});

Object.defineProperty(obj, "toto", {value: "bidule"});
// TypeError: can't redefine non-configurable property "toto"
```

Si on veut pouvoir redéfinir la propriété "toto" dans la suite du code, il faudra la créer comme étant configurable.

```js example-good
var obj = Object.create({});
Object.defineProperty(obj, "toto", {value: "machin", configurable: true});
Object.defineProperty(obj, "toto", {value: "bidule", configurable: true});
```

## Voir aussi

- [\[\[Configurable\]\]](/fr/docs/Web/JavaScript/Structures_de_données#Propriétés)
- {{jsxref("Object.defineProperty()")}}
