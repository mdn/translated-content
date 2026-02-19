---
title: "Response : constructeur Response()"
short-title: Response()
slug: Web/API/Response/Response
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Le constructeur **`Response()`** crée un nouvel objet {{DOMxRef("Response")}}.

## Syntaxe

```js-nolint
new Response()
new Response(body)
new Response(body, options)
```

### Paramètres

- `body` {{Optional_Inline}}
  - : Un objet définissant un corps pour la réponse. Cela peut être `null` (valeur par défaut), ou l'un des éléments suivants&nbsp;:
    - {{DOMxRef("Blob")}}
    - {{JSxRef("ArrayBuffer")}}
    - {{JSxRef("TypedArray")}}
    - {{JSxRef("DataView")}}
    - {{DOMxRef("FormData")}}
    - {{DOMxRef("ReadableStream")}}
    - {{DOMxRef("URLSearchParams")}}
    - {{JSxRef("String")}}
    - une chaîne de caractères littérale

- `options` {{Optional_Inline}}
  - : Un objet d'options contenant les paramètres personnalisés à appliquer à la réponse, ou un objet vide (valeur par défaut). Les options possibles sont&nbsp;:
    - `status`
      - : Le code de statut de la réponse.
        La valeur par défaut est `200`.
    - `statusText`
      - : Le message de statut associé au code de statut, tel que `"OK"`.
        La valeur par défaut est `""`.
    - `headers`
      - : Tous les en-têtes que vous souhaitez ajouter à votre réponse, contenus dans un objet {{DOMxRef("Headers")}} ou un objet littéral de paires clé/valeur de {{JSxRef("String")}} (voir la [référence des en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)).
        Par défaut, ceci est vide.

## Exemples

Dans notre [exemple Fetch Response <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (voir [l'exécution en direct <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/fetch/fetch-response/)),
nous créons un nouvel objet `Response` à l'aide du constructeur, en lui passant un nouveau {{DOMxRef("Blob")}} comme corps, et un objet d'initialisation contenant un `status` et un `statusText` personnalisés&nbsp;:

```js
const monBlob = new Blob();
const mesOptions = { status: 200, statusText: "Super Puissant !" };
const maResponse = new Response(monBlob, mesOptions);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
