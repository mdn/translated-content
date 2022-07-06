---
title: API Fetch
slug: Web/API/Fetch_API
translation_of: Web/API/Fetch_API
---
{{DefaultAPISidebar("Fetch API")}}

L'API Fetch fournit une interface pour la récupération de ressources (e.g., à travers le réseau.) Elle paraîtra familière à tout utilisateur de {{domxref("XMLHttpRequest")}}, mais cette nouvelle API propose néanmoins un ensemble de fonctionnalités plus souples et plus puissantes.

## Concepts et usage

Fetch fournit une définition générique des objets {{domxref("Request")}} et {{domxref("Response")}} (et d'autres choses impliquées par les requêtes réseau). Ainsi il sera possible de les utiliser dès que nécessaire à l'avenir, même si c'est dans le cadre de _service workers_, de l'API Cache ou d'autres mécanismes similaires qui manipulent ou modifient des requêtes et des réponses, ou n'importe quelle situation qui pourrait requérir que vous génériez vos propres réponses au moyen d'un programme.

Elle fournit également une définition pour des concepts associés tels que CORS et la sémantique de l'en-tête HTTP _origin_, supplantant les définitions précédemment proposées ailleurs.

Pour effectuer une requête et obtenir une ressource, utilisez la méthode {{domxref("GlobalFetch.fetch")}}. Elle est implémentée dans de multiples interfaces, et en particulier dans {{domxref("Window")}} et {{domxref("WorkerGlobalScope")}}. Ce qui la rend disponible de la même manière dans tout contexte où vous souhaiteriez récupérer des ressources.

La méthode `fetch()` prend un argument obligatoire, le chemin vers la ressource souhaitée. Elle retourne une promesse qui résout la {{domxref("Response")}} de cette requête, qu'elle soit couronnée de succès ou non. Vous pouvez aussi optionnellement lui passer un objet d'options `init` comme second argument (voir {{domxref("Request")}}.)

Une fois que la {{domxref("Response")}} a été retournée, il y a un ensemble de méthodes disponibles pour déterminer ce que doit être le contenu du corps et comment il doit être manipulé (voir {{domxref("Body")}}.)

Vous pourriez créer une requête et une réponse directement en utilisant les constructeurs {{domxref("Request.Request","Request()")}} et {{domxref("Response.Response","Response()")}}, même s'il est improbable que vous procédiez ainsi. Il est plus probable cependant que leur création résulte des actions d'une autre API (par exemple, {{domxref("FetchEvent.respondWith")}} des _service workers_).

> **Note :** Pour en savoir plus sur l'utilisation des fonctionnalités de l'API Fetch et en approfondir les concepts, consulter respectivement [Utiliser Fetch](/en-US/docs/Web/API/Fetch_API/Using_Fetch) et [Fetch, les concepts de base](/en-US/docs/Web/API/Fetch_API/Basic_concepts).

### Interrompre un fetch

Les navigateurs ont commencé à ajouter le support expérimental des interfaces {{DOMxRef("AbortController")}} et {{DOMxRef("AbortSignal")}} (connue aussi sous le nom d'API d'interruption), qui autorisent les opérations telles que Fetch et XHR à être interrompue si elles ne sont pas encore achevées. Voir les pages des interfaces pour plus de détails.

## Les interfaces de Fetch

- {{domxref("GlobalFetch")}}
  - : La méthode `fetch()` est utilisée pour récuperer une ressource.
- {{domxref("Headers")}}
  - : Représente les en-têtes de requête et de réponse, vous permettant de les consulter et de prendre différentes décisions en fonction du résultat.
- {{domxref("Request")}}
  - : Représente la requête d'une ressource.
- {{domxref("Response")}}
  - : Représente la réponse à une requête.

## Mixin de Fetch

- {{domxref("Body")}}
  - : Fournit les méthodes relatives au corps de la requête/réponse, vous permettant de déclarer quel est son type de contenu et comment il doit être manipulé.

## Spécifications

| Spécification                | Statut                   | Commentaire         |
| ---------------------------- | ------------------------ | ------------------- |
| {{SpecName('Fetch')}} | {{Spec2('Fetch')}} | Définition initiale |

## Compatibilité Navigateurs

{{Compat("api.WindowOrWorkerGlobalScope.fetch")}}

## Voir aussi

- [ServiceWorker API](/en-US/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/en-US/docs/Web/HTTP)
- [Fetch polyfill](https://github.com/github/fetch)
- [Fetch basic concepts](/en-US/docs/Web/API/Fetch_API/Basic_concepts)
