---
title: >-
  Comment faire pour que les PWAs relancent les utilisateurs en utilisant des
  notifications et des messages poussés
slug: Web/Progressive_web_apps/Re-engageable_Notifications_Push
translation_of: Web/Progressive_web_apps/Re-engageable_Notifications_Push
original_slug: Web/Progressive_web_apps/Relancer_Via_Notifications_Push
---
<div>{{PreviousMenuNext("Web/Apps/Progressive/Installable_PWAs", "Web/Apps/Progressive/Loading", "Web/Apps/Progressive")}}</div>

<p>Avoir la possibilité de mettre en cache le contenu d'une application pour travailler en mode déconnecté est une formidable fonctionnalité. Donner la possibilité à l'utilisateur d'installer l'application web sur son écran d'accueil est encore mieux. Mais plutôt que de s'en remettre seulement aux actions de l'utilisateur, nous pouvons faire plus, en utilisant des messages poussés et des notifications pour le relancer automatiquement et fournir des nouveaux contenus à chaque fois qu'ils sont disponibles.</p>

<h2 id="Deux_APIs_un_seul_but">Deux APIs, un seul but</h2>

<p>L'<a href="/fr/docs/Web/API/Push_API">API Push</a> et l'<a href="/fr/docs/Web/API/Notifications_API">API Notifications</a> sont deux APIs distinctes mais elles fonctionnent bien ensemble quand vous souhaitez fournir une fonction de relance dans votre application. Push est utilisée pour délivrer un nouveau contenu à votre application depuis le serveur sans aucune intervention côté client et cette opération est gérée par le service worker de l'application. Les notifications peuvent être utilisées par le service worker pour afficher les nouvelles informations à l'utilisateur, ou, au moins, le prévenir que quelque chose a été mis à jour.</p>

<p>Cela s'exécute hors de la fenêtre du navigateur, juste comme les service workers, si bien que des mises à jour peuvent être poussées et des notifications peuvent être affichées quand la page de l'application n'a pas le focus voire fermée.</p>

<h2 id="Notifications">Notifications</h2>

<p>Commençons avec les notifications — elles peuvent fonctionner sans push, mais sont très utiles quand elles sont combinées avec. Voyons-les de façon isolée pour commencer.</p>

<h3 id="Demande_de_permission">Demande de permission</h3>

<p>Pour afficher une notification, nous devons d'abord demander la permission de le faire. Cependant, au lieu de d'afficher la notification immédiatement, une meilleure pratique consiste à n'afficher la fenêtre popup quand l'utilisateur le demande en cliquant sur un bouton:</p>

<pre class="brush: js">var button = document.getElementById("notifications");
button.addEventListener('click', function(e) {
    Notification.requestPermission().then(function(result) {
        if(result === 'granted') {
            randomNotification();
        }
    });
});</pre>

<p>Ceci affiche une popup en utilisant le propre service de notification du système d'exploitation:</p>

<p><img alt="Notification of js13kPWA." src="js13kpwa-notification.png"></p>

<p>Une fois que l'utilisateur a confirmé qu'il veut recevoir des notifications, l'application peut alors lui afficher. Le résultat de l'action de l'utilisateur peut être default (défault), granted (autorisé) ou denied (interdit). L'option default est choisi quand l'utilisateur n'a pas fait de choix et les deux autres sont sélectionnées selon que l'utilisateur a respectivement cliqué sur oui ou non.</p>

<p>Si la permission est donnée, elle vaut à la fois pour les notifications et les push.</p>

<h3 id="Créer_une_notification">Créer une notification</h3>

<p>L'application exemple crée une notification en utilisant les données disponibles — un jeu est choisi au hasard et les données associées sont utilisées pour générer le contenu de la notification: le nom du jeu pour le titre, la mention de l'auteur dans le corps du texte et l'image pour l'icone:</p>

