---
title: "ErrorEvent : constructeur ErrorEvent()"
short-title: ErrorEvent()
slug: Web/API/ErrorEvent/ErrorEvent
l10n:
  sourceCommit: 2cd89ba0e74308b8f9bcd5937b76fd1188006358
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Le constructeur **`ErrorEvent()`** crée un nouvel objet {{DOMxRef("ErrorEvent")}}.

## Syntaxe

```js-nolint
new ErrorEvent(type)
new ErrorEvent(type, options)
```

### Paramètres

- `type`
  - : Une chaîne de caractères contenant le nom de l'évènement. La casse est prise en compte.
- `options` {{Optional_Inline}}
  - : Un objet qui, _en plus des propriétés définies dans {{DOMxRef("Event/Event", "Event()")}}_, peut avoir les propriétés suivantes&nbsp;:
    - `message` {{Optional_Inline}}
      - : Une chaîne de caractères contenant un message d'erreur lisible décrivant le problème.
    - `filename` {{Optional_Inline}}
      - : Une chaîne de caractères contenant le nom du fichier de script dans lequel l'erreur est survenue.
    - `lineno` {{Optional_Inline}}
      - : Un entier contenant le numéro de ligne du fichier de script dans lequel l'erreur est survenue.
    - `colno` {{Optional_Inline}}
      - : Un entier contenant le numéro de colonne du fichier de script dans lequel l'erreur est survenue.
    - `error` {{Optional_Inline}}
      - : Une valeur JavaScript, telle qu'une erreur ({{JSxRef("Error")}}) ou une erreur DOM ({{DOMxRef("DOMException")}}), représentant l'erreur associée à cet évènement.

### Valeur de retour

Un nouvel objet {{DOMxRef("ErrorEvent")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
