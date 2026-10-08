---
title: En-tête Sec-WebSocket-Accept
short-title: Sec-WebSocket-Accept
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Accept
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{Glossary("response header", "L'en-tête de réponse")}} HTTP **Sec-WebSocket-Accept** est utilisé dans la [poignée de main](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#la_«_poignée_de_mains_»_du_websocket) d'ouverture de [WebSocket](/fr/docs/Web/API/WebSockets_API) pour indiquer que le serveur est prêt à passer à une connexion WebSocket.

Cet en-tête ne doit apparaître qu'une seule fois dans la réponse et possède une valeur de directive qui est calculée à partir de l'en-tête de requête {{HTTPHeader("Sec-WebSocket-Key")}} envoyé dans la requête correspondante.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Sec-WebSocket-Accept: <hashed key>
```

## Directives

- `<hashed key>`
  - : Si un en-tête {{HTTPHeader("Sec-WebSocket-Key")}} a été fourni, la valeur de cet en-tête est calculée en prenant la valeur de la clé, en concaténant la chaîne de caractères `258EAFA5-E914-47DA-95CA-C5AB0DC85B11`, et en prenant le hachage [SHA-1 <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/SHA-1) de cette chaîne de caractères concaténée — ce qui donne une valeur de 20 octets.
    Cette valeur est ensuite encodée en {{Glossary("base64")}} pour obtenir la valeur de cette propriété.

## Exemples

### Poignée de main d'ouverture du WebSocket

Le client initie une poignée de main WebSocket avec une requête comme suit.
Notez que cela commence comme une requête HTTP `GET` (HTTP/1.1 ou ultérieure) et inclut l'en-tête {{HTTPHeader("Upgrade")}} indiquant l'intention de passer à une connexion WebSocket.
Il inclut également `Sec-WebSocket-Key`, qui est utilisé dans le calcul de `Sec-WebSocket-Accept` pour confirmer l'intention de passer la connexion à une connexion WebSocket.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

La réponse du serveur doit inclure l'en-tête `Sec-WebSocket-Accept` avec une valeur calculée à partir de l'en-tête `Sec-WebSocket-Key` dans la requête, et confirme l'intention de passer la connexion à une connexion WebSocket&nbsp;:

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Sec-WebSocket-Key")}}
- L'en-tête {{HTTPHeader("Sec-WebSocket-Version")}}
- L'en-tête {{HTTPHeader("Sec-WebSocket-Protocol")}}
- L'en-tête {{HTTPHeader("Sec-WebSocket-Extensions")}}
- [La poignée de main du WebSocket](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#la_«_poignée_de_mains_»_du_websocket) dans _Écrire des serveurs WebSocket_
- [Mécanisme de mise à niveau du protocole HTTP](/fr/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
