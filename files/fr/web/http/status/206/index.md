---
title: 206 Partial Content
slug: Web/HTTP/Status/206
tags:
  - Code de statut
  - HTTP
translation_of: Web/HTTP/Status/206
---
{{HTTPSidebar}}

Le code de statut de réponse succès HTTP **`206 Partial Content`** indique que la requête a bien abouti et que le corps de la réponse contient les plages de données demandées, tel que décrit dans l'en-tête {{HTTPHeader("Range")}} de la requête.

S'il n'y a qu'une seule plage, l'entête {{HTTPHeader("Content-Type")}} de la réponse correspondra au type du document et l'en-tête {{HTTPHeader("Content-Range")}} sera fourni.

Si plusieurs plages sont renvoyées, l'en-tête {{HTTPHeader("Content-Type")}} vaudra `multipart/byteranges` et chaque fragment couvrira une plage, décrite par les en-têtes {{HTTPHeader("Content-Range")}} et {{HTTPHeader("Content-Type")}}.

## Statut

    206 Partial Content

## Exemples

Une réponse qui contient une seule plage :

    HTTP/1.1 206 Partial Content
    Date: Wed, 15 Nov 2015 06:25:24 GMT
    Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
    Content-Range: bytes 21010-47021/47022
    Content-Length: 26012
    Content-Type: image/gif

    ... 26012 bytes of partial image data ...

Une réponse qui contient plusieurs plages :

    HTTP/1.1 206 Partial Content
    Date: Wed, 15 Nov 2015 06:25:24 GMT
    Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
    Content-Length: 1741
    Content-Type: multipart/byteranges; boundary=String_separator

    --String_separator
    Content-Type: application/pdf
    Content-Range: bytes 234-639/8000

    ...la première plage...
    --String_separator
    Content-Type: application/pdf
    Content-Range: bytes 4590-7999/8000

    ...La seconde plage
    --String_separator--

## Spécifications

| Spécification                                                | Titre                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------ |
| {{RFC("7233", "206 Partial Content" , "4.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests |

## Compatibilité des navigateurs

{{Compat("http/status", "206")}}

## Voir aussi

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
