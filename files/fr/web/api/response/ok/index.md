---
title: Response.ok
slug: Web/API/Response/ok
tags:
  - API
  - Experimental
  - Fetch
  - Property
  - Reference
  - Response
  - ok
translation_of: Web/API/Response/ok
---
{{APIRef("Fetch")}}

La propriété en lecture seule **`ok`** de l'interface {{domxref("Response")}} contient un booléen correspondant au succès (codes de statut compris entre 200 et 299) ou à l'échec de la réponse.

## Syntaxe

    var myOK = response.ok;

### Valeur

Un {{domxref("Boolean")}}.

## Exemple

Dans [notre exemple](https://github.com/mdn/fetch-examples/tree/master/fetch-response) (voir [la démonstration en ligne](https://mdn.github.io/fetch-examples/fetch-response/)) nous créons un nouvel objet {{domxref("Request")}} en utilisant le constructeur {{domxref("Request.Request","Request()")}} avec le chemin vers un JPG en argument. On récupère (_fetch_ en anglais) ensuite la requête en utilisant {{domxref("GlobalFetch.fetch()")}}, on extrait un _blob_ de la réponse en utilisant {{domxref("Body.blob")}} pour créer un objet URL grâce à {{domxref("URL.createObjectURL")}} et l'afficher dans une balise {{htmlelement("img")}}.

> **Note :** Nous affichons la valeur de la propriété `ok` de la réponse dans la console en haut du bloc `fetch()`.

```js
var myImage = document.querySelector('img');

var myRequest = new Request('flowers.jpg');

fetch(myRequest).then(function(response) {
  console.log(response.ok); // retourne true si la réponse est retournée avec succès
  response.blob().then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
});
```

## Spécifications

| Spécification                                                | Statut                   | Commentaire         |
| ------------------------------------------------------------ | ------------------------ | ------------------- |
| {{SpecName('Fetch','#dom-response-ok','ok')}} | {{Spec2('Fetch')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Response.ok")}}

## Voir aussi

- [API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/CORS)
- [HTTP](/fr/docs/Web/HTTP)
