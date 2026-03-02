---
title: Request
slug: Web/API/Request
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

L'interface **`Request`** de [l'API Fetch](/fr/docs/Web/API/Fetch_API) représente une demande de ressource.

Vous pouvez créer un nouvel objet `Request` à l'aide du constructeur {{DOMxRef("Request.Request","Request()")}}, mais il est plus courant de rencontrer un objet `Request` retourné à la suite d'une opération d'une autre API, comme un service worker {{DOMxRef("FetchEvent.request")}}.

## Constructeur

- {{DOMxRef("Request.Request", "Request()")}}
  - : Crée un nouvel objet `Request`.

## Propriétés d'instance

- {{DOMxRef("Request.body")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("ReadableStream")}} du contenu du corps.
- {{DOMxRef("Request.bodyUsed")}} {{ReadOnlyInline}}
  - : Stocke `true` ou `false` pour indiquer si le corps a déjà été utilisé dans une requête.
- {{DOMxRef("Request.cache")}} {{ReadOnlyInline}}
  - : Contient le mode de cache de la requête (par exemple&nbsp;: `default`, `reload`, `no-cache`).
- {{DOMxRef("Request.credentials")}} {{ReadOnlyInline}}
  - : Contient une valeur contrôlant si les identifiants doivent être inclus dans la requête (par exemple&nbsp;: `omit`, `same-origin`, `include`). La valeur par défaut est `same-origin`.
- {{DOMxRef("Request.destination")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères décrivant le type de contenu demandé.
- {{DOMxRef("Request.duplex")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Le mode duplex de la requête, qui détermine si le navigateur doit envoyer la requête entière avant de traiter la réponse.
- {{DOMxRef("Request.headers")}} {{ReadOnlyInline}}
  - : Contient l'objet {{DOMxRef("Headers")}} associé à la requête.
- {{DOMxRef("Request.integrity")}} {{ReadOnlyInline}}
  - : Contient la valeur [d'intégrité de la sous-ressource](/fr/docs/Web/Security/Defenses/Subresource_Integrity) de la requête (par exemple&nbsp;: `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
- {{DOMxRef("Request.isHistoryNavigation")}} {{ReadOnlyInline}}
  - : Un booléen indiquant si la requête est une navigation dans l'historique.
- {{DOMxRef("Request.keepalive")}} {{ReadOnlyInline}}
  - : Contient le paramètre `keepalive` de la requête (`true` ou `false`), qui indique si le navigateur gardera la requête associée active si la page qui l'a initiée est déchargée avant la fin de la requête.
- {{DOMxRef("Request.method")}} {{ReadOnlyInline}}
  - : Contient la méthode de la requête (`GET`, `POST`, etc.).
- {{DOMxRef("Request.mode")}} {{ReadOnlyInline}}
  - : Contient le mode de la requête (par exemple&nbsp;: `cors`, `no-cors`, `same-origin`, `navigate`).
- {{DOMxRef("Request.redirect")}} {{ReadOnlyInline}}
  - : Contient le mode de gestion des redirections. Il peut s'agir de `follow`, `error` ou `manual`.
- {{DOMxRef("Request.referrer")}} {{ReadOnlyInline}}
  - : Contient le référent de la requête (par exemple&nbsp;: `client`).
- {{DOMxRef("Request.referrerPolicy")}} {{ReadOnlyInline}}
  - : Contient la politique de référent de la requête (par exemple&nbsp;: `no-referrer`).
- {{DOMxRef("Request.signal")}} {{ReadOnlyInline}}
  - : Retourne le signal {{DOMxRef("AbortSignal")}} associé à la requête.
- {{DOMxRef("Request.url")}} {{ReadOnlyInline}}
  - : Contient l'URL de la requête.

## Méthodes d'instance

- {{DOMxRef("Request.arrayBuffer()")}}
  - : Retourne une promesse qui se résout avec une représentation {{JSxRef("ArrayBuffer")}} du corps de la requête.
- {{DOMxRef("Request.blob()")}}
  - : Retourne une promesse qui se résout avec une représentation {{DOMxRef("Blob")}} du corps de la requête.
- {{DOMxRef("Request.bytes()")}}
  - : Retourne une promesse qui se résout avec une représentation {{JSxRef("Uint8Array")}} du corps de la requête.
- {{DOMxRef("Request.clone()")}}
  - : Crée une copie de l'objet `Request` actuel.
- {{DOMxRef("Request.formData()")}}
  - : Retourne une promesse qui se résout avec une représentation {{DOMxRef("FormData")}} du corps de la requête.
- {{DOMxRef("Request.json()")}}
  - : Retourne une promesse qui se résout avec le résultat de l'analyse du corps de la requête en tant que {{JSxRef("JSON")}}.
- {{DOMxRef("Request.text()")}}
  - : Retourne une promesse qui se résout avec une représentation texte du corps de la requête.

> [!NOTE]
> Les fonctions du corps de la requête ne peuvent être exécutées qu'une seule fois&nbsp;; les appels suivants seront rejetés avec un TypeError indiquant que le flux du corps a déjà été utilisé.

## Exemples

Dans l'extrait de code suivant, nous créons une nouvelle requête à l'aide du constructeur `Request()` (pour un fichier image dans le même répertoire que le script), puis nous retournons certaines valeurs de propriété de la requête&nbsp;:

```js
const request = new Request("https://www.mozilla.org/favicon.ico");

const url = request.url;
const method = request.method;
const credentials = request.credentials;
```

Vous pouvez ensuite récupérer cette requête en passant l'objet `Request` en paramètre à un appel {{DOMxRef("Window/fetch", "fetch()")}}, par exemple&nbsp;:

```js
fetch(request)
  .then((response) => response.blob())
  .then((blob) => {
    image.src = URL.createObjectURL(blob);
  });
```

Dans l'extrait de code suivant, nous créons une nouvelle requête à l'aide du constructeur `Request()` avec des données initiales et du contenu de corps pour une requête API qui nécessite une charge utile de corps&nbsp;:

```js
const request = new Request("https://exemple.com", {
  method: "POST",
  body: '{"toto": "tata"}',
});

const url = request.url;
const method = request.method;
const credentials = request.credentials;
const bodyUsed = request.bodyUsed;
```

> [!NOTE]
> Le corps ne peut être qu'un objet {{DOMxRef("Blob")}}, {{JSxRef("ArrayBuffer")}}, {{JSxRef("TypedArray")}}, {{JSxRef("DataView")}}, {{DOMxRef("FormData")}}, {{DOMxRef("URLSearchParams")}}, {{DOMxRef("ReadableStream")}}, ou un objet {{JSxRef("String")}}, ainsi qu'une chaîne de caractères littérale, donc pour ajouter un objet JSON à la charge utile, vous devez transformer cet objet en chaîne de caractères.

Vous pouvez ensuite effectuer cette requête API en passant l'objet `Request` en paramètre à un appel {{DOMxRef("Window/fetch", "fetch()")}}, par exemple, et obtenir la réponse&nbsp;:

```js
fetch(request)
  .then((response) => {
    if (response.status !== 200) {
      throw new Error("Quelque chose s'est mal passé sur le serveur API !");
    }
    return response.json();
  })
  .then((response) => {
    console.debug(response);
    // …
  })
  .catch((error) => {
    console.error(error);
  });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- [HTTP](/fr/docs/Web/HTTP)
