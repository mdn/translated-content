---
title: 451 Unavailable For Legal Reasons
slug: Web/HTTP/Status/451
---

{{HTTPSidebar}}

Le code de réponse d'erreur HTTP **`451 Unavailable For Legal Reasons`** indique que le client a demandé une ressource qui n'est pas disponible pour des raisons légales (par exemple, une page web sous le coup d'une action en justice).

## Statut

```
451 Unavailable For Legal Reasons
```

## Exemple

Cet exemple de réponse est tiré de la RFC IETF (cf. ci-après), et contient une référence à [Monty Python&nbsp;: La Vie de Brian](https://fr.wikipedia.org/wiki/Monty_Python_:_La_Vie_de_Brian).

> **Note :** L'en-tête [`Link`](/fr/docs/Web/HTTP/Headers/Link) peut aussi contenir une relation `rel="blocked-by"` identifiant l'entité ayant mis en place le blocage de la ressource et pas nécessairement l'entité ayant demandé le blocage.

C'est le corps de la réponse (et non `rel="blocked-by"`) qui pourra renseigner sur l'entité responsable en premier lieu du blocage de la ressource. Le corps peut ainsi contenir le nom de la personne ou de l'organisation qui a réalisé la demande à l'origine du retrait du contenu.

```
HTTP/1.1 451 Unavailable For Legal Reasons
Link: <https://spqr.example.org/legislatione>; rel="blocked-by"
Content-Type: text/html
```

```html
<html>
  <head>
    <title>Unavailable For Legal Reasons</title>
  </head>
  <body>
    <h1>Unavailable For Legal Reasons</h1>
    <p>
      This request may not be serviced in the Roman Province of Judea due to the
      Lex Julia Majestatis, which disallows access to resources hosted on
      servers deemed to be operated by the People's Front of Judea.
    </p>
  </body>
</html>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La page Wikipédia sur le code d'erreur HTTP 451](https://fr.wikipedia.org/wiki/Erreur_HTTP_451)
- [La page Wikipédia de l'œuvre Fahrenheit 451](https://fr.wikipedia.org/wiki/Fahrenheit_451) (qui a donné son numéro à ce code de statut)
