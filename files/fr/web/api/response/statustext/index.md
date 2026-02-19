---
title: "Response : propriété statusText"
short-title: statusText
slug: Web/API/Response/statusText
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`statusText`** de l'interface {{DOMxRef("Response")}} contient le message de statut correspondant au code d'état HTTP dans {{DOMxRef("Response.status")}}.

Par exemple, cela sera `OK` pour un code d'état `200`, `Continue` pour `100`, `Not Found` pour `404`.

## Valeur

Une {{JSxRef("String")}} contenant le message de statut HTTP associé à la réponse.
La valeur par défaut est "".

Voir [codes d'état de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status) pour une liste des codes et de leurs messages de statut associés.
Notez que HTTP/2 [ne prend pas en charge](https://fetch.spec.whatwg.org/#concept-response-status-message) les messages de statut.

## Exemples

Dans notre [exemple Fetch Response <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (voir [l'exécution en direct <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/fetch/fetch-response/)), nous créons un nouvel objet {{DOMxRef("Request")}} à l'aide du constructeur {{DOMxRef("Request.Request","Request()")}}, en lui passant le chemin d'un fichier JPG.
Nous utilisons ensuite {{DOMxRef("Window/fetch", "fetch()")}} pour effectuer la requête, extrayons un blob de la réponse avec {{DOMxRef("Response.blob")}}, créons une URL objet avec {{DOMxRef("URL.createObjectURL_static", "URL.createObjectURL()")}}, et affichons cela dans une {{HTMLElement("img")}}.

Notez qu'au début du bloc `fetch()`, nous enregistrons la valeur de `statusText` de la réponse dans la console.

```js
const monImage = document.querySelector("img");

const maRequete = new Request("fleurs.jpg");

fetch(maRequete)
  .then((reponse) => {
    console.log("reponse.statusText =", reponse.statusText); // reponse.statusText = "OK"
    return reponse.blob();
  })
  .then((monBlob) => {
    const objectURL = URL.createObjectURL(monBlob);
    monImage.src = objectURL;
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
