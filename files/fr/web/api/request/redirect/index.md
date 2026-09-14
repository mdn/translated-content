---
title: "Request : propriété redirect"
short-title: redirect
slug: Web/API/Request/redirect
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`redirect`** de l'interface {{DOMxRef("Request")}} contient le mode de gestion des redirections.

## Valeur

Une valeur d'énumération `RequestRedirect`, qui peut être l'une des chaînes de caractères suivantes&nbsp;:

- `follow`
- `error`
- `manual`

Si elle n'est pas définie lors de la création de la requête, la valeur par défaut est `follow`.

## Exemples

Dans l'extrait suivant, nous créons une nouvelle requête à l'aide du constructeur {{DOMxRef("Request.Request", "Request()")}} (pour un fichier image dans le même dossier que le script), puis nous enregistrons la valeur `redirect` de la requête dans une variable&nbsp;:

```js
const maRequete = new Request("fleurs.jpg");
const maRedirection = maRequete.redirect;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Le contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
