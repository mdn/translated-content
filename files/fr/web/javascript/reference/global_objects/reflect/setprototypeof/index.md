---
title: Reflect.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Reference
  - Reflect
translation_of: Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf
original_slug: Web/JavaScript/Reference/Objets_globaux/Reflect/setPrototypeOf
---
{{JSRef}}

la méthode statique **`Reflect.setPrototypeOf()`** est semblable à la méthode {{jsxref("Object.setPrototypeOf()")}} (exception faite de la valeur de retour). Elle permet de définir le prototype (c'est-à-dire la propriété interne `[[Prototype]]`) d'un objet donné avec un autre objet ou {{jsxref("null")}}. Cette méthode renvoie `true` si l'opération a réussi et `false` sinon.

{{EmbedInteractiveExample("pages/js/reflect-setprototypeof.html")}}

## Syntaxe

    Reflect.setPrototypeOf(cible, prototype)

### Paramètres

- `cible`
  - : L'objet cible dont on souhaite modifier le prototype.
- `prototype`
  - : Le nouveau prototype à appliquer à l'objet cible (ça peut être un objet ou {{jsxref("null")}}).

### Valeur de retour

Un {{jsxref("Boolean","booléen","",1)}} qui indique si le prototype a correctement été modifié.

### Exceptions

Une erreur {{jsxref("TypeError")}} si `cible` n'est pas un {{jsxref("Object")}} ou si `prototype` n'est ni un objet ni {{jsxref("null")}}.

## Description

La méthode `Reflect.setPrototypeOf` permet de modifier le prototype (qui est la valeur de la propriété interne `[[Prototype]]`) d'un objet donné.

## Exemples

### Utiliser `Reflect.setPrototypeOf()`

```js
Reflect.setPrototypeOf({}, Object.prototype); // true

// On peut modifier le [[Prototype]] d'un objet
// pour que celui-ci soit null.
Reflect.setPrototypeOf({}, null); // true

// La méthode renvoie false si la cible
// n'est pas extensible.
Reflect.setPrototypeOf(Object.freeze({}), null); // false

// La méthode renvoie false si l'affectation
// entraîne un cycle dans la chaîne de prototypes.
var target = {};
var proto = Object.create(target);
Reflect.setPrototypeOf(target, proto); // false
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires         |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-reflect.setprototypeof', 'Reflect.setPrototypeOf')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-reflect.setprototypeof', 'Reflect.setPrototypeOf')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Reflect.setPrototypeOf")}}

## Voir aussi

- {{jsxref("Reflect")}}
- {{jsxref("Object.setPrototypeOf()")}}
