---
title: En-tête Sec-WebSocket-Extensions
short-title: Sec-WebSocket-Extensions
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Extensions
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Glossary("request header", "L'en-tête de requête")}} et de {{Glossary("response header", "réponse")}} HTTP **Sec-WebSocket-Extensions** est utilisé dans la [WebSocket](/fr/docs/Web/API/WebSockets_API) ouverture de [la poignée de main](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#la_«_poignée_de_mains_»_du_websocket) pour négocier une extension de protocole utilisée par le client et le serveur.

Dans une requête, l'en-tête définit une ou plusieurs extensions que l'application web souhaite utiliser, par ordre de préférence.
Celles-ci peuvent être ajoutées dans plusieurs en-têtes, ou sous forme de valeurs séparées par des virgules ajoutées à un seul en-tête.
Chaque extension peut également avoir un ou plusieurs paramètres — ce sont des valeurs séparées par des points-virgules listées après l'extension.

Dans une réponse, l'en-tête ne peut apparaître qu'une seule fois, où il définit l'extension sélectionnée par le serveur parmi les préférences du client.
Cette valeur doit être la première extension que le serveur prend en charge dans la liste fournie dans l'en-tête de la requête.

L'en-tête de requête est automatiquement ajouté par le navigateur en fonction de ses propres capacités, et ne dépend pas des paramètres passés au constructeur lors de la création du `WebSocket`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}, {{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui (préfixe <code>Sec-</code>)</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Sec-WebSocket-Extensions: <extensions>
```

## Directives

- `<extensions>`
  - : Une liste d'extensions séparées par des virgules à demander (ou que le serveur accepte de prendre en charge).
    Celles-ci sont couramment sélectionnées à partir du [Registre des noms d'extension WebSocket de l'IANA <sup>(angl.)</sup>](https://www.iana.org/assignments/websocket/websocket.xml#extension-name) (des extensions personnalisées peuvent également être utilisées).
    Les extensions qui prennent des paramètres les délimitent par des points-virgules.

## Exemples

### Poignée de main d'ouverture du WebSocket

La requête HTTP ci-dessous montre la poignée de main d'ouverture où un client prend en charge l'extension `permessage-deflate` (avec le paramètre `client_max_window_bits`), et l'extension `bbf-usp-protocol`.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits, bbf-usp-protocol
```

La requête ci-dessous avec des en-têtes séparés pour chaque extension est équivalente&nbsp;:

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
Sec-WebSocket-Extensions: bbf-usp-protocol
```

La réponse ci-dessous peut être envoyée par un serveur pour indiquer qu'il prend en charge l'extension `permessage-deflate`&nbsp;:

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
Sec-WebSocket-Extensions: permessage-deflate
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Sec-WebSocket-Accept")}}
- L'en-tête {{HTTPHeader("Sec-WebSocket-Key")}}
- L'en-tête {{HTTPHeader("Sec-WebSocket-Version")}}
- L'en-tête {{HTTPHeader("Sec-WebSocket-Protocol")}}
- [La poignée de main du WebSocket](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#la_«_poignée_de_mains_»_du_websocket) et [les sous-protocoles](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#les_sous-protocoles) dans _Écrire des serveurs WebSocket_
