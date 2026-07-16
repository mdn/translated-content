---
title: "Request : propriété url"
short-title: url
slug: Web/API/Request/url
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`url`** de l'interface {{DOMxRef("Request")}} contient l'URL de la requête.

## Valeur

Une chaîne de caractères indiquant l'URL de la requête.

## Exemples

Dans l'extrait suivant, nous créons une nouvelle requête à l'aide du constructeur {{DOMxRef("Request.Request", "Request()")}} (pour un fichier image dans le même dossier que le script), puis nous enregistrons l'URL de la requête dans une variable&nbsp;:

```js
const maRequete = new Request("flowers.jpg");
const monURL = maRequete.url; // "https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request/flowers.jpg"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Le contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