<pre class="brush: js">function randomNotification() {
    var randomItem = Math.floor(Math.random()*games.length);
    var notifTitle = games[randomItem].name;
    var notifBody = 'Créé par '+games[randomItem].author+'.';
    var notifImg = 'data/img/'+games[randomItem].slug+'.jpg';
    var options = {
        body: notifBody,
        icon: notifImg
    }
    var notif = new Notification(notifTitle, options);
    setTimeout(randomNotification, 30000);
}</pre>

<p>Une nouvelle notification est créée au hasard toutes les 30 secondes jusqu'à ce que ça devienne trop pénible et que ce soit désactivé par l'utilisateur (pour une vraie application, les notifications devraient être moins fréquentes et plus utiles). L'avantage de l'API Notifications est qu'elle utilise la fonction de notification du système d'exploitation. Ceci signifie que les notifications peuvent être affichées à l'utilisateur même quand il ne regarde pas l'application et que les notifications ont le même aspect que celles affichées par les applications natives.</p>

<h2 id="Push">Push</h2>

<p>Pousser (push) est plus compliqué que de faire des notifications — nous avons besoin de nous abonner à un serveur qui enverra ensuite les données en retour à l'application. Le Service Worker de l'application recevra les données du serveur qui les a poussées et pourra ensuite les afficher en utilisant le système de notifications ou un autre mécanisme si on le souhaite.</p>

<p>La technologie en est toujours à ses tous débuts — certains exemples fonctionnels utilisent la plateforme Cloud de messagerie de Google, mais elles sont en cours de réécriture pour prendre en charge <a href="https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/">VAPID</a> (Voluntary Application Identification) qui offre une couche de sécurité supplémentaire pour votre application. Vous pouvez étudier les <a href="https://serviceworke.rs/push-payload.html">exemples du Cookbook des Service Workers</a>, essayer de mettre en place un serveur d'émission de messages utilisant <a href="https://firebase.google.com/">Firebase</a> ou construire votre propre serveur (en utilisant Node.js par exemple).</p>

<p>Comme mentionné précédemment, pour être capable de recevoir des messages poussés, vous devez avoir un service worker dont les fondamentaux ont déjà été expliqué dans l'article  <a href="/fr/docs/Web/Apps/Progressive/Offline_Service_workers">Permettre aux PWAs de fonctionner en mode déconnecté grâce aux Service workers</a>. A l'intérieur du service worker, un mécanisme de souscription à un service d'émission est créé.</p>

<pre class="brush: js">registration.pushManager.getSubscription() .then( /* ... */ );</pre>

<p>Une fois que l'utilisateur est enrôlé, il peut recevoir des notifications poussées du serveur.</p>

<p>Du côté serveur, le processus tout entier doit être chiffré avec des clefs publique et privée par raison de sécurité — permettre à tout le monde d'envoyer des messages poussés non sécurisés en utilisant votre application serait une terrible idée. Voir la <a href="https://jrconlin.github.io/WebPushDataTestPage/">page de test de chffirement des données web poussées</a> pour avoir des informations détaillées concernant la sécurisation du serveur. Le serveur enregistre toutes les informations reçues quand un utilisateur s'enregistre si bien que les messages peuvent être envoyés plus tard quand c'est nécessaire.</p>

<p>Pour recevoir des messages poussés, nous pouvons écouter l'événement {{event("push")}} dans le fichier du Service Worker:</p>

<pre class="brush: js">self.addEventListener('push', function(e) { /* ... */ });</pre>

<p>Les données peuvent être récupérées puis affichées immédiatement à l'utilisateur sous forme d'une notification. Ceci, par exemple, peut être utilisé pour rappeler à l'utilisateur quelque chose ou pour l'informer d'un nouveau contenu disponible dans l'application.</p>

<h3 id="Exemple_de_Push">Exemple de Push</h3>

<p>Push requiert que la partie serveur fonctionne, donc nous ne pouvons pas l'inclure dans l'exemple js13kPWA hébergé dans les pages GitHub puisqu'elles ne permettent de servir que des fichiers statiques. C'est entièrement expliqué dans le <a href="https://serviceworke.rs/">Service Worker Cookbook</a> — voir la<a href="https://serviceworke.rs/push-payload.html"> démonstration de charge utile poussée</a>.</p>

