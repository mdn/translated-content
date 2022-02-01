---
title: TypeError
slug: Web/JavaScript/Reference/Global_Objects/TypeError
tags:
  - Error
  - JavaScript
  - Object
  - Reference
  - TypeError
translation_of: Web/JavaScript/Reference/Global_Objects/TypeError
original_slug: Web/JavaScript/Reference/Objets_globaux/TypeError
---
{{JSRef}}

L'objet **`TypeError`** représente une erreur qui intervient lorsque la valeur n'est pas du type attendu.

## Syntaxe

    new TypeError([message[, nomFichier[, numLigne]]])

### Paramètres

- `message`
  - : Paramètre optionnel. Une description de l'erreur dans un format compréhensible par un humain.
- `nomFichier` {{Non-standard_inline}}
  - : Paramètre optionnel. Le nom du fichier contenant le code qui a causé l'erreur.
- `numLigne` {{Non-standard_inline}}
  - : Paramètre optionnel. Le numéro de ligne du code qui a causé l'erreur

## Description

Une exception `TypeError` est levée lorsque qu'un argument ou un opérande est utilisé avec une fonction ou un opérateur incompatible avec le type attendu.

## Propriétés

- {{jsxref("TypeError.prototype")}}
  - : Permet d'ajouter des propriétés aux instances de `TypeError`.

## Méthodes

L'objet global `TypeError` ne contient pas de méthodes qui lui sont propres. Il possède malgré tout des méthodes héritées via sa chaîne de prototypes.

## Instances de TypeError

### Propriétés

{{ page('fr/docs/Web/JavaScript/Reference/Objets_globaux/TypeError/prototype', 'Propri.C3.A9t.C3.A9s') }}

### Méthodes

{{ page('fr/docs/Web/JavaScript/Reference/Objets_globaux/TypeError/prototype', 'M.C3.A9thodes') }}

## Exemples

### Intercepter une exception `TypeError`

```js
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);              // "null has no properties"
  console.log(e.name);                 // "TypeError"
  console.log(e.fileName);             // "Scratchpad/1"
  console.log(e.lineNumber);           // 2
  console.log(e.columnNumber);         // 2
  console.log(e.stack);                // "@Scratchpad/2:2:3\n"
}
```

### Créer une exception `TypeError`

```js
try {
  throw new TypeError('Coucou', "unFichier.js", 10);
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);              // "Coucou"
  console.log(e.name);                 // "TypeError"
  console.log(e.fileName);             // "unFichier.js"
  console.log(e.lineNumber);           // 10
  console.log(e.columnNumber);         // 0
  console.log(e.stack);                // "@Scratchpad/2:2:9\n"
}
```

## Spécifications

| Spécification                                                                                                                    | Statut                       | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES3', '#sec-15.11.6.5', 'TypeError')}}                                                             | {{Spec2('ES3')}}         | Définition initiale. |
| {{SpecName('ES5.1', '#sec-15.11.6.5', 'TypeError')}}                                                             | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-native-error-types-used-in-this-standard-typeerror', 'TypeError')}}         | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-native-error-types-used-in-this-standard-typeerror', 'TypeError')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypeError")}}

## Voir aussi

- {{jsxref("Error")}}
- {{jsxref("TypeError.prototype")}}
