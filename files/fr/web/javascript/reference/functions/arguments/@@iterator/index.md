---
title: arguments[@@iterator]()
slug: Web/JavaScript/Reference/Functions/arguments/@@iterator
tags:
  - Déprécié
  - Fonctions
  - JavaScript
  - Propriété
  - Reference
  - arguments
translation_of: Web/JavaScript/Reference/Functions/arguments/@@iterator
original_slug: Web/JavaScript/Reference/Fonctions/arguments/@@iterator
---
{{jsSidebar("Functions")}}

La valeur initiale de la propriété **`@@iterator`** est le même objet que la fonction utilisée pour la valeur initiale de la propriété {{jsxref("Array.prototype.values")}}.

## Syntaxe

    arguments[Symbol.iterator]()

## Exemples

### Utiliser une boucle `for...of`

```js
function f() {
  // votre environnement doit supporter les
  // boucles for..of et les variables
  // définies avec let dans les boucles
  for (let letter of arguments) {
    console.log(letter);
  }
}
f('w', 'y', 'k', 'o', 'p');
```

## Spécifications

| Spécification                                                                                                                | Statut                       | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-createunmappedargumentsobject', ' CreateUnmappedArgumentsObject')}}     | {{Spec2('ES6')}}         | Définition initiale. |
| {{SpecName('ES6', '#sec-createmappedargumentsobject', ' CreateMappedArgumentsObject')}}         | {{Spec2('ES6')}}         | Définition initiale. |
| {{SpecName('ESDraft', '#sec-createunmappedargumentsobject', 'CreateUnmappedArgumentsObject')}} | {{Spec2('ESDraft')}} |                      |
| {{SpecName('ESDraft', '#sec-createmappedargumentsobject', 'CreateMappedArgumentsObject')}}     | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.functions.arguments.@@iterator")}}

## Voir aussi

- {{jsxref("Array.prototype.values()")}}
