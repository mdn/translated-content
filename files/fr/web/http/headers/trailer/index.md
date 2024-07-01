---
title: Trailer
slug: Web/HTTP/Headers/Trailer
---

{{HTTPSidebar}}

L'en-tête **Trailer** permet à l'expéditeur d'inclure des champs supplémentaires à la fin des blocs de messages pour fournir des métadonnées supplémentaires qui peuvent être générées de manière dynamique pendant que le corps du message sera envoyé, il peut s'agir de la vérification de l'intégrité du message, une signature numérique, ou encore un statut après le traitement.

> **Note :** L'en-tête {{HTTPHeader("TE")}} de la requête devra être définie en tant que "trailers" pour autoriser les champs de type "trailer".

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
Trailer: header-names
```

## Directives

- `header-names`

  - : HTTP header fields which will be present in the trailer part of chunked messages. These header fields are **disallowed**:

    - message framing headers (e.g., {{HTTPHeader("Transfer-Encoding")}} and {{HTTPHeader("Content-Length")}}),
    - routing headers (e.g., {{HTTPHeader("Host")}}),
    - request modifiers (e.g., controls and conditionals, like {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Max-Forwards")}}, or {{HTTPHeader("TE")}}),
    - authentication headers (e.g., {{HTTPHeader("Authorization")}} or {{HTTPHeader("Set-Cookie")}}),
    - or {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Content-Range")}}, and `Trailer` itself.

## Exemple

### Encodage de transfert en bloc en utilisant les en-têtes "trailer"

Dans cet exemple, l'en-tête {{HTTPHeader("Expires")}} est utilisée à la fin du bloc du message et sert en tant qu'un "trailing header".

```
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked
Trailer: Expires

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
\r\n
Expires: Wed, 21 Oct 2015 07:28:00 GMT
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("TE")}}
- [Encodage de transfert en bloc](https://fr.wikipedia.org/wiki/Chunked_transfer_encoding)
