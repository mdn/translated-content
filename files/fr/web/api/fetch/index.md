---
title: GlobalFetch.fetch()
slug: Web/API/fetch
---

{{APIRef("Fetch")}}

La méthode globale **`fetch()`** démarre le chargement d'une ressource sur le réseau et retourne une promesse qui est résolue dès que la réponse est disponible. La promesse résoud l'objet {{domxref("Response")}} représentant la réponse de votre requête. Cette promesse n'échoue pas en cas d'erreur HTTP, elle n'échoue que sur les problèmes de réseau. Vous devez utiliser un gestionnaire `then` pour identifier les erreurs HTTP.

`WindowOrWorkerGlobalScope` est aussi bien implémenté par {{domxref("Window")}} que par {{domxref("WorkerGlobalScope")}}, ce qui signifie que la méthode `fetch()` est disponible dans la plupart des cas où vous pourriez en avoir besoin.

Une promesse {{domxref("GlobalFetch.fetch","fetch()")}} n'est rejetée que quand un problème de réseau est rencontré, même si en réalité cela signifie généralement qu'il y a un problème de permissions ou quelque chose de similaire. La promesse ne sera pas rejetée en cas d'erreur HTTP (`404`, etc.) Pour cela, un gestionnaire `then()` doit vérifier que la propriété {{domxref("Response.ok")}} ait bien pour valeur `true` et/ou la valeur de la propriété {{domxref("Response.status")}}.

La méthode `fetch()` est contrôlée par la directive `connect-src` de l'entête [Content Security Policy](/fr/docs/Web/HTTP/Headers/Content-Security-Policy) plutôt que par la directive de la ressource qui est récupérée.

> **Note :** Les paramètres de la méthode `fetch()` sont identiques à ceux du contructeur d'une {{domxref("Request.Request","Request()")}}.

## Syntaxe

```js
const fetchResponsePromise = Promise<Response> fetch(entrée[, init]);
```

### Paramètres

- `entrée`

  - : Définit la ressource que vous voulez obtenir. Cela peut être :

    - Un {{domxref("USVString")}} qui contient l'URL de la ressource à obtenir. Certains navigateurs acceptent `blob:` et `data:`.
    - Un objet {{domxref("Request")}}.

