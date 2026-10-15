---
title: En-tête Sec-WebSocket-Key
short-title: Sec-WebSocket-Key
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Key
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

{{Glossary("request header", "L'en-tête de requête")}} HTTP **Sec-WebSocket-Key** est utilisé dans le [WebSocket](/fr/docs/Web/API/WebSockets_API) ouverture de [la poignée de main](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#la_«_poignée_de_mains_»_du_websocket) pour permettre à un client (agent utilisateur) de confirmer qu'il «&nbsp;veut vraiment&nbsp;» demander qu'un client HTTP soit mis à niveau pour devenir un WebSocket.

La valeur de la clé est calculée à l'aide d'un algorithme défini dans la spécification WebSocket, donc cela _ne fournit pas de sécurité_.
Elle aide plutôt à empêcher les clients non WebSocket de demander par inadvertance, ou par mauvaise utilisation, une connexion WebSocket.

Cet en-tête est automatiquement ajouté par les agents utilisateurs lorsqu'un script ouvre un WebSocket&nbsp;; il ne peut pas être ajouté en utilisant les méthodes {{DOMxRef("Window/fetch", "fetch()")}} ou {{DOMxRef("XMLHttpRequest.setRequestHeader()")}}.

L'en-tête de réponse {{HTTPHeader("Sec-WebSocket-Accept")}} du serveur doit inclure une valeur calculée à partir de la valeur de clé définie.
L'agent utilisateur peut alors valider cela avant de confirmer la connexion.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui (préfixe <code>Sec-</code>)</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Sec-WebSocket-Key: <key>
```

## Directives

- `<key>`
  - : La clé pour cette requête de mise à niveau.
    Il s'agit d'un {{Glossary("Nonce", "nombre unique")}} de 16 octets sélectionné au hasard, encodé en base64 et encodé de manière isomorphe.
    L'agent utilisateur l'ajoute lors de l'initialisation de la connexion WebSocket.

## Exemples

### Poignée de main d'ouverture du WebSocket

Le client initie une poignée de main WebSocket avec une requête comme suit.
Notez que cela commence comme une requête HTTP `GET` (HTTP/1.1 ou ultérieure), en plus de `Sec-WebSocket-Key`, la requête inclut l'en-tête {{HTTPHeader("Upgrade")}}, indiquant l'intention de passer de HTTP à une connexion WebSocket.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

La réponse du serveur doit inclure l'en-tête `Sec-WebSocket-Accept` avec une valeur calculée à partir de l'en-tête `Sec-WebSocket-Key` de la requête, et confirme l'intention de passer la connexion à une connexion WebSocket&nbsp;:

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

- L'en-tête {{HTTPHeader("Sec-WebSocket-Accept")}}
- L'en-tête {{HTTPHeader("Sec-WebSocket-Version")}}
- L'en-tête {{HTTPHeader("Sec-WebSocket-Protocol")}}
- L'en-tête {{HTTPHeader("Sec-WebSocket-Extensions")}}
- [La poignée de main du WebSocket](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#la_«_poignée_de_mains_»_du_websocket) dans _Écrire des serveurs WebSocket_
- [Mécanisme de mise à niveau du protocole HTTP](/fr/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
