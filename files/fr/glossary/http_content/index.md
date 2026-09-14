---
title: Contenu HTTP
slug: Glossary/HTTP_Content
l10n:
  sourceCommit: 13839b2979cc244034ffb1fe243240778b0cd23f
---

Dans les messages HTTP, le **contenu** désigne l'«&nbsp;information&nbsp;» transmise dans le corps du message (qui suit la section d'en-tête), après suppression de tout découpage dû au transfert par blocs de HTTP/1.1.
Ce terme était appelé «&nbsp;charge utile&nbsp;» (<i lang="en">payload</i>) dans HTTP/1.1, mais le «&nbsp;contenu&nbsp;» du message se distingue des charges utiles des trames dans HTTP/2 et HTTP/3, où les données d'une trame peuvent être des données d'en-tête, de corps ou d'autres informations de contrôle.

L'objectif du contenu du message dans les requêtes et réponses HTTP dépend de la méthode de requête et du code d'état de la réponse.
Par exemple, dans une requête {{HTTPMethod("PUT")}}, le contenu représente l'état souhaité de la ressource, alors que dans une requête {{HTTPMethod("POST")}}, il s'agit d'une information à traiter.
Une réponse {{HTTPStatus("200", "200 OK")}} à une requête {{HTTPMethod("GET")}} montre l'état actuel de la ressource, tandis qu'une réponse d'erreur décrit l'erreur.

Certaines réponses, comme celles aux requêtes {{HTTPMethod("HEAD")}} ou aux codes d'état {{HTTPStatus("204", "204 No Content")}} et {{HTTPStatus("204", "304 Not Modified")}}, n'incluent aucun contenu.

Dans la réponse HTTP/1.1 suivante, le corps du message contient le contenu `Mozilla Developer Network`&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: text/plain

Mozilla Developer Network
```

Dans la réponse HTTP/1.1 suivante, le codage de transfert encode les données en blocs.
Le contenu reste `Mozilla Developer Network` au final, mais le corps du message inclut différentes données pour séparer les blocs&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
\r\n
```

## Voir aussi

- {{HTTPHeader("Content-Location")}}
- {{HTTPStatus("413", "413 Content Too Large")}}
- {{Glossary("Content header", "En-tête de contenu")}}
- [RFC 9110, section 6.4&nbsp;: Contenu <sup>(angl.)</sup>](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4) (remplace [RFC 7231 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3) Sémantique de la charge utile)
  - [Modifications par rapport à RFC 7231 <sup>(angl.)</sup>](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)
