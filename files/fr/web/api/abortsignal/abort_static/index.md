---
title: "AbortSignal : méthode statique abort()"
short-title: abort()
slug: Web/API/AbortSignal/abort_static
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

La méthode statique **`abort()`** de l'interface {{DOMxRef("AbortSignal")}} retourne un objet `AbortSignal` déjà à l'état annulé (et qui ne déclenche pas d'évènement {{DOMxRef("AbortSignal/abort_event", "abort")}}).

Ceci est un raccourci pour le code suivant&nbsp;:

```js
const controller = new AbortController();
controller.abort();
return controller.signal;
```

Cela peut, par exemple, être passé à une méthode fetch afin d'exécuter sa logique d'annulation (c'est-à-dire que le code peut être organisé de sorte que la logique d'annulation doive être exécutée même si l'opération fetch prévue n'a pas été lancée).

> [!NOTE]
> Cette méthode a un objectif similaire à {{JSxRef("Promise.reject")}}.

## Syntaxe

```js-nolint
AbortSignal.abort()
AbortSignal.abort(reason)
```

### Paramètres

- `reason`
  - : La raison pour laquelle l'opération a été annulée, qui peut être n'importe quelle valeur JavaScript.
    Si elle n'est pas spécifiée, la raison est définie sur {{DOMxRef("DOMException")}} `"AbortError"`.

### Valeur de retour

Une instance d'`AbortSignal` avec la propriété {{DOMxRef("AbortSignal.aborted")}} définie sur `true`, et {{DOMxRef("AbortSignal.reason")}} définie à la valeur de raison définie ou par défaut.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
