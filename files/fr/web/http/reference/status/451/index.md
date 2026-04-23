---
title: 451 Unavailable For Legal Reasons
slug: Web/HTTP/Reference/Status/451
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`451 Unavailable For Legal Reasons`** indique que l'utilisateur·ice a demandé une ressource qui n'est pas disponible pour des raisons légales, comme une page web faisant l'objet d'une action en justice.

## Statut

```http
451 Unavailable For Legal Reasons
```

## Exemple

### Response with Link header

Cet exemple de réponse est tiré de la RFC IETF (cf. ci-après), et contient une référence à [Monty Python&nbsp;: La Vie de Brian](https://fr.wikipedia.org/wiki/Monty_Python_:_La_Vie_de_Brian).

> [!NOTE]
> L'en-tête {{HTTPHeader("Link")}} peut aussi contenir une relation `rel="blocked-by"` identifiant l'entité ayant mis en place le blocage de la ressource et pas nécessairement l'entité ayant demandé le blocage.

Toute tentative d'identifier l'entité finalement responsable de l'indisponibilité de la ressource doit figurer dans le corps de la réponse, et non dans le lien `rel="blocked-by"`. Cela inclut le nom de la personne ou de l'organisation ayant formulé une demande légale ayant entraîné la suppression du contenu.

```http
HTTP/1.1 451 Unavailable For Legal Reasons
Link: <https://spqr.example.org/legislatione>; rel="blocked-by"
Content-Type: text/html

<html>
  <head><title>Unavailable For Legal Reasons</title></head>
  <body>
    <h1>Unavailable For Legal Reasons</h1>
    <p>This request may not be serviced in the Roman Province
    of Judea due to the Lex Julia Majestatis, which disallows
    access to resources hosted on servers deemed to be
    operated by the People's Front of Judea.</p>
  </body>
</html>
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [La page Wikipédia sur le code d'erreur HTTP 451](https://fr.wikipedia.org/wiki/Erreur_HTTP_451)
- [La page Wikipédia de l'œuvre Fahrenheit 451](https://fr.wikipedia.org/wiki/Fahrenheit_451) (qui a donné son numéro à ce code de statut)
