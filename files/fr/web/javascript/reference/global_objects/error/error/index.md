---
title: Constructeur Error()
slug: Web/JavaScript/Reference/Global_Objects/Error/Error
---

{{JSRef}}

Le constructeur **`Error`** permet de créer un objet représentant une erreur.

## Syntaxe

```js
new Error();
new Error(message);
new Error(message, options);
new Error(message, nomFichier);
new Error(message, nomFichier, numeroLigne);
```

### Paramètres

- `message` {{Optional_Inline}}
  - : Une description de l'erreur, compréhensible par un humain.
- `options` {{Optional_Inline}}

  - : Un objet avec les propriétés suivantes&nbsp;:

    - `cause` {{Optional_Inline}}
      - : Une propriété qui indique la cause spécifique de l'erreur. Lors de l'interception puis du renvoi d'une erreur avec un autre message d'erreur, cette propriété devrait être utilisée afin de transmettre le message d'erreur original.

- `nomFichier` {{Optional_Inline}} {{Non-standard_inline}}
  - : La valeur de la propriété `nomFichier` pour l'objet `Error` créé. Par défaut, il s'agit du nom du fichier contenant le code qui a invoqué le constructeur `Error()`.
- `numeroLigne` {{Optional_Inline}} {{Non-standard_inline}}
  - : La valeur de la propriété `numeroLigne` pour l'objet `Error` créé. Par défaut, il s'agit du numéro de ligne du fichier contenant l'appel au constructeur `Error()`.

## Exemples

### Appel comme fonction ou comme constructeur

Lorsque le constructeur `Error()` est utilisé comme une fonction, c'est-à-dire sans l'opérateur [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new), il renverra un objet `Error`. Aussi, on aura un comportement équivalent qu'on appelle `Error` avec ou sans le mot-clé `new`.

```js
// cette ligne…
const x = Error(`J'ai été créé avec un appel de fonction !`);

// …aura le même effet que celle-ci.
const y = new Error(`J'ai été construite avec le mot-clé "new" !`);
```

### Transmettre une erreur en utilisant `cause`

Il est parfois utile d'intercepter une erreur avant de la ré-émettre avec un nouveau message. Dans de tels cas, afin de préserver les informations, on peut passer l'erreur d'origine dans le constructeur avec la propriété `cause` de l'option.

```js
try {
  bibliothequeAvecErreurs();
} catch (err) {
  throw new Error(`Nouveau message d'erreur`, { cause: err });
}
```

Pour un exemple plus détaillé, voir [comment distinguer des erreurs semblables](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error#distinguer_des_erreurs_semblables).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation pour `Error`, avec la prise en charge des fonctionnalités récentes comme `cause`, avec la bibliothèque `core-js`](https://github.com/zloirock/core-js#ecmascript-error)
- [`throw`](/fr/docs/Web/JavaScript/Reference/Statements/throw)
- [`try…catch`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch)
- [Billet d'explication sur les causes d'erreur sur le blog v8 (en anglais)](https://v8.dev/features/error-cause)
