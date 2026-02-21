---
title: Constructeur Error()
short-title: Error()
slug: Web/JavaScript/Reference/Global_Objects/Error/Error
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le constructeur **`Error`** permet de créer des objets {{JSxRef("Error")}}.

## Syntaxe

```js-nolint
new Error()
new Error(message)
new Error(message, options)
new Error(message, fileName)
new Error(message, fileName, lineNumber)

Error()
Error(message)
Error(message, options)
Error(message, fileName)
Error(message, fileName, lineNumber)
```

> [!NOTE]
> `Error()` peut être appelé avec ou sans {{JSxRef("Operators/new", "new")}}. Les deux créent une nouvelle instance de `Error`.

### Paramètres

- `message` {{Optional_Inline}}
  - : Une description de l'erreur, compréhensible par un humain.
- `options` {{Optional_Inline}}
  - : Un objet avec les propriétés suivantes&nbsp;:
    - `cause` {{Optional_Inline}}
      - : Une valeur indiquant la cause spécifique de l'erreur, reflétée dans la propriété {{JSxRef("Error/cause", "cause")}}. Lors de l'interception et de la relance d'une erreur avec un message d'erreur plus précis ou utile, cette propriété peut être utilisée pour transmettre l'erreur originale.
- `fileName` {{Optional_Inline}} {{Non-standard_Inline}}
  - : Le chemin vers le fichier ayant déclenché cette erreur, reflété dans la propriété {{JSxRef("Error/fileName", "fileName")}}. Par défaut, il s'agit du nom du fichier contenant le code qui a appelé le constructeur `Error()`.
- `lineNumber` {{Optional_Inline}} {{Non-standard_Inline}}
  - : Le numéro de ligne dans le fichier où l'erreur a été levée, reflété dans la propriété {{JSxRef("Error/lineNumber", "lineNumber")}}. Par défaut, il s'agit du numéro de ligne contenant l'appel au constructeur `Error()`.

## Exemples

### Appeler une fonction ou un nouveau constructeur

Lorsque `Error` est utilisé comme une fonction, c'est-à-dire sans {{JSxRef("Operators/new", "new")}}, il renverra un objet `Error`.
Ainsi, un simple appel à `Error` produira le même résultat que la construction d'un objet `Error` avec le mot-clé `new`.

```js
const x = Error("J'ai été créé avec un appel de fonction !");

// la ligne au-dessus aura le même effet que la suivante
const y = new Error(`J'ai été construite avec le mot-clé "new" !`);
```

### Transmettre une erreur en utilisant `cause`

Il est parfois utile d'intercepter une erreur avant de la ré-émettre avec un nouveau message.
Dans de tels cas, afin de préserver les informations, on peut passer l'erreur d'origine dans le constructeur avec la propriété `cause` de l'option.

```js
try {
  bibliothequeAvecErreurs();
} catch (err) {
  throw new Error("Nouveau message d'erreur", { cause: err });
}
```

Pour un exemple plus détaillé, voir [comment distinguer des erreurs semblables](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error#distinguer_des_erreurs_semblables).

### Omettre l'argument `options`

JavaScript ne tente de lire `options.cause` que si `options` est un objet — cela évite toute ambiguïté avec l'autre signature non standard `Error(message, fileName, lineNumber)`, qui exige que le deuxième paramètre soit une chaîne de caractères. Si vous omettez `options`, passez une valeur primitive comme `options`, ou passez un objet sans la propriété `cause`, alors l'objet `Error` créé n'aura pas de propriété `cause`.

```js
// Omettre l'argument options
const erreur1 = new Error("Message d'erreur");
console.log("cause" in erreur1); // false

// Passage d'une valeur primitive
const erreur2 = new Error("Message d'erreur", "");
console.log("cause" in erreur2); // false

// Passage d'un objet sans propriété cause
const erreur3 = new Error("Message d'erreur", { details: "erreur HTTP" });
console.log("cause" in erreur3); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation pour `Error`, avec `cause` pris en charge dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-error)
- [Prothèse d'émulation es-shims pour la propriété `cause` de `Error` <sup>(angl.)</sup>](https://www.npmjs.com/package/error-cause)
- L'instruction {{JSxRef("Statements/throw", "throw")}}
- L'instruction {{JSxRef("Statements/try...catch", "try...catch")}}
- [Causes d'erreur <sup>(angl.)</sup>](https://v8.dev/features/error-cause) sur v8.dev (2021)
