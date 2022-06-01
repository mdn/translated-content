---
title: Ecrire des applications client WebSocket
slug: Web/API/WebSockets_API/Writing_WebSocket_client_applications
translation_of: Web/API/WebSockets_API/Writing_WebSocket_client_applications
---
Les WebSockets représentent une technologie, basée sur le protocole web socket, qui permet d'établir une session de communication bilatérale entre un navigateur web et un serveur. Un navigateur web est un exemple typique de client websocket typique mais le protocole n'est dépendant d'aucune plateforme.

> **Note :** Un exemple d'utilisation des WebSockets à travers un système de chat sera mis à disposition sous forme de code dès que nos infrastructures seront en mesure de supporter les WebSockets.

{{AvailableInWorkers}}

## Création d'un objet WebSocket

Pour utiliser le protocole WebSocket, il faut créer un objet [`WebSocket`](/en/WebSockets/WebSockets_reference/WebSocket) ; celui-ci essaiera automatiquement d'ouvrir une connexion avec le server.

Le constructeur WebSocket accepte un paramètre obligatoire et un paramètre optionnel :

    WebSocket WebSocket(
      in DOMString url,
      in optional DOMString protocols
    );

    WebSocket WebSocket(
      in DOMString url,
      in optional DOMString[] protocols
    );

- `url`
  - : L'URL à laquelle le client se connecte, et le serveur répond.
- `protocols` {{ optional_inline() }}
  - : Soit une chaîne décrivant un protocole unique, soit une liste de chaînes décrivant chacune un protocole. Ces chaînes permettent d'indiquer des sous-protocoles, de façon à ce qu'un serveur puisse implémenter plusieurs sous-protocoles WebSocket (par example, on pourrait vouloir qu'un serveur soit capable de traiter différents types d'interactions en fonction du protocole spécifié). Si aucun protocole n'est spécifié, l'argument prend la valeur d'une chaîne vide.

Le constructeur peut renvoyer des exceptions:

- `SECURITY_ERR`
  - : Le port sur lequel on essaie d'établir la connexion est bloqué.

<!---->

### Erreurs de connexion

