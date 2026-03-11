---
title: API Fetch
slug: Web/API/Fetch_API
l10n:
  sourceCommit: 8c1bc8d99fc8301fbbe874f6dcf8d41a9f4fe5fb
---

{{DefaultAPISidebar("Fetch API")}}

L'API Fetch fournit une interface pour récupérer des ressources (y compris sur le réseau). Elle remplace {{DOMxRef("XMLHttpRequest")}} par une solution plus puissante et plus flexible.

## Concepts et usage

L'API Fetch utilise les objets {{DOMxRef("Request")}} et {{DOMxRef("Response")}} (ainsi que d'autres éléments liés aux requêtes réseau), ainsi que des concepts associés comme CORS et la sémantique de l'en-tête HTTP Origin.

Pour effectuer une requête et récupérer une ressource, utilisez la méthode {{DOMxRef("Window/fetch", "fetch()")}}. Il s'agit d'une méthode globale dans les contextes {{DOMxRef("Window")}} et {{DOMxRef("WorkerGlobalScope", "Worker")}}. Cela la rend disponible dans pratiquement tous les contextes où vous pourriez vouloir récupérer des ressources.

La méthode `fetch()` prend un argument obligatoire, le chemin vers la ressource à récupérer. Elle retourne une promesse ({{JSxRef("Promise")}}) qui résout la réponse ({{DOMxRef("Response")}}) de cette requête — dès que le serveur répond avec les en-têtes — **même si la réponse du serveur est un statut d'erreur HTTP**. Vous pouvez aussi lui passer en option un objet d'options `init` comme second argument (voir {{DOMxRef("Request")}}).

Une fois qu'une réponse ({{DOMxRef("Response")}}) a été récupérée, plusieurs méthodes sont disponibles pour définir le contenu du corps et la façon dont il doit être manipulé.

Vous pouvez créer une requête et une réponse directement en utilisant les constructeurs {{DOMxRef("Request.Request", "Request()")}} et {{DOMxRef("Response.Response", "Response()")}}, mais il est rare de le faire directement. Il est plus courant que leur création résulte des actions d'une autre API (par exemple, {{DOMxRef("FetchEvent.respondWith()")}} des service workers).

Pour en savoir plus sur l'utilisation des fonctionnalités de l'API Fetch, consultez [Utiliser Fetch](/fr/docs/Web/API/Fetch_API/Using_Fetch).

### Fetch différé

L'API {{DOMxRef("Window/fetchLater", "fetchLater()")}} permet à un·e développeur·euse de demander un _fetch différé_, qui peut être envoyé après une période de temps définie, ou lorsque la page est fermée ou quittée. Voir [Utiliser un Fetch différé](/fr/docs/Web/API/Fetch_API/Using_Deferred_Fetch).

## Interfaces

- {{DOMxRef("Window.fetch()")}} et {{DOMxRef("WorkerGlobalScope.fetch()")}}
  - : La méthode `fetch()` utilisée pour récupérer une ressource.
- {{DOMxRef("Window.fetchLater()")}}
  - : Utilisée pour effectuer une requête de récupération différée.
- {{DOMxRef("DeferredRequestInit")}}
  - : Représente l'ensemble des options pouvant être utilisées pour configurer une requête de récupération différée.
- {{DOMxRef("FetchLaterResult")}}
  - : Représente le résultat d'une demande de récupération différée.
- {{DOMxRef("Headers")}}
  - : Représente les en-têtes de requête/réponse, permettant de les interroger et de prendre différentes décisions selon le résultat.
- {{DOMxRef("Request")}}
  - : Représente une requête de ressource.
- {{DOMxRef("Response")}}
  - : Représente la réponse à une requête.

## En-têtes HTTP

- {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}}
  - : Contrôle le [quota principal](/fr/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) pour l'API `fetchLater()`.
- {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}}
  - : Contrôle le [quota partagé des sous-frames inter-origines](/fr/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) pour l'API `fetchLater()`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser Fetch](/fr/docs/Web/API/Fetch_API/Using_Fetch)
- [L'API Service Worker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
