---
title: En-tête Sec-WebSocket-Protocol
short-title: Sec-WebSocket-Protocol
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Protocol
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Glossary("request header", "L'en-tête de requête")}} et de {{Glossary("response header", "réponse")}} HTTP **`Sec-WebSocket-Protocol`** est utilisé dans le [WebSocket](/fr/docs/Web/API/WebSockets_API) ouverture de [la poignée de main](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#la_«_poignée_de_mains_»_du_websocket) pour négocier un [sous-protocole](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#les_sous-protocoles) à utiliser dans la communication.
Il peut s'agir d'un protocole bien compris, tel que SOAP ou WAMP, ou d'un protocole personnalisé compris par le client et le serveur.

Dans une requête, l'en-tête définit un ou plusieurs sous-protocoles WebSocket que l'application Web souhaite utiliser, par ordre de préférence.
Ils peuvent être ajoutés en tant que valeurs de protocole dans plusieurs en-têtes, ou en tant que valeurs séparées par des virgules ajoutées à un seul en-tête.

Dans une réponse, il définit le sous-protocole sélectionné par le serveur.
Il doit s'agir du premier sous-protocole que le serveur prend en charge dans la liste fournie dans l'en-tête de la requête.

L'en-tête de requête est automatiquement ajouté et rempli par le navigateur en utilisant les valeurs définies par l'application dans l'argument [`protocols`](/fr/docs/Web/API/WebSocket/WebSocket#protocols) de `WebSocket()`.
Le sous-protocole sélectionné par le serveur est mis à la disposition de l'application Web dans {{DOMxRef("WebSocket.protocol")}}.

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
Sec-WebSocket-Protocol: <sub-protocols>
```

## Directives

- `<sub-protocols>`
  - : Une liste de noms de sous-protocoles séparés par des virgules, dans l'ordre de préférence.
    Les sous-protocoles peuvent être sélectionnés à partir du [Registre des noms de sous-protocoles WebSocket de l'IANA <sup>(angl.)</sup>](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name), ou peuvent être un nom personnalisé compris conjointement par le client et le serveur.

    En tant qu'en-tête de réponse, il s'agit d'un seul sous-protocole que le serveur a sélectionné.

## Exemples

### Poignée de main d'ouverture du WebSocket

Le sous-protocole est défini dans la [requête de poignée de main](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#la_«_poignée_de_mains_»_du_websocket) WebSocket originale.
La requête ci-dessous montre que le client préfère `soap`, mais prend également en charge `wamp`.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Protocol: soap, wamp
```

La spécification des protocoles de cette manière a le même effet&nbsp;:

```http
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

La réponse du serveur inclut l'en-tête `Sec-WebSocket-Protocol`, sélectionnant le premier sous-protocole qu'il prend en charge parmi les préférences du client.
Ci-dessous, il est indiqué comme `soap`&nbsp;:

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
Sec-WebSocket-Protocol: soap
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Sec-WebSocket-Accept")}}
- L'en-tête {{HTTPHeader("Sec-WebSocket-Key")}}
- L'en-tête {{HTTPHeader("Sec-WebSocket-Version")}}
- L'en-tête {{HTTPHeader("Sec-WebSocket-Extensions")}}
- [La poignée de main du WebSocket](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#la_«_poignée_de_mains_»_du_websocket) et [les sous-protocoles](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#les_sous-protocoles) dans _Écrire des serveurs WebSocket_
