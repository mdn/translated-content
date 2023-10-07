---
title: Comment faire pour que les PWAs relancent les utilisateurs en utilisant des notifications et des messages poussés
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames/Loading", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

Avoir la possibilité de mettre en cache le contenu d'une application pour travailler en mode déconnecté est une formidable fonctionnalité. Donner la possibilité à l'utilisateur d'installer l'application web sur son écran d'accueil est encore mieux. Mais plutôt que de s'en remettre seulement aux actions de l'utilisateur, nous pouvons faire plus, en utilisant des messages poussés et des notifications pour le relancer automatiquement et fournir des nouveaux contenus à chaque fois qu'ils sont disponibles.

## Deux APIs, un seul but

L'[API Push](/fr/docs/Web/API/Push_API) et l'[API Notifications](/fr/docs/Web/API/Notifications_API) sont deux APIs distinctes mais elles fonctionnent bien ensemble quand vous souhaitez fournir une fonction de relance dans votre application. Push est utilisée pour délivrer un nouveau contenu à votre application depuis le serveur sans aucune intervention côté client et cette opération est gérée par le service worker de l'application. Les notifications peuvent être utilisées par le service worker pour afficher les nouvelles informations à l'utilisateur, ou, du moins, le prévenir que quelque chose a été mis à jour.

Cela s'exécute en dehors de la fenêtre du navigateur, tout comme les service workers, de sorte que les mises à jour peuvent être poussées et que des notifications peuvent être affichées lorsque la page de l'application n'a pas le focus ou même est fermée.

## Notifications

Commençons avec les notifications — elles peuvent fonctionner sans push, mais sont très utiles quand elles sont combinées avec. Voyons-les de façon isolée pour commencer.

### Demande de permission

Pour afficher une notification, nous devons d'abord demander la permission de le faire. Cependant, au lieu d'afficher la notification immédiatement, une meilleure pratique consiste à n'afficher la fenêtre popup que lorsque l'utilisateur le demande en cliquant sur un bouton&nbsp;:

```js
const button = document.getElementById("notifications");
button.addEventListener("click", () => {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      randomNotification();
    }
  });
});
```

Il s'agit d'une fenêtre contextuelle utilisant le service de notification du système d'exploitation&nbsp;:

![Notification de js13kPWA.](js13kpwa-notification.png)

Une fois que l'utilisateur a confirmé qu'il veut recevoir des notifications, l'application peut alors lui afficher. Le résultat de l'action de l'utilisateur peut être <i lang="en">default</i> (défault), <i lang="en">granted</i> (autorisé) ou <i lang="en">denied</i> (interdit). L'option default est choisie quand l'utilisateur n'a pas fait de choix et les deux autres sont sélectionnées selon que l'utilisateur a respectivement cliqué sur oui ou non.

Si la permission est donnée, elle vaut à la fois pour les notifications et les messages poussés.

### Créer une notification

L'application d'exemple crée une notification en utilisant les données disponibles — un jeu est choisi au hasard et les données associées sont utilisées pour générer le contenu de la notification&nbsp;: le nom du jeu pour le titre, la mention de l'auteur dans le corps du texte et l'image pour l'icone&nbsp;:

```js
function randomNotification() {
  const randomItem = Math.floor(Math.random() * games.length);
  const notifTitle = games[randomItem].name;
  const notifBody = `Created by ${games[randomItem].author}.`;
  const notifImg = `data/img/${games[randomItem].slug}.jpg`;
  const options = {
    body: notifBody,
    icon: notifImg,
  };
  new Notification(notifTitle, options);
  setTimeout(randomNotification, 30000);
}
```

Une nouvelle notification est créée au hasard toutes les 30 secondes jusqu'à ce que ça devienne trop pénible et que ce soit désactivé par l'utilisateur (pour une vraie application, les notifications devraient être moins fréquentes et plus utiles). L'avantage de l'API Notifications est qu'elle utilise la fonction de notification du système d'exploitation. Ceci signifie que les notifications peuvent être affichées à l'utilisateur même quand il ne regarde pas l'application et que les notifications ont le même aspect que celles affichées par les applications natives.

## Push

Pousser (<i lang="en">push</i>) est plus compliqué que de faire des notifications — nous avons besoin de nous abonner à un serveur qui enverra ensuite les données en retour à l'application. Le Service Worker de l'application recevra les données du serveur qui les a poussées et pourra ensuite les afficher en utilisant le système de notifications ou un autre mécanisme si on le souhaite.

