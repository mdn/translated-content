---
title: Request
slug: Web/API/Request
---

{{APIRef("Fetch API")}}

L'interface **`Request`** de l'[API Fetch](/fr/docs/Web/API/Fetch_API) représente une demande de ressource.

Vous pouvez créer un nouvel objet `Request` en utilisant le constructeur {{domxref("Request.Request","Request()")}}, mais vous êtes plus susceptible de rencontrer un objet `Request` renvoyé à la suite d'une autre opération d'API, telle en tant que service worker {{domxref("FetchEvent.request")}}.

## Constructeur

- {{domxref("Request.Request","Request()")}}
  - : Crée un nouvel objet `Request`.

## Propriétés

- {{domxref("Request.cache")}} {{readonlyInline}}
  - : Contient le mode de cache de la demande (par exemple, `default`, `reload`, `no-cache`).
- {{domxref("Request.context")}} {{readonlyInline}} {{deprecated_inline()}}
  - : Contient le contexte de la demande (par exemple, `audio`, `image`, `iframe`, etc.)
- {{domxref("Request.credentials")}} {{readonlyInline}}
  - : Contient les informations d'identification de la demande (par exemple, `omit`, `same-origin`, `include`). La valeur par défaut est `same-origin`.
- {{domxref("Request.destination")}} {{ReadOnlyInline}}
  - : Renvoie une chaîne de l'énumération {{domxref("RequestDestination")}} décrivant la destination de la requête. Il s'agit d'une chaîne indiquant le type de contenu demandé.
- {{domxref("Request.headers")}} {{readonlyInline}}
  - : Contient l'objet {{domxref("Headers")}} associé de la requête.
- {{domxref("Request.integrity")}} {{readonlyInline}}
  - : Contient la valeur d'[intégrité de la sous-ressource](/fr/docs/Web/Security/Subresource_Integrity) de la demande (par exemple, `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
- {{domxref("Request.method")}} {{readonlyInline}}
  - : Contient la méthode de la requête (`GET`, `POST`, etc).
- {{domxref("Request.mode")}} {{readonlyInline}}
  - : Contient le mode de la demande (par exemple, `cors`, `no-cors`, `same-origin`, `navigate`.)
- {{domxref("Request.redirect")}} {{readonlyinline}}
  - : Contient le mode de gestion des redirections. Il peut s'agir d'un `follow`, `error`, ou d'un `manual`.
- {{domxref("Request.referrer")}} {{readonlyInline}}
  - : Contient le référent de la demande (par exemple, `client`).
- {{domxref("Request.referrerPolicy")}} {{readonlyInline}}
  - : Contient la politique de référent de la demande (par exemple, `no-referrer`).
- {{domxref("Request.url")}} {{readonlyInline}}
  - : Contient l'URL de la demande.

`Request` implémente {{domxref("Body")}}, donc il hérite également des propriétés suivantes:

- {{domxref("Body.body", "body")}} {{readonlyInline}}
  - : Un getter simple utilisé pour exposer un {{domxref("ReadableStream")}} du contenu du corps.
- {{domxref("Body.bodyUsed", "bodyUsed")}} {{readonlyInline}}
  - : Stocke un {{domxref("Boolean")}} qui déclare si le corps a déjà été utilisé dans une réponse.

## Méthodes

- {{domxref("Request.clone()")}}
  - : Crée une copie de l'objet `Request` actuel.

`Request` implémente {{domxref("Body")}}, donc il dispose également des méthodes suivantes:

- {{domxref("Body.arrayBuffer()")}}
  - : Renvoie une promesse qui se résout avec une représentation {{domxref("ArrayBuffer")}} du corps de la requête.
- {{domxref("Body.blob()")}}
  - : Renvoie une promesse qui se résout avec une représentation {{domxref("Blob")}} du corps de la requête.
- {{domxref("Body.formData()")}}
  - : Renvoie une promesse qui se résout avec une représentation {{domxref("FormData")}} du corps de la requếte.
- {{domxref("Body.json()")}}
  - : Renvoie une promesse qui se résout avec une représentation {{domxref("JSON")}} du corps de la requête.
- {{domxref("Body.text()")}}
  - : Renvoie une promesse qui se résout avec une représentation {{domxref("USVString")}} (texte) du coprs de la requête.

> **Note :** Les fonctions {{domxref("Body")}} ne peuvent être exécutées qu'une seule fois; les appels suivants seront résolus avec des chaînes vides / ArrayBuffers.

## Exemples

Dans l'extrait de code suivant, nous créons une nouvelle requête à l'aide du constructeur `Request()` (pour un fichier image dans le même répertoire que le script), puis renvoyons certaines valeurs de propriété de la requête:

```js
const request = new Request("https://www.mozilla.org/favicon.ico");

const URL = request.url;
const method = request.method;
const credentials = request.credentials;
```

Vous pouvez ensuite récupérer cette requête en passant l'objet `Request` en tant que paramètre à un appel [`fetch()`](/fr/docs/Web/API/fetch), par exemple:

```js
fetch(request)
  .then((response) => response.blob())
  .then((blob) => {
    image.src = URL.createObjectURL(blob);
  });
```

Dans l'extrait de code suivant, nous créons une nouvelle requête à l'aide du constructeur `Request()` avec des données initiales et du contenu du body pour une requête api qui nécessite une charge utile de body:

```js
const request = new Request("https://example.com", {
  method: "POST",
  body: '{"foo": "bar"}',
});

const URL = request.url;
const method = request.method;
const credentials = request.credentials;
const bodyUsed = request.bodyUsed;
```

> **Note :** Le type de body ne peut être qu'un {{domxref("Blob")}}, {{domxref("BufferSource")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, {{domxref("USVString")}} ou {{domxref("ReadableStream")}} donc pour ajouter un objet JSON à la charge utile, vous devez stringify cet objet.

Vous pouvez ensuite récupérer cette demande d'API en passant l'objet `Request` en tant que paramètre à un appel [`fetch()`](/fr/docs/Web/API/fetch), par exemple et obtenir la réponse:

```js
fetch(request)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Something went wrong on api server!");
    }
  })
  .then((response) => {
    console.debug(response);
    // ...
  })
  .catch((error) => {
    console.error(error);
  });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ServiceWorker API](/fr/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/fr/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/fr/docs/Web/HTTP)
