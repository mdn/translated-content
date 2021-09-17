---
title: 451 Unavailable For Legal Reasons
slug: Web/HTTP/Status/451
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/451
---
{{HTTPSidebar}}

Le code de réponse d'erreur HTTP **`451`\*\***` Unavailable For Legal Reasons`\*\* indique que l'utilisateur a demandé une ressource qui n'est pas disponible pour des raisons légales (par exemple une page web sous le coup d'une action en justice).

## Statut

    451 Unavailable For Legal Reasons

## Exemple

Cet exemple de réponse est tiré de la RFC IETF (cf. ci-après), et contient une référence à {{interwiki("wikipedia", "Monty_Python's_Life_of_Brian", "<em>Monty Python : La Vie de Brian</em>")}}.

Notez que l'en-tête {{HTTPHeader("Link")}} peut aussi contenir une relation  `rel="blocked-by"` identifiant l'entité responsable de l'indisponibilité de la ressource (par exemple le nom de la personne ou de l'organisation à l'origine de la demande légale ayant entraîné le retrait du contenu).

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

## Spécifications

| Spécification                                                        | Titre                                         |
| -------------------------------------------------------------------- | --------------------------------------------- |
| {{RFC("7725", "451 Unavailable For Legal Reasons")}} | An HTTP Status Code to Report Legal Obstacles |

## Compatibilité des navigateurs

{{Compat("http/status", "451")}}

## Voir aussi

- {{interwiki("wikipedia", "HTTP_451", "Wikipedia: HTTP 451")}}
- {{interwiki("wikipedia", "Fahrenheit_451", "Wikipedia: Fahrenheit 451")}} (qui a donné son numéro à ce code de statut)
