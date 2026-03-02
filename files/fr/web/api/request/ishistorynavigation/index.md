---
title: "Request : propriété isHistoryNavigation"
short-title: isHistoryNavigation
slug: Web/API/Request/isHistoryNavigation
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`isHistoryNavigation`** de l'interface {{DOMxRef("Request")}} est un booléen indiquant si la requête est une navigation dans l'historique.

Une navigation dans l'historique est une navigation au sein de l'historique du navigateur, effectuée en appelant {{DOMxRef("History.go()")}}, {{DOMxRef("History.back()")}}, {{DOMxRef("History.forward()")}}, {{DOMxRef("Navigation.traverseTo()")}}, {{DOMxRef("Navigation.back()")}}, {{DOMxRef("Navigation.forward()")}}, ou directement en cliquant sur le bouton de navigation arrière ou avant du navigateur.

## Valeur

Une valeur booléenne.

## Exemples

Cet exemple s'exécute dans un <i lang="en">service worker</i>. Il écoute l'évènement {{DOMxRef("ServiceWorkerGlobalScope/fetch_event", "fetch")}}. Dans le gestionnaire d'évènements, le <i lang="en">service worker</i> vérifie la propriété `isHistoryNavigation` pour savoir si la requête a eu lieu à cause d'une navigation dans l'historique. Si c'est le cas, il tente de répondre avec une réponse mise en cache. Si le cache ne contient pas de réponse pour cette requête, le <i lang="en">service worker</i> récupère une réponse sur le réseau, en met une copie en cache, et répond avec la réponse du réseau.

```js
self.addEventListener("request", (event) => {
  // …

  if (event.request.isHistoryNavigation) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response !== undefined) {
          return response;
        }
        return fetch(event.request).then((response) => {
          const responseClone = response.clone();

          caches
            .open("v1")
            .then((cache) => cache.put(event.request, responseClone));

          return response;
        });
      }),
    );
  }

  // …
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("History API", "L'API History", "", 1)}}
- {{DOMxRef("Navigation API", "L'API Navigation", "", 1)}}
- {{DOMxRef("Service Worker API", "L'API Service Worker", "", 1)}}
