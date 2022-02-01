---
title: Object.values()
slug: Web/JavaScript/Reference/Global_Objects/Object/values
tags:
  - ECMAScript2016
  - JavaScript
  - Méthode
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/values
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/values
---
{{JSRef}}

La méthode **`Object.values()`** renvoie un tableau contenant les valeurs des propriétés propres énumérables d'un objet dont l'ordre est le même que celui obtenu avec une boucle {{jsxref("Instructions/for...in", "for...in")}} (la boucle `for-in` est différente car elle parcourt également les propriétés héritées).

{{EmbedInteractiveExample("pages/js/object-values.html")}}

## Syntaxe

    Object.values(obj)

### Paramètres

- `obj`
  - : L'objet dont on souhaite connaître les valeurs des propriétés propres énumérables.

### Valeur de retour

Un tableau dont les éléments sont les valeurs des propriétés énumérables de l'objet passé en argument.

## Description

`Object.values()` renvoie un tableau dont les éléments sont les valeurs des propriétés énumérables directement rattachées à l'objet passé en argument. L'ordre du tableau est le même que celui obtenu lorsqu'on parcourt les propriétés manuellement.

## Exemples

```js
var obj = { toto: "truc", machin: 42 };
console.log(Object.values(obj)); // ['truc', 42]

// un objet semblable à un tableau
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// un objet semblable à un tableau
// dont les clés sont ordonnées aléatoirement
// lorsque des clés numériques sont utilisées, les valeurs sont
// renvoyées selon l'ordre numérique des clés
var un_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(un_obj)); // ['b', 'c', 'a']

// getToto est une propriété qui
// n'est pas énumérable
var mon_obj = Object.create({}, { getToto: { value: function() { return this.toto; } } });
mon_obj.toto = "truc";
console.log(Object.values(mon_obj)); // ['truc']

// un argument de type primitif sera
// converti en un objet
console.log(Object.values("toto")); // ['t', 'o', 't', 'o']
```

## Prothèse d'émulation (_polyfill_)

Afin d'ajouter le support pour `Object.values` dans des environnements plus anciens qui ne supportent pas la méthode nativement, vous pouvez utiliser une prothèse comme celle proposée sur le dépôt [tc39/proposal-object-values-entries](https://github.com/tc39/proposal-object-values-entries) ou sur le dépôt [es-shims/Object.values](https://github.com/es-shims/Object.values).

## Spécifications

| Spécification                                                                        | État                         | Commentaires         |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ESDraft', '#sec-object.values', 'Object.values')}} | {{Spec2('ESDraft')}} |                      |
| {{SpecName('ES8', '#sec-object.values', 'Object.values')}}         | {{Spec2('ES8')}}         | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Object.values")}}

## Voir aussi

- [Énumérabilité et rattachement des propriétés](/fr/docs/Web/JavaScript/Caractère_énumérable_des_propriétés_et_rattachement)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
