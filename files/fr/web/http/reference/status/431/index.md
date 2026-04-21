---
title: 431 Request Header Fields Too Large
slug: Web/HTTP/Reference/Status/431
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`431 Request Header Fields Too Large`** indique que le serveur refuse de traiter la requête car les [en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers) de la requête sont trop longs.
La demande peut être soumise à nouveau après réduction de la taille des en-têtes de la demande.

431 peut être utilisé lorsque la taille totale des en-têtes de la requête est trop importante ou lorsqu'un seul champ d'en-tête est trop important.
Pour aider les clients qui rencontrent cette erreur, indiquez dans le corps de la réponse lequel des deux est à l'origine du problème et, idéalement, précisez quels sont les en-têtes trop volumineux.
Cela permet aux clients de tenter de résoudre le problème, par exemple en supprimant les cookies.

Les serveurs produiront généralement ce statut si&nbsp;:

- L'URL contenue dans l'en-tête {{HTTPHeader("Referer")}} est trop longue
- La requête contient de trop nombreux [cookies](/fr/docs/Web/HTTP/Guides/Cookies)

## Statut

```http
431 Request Header Fields Too Large
```

## Exemples

### Champ d'en-tête trop volumineux

Dans l'exemple suivant, l'en-tête {{HTTPHeader("Cookie")}} est trop volumineux dans la requête&nbsp;:

```http
GET /doc HTTP/1.1
Host: exemple.com
Cookie: cookie1=value1; cookie2=value2; cookie3=[…]
```

Le serveur répond avec un message indiquant quel en-tête posait problème&nbsp;:

```http
HTTP/1.1 431 Request Header Fields Too Large
Content-Type: text/html

<!doctype html>
  <head>
    <title>Request Header Fields Too Large</title>
  </head>
  <body>
    <h1>En-têtes de la requête trop volumineux</h1>
    <p>L'en-tête "Cookie" était trop volumineux.</p>
  </body>
</html>
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- Le code de statut HTTP {{HTTPStatus("414", "414 URI Too Long")}}
- L'entrée de glossaire {{Glossary("Request header", "En-tête de requête")}}
