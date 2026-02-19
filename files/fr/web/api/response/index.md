---
title: Response
slug: Web/API/Response
l10n:
  sourceCommit: 252040efa8f6ca0f737fd7ec04e610354e58b98c
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

L'interface **`Response`** de [l'API Fetch](/fr/docs/Web/API/Fetch_API) représente la réponse à une requête.

Vous pouvez créer un nouvel objet `Response` à l'aide du constructeur {{DOMxRef("Response.Response", "Response()")}}, mais vous rencontrerez plus souvent un objet `Response` retourné à la suite d'une autre opération d'API — par exemple, un service worker {{DOMxRef("FetchEvent.respondWith")}}, ou un simple {{DOMxRef("Window/fetch", "fetch()")}}.

## Constructeur

- {{DOMxRef("Response.Response","Response()")}}
  - : Crée un nouvel objet `Response`.

## Propriétés d'instance

- {{DOMxRef("Response.body")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("ReadableStream")}} contenant le corps de la réponse.
- {{DOMxRef("Response.bodyUsed")}} {{ReadOnlyInline}}
  - : Contient un booléen indiquant si le corps a déjà été utilisé dans une réponse.
- {{DOMxRef("Response.headers")}} {{ReadOnlyInline}}
  - : L'objet {{DOMxRef("Headers")}} associé à la réponse.
- {{DOMxRef("Response.ok")}} {{ReadOnlyInline}}
  - : Un booléen indiquant si la réponse a réussi (statut dans la plage `200` à `299`) ou non.
- {{DOMxRef("Response.redirected")}} {{ReadOnlyInline}}
  - : Indique si la réponse résulte d'une redirection (c'est-à-dire si sa liste d'URL comporte plus d'une entrée).
- {{DOMxRef("Response.status")}} {{ReadOnlyInline}}
  - : Le code d'état de la réponse. (Ce sera `200` en cas de succès).
- {{DOMxRef("Response.statusText")}} {{ReadOnlyInline}}
  - : Le message d'état correspondant au code d'état. (par exemple, `OK` pour `200`).
- {{DOMxRef("Response.type")}} {{ReadOnlyInline}}
  - : Le type de la réponse (par exemple, `basic`, `cors`).
- {{DOMxRef("Response.url")}} {{ReadOnlyInline}}
  - : L'URL de la réponse.

## Méthodes statiques

- {{DOMxRef("Response.error_static","Response.error()")}}
  - : Retourne un nouvel objet `Response` associé à une erreur réseau.
- {{DOMxRef("Response.redirect_static", "Response.redirect()")}}
  - : Retourne une nouvelle réponse avec une URL différente.
- {{DOMxRef("Response.json_static", "Response.json()")}}
  - : Retourne un nouvel objet `Response` permettant de retourner les données JSON encodées fournies.

## Méthodes d'instance

- {{DOMxRef("Response.arrayBuffer()")}}
  - : Retourne une promesse qui est résolue avec une représentation du corps de la réponse sous forme d'un objet {{JSxRef("ArrayBuffer")}}.
- {{DOMxRef("Response.blob()")}}
  - : Retourne une promesse qui est résolue avec une représentation du corps de la réponse sous forme d'un objet {{DOMxRef("Blob")}}.
- {{DOMxRef("Response.bytes()")}}
  - : Retourne une promesse qui est résolue avec une représentation du corps de la réponse sous forme d'un objet {{JSxRef("Uint8Array")}}.
- {{DOMxRef("Response.clone()")}}
  - : Crée un clone d'un objet `Response`.
- {{DOMxRef("Response.formData()")}}
  - : Retourne une promesse qui est résolue avec une représentation du corps de la réponse sous forme d'un objet {{DOMxRef("FormData")}}.
- {{DOMxRef("Response.json()")}}
  - : Retourne une promesse qui est résolue avec le résultat de l'analyse du texte du corps de la réponse comme du {{JSxRef("JSON")}}.
- {{DOMxRef("Response.text()")}}
  - : Retourne une promesse qui est résolue avec une représentation textuelle du corps de la réponse.

## Exemples

### Récupérer une image

Dans notre [exemple basique sur la récupération <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/fetch/basic-fetch) ([voir l'exemple en direct <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/fetch/basic-fetch/)), nous utilisons un simple appel à la fonction `fetch()` pour obtenir une image et l'afficher dans un élément HTML {{HTMLElement("img")}}.
L'appel `fetch()` retourne une promesse, qui est résolue avec l'objet `Response` associé à l'opération de récupération de la ressource.

Vous remarquerez que, puisque nous demandons une image, nous devons utiliser {{DOMxRef("Response.blob")}} pour donner à la réponse son type MIME correct.

```js
const image = document.querySelector(".mon-image");
fetch("fleurs.jpg")
  .then((reponse) => {
    if (!reponse.ok) {
      throw new Error(`Erreur HTTP ! statut : ${reponse.status}`);
    }
    return reponse.blob();
  })
  .then((blob) => {
    const urlObjet = URL.createObjectURL(blob);
    image.src = urlObjet;
  })
  .catch((erreur) => {
    console.error("Erreur de récupération de l'image :", erreur);
  });
```

Vous pouvez également utiliser le constructeur {{DOMxRef("Response.Response", "Response()")}} pour créer votre propre objet `Response` personnalisé&nbsp;:

```js
const reponse = new Response();
```

### Appel à un fichier PHP

Ici, nous appelons un fichier programme PHP qui génère une chaîne JSON, affichant le résultat en tant que valeur JSON.

```js
// Fonction pour récupérer du JSON en utilisant PHP
const getJSON = async () => {
  // Générer l'objet Response
  const reponse = await fetch("getJSON.php");
  if (reponse.ok) {
    // Obtenir la valeur JSON à partir du corps de la réponse
    return reponse.json();
  }
  throw new Error("*** Fichier PHP introuvable");
};

// Appeler la fonction et afficher la valeur ou le message d'erreur dans la console
getJSON()
  .then((resultat) => console.log(resultat))
  .catch((erreur) => console.error(erreur));
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
