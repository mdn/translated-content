---
title: SharedWorkerGlobalScope.applicationCache
slug: Web/API/SharedWorkerGlobalScope/applicationCache
translation_of: Web/API/SharedWorkerGlobalScope/applicationCache
---
{{APIRef("Web Workers API")}}

> **Attention :** Application Cache est déprécié depuis Firefox 44, et ne sera plus disponible dans des contextes non sécurisés avant Firefox 60 ({{bug(1354175)}}, currently uniquement sur les versions Nightly/Beta). Ne pas utiliser cette fonctionnalité sur des sites web en production, utilisez plutôt les [services workers.](/fr/docs/Web/API/Service_Worker_API)

La propriété en lecture seule **`applicationCache`** de l'interface {{domxref("SharedWorkerGlobalScope")}} retourne l'objet {{domxref("ApplicationCache")}} pour le _worker_ (voir [Utiliser le cache d'application](/fr/docs/Web/HTML/Using_the_application_cache)).

## Syntaxe

```js
var nameObj = self.applicationCache;
```

### valeur

Un {{domxref("ApplicationCache")}}.

## Exemple

Si un _worker_ partagé a un AppCache, vous pouvez récupérer une référence en utilisant à l'intérieur d'un _worker_ partagé:

```js
self.applicationCache
```

## Compatibilité des navigateurs

{{Compat("api.SharedWorkerGlobalScope.applicationCache")}}

## Voir aussi

- {{domxref("SharedWorkerGlobalScope")}}
