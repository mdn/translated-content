---
title: Reflect.set()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/set
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Reference
  - Reflect
translation_of: Web/JavaScript/Reference/Global_Objects/Reflect/set
original_slug: Web/JavaScript/Reference/Objets_globaux/Reflect/set
---
{{JSRef}}

La méthode statique **`Reflect.set()`** permet de définir ou de modifier une propriété sur un objet.

{{EmbedInteractiveExample("pages/js/reflect-set.html")}}

## Syntaxe

```js
Reflect.set(cible, cléPropriété, valeur[, récepteur])
```

### Paramètres

- `cible`
  - : L'objet cible sur lequel on veut définir ou modifier la propriété.
- `cléPropriété`
  - : Le nom de la propriété à définir ou à modifier.
- `valeur`
  - : La valeur pour la propriété.
- `récepteur`{{optional_inline}}
  - : La valeur de `this` pour l'appel à `cible` si un mutateur (_setter_) est utilisé.

### Valeur de retour

Un {{jsxref("Boolean","booléen","",1)}} qui indique si la définition/modification de la propriété a réussi.

### Exceptions

Une erreur {{jsxref("TypeError")}} si `cible` n'est pas un {{jsxref("Object")}}.

## Description

La méthode `Reflect.set` permet de définir une propriété sur un objet. Elle effectue une affectation de propriété et est semblable à la syntaxe pour [accéder à un propriété](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres) mais sous la forme d'une fonction.

## Exemples

### Utiliser `Reflect.set()`

```js
// Object
var obj = {};
Reflect.set(obj, "prop", "value"); // true
obj.prop; // "value"

// Array
var arr = ["canard", "canard", "canard"];
Reflect.set(arr, 2, "oie"); // true
arr[2]; // "oie"

// On peut l'utiliser pour tronquer un tableau
Reflect.set(arr, "length", 1); // true
arr; // ["canard"];

// Avec un seul argument
// cléPropriété et valeur valent "undefined".
var obj = {};
Reflect.set(obj); // true
Reflect.getOwnPropertyDescriptor(obj, "undefined");
// { value: undefined, writable: true, enumerable: true, configurable: true }
```

## Spécifications

| Spécification                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-reflect.set', 'Reflect.set')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-reflect.set', 'Reflect.set')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Reflect.set")}}

## Voir aussi

- {{jsxref("Reflect")}}
- [Accesseurs de propriété](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres)
