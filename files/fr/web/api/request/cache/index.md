---
title: "Request : propriété cache"
short-title: cache
slug: Web/API/Request/cache
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`cache`** de l'interface {{DOMxRef("Request")}} contient le mode de cache de la requête. Elle contrôle la façon dont la requête interagit avec le [cache HTTP](/fr/docs/Web/HTTP/Guides/Caching) du navigateur.

## Valeur

Une valeur de type `RequestCache`. Les valeurs disponibles sont&nbsp;:

- `default` — Le navigateur recherche une requête correspondante dans son cache HTTP.
  - S'il y a une correspondance et qu'elle est [fraîche](/fr/docs/Web/HTTP/Guides/Caching#fraîcheur_et_péremption_basée_sur_lâge), elle sera retournée depuis le cache.
  - S'il y a une correspondance mais qu'elle est [périmée](/fr/docs/Web/HTTP/Guides/Caching#fraîcheur_et_péremption_basée_sur_lâge), le navigateur effectuera une [requête conditionnelle](/fr/docs/Web/HTTP/Guides/Conditional_requests) vers le serveur distant. Si le serveur indique que la ressource n'a pas changé, elle sera retournée depuis le cache. Sinon, la ressource sera téléchargée depuis le serveur et le cache sera mis à jour.
  - S'il n'y a pas de correspondance, le navigateur effectuera une requête normale et mettra à jour le cache avec la ressource téléchargée.

- `no-store` — Le navigateur récupère la ressource depuis le serveur distant sans d'abord consulter le cache, _et ne_ mettra _pas_ à jour le cache avec la ressource téléchargée.
- `reload` — Le navigateur récupère la ressource depuis le serveur distant sans d'abord consulter le cache, _mais_ mettra _ensuite_ à jour le cache avec la ressource téléchargée.
- `no-cache` — Le navigateur recherche une requête correspondante dans son cache HTTP.
  - S'il y a une correspondance, _fraîche ou périmée_, le navigateur effectuera une [requête conditionnelle](/fr/docs/Web/HTTP/Guides/Conditional_requests) vers le serveur distant. Si le serveur indique que la ressource n'a pas changé, elle sera retournée depuis le cache. Sinon, la ressource sera téléchargée depuis le serveur et le cache sera mis à jour.
  - S'il n'y a pas de correspondance, le navigateur effectuera une requête normale et mettra à jour le cache avec la ressource téléchargée.

- `force-cache` — Le navigateur recherche une requête correspondante dans son cache HTTP.
  - S'il y a une correspondance, _fraîche ou périmée_, elle sera retournée depuis le cache.
  - S'il n'y a pas de correspondance, le navigateur effectuera une requête normale et mettra à jour le cache avec la ressource téléchargée.

- `only-if-cached` — Le navigateur recherche une requête correspondante dans son cache HTTP. {{Experimental_Inline}}
  - S'il y a une correspondance, _fraîche ou périmée_, elle sera retournée depuis le cache.
  - S'il n'y a pas de correspondance, le navigateur répondra avec un statut {{HTTPStatus("504", "504 Gateway timeout")}}.

  Le mode `"only-if-cached"` ne peut être utilisé que si le [`mode`](/fr/docs/Web/API/Request/mode) de la requête est `"same-origin"`. Les redirections mises en cache seront suivies si la propriété `redirect` de la requête est `"follow"` et que les redirections ne violent pas le mode `"same-origin"`.

## Exemples

```js
// Télécharger une ressource en contournant le cache, pour l'ignorer complètement.
fetch("some.json", { cache: "no-store" }).then((response) => {
  /* consommer la réponse */
});

// Télécharger une ressource en contournant le cache, mais mettre à jour le cache HTTP avec la ressource téléchargée.
fetch("some.json", { cache: "reload" }).then((response) => {
  /* consommer la réponse */
});

// Télécharger une ressource en contournant le cache avec un serveur correctement configuré qui enverra les bons en-têtes ETag et Date et gérera correctement les en-têtes de requête If-Modified-Since et If-None-Match, on peut donc se fier à la validation pour garantir une réponse fraîche.
fetch("some.json", { cache: "no-cache" }).then((response) => {
  /* consommer la réponse */
});

// Télécharger une ressource en pensant à l'économie ! Préférer une réponse en cache même périmée pour économiser la bande passante.
fetch("some.json", { cache: "force-cache" }).then((response) => {
  /* consommer la réponse */
});

// Implémentation naïve client du stale-while-revalidate.
// Préférer une réponse en cache même périmée ; mais mettre à jour si elle est trop ancienne.
// AbortController et signal pour permettre un meilleur nettoyage mémoire.
// En réalité, ce serait une fonction qui prend un chemin et une référence au contrôleur car il faudrait changer la valeur
let controller = new AbortController();
fetch("some.json", {
  cache: "only-if-cached",
  mode: "same-origin",
  signal: controller.signal,
})
  .catch((e) =>
    e instanceof TypeError && e.message === "Failed to fetch"
      ? { status: 504 } // Contournement pour Chrome, qui échoue avec un TypeError
      : Promise.reject(e),
  )
  .then((res) => {
    if (res.status === 504) {
      controller.abort();
      controller = new AbortController();
      return fetch("some.json", {
        cache: "force-cache",
        mode: "same-origin",
        signal: controller.signal,
      });
    }
    const date = res.headers.get("date"),
      dt = date ? new Date(date).getTime() : 0;
    if (dt < Date.now() - 86_400_000) {
      // si plus vieux que 24 heures
      controller.abort();
      controller = new AbortController();
      return fetch("some.json", {
        cache: "reload",
        mode: "same-origin",
        signal: controller.signal,
      });
    }

    // Autres conditions possibles
    if (dt < Date.now() - 300_000)
      // Si c'est plus vieux que 5 minutes
      fetch("some.json", { cache: "no-cache", mode: "same-origin" }); // pas d'annulation ni de valeur de retour.
    return res;
  })
  .then((response) => {
    /* consommer la réponse (éventuellement périmée) */
  })
  .catch((error) => {
    /* Peut être un AbortError/DOMException ou un TypeError */
  });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
