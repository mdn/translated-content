---
title: "AbortController : méthode abort()"
short-title: abort()
slug: Web/API/AbortController/abort
l10n:
  sourceCommit: a4fd602696976d79d8690f9c86a2a1c1f2b9b9eb
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

La méthode **`abort()`** de l'interface {{DOMxRef("AbortController")}} annule une opération asynchrone avant qu'elle ne soit terminée.
Elle permet d'annuler les [requêtes fetch](/fr/docs/Web/API/Window/fetch), la consommation de n'importe quel corps de réponse ou les flux.

## Syntaxe

```js-nolint
abort()
abort(reason)
```

### Paramètres

- `reason` {{Optional_Inline}}
  - : La raison pour laquelle l'opération a été annulée, qui peut être n'importe quelle valeur JavaScript.
    Si elle n'est pas spécifiée, la raison est définie sur `"AbortError"` {{DOMxRef("DOMException")}}.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Voir la [page `AbortSignal`](/fr/docs/Web/API/AbortSignal#exemples) pour des exemples d'utilisation.

Vous pouvez trouver un [exemple complet et fonctionnel sur GitHub <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/abort-api)&nbsp;; vous pouvez aussi le voir [en ligne <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/abort-api/).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Fetch](/fr/docs/Web/API/Fetch_API)
