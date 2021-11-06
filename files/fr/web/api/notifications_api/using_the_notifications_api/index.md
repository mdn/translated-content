---
title: Utilisation de l'API Notifications
slug: Web/API/Notifications_API/Using_the_Notifications_API
translation_of: Web/API/Notifications_API/Using_the_Notifications_API
original_slug: Web/API/notification/Using_Web_Notifications
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

L'[API Notifications](/fr/docs/Web/API/Notifications_API) permet à une application ou à une page web d'envoyer des notifications affichées en dehors de la page par le système sous-jacent. Cela permet aux applications web d'envoyer des informations aux utilisatrices et utilisateurs même lorsque l'application est en veille ou en arrière-plan. Dans cet article, nous verrons les bases de cette API afin de vous permettre de l'utiliser dans vos propres applications.

Généralement, le système sous-jacent utilisé pour les notifications est celui du système d'exploitation. Voyez par exemple comment votre appareil mobile ou ordinateur affiche certaines notifications.

![Une capture d'écran d'Android avec trois notifications.](android-notification.png)

Le système de notification du système d'exploitation variera selon la plateforme et le navigateur mais ce n'est pas un problème en soi : l'API Notifications a été conçue de façon suffisamment générique pour être compatible avec la plupart des systèmes de notification.

## Exemples

