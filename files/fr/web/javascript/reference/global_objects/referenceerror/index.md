---
title: ReferenceError
slug: Web/JavaScript/Reference/Global_Objects/ReferenceError
tags:
  - Error
  - JavaScript
  - Object
  - Reference
  - ReferenceError
translation_of: Web/JavaScript/Reference/Global_Objects/ReferenceError
original_slug: Web/JavaScript/Reference/Objets_globaux/ReferenceError
---
{{JSRef}}

L'objet **`ReferenceError`** représente une erreur qui se produit lorsqu'il est fait référence à une variable qui n'existe pas.

## Syntaxe

    new ReferenceError([message[, nomFichier[, numLigne]]])

### Paramètres

- `message`
  - : Paramètre optionnel. Une description de l'erreur, lisible par un être humain.
- `nomFichier` {{Non-standard_inline}}
  - : Paramètre optionnel. Le nom du fichier qui contient le code à l'origine de l'exception.
- `numLigne` {{Non-standard_inline}}
  - : Paramètre optionnel. Le numéro de ligne dans le fichier qui contient le code à l'origine de l'exception.

## Description

Une exception `ReferenceError` est lancée quand on tente de faire référence à une variable qui n'a pas été déclarée.

## Propriétés

- {{jsxref("ReferenceError.prototype")}}
  - : Cette propriété permet d'ajouter des propriétés à un objet `ReferenceError`.

## Méthodes

L'objet global `ReferenceError` ne contient aucune méthode qui lui soit propre. En revanche, il hérite de certaines méthodes via l'héritage et sa chaîne de prototypes.

## Instances de `ReferenceError`

### Propriétés

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/ReferenceError/prototype','Properties')}}

### Méthodes

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/ReferenceError/prototype','M.C3.A9thodes')}}

## Exemples

### Intercepter une exception ReferenceError

```js
try {
  var a = variableNonDéfinie;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message);                   // "variableNonDéfinie is not defined"
  console.log(e.name);                      // "ReferenceError"
  console.log(e.fileName);                  // "Scratchpad/1"
  console.log(e.lineNumber);                // 2
  console.log(e.columnNumber);              // 6
  console.log(e.stack);                     // "@Scratchpad/2:2:7\n"
}
```

### Créer une exception `ReferenceError`

```js
try {
  throw new ReferenceError('Bonjour', 'unFichier.js', 10);
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message);                   // "Bonjour"
  console.log(e.name);                      // "ReferenceError"
  console.log(e.fileName);                  // "unFichier.js"
  console.log(e.lineNumber);                // 10
  console.log(e.columnNumber);              // 0
  console.log(e.stack);                     // "@Scratchpad/2:2:9\n"
}
```

## Spécifications

| Spécification                                                                                                                                | Statut                       | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES3')}}                                                                                                                     | {{Spec2('ES3')}}         | Définition initiale. |
| {{SpecName('ES5.1', '#sec-15.11.6.3', 'ReferenceError')}}                                                                 | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-native-error-types-used-in-this-standard-referenceerror', 'ReferenceError')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-native-error-types-used-in-this-standard-referenceerror', 'ReferenceError')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.ReferenceError")}}

## Voir aussi

- {{jsxref("Error")}}
- {{jsxref("ReferenceError.prototype")}}
