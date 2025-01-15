---
title: Utiliser l'API Notifications
slug: Web/API/Notifications_API/Using_the_Notifications_API
l10n:
  sourceCommit: 1a26583f60bdceece64347bf967d0653fe8df288
---

{{DefaultAPISidebar("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

L'[API Notifications](/fr/docs/Web/API/Notifications_API) permet à une application ou à une page web d'envoyer des notifications affichées en dehors de la page par le système sous-jacent. Cela permet aux applications web d'envoyer des informations aux utilisatrices et utilisateurs même lorsque l'application est en veille ou en arrière-plan. Dans cet article, nous verrons les bases de cette API afin de vous permettre de l'utiliser dans vos propres applications.

Généralement, le système sous-jacent utilisé pour les notifications est celui du système d'exploitation. Voyez par exemple comment votre appareil mobile ou ordinateur affiche certaines notifications.

![Une notification sur un navigateur de bureau : To do list via mdn.github.io HEY! Your task "Go shopping" is now overdue](desktop-notification.png)

Le système de notification du système d'exploitation variera selon la plateforme et le navigateur mais ce n'est pas un problème en soi&nbsp;: l'API Notifications a été conçue de façon suffisamment générique pour être compatible avec la plupart des systèmes de notification.

## Exemples

Un des cas d'usage parmi les plus évidents pour les notifications est un client mail web ou une application de messagerie instantanée qui notifie dès qu'un nouveau message a été reçu, y compris lorsqu'on utilise l'appareil pour autre chose avec une autre application. De nombreux exemples existent, comme [Slack](https://slack.com/).

Nous avons écrit un exemple concret&nbsp;: une application pour gérer des listes de tâches pour vous donner une meilleure idée de la façon dont les notifications web peuvent être utilisées. Les données sont stockées localement avec [IndexedDB](/fr/docs/Web/API/IndexedDB_API) et les personnes sont notifiées lorsque les tâches arrivent à échéance grâce aux notifications système. [Téléchargez le code de cette application](https://github.com/mdn/dom-examples/tree/main/to-do-notifications), ou [testez l'application en <i lang="en">live</i>](https://mdn.github.io/dom-examples/to-do-notifications/).

## Demander la permission

Avant qu'une application puisse envoyer une notification, l'utilisatrice ou l'utilisateur doit lui accorder le droit de le faire. Il s'agit d'un prérequis courant pour les API qui doivent interagir en dehors d'une page web&nbsp;: la personne doit au moins une fois et explicitement accorder la permission à l'application d'afficher des notifications. La personne contrôle ainsi quels sites ou applications sont autorisés à afficher des notifications.

En raison d'abus des notifications par le passé, les équipes des navigateurs web ont commencé à mettre en place des stratégies pour limiter ce problème. Dans la pratique, vous ne devriez demander la permission à une personne uniquement après que celle-ci a interagi avec votre site/application (par exemple en ayant cliqué sur un bouton). Il ne s'agit pas seulement d'une bonne pratique (on ne devrait pas ennuyer les utilisatrices et utilisateurs avec de trop nombreuses notifications indésirées) mais d'une méthode qui sera implémentée par les différents navigateurs&nbsp;: Firefox le fait depuis Firefox 72 et Safari le fait également depuis quelque temps.

De plus, pour Chrome et Firefox, il n'est pas possible de demander la permission d'afficher des notifications à moins que le site soit servi dans un contexte sécurisé (c'est-à-dire avec HTTPS) et il n'est plus possible de demander une telle permission depuis une [`<iframe>`](/fr/docs/Web/HTML/Element/iframe) d'une origine tierce.

### Vérifier l'état de la permission

Vous pouvez vérifier si la permission a déjà été accordée ou non grâce à la propriété en lecture seule [`Notification.permission`](/fr/docs/Web/API/Notification/permission_static). Cette dernière peut avoir l'une de ces trois valeurs&nbsp;:

- `default`
  - : La permission n'a pas encore été demandée à l'utilisatrice ou l'utilisateur, les notifications ne seront pas affichées.
- `granted`
  - : La permission d'afficher des notifications a été accordée après que la demande a été affichée.
- `denied`
  - : La permission d'afficher des notifications a été explicitement refusée.

### Obtenir la permission

Si la permission n'a pas encore été accordée, l'application devra utiliser la méthode [`Notification.requestPermission()`](/fr/docs/Web/API/Notification/requestPermission_static) afin de la demander. Une version très basique consiste à inclure&nbsp;:

```js
Notification.requestPermission().then((resultat) => {
  console.log(resultat);
});
```

Cela utilise la version de la méthode sous forme de promesse. Si vous souhaitez ou avez besoin de prendre en charge les versions antérieures, vous pourrez avoir besoin de version sous forme d'une fonction de rappel (<i lang="en">callback</i>)&nbsp;:

```js
Notification.requestPermission((resultat) => {
  console.log(resultat);
});
```

Cette version accepte en paramètre une fonction de rappel qui sera appelée une fois que l'utilisatrice ou l'utilisateur aura répondu à la demande de permission.

> [!NOTE]
> Il n'est pas possible de tester avec certitude la prise en charge du la forme de `Notification.requestPermission()` avec les promesses. S'il vous faut prendre en charge les navigateurs plus anciens, utilisez la version basée sur les fonctions de rappel, même si elle est dépréciée, elle fonctionne dans les navigateurs récents. Voir [le tableau de compatibilité](/fr/docs/Web/API/Notification/requestPermission_static#compatibilité_des_navigateurs) pour plus d'informations.

### Exemple

Dans notre application de démonstration, nous avons inclus un bouton «&nbsp;Activer les notifications&nbsp;» qui, lorsqu'il est pressé, demande la permission pour l'application.

```html
<button id="enable">Activer les notifications</button>
```

Cliquer sur ce bouton déclenche l'appel à la fonction `askNotificationPermission()`&nbsp;:

```js
function askNotificationPermission() {
  // On vérifie si le navigateur prend en charge les notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support notifications.");
    return;
  }
  Notification.requestPermission().then((permission) => {
    // On affiche ou non le bouton en fonction de la réponse
    notificationBtn.style.display = permission === "granted" ? "none" : "block";
  });
}
```

Commençons par jeter un œil au deuxième bloc de code&nbsp;: vous verrez qu'on commence par vérifier la prise en charge de l'API Notifications. Si celle-ci est bien disponible, on utilise la version à base de promesses pour `Notification.requestPermission()`.

Dans le gestionnaire de résolution de la promesse passé à `then()`, on affiche ou on masque le bouton selon ce que la personne a choisi. On ne veut pas le montrer si la permission a déjà été donnée, mais si la personne a décliné, on veut pouvoir le montrer plus tard au cas où elle change d'avis.

## Créer une notification

Pour créer une notification, on utilisera le constructeur [`Notification()`](/fr/docs/Web/API/Notification/Notification). Ce constructeur attend un titre à afficher au sein de la notification et permet d'utiliser différentes options pour améliorer la notification comme [une icône](/fr/docs/Web/API/Notification/icon) ou un texte ([`body`](/fr/docs/Web/API/Notification/body)).

Par exemple, dans notre application de démonstration, on utilise le fragment de code suivant pour créer une notification lorsque c'est nécessaire (ce fragment se trouve dans la fonction `createNotification()`)&nbsp;:

```js
const img = "/to-do-notifications/img/icon-128.png";
const text = `Coucou ! Votre tâche "${titre}" arrive maintenant à échéance.`;
const notification = new Notification("Liste de trucs à faire", {
  body: text,
  icon: img,
});
```

## Fermer les notifications

On utilisera la méthode [`close()`](/fr/docs/Web/API/Notification/close) afin de retirer une notification qui n'est plus pertinente (par exemple parce que la personne l'a déjà lue sur la page web s'il s'agit d'une messagerie ou, dans le cas d'un lecteur de musique, si la chanson en cours de lecture a déjà changé). La plupart des navigateurs effacent les notifications après un certain délai (généralement autour de 4 secondes), mais ça ne devrait pas être un souci particulier, car cette tâche est souvent gérée par la personne ou l'agent utilisateur. La fermeture peut également être gérée par le système d'exploitation et les utilisatrices et utilisateurs doivent avoir la main sur ce comportement. D'anciennes versions de Chrome ne retiraient pas les automatiquement les notifications et vous pouvez donc utiliser un [`setTimeout()`](/fr/docs/Web/API/Window/setTimeout) uniquement pour ces versions historiques.

```js
const n = new Notification("Une super chanson");
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    // L'onglet est désormais visible et la notification n'est plus pertinente
    // on peut la fermer
    n.close();
  }
});
```

> [!NOTE]
> Cette API ne devrait pas être utilisée pour retirer la notification de l'écran après un délai donné, car elle supprimera également la notification de la liste des notifications et empêchera toute interaction avec celle-ci après qu'elle a initialement été affichée.

> [!NOTE]
> Lorsque vous recevez un évènement `close`, il n'y a aucune garantie que celui-ci provienne de l'utilisatrice ou de l'utilisateur. Cela correspond à la spécification qui indique&nbsp;: «&nbsp;lorsqu'une notification est fermée, que ce soit par la plateforme sous-jacente ou par l'utilisateur, l'étape de fermeture correspondante doit être exécutée.&nbsp;».

## Évènements relatifs aux notifications

Quatre évènements sont déclenchés sur une instance de [`Notification`](/fr/docs/Web/API/Notification)&nbsp;:

- `click`
  - : Déclenché lorsque la personne clique sur la notification.
- `close`
  - : Déclenché lorsque la notification a été fermée.
- `error`
  - : Déclenché si une erreur se produit avec la notification. Généralement, cela a lieu lorsqu'il y a un problème d'affichage.
- `show`
  - : Déclenché lorsque la notification est affichée.

Ces évènements peuvent être suivis avec les gestionnaires d'évènement [`onclick`](/fr/docs/Web/API/Notification/click_event), [`onclose`](/fr/docs/Web/API/Notification/close_event), [`onerror`](/fr/docs/Web/API/Notification/error_event), et [`onshow`](/fr/docs/Web/API/Notification/show_event). [`Notification`](/fr/docs/Web/API/Notification) héritant également de [`EventTarget`](/fr/docs/Web/API/EventTarget), il est aussi possible d'utiliser la méthode [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener).

## Remplacer les notifications existantes

Il est généralement peu souhaitable de recevoir de nombreuses notifications sur une courte période. Par exemple, que se passerait-il si une messagerie envoyait une notification pour chaque message reçu alors qu'une discussion est en cours&nbsp;? Pour éviter de submerger l'utilisatrice ou l'utilisateur avec de trop nombreuses notifications, il est possible de modifier les notifications en attente en remplaçant une ou plusieurs notifications avec une nouvelle notification à jour.

Pour cela, on pourra ajouter une balise à toute nouvelle notification. Si une notification existante possède la balise correspondante et qu'elle n'a pas encore été affichée, la nouvelle notification remplacera la précédente. Si une notification avec la même balise a déjà été affichée, elle est fermée et la nouvelle notification est affichée.

### Exemple d'utilisation des balises

Prenons le fragment HTML qui suit&nbsp;:

```html
<button>Envoyez une notification !</button>
```

Il est possible de gérer plusieurs notifications ainsi&nbsp;:

```js
window.addEventListener("load", () => {
  const button = document.querySelector("button");

  if (window.self !== window.top) {
    // On s'assure que, si le document est dans une frame
    // la personne l'ouvre d'abord dans un onglet ou une
    // fenêtre à part afin de pouvoir gérer la permission
    // des notifications.
    button.textContent = "Voir le résultat de l'exemple de code";
    button.addEventListener("click", () => window.open(location.href));
    return;
  }

  button.addEventListener("click", () => {
    if (Notification?.permission === "granted") {
      // Si la personne a autorisé les notifications
      // On essaie de lui en envoyer 10
      let i = 0;
      // Pour cela, on utilise un intervalle afin d'éviter
      // que les navigateurs bloquent les notifications
      // s'il y en a trop sur une période donnée.
      const interval = setInterval(() => {
        // Grâce à la balise, on devrait uniquement voir
        // la notification "Coucou 9"
        const n = new Notification(`Coucou ${i}`, {
          tag: "tropDeNotifications",
        });
        if (i === 9) {
          clearInterval(interval);
        }
        i++;
      }, 200);
    } else if (Notification && Notification.permission !== "denied") {
      // Dans le cas où la personne n'a pas indiqué
      // si elle voulait recevoir des notifications

      // Note : à cause de Chrome, on ne peut pas être
      // certain que la propriété permission est
      // définie et on ne peut donc pas vérifier la
      // valeur "default".
      Notification.requestPermission().then((status) => {
        // Si la personne a autorisé
        if (status === "granted") {
          let i = 0;
          // Pour cela, on utilise un intervalle afin d'éviter
          // que les navigateurs bloquent les notifications
          // s'il y en a trop sur une période donnée.
          const interval = setInterval(() => {
            // Grâce à la balise, on devrait uniquement voir
            // la notification "Coucou 9"
            const n = new Notification(`Coucou ${i}`, {
              tag: "tropDeNotifications",
            });
            if (i === 9) {
              clearInterval(interval);
            }
            i++;
          }, 200);
        } else {
          // Sinon, on prend comme alternative une
          // fenêtre modale d'alerte
          alert("Coucou");
        }
      });
    } else {
      // Si la personne refuse les notifications, on
      // peut utiliser une fenêtre modale d'alerte
      alert("Coucou");
    }
  });
});
```

### Résultat

{{EmbedLiveSample('', '100%', 30)}}

## Voir aussi

- [`Notification`](/fr/docs/Web/API/Notification)
