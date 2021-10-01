---
title: SyntaxError
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError
tags:
  - Error
  - JavaScript
  - Object
  - Reference
  - SyntaxError
translation_of: Web/JavaScript/Reference/Global_Objects/SyntaxError
original_slug: Web/JavaScript/Reference/Objets_globaux/SyntaxError
---
{{JSRef}}

L'objet **`SyntaxError`** représente une erreur qui se produit lors de l'interprétation d'un code dont la syntaxe est invalide.

## Description

Une exception `SyntaxError` est levée lorsque le moteur JavaScript rencontre des entités lexicales invalide ou dans un ordre invalide par rapport à la grammaire du langage.

## Syntaxe

    new SyntaxError([message[, nomFichier[, numLigne]]])

### Paramètres

- `message`{{optional_inline}}
  - : Une description, lisible par un humain, de l'erreur.
- `nomFichier` {{optional_inline}}{{non-standard_inline}}
  - : Le nom du fichier contenant le code provoquant l'erreur.
- `numLigne` {{optional_inline}}{{non-standard_inline}}
  - : Le numéro de la ligne du code qui a provoqué l'exception.

## Propriétés

- {{jsxref("SyntaxError.prototype")}}
  - : Cette méthode permet d'ajouter des propriétés aux instance de `SyntaxError`.

## Méthodes

L'objet global `SyntaxError` ne contient pas de méthodes directes. En revanche, il hérite de méthodes grâce à sa chaîne de prototypes.

## Instances de `SyntaxError`

### Propriétés

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/SyntaxError/prototype', 'Propriétés')}}

### Méthodes

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/SyntaxError/prototype', 'Méthodes')}}

## Exemples

### Intercepter une exception `SyntaxError`

```js
try {
  eval('toto truc');
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);                // "missing ; before statement"
  console.log(e.name);                   // "SyntaxError"
  console.log(e.fileName);               // "Scratchpad/1"
  console.log(e.lineNumber);             // 1
  console.log(e.columnNumber);           // 4
  console.log(e.stack);                  // "@Scratchpad/1:2:3\n"
}
```

### Créer une exception `SyntaxError`

```js
try {
  throw new SyntaxError('Coucou', 'unFichier.js', 10);
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);                // "Coucou"
  console.log(e.name);                   // "SyntaxError"
  console.log(e.fileName);               // "unFichier.js"
  console.log(e.lineNumber);             // 10
  console.log(e.columnNumber);           // 0
  console.log(e.stack);                  // "@Scratchpad/2:11:9\n"
}
```

## Spécifications

| Spécification                                                                                                                        | Statut                       | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES3')}}                                                                                                             | {{Spec2('ES3')}}         | Définition initiale. |
| {{SpecName('ES5.1', '#sec-15.11.6.4', 'SyntaxError')}}                                                             | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-native-error-types-used-in-this-standard-syntaxerror', 'SyntaxError')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-native-error-types-used-in-this-standard-syntaxerror', 'SyntaxError')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.SyntaxError")}}

## Voir aussi

- {{jsxref("Error")}}
- {{jsxref("SyntaxError.prototype")}}
