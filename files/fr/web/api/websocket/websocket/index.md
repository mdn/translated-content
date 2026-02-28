---
title: "WebSocket : constructeur WebSocket()"
short-title: WebSocket()
slug: Web/API/WebSocket/WebSocket
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Le constructeur **`WebSocket()`** renvoie un nouvel objet {{DOMxRef("WebSocket")}} et tente immédiatement d'établir une connexion vers l'URL WebSocket spécifiée.

## Syntaxe

```js-nolint
new WebSocket(url)
new WebSocket(url, protocols)
```

### Paramètres

- `url`
  - : L'URL du serveur WebSocket cible auquel se connecter.
    L'URL doit utiliser l'un des schémas suivants&nbsp;: `ws`, `wss`, `http` ou `https`, et ne peut pas inclure un [fragment d'URL](/fr/docs/Web/URI/Reference/Fragment).
    Si une URL relative est fournie, elle est relative à l'URL de base du script appelant.

- `protocols` {{Optional_Inline}}
  - : Une chaîne unique ou un tableau de chaînes représentant les [sous-protocoles](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#les_sous-protocoles) que le client souhaite utiliser, par ordre de préférence.
    Si cette valeur est omise, un tableau vide est utilisé par défaut, c'est-à-dire `[]`.

    Un serveur unique peut implémenter plusieurs sous-protocoles WebSocket, et gérer différents types d'interactions en fonction de la valeur définie.
    Notez toutefois qu'un seul sous-protocole peut être sélectionné par connexion.

    Les valeurs autorisées sont celles pouvant être définies dans l'en-tête HTTP {{HTTPHeader("Sec-WebSocket-Protocol")}}.
    Il s'agit de valeurs choisies dans le [registre des noms de sous-protocoles WebSocket de l'IANA <sup>(angl.)</sup>](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name), telles que `soap`, `wamp`, `ship`, ou d'un nom personnalisé compris conjointement par le client et le serveur.

    > [!NOTE]
    > La connexion n'est pas établie tant que le sous-protocole n'a pas été négocié avec le serveur.
    > Le protocole sélectionné peut ensuite être lu via {{DOMxRef("WebSocket.protocol")}}&nbsp;: il sera la chaîne vide si une connexion ne peut être établie.

### Exceptions

- `SyntaxError` {{DOMxRef("DOMException")}}
  - : Levée si&nbsp;:
    - l'analyse de [`url`](#url) échoue
    - [`url`](#url) utilise un schéma autre que `ws`, `wss`, `http` ou `https`
    - [`url`](#url) contient un [fragment](/fr/docs/Web/URI/Reference/Fragment)
    - l'une des valeurs de [`protocols`](#protocols) apparaît plus d'une fois, ou ne respecte pas les exigences des éléments constituant la valeur de l'en-tête [`Sec-WebSocket-Protocol`](/fr/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#sec-websocket-protocol) telles que définies par la spécification du protocole WebSocket

## Exemples

Les exemples ci-dessous montrent comment se connecter à un `WebSocket`.

Le code suivant montre comment se connecter à un socket en utilisant une URL avec le schéma `wss`&nbsp;:

```js
const wssWebSocket = new WebSocket("wss://websocket.example.org");
console.log(wssWebSocket.url); // 'wss://websocket.example.org'

// Faire quelque chose avec le socket

wssWebSocket.close();
```

Le code pour se connecter à une URL HTTPS est presque identique.
Sous le capot, le navigateur résout cela en une connexion «&nbsp;WSS&nbsp;», donc {{DOMxRef("WebSocket.url")}} aura le schéma `wss:`.

```js
const httpsWebSocket = new WebSocket("https://websocket.example.org");
console.log(httpsWebSocket.url); // 'wss://websocket.example.org'

// Faire quelque chose avec le socket

httpsWebSocket.close();
```

On peut aussi résoudre des URL relatives.
L'URL absolue dépendra de l'URL de base du contexte dans lequel l'appel est effectué.

```js
relativeWebSocket = new WebSocket("/local/url");

// Faire quelque chose avec le socket

relativeWebSocket.close();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [RFC 6455 <sup>(angl.)</sup>](https://www.rfc-editor.org/rfc/rfc6455.html) (la spécification du protocole WebSocket)
