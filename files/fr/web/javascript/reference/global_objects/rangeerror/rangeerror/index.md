---
title: Constructeur RangeError()
slug: Web/JavaScript/Reference/Global_Objects/RangeError/RangeError
---

{{JSRef}}

Le constructeur **`RangeError()`** permet de créer une erreur lorsqu'une valeur n'appartient pas à l'intervalle ou à l'ensemble des valeurs autorisées.

## Syntaxe

```js
new RangeError();
new RangeError(message);
new RangeError(message, nomFichier);
new RangeError(message, nomFichier, numeroLigne);
```

### Parameters

- `message` {{optional_inline}}
  - : Une description, lisible et compréhensible par un humain, de l'erreur.
- `nomFichier` {{optional_inline}}
  - : Le nom du fichier qui contient le code ayant provoqué l'exception.
- `numeroLigne` {{optional_inline}}
  - : Le numéro de la ligne dans le fichier de code ayant provoqué l'exception.

## Exemples

### Utiliser `RangeError` (pour des valeurs numériques)

```js
function verifier(n) {
  if (!(n >= -500 && n <= 500)) {
    throw new RangeError("L'argument doit être compris entre -500 et 500.");
  }
}

try {
  verifier(2000);
} catch (error) {
  if (error instanceof RangeError) {
    // Gérer l'erreur
  }
}
```

### Utiliser `RangeError` (pour des valeurs non-numériques)

```js
function verifier(valeur) {
  if (["pomme", "banane", "carotte"].includes(valeur) === false) {
    throw new RangeError(
      "L'argument doit valeur 'pomme', 'banane', ou 'carotte'.",
    );
  }
}

try {
  verifier("chou");
} catch (error) {
  if (error instanceof RangeError) {
    // Gérer l'erreur
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
