---
title: "Request : propriété referrer"
short-title: referrer
slug: Web/API/Request/referrer
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`referrer`** de l'interface {{DOMxRef("Request")}} est définie par l'agent utilisateur comme étant le référent de la requête (par exemple, `client`, `no-referrer` ou une URL).

> [!NOTE]
> Si la valeur de `referrer` est `no-referrer`, elle retourne une chaîne de caractères vide.

## Valeur

Une chaîne de caractères représentant le référent de la requête.

## Exemples

Dans l'extrait suivant, nous créons une nouvelle requête à l'aide du constructeur {{DOMxRef("Request.Request", "Request()")}} (pour un fichier image dans le même dossier que le script), puis nous enregistrons le référent de la requête dans une variable&nbsp;:

```js
const maRequete = new Request("fleurs.jpg");
const monReferent = maRequete.referrer; // retourne "about:client" par défaut
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Le contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
