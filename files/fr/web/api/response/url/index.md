---
title: "Response : propriété url"
short-title: url
slug: Web/API/Response/url
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`url`** de l'interface {{DOMxRef("Response")}} contient l'URL de la réponse.
La valeur de la propriété `url` sera l'URL finale obtenue après d'éventuelles redirections.

## Valeur

Une chaîne de caractères.

## Exemples

Dans notre [exemple de réponse Fetch <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (voir [l'exemple Fetch Response en direct <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/fetch/fetch-response/)), nous créons un nouvel objet {{DOMxRef("Request")}} à l'aide du constructeur {{DOMxRef("Request.Request","Request()")}}, en lui passant le chemin d'un fichier JPG.
Nous envoyons ensuite cette requête avec {{DOMxRef("Window/fetch", "fetch()")}}, extrayons un blob de la réponse avec {{DOMxRef("Response.blob")}}, créons une URL objet à partir de celui-ci avec {{DOMxRef("URL.createObjectURL_static", "URL.createObjectURL()")}}, et affichons cela dans une {{HTMLElement("img")}}.

Notez qu'au début du bloc `fetch()`, nous enregistrons l'`URL` de la réponse dans la console.

```js
const monImage = document.querySelector("img");

const maRequete = new Request("flowers.jpg");

fetch(maRequete)
  .then((reponse) => {
    console.log("response.url =", reponse.url); // response.url = https://mdn.github.io/dom-examples/fetch/fetch-response/flowers.jpg
    return reponse.blob();
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
