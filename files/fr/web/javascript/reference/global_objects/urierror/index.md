---
title: URIError
slug: Web/JavaScript/Reference/Global_Objects/URIError
tags:
  - Error
  - JavaScript
  - Object
  - Reference
  - URIError
translation_of: Web/JavaScript/Reference/Global_Objects/URIError
original_slug: Web/JavaScript/Reference/Objets_globaux/URIError
---
{{JSRef}}

L'objet **`URIError`** représente une erreur renvoyée lorsqu'une fonction de manipulation d'URI a été utilisée de façon inappropriée.

## Syntaxe

    new URIError([message[, nomFichier[, numéroLigne]]])

### Paramètres

- `message`
  - : Ce paramètre est optionnel. Il correspond à un chaîne de caractères décrivant l'erreur de façon compréhensible.
- `nomFichier` {{non-standard_inline}}
  - : Ce paramètre est optionnel. Il correspond au nom du fichier contenant le code à l'origine de l'exception.
- `numéroLigne` {{non-standard_inline}}
  - : Ce paramètre est optionnel. Il correspond au numéro de la ligne dans le fichier contenant le code qui a entraîné l'exception.

## Description

Une exception `URIError` est lancée lorsque les fonctions de gestion d'URI reçoivent une URI mal formée.

## Propriétés

- {{jsxref("URIError.prototype")}}
  - : Cette propriété permet d'ajouter des propriétés à un objet `URIError`.

## Méthodes

L'objet global `URIError` ne contient aucune méthode qui lui soit directement attachée. Cependant, il hérite de certaines méthodes grâce à sa chaîne de prototypes.

## Instances d'`URIError`

### Propriétés

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/URIError/prototype', 'Propriétés')}}

### Méthodes

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/URIError/prototype', 'Méthodes')}}

## Exemples

### Intercepter une exception `URIError`

```js
try {
  decodeURIComponent('%');
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message);             // "malformed URI sequence"
  console.log(e.name);                // "URIError"
  console.log(e.fileName);            // "Scratchpad/1"
  console.log(e.lineNumber);          // 2
  console.log(e.columnNumber);        // 2
  console.log(e.stack);               // "@Scratchpad/2:2:3\n"
}
```

### Créer une exception `URIError`

```js
try {
  throw new URIError('Coucou', 'monFichier.js', 10);
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message);             // "Coucou"
  console.log(e.name);                // "URIError"
  console.log(e.fileName);            // "monFichier.js"
  console.log(e.lineNumber);          // 10
  console.log(e.columnNumber);        // 0
  console.log(e.stack);               // "@Scratchpad/2:2:9\n"
}
```

## Spécifications

| Spécification                                                                                                                | Statut                       | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES3', '#sec-15.11.6.6', 'URIError')}}                                                             | {{Spec2('ES3')}}         | Définition initiale. |
| {{SpecName('ES5.1', '#sec-15.11.6.6', 'URIError')}}                                                         | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-native-error-types-used-in-this-standard-urierror', 'URIError')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-native-error-types-used-in-this-standard-urierror', 'URIError')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.URIError")}}

## Voir aussi

- {{jsxref("Error")}}
- {{jsxref("URIError.prototype")}}
- {{jsxref("Objets_globaux/decodeURI", "decodeURI()")}}
- {{jsxref("Objets_globaux/decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("Objets_globaux/encodeURI", "encodeURI()")}}
- {{jsxref("Objets_globaux/encodeURIComponent", "encodeURIComponent()")}}
