---
title: Ecrire des applications client WebSocket
slug: Web/API/WebSockets_API/Writing_WebSocket_client_applications
l10n:
  sourceCommit: 9acc6b610330450a9101a670e0a087781e64ff7d
---

{{DefaultAPISidebar("WebSockets API")}}

Dans ce guide, nous présentons la mise en œuvre d'une application ping basée sur WebSocket. Dans cette application, le client envoie un message «&nbsp;ping&nbsp;» au serveur toutes les secondes, et le serveur répond par un message «&nbsp;pong&nbsp;». Le client écoute les messages «&nbsp;pong&nbsp;» et les journalise, en tenant le compte du nombre d'échanges de messages.

Bien que cette application soit assez minimale, elle couvre les points fondamentaux pour écrire un client WebSocket.

Vous pouvez trouver l'exemple complet sur <https://github.com/mdn/dom-examples/tree/main/websockets>. Le code côté serveur est écrit en [Deno <sup>(angl.)</sup>](https://deno.com/), vous devez donc l'installer d'abord si vous voulez exécuter l'exemple localement.

## Création d'un objet `WebSocket`

Pour communiquer en utilisant le protocole WebSocket, il faut créer un objet {{DOMxRef("WebSocket")}}. Dès que vous créez cet objet, il tente automatiquement de se connecter au serveur défini.

```js
const wsUri = "ws://127.0.0.1/";
const websocket = new WebSocket(wsUri);
```

Le constructeur `WebSocket` prend un argument obligatoire — l'URL du serveur WebSocket auquel se connecter. Dans ce cas, comme le serveur fonctionne en local, on utilise l'adresse localhost.

> [!NOTE]
> Dans cet exemple, nous utilisons le protocole `ws` pour la connexion, car nous nous connectons à localhost. Dans une application réelle, les pages web doivent être servies en HTTPS, et la connexion WebSocket doit utiliser le protocole `wss`.