La technologie en est toujours à ses tous débuts — certains exemples fonctionnels utilisent la plateforme Cloud de messagerie de Google, mais elles sont en cours de réécriture pour prendre en charge [VAPID](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/) (<i lang="en">Voluntary Application Identification</i>) qui offre une couche de sécurité supplémentaire pour votre application. Vous pouvez étudier les [exemples du Cookbook des Service Workers](https://github.com/mdn/serviceworker-cookbook/push-payload.html), essayer de mettre en place un serveur d'émission de messages utilisant [Firebase](https://firebase.google.com/) ou construire votre propre serveur (en utilisant Node.js par exemple).

Comme mentionné précédemment, pour être capable de recevoir des messages poussés, vous devez avoir un service worker dont les fondamentaux ont déjà été expliqué dans l'article [Permettre aux PWAs de fonctionner en mode hors connexion grâce aux Service workers](/fr/docs/Web/Apps/Progressive/Offline_Service_workers). Au sein du service worker, un mécanisme d'abonnement au service push est créé en appelant la méthode [`getSubscription()`](/fr/docs/Web/API/PushManager/getSubscription) de l'interface [`PushManager`](/fr/docs/Web/API/PushManager).

```js
navigator.serviceWorker.register("service-worker.js").then((registration) => {
  return registration.pushManager.getSubscription().then(/* ... */);
});
```

Une fois que l'utilisateur est abonné, il peut recevoir des notifications poussées du serveur.

Du côté serveur, le processus tout entier doit être chiffré avec des clefs publique et privée par raison de sécurité — permettre à tout le monde d'envoyer des messages poussés non sécurisés en utilisant votre application serait une terrible idée. Voir la [page de test de chffirement des données web poussées](https://jrconlin.github.io/WebPushDataTestPage/) pour avoir des informations détaillées concernant la sécurisation du serveur. Le serveur enregistre toutes les informations reçues quand un utilisateur s'enregistre si bien que les messages peuvent être envoyés plus tard quand c'est nécessaire.

Pour recevoir des messages poussés, nous pouvons écouter l'événement [`push`](/fr/docs/Web/API/ServiceWorkerGlobalScope/push_event) dans le fichier du Service Worker:

```js
self.addEventListener("push", (e) => {
  /* ... */
});
```

Les données peuvent être récupérées puis affichées immédiatement à l'utilisateur sous forme d'une notification. Ceci, par exemple, peut être utilisé pour rappeler à l'utilisateur quelque chose ou pour l'informer d'un nouveau contenu disponible dans l'application.

### Exemple de Push

Push requiert que la partie serveur fonctionne, donc nous ne pouvons pas l'inclure dans l'exemple js13kPWA hébergé dans les pages GitHub puisqu'elles ne permettent que de servir que des fichiers statiques. C'est entièrement expliqué dans le [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook) — voir la [démonstration de charge utile poussée](https://github.com/mdn/serviceworker-cookbook/tree/master/push-payload).

Cette démonstration comporte trois fichiers:

- [index.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/index.js), qui contient le code source de notre application
- [server.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/server.js), qui contient la partie serveur (écrit en Node.js)
- [service-worker.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/service-worker.js), qui contient le code spécifique du Service Worker.

Explorons tout ceci.

#### index.js

Le fichier `index.js` commence par enregistrer le service worker&nbsp;:

```js
navigator.serviceWorker
  .register("service-worker.js")
  .then((registration) => {
    return registration.pushManager
      .getSubscription()
      .then(async (subscription) => {
        // partie relative à l'enregistrement
      });
  })
  .then((subscription) => {
    // partie relative à l'abonnement
  });
```

C'est un petit peu plus compliqué que le service worker que nous avons vu dans la [démonstration de js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/). Dans ce cas particulier, après l'enregistrement, nous utilisons l'objet d'enregistrement pour nous abonner, puis nous utilisons l'objet d'abonnement résultant pour terminer l'ensemble du processus.

Dans la partie enregistrement, le code ressemble à ceci&nbsp;:

```js
async (subscription) => {
  if (subscription) {
    return subscription;
  }
};
```

Si l'utilisateur s'est déjà abonné, nous renvoyons l'objet d'abonnement et passons à la partie abonnement. Dans le cas contraire, nous initialisons un nouvel abonnement&nbsp;:

```js
const response = await fetch("./vapidPublicKey");
const vapidPublicKey = await response.text();
const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
```

L'application récupère la clef publique du serveur et convertit la réponse sous forme de texte&nbsp;; puis cette réponse doit être convertie en un tableau de nombre entier non signé (Uint8Array (pour une prise en charge par Chrome). Pour en apprendre davantage sur les clefs VAPID, vous pouvez lire le message de blog [Envoyer des notifications WebPush identitées par VAPID via le service de Push de Mozilla](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/).

L'application peut maintenant utiliser l'interface [`PushManager`](/fr/docs/Web/API/PushManager) pour abonner le nouvel utilisateur. Il y a deux options passées à la méthode [`PushManager.subscribe()`](/fr/docs/Web/API/PushManager/subscribe) — la première est `userVisibleOnly: true`, qui signifie que toutes les notifications envoyées à l'utilisateur lui seront visibles et la seconde est `applicationServerKey`, qui contient notre clef VAPID une fois récupérée et convertie avec succès.

```js
registration.pushManager.subscribe({
  userVisibleOnly: true,
  applicationServerKey: convertedVapidKey,
});
```

Maintenant, allons voir la partie abonnement — l'application envoie d'abord les détails de l'abonnement au format JSON au serveur en utilisant Fetch.

```js
fetch("./register", {
  method: "post",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({ subscription }),
});
```

Puis la fonction [`onclick`](/fr/docs/Web/API/Element/click_event) du bouton _Abonnement_ est définie&nbsp;:

```js
document.getElementById("doIt").onclick = () => {
  const payload = document.getElementById("notification-payload").value;
  const delay = document.getElementById("notification-delay").value;
  const ttl = document.getElementById("notification-ttl").value;

  fetch("./sendNotification", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      subscription,
      payload,
      delay,
      ttl,
    }),
  });
};
```

Quand le bouton est cliqué, `fetch` demande au serveur d'envoyer la notification avec les paramètres suivants&nbsp;: `payload` est le contenu que la notification doir afficher, `delay` définit un délai en seconde avant que la notification soit affichée et `ttl` indique en seconde le temps que cette notification doit rester disponible sur le serveur.

Au tour maintenant du fichier Javascript suivant.

#### server.js

La partie serveur est écrite en Node.js et doit être hébergée à un endroit adapté, sujet qui fera l'objet d'un article qui lui est entièrement consacré. Nous ne fournirons ici qu'un aperçu superficiel.

Le [module web-push](https://www.npmjs.com/package/web-push) est utilisé pour configurer les clefs VAPID et éventuellement les générer si elles ne l'ont pas encore été.

```js
const webPush = require("web-push");

if (!process.env.VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
  console.log(
    "You must set the VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY " +
      "environment variables. You can use the following ones:",
  );
  console.log(webPush.generateVAPIDKeys());
  return;
}

webPush.setVapidDetails(
  "https://example.com",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY,
);
```

Ensuite, un module définit et exporte toutes les routes que l'application doit prendre en charge&nbsp;: obtenir la clef publique VAPID, l'enregistrement puis l'envoi de notifications. Vous pouvez voir comment les variables du fichier `index.js` sont utilisées: `payload`, `delay` et `ttl`.

```js
module.exports = (app, route) => {
  app.get(`${route}vapidPublicKey`, (req, res) => {
    res.send(process.env.VAPID_PUBLIC_KEY);
  });

  app.post(`${route}register`, (req, res) => {
    res.sendStatus(201);
  });

  app.post(`${route}sendNotification`, (req, res) => {
    const subscription = req.body.subscription;
    const payload = req.body.payload;
    const options = {
      TTL: req.body.ttl,
    };

    setTimeout(() => {
      webPush
        .sendNotification(subscription, payload, options)
        .then(() => {
          res.sendStatus(201);
        })
        .catch((error) => {
          console.log(error);
          res.sendStatus(500);
        });
    }, req.body.delay * 1000);
  });
};
```

#### service-worker.js

Le dernier fichier que nous allons regarder est celui du service worker&nbsp;:

```js
self.addEventListener("push", (event) => {
  const payload = event.data?.text() ?? "no payload";
  event.waitUntil(
    self.registration.showNotification("ServiceWorker Cookbook", {
      body: payload,
    }),
  );
});
```

Tout ce qu'il est est d'ajouter une écoute sur l'évènement [`push`](/fr/docs/Web/API/ServiceWorkerGlobalScope/push_event), créer la variable de charge utile constituée du texte récupéré depuis les données (ou de créer une chaîne de caractères à utiliser si les données sont vides) puis d'attendre jusqu'à ce que la notfication soit montrée à l'utilisateur.

N'hésitez pas à explorer le reste des exemples du [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook/) si vous voulez savoir comment ils sont gérés. Il y a une vaste collection d'exemples fonctionnels montrant l'usage général ainsi que le push web, les stratégies de mise en cache, la question des performances, le fonctionnement hors connexion et bien plus encore.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames/Loading", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
