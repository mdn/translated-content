---
title: 'TypeError: can''t assign to property "x" on "y": not an object'
slug: Web/JavaScript/Reference/Errors/Cant_assign_to_property
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Cant_assign_to_property
original_slug: Web/JavaScript/Reference/Erreurs/Cant_assign_to_property
---
{{jsSidebar("Errors")}}

## Message

```
TypeError: can't assign to property "x" on {y}: not an object (Firefox)
TypeError: Cannot create property 'x' on {y} (Chrome)
```

## Type d'erreur

{{jsxref("TypeError")}}.

## Quel est le problème ?

En [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode), une exception {{jsxref("TypeError")}} est déclenchée lorsqu'on tente de créer une propriété sur [une valeur primitive](/fr/docs/Web/JavaScript/Structures_de_données#Les_valeurs_primitives) telle qu'un symbole, une chaîne de caractères, un nombre ou un booleén.

Le problème peut être lié à une valeur qui se trouve à un endroit inattendu ou qu'un équivalent objet d'une valeur primitive est attendu (ex. {{jsxref("String")}} pour la chaîne de caractères ou {{jsxref("Number")}} pour un nombre).

## Exemples

### Exemple invalide

```js example-bad
'use strict';

var foo = "my string";
// The following line does nothing if not in strict mode.
foo.bar = {}; // TypeError: can't assign to property "bar" on "my string": not an object
```

### Exemple valide

On pourra corriger le problème en convertissant la valeur primitive en sont équivalent objet avec un constructeur (ici {{jsxref("String")}} pour .

```js example-good
'use strict';

var foo = new String("my string");
foo.bar = {};
```

## Voir aussi

- {{jsxref("Strict_mode")}}
- {{Glossary("primitive")}}
