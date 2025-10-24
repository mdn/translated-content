---
title: "Window : méthode fetch()"
short-title: fetch()
slug: Web/API/Window/fetch
original_slug: Web/API/fetch
l10n:
  sourceCommit: f479c102bb6abd59d11c3b176e1f9a02a3cd1135
---

{{APIRef("Fetch API")}}

La méthode **`fetch()`** de l'interface {{domxref("Window")}} lance le processus de récupération d'une ressource sur le réseau et retourne une promesse qui est résolue lorsque la réponse est disponible.

La promesse est résolue avec l'objet {{domxref("Response")}} représentant la réponse à votre requête.

Une promesse `fetch()` n'est rejetée que si la requête échoue, par exemple à cause d'une URL mal formée ou d'une erreur réseau.
Une promesse `fetch()` _n'est pas_ rejetée si le serveur répond avec un code d'état HTTP signalant une erreur (`404`, `504`, etc.).
Dans ce cas, il faut vérifier les propriétés {{domxref("Response.ok")}} et/ou {{domxref("Response.status")}} dans le gestionnaire `then()`.

La méthode `fetch()` est contrôlée par la directive `connect-src` de la [politique de sécurité du contenu](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) (CSP), et non par la directive des ressources récupérées.

> [!NOTE]
> Les paramètres de la méthode `fetch()` sont identiques à ceux du constructeur {{domxref("Request.Request","Request()")}}.

## Syntaxe

```js-nolint
fetch(resource)
fetch(resource, options)
```

### Paramètres

- `resource`
  - : Définit la ressource à récupérer. Cela peut être&nbsp;:
    - Une chaîne de caractères ou tout objet disposant d'un {{Glossary("stringifier")}} — y compris un objet {{domxref("URL")}} — qui fournit l'URL de la ressource à récupérer. L'URL peut être relative à l'URL de base, qui est {{domxref("Node.baseURI", "baseURI")}} dans le contexte d'une fenêtre, ou {{domxref("WorkerGlobalScope.location")}} dans un worker.
    - Un objet {{domxref("Request")}}.

- `options` {{optional_inline}}
  - : Un objet {{domxref("RequestInit")}} contenant les paramètres personnalisés à appliquer à la requête.

### Valeur de retour

Une {{jsxref("Promise")}} qui se résout avec un objet {{domxref("Response")}}.

### Exceptions

- `AbortError` {{domxref("DOMException")}}
  - : La requête a été annulée suite à un appel à la méthode {{domxref("AbortController")}} {{domxref("AbortController.abort", "abort()")}}.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Levée si l'utilisation de l'[API Topics](/fr/docs/Web/API/Topics_API) est explicitement interdite par une [politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy) {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} et qu'une requête `fetch()` a été faite avec `browsingTopics: true`.
- {{jsxref("TypeError")}}
  - : Peut survenir pour les raisons suivantes&nbsp;:
    - L'URL demandée est invalide.
    - L'URL demandée inclut des identifiants (nom d'utilisateur et mot de passe).
    - L'objet {{domxref("RequestInit")}} passé dans `options` contient des propriétés avec des valeurs invalides.
    - La requête est bloquée par une politique de permissions.
    - Il y a une erreur réseau (par exemple, si l'appareil n'a pas de connectivité).

## Exemples

Dans l'[exemple Fetch Request <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) ([voir en direct](https://mdn.github.io/dom-examples/fetch/fetch-request/)), on crée un nouvel objet {{domxref("Request")}} à l'aide du constructeur approprié, puis on le récupère avec un appel à `fetch()`. Comme il s'agit d'une image, on utilise {{domxref("Response.blob()")}} sur la réponse pour obtenir le bon type MIME, puis on crée une URL objet et on l'affiche dans un élément {{htmlelement("img")}}.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

window
  .fetch(myRequest)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.blob();
  })
  .then((response) => {
    myImage.src = URL.createObjectURL(response);
  });
```

Dans l'[exemple Fetch Request avec init <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init) ([voir en direct](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init/)), on fait la même chose sauf qu'on passe un objet _options_ lors de l'appel à `fetch()`. On peut alors définir une valeur {{HTTPHeader("Cache-Control")}} pour indiquer le type de réponses en cache acceptées&nbsp;:

```js
const myImage = document.querySelector("img");
const reqHeaders = new Headers();

// Une réponse en cache est acceptée sauf si elle a plus d'une semaine
reqHeaders.set("Cache-Control", "max-age=604800");

const options = {
  headers: reqHeaders,
};

// On passe l'objet "options" avec nos en-têtes.
const req = new Request("flowers.jpg", options);

fetch(req).then((response) => {
  // …
});
```

On peut aussi passer l'objet `init` au constructeur `Request` pour obtenir le même effet&nbsp;:

```js
const req = new Request("flowers.jpg", options);
```

On peut également utiliser un objet littéral comme `headers` dans `init`&nbsp;:

```js
const options = {
  headers: {
    "Cache-Control": "max-age=60480",
  },
};

const req = new Request("flowers.jpg", options);
```

L'article [Utiliser fetch](/fr/docs/Web/API/Fetch_API/Using_Fetch) fournit d'autres exemples d'utilisation de `fetch()`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WorkerGlobalScope.fetch()")}}
- L'[API Fetch](/fr/docs/Web/API/Fetch_API)
- L'[API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- [HTTP](/fr/docs/Web/HTTP)
