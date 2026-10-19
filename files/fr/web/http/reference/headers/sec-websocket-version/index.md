---
title: En-tête Sec-WebSocket-Version
short-title: Sec-WebSocket-Version
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Version
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Glossary("request header", "L'en-tête de requête")}} et de {{Glossary("response header", "réponse")}} HTTP **`Sec-WebSocket-Version`** est utilisé dans la [poignée de main du WebSocket](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#la_«_poignée_de_mains_»_du_websocket) d'ouverture du [WebSocket](/fr/docs/Web/API/WebSockets_API) pour indiquer le protocole WebSocket pris en charge par le client, et les versions du protocole prises en charge par le serveur si celui-ci ne prend _pas_ en charge la version définie dans la requête.

Cet en-tête ne peut apparaître qu'une seule fois dans une requête et définit la version du protocole WebSocket utilisée par l'application Web.
La version actuelle du protocole au moment de la rédaction est 13.
L'en-tête est automatiquement ajouté aux requêtes par les agents utilisateurs lorsqu'une connexion {{DOMxRef("WebSocket")}} est établie.

Le serveur utilise la version pour déterminer s'il peut comprendre le protocole.
Si le serveur ne prend pas en charge la version, ou si un en-tête de la poignée de main n'est pas compris ou a une valeur incorrecte, le serveur doit envoyer une réponse avec le statut {{HTTPStatus(400, "400 Bad Request")}} et fermer immédiatement le socket.
Il doit également inclure `Sec-WebSocket-Version` dans la réponse `400`, en indiquant les versions qu'il prend en charge.
Les versions peuvent être définies dans des en-têtes individuels, ou en tant que valeurs séparées par des virgules dans un seul en-tête.

L'en-tête ne doit pas être envoyé dans les réponses si le serveur comprend la version définie par le client.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui (préfixe <code>Sec-</code>)</td>
    </tr>
  </tbody>
</table>

## Syntaxe

Requête&nbsp;:

```http
Sec-WebSocket-Version: <version>
```

Réponse (en cas d'erreur uniquement)&nbsp;:

```http
Sec-WebSocket-Version: <server-supported-versions>
```

## Directives

- `<version>`
  - : La version du protocole WebSocket que le client souhaite utiliser pour communiquer avec le serveur.
    Ce nombre doit être la version la plus récente possible répertoriée dans le [Registre des numéros de version WebSocket de l'IANA <sup>(angl.)</sup>](https://www.iana.org/assignments/websocket/websocket.xml#version-number).
    La version finale la plus récente du protocole WebSocket est la version 13.
- `<server-supported-versions>`
  - : En cas d'erreur, une liste des versions du protocole WebSocket prises en charge par le serveur, séparées par des virgules.
    L'en-tête n'est pas envoyé dans les réponses si `<version>` est pris en charge.

## Exemples

### Poignée de main d'ouverture du WebSocket

La version prise en charge par le client est définie dans la [requête de poignée de main](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#la_«_poignée_de_mains_»_du_websocket) `WebSocket` d'origine.
Pour le protocole actuel, la version est «&nbsp;13&nbsp;», comme indiqué ci-dessous.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Si le serveur prend en charge la version 13 du protocole, alors `Sec-WebSocket-Version` n'apparaît pas dans la réponse.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Sec-WebSocket-Accept")}}
- L'en-tête {{HTTPHeader("Sec-WebSocket-Key")}}
- L'en-tête {{HTTPHeader("Sec-WebSocket-Protocol")}}
- L'en-tête {{HTTPHeader("Sec-WebSocket-Extensions")}}
- [La poignée de main du WebSocket](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#la_«_poignée_de_mains_»_du_websocket) dans _Écrire des serveurs WebSocket_
