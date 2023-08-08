---
title: Constructeur InternalError()
slug: Web/JavaScript/Reference/Global_Objects/InternalError/InternalError
---

{{JSRef}}{{non-standard_header}}

Le constructeur **`InternalError()`** permet de créer une erreur qui s'est produite à l'intérieur du moteur JavaScript, comme «&nbsp;**InternalError**: too much recursion&nbsp;».

## Syntaxe

```js
new InternalError();
new InternalError(message);
new InternalError(message, nomFichier);
new InternalError(message, nomFichier, numeroLigne);
```

### Paramètres

- `message` {{optional_inline}}
  - : Une description de l'erreur, compréhensible par un humain.
- `nomFichier` {{optional_inline}}
  - : Le nom du fichier qui a déclenché l'exception.
- `numeroLigne` {{optional_inline}}
  - : Le numéro de la ligne du code qui a déclenché l'exception.

## Exemples

### Créer une nouvelle exception `InternalError`

```js
new InternalError("Échec du moteur");
```

## Spécifications

Ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error)
