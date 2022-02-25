---
title: WebSockets
slug: Web/API/WebSockets_API
tags:
  - API
  - Aperçu
  - Bidirectionnel
  - Client
  - Communication
  - Serveur
  - WebSocket
  - WebSocket API
  - WebSockets
  - data
  - interactive
translation_of: Web/API/WebSockets_API
---
{{DefaultAPISidebar("Websockets API")}}

L'**API WebSocket** est une technologie évoluée qui permet d'ouvrir un canal de communication bidirectionnelle entre un navigateur (côté client) et un serveur. Avec cette API vous pouvez envoyer des messages à un serveur et recevoir ses réponses de manière événementielle sans avoir à aller consulter le serveur pour obtenir une réponse.

> **Note :** Bien que les connexions WebSocket soient fonctionnellement similaires aux sockets standard de type Unix, elles ne sont pas liées.

## Interfaces

- [`WebSocket`](/fr/docs/WebSockets/Writing_WebSocket_client_applications)
  - : Interface principale pour se connecter à un serveur WebSocket. Il permet d'envoyer et de recevoir des données sur la connexion.
- [`CloseEvent`](/fr/docs/Web/API/CloseEvent)
  - : Evénement envoyé par l'objet WebSocket lors de la fermeture de la connexion.
- [`MessageEvent`](/fr/docs/Web/API/MessageEvent)
  - : Evénement envoyé par l'objet WebSocket lorsqu'un message est reçu par le serveur.

## Guides

- [Ecrire des applications client WebSocket](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [Écriture de serveurs WebSocket](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
- [Écrire un serveur WebSocket en C#](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Écrire un serveur WebSocket en Java](/fr/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)

## Outils

- [HumbleNet](https://humblenet.github.io/) :Bibliothèque de réseau multiplateforme qui fonctionne dans un navigateur. Il s'agit bibliothèque écrite en C qui enveloppe WebSockets et WebRTC. Elle gomme toutes les différences qui existent entre les navigateurs et les logiciels, ce qui facilite la création d'une fonctionnalité de réseau multi-joueurs pour les jeux, par exemple,  et autres applications.
- [µWebSockets](https://github.com/uWebSockets/uWebSockets): Déclinaison plus légère et plus performante de WebSocket et écrite en [C++11](https://isocpp.org/) et en [Node.js](https://nodejs.org/fr/).
- [ClusteWS](https://github.com/ClusterWS/ClusterWS): Framework léger, rapide et puissant qui permet de construire des application en [Node.js](https://nodejs.org/fr/).
- [Socket.IO](http://socket.io): API WebSocket puissante et multiplateformes en [Node.js](http://nodejs.org).
- [SocketCluster](https://socketcluster.io/#!/): Framework open source en temps réel en [Node.js](http://nodejs.org). Il prend en charge à la fois la communication directe client-serveur et la communication de groupe via les pub/sub canaux. Il est conçu pour s'adapter facilement à n'importe quel nombre de processus/hôtes et est idéal pour construire de chat de discution.
- [Node.js](http://nodejs.org).
- [Total.js](https://www.totaljs.com/): FrameWork pour web application en [Node.js](http://nodejs.org).
- [Faye](https://www.npmjs.com/package/faye-websocket): Combine WebSocket(bidirectionnelle) et EventSource(unidirectionnelle) , côté serveur et côté client en [Node.js](http://nodejs.org).
- [SignalR](http://signalr.net/): SignalR est une nouvelle bibliothèque pour les développeurs [ASP.NET](https://dotnet.microsoft.com/apps/aspnet). Elle simplifie l'ajout des WebSockets dans les applications. SignalR utilise les canaux de WebSockets lorsqu'elles sont disponibles,  dans le cas contraire elle utilise d'autres technos, sans modifier votre application.
- [Caddy](https://caddyserver.com/docs/websocket): Serveur web capable de créer des WebSockets serveur/proxy(stdin/stdout, echo, cat, ...).
- [ws](https://github.com/websockets/ws): La plus populaire des WebSockets pour client & serveur en [Node.js](http://nodejs.org).
- [jsonrpc-bidirectional](https://github.com/bigstepinc/jsonrpc-bidirectional): Asynchronous RPC which, on a single connection, may have functions exported on the server and, and the same time, on the client (client may call server, server may also call client).
- [cowboy](https://github.com/ninenines/cowboy): Cowboy est un petit serveur HTTP rapide et moderne pour Erlang/OTP basé sur WebSocket.

## Ressources liées

- [AJAX](/fr/docs/AJAX)
- [JavaScript](/fr/docs/Web/JavaScript)

## Spécifications

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Statut</th>
      <th scope="col">Commentaires</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName("HTML WHATWG", "web-sockets.html", "WebSocket API")}}
      </td>
      <td>{{Spec2("HTML WHATWG")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><a href="https://www.w3.org/TR/websockets/">WebSockets</a></td>
      <td><p>Candidat au statut de Recommendation</p></td>
      <td></td>
    </tr>
    <tr>
      <td>{{RFC(6455, "The WebSocket Protocol")}}</td>
      <td>IETF RFC</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("api.WebSocket")}}

## Voir aussi

- [RFC 6455 - Le protocole WebSocket](http://tools.ietf.org/html/rfc6455)
- [Les spécifications de l'API WebSocket](http://www.w3.org/TR/websockets/)
- [Server-Sent Events](/fr/docs/Web/API/Server-sent_events)
