---
title: "Response : propriété status"
short-title: status
slug: Web/API/Response/status
l10n:
  sourceCommit: 2064920ea85d963b8cf590dc5d5d25b377aa3d2e
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`status`** de l'interface {{DOMxRef("Response")}} contient les [codes d'état HTTP](/fr/docs/Web/HTTP/Reference/Status) de la réponse.

Par exemple, `200` pour un succès, `404` si la ressource n'a pas pu être trouvée.

## Valeur

Un nombre entier non signé sur 16 bits.
Il s'agit de l'un des [codes d'état de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status).

Une valeur de `0` est retournée pour une réponse dont la propriété {{DOMxRef("Response.type", "type")}} est `opaque`, `opaqueredirect` ou `error`.

## Exemples

Dans notre [exemple Fetch Response <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (voir [l'exécution en direct <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/fetch/fetch-response/)), nous créons un nouvel objet {{DOMxRef("Request")}} à l'aide du constructeur {{DOMxRef("Request.Request","Request()")}}, en lui passant le chemin d'un fichier JPG.
Nous utilisons ensuite {{DOMxRef("Window/fetch", "fetch()")}} pour effectuer la requête, extrayons un blob de la réponse avec {{DOMxRef("Response.blob")}}, créons une URL objet avec {{DOMxRef("URL.createObjectURL_static", "URL.createObjectURL()")}}, et affichons cela dans un {{HTMLElement("img")}}.
Notez qu'au début du bloc `fetch()`, nous enregistrons la valeur de `status` de la réponse dans la console.

```js
const monImage = document.querySelector("img");

const maRequete = new Request("fleurs.jpg");

fetch(maRequete)
  .then((reponse) => {
    console.log("reponse.status =", reponse.status); // reponse.status = 200
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
