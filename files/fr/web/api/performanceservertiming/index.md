---
title: PerformanceServerTiming
slug: Web/API/PerformanceServerTiming
---

{{APIRef("Resource Timing API")}} {{securecontext_header}}

L'interface **`PerformanceServerTiming`** présente des métriques de serveur qui sont envoyées avec la réponse dans l'en-tête [`Server-Timing`](/fr/docs/Web/HTTP/Headers/Server-Timing) dans l'en-tête HTTP.

Cette interface est limitée à la même origine, mais vous pouvez utiliser l'en-tête [`Timing-Allow-Origin`](/fr/docs/Web/HTTP/Headers/Timing-Allow-Origin) pour spécifier les domaines qui sont autorisés à accéder aux paramètres du serveur. Notez que cette interface n'est disponible que dans des contextes sécurisés (HTTPS) dans certains navigateurs.

{{AvailableInWorkers}}

## Propriétés

- [`PerformanceServerTiming.description`](/fr/docs/Web/API/PerformanceServerTiming/description){{readonlyInline}}
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/API/DOMString) décrivant la métrique spécifiée par le serveur, ou une chaîne vide.
- [`PerformanceServerTiming.duration`](/fr/docs/Web/API/PerformanceServerTiming/duration){{readonlyInline}}
  - : Un double qui contient la durée de la métrique spécifiée par le serveur, ou la valeur `0.0`.
- [`PerformanceServerTiming.name`](/fr/docs/Web/API/PerformanceServerTiming/name){{readonlyInline}}
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/API/DOMString) avec le nom de la métrique spécifiée par le serveur.

## Méthodes

- [`PerformanceServerTiming.toJSON()`](</fr/docs/Web/API/PerformanceServerTiming/toJSON()>)
  - : Retourne une chaîne de caractères [`DOMString`](/fr/docs/Web/API/DOMString) qui est la représentation JSON de l'objet `PerformanceServerTiming`.

## Exemple

Étant donné un serveur qui envoie l'en-tête [`Server-Timing`](/fr/docs/Web/HTTP/Headers/Server-Timing), par exemple un serveur node.js comme celui-ci :

```js
const http = require("http");

function requestHandler(request, response) {
  const headers = {
    "Server-Timing": `
      cache;desc="Cache Read";dur=23.2,
      db;dur=53,
      app;dur=47.2
    `.replace(/\n/g, ""),
  };
  response.writeHead(200, headers);
  response.write("");
  return setTimeout((_) => {
    response.end();
  }, 1000);
}

http.createServer(requestHandler).listen(3000).on("error", console.error);
```

Les entrées `PerformanceServerTiming` sont désormais observables depuis JavaScript via la propriété [`PerformanceResourceTiming.serverTiming`](/fr/docs/Web/API/PerformanceResourceTiming/serverTiming) :

```js
let entries = performance.getEntriesByType("resource");
console.log(entries[0].serverTiming);
// 0: PerformanceServerTiming {name: "cache", duration: 23.2, description: "Cache Read"}
// 1: PerformanceServerTiming {name: "db", duration: 53, description: ""}
// 2: PerformanceServerTiming {name: "app", duration: 47.2, description: ""}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Server-Timing`](/fr/docs/Web/HTTP/Headers/Server-Timing)
- [`PerformanceResourceTiming.serverTiming`](/fr/docs/Web/API/PerformanceResourceTiming/serverTiming)