- `init` {{optional_inline}}

  - : Un objet qui contient les paramètres de votre requête. Les options possibles sont :

    - `method`
      - : La méthode de la requête, par exemple `GET` ou `POST`. Comme spécifié, dans la [spécification WHATWG](https://fetch.spec.whatwg.org/#methods), toute méthode définie dans la [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110#name-overview) sera automatiquement mise en majuscule. Si vous souhaitez utiliser une méthode exotique (comme `PATCH`), vous devrez la mettre en majuscule vous-même. Notez que l'en-tête [`Origin`](/fr/docs/Web/HTTP/Headers/origin) n'était pas défini dans les requêtes `fetch()` avec les méthodes [`HEAD`](/fr/docs/Web/HTTP/Methods/HEAD) ou [`GET`](/fr/docs/Web/HTTP/Methods/GET) à cause d'un bug pour Firefox avant Firefox 65 (voir [bug 1508661](https://bugzil.la/1508661)).
    - `headers`
      - : Les entêtes à ajouter à votre requête, contenues dans un objet {{domxref("Headers")}} ou dans un objet avec des {{domxref("ByteString")}} pour valeurs.
    - `body`
      - : Le corps de votre requête. Cela peut être un {{domxref("Blob")}}, un {{domxref("BufferSource")}}, un {{domxref("FormData")}}, un {{domxref("URLSearchParams")}}, ou un {{domxref("USVString")}}. Notez cependant qu'une requête avec `GET` ou `HEAD` pour méthode ne peut pas avoir de corps.
    - `mode`
      - : Le mode à utiliser pour cette requête, par exemple `cors`, `no-cors`, ou `same-origin.`
    - `credentials`
      - : Les identifiants à utiliser pour cette requête : `omit`, `same-origin`, ou `include`. Pour envoyer automatiquement les cookies pour le domaine actuel, cette option doit être définie. À partir de Chrome 50, cette propriété peut aussi prendre un objet {{domxref("FederatedCredential")}} ou une instance de {{domxref("PasswordCredential")}}.
    - `cache`
      - : Le comportement du cache pour cette requête : `default`, `no-store`, `reload`, `no-cache`, `force-cache`, ou `only-if-cached`.
    - `redirect`
      - : Le mode de redirection à adopter pour cette requête : `follow` (suivre les redirections automatiquement), `error` (abandonner avec une erreur si une redirection a lieu), ou `manual` (gérer les redirections manuellement). Dans Chrome, la valeur par défaut était `follow` avant Chrome 47, mais à partir de cette version, c'est `manual`.
    - `referrer`
      - : Un USVString qui vaut `no-referrer`, `client`, ou qui contient une URL. La valeur par défaut est `client`.
    - `referrerPolicy`
      - : Spécifie la valeur de l'entête HTTP referer. Cela peut être `no-referrer`, `no-referrer-when-downgrade`, `origin`, `origin-when-cross-origin` ou `unsafe-url`.
    - `integrity`
      - : Contient la valeur de [l'intégrité de la sous-ressource](/fr/docs/Web/Security/Subresource_Integrity) de la requête (par exemple, `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
    - `keepalive`
      - : Peut être utilisée pour autoriser la requête à se poursuivre après la fermeture de la page. Une requête avec ce paramètre est équivalente à l'API {{domxref("Navigator.sendBeacon()")}}.
    - `signal`
      - : Une instance de {{domxref("AbortSignal")}} vous permettant de communiquer avec une requête et de l'interrompre si vous le souhaitez via un {{domxref("AbortController")}}.

### Valeur retournée

Une {{domxref("Promise")}} qui se résoud avec un object {{domxref("Response")}}.

### Exceptions

- `AbortError`
  - : La requête a été interrompue à cause d'un appel à la méthode {{domxref("AbortController.abort", "abort()")}} de {{domxref("AbortController")}}.
- `TypeError`
  - : L'URL spécifié inclut des identifiants. Ces informations devraient plutôt être fournises via l'en-tête HTTP {{HTTPHeader("Authorization")}}.

## Exemple

Dans notre [exemple de requête avec fetch](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-request) (voir [cet exemple en direct](http://mdn.github.io/fetch-examples/fetch-request/)) nous créons une nouvelle {{domxref("Request")}} avec le constructeur correspondant, puis on l'envoie en appellant `fetch()`. Comme nous récupérons une image, nous utilisons la méthode {{domxref("Body.blob()")}} sur la réponse pour lui donner le bon type MIME pour qu'elle soit gérée correctement, puis l'on crée l'URL correspondant à cet objet et on l'affiche dans un élément {{htmlelement("img")}}.

```js
const monImage = document.querySelector("img");

let maRequete = new Request("fleurs.jpg");

fetch(maRequete)
  .then(function (reponse) {
    if (!response.ok) {
      throw new Error(`erreur HTTP! statut: ${reponse.status}`);
    }
    return reponse.blob();
  })
  .then(function (reponse) {
    let URLobjet = URL.createObjectURL(reponse);
    monImage.src = URLobjet;
  });
```

Dans notre [exemple fetch avec initialisation et requête](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-with-init-then-request) (voir [cet exemple en direct](http://mdn.github.io/fetch-examples/fetch-with-init-then-request/)) nous faisons la même chose à la différence que nous passons aussi un objet d'initalisation à la méthode `fetch` :

```js
const monImage = document.querySelector('img');

let mesEntetes = new Headers();
mesEntetes.append('Content-Type', 'image/jpeg');

const monInit = { method: 'GET',
               headers: mesEntetes,
               mode: 'cors',
               cache: 'default' };

let maRequete = new Request('fleurs.jpg');

fetch(maRequete, monInit).then(function(reponse) {
  ...
});
```

Notez que vous pouvez aussi passer l'objet d'initialisation au constructeur de la requête pour obtenir le même effet, par exemple :

```js
let maRequete = new Request("fleurs.jpg", monInit);
```

Vous pouvez aussi utiliser un objet litéral comme en-têtes dans votre objet d'initalisation.

```js
const monInit = {
  method: "GET",
  headers: {
    "Content-Type": "image/jpeg",
  },
  mode: "cors",
  cache: "default",
};

let maRequete = new Request("fleurs.jpg", monInit);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Fetch API](/fr/docs/Web/API/Fetch_API)
- [ServiceWorker API](/fr/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/fr/docs/HTTP/Access_control_CORS)
- [HTTP](/fr/docs/HTTP)