<p>Cette démonstration comporte trois fichiers:</p>

<ul>
 <li><a href="https://github.com/mozilla/serviceworker-cookbook/blob/master/push-payload/index.js">index.js</a>, qui contient le code source de notre application</li>
 <li><a href="https://github.com/mozilla/serviceworker-cookbook/blob/master/push-payload/server.js">server.js</a>, qui contient la partie serveur (écrit en Node.js)</li>
 <li><a href="https://github.com/mozilla/serviceworker-cookbook/blob/master/push-payload/service-worker.js">service-worker.js</a>, qui contient le code spécifique du Service Worker.</li>
</ul>

<p>Explorons tout ceci</p>

<h4 id="index.js">index.js</h4>

<p>Le fichier <code>index.js</code> commence par enregistrer le service worker:</p>

<pre class="brush: js">navigator.serviceWorker.register('service-worker.js')
.then(function(registration) {
  return registration.pushManager.getSubscription()
  .then(async function(registration) {
      // partie relative à l'enregistrement
  });
})
.then(function(subscription) {
    // partie relative à l'abonnement
});</pre>

<p>C'est un petit peu plus compliqué que le service worker que nous avons vu dans la <a href="https://mdn.github.io/pwa-examples/js13kpwa/">démonstration de js13kPWA</a>. Dans ce cas particulier, après l'enregistrement, nous utilisons l'objet d'enregistrement pour s'abonner puis utiliser ensuite l'objet d'abonnement résultant pour achever le processus complet.</p>

<p>Dans la partie enregistrement, le code ressemble à ceci:</p>

<pre class="brush: js">if(registration) {
    return registration;
}</pre>

<p>Si l'utilisateur s'est déjà abonné, nous renvoyons alors l'objet de souscription et accède à la partir de la souscription. Si ce n'est pas le cas, nous initialisation une nouvelle souscription:</p>

<pre class="brush: js">const response = await fetch('./vapidPublicKey');
const vapidPublicKey = await response.text();
const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);</pre>

<p>L'application récupère la clef publique du serveur et convertit la réponse sous forme de texte; puis cette réponse doit être convertie en un tableau de nombre entier non signé (Uint8Array (pour une prise en charge par Chrome). Pour en apprendre davantage sur les clefs VAPID, vous pouvez lire le message de blog <a href="https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/">Envoyer des notifications WebPush identitées par VAPID via le service de Push de Mozilla</a>.</p>

<p>L'application peut maintenant utiliser le {{domxref("PushManager")}} pour abonner le nouvel utilisateur. Il y a deux options passées à la méthode {{domxref("PushManager.subscribe()")}}  — la première est <code>userVisibleOnly: true</code>, qui signifie que toutes les notifications envoyées à l'utilisateur lui seront visibles et la seconde est <code>applicationServerKey</code>, qui contient notre clef VAPID une fois récupérée et convertie avec succès.</p>

<pre class="brush: js">return registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: convertedVapidKey
});</pre>

<p>Maintenant, allons voir la partie abonnement — l'application envoie d'abord les détails de l'abonnement au format JSON au serveur en utilisant Fetch.</p>

<pre class="brush: js">fetch('./register', {
    method: 'post',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        subscription: subscription
    }),
});</pre>

<p>Puis la fonction {{domxref("onclick","GlobalEventHandlers.onclick")}} du bouton <em>Abonnement</em> est définie:</p>

<pre class="brush: js">document.getElementById('doIt').onclick = function() {
    const payload = document.getElementById('notification-payload').value;
    const delay = document.getElementById('notification-delay').value;
    const ttl = document.getElementById('notification-ttl').value;

    fetch('./sendNotification', {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            subscription: subscription,
            payload: payload,
            delay: delay,
            ttl: ttl,
        }),
    });
};</pre>

