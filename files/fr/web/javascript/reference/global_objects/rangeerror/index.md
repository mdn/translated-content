---
title: RangeError
slug: Web/JavaScript/Reference/Global_Objects/RangeError
translation_of: Web/JavaScript/Reference/Global_Objects/RangeError
original_slug: Web/JavaScript/Reference/Objets_globaux/RangeError
browser-compat: javascript.builtins.RangeError
---
{{JSRef}}

L'objet **`RangeError`** permet d'indiquer une erreur lorsqu'une valeur fournie n'appartient pas à l'intervalle ou à l'ensemble de valeurs autorisées.

## Description

Une exception `RangeError` est levée lorsqu'une valeur est passée comme argument à une fonction qui n'accepte pas de valeurs dans cet intervalle.

Par exemple, cela peut être le cas quand&nbsp;:

- on passe une valeur qui n'est pas une des valeurs autorisées pour [`String.prototype.normalize()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/normalize), ou
- on souhaite créer un tableau avec une longueur illégale via [`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array) ou
- lorsqu'on passe des valeurs incorrectes aux méthodes [`Number.toExponential()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential), [`Number.toFixed()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) ou [`Number.toPrecision()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision).

## Constructeur

- [`RangeError()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RangeError/RangeError)
  - : Crée un nouvel objet `RangeError`.

## Propriétés des instances

- [`RangeError.prototype.message`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/message)
  - : Un message d'erreur. Bien qu'ECMA-262 spécifie que `RangeError` devrait fournir sa propre propriété `message`, pour SpiderMonkey, celle-ci est héritée de [`Error.prototype.message`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/message).
- [`RangeError.prototype.name`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/name)
  - : Le nom d'erreur. Hérité de [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`RangeError.prototype.fileName`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName)
  - : Le chemin vers le fichier qui a déclenché cette erreur. Héritée de [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`RangeError.prototype.lineNumber`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber)
  - : Le numéro de la ligne dans le fichier qui a déclenché cette erreur. Héritée de [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`RangeError.prototype.columnNumber`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber)
  - : Le numéro de la colonne dans la ligne du fichier qui a déclenché cette erreur. Héritée de [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`RangeError.prototype.stack`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack)
  - : La trace de la pile d'appel. Héritée de [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
## Exemples

### Utiliser `RangeError`

```js
const MIN = 200;
const MAX = 300;
function verifier( num ) {
  if( num < MIN || num > MAX ) {
    throw new RangeError( "Le paramètre doit être compris entre " + MIN + " et " + MAX );
  }
};

try {
  verifier(500);
}
catch (e) {
  if (e instanceof RangeError ){
    // On gère ce qui se passe en cas d'erreur
  }
}
```

### Utiliser `RangeError` avec des valeurs non-numériques

```js
function verifier(valeur){
  if(["pomme", "banane", "carotte"].includes(valeur) === false){
    throw new RangeError("L'argument n'est pas un fruit parmi pomme / banane ou carotte.");
  }
}

try {
  verifier("chou");
}
catch(erreur) {
  if(erreur instanceof RangeError){
    //On gère ce qui se passe en cas d'erreur
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [`Number.toExponential()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential)
- [`Number.toFixed()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
- [`Number.toPrecision()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision)
- [`String.prototype.normalize()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
