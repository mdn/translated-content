---
title: "Request : propriété method"
short-title: method
slug: Web/API/Request/method
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`method`** de l'interface {{DOMxRef("Request")}} contient la méthode de la requête (`GET`, `POST`, etc.).

## Valeur

Une chaîne de caractères ({{JSxRef("String")}}) indiquant la méthode de la requête.

## Exemples

Dans l'extrait suivant, nous créons une nouvelle requête à l'aide du constructeur {{DOMxRef("Request.Request", "Request()")}} (pour un fichier image dans le même répertoire que le script), puis nous enregistrons la méthode de la requête dans une variable&nbsp;:

```js
const maRequete = new Request("fleurs.jpg");
const maMethode = maRequete.method; // GET
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