<p>Quand le bouton est cliqué,  <code>fetch</code> demande au serveur d'envoyer la notification avec les paramètres suivants: <code>payload</code> est le contenu que la notification doir afficher, <code>delay</code> définit un délai en seconde avant que la notification soit affichée et <code>ttl</code> indique en seconde le temps que cette notification doit rester disponible sur le serveur.</p>

<p>Au tour maintenant du fichier Javascript suivant.</p>

<h4 id="server.js">server.js</h4>

<p>La partie serveur est écrite en Node.js et doit être hébergée à un endroit adapté, sujet qui fera l'objet d'un article qui lui entièrement consacré. Nous ne fournirons ici qu'un aperçu superficiel.</p>

<p>Le <a href="https://www.npmjs.com/package/web-push">module web-pus</a> est utilisé pour configurer les clefs VAPID keys et éventuellement les générer si elles ne sont pas encore disponibles.</p>

<pre class="brush: js">const webPush = require('web-push');

if (!process.env.VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
  console.log("Vous devez configurer les variables d'environnement " +
  "VAPID_PUBLIC_KEY et VAPID_PRIVATE_KEY."+
    "Vous pouvez utiliser celles-ci:");
  console.log(webPush.generateVAPIDKeys());
  return;
}

webPush.setVapidDetails(
  'https://serviceworke.rs/',
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);
</pre>

<p>Ensuite, un module définit et exporte toutes les routes que l'application doit prendre en charge: obtenir la clef publique VAPID, l'enregistrement puis l'envoi de notifications. Vous pouvez voir comment les variables du fichier <code>index.js</code> sont utilisées: <code>payload</code>, <code>delay</code> et <code>ttl</code>.</p>

<pre class="brush: js">module.exports = function(app, route) {
  app.get(route + 'vapidPublicKey', function(req, res) {
    res.send(process.env.VAPID_PUBLIC_KEY);
  });

  app.post(route + 'register', function(req, res) {

    res.sendStatus(201);
  });

  app.post(route + 'sendNotification', function(req, res) {
    const subscription = req.body.subscription;
    const payload = req.body.payload;
    const options = {
      TTL: req.body.ttl
    };

    setTimeout(function() {
      webPush.sendNotification(subscription, payload, options)
      .then(function() {
        res.sendStatus(201);
      })
      .catch(function(error) {
        console.log(error);
        res.sendStatus(500);
      });
    }, req.body.delay * 1000);
  });
};</pre>

<h4 id="service-worker.js">service-worker.js</h4>

<p>Le dernier fichier que nous allons regarder est celui du service worker:</p>

<pre class="brush: js">self.addEventListener('push', function(event) {
    const payload = event.data ? event.data.text() : 'no payload';
    event.waitUntil(
        self.registration.showNotification('ServiceWorker Cookbook', {
            body: payload,
        })
    );
});</pre>

<p>Tout ce qu'il est est d'ajouter une écoute sur l'événément {{event("push")}}, créer la variable de charge utile constituée du texte récupéré depuis les données (ou de créer une chaîne de caractères à utiliser si les données sont vides) puis d'attendre jusqu'à ce que la notfication soit montrée à l'utilisateur.</p>

<p>N'hésitez pas à explorer le reste des exemples du <a href="https://serviceworke.rs/">Service Worker Cookbook</a> si vous voulez savoir comment ils sont gérés — le <a href="https://github.com/mozilla/serviceworker-cookbook/">code source complet est disponible sur on GitHub</a>. Il y a une vaste collection d'exemples fonctionnels démontrant l'usage général ainsi que le push web, les stratégies de mise en cache, la question des performances, le fonctionnement en mode déconnecté et plus encore.</p>

<p>{{PreviousMenuNext("Web/Apps/Progressive/Installable_PWAs", "Web/Apps/Progressive/Loading", "Web/Apps/Progressive")}}</p>

<div>{{QuickLinksWithSubpages("/en-US/docs/Web/Progressive_web_apps/")}}</div>
