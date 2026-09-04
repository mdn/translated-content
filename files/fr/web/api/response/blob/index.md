---
title: "Response : méthode blob()"
short-title: blob()
slug: Web/API/Response/blob
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`blob()`** de l'interface {{DOMxRef("Response")}} prend le flux de la {{DOMxRef("Response", "réponse", "", 1)}} et le lit jusqu'à la fin. Elle retourne une promesse qui est résolue avec un objet {{DOMxRef("Blob")}}.

## Syntaxe

```js-nolint
blob()
```

### Paramètres

Aucun.

> [!NOTE]
> Si la {{DOMxRef("Response")}} a un {{DOMxRef("Response.type")}} égal à `"opaque"`, le {{DOMxRef("Blob")}} résultant aura une {{DOMxRef("Blob.size")}} de `0` et un {{DOMxRef("Blob.type")}} égal à une chaîne vide `""`, ce qui le rend _inutile_ pour des méthodes comme {{DOMxRef("URL.createObjectURL_static", "URL.createObjectURL()")}}.

### Valeur de retour

Une promesse qui est résolue avec un objet {{DOMxRef("Blob")}} dont les données sont les octets du corps et le type média est la valeur de l'en-tête `Content-Type` de la réponse.

### Exceptions

- `AbortError` {{DOMxRef("DOMException")}}
  - : La requête a été [annulée](/fr/docs/Web/API/Fetch_API/Using_Fetch#annuler_une_requête).
- {{JSxRef("TypeError")}}
  - : Levée pour l'une des raisons suivantes&nbsp;:
    - Le corps de la réponse est [perturbé ou verrouillé](/fr/docs/Web/API/Fetch_API/Using_Fetch#flux_verrouillés_et_perturbés).
    - Une erreur s'est produite lors du décodage du contenu du corps (par exemple, si l'en-tête HTTP {{HTTPHeader("Content-Encoding")}} est incorrect).

## Exemples

Dans notre [exemple de requête de récupération <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) ([voir la requête de récupération en direct <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/fetch/fetch-request/)), nous créons une nouvelle requête à l'aide du constructeur {{DOMxRef("Request.Request","Request()")}}, puis nous l'utilisons pour récupérer un fichier JPG. Lorsque la récupération réussit, nous lisons un objet {{DOMxRef("Blob")}} à partir de la réponse avec `blob()`, nous le plaçons dans une URL d'objet avec {{DOMxRef("URL.createObjectURL_static", "URL.createObjectURL()")}}, puis nous définissons cette URL comme source d'un élément HTML {{HTMLElement("img")}} pour afficher l'image.

```js
const monImage = document.querySelector("img");

const maRequete = new Request("fleurs.jpg");

fetch(maRequete)
  .then((reponse) => reponse.blob())
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
