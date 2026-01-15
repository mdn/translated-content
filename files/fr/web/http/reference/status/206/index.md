---
title: 206 Partial Content
slug: Web/HTTP/Reference/Status/206
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse de succès](/fr/docs/Web/HTTP/Reference/Status#réponses_de_succès) HTTP **`206 Partial Content`** est envoyé en réponse à une [requête de plage](/fr/docs/Web/HTTP/Guides/Range_requests).
Le corps de la réponse contient les plages de données demandées, telles que spécifiées dans l'en-tête {{HTTPHeader("Range")}} de la requête.

Le format de la réponse dépend du nombre de plages demandées.
Si une seule plage est demandée, le {{HTTPHeader("Content-Type")}} de l'ensemble de la réponse correspond au type du document, et un {{HTTPHeader("Content-Range")}} est fourni.
Si plusieurs plages sont demandées, le {{HTTPHeader("Content-Type")}} est défini sur `multipart/byteranges`, et chaque fragment couvre une plage, avec ses propres en-têtes {{HTTPHeader("Content-Range")}} et {{HTTPHeader("Content-Type")}} pour la décrire.

## Statut

```http
206 Partial Content
```

## Exemples

### Réception d'une réponse `206` pour une seule plage demandée

Voici un exemple de réponse `206` lorsqu'une seule plage `21010-` (octets 21010 à la fin du fichier) d'un fichier image est demandée.
La réponse contient un {{HTTPHeader("Content-Type")}} de `image/gif` et l'en-tête {{HTTPHeader("Content-Range")}} est fourni&nbsp;:

```http
GET /z4d4kWk.gif HTTP/1.1
Host: images.exemple.com
Range: bytes=21010-
```

```http
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Range: bytes 21010-47021/47022
Content-Length: 26012
Content-Type: image/gif
ETag: "abc123"
Accept-Ranges: bytes

# 26012 octets de données d'image partielle…
```

### Réception d'une réponse `206` pour plusieurs plages demandées

Voici un exemple de réponse `206` lorsqu'on demande deux plages d'un fichier PDF.
La réponse contient le {{HTTPHeader("Content-Type")}} `multipart/byteranges` avec un {{HTTPHeader("Content-Type")}} distinct (`application/pdf`) et un {{HTTPHeader("Content-Range")}} pour chaque plage.

```http
GET /price-list.pdf HTTP/1.1
Host: exemple.com
Range: bytes=234-639,4590-7999
```

```http
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Length: 1741
Content-Type: multipart/byteranges; boundary=String_separator
ETag: "abc123"
Accept-Ranges: bytes

--String_separator
Content-Type: application/pdf
Content-Range: bytes 234-639/8000

# contenu de la première plage (406 octets)
--String_separator
Content-Type: application/pdf
Content-Range: bytes 4590-7999/8000

# contenu de la seconde plage (3410 octets)
--String_separator--
```

## Spécifications

{{Specifications}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("If-Range")}}
- L'en-tête HTTP {{HTTPHeader("Range")}}
- L'en-tête HTTP {{HTTPHeader("Content-Range")}}
- L'en-tête HTTP {{HTTPHeader("Content-Type")}}
- [Les méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
