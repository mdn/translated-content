---
title: Utiliser les évènements envoyés par le serveur
slug: Web/API/Server-sent_events/Using_server-sent_events
tags:
  - Advanced
  - Communication
  - DOM
  - Guide
  - SSE
  - Server Sent Events
  - Server-sent events
  - messaging
translation_of: Web/API/Server-sent_events/Using_server-sent_events
---
{{DefaultAPISidebar("Server Sent Events")}}

Développer une application web qui utilise des [évènements envoyés par le serveur](/fr/docs/Web/API/Server-sent_events) (_server-sent events_ en anglais) est relativement simple. Côté serveur, on aura besoin d'un bout de code qui puisse transmettre des évènements à l'application web&nbsp;; côté client, le fonctionnement est quasi identique à celui qu'on utilise pour les [websockets](/fr/docs/Web/API/WebSockets_API) et notamment la gestion d'évènements entrants. Il s'agit d'une connexion unidirectionnelle : on ne peut pas envoyer d'évènements du client vers le serveur.

## Recevoir des évènements du serveur

L'API des évènements serveur est exposée par l'interface [`EventSource`](/fr/docs/Web/API/EventSource)&nbsp;; pour ouvrir une connexion vers le serveur afin de commencer à recevoir des évènements de celui-ci, on crée un nouvel objet `EventSource`, en spécifiant l'URL d'un script côté serveur qui va générer les évènements. Par exemple&nbsp;:

```js
const evtSource = new EventSource("ssedemo.php");
```

Si le script qui génère les évènements est hébergé sur une origine différente, le nouvel objet `EventSource` doit être créé en spécifiant à la fois l'URL et un dictionnaire d'options. Par exemple, en supposant que le script client est sur example.com&nbsp;:

```js
const evtSource = new EventSource("//api.example.com/ssedemo.php", { withCredentials: true } );
```

Une fois que la source d'évènement a été instanciée, on peut écouter les messages provenant du serveur en attachant un gestionnaire d'évènement pour [`message`](/fr/docs/Web/API/MessageEvent)&nbsp;:

```js
evtSource.onmessage = function(event) {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");

  newElement.textContent = "message: " + event.data;
  eventList.appendChild(newElement);
}
```

