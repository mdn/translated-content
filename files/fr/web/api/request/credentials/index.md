---
title: Request.credentials
slug: Web/API/Request/credentials
---

{{APIRef("Fetch")}}

La propriété en lecture seule **`credentials`**, de l'interface {{domxref("Request")}}, indique si l'agent utilisateur doit envoyer des cookies de l'autre domaine dans le cas de requêtes CORS. Ceci est similaire au flag `withCredentials` de XHR, mais peut prendre trois valeurs possibles (contre deux pour XHR) :

- `omit` : ne jamais envoyer de cookies.
- `same-origin` : envoyer les identifiants utilisateur (cookies, authentification HTTP simple, etc.) si l'URL a la même origine que le script. **C'est la valeur par défaut.**
- `include` : toujours envoyer les identifiants utilisateur (cookies, authentification HTTP simple, etc.) même lorsque l'origine de l'URL est différente.

## Syntaxe

```js
var myCred = request.credentials;
```

### Valeur

Une valeur {{domxref("RequestCredentials")}} qui représente les informations d'authentification utilisées pour cette transaction.

## Exemples

Dans le morceau de code suivant, on crée une nouvelle requête en utilisant le constructeur {{domxref("Request.Request()")}} (pour un fichier image dans le même dossier que le script), puis on enregistre les identifiants de la requête dans une variable:

```js
var myRequest = new Request("flowers.jpg");
var myCred = myRequest.credentials; // renvoie "same-origin" par défaut
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/ServiceWorker_API)
- [Contrôle d'accès HTTP avec les origines (CORS)](/fr/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/fr/docs/Web/HTTP)
