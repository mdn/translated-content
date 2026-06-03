---
title: "Request : constructeur Request()"
short-title: Request()
slug: Web/API/Request/Request
l10n:
  sourceCommit: f6e66d18205c93fcaeb2ea9ad51541b5b4d7d2b1
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Le constructeur **`Request()`** crée un nouvel objet {{DOMxRef("Request")}}.

## Syntaxe

```js-nolint
new Request(input)
new Request(input, options)
```

### Paramètres

- `input`
  - : Définit la ressource que vous souhaitez récupérer. Cela peut être&nbsp;:
    - Une chaîne de caractères contenant l'URL de la ressource que vous souhaitez récupérer. L'URL peut être relative à l'URL de base, qui est le {{DOMxRef("Node.baseURI", "baseURI")}} du document dans un contexte de fenêtre, ou {{DOMxRef("WorkerGlobalScope.location")}} dans un contexte de worker.
    - Un objet {{DOMxRef("Request")}}, créant effectivement une copie. Notez les mises à jour comportementales suivantes pour conserver la sécurité tout en rendant le constructeur moins susceptible de produire des exceptions&nbsp;:
      - Si cet objet existe sur une autre origine que l'appel du constructeur, le {{DOMxRef("Request.referrer")}} est supprimé.
      - Si cet objet a un {{DOMxRef("Request.mode")}} de `navigate`, la valeur de `mode` est convertie en `same-origin`.

- `options` {{Optional_Inline}}
  - : Un objet {{DOMxRef("RequestInit")}} contenant tous les paramètres personnalisés que vous souhaitez appliquer à la requête.

    Si vous construisez un nouveau `Request` à partir d'un `Request` existant, toutes les options que vous définissez dans un argument _options_ pour la nouvelle requête remplacent toutes les options correspondantes définies dans le `Request` d'origine. Par exemple&nbsp;:

    ```js
    const ancienneRequete = new Request(
      "https://github.com/mdn/content/issues/12959",
      { headers: { From: "webmaster@exemple.org" } },
    );
    ancienneRequete.headers.get("From"); // "webmaster@exemple.org"
    const nouvelleRequete = new Request(ancienneRequete, {
      headers: { From: "developer@exemple.org" },
    });
    nouvelleRequete.headers.get("From"); // "developer@exemple.org"
    ```

### Exceptions

- `NotAllowedError` {{DOMxRef("DOMException")}}
  - : Levée si&nbsp;:
    - L'utilisation de la [Topics API](/fr/docs/Web/API/Topics_API) est explicitement interdite par une {{HTTPHeader("Permissions-Policy/browsing-topics","browsing-topics")}} [politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy), et `browsingTopics` est défini à `true`.
    - L'utilisation des opérations de [l'API Private State Token](/fr/docs/Web/API/Private_State_Token_API) est explicitement interdite par une {{HTTPHeader("Permissions-Policy/private-state-token-issuance","private-state-token-issuance")}} ou {{HTTPHeader("Permissions-Policy/private-state-token-redemption","private-state-token-redemption")}} [politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy), et l'option `privateToken` est définie, y compris un type d'opération `privateToken.operation` non autorisé.
- `TypeError`
  - : Levée si&nbsp;:
    - L'URL contient des identifiants, comme `http://utilisateur:motdepasse@exemple.com`, ou ne peut pas être analysée.
    - L'option d'initialisation `privateToken` est définie, y compris un type `privateToken.operation` de `send-redemption-record`, et le tableau `privateToken.issues` était vide ou non défini, ou un ou plusieurs des `issuers` définis ne sont pas des URL HTTPS de confiance.

## Exemple

Dans notre [exemple de requête Fetch <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (voir [l'exemple en direct de requête Fetch <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/fetch/fetch-request/)), nous créons un nouvel objet `Request` à l'aide du constructeur, puis nous le récupérons à l'aide d'un appel à {{DOMxRef("Window/fetch", "fetch()")}}.
Comme nous récupérons une image, nous utilisons {{DOMxRef("Response.blob")}} sur la réponse pour lui donner le type MIME approprié afin qu'elle soit correctement traitée, puis nous créons une URL d'objet à partir de celle-ci et l'affichons dans un élément HTML {{HTMLElement("img")}}.

```js
const monImage = document.querySelector("img");
const maRequete = new Request("fleurs.jpg");

fetch(maRequete)
  .then((reponse) => reponse.blob())
  .then((reponse) => {
    const urlObjet = URL.createObjectURL(reponse);
    monImage.src = urlObjet;
  });
```

Dans notre [exemple de requête Fetch avec initialisation <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init) (voir [l'exemple en direct de requête Fetch avec initialisation <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init/)), nous faisons la même chose sauf que nous passons un objet _options_ lors de l'appel à `fetch()`.
Dans ce cas, nous pouvons définir une valeur {{HTTPHeader("Cache-Control")}} pour indiquer le type de réponses en cache que nous acceptons&nbsp;:

```js
const monImage = document.querySelector("img");
const entetesRequete = new Headers();

// Une réponse en cache est acceptable sauf si elle a plus d'une semaine.
entetesRequete.set("Cache-Control", "max-age=604800");

const options = {
  headers: entetesRequete,
};

// Passer init comme un objet "options" avec nos en-têtes
const requete = new Request("fleurs.jpg", options);

fetch(requete).then((reponse) => {
  // …
});
```

Notez que vous pouvez également passer `options` dans l'appel à `fetch` pour obtenir le même effet, par exemple&nbsp;:

```js
fetch(requete, options).then((reponse) => {
  // …
});
```

Vous pouvez également utiliser un objet littéral comme `headers` dans `options`.

```js
const options = {
  headers: {
    "Cache-Control": "max-age=60480",
  },
};

const requete = new Request("fleurs.jpg", options);
```

Vous pouvez également passer un objet {{DOMxRef("Request")}} au constructeur `Request()` pour créer une copie de la requête (Ceci est similaire à l'appel de la méthode {{DOMxRef("Request.clone","clone()")}}).

```js
const copie = new Request(req);
```

> [!NOTE]
> Cette dernière utilisation n'est probablement utile que dans les [ServiceWorkers](/fr/docs/Web/API/Service_Worker_API).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Le contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
