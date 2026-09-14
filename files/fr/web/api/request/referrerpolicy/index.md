---
title: "Request : propriété referrerPolicy"
short-title: referrerPolicy
slug: Web/API/Request/referrerPolicy
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`referrerPolicy`** de l'interface {{DOMxRef("Request")}} retourne la politique de référent, qui détermine quelles informations de référent, envoyées dans l'en-tête {{HTTPHeader("Referer")}}, doivent être incluses avec la requête.

## Valeur

Une chaîne de caractères représentant la propriété `referrerPolicy` de la requête. Pour plus d'informations et les valeurs possibles, voir la page de l'en-tête HTTP {{HTTPHeader("Referrer-Policy")}}.

## Exemples

Dans l'extrait suivant, nous créons une nouvelle requête à l'aide du constructeur {{DOMxRef("Request.Request", "Request()")}} (pour un fichier image dans le même dossier que le script), puis nous enregistrons la politique de référent de la requête dans une variable&nbsp;:

```js
const maRequete = new Request("fleurs.jpg");
const maPolitiqueReferent = maRequete.referrerPolicy; // retourne "" par défaut
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Le contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
