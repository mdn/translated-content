---
title: EvalError
slug: Web/JavaScript/Reference/Global_Objects/EvalError
---

{{JSRef}}

L'objet **`EvalError`** indique une erreur relative à la fonction [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval). Cette exception n'est plus déclenchée par JavaScript, toutefois, l'objet `EvalError` est toujours présent à des fins de compatibilité.

## Constructeur

- [`EvalError()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/EvalError/EvalError)
  - : Crée un nouvel objet `EvalError`.

## Propriétés des instances

- [`EvalError.prototype.message`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/message)
  - : Le message d'erreur.
- [`EvalError.prototype.name`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/name)
  - : Le nom de l'erreur, hérité depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`EvalError.prototype.fileName`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName)
  - : Le chemin vers le fichier qui a déclenché l'erreur, hérité depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`EvalError.prototype.lineNumber`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber)
  - : Le numéro de la ligne dans le fichier qui a déclenché l'erreur, hérité depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`EvalError.prototype.columnNumber`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber)
  - : Le numéro de la colonne de la ligne du fichier qui a déclenché l'erreur, hérité depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`EvalError.prototype.stack`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack)
  - : La pile d'appels, héritée depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).

## Exemples

`EvalError` n'est pas utilisée par la spécification ECMAScript actuelle et ne sera donc pas déclenchée par un moteur récent. Toutefois, cet objet reste disponible pour la rétrocompatibilité avec les anciennes versions de la spécification.

### Créer un objet `EvalError`

```js
try {
  throw new EvalError("Coucou", "unFichier.js", 10);
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Coucou"
  console.log(e.name); // "EvalError"
  console.log(e.fileName); // "unFichier.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval)