Le constructeur accepte un autre argument optionnel [`protocols`](/fr/docs/Web/API/WebSocket/WebSocket#protocols), qui permet à un serveur d'implémenter plusieurs sous-protocoles. Cette fonctionnalité n'est pas utilisée dans notre exemple.

Le constructeur lève une exception `SecurityError` si la destination n'autorise pas l'accès.
Cela peut arriver si vous tentez d'utiliser une connexion non sécurisée (la plupart des {{Glossary("user agent", "agents utilisateur")}} exigent désormais un lien sécurisé pour toutes les connexions WebSocket, sauf si elles sont sur le même appareil ou éventuellement sur le même réseau).

## Écouter l'évènement `open`

Créer une instance de `WebSocket` lance le processus d'établissement d'une connexion avec le serveur. Une fois la connexion établie, l'évènement {{DOMxRef("WebSocket.open_event", "open")}} est déclenché, et à partir de ce moment le socket peut transmettre des données.

Dans l'exemple ci-dessous, lorsque l'évènement `open` est déclenché, on commence à envoyer un message «&nbsp;ping&nbsp;» au serveur chaque seconde, en utilisant l'API {{DOMxRef("Window.setInterval()")}}&nbsp;:

```js
websocket.addEventListener("open", () => {
  log("CONNECTÉ");
  pingInterval = setInterval(() => {
    log(`ENVOYÉ : ping: ${counter}`);
    websocket.send("ping");
  }, 1000);
});
```

## Écouter les erreurs

Si une erreur se produit lors de l'établissement de la connexion ou à tout moment après son établissement, l'évènement {{DOMxRef("WebSocket.error_event", "error")}} sera déclenché.

Notre application ne fait rien de particulier en cas d'erreur, mais nous l'enregistrons dans les logs&nbsp;:

```js
websocket.addEventListener("error", (e) => {
  log(`ERREUR`);
});
```

En cas d'erreur, la connexion est fermée et l'évènement `close` sera déclenché.

## Envoyer des messages

Nous avons déjà vu qu'une fois la connexion établie, nous pouvons utiliser la méthode {{DOMxRef("WebSocket.send()", "send()")}} pour envoyer des messages au serveur&nbsp;:

```js
websocket.addEventListener("open", () => {
  log("CONNECTÉ");
  pingInterval = setInterval(() => {
    log(`ENVOYÉ : ping: ${counter}`);
    websocket.send("ping");
  }, 1000);
});
```

Dans notre exemple, nous envoyons du texte, mais vous pouvez aussi envoyer des données binaires sous forme de {{DOMxRef("Blob")}}, {{JSxRef("ArrayBuffer")}}, {{JSxRef("TypedArray")}} ou {{JSxRef("DataView")}}.

Une approche courante consiste à utiliser {{Glossary("JSON")}} pour envoyer des objets JavaScript sérialisés sous forme de texte. Par exemple, au lieu d'envoyer simplement le message texte «&nbsp;ping&nbsp;», notre client pourrait envoyer un objet sérialisé incluant le nombre de messages échangés jusqu'à présent&nbsp;:

```js
const message = {
  iteration: counter,
  content: "ping",
};
websocket.send(JSON.stringify(message));
```

La méthode `send()` est asynchrone&nbsp;: elle n'attend pas que les données soient transmises avant de retourner à l'appelant. Elle ajoute simplement les données à son tampon interne et commence le processus de transmission. La propriété {{DOMxRef("WebSocket.bufferedAmount")}} représente le nombre d'octets qui n'ont pas encore été transmis. Notez que le protocole WebSockets utilise {{Glossary("UTF-8")}} pour encoder le texte, donc `bufferedAmount` est calculé en fonction de l'encodage UTF-8 de toute donnée textuelle en attente.

## Recevoir des messages

Pour recevoir des messages du serveur, nous écoutons l'évènement {{DOMxRef("WebSocket.message_event", "message")}}.

Notre gestionnaire d'évènement pour les messages journalise le message reçu et incrémente notre compteur du nombre d'échanges de messages&nbsp;:

```js
websocket.addEventListener("message", (e) => {
  log(`REÇU : ${e.data} : ${counter}`);
  counter++;
});
```

Le serveur peut aussi envoyer des données binaires, qui sont exposées aux client·e·s sous forme de {{DOMxRef("Blob")}} ou de {{JSxRef("ArrayBuffer")}}, selon la valeur de la propriété {{DOMxRef("WebSocket.binaryType")}}.

Comme nous l'avons vu pour l'envoi de messages, le serveur peut aussi envoyer des chaînes JSON, que le client peut alors analyser en objet&nbsp;:

```js
websocket.addEventListener("message", (e) => {
  const message = JSON.parse(e.data);
  log(`REÇU : ${message.iteration} : ${message.content}`);
  counter++;
});
```

## Gérer la déconnexion

Lorsque la connexion est fermée, que ce soit par le client, le serveur ou à cause d'une erreur, l'évènement {{DOMxRef("WebSocket.close_event", "close")}} sera déclenché.

Notre application écoute l'évènement `close` et nettoie le minuteur d'intervalle lorsqu'il est déclenché&nbsp;:

```js
websocket.addEventListener("close", () => {
  log("DÉCONNECTÉ");
  clearInterval(pingInterval);
});
```

## Travailler avec le bfcache

La cache de navigation arrière/avant, ou {{Glossary("bfcache")}}, permet une navigation retour/avance beaucoup plus rapide entre les pages récemment visitées par l'utilisateur·ice. Elle le fait en stockant un instantané complet de la page, y compris le tas JavaScript.

Le navigateur met en pause puis reprend l'exécution JavaScript lorsqu'une page est ajoutée à la bfcache ou restaurée depuis celle-ci. Cela signifie que, selon ce que fait la page, il n'est pas toujours sûr pour le navigateur d'utiliser la bfcache pour cette page. Si le navigateur détermine que ce n'est pas sûr, la page ne sera pas ajoutée à la bfcache, et l'utilisateur·ice ne bénéficiera pas du gain de performance que cela peut apporter.

Les navigateurs n'utilisent pas tous les mêmes critères pour ajouter une page à la bfcache, et le fait d'avoir une connexion WebSocket ouverte peut empêcher le navigateur d'ajouter votre page à la bfcache. Il est donc recommandé de fermer votre connexion lorsque l'utilisateur·ice a fini avec votre page. L'évènement le plus adapté pour cela est {{DOMxRef("Window.pagehide_event", "pagehide")}}.

Nous faisons cela dans notre application d'exemple&nbsp;:

```js
window.addEventListener("pagehide", () => {
  if (websocket) {
    log("FERMETURE");
    websocket.close();
    websocket = null;
    window.clearInterval(pingInterval);
  }
});
```

Inversement, en écoutant l'évènement {{DOMxRef("Window.pageshow_event", "pageshow")}}, vous pouvez rétablir la connexion lorsque la page est restaurée depuis la bfcache. Dans l'exemple suivant, nous démarrons la connexion initiale au premier chargement de la page et nous ne nous reconnectons que lorsque la page est restaurée (en vérifiant `event.persisted`)&nbsp;:

```js
let websocket = null;

function initializeWebSocketListeners(ws) {
  ws.addEventListener("open", () => {
    log("CONNECTÉ");
    pingInterval = setInterval(() => {
      log(`ENVOYÉ : ping: ${counter}`);
      ws.send("ping");
    }, 1000);
  });

  ws.addEventListener("close", () => {
    log("DÉCONNECTÉ");
    clearInterval(pingInterval);
  });

  ws.addEventListener("message", (e) => {
    log(`REÇU : ${e.data}: ${counter}`);
    counter++;
  });

  ws.addEventListener("error", (e) => {
    log(`ERREUR`);
  });
}

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    websocket = new WebSocket(wsUri);
    initializeWebSocketListeners(websocket);
  }
});

log("OUVERTURE");
websocket = new WebSocket(wsUri);
initializeWebSocketListeners(websocket);
```

Si vous exécutez notre exemple, essayez de naviguer vers une autre page, puis revenez à l'exemple. Dans Chrome, vous devriez voir que l'exemple rétablit la connexion et conserve son contexte d'origine&nbsp;: par exemple, il se souvient du nombre de messages échangés.

Consultez l'article [web.dev sur la bfcache <sup>(angl.)</sup>](https://web.dev/articles/bfcache#close-open-connections) pour plus de détails sur la compatibilité de la bfcache et l'API WebSockets.

Sur les navigateurs qui le prennent en charge, vous pouvez [utiliser la propriété `notRestoredReasons` de l'API Performance](/fr/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) pour obtenir la raison pour laquelle une page n'a pas été ajoutée à la bfcache.

## Considérations de sécurité

Il est déconseillé d'utiliser les WebSockets dans un environnement mixte&nbsp;; il ne faut pas ouvrir de connexion WebSocket non sécurisée depuis une page chargée en HTTPS, ou inversement.
La plupart des navigateurs n'autorisent désormais que les connexions WebSocket sécurisées, et ne prennent plus en charge leur utilisation dans des contextes non sécurisés.
