---
title: "Window : méthode releaseEvents()"
short-title: releaseEvents()
slug: Web/API/Window/releaseEvents
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

La méthode **`releaseEvents()`** de l'interface {{DOMxRef("Window")}} libère la fenêtre de la capture des évènements d'un type spécifique.

## Syntaxe

```js-nolint
releaseEvents(eventType)
```

### Paramètres

- `eventType`
  - : `eventType` est une combinaison des valeurs suivantes&nbsp;:
    `Event.ABORT`, `Event.BLUR`, `Event.CLICK`,
    `Event.CHANGE`, `Event.DBLCLICK`, `Event.DRAGDDROP`,
    `Event.ERROR`, `Event.FOCUS`, `Event.KEYDOWN`,
    `Event.KEYPRESS`, `Event.KEYUP`, `Event.LOAD`,
    `Event.MOUSEDOWN`, `Event.MOUSEMOVE`, `Event.MOUSEOUT`,
    `Event.MOUSEOVER`, `Event.MOUSEUP`, `Event.MOVE`,
    `Event.RESET`, `Event.RESIZE`, `Event.SELECT`,
    `Event.SUBMIT`, `Event.UNLOAD`.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

```js
window.releaseEvents(Event.KEYPRESS);
```

## Notes

Notez que vous pouvez passer une liste d'évènements à cette méthode en utilisant la syntaxe suivante&nbsp;:
`window.releaseEvents(Event.KEYPRESS | Event.KEYDOWN | Event.KEYUP)`.

Voir aussi {{DOMxRef("window.captureEvents")}}
({{Deprecated_Inline}}).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
