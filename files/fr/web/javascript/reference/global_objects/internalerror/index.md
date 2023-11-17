---
title: InternalError
slug: Web/JavaScript/Reference/Global_Objects/InternalError
---

{{JSRef}} {{non-standard_header}}

L'objet **`InternalError`** indique qu'une erreur interne liée au moteur JavaScript s'est produite.
De telles erreurs se produisent généralement au dépassement d'un seuil, par exemple&nbsp;:

- «&nbsp;trop de cas pour le `switch`&nbsp;»&nbsp;;
- «&nbsp;trop de parenthèses dans l'expression rationnelle&nbsp;»&nbsp;;
- «&nbsp;initialisateur de tableau trop grand&nbsp;»&nbsp;;
- «&nbsp;trop de niveaux de récursion&nbsp;».

## Constructeur

- [`InternalError()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/InternalError/InternalError)
  - : Crée un nouvel objet `InternalError`.

## Propriétés des instances

- [`InternalError.prototype.message`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/message)
  - : Message d'erreur, hérité depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`InternalError.prototype.name`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/name)
  - : Nom d'erreur, hérité depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`InternalError.prototype.fileName`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName)
  - : Le chemin du fichier qui a déclenché cette erreur, hérité depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`InternalError.prototype.lineNumber`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber)
  - : Le numéro de la ligne du fichier qui a déclenché cette erreur, hérité depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`InternalError.prototype.columnNumber`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber)
  - : Le numéro de colonne de la ligne du fichier qui a déclenché cette erreur, hérité depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`InternalError.prototype.stack`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack)
  - : La pile d'appels, héritée depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).

## Exemples

### Trop de niveau de récursion

Cette fonction récursive s'appelle 10 fois, comme indiquée par la condition d'arrêt.

```js
function boucle(x) {
  if (x >= 10) {
    // "x >= 10" représente la condition d'arrêt
    return;
  }
  // faire des trucs
  boucle(x + 1); // l'appel récursif
}
boucle(0);
```

En changeant cette condition avec une valeur extrêmement grande, cela ne fonctionnera plus&nbsp;:

```js example-bad
function boucle(x) {
  if (x >= 1000000000000) {
    return;
  }
  // faire des trucs
  boucle(x + 1);
}
boucle(0);

// InternalError: too much recursion
```

Pour plus d'informations, voir [la page sur `InternalError: too much recursion`](/fr/docs/Web/JavaScript/Reference/Errors/Too_much_recursion).

## Spécifications

Cet objet ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [`InternalError: too much recursion`](/fr/docs/Web/JavaScript/Reference/Errors/Too_much_recursion)
