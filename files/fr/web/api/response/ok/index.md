---
title: "Response : propriété ok"
short-title: ok
slug: Web/API/Response/ok
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`ok`** de l'interface {{DOMxRef("Response")}} contient un booléen indiquant si la réponse a réussi (statut dans la plage 200 à 299) ou non.

## Valeur

Une valeur booléenne.

## Exemples

Dans notre [exemple de réponse Fetch <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (voir [la réponse Fetch en direct <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/fetch/fetch-response/)), nous créons un nouvel objet {{DOMxRef("Request")}} à l'aide du constructeur {{DOMxRef("Request.Request","Request()")}}, auquel nous passons le chemin d'un fichier JPG.
Nous récupérons ensuite cette requête avec {{DOMxRef("Window/fetch", "fetch()")}}, extrayons un blob de la réponse avec {{DOMxRef("Response.blob")}}, créons une URL d'objet à partir de ce blob avec {{DOMxRef("URL.createObjectURL_static", "URL.createObjectURL()")}}, et affichons cette image dans un élément HTML {{HTMLElement("img")}}.

> [!NOTE]
> Au début du bloc `fetch()`, nous affichons la valeur de `ok` de la réponse dans la console.

```js
const monImage = document.querySelector("img");

const maRequete = new Request("fleurs.jpg");

fetch(maRequete).then((reponse) => {
  console.log(reponse.ok); // retourne true si la réponse a été renvoyée avec succès
  reponse.blob().then((monBlob) => {
    const urlObjet = URL.createObjectURL(monBlob);
    monImage.src = urlObjet;
  });
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
