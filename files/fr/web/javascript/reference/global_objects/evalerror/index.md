---
title: EvalError
slug: Web/JavaScript/Reference/Global_Objects/EvalError
tags:
  - Error
  - EvalError
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/EvalError
original_slug: Web/JavaScript/Reference/Objets_globaux/EvalError
---
{{JSRef}}

L'objet **`EvalError`** indique une erreur concernant la fonction globale {{jsxref("Objets_globaux/eval","eval()")}}. Cette exception n'est plus levée par JavaScript mais l'objet `EvalError` est conservé pour des raisons de compatibilité.

## Syntaxe

    new EvalError([message[, nomFichier[, numeroLigne]]])

### Paramètres

- `message`
  - : Paramètre optionnel, une description compréhensible de l'erreur
- `nomFichier` {{Non-standard_inline}}
  - : Paramètre optionnel, le nom du fichier qui contient le code à l'origine de l'exception
- `numeroLigne` {{Non-standard_inline}}
  - : Paramètre optionnel, le numéro de la ligne du code qui a entrainé l'exception

## Propriétés

- {{jsxref("EvalError.prototype")}}
  - : Cette propriété permet l'addition de propriétés à un objet `EvalError`.

## Méthodes

L'objet global `EvalError` ne contient pas de méthodes propres. En revanche, il hérite de certaines méthodes via sa chaîne de prototypes.

## Instances de `EvalError`

### Propriétés

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/EvalError/prototype','Properties')}}

### Méthodes

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/EvalError/prototype','Methods')}}

## Exemples

`EvalError` n'est pas utilisée par la spécification ECMAScript actuelle et ne sera donc pas levée lors de l'exécution. Cependant, l'objet reste disponible à des fins de compatibilité avec les versions antérieures de la spécification.

### Créer une exception `EvalError`

```js
try {
  throw new EvalError("Coucou", "unFichier.js", 10);
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message);              // "Coucou"
  console.log(e.name);                 // "EvalError"
  console.log(e.fileName);             // "unFichier.js"
  console.log(e.lineNumber);           // 10
  console.log(e.columnNumber);         // 0
  console.log(e.stack);                // "@Scratchpad/2:2:9\n"
}
```

## Spécifications

| Spécification                                                                                                                    | Statut                       | Commentaires                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                                         | {{Spec2('ES3')}}         | Définition initiale                                                              |
| {{SpecName('ES5.1', '#sec-15.11.6.1', 'EvalError')}}                                                             | {{Spec2('ES5.1')}}     | Non utilisé dans cette spécificaition. Présent à des fins de rétrocompatibilité. |
| {{SpecName('ES6', '#sec-native-error-types-used-in-this-standard-evalerror', 'EvalError')}}         | {{Spec2('ES6')}}         | Non utilisé dans cette spécificaition. Présent à des fins de rétrocompatibilité. |
| {{SpecName('ESDraft', '#sec-native-error-types-used-in-this-standard-evalerror', 'EvalError')}} | {{Spec2('ESDraft')}} |                                                                                  |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.EvalError")}}

## Voir aussi

- {{jsxref("Error")}}
- {{jsxref("EvalError.prototype")}}
- {{jsxref("Objets_globaux/eval", "eval()")}}