Ce code écoute les messages entrants (plus précisément, les notifications venant du serveur qui n'ont pas de champ `event` attaché) et ajoute le texte des messages à une liste dans le contenu HTML du document.

On peut aussi écouter les évènements avec `addEventListener()`&nbsp;:

```js
evtSource.addEventListener("ping", function(event) {
  const newElement = document.createElement("li");
  const time = JSON.parse(event.data).time;
  newElement.textContent = "ping at " + time;
  eventList.appendChild(newElement);
});
```

Ce fragment de code est similaire au précédent, mais sera appelé automatiquement si le serveur envoie un message dont le champ `event` est `ping`&nbsp;; il analysera alors le JSON dans le champ `data` et l'affichera.

> **Attention :** **Lorsque HTTP/2 n'est pas utilisé**, les évènements serveurs sont limités par le nombre maximal de connexion ouvertes, notamment quand on a plusieurs onglets ouverts. La limite est fixée _par le navigateur_ et vaut 6 pour chaque origine (voir les bugs [Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=275955) et [Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=906896)). On pourra avoir 6 connexions pour les évènements serveurs parmi tous les onglets ouverts sur `www.example1.com`, 6 autres pour tous les onglets sur `www.example2.com` (voir cette réponse [Stack Overflow](https://stackoverflow.com/a/5326159/1905229)). Avec HTTP/2, le nombre de flux HTTP simultanés est négocié entre le serveur et le client et vaut 100 par défaut.

## Envoyer un évènement depuis le serveur

Le script côté serveur qui envoie les évènements doit répondre en utilisant le type MIME `text/event-stream`. Chaque notification est envoyée sous la forme d'un bloc de texte se terminant par une paire de caractères saut de ligne (`\n`). Pour plus de détails sur le format du flux d'évènements, voir [la section ci-après](#event_stream_format).

Voici le code [PHP](/fr/docs/Glossary/PHP) que nous utilisons pour notre exemple&nbsp;:

```php
date_default_timezone_set("America/New_York");
header("Cache-Control: no-cache");
header("Content-Type: text/event-stream");

$counter = rand(1, 10);
while (true) {
  // Chaque seconde, on envoie un évènement "ping".

  echo "event: ping\n";
  $curDate = date(DATE_ISO8601);
  echo 'data: {"time": "' . $curDate . '"}';
  echo "\n\n";

  // Envoi d'un message simple à fréquence aléatoire.

  $counter--;

  if (!$counter) {
    echo 'data: Message envoyé à ' . $curDate . "\n\n";
    $counter = rand(1, 10);
  }

  ob_end_flush();
  flush();

  // On ferme la boucle si le client a interrompu la connexion
  // (par exemple en fermant la page)

  if ( connection_aborted() ) break;

  sleep(1);
}
```

Ce code génère un évènement de type «&nbsp;ping&nbsp;» à chaque seconde. La donnée de chaque évènement est un objet JSON contenant un horodatage ISO 8601 qui correspond à l'heure à laquelle l'évènement a été généré. À des intervalles aléatoires, un message simple (sans type d'évènement) est envoyé.

La boucle s'exécute indépendamment du statut de la connexion, on a donc une vérification pour terminer l'exécution si la connexion a été terminée.

> **Note :** Vous pouvez trouver un exemple complet utilisant le code ci-dessus sur GitHub : voir [Démonstration d'évènements serveur avec PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Gestion des erreurs

Quand un problème survient (tel qu'un délai de réponse dépassé ou une erreur liée au [contrôle d'accès](/fr/docs/Web/HTTP/CORS)), un évènement `error` est généré. Vous pouvez traiter ces cas d'erreur en implémentant la fonction de rappel `onerror` sur l'objet `EventSource`.

```js
evtSource.onerror = function(err) {
  console.error("EventSource failed:", err);
};
```

## Fermer les flux d'évènements

Par défaut, si la connexion entre le client et le serveur est rompue, elle sera relancée. Il est possible de la fermer explicitement à l'aide de la méthode `.close()`.

```js
evtSource.close();
```

## Format du flux d'évènements

Le flux d'évènements est un simple flux de données de texte, qui doit être encodé en [UTF-8](/fr/docs/Glossary/UTF-8). Les messages dans le flux d'évènements sont séparés par une paire de sauts de ligne. Un caractère deux-points «&nbsp;:&nbsp;» en début de ligne représente un commentaire, et est ignoré.

> **Note :** Une ligne de commentaire peut être utilisée pour empêcher les connexions d'expirer. Un serveur peut envoyer périodiquement des commentaires afin de garder la connexion ouverte.

Chaque message consiste en une ou plusieurs lignes de texte décrivant les champs de ce message. Chaque champ est représenté par le nom du champ, suivi d'un «&nbsp;:&nbsp;», suivi des données de texte pour la valeur de ce champ.

### Champs

Chaque message reçu contient un ou plusieurs de ces champs, un par ligne  :

- `event`
  - : Une chaîne identifiant le type d'évènement décrit. S'il est spécifié, un évènement sera envoyé dans le navigateur à l'écouteur défini pour l'évènement spécifié. Le code source de l'application doit utiliser `addEventListener()` pour écouter des évènements nommés. Le gestionnaire `onmessage` est appelé si aucun nom d'évènement n'est spécifié dans un message.
- `data`
  - : Le champ de données du message. Lorsque l'`EventSource` reçoit plusieurs lignes de message consécutives commençant par `data:`, [il les concatène](https://www.w3.org/TR/eventsource/#dispatchMessage), en ajoutant un caractère saut de ligne entre chacune d'elles. Les sauts de ligne en fin de message sont supprimés.
- `id`
  - : L'identifiant d'évènement, qui sera mémorisé comme valeur d'identifiant du dernier évènement de l'objet `EventSource`.
- `retry`
  - : Le délai de reconnexion à utiliser lors de la tentative d'envoi de l'évènement. Il doit être un nombre entier, spécifiant le temps de reconnexion en millisecondes. Si une valeur non entière est spécifiée, le champ est ignoré.

Tous les autres noms de champs sont ignorés.

> **Note :** Si une ligne ne contient aucun caractère deux-points, la ligne entière est considérée comme le nom du champ, avec un contenu vide.

### Exemples

#### Messages contenant uniquement des données

Dans l'exemple suivant, trois messages sont envoyés. Le premier est simplement un commentaire, car il débute par un caractère deux-points. Comme mentionné précédemment, cela peut être utile pour maintenir la connexion si des messages doivent être transmis de façon irrégulière.

Le deuxième message contient un champ `data` avec la valeur `"du texte"`. Le troisième message contient un champ `data` avec la valeur `"un autre message\nsur deux lignes"`. On notera le caractère saut de ligne dans la valeur.

```bash
: this is a test stream

data: du texte

data: un autre message
data: sur deux lignes
```

#### Évènements nommés

Cet exemple envoie une série d'évènements nommés. Chacun a un nom d'évènement spécifié par le champ `event`, et un champ `data` dont la valeur est une chaîne JSON appropriée avec les données nécessaires au client pour réagir à l'évènement. Le champ `data` peut évidemment contenir n'importe quelles données textuelles, il n'est pas obligatoirement au format JSON.

```bash
event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}

event: userdisconnect
data: {"username": "bobby", "time": "02:34:23"}

event: usermessage
data: {"username": "sean", "time": "02:34:36", "text": "Bye, bobby."}
```

#### Mélanger les types de message

Il n'est pas obligatoire d'utiliser uniquement des messages sans nom ou des évènements nommés. Vous pouvez mélanger les deux dans un même flux d'évènements.

```bash
event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

data: Ici un message système quelconque qui sera utilisé
data: pour accomplir une tâche.

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}
```

## Compatibilité des navigateurs

{{Compat("api.EventSource")}}
