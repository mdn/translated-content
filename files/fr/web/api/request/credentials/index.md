---
title: "Request : propriété credentials"
short-title: credentials
slug: Web/API/Request/credentials
l10n:
  sourceCommit: 4c442059c45e50cd19c024edd0ed76693df27191
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`credentials`** de l'interface {{DOMxRef("Request")}} reflète la valeur donnée au constructeur {{DOMxRef("Request.Request()", "Request()")}} dans l'option [`credentials`](/fr/docs/Web/API/RequestInit#credentials). Elle détermine si le navigateur envoie ou non des informations d'identification avec la requête, ainsi que si les en-têtes de réponse **`Set-Cookie`** sont pris en compte.

Les informations d'identification sont des cookies, des certificats client {{Glossary("TLS")}}, ou des en-têtes d'authentification contenant un nom d'utilisateur et un mot de passe.

Voir [Inclure les informations d'identification](/fr/docs/Web/API/Fetch_API/Using_Fetch#inclure_les_identifiants) pour plus de détails.

## Valeur

Une chaîne de caractères avec l'une des valeurs suivantes&nbsp;:

- `omit`
  - : N'envoie jamais d'informations d'identification dans la requête et n'inclut jamais d'informations d'identification dans la réponse.
- `same-origin`
  - : N'envoie et n'inclut les informations d'identification que pour les requêtes de même origine.
    C'est la valeur par défaut.
- `include`
  - : Inclut toujours les informations d'identification, même pour les requêtes inter-origines.

## Exemples

Dans l'extrait de code suivant, nous créons une nouvelle requête à l'aide du constructeur {{DOMxRef("Request.Request", "Request()")}} (pour un fichier image dans le même répertoire que le script), puis nous enregistrons les identifiants de la requête dans une variable&nbsp;:

```js
const requete = new Request("fleurs.jpg");
const identifiants = requete.credentials; // retourne "same-origin" par défaut
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