Un des cas d'usage parmi les plus évidents pour les notifications est un client mail web ou une application de messagerie instantanée qui notifie dès qu'un nouveau message a été reçu, y compris lorsqu'on utilise l'appareil pour autre chose avec une autre application. De nombreux exemples existent pour ce cas, [Slack](https://slack.com/) en est un parmi d'autres.

Nous avons écrit un exemple concret : une application pour gérer des listes de trucs à faire (« <i lang="en">to-do</i> ») pour vous donner une meilleure idée de la façon dont les notifications web peuvent être utilisées. Les données sont stockées localement avec [IndexedDB](/fr/docs/Web/API/IndexedDB_API) et les utilisateurs sont notifiés lorsque les tâches arrivent à échéance grâce aux notifications système. [Téléchargez le code de cette application](https://github.com/mdn/to-do-notifications/tree/gh-pages), ou [testez l'application en <i lang="en">live</i>](https://mdn.github.io/to-do-notifications/).

## Demander la permission

Avant qu'une application puisse envoyer une notification, l'utilisatrice ou l'utilisateur doit lui accorder le droit de le faire. Il s'agit d'un prérequis courant pour les API qui doivent interagir en dehors d'une page web : l'utilisatrice ou l'utilisateur doit, au moins une fois, explicitement accorder la permission à l'application d'afficher des notifications. La personne contrôle ainsi quels sites ou applications sont autorisés à afficher des notifications.

En raison d'abus des notifications par le passé, les équipes des navigateurs web ont commencé à mettre en place des stratégies pour limiter ce problème. Dans la pratique, vous ne devriez demander la permission à une personne uniquement après que celle-ci a interagi avec votre site/application (par exemple en ayant cliqué sur un bouton). Il ne s'agit pas seulement d'une bonne pratique (on ne devrait pas ennuyer les utilisatrices et utilisateurs avec de trop nombreuses notifications indésirées) mais d'une méthode qui sera implémentée par les différents navigateurs : Firefox le fait depuis Firefox 72 et Safari le fait également depuis quelque temps.

De plus, pour Chrome et Firefox, il n'est pas possible de demander la permission d'afficher des notifications à moins que le site soit servi dans un contexte sécurisé (c'est-à-dire avec HTTPS) et il n'est plus possible de demander une telle permission depuis une [`<iframe>`](/fr/docs/Web/HTML/Element/iframe) d'une origine tierce.

### Vérifier l'état de la permission

Vous pouvez vérifier si la permission a déjà été accordée ou non grâce à la propriété en lecture seule [`Notification.permission`](/fr/docs/Web/API/notification/permission). Cette dernière peut avoir l'une de ces trois valeurs :

- `default`
  - : La permission n'a pas encore été demandée à l'utilisatrice ou l'utilisateur, les notifications ne seront pas affichées.
- `granted`
  - : La permission d'afficher des notifications a été accordée après que la demande a été affichée.
- `denied`
  - : La permission d'afficher des notifications a été explicitement refusée.

### Obtenir la permission

Si la permission n'a pas encore été accordée, l'application devra utiliser la méthode [`Notification.requestPermission()`](/fr/docs/Web/API/notification/requestPermission) afin de la demander. Une version très basique consiste à inclure :

```js
Notification.requestPermission().then(function(result) {
  console.log(result);
});
```

Cela utilise la version de la méthode sous forme de promesse. Si vous souhaitez ou avez besoin de prendre en charge les versions antérieures, vous pourrez avoir besoin de version sous forme d'une fonction de rappel (<i lang="en">callback</i>) :

```js
Notification.requestPermission();
```

Cette version accepte en paramètre une fonction de rappel qui sera appelée une fois que l'utilisatrice ou l'utilisateur aura répondu à la demande de permission.

### Exemple

Dans notre application de démonstration, nous avons inclus un bouton « Activer les notifications » qui, lorsqu'il est pressé, demande la permission pour l'application.

```html
<button id="enable">Activer les notifications</button>
```

Cliquer sur ce bouton déclenche l'appel à la fonction `askNotificationPermission()` :

```js
function askNotificationPermission() {
  // La fonction qui sert effectivement à demander la permission
  function handlePermission(permission) {
    // On affiche ou non le bouton en fonction de la réponse
    if(Notification.permission === 'denied' || Notification.permission === 'default') {
      notificationBtn.style.display = 'block';
    } else {
      notificationBtn.style.display = 'none';
    }
  }

  // Vérifions si le navigateur prend en charge les notifications
  if (!('Notification' in window)) {
    console.log("Ce navigateur ne prend pas en charge les notifications.");
  } else {
    if(checkNotificationPromise()) {
      Notification.requestPermission()
      .then((permission) => {
        handlePermission(permission);
      })
    } else {
      Notification.requestPermission(function(permission) {
        handlePermission(permission);
      });
    }
  }
}
```

Commençons par jeter un œil au deuxième bloc de code : vous verrez qu'on commence par vérifier la prise en charge de l'API Notifications. Si celle-ci est bien disponible, on regarde si la version à base de promesses pour `Notification.requestPermission()` est prise en charge. Si c'est le cas, on utilise cette version (prise en charge partout à l'exception de Safari) et sinon, on utilise l'ancienne version avec le <i lang="en">callback</i> (prise en charge par Safari).

Pour éviter la duplication du code, nous avons stocké quelques lignes dans la fonction `handlePermission()` qui correspond au premier bloc de ce fragment de code. Dans cette fonction, on définit explicitement la valeur de `Notification.permission` (certaines anciennes versions de Chrome avaient un bug et ne réalisaient pas cette initialisation automatiquement) puis on affiche ou on masque le bouton selon que la permission a déjà été demandée ou non. On ne veut pas afficher le bouton si la permission a déjà été accordée, en revanche, si elle a été déclinée, on veut permettre à l'utilisatrice ou à l'utilisateur de changer d'avis plus tard.

> **Note :** Avant Chrome 37, Chrome ne permettait pas d'appeler [`Notification.requestPermission()`](/fr/docs/Web/API/notification/requestPermission) dans le gestionnaire d'évènements `load` (voir [le bug 274284](https://code.google.com/p/chromium/issues/detail?id=274284)).

### Détecter la prise en charge de requestPermission() en promesse

Plus haut, nous avons dit vérifier la prise en charge du navigateur pour la version de `Notification.requestPermission()` avec les promesses. Pour cela, nous avons utilisé :

```js
function checkNotificationPromise() {
    try {
      Notification.requestPermission().then();
    } catch(e) {
      return false;
    }

    return true;
  }
```

Cela permet de vérifier la présence d'une méthode `.then()` sur `requestPermission()`. Si une telle fonction est présente, on continue et on renvoie `true`. Sinon, on renvoie `false` dans le bloc de code `catch() {}`.

## Créer une notification

Pour créer une notification, on utilisera le constructeur [`Notification`](/fr/docs/Web/API/notification). Ce constructeur attend un titre à afficher au sein de la notification et permet d'utiliser différentes options pour améliorer la notification comme [`une icône`](/fr/docs/Web/API/notification/icon) ou un texte ([`body`](/fr/docs/Web/API/notification/body)).

Par exemple, dans notre application de démonstration, on utilise le fragment de code suivant pour créer une notification lorsque c'est nécessaire (ce fragment se trouve dans la fonction `createNotification()`) :

```js
const img = '/to-do-notifications/img/icon-128.png';
const text = 'Coucou ! Votre tâche "' + titre + '" arrive maintenant à échéance.';
const notification = new Notification('Liste de trucs à faire', { body: text, icon: img });
```

## Fermer les notifications

On utilisera la méthode [`close()`](/fr/docs/Web/API/notification/close) afin de retirer une notification qui n'est plus pertinente (par exemple parce que la personne l'a déjà lue sur la page web s'il s'agit d'une messagerie ou, dans le cas d'un lecteur de musique, si la chanson en cours de lecture a déjà changé). La plupart des navigateurs effacent les notifications après un certain délai (généralement autour de 4 secondes) mais ça ne devrait pas être un souci particulier, car cette tâche est souvent gérée par l'utilisateur ou l'agent utilisateur. La fermeture peut également être gérée par le système d'exploitation et les utilisatrices et utilisateurs doivent avoir la main sur ce comportement. D'anciennes versions de Chrome ne retiraient pas les automatiquement les notifications et vous pouvez donc utiliser un [`setTimeout()`](/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) uniquement pour ces versions historiques.

```js
const n = new Notification('Une super chanson');
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
    // L'onglet est désormais visible et la notification n'est plus pertinente
    // on peut la fermer
    n.close();
  }
});
```

> **Note :** Cette API ne devrait pas être utilisée pour retirer la notification de l'écran après un délai donné car elle supprimera également la notification de la liste des notifications et empêchera toute interaction avec celle-ci après qu'elle a initialement été affichée.

> **Note :** Lorsque vous recevez un évènement `close`, il n'y a aucune garantie que celui-ci provienne de l'utilisatrice ou de l'utilisateur. Cela correspond à la spécification qui indique : « lorsqu'une notification est fermée, que ce soit par la plateforme sous-jacente ou par l'utilisateur, l'étape de fermeture correspondante doit être exécutée. ».

## Évènements relatifs aux notifications

Quatre évènements sont déclenchés sur une instance de [`Notification`](/fr/docs/Web/API/notification) :

- `click`
  - : Déclenché lorsque la personne clique sur la notification.
- `close`
  - : Déclenché lorsque la notification a été fermée.
- `error`
  - : Déclenché si une erreur se produit avec la notification. Généralement, cela a lieu lorsqu'il y a un problème d'affichage.
- `show`
  - : Déclenché lorsque la notification est affichée.

Ces évènements peuvent être suivis avec les gestionnaires d'évènement [`onclick`](/fr/docs/Web/API/notification/onclick), [`onclose`](/fr/docs/Web/API/notification/onclose), [`onerror`](/fr/docs/Web/API/notification/onerror), et [`onshow`](/fr/docs/Web/API/notification/onshow). [`Notification`](/fr/docs/Web/API/notification) héritant également de [`EventTarget`](/fr/docs/Web/API/EventTarget), il est aussi possible d'utiliser la méthode [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener).

## Remplacer les notifications existantes

Il est généralement peu souhaitable de recevoir de nombreuses notifications sur une courte période. Par exemple, que se passerait-il si une messagerie envoyait une notification pour chaque message reçu alors qu'une discussion est en cours ? Pour éviter de submerger l'utilisatrice ou l'utilisateur avec de trop nombreuses notifications, il est possible de modifier les notifications en attente en remplaçant une ou plusieurs notifications avec une nouvelle notification à jour.

Pour cela, on pourra ajouter une balise à toute nouvelle notification. Si une notification existante possède la balise correspondante et qu'elle n'a pas encore été affichée, la nouvelle notification remplacera la précédente. Si une notification avec la même balise a déjà été affichée, elle est fermée et la nouvelle notification est affichée.

### Exemple d'utilisation des balises

Prenons le fragment HTML qui suit :

```html
<button>Envoyez une notification !</button>
```

Il est possible de gérer plusieurs notifications ainsi :

```js
window.addEventListener('load', function () {
  const button = document.getElementsByTagName('button')[0];

  button.addEventListener('click', function () {
    // Si l'utilisateur a permis les notifications
    // essayons d'envoyer 10 notifications
    if (window.Notification && Notification.permission === "granted") {
      let i = 0;
      // On utilise un intervalle, car certains navigateurs (dont Firefox)
      // bloquent les notifications s'il y en a trop sur une période
      // donnée
      const interval = window.setInterval(function () {
        // Avec la balise, on ne devrait voir que la notification "Coucou ! 9"
        const n = new Notification("Coucou ! " + i, {tag: 'soManyNotification'});
        if (i++ == 9) {
          window.clearInterval(interval);
        }
      }, 200);
    }

    // Si l'utilisateur n'a pas encore autorisé ou non
    // Note : À cause de Chrome, on ne peut pas s'assurer que la propriété permission
    // est définie et il est donc dangereux de vérifier la valeur "default"
    else if (window.Notification && Notification.permission !== "denied") {
      Notification.requestPermission(function (status) {
        // Si la permission a été accordée
        if (status === "granted") {
          var i = 0;
          // On utilise un intervalle, car certains navigateurs (dont Firefox)
          // bloquent les notifications s'il y en a trop sur une période
          // donnée
          var interval = window.setInterval(function () {
            // Avec la balise, on ne devrait voir que la notification "Coucou ! 9"
            const n = new Notification("Coucou ! " + i, {tag: 'soManyNotification'});
            if (i++ == 9) {
              window.clearInterval(interval);
            }
          }, 200);
        }

        // Sinon, on peut utiliser une alerte modale classique
        else {
          alert("Coucou !");
        }
      });
    }

    // Si l'utilisateur a refusé les notifications
    else {
      // On utilise une alerte modale classique
      alert("Coucou !");
    }
  });
});
```

Voir le résultat de cet exemple :

{{EmbedLiveSample('Exemple_d\'utilisation_des_balises', '100%', 30)}}

## Spécifications

{{Specifications("api.Notification")}}

## Compatibilité des navigateurs

{{Compat("api.Notification")}}

## Voir aussi

- [`Notification`](/fr/docs/Web/API/notification)
