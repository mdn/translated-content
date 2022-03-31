---
title: Request()
slug: Web/API/Request/Request
tags:
  - API
  - Constructeur
  - Experimental
  - Fetch
  - Reference
  - request
translation_of: Web/API/Request/Request
---
{{APIRef("Fetch API")}}

Le constructeur **`Request()`** crée un nouvel objet {{domxref("Request")}}.

## Syntaxe

    var maRequete = new Request(entree[, init]);

### Paramètres

- _entree_

  - : Définit la ressource que vous souhaitez récupérer. Cela peut être soit :

    - Une {{domxref("USVString")}} contenant l'URL directe de la ressource que vous voulez récupérer.
    - Un objet {{domxref("Request")}}, ce qui crée en fait une copie. Notez les mises à jour de comportement suivantes pour conserver la sécurité, tout en rendant le constructeur moins susceptible de déclencher des exceptions :

      - Si cet objet existe depuis une autre origine lors de l'appel du constructeur, le {{domxref("Request.referrer")}} est enlevé.
      - Si cet objet a un {{domxref("Request.mode")}} à `navigate`, la valeur de `mode` est convertie en `same-origin`.

- _init_ {{optional_inline}}

  - : Un objet d'options contenant tous les paramètres personnalisés que vous voulez appliquer à la requête. Les options possibles sont :

    - `method`: La méthode de la requête, par ex., `GET`, `POST`.
    - `headers`: Tous les entêtes que vous voulez ajouter à votre requête, contenus dans un objet {{domxref("Headers")}} ou un littéral d'objet avec des valeurs {{domxref("ByteString")}}.
    - `body`: Tout corps que vous voulez ajouter à votre requête : cela peut être un objet {{domxref ("Blob")}}, {{domxref ("BufferSource")}}, {{domxref ("FormData")}}, {{domxref ("URLSearchParams")}}, {{domxref ("USVString")}} ou {{domxref ("ReadableStream")}}. Notez qu'une requête utilisant la méthode GET ou HEAD ne peut pas avoir de corps .
    - `mode`: Le mode que vous souhaitez utiliser pour la requête, par exemple, `cors`, `no-cors`, `same-origin`, ou `navigate`. La valeur par défaut est `cors`. Dans Chrome, la valeur par défaut est `no-cors` avant Chrome 47 et `same-origin` à partir de Chrome 47.
    - `credentials`: Les informations d'authentification de requête que vous souhaitez utiliser pour la requête : `omit`, `same-origin`, ou `include`. La valeur par défaut est `omit`. Dans Chrome, la valeur par défaut est `same-origin` avant Chrome 47 et `include` à partir de Chrome 47.
    - `cache`: Le [mode de cache](/en-US/docs/Web/API/Request/cache) que vous voulez utiliser pour la requête.
    - `redirect`: Le mode de redirection à utiliser : `follow`, `error`, ou `manual`. Dans Chrome, le défaut est `manual` avant Chrome 47 et `follow` à partir de Chrome 47.
    - `referrer`: Une {{domxref("USVString")}} indiquant `no-referrer`, `client`, ou une URL. La valeur par défaut est `client`.
    - `integrity`: Contient la valeur d'[intégrité de la sous ressource](/en-US/docs/Web/Security/Subresource_Integrity) de la requête (par ex.., `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).

## Erreurs

| **Type**    | **Description**                                                                                                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TypeError` | Depuis [Firefox 43](/en-US/docs/Mozilla/Firefox/Releases/43), `Request()` déclenchera une TypeError si l'URL contient des informations d'authentification, comme dans http://user:password@example.com. |

## Exemple

Dans notre [exemple de Fetch Request](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-request) (voir [Fetch Request en direct](http://mdn.github.io/fetch-examples/fetch-request/)), nous créons un nouvel objet `Request` en utilisant le constructeur, puis nous le récupérons en utilisant un appel à {{domxref ("GlobalFetch.fetch")}}. Puisque nous récupérons une image, nous lançons {{domxref ("Body.blob")}} sur la réponse pour lui donner le bon type MIME afin qu'il soit géré correctement, puis nous en créons une

Object URL et nous l'affichons dans un élément {{htmlelement ("img")}}.

```js
var monImage = document.querySelector('img');

var maRequete = new Request('fleurs.jpg');

fetch(maRequete).then(function(reponse) {
  return reponse.blob();
}).then(function(reponse) {
  var URLdobjet = URL.createObjectURL(reponse);
  monImage.src = URLdobjet;
});
```

Dans notre [exemple de Fetch Request avec init](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-request-with-init) (see [Fetch Request init en direct](http://mdn.github.io/fetch-examples/fetch-request-with-init/)), nous faisons la même chose, excepté que nous passons un objet init quand nous invoquons `fetch()`:

```js
var monImage = document.querySelector('img');

var mesEntetes = new Headers();
mesEntetes.append('Content-Type', 'image/jpeg');

var monInit = { method: 'GET',
               headers: mesEntetes,
               mode: 'cors',
               cache: 'default' };

var maRequete = new Request('fleurs.jpg',monInit);

fetch(maRequete).then(function(reponse) {
  ...
});
```

Notez que vos pouvez aussi passer l'objet init dans l'appel à `fetch` pour obtenir le même résultat, par ex. :

```js
fetch(maRequete,monInit).then(function(reponse) {
  ...
});
```

Vous pouvez aussi utilier un littéral d'objet tel que `headers` dans `init`.

```js
var monInit = { method: 'GET',
               headers: {
                   'Content-Type': 'image/jpeg'
               },
               mode: 'cors',
               cache: 'default' };

var maRequete = new Request('fleurs.jpg', monInit);
```

Vous pouvez aussi passer un objet {{domxref("Request")}} au constructeur `Request()` pour créer une copie de la Request (c'est similaire au fait d'appeler la méthode {{domxref("Request.clone","clone()")}}).

    var copie = new Request(maRequete);

> **Note :** Cette dernière utilisation n'est probablement utile que dans [ServiceWorkers](/en-US/docs/Web/API/ServiceWorker_API).

## Spécifications

| Spécification                                                    | Statut                   | Commentaire |
| ---------------------------------------------------------------- | ------------------------ | ----------- |
| {{SpecName('Fetch','#dom-request','Request()')}} | {{Spec2('Fetch')}} |             |

## Compatibilité des navigateurs

{{Compat("api.Request.Request")}}

## Voir aussi

- [L'API ServiceWorker](/en-US/docs/Web/API/ServiceWorker_API)
- [Le contrôle d'accès HTTP (CORS)](/en-US/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/en-US/docs/Web/HTTP)
