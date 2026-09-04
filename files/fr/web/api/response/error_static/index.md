---
title: "Response : méthode statique error()"
short-title: error()
slug: Web/API/Response/error_static
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode statique **`error()`** de l'interface {{DOMxRef("Response")}} retourne un nouvel objet `Response` associé à une erreur réseau.

Ceci est principalement utile lors de l'écriture de service workers&nbsp;: cela permet à un service worker d'envoyer une réponse depuis un gestionnaire d'évènements {{DOMxRef("ServiceWorkerGlobalScope.fetch_event", "fetch")}} qui fera échouer la promesse de l'appel {{DOMxRef("Window/fetch", "fetch()")}} dans le code principal.

Une réponse d'erreur a sa {{DOMxRef("Response.type","type")}} définie sur `error`.

## Syntaxe

```js-nolint
Response.error()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet {{DOMxRef("Response")}}.

## Exemples

### Retourner une erreur réseau depuis un service worker

Supposons qu'une application web possède un service worker, qui contient le gestionnaire d'évènements `fetch` suivant&nbsp;:

```js
// service-worker.js

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.pathname === "/salamander.jpg") {
    event.respondWith(Response.error());
  }
});
```

Avec ce service worker, toutes les requêtes fetch de l'application passeront par le service worker vers le réseau, sauf les requêtes pour «&nbsp;salamander.jpg&nbsp;» qui échoueront. Cela signifie que le code suivant du thread principal lèvera une erreur, et le gestionnaire `catch` s'exécutera.

```js
// main.js

const image = document.querySelector("#image");

try {
  const reponse = await fetch("salamander.jpg");
  const blob = await reponse.blob();
  const urlObjet = URL.createObjectURL(blob);
  image.src = urlObjet;
} catch (e) {
  console.error(e);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
