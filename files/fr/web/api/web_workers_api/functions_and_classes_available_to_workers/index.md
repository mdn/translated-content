---
title: Fonctions et classes disponibles dans les web workers
slug: Web/API/Web_Workers_API/Functions_and_classes_available_to_workers
l10n:
  sourceCommit: 818941994eb1765f2196c9b588314b12e7b9f66f
---

{{DefaultAPISidebar("Web Workers API")}}

En plus de l'ensemble des fonctions standard [JavaScript](/fr/docs/Web/JavaScript) (telles que [`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String), [`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Object`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object), [`JSON`](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON), etc.), des fonctions du DOM sont disponibles pour les <i lang="en">workers</i>. Cet article en fournit la liste.

## Contextes et fonctions des relatifs aux <i lang="en">workers</i>

**Les <i lang="en">workers</i> s'exécutent dans un contexte global différent de celui de la fenêtre courante&nbsp;!** Bien que [`Window`](/fr/docs/Web/API/Window) ne soit pas directement accessible depuis les <i lang="en">workers</i>, de nombreuses méthodes en commun sont définies sur un mixin partagé (`WindowOrWorkerGlobalScope`), et disponibles pour les <i lang="en">workers</i> via les contextes dérivés de [`WorkerGlobalScope`](/fr/docs/Web/API/WorkerGlobalScope)&nbsp;:

- [`DedicatedWorkerGlobalScope`](/fr/docs/Web/API/DedicatedWorkerGlobalScope) pour les <i lang="en">workers</i> dédiés
- [`SharedWorkerGlobalScope`](/fr/docs/Web/API/SharedWorkerGlobalScope) pour les <i lang="en">workers</i> partagés
- [`ServiceWorkerGlobalScope`](/fr/docs/Web/API/ServiceWorkerGlobalScope) pour les [<i lang="en">service workers</i>](/fr/docs/Web/API/Service_Worker_API)

Certaines des fonctions qui sont accessibles depuis tous les types de <i lang="en">service workers</i> et depuis le fil d'exécution principal (via `WindowOrWorkerGlobalScope`) sont&nbsp;:

- [`atob()`](/fr/docs/Web/API/Window/atob)
- [`btoa()`](/fr/docs/Web/API/Window/btoa)
- [`clearInterval()`](/fr/docs/Web/API/Window/clearInterval)
- [`clearTimeout()`](/fr/docs/Web/API/Window/clearTimeout)
- [`dump()`](/fr/docs/Web/API/Window/dump) {{non-standard_inline}}
- [`setInterval()`](/fr/docs/Web/API/Window/setInterval)
- [`setTimeout()`](/fr/docs/Web/API/Window/setTimeout)

Les fonctions suivantes sont **uniquement** disponibles pour les pour les <i lang="en">workers</i>&nbsp;:

- [`WorkerGlobalScope.importScripts()`](/fr/docs/Web/API/WorkerGlobalScope/importScripts) (pour tous les <i lang="en">workers</i>),
- [`DedicatedWorkerGlobalScope.postMessage`](/fr/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) (<i lang="en">workers</i> dédiés uniquement).

## Les API web disponibles pour les <i lang="en">workers</i>

> [!NOTE]
> Si une API listée ici est prise en charge par une plateforme donnée pour une version donnée, on peut généralement partir du principe que l'API fonctionnera pour les <i lang="en">web workers</i>.

Les API web suivantes sont disponibles pour les <i lang="en">workers</i>&nbsp;:

- [API <i lang="en">Broadcast Channel</i>](/fr/docs/Web/API/Broadcast_Channel_API)
- [API Cache](/fr/docs/Web/API/Cache)
- [API <i lang="en">Channel Messaging</i>](/fr/docs/Web/API/Channel_Messaging_API)
- [API Console](/fr/docs/Web/API/Console_API)
- [`Crypto`](/fr/docs/Web/API/Crypto)
- [`CustomEvent`](/fr/docs/Web/API/CustomEvent)
- [Évènements émis par le serveur](/fr/docs/Web/API/Server-sent_events)
- [`Fetch`](/fr/docs/Web/API/Fetch_API)
- [`FileReader`](/fr/docs/Web/API/FileReader)
- [`FileReaderSync`](/fr/docs/Web/API/FileReaderSync) (fonctionne uniquement dans les <i lang="en">workers</i>)
- [`FormData`](/fr/docs/Web/API/FormData)
- [`ImageData`](/fr/docs/Web/API/ImageData)
- [`IndexedDB`](/fr/docs/Web/API/IndexedDB_API)
- [API <i lang="en">Network Information</i>](/fr/docs/Web/API/Network_Information_API)
- [`Notifications`](/fr/docs/Web/API/Notifications_API)
- [`Performance`](/fr/docs/Web/API/Performance)
- [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry)
- [`PerformanceMeasure`](/fr/docs/Web/API/PerformanceMeasure)
- [`PerformanceMark`](/fr/docs/Web/API/PerformanceMark)
- [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver)
- [`PerformanceResourceTiming`](/fr/docs/Web/API/PerformanceResourceTiming)
- [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`ServiceWorkerRegistration`](/fr/docs/Web/API/ServiceWorkerRegistration)
- [`TextEncoder`](/fr/docs/Web/API/TextEncoder) et [`TextDecoder`](/fr/docs/Web/API/TextDecoder)
- [`URL`](/fr/docs/Web/API/URL)
- [WebGL](/fr/docs/Web/API/WebGL_API) avec [`OffscreenCanvas`](/fr/docs/Web/API/OffscreenCanvas) (activé via une préférence `gfx.offscreencanvas.enabled`)
- [`WebSocket`](/fr/docs/Web/API/WebSocket)
- [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) (bien que les attributs `responseXML` et `channel` vaillent toujours `null`).

Les <i lang="en">workers</i> peuvent également engendrer d'autres <i lang="en">workers</i> et les API suivantes sont donc disponibles&nbsp;:

- [`Worker`](/fr/docs/Web/API/Worker)
- [`WorkerGlobalScope`](/fr/docs/Web/API/WorkerGlobalScope)
- [`WorkerLocation`](/fr/docs/Web/API/WorkerLocation)
- [`WorkerNavigator`](/fr/docs/Web/API/WorkerNavigator)

## Voir aussi

- [Utiliser les <i lang="en">web workers</i>](/fr/docs/Web/API/Web_Workers_API/Using_web_workers)
- [`Worker`](/fr/docs/Web/API/Worker)
