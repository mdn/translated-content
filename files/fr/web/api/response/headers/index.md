---
title: "Response : propriété headers"
short-title: headers
slug: Web/API/Response/headers
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`headers`** de l'interface {{DOMxRef("Response")}} contient l'objet {{DOMxRef("Headers")}} associé à la réponse.

## Valeur

Un objet {{DOMxRef("Headers")}}.

## Exemples

Dans notre [exemple de réponse Fetch <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (voir [la réponse Fetch en direct <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/fetch/fetch-response/)), nous créons un nouvel objet {{DOMxRef("Request")}} en utilisant le constructeur {{DOMxRef("Request.Request","Request()")}}, en lui passant un chemin JPG.
Nous récupérons ensuite cette requête en utilisant {{DOMxRef("Window/fetch", "fetch()")}}, extrayons un blob de la réponse en utilisant {{DOMxRef("Response.blob")}}, créons une URL d'objet à partir de celui-ci en utilisant {{DOMxRef("URL.createObjectURL_static", "URL.createObjectURL()")}}, et l'affichons dans une image {{HTMLElement("img")}}.

Remarquez qu'au début du bloc `fetch()`, nous journalisons les en-têtes de la réponse dans la console.

```js
const monImage = document.querySelector("img");

const maRequete = new Request("fleurs.jpg");

fetch(maRequete)
  .then((response) => {
    console.log("en-têtes de réponse =", response.headers);
    return response.blob();
  })
  .then((monBlob) => {
    const urlObjet = URL.createObjectURL(monBlob);
    monImage.src = urlObjet;
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
