---
title: Constructeur EvalError()
short-title: EvalError()
slug: Web/JavaScript/Reference/Global_Objects/EvalError/EvalError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le constructeur **`EvalError()`** crée des objets {{JSxRef("EvalError")}}.

## Syntaxe

```js-nolint
new EvalError()
new EvalError(message)
new EvalError(message, options)
new EvalError(message, fileName)
new EvalError(message, fileName, lineNumber)

EvalError()
EvalError(message)
EvalError(message, options)
EvalError(message, fileName)
EvalError(message, fileName, lineNumber)
```

> [!NOTE]
> `EvalError()` peut être appelée avec ou sans {{JSxRef("Operators/new", "new")}}. Les deux créent une nouvelle instance de `EvalError`.

### Paramètres

- `message` {{Optional_Inline}}
  - : Description de l'erreur, compréhensible par un·e humain·e.
- `options` {{Optional_Inline}}
  - : Un objet qui possède les propriétés suivantes&nbsp;:
    - `cause` {{Optional_Inline}}
      - : Une propriété indiquant la cause spécifique de l'erreur.
        Lors de l'interception et du relancement d'une erreur avec un message plus spécifique ou utile, cette propriété peut être utilisée pour transmettre l'erreur d'origine.
- `fileName` {{Optional_Inline}} {{Non-standard_Inline}}
  - : Le nom du fichier contenant le code qui a causé l'exception.
- `lineNumber` {{Optional_Inline}} {{Non-standard_Inline}}
  - : Le numéro de la ligne du code qui a causé l'exception.

## Exemples

`EvalError` n'est plus utilisé dans la spécification ECMAScript actuelle et ne sera plus déclenchée par les moteurs JavaScript. Toutefois, l'objet reste présent à des fins de rétro-compatibilité avec les versions antérieures de la spécification.

### Créer un objet `EvalError`

```js
try {
  throw new EvalError("Bonjour");
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Bonjour"
  console.log(e.name); // "EvalError"
  console.log(e.stack); // Pile de l'erreur
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Error")}}
- La fonction {{JSxRef("Global_Objects/eval", "eval()")}}
