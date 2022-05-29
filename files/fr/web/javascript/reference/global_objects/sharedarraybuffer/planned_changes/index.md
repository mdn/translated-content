---
title: Changements prévus à propos de la mémoire partagée
translation_of: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Planned_changes
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Planned_changes
---
{{JSRef}}

Un travail de standardisation est en cours afin de permettre à nouveau l'utilisation des objets [`SharedArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer), mais des modifications sont nécessaires afin que ceux-ci puissent être utilisés entre des <i lang="en">threads</i> (par défaut `postMessage()` lève une exception pour les objets `SharedArrayBuffer`). Ces modifications améliorent l'isolation entre les sites et aident à réduire l'impact des attaques utilisant des minuteurs à haute résolution, comme ceux pouvant être créés avec de la mémoire partagée.

> **Note :** À partir de Firefox 79, les fonctionnalités décrites dans ce document sont activées par défaut.

## En-têtes HTTP

Pour commencer, les documents doivent utiliser [un contexte sécurisé](/fr/docs/Web/Security/Secure_Contexts).

Pour les documents de plus haut niveau, deux en-têtes doivent être présents&nbsp;:

- [`Cross-Origin-Opener-Policy`](/fr/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) avec la valeur `same-origin` (qui protège l'origine des acteurs malveillants)
- [`Cross-Origin-Embedder-Policy`](/fr/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) avec la valeur `require-corp` (qui protège les victimes de votre origine)

Avec ces deux en-têtes ainsi paramétrés, `postMessage()` ne déclenchera plus d'exceptions pour les objets `SharedArrayBuffer` et la mémoire partagée entre les <i lang="en">threads</i> sera donc disponible.

Les documents imbriqués et les <i lang="en">workers</i> dédiés devront également utiliser l'en-tête [`Cross-Origin-Embedder-Policy`](/fr/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) avec la même valeur. Aucun changement supplémentaire n'est nécessaire pour les documents imbriqués de la même origine et pour les sous-ressources. Les documents imbriqués et les sous-ressources d'un même site mais d'une origine différente devront fixer l'en-tête [`Cross-Origin-Resource-Policy`](/fr/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy) avec la valeur `same-site`. Dans le cas d'une origine et d'un site différent, ce même en-tête devra avoir la valeur `cross-origin`. On notera qu'utiliser toute autre valeur que `same-origin` pour [`Cross-Origin-Resource-Policy`](/fr/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy) ouvre la porte à des attaques potentielles, telles que [Spectre](https://fr.wikipedia.org/wiki/Spectre_(vuln%C3%A9rabilit%C3%A9)).

On notera que l'en-tête [`Cross-Origin-Opener-Policy`](/fr/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) limite la capacité à retenir une référence vers une popup. L'accès direct entre deux fenêtres de plus haut niveau fonctionnera uniquement si elles partagent la même origine et que les deux en-têtes ont les mêmes valeurs.

## Modifications de l'API JavaScript

En raison de ces nouvelles contraintes, quelques modifications sont apportées à l'API&nbsp;:

- L'objet `Atomics` est toujours disponible.
- En principe, les objets `SharedArrayBuffer` sont toujours disponibles. En pratique, il est nécessaire que les deux en-têtes mentionnés soient définis, sinon le constructeur rattaché à l'objet global est masqué. On peut espérer que cette restriction soit levée à l'avenir. [`WebAssembly.Memory`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory) peut toujours être utilisé afin d'obtenir une instance.
- À moins que les deux en-têtes mentionnés avant soient définis, les différentes API `postMessage()` lèveront une exception pour les objets `SharedArrayBuffer`. Si les en-têtes sont bien paramétrés, `postMessage()` fonctionnera sur les objets `Window` et les <i lang="en">workers</i> dédiés et permettra le partage de la mémoire.
- Afin d'éviter d'avoir à vérifier si `postMessage()` provoque des erreurs, [`self.crossOriginIsolated`](/fr/docs/Web/API/crossOriginIsolated) est en cours de standardisation&nbsp;: il s'agit d'un accesseur renvoyant un booléen indiquant si les en-têtes sont bien définis et qui est disponible dans les contextes de la fenêtre et des <i lang="en">workers</i>.

## Mémoire partagée en WebAssembly

[La proposition sur les <i lang="en">threads</i> WebAssembly](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md) permet à des objets [`WebAssembly.Memory`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory) d'être créés avec un nouveau marqueur [`shared`](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#javascript-api-changes) pour le constructeur. Lorsque ce marqueur vaut `true`, l'objet `Memory` construit peut être partagé entre les <i lang="en">workers</i> avec `postMessage()`, comme `SharedArrayBuffer`, et le [`buffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer) de l'objet `Memory` correspondant est un objet `SharedArrayBuffer`. Aussi, les conditions exposées ci-avant pour le partage d'un `SharedArrayBuffer` entre les <i lang="en">workers</i> s'appliquent également au partage d'un objet `WebAssembly.Memory`.

Cette proposition définit également un nouvel ensemble d'instructions [atomiques](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#atomic-memory-accesses). À l'instar de `SharedArrayBuffer` et de ses méthodes qui sont autorisées sans condition (seul le partage entre <i lang="en">threads</i> est conditionné aux en-têtes), les instructions atomiques WebAssembly sont aussi autorisées sans condition.

## Voir aussi

- [Explication des en-têtes `Cross-Origin-Opener-Policy` et `Cross-Origin-Embedder-Policy` (en anglais)](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit)
- `Cross-Origin-Opener-Policy`&nbsp;:
  - [Issue n°3740 sur le dépôt `whatwg/html`](https://github.com/whatwg/html/issues/3740),
  - [Brouillon de spécification](https://gist.github.com/annevk/6f2dd8c79c77123f39797f6bdac43f3e).
- `Cross-Origin-Embedder-Policy`&nbsp;:&nbsp;:
  - [Issue n°4175 sur le dépôt `whatwg/html`](https://github.com/whatwg/html/issues/4175),
  - [Brouillon de spécification](https://mikewest.github.io/corpp/).
- `Cross-Origin-Resource-Policy`&nbsp;:
  - [Standardisée avec l'API Fetch](https://fetch.spec.whatwg.org/#cross-origin-resource-policy-header)
  - La nouvelle valeur `cross-origin` fait partie des travaux sur `Cross-Origin-Embedder-Policy`.
- Modifications apportées à `postMessage()` et [`self.crossOriginIsolated`](/fr/docs/Web/API/crossOriginIsolated)
  - [Issue n°4732 sur le dépôt `whatwg/html`](https://github.com/whatwg/html/issues/4732),
  - [Issue n°4872 sur le dépôt `whatwg/html`](https://github.com/whatwg/html/issues/4872),
  - [Brouillon de spécification](https://github.com/whatwg/html/pull/4734).
- [Mises à jour quant à `SharedArrayBuffer` pour Chrome pour Android 88 et Chrome pour ordinateur 92 (en anglais)](https://developer.chrome.com/blog/enabling-shared-array-buffer/)
