---
title: L'API WebSocket (WebSockets)
slug: Web/API/WebSockets_API
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

{{DefaultAPISidebar("WebSockets API")}}{{AvailableInWorkers}}

L'**API WebSocket** permet d'ouvrir une session de communication interactive bidirectionnelle entre le navigateur de l'utilisateur·ice et un serveur. Avec cette API, vous pouvez envoyer des messages à un serveur et recevoir des réponses sans avoir à interroger périodiquement le serveur.

L'API WebSocket propose deux mécanismes alternatifs pour créer et utiliser des connexions web socket&nbsp;: l'interface {{DOMxRef("WebSocket")}} et l'interface {{DOMxRef("WebSocketStream")}}.

- L'interface `WebSocket` est stable et bénéficie d'un bon support côté navigateurs et serveurs. Cependant, elle ne prend pas en charge la [rétropression](/fr/docs/Web/API/Streams_API/Concepts#rétropression). En conséquence, lorsque des messages arrivent plus rapidement que l'application ne peut les traiter, cela peut soit remplir la mémoire de l'appareil en stockant ces messages en mémoire tampon, soit rendre l'application non réactive en raison d'une utilisation CPU à 100 %, soit les deux.
- L'interface `WebSocketStream` est une alternative basée sur {{JSxRef("Promise")}} à `WebSocket`. Elle utilise [l'API Streams](/fr/docs/Web/API/Streams_API) pour gérer la réception et l'envoi de messages, ce qui permet aux connexions de tirer automatiquement parti de la rétropression des flux en régulant la vitesse de lecture ou d'écriture afin d'éviter les goulets d'étranglement dans l'application. Toutefois, `WebSocketStream` n'est pas standard et n'est actuellement prise en charge que par un seul moteur de rendu.

