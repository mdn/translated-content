---
title: Response
slug: Web/API/Response
---

{{APIRef("Fetch API")}}

L'interface **`Response`** de l'API de [fetch](/fr/docs/Web/API/Fetch_API) représente la réponse d'une requête initialisée.

Vous pouvez créer un nouvel objet `Response` en utilisant le constructeur {{domxref("Response.Response()")}}. Cependant, vous rencontrerez plus fréquemment l'objet Response comme étant le résultat d'une opération de l'API, par exemple, un service worker {{domxref("Fetchevent.respondWith")}}, ou un simple {{domxref("GlobalFetch.fetch()")}}.

## Constructeur

- {{domxref("Response.Response","Response()")}}
  - : Crée un nouvel objet `Response`.

## Propriétés

- {{domxref("Response.headers")}} {{readonlyinline}}
  - : Contient les objets {{domxref("Headers")}} associés à la réponse.
- {{domxref("Response.ok")}} {{readonlyinline}}
  - : Contient un booléen statuant s'il s'agit d'une réponse indiquant un succès (statut HTTP entre 200 et 299) ou non.
- {{domxref("Response.redirected")}} {{ReadOnlyInline}}
  - : Indique si oui ou non la réponse est le résultat d'une (ou plusieurs) redirection(s), c'est-à-dire que sa liste d'URLs a plus d'une entrée.
- {{domxref("Response.status")}} {{readonlyinline}}
  - : Contient le status code de la réponse (par exemple `200` en cas de réussite).
- {{domxref("Response.statusText")}} {{readonlyinline}}
  - : Contient le message du statut correspondant au status code (à savoir : `OK` pour le code `200` par exemple).
- {{domxref("Response.type")}} {{readonlyinline}}
  - : Contient le type de la réponse (par exemple, `basic`, `cors`).
- {{domxref("Response.url")}} {{readonlyinline}}
  - : Contient l'URL de la réponse.
- {{domxref("Response.useFinalURL")}}
  - : Contient un booléen statuant s'il s'agit de l'URL finale de la réponse.

Par ailleurs, `Response` implémente également une propriété {{domxref("Body")}}, voici les propriétés qui lui sont propres :

- {{domxref("Body.body")}} {{readonlyInline}}
  - : Un simple getter utilisé afin d'exposer un {{domxref("ReadableStream")}} permettant de lire le contenu du body.
- {{domxref("Body.bodyUsed")}} {{readonlyInline}}
  - : Stocke un {{domxref("Boolean")}} qui indique si le body a déjà été utilisé dans la réponse ou non.

## Méthodes

- {{domxref("Response.clone()")}}
  - : Crée un clone de l'objet `Response`.
- {{domxref("Response.error()")}}
  - : Retourne un nouvel objet `Response` associé à une erreur réseau.
- {{domxref("Response.redirect()")}}
  - : Crée une nouvelle réponse avec une URL différente permettant de rediriger l'utilisateur.

`Response` implémente {{domxref("Body")}}, voici les différentes méthodes qui sont disponibles:

- {{domxref("Body.arrayBuffer()")}}
  - : Prend le stream de la {{domxref("Response")}} et le lit jusqu'à la fin. Renvoie une promise qui retourne un {{domxref("ArrayBuffer")}} lorsqu'elle est résolue.
- {{domxref("Body.blob()")}}
  - : Prend le stream de la {{domxref("Response")}} et le lit jusqu'à la fin. Renvoie une promise qui retourne un {{domxref("Blob")}} lorsqu'elle est résolue.
- {{domxref("Body.formData()")}}
  - : Prend le stream de la {{domxref("Response")}} et le lit jusqu'à la fin. Renvoie une promise qui retourne un {{domxref("FormData")}} lorsqu'elle est résolue.
- {{domxref("Body.json()")}}
  - : Prend le stream de la {{domxref("Response")}} et le lit jusqu'à la fin. Renvoie une promise qui retourne le résultat du parsing du body text, comme {{jsxref("JSON")}} ,lorsqu'elle est résolue.
- {{domxref("Body.text()")}}
  - : Prend le stream de la {{domxref("Response")}} et le lit jusqu'à la fin. Renvoie une promise qui est résolue avec un {{domxref("USVString")}} (text).

## Exemples

Dans notre [exemple basique d'utilisation de `fetch()`](https://github.com/mdn/fetch-examples/tree/master/basic-fetch) ([voir l'exemple en direct](https://mdn.github.io/fetch-examples/basic-fetch/)), nous utilisons un simple appel `fetch()` pour récupérer une image et l'afficher dans un élément [`<img>`](/fr/docs/Web/HTML/Element/img). L'appel `fetch()` retourne une promesse qui est résolue avec un objet `Response` associé à l'opération de récupération de la ressource.

Vous remarquerez que puisque nous récupérons une image, nous avons besoin d'utiliser [`Response.blob`](/fr/docs/Web/API/Response/blob) pour attribuer le bon type MIME à la réponse.

```js
var myImage = document.querySelector(".my-image");
fetch("flowers.jpg")
  .then(function (response) {
    return response.blob();
  })
  .then(function (blob) {
    var objectURL = URL.createObjectURL(blob);
    myImage.src = objectURL;
  });
```

Vous pouvez également utiliser le constructeur {{domxref("Response.Response()")}} pour créer votre propre objet `Response`:

```js
var myResponse = new Response();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ServiceWorker API](/fr/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/fr/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/fr/docs/Web/HTTP)
