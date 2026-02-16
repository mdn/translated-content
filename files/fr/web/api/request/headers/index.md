---
title: "Request : propriété headers"
short-title: headers
slug: Web/API/Request/headers
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`headers`** de l'interface {{DOMxRef("Request")}} contient l'objet {{DOMxRef("Headers")}} associé à la requête.

## Valeur

Un objet {{DOMxRef("Headers")}}.

## Exemples

Dans l'extrait suivant, nous créons une nouvelle requête à l'aide du constructeur {{DOMxRef("Request.Request", "Request()")}} (pour un fichier image dans le même répertoire que le script), puis nous enregistrons les en-têtes de la requête dans une variable&nbsp;:

```js
const maRequete = new Request("fleurs.jpg");
const mesEnTetes = maRequete.headers; // Headers {}
```

Pour ajouter un en-tête à l'objet {{DOMxRef("Headers")}}, nous utilisons {{DOMxRef("Headers.append")}}&nbsp;; nous créons ensuite une nouvelle `Request` avec un second paramètre d'initialisation, en passant les en-têtes dans l'option init&nbsp;:

```js
const mesEnTetes = new Headers();
mesEnTetes.append("Content-Type", "image/jpeg");

const monInit = {
  method: "GET",
  headers: mesEnTetes,
  mode: "cors",
  cache: "default",
};

const maRequete = new Request("fleurs.jpg", monInit);

const monContentType = maRequete.headers.get("Content-Type"); // retourne 'image/jpeg'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
