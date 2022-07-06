---
title: PerformanceServerTiming.toJSON()
slug: Web/API/PerformanceServerTiming/toJSON
tags:
  - API
  - Method
  - Méthode
  - Reference
  - Performance Web
  - Resource Timing API
  - toJSON
translation_of: Web/API/PerformanceServerTiming/toJSON
---
{{APIRef("Resource Timing API")}}

La méthode **`toJSON()`** de l'interface [`PerformanceServerTiming`](/fr/docs/Web/API/PerformanceServerTiming) retourne une chaîne de caractères [`DOMString`](/fr/docs/Web/API/DOMString) qui est la représentation JSON de l'objet [`PerformanceServerTiming`](/fr/docs/Web/API/PerformanceServerTiming).

## Syntaxe

```js
let json = PerformanceServerTiming.toJSON()
```

### Paramètres

Aucun.

### Valeur de retour

- `json`
  - : Une chaîne de caractères JSON qui est la sérialisation de l'objet [`PerformanceServerTiming`](/fr/docs/Web/API/PerformanceServerTiming).

## Spécifications

| Spécification                                                                                        | Statut                               | Commentaire          |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('Server Timing','#dom-performanceservertiming-tojson','toJSON')}} | {{Spec2('Server Timing')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceServerTiming.toJSON")}}