Par ailleurs, [l'API WebTransport](/fr/docs/Web/API/WebTransport_API) devrait remplacer l'API WebSocket pour de nombreuses applications. WebTransport est une API bas niveau polyvalente qui fournit la rétropression et de nombreuses autres fonctionnalités non prises en charge ni par `WebSocket` ni par `WebSocketStream`, telles que les flux unidirectionnels, la livraison hors ordre et la transmission de données non fiable via des datagrammes. WebTransport est plus complexe à utiliser que WebSockets et son support inter-navigateurs est moins étendu, mais il permet la mise en œuvre de solutions sophistiquées. Si les connexions WebSocket standard conviennent à votre cas d'utilisation et que vous avez besoin d'une large compatibilité entre navigateurs, vous devriez utiliser l'API WebSocket pour démarrer rapidement. En revanche, si votre application nécessite une solution personnalisée non standard, vous devriez utiliser l'API WebTransport.

> [!NOTE]
> Si une page possède une connexion WebSocket ouverte, le navigateur peut ne pas l'ajouter au {{Glossary("bfcache")}}. Il est donc recommandé de fermer la connexion lorsque l'utilisateur·ice a terminé avec la page. Voir [Travailler avec le bfcache](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications#travailler_avec_le_bfcache).

## Interfaces

- {{DOMxRef("WebSocket")}}
  - : Interface principale pour se connecter à un serveur WebSocket, puis envoyer et recevoir des données sur la connexion.
- {{DOMxRef("WebSocketStream")}} {{Non-standard_Inline}}
  - : Interface basée sur des promesses pour se connecter à un serveur WebSocket&nbsp;; utilise [l'API Streams](/fr/docs/Web/API/Streams_API) pour envoyer et recevoir des données sur la connexion.
- {{DOMxRef("CloseEvent")}}
  - : Évènement envoyé par l'objet WebSocket lorsque la connexion se ferme.
- {{DOMxRef("MessageEvent")}}
  - : Évènement envoyé par l'objet WebSocket lorsqu'un message est reçu du serveur.

## En-têtes HTTP associés

Les en-têtes HTTP sont utilisés dans la [poignée de main WebSocket](/fr/docs/Web/API/WebSockets*API/Writing_WebSocket_servers#la «\_poignée_de_mains*»\_du_websocket)&nbsp;:

- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Un en-tête de requête HTTP qui contient un {{Glossary("Nonce", "nombre unique")}} envoyé par le client.
    Il est utilisé dans la [poignée d'ouverture WebSocket](/fr/docs/Web/API/WebSockets*API/Writing_WebSocket_servers#la «\_poignée_de_mains*»\_du_websocket) pour vérifier que le client a l'intention explicite d'ouvrir une connexion WebSocket.
    Il est ajouté automatiquement par le navigateur.
- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Un {{Glossary("response header", "entête de réponse")}} HTTP utilisé dans la _poignée d'ouverture WebSocket_ pour indiquer que le serveur accepte de passer en WebSocket.
    La valeur de cette directive est calculée à partir de la valeur de `Sec-WebSocket-Key` dans la requête correspondante.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : Un en-tête HTTP qui, dans les requêtes, indique la version du protocole WebSocket comprise par le client.
    Dans les réponses, il n'est envoyé que si la version demandée n'est pas prise en charge par le serveur, et il liste les versions prises en charge par le serveur.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : Un en-tête HTTP qui, dans les requêtes, indique les sous-protocoles pris en charge par le client, par ordre de préférence.
    Dans les réponses, il indique le sous-protocole sélectionné par le serveur parmi les préférences du client.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : Un en-tête HTTP qui, dans les requêtes, indique les extensions WebSocket prises en charge par le client, par ordre de préférence.
    Dans les réponses, il indique l'extension sélectionnée par le serveur parmi les préférences du client.

## Guides

- [Écrire des applications client WebSocket](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [Écriture de serveurs WebSocket](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
- [Écrire un serveur WebSocket en C#](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Écrire un serveur WebSocket en Java](/fr/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
- [Écrire un serveur WebSocket en JavaScript (Deno)](/fr/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno)
- [Utiliser WebSocketStream pour écrire un client](/fr/docs/Web/API/WebSockets_API/Using_WebSocketStream)

## Outils

- [AsyncAPI <sup>(angl.)</sup>](https://www.asyncapi.com/)&nbsp;: Spécification pour décrire des architectures pilotées par des évènements basées sur des protocoles comme WebSocket. Vous pouvez l'utiliser pour décrire des API WebSocket de la même manière que vous décrivez des API REST avec la spécification OpenAPI. Voir [pourquoi envisager AsyncAPI avec WebSocket <sup>(angl.)</sup>](https://www.asyncapi.com/blog/websocket-part1) et [comment le faire <sup>(angl.)</sup>](https://www.asyncapi.com/blog/websocket-part2).
- [µWebSockets <sup>(angl.)</sup>](https://github.com/uNetworking/uWebSockets)&nbsp;: Implémentation serveur et cliente WebSocket hautement scalable pour [C++11](https://isocpp.org/) et [Node.js](https://nodejs.org/fr).
- [Socket.IO <sup>(angl.)</sup>](https://socket.io/)&nbsp;: Protocole tiers basé sur le long-polling/WebSocket pour [Node.js](https://nodejs.org/fr).
- [SocketCluster <sup>(angl.)</sup>](https://socketcluster.io/)&nbsp;: Framework WebSocket pub/sub pour [Node.js](https://nodejs.org/fr) axé sur la scalabilité.
- [WebSocket-Node <sup>(angl.)</sup>](https://github.com/theturtle32/WebSocket-Node)&nbsp;: Implémentation d'API serveur WebSocket pour [Node.js](https://nodejs.org/fr).
- [Total.js <sup>(angl.)</sup>](https://www.totaljs.com/)&nbsp;: Framework d'applications web pour [Node.js](https://nodejs.org/fr) (Exemple&nbsp;: [WebSocket chat <sup>(angl.)</sup>](https://github.com/totaljs/examples/tree/master/websocket)).
- [SignalR <sup>(angl.)</sup>](https://dotnet.microsoft.com/en-us/apps/aspnet/signalr)&nbsp;: SignalR utilise les WebSockets quand ils sont disponibles et bascule gracieusement sur d'autres techniques sinon, sans modifier votre code d'application.
- [Caddy <sup>(angl.)</sup>](https://caddyserver.com/)&nbsp;: Serveur web capable de proxyfier des commandes arbitraires (stdin/stdout) en tant que websocket.
- [ws <sup>(angl.)</sup>](https://github.com/websockets/ws)&nbsp;: Bibliothèque WebSocket populaire pour client et serveur en [Node.js](https://nodejs.org/fr).
- [cowboy <sup>(angl.)</sup>](https://github.com/ninenines/cowboy)&nbsp;: Petit serveur HTTP, rapide et moderne, pour Erlang/OTP avec prise en charge de WebSocket.
- [ZeroMQ <sup>(angl.)</sup>](https://zeromq.org/)&nbsp;: Bibliothèque réseau embarquable pour transporter des messages via in-process, IPC, TCP, UDP, TIPC, multicast et WebSocket.
- [WebSocket King <sup>(angl.)</sup>](https://websocketking.com/)&nbsp;: Outil client pour développer, tester et manipuler des serveurs WebSocket.
- [PHP WebSocket Server <sup>(angl.)</sup>](https://github.com/napengam/phpWebSocketServer)&nbsp;: Serveur écrit en PHP pour gérer des connexions via websockets `wss://` ou `ws://` et des sockets normaux sur `ssl://`, `tcp://`.
- [Django Channels <sup>(angl.)</sup>](https://channels.readthedocs.io/en/stable/index.html)&nbsp;: Bibliothèque Django qui ajoute la prise en charge des WebSockets (et d'autres protocoles nécessitant des connexions asynchrones longue durée).
- [(Phoenix) Channels <sup>(angl.)</sup>](https://hexdocs.pm/phoenix/channels.html)&nbsp;: Communication temps réel scalable utilisant WebSocket dans le framework Elixir Phoenix.
- [Phoenix LiveView <sup>(angl.)</sup>](https://github.com/phoenixframework/phoenix_live_view)&nbsp;: Expériences web interactives en temps réel via WebSocket dans le framework Elixir Phoenix.
- [Flask-SocketIO <sup>(angl.)</sup>](https://flask-socketio.readthedocs.io/en/latest/)&nbsp;: Permet aux applications Flask d'accéder à des communications bidirectionnelles à faible latence entre les clients et le serveur.
- [Gorilla WebSocket <sup>(angl.)</sup>](https://pkg.go.dev/github.com/gorilla/websocket)&nbsp;: Implémentation Go du protocole WebSocket.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [RFC 6455 - Le protocole WebSocket <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc6455)
- [Les spécifications de l'API WebSocket <sup>(angl.)</sup>](https://websockets.spec.whatwg.org/)
- [Server-Sent Events](/fr/docs/Web/API/Server-sent_events)
