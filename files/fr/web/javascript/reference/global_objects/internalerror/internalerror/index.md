---
title: Constructeur InternalError()
short-title: InternalError()
slug: Web/JavaScript/Reference/Global_Objects/InternalError/InternalError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

Le constructeur **`InternalError()`** crée des objets {{JSxRef("InternalError")}}.

## Syntaxe

```js-nolint
new InternalError()
new InternalError(message)
new InternalError(message, options)
new InternalError(message, fileName)
new InternalError(message, fileName, lineNumber)

InternalError()
InternalError(message)
InternalError(message, options)
InternalError(message, fileName)
InternalError(message, fileName, lineNumber)
```

> [!NOTE]
> `InternalError()` peut être appelé avec ou sans {{JSxRef("Operators/new", "new")}}. Les deux créent une nouvelle instance de `InternalError`.

### Paramètres

- `message` {{Optional_Inline}}
  - : Description de l'erreur, compréhensible par un·e humain·e.
- `options` {{Optional_Inline}}
  - : Un objet qui possède les propriétés suivantes&nbsp;:
    - `cause` {{Optional_Inline}}
      - : Propriété indiquant la cause spécifique de l'erreur.
        Lors de l'interception et du renvoi d'une erreur avec un message plus spécifique ou utile, cette propriété peut être utilisée pour transmettre l'erreur d'origine.
- `fileName` {{Optional_Inline}} {{Non-standard_Inline}}
  - : Le nom du fichier contenant le code qui a déclenché l'exception.
- `lineNumber` {{Optional_Inline}} {{Non-standard_Inline}}
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

- L'objet {{JSxRef("Error")}}