Si une erreur se produit lors de la tentative de connexion, un évènement nommé "error" est d'abord renvoyé à l'objet  [`WebSocket`](/en/WebSockets/WebSockets_reference/WebSocket) (invoquant ainsi son gestionnaire d'évènement `onerror`) suivi d'un évènement [`CloseEvent`](/en/WebSockets/WebSockets_reference/CloseEvent) (qui invoque alors son gestionnaire d'évènement `onclose`) indiquant la raison de la clôture.

A partir de Firefox 11, un message d'erreur descriptif est envoyé à la console de la plateforme Mozilla, et un code de fermeture tel que défini dans la [RFC 6455, Section 7.4](http://tools.ietf.org/html/rfc6455#section-7.4) est envoyé à travers l'évènement [`CloseEvent`](/en/WebSockets/WebSockets_reference/CloseEvent).

### Exemples

Cet exemple simple crée un nouvel objet WebSocket, qui se connecte au serveur à l'adresse `ws://www.example.com/socketserver`. Un protocole spécifique "protocolOne" est indiqué dans cette exemple, bien qu'il ne soit pas obligatoire.

```js
var exampleSocket = new WebSocket("ws://www.example.com/socketserver", "protocolOne");
```

Lorsque la connexion est établie, la propriété `readyState` de l'objet `exampleSocket` prend la valeur `CONNECTING`. Sa valeur devient `OPEN` une fois que la connexion est prête à transférer des données.

Pour ouvrir une connexion flexible quant aux protocoles supportés, on spécifie une liste de protocoles:

```js
var exampleSocket = new WebSocket("ws://www.example.com/socketserver", ["protocolOne", "protocolTwo"]);
```

Une fois la connexion établie (c'est-à-dire quand `readyState` a la valeur `OPEN`), la propriété `protocol` indique quel protocole le server a sélectionné.

Dans les exemples ci-dessus on a remplacé  `http` par `ws`, et de la même façon on peut remplacer `https` par  `wss` . L'établissement d'une connexion WebSocket repose sur le méchanisme HTTP Upgrade, donc la requête pour l'upgrade de protocole est implicite lorsqu'on s'adresse au server HTTP avec `ws://www.example.com` ou `wss://www.example.com`.

## Envoi de données vers le serveur

Une fois la connexion ouverte on peut commencer à tranférer des données vers le serveur en appelant la méthode  [`send()`](</en/WebSockets/WebSockets_reference/WebSocket#send()>) de l'objet `WebSocket` pour chaque message que l'on veut envoyer :

Les données peuvent être envoyées sous forme de chaîne {{ domxref("Blob") }} ou de  [`ArrayBuffer`](/en/JavaScript_typed_arrays/ArrayBuffer).

> **Note :** Avant la version 11, Firefox supportait l'envoi de données uniquement sous forme de chaîne.

Comme l'établissement d'une connexion est asynchrone, et peut potentiellemet échouer, appeler la méthode `send()` juste après la création d'un objet WebSocket peut ne pas fonctionner. Il est plus sûr de définir un gestionnaire d'évènement `onopen`, et de n'essayer d'envoyer des données que lorsqu'il est appelé.

```js
exampleSocket.onopen = function (event) {
  exampleSocket.send("Voici un texte que le serveur attend de recevoir dès que possible !");
};
```

### Utilisation de JSON pour transmettre des objets

Il peut être utile d'utiliser [JSON](/en/JSON) pour envoyer des données complexes au serveur. Par exemple, un programme de chat peut interagir avec un serveur en utilisant un protocole qui implémente l'échange de paquets contenant des données encapsulées en JSON:

```js
// Envoi d'un texte à tous les utilisateurs à travers le serveur
function sendText() {
  // Création d'un objet msg qui contient les données
  // dont le serveur a besoin pour traiter le message
  var msg = {
    type: "message",
    text: document.getElementById("text").value,
    id:   clientID,
    date: Date.now()
  };

  // Envoi de l'objet msg à travers une chaîne formatée en JSON
  exampleSocket.send(JSON.stringify(msg));

  // Efface le texte de l'élément input
  // afin de recevoir la prochaine ligne de texte
  // que l'utilisateur va saisir
  document.getElementById("text").value = "";
}
```

## Réception de données du serveur

WebSockets est une API orientée évènement; lorsqu'elle reçoit un message, un évènement "message" est envoyé au gestionnaire d'évènement `onmessage`. Pour écouter les données reçues, on peut écrire quelque chose comme:

```js
exampleSocket.onmessage = function (event) {
  console.log(event.data);
}
```

### Réception et interprétation d'objets JSON

Considérons l'application de chat évoquée dans [Utilisation de JSON pour transmettre des objets](#utilisation_de_json_pour_transmettre_des_objets). Le client peut recevoir différents types de paquets de données, tels que:

- établissement d'une liaison (handshaking)
- message texte
- mise à jour de la liste d'utilisateurs

Le code qui interprète ces messages entrants pourrait être:

```js
exampleSocket.onmessage = function(event) {
  var f = document.getElementById("chatbox").contentDocument;
  var text = "";
  var msg = JSON.parse(event.data);
  var time = new Date(msg.date);
  var timeStr = time.toLocaleTimeString();

  switch(msg.type) {
    case "id":
      clientID = msg.id;
      setUsername();
      break;
    case "username":
      text = "<b>User <em>" + msg.name + "</em> signed in at " + timeStr + "</b><br>";
      break;
    case "message":
      text = "(" + timeStr + ") <b>" + msg.name + "</b>: " + msg.text + "<br>";
      break;
    case "rejectusername":
      text = "<b>Your username has been set to <em>" + msg.name + "</em> because the name you chose is in use.</b><br>"
      break;
    case "userlist":
      var ul = "";
      for (i=0; i < msg.users.length; i++) {
        ul += msg.users[i] + "<br>";
      }
      document.getElementById("userlistbox").innerHTML = ul;
      break;
  }

  if (text.length) {
    f.write(text);
    document.getElementById("chatbox").contentWindow.scrollByPages(1);
  }
};
```

Ici nous utilisons [`JSON.parse()`](/en/JavaScript/Reference/Global_Objects/JSON/parse) pour convertir l'objet JSON en l'objet original, avant de l'examiner et le traiter.

### Encodage du texte

Le texte reçu à travers une connexion WebSocket est encodé au format UTF-8.

Avant Gecko 9.0 {{ geckoRelease("9.0") }}, certains charactères spéciaux dans une chaîne UTF-8 provoquaient l'interruption de la connexion. Maintenant Gecko accepte ces caractères.

## Fermeture de la connexion

Quand on n'a plus besoin de la connexion WebSocket, on appelle la méthode [`close()`](</en/WebSockets/WebSockets_reference/WebSocket#close()>) de l'objet WebSocket:

```js
exampleSocket.close();
```

Il peut être utile de vérifier la valeur de l'attribut `bufferedAmount` avant de fermer la connexion, pour s'assurer qu'il ne reste pas des données qui n'ont pas été transmises.

## Considérations de sécurité

Il est déconseillé d'utiliser les WebSockets dans un environnement mixte, c'est-à-dire qu'il ne faut pas établir de connexion Websocket non sécurisée depuis une page chargée en HTTPS, et inversement. Certains navigateurs l'interdisent explicitement, comme Firefox à partir de la version 8.
