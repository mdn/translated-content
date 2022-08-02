---
title: WorkerGlobalScope.location
slug: Web/API/WorkerGlobalScope/location
translation_of: Web/API/WorkerGlobalScope/location
---
{{APIRef("Web Workers API")}}

La propriété en lecture seule **`location`** de l'interface {{domxref("WorkerGlobalScope")}} retourne l'objet {{domxref("WorkerLocation")}} associé au worker. C'est un objet location spécifique, essentiellement un sous-ensemble de {{domxref("Location")}} pour les contextes de navigation, mais adapté aux workers.

## Syntaxe

```js
var locationObj = self.location;
```

### Valeur de retour

Un objet {{domxref("WorkerLocation")}}.

## Exemple

Si vous appelez l'instruction suivante dans un document délivré par `localhost:8000`

```js
console.log(location);
```

à l'intérieur d'un worker (ce qui équivaut à `self.console.log(self.location);`, puisqu'il est appelé dans le contexte du worker qui peut être référencé par {{domxref("WorkerGlobalScope.self")}}), la console vous retournera un objet {{domxref("WorkerLocation")}}  — comme ce qui suit :

```js
WorkerLocation {hash: "", search: "", pathname: "/worker.js", port: "8000", hostname: "localhost"…}
  hash: ""
  host: "localhost:8000"
  hostname: "localhost"
  href: "http://localhost:8000/worker.js"
  origin: "http://localhost:8000"
  pathname: "/worker.js"
  port: "8000"
  protocol: "http:"
  search: ""
  __proto__: WorkerLocation
```

Vous pouvez utiliser l'objet location pour récupérer des informations supplémentaires sur la localisation du document, comme vous pourriez le faire avec un objet {{domxref("Location")}} normal.

> **Note :** Firefox rencontre un bogue avec l'utilisation de `console.log` à l'intérieur des workers partagés/service (voir {{Bug("1058644")}}), ce qui peut occasionner d'étranges résultats, mais cela devrait être bientôt corrigé.

## Spécifications

| Spécification                                                                                        | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', '#dom-workerglobalscope-location', 'location')}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.WorkerGlobalScope.location")}}

## Voir aussi

{{domxref("WorkerGlobalScope")}}
