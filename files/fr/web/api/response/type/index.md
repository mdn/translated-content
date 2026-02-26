---
title: "Response : propriété type"
short-title: type
slug: Web/API/Response/type
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`type`** de l'interface {{DOMxRef("Response")}} contient le type de la réponse. Le type détermine si les scripts peuvent accéder au corps et aux en-têtes de la réponse.

## Valeur

Une chaîne de caractères, qui peut prendre l'une des valeurs suivantes&nbsp;:

- `basic`
  - : Cela s'applique dans l'un des cas suivants&nbsp;:
    - La requête est de même origine.
    - Le schéma de l'URL demandée est [`data:`](/fr/docs/Web/URI/Reference/Schemes/data).
    - Le {{DOMxRef("Request.mode", "mode")}} de la requête est `navigate` ou `websocket`.

    Avec ce type, tous les en-têtes de réponse sont exposés sauf {{HTTPHeader("Set-Cookie")}}.

- `cors`
  - : La requête était cross-origin et a été traitée avec succès à l'aide du [CORS](/fr/docs/Web/HTTP/Guides/CORS). Avec ce type, seuls les {{Glossary("CORS-safelisted response header", "en-têtes de réponse autorisés par CORS")}} sont exposés.
- `error`
  - : Une erreur réseau s'est produite. La propriété {{DOMxRef("Response.status", "status")}} est à `0`, {{DOMxRef("Response.body", "body")}} est `null`, les en-têtes sont vides et immuables.

    C'est le type de réponse retourné par {{DOMxRef("Response.error_static", "Response.error()")}}. Une réponse de ce type n'est pas retournée par un appel à {{DOMxRef("Window.fetch", "fetch()")}}, car si une erreur réseau se produit, la promesse est rejetée.

- `opaque`
  - : Une réponse à une requête cross-origin dont le {{DOMxRef("Request.mode", "mode")}} était défini à `no-cors`. La propriété {{DOMxRef("Response.status", "status")}} est à `0`, {{DOMxRef("Response.body", "body")}} est `null`, les en-têtes sont vides et immuables.
- `opaqueredirect`
  - : Une réponse à une requête dont l'option {{DOMxRef("Request.redirect", "redirect")}} était définie à `manual`, et qui a été redirigée par le serveur. La propriété {{DOMxRef("Response.status", "status")}} est à `0`, {{DOMxRef("Response.body", "body")}} est `null`, les en-têtes sont vides et immuables.

## Exemples

### Une réponse simple

La requête suivante de même origine retournera une réponse `basic`&nbsp;:

```js
const reponse = await fetch("fleurs.jpg");

console.log(reponse.type); // "basic"
```

### Une réponse CORS

En supposant que `https://exemple.org` n'est pas l'origine du demandeur, et que le serveur répond avec les en-têtes CORS appropriés, cette requête retournera une réponse `cors`&nbsp;:

```js
const reponse = await fetch("https://exemple.org/fleurs.jpg");

console.log(reponse.type); // "cors"
```

### Une réponse opaque

La requête suivante est effectuée avec l'option [`no-cors`](/fr/docs/Web/API/Request/mode#no-cors), elle retourne donc une réponse `opaque`&nbsp;:

```js
const reponse = await fetch("https://exemple.org/fleurs.jpg", {
  mode: "no-cors",
});

console.log(reponse.type); // "opaque"
console.log(reponse.body); // null
console.log(reponse.status); // 0
```

### Une réponse error

Le code suivant utilise {{DOMxRef("Response.error_static", "Response.error()")}} pour créer une réponse `error`&nbsp;:

```js
const reponse = Response.error();

console.log(reponse.type); // "error"
console.log(reponse.body); // null
console.log(reponse.status); // 0
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
