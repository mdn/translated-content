---
title: "Raison : Redirection externe de la requête CORS non autorisée"
slug: Web/HTTP/Guides/CORS/Errors/CORSExternalRedirectNotAllowed
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

## Raison

```plain
Raison : Redirection externe de la requête CORS non autorisée
```

En anglais&nbsp;:

```plain
Reason: CORS request external redirect not allowed
```

## Quel est le problème ?

La requête {{Glossary("CORS")}} a reçu une réponse du serveur avec une redirection HTTP vers une URL d'une origine différente de celle de la requête initiale, ce qui n'est pas autorisé lors des requêtes CORS.

Par exemple, si la page `https://service.tld/fetchdata` est demandée, et que la réponse HTTP est «&nbsp;301 Moved Permanently&nbsp;», «&nbsp;307 Temporary Redirect&nbsp;», ou «&nbsp;308 Permanent Redirect&nbsp;» avec un `Location` de `https://anotherservice.net/getdata`, la requête CORS échoue de cette manière.

Pour résoudre le problème, mettez à jour votre code pour utiliser la nouvelle URL telle que rapportée par la redirection,
évitant ainsi la redirection.

## Voir aussi

- [Les erreurs CORS](/fr/docs/Web/HTTP/Guides/CORS/Errors)
- L'entrée du glossaire {{Glossary("CORS")}}
- [Introduction au CORS](/fr/docs/Web/HTTP/Guides/CORS)
