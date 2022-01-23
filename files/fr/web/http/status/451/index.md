---
title: 451 Unavailable For Legal Reasons
slug: Web/HTTP/Status/451
translation_of: Web/HTTP/Status/451
browser-compat: http.status.451
---
{{HTTPSidebar}}

Le code de réponse d'erreur HTTP **`451 Unavailable For Legal Reasons`** indique que l'utilisateur a demandé une ressource qui n'est pas disponible pour des raisons légales (par exemple, une page web sous le coup d'une action en justice).

## Statut

```
451 Unavailable For Legal Reasons
```

## Exemple

Cet exemple de réponse est tiré de la RFC IETF (cf. ci-après), et contient une référence à [*Monty Python&nbsp;: La Vie de Brian*](https://fr.wikipedia.org/wiki/Monty_Python_:_La_Vie_de_Brian).

Notez que l'en-tête [`Link`](/fr/docs/Web/HTTP/Headers/Link) peut aussi contenir une relation `rel="blocked-by"` identifiant l'entité responsable de l'indisponibilité de la ressource (par exemple le nom de la personne ou de l'organisation à l'origine de la demande légale ayant entraîné le retrait du contenu).

```
HTTP/1.1 451 Unavailable For Legal Reasons
Link: <https://spqr.example.org/legislatione>; rel="blocked-by"
Content-Type: text/html
```

```
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

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Wikipédia&nbsp;: Erreur HTTP 451](https://fr.wikipedia.org/wiki/Erreur_HTTP_451)
- [Wikipédia&nbsp;: Fahrenheit 451](https://fr.wikipedia.org/wiki/Fahrenheit_451) (qui a donné son numéro à ce code de statut)
