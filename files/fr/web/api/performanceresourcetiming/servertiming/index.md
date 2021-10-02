---
title: PerformanceResourceTiming.serverTiming
slug: Web/API/PerformanceResourceTiming/serverTiming
tags:
  - API
  - Property
  - Propriété
  - Reference
  - Performance Web
  - Resource Timing API
  - SecureContextOnly
  - serverTiming
translation_of: Web/API/PerformanceResourceTiming/serverTiming
---
{{APIRef("Resource Timing API")}} {{securecontext_header}}

La propriété en lecture seule **`serverTiming`** retourne un tableau d'entrées [`PerformanceServerTiming`](/fr/docs/Web/API/PerformanceServerTiming) contenant des mesures de synchronisation du serveur.

## Syntaxe

```js
resource.serverTiming;
```

## Spécifications

| Spécification                                                                                    | Statut                               | Commentaire         |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------- |
| {{SpecName('Server Timing','#servertiming-attribute', 'serverTiming')}} | {{Spec2('Server Timing')}} | Initial definition. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceResourceTiming.serverTiming")}}

## Voir aussi

- [`PerformanceServerTiming`](/fr/docs/Web/API/PerformanceServerTiming)
- [`Server-Timing`](/fr/docs/Web/HTTP/Headers/Server-Timing)
