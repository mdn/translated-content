---
title: Constructeur EvalError()
slug: Web/JavaScript/Reference/Global_Objects/EvalError/EvalError
---

{{JSRef}}

Le **constructeur `EvalError()`** permet de créer un objet représentant une erreur concernant la fonction globale [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval). Cette exception n'est plus déclenchée par les moteurs JavaScript désormais, toutefois l'objet `EvalError` reste présent à des fins de compatibilité.

## Syntaxe

```js
new EvalError();
new EvalError(message);
new EvalError(message, nomFichier);
new EvalError(message, nomFichier, numeroLigne);
```

### Paramètres

- `message` {{optional_inline}}
  - : Une description de l'erreur, compréhensible par un humain.
- `nomFichier` {{optional_inline}}
  - : Le nom du fichier contenant le code qui a causé l'exception.
- `numeroLigne` {{optional_inline}}
  - : Le numéro de la ligne du code qui a causé l'exception.

## Exemples

`EvalError` n'est plus utilisé dans la spécification ECMAScript actuelle et ne sera plus déclenchée par les moteurs JavaScript. Toutefois, l'objet reste présent à des fins de rétro-compatibilité avec les versions antérieures de la spécification.

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
