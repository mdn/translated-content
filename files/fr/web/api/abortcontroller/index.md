---
title: AbortController
slug: Web/API/AbortController
l10n:
  sourceCommit: a4fd602696976d79d8690f9c86a2a1c1f2b9b9eb
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

L'interface **`AbortController`** représente un objet contrôleur qui permet d'annuler une ou plusieurs requêtes Web à tout moment.

Vous pouvez créer un nouvel objet `AbortController` à l'aide du constructeur {{DOMxRef("AbortController.AbortController()", "AbortController()")}}. La communication avec une opération asynchrone se fait à l'aide d'un objet {{DOMxRef("AbortSignal")}}.

## Constructeur

- {{DOMxRef("AbortController.AbortController()", "AbortController()")}}
  - : Crée une nouvelle instance de l'objet `AbortController`.

## Propriétés d'instance

- {{DOMxRef("AbortController.signal")}} {{ReadOnlyInline}}
  - : Retourne une instance de l'objet {{DOMxRef("AbortSignal")}}, qui peut être utilisée pour communiquer avec une opération asynchrone ou l'annuler.

## Méthodes d'instance

- {{DOMxRef("AbortController.abort()")}}
  - : Annule une opération asynchrone avant qu'elle ne soit terminée. Cela permet d'annuler les [requêtes fetch](/fr/docs/Web/API/Window/fetch), la consommation de n'importe quel corps de réponse, et les flux.

## Exemples

Voir la [page `AbortSignal`](/fr/docs/Web/API/AbortSignal#exemples) pour des exemples d'utilisation.

Vous pouvez trouver un [exemple complet et fonctionnel sur GitHub <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/abort-api)&nbsp;; vous pouvez aussi le voir [en ligne <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/abort-api/).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Fetch](/fr/docs/Web/API/Fetch_API)
- [Abortable Fetch <sup>(angl.)</sup>](https://developer.chrome.com/blog/abortable-fetch/) par Jake Archibald
