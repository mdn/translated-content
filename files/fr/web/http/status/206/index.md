---
title: 206 Partial Content
slug: Web/HTTP/Status/206
translation_of: Web/HTTP/Status/206
browser-compat: http.status.206
---
{{HTTPSidebar}}

Le code de statut de réponse succès HTTP **`206 Partial Content`** indique que la requête a bien abouti et que le corps de la réponse contient les plages de données demandées, tel que décrit dans l'en-tête [`Range`](/fr/docs/Web/HTTP/Headers/Range) de la requête.

S'il n'y a qu'une seule plage, l'entête [`Content-Type`](/fr/docs/Web/HTTP/Headers/Content-Type) de la réponse correspondra au type du document et l'en-tête [`Content-Type`](/fr/docs/Web/HTTP/Headers/Content-Range) sera fourni.

Si plusieurs plages sont renvoyées, l'en-tête [`Content-Type`](/fr/docs/Web/HTTP/Headers/Content-Type) vaudra `multipart/byteranges` et chaque fragment couvrira une plage, décrite par les en-têtes [`Content-Type`](/fr/docs/Web/HTTP/Headers/Content-Range) et [`Content-Type`](/fr/docs/Web/HTTP/Headers/Content-Type).

## Statut

```
206 Partial Content
```

## Exemples

Une réponse qui contient une seule plage&nbsp;:

```
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Range: bytes 21010-47021/47022
Content-Length: 26012
Content-Type: image/gif

…26012 octets pour un fragment d'image…
```

Une réponse qui contient plusieurs plages&nbsp;:

```
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Length: 1741
Content-Type: multipart/byteranges; boundary=String_separator

--String_separator
Content-Type: application/pdf
Content-Range: bytes 234-639/8000

…la première plage…
--String_separator
Content-Type: application/pdf
Content-Range: bytes 4590-7999/8000

…La seconde plage
--String_separator--
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`If-Range`](/fr/docs/Web/HTTP/Headers/If-Range)
- [`Range`](/fr/docs/Web/HTTP/Headers/Range)
- [`Content-Range`](/fr/docs/Web/HTTP/Headers/Content-Range)
- [`Content-Type`](/fr/docs/Web/HTTP/Headers/Content-Type)
