---
title: Notification
slug: Web/API/Notification
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

L'interface Notification de l'[API Notifications](/fr/docs/Web/API/Notifications_API) est utilisée pour configurer et afficher les notifications de bureau à l'utilisateur. L'apparence et les fonctionnalités spécifiques de ces notifications varient selon les plates-formes, mais elles permettent généralement de fournir des informations de manière asynchrone à l'utilisateur.

## Constructeur

- {{domxref("Notification.Notification", "Notification()")}}
  - : Créer une nouvelle instance de l'object `Notification`.

## Propriétés

### Propriétés statiques

_Ces propriétés ne sont disponibles que sur l'objet_ `Notification` _lui-même._

- {{domxref("Notification.permission")}} {{readonlyinline}}

  - : Une chaîne représentant l'autorisation actuelle d'afficher les notifications. Les valeurs possibles sont:

    - `denied` — L'utilisateur refuse d'afficher des notifications.
    - `granted` — L'utilisateur accepte d'afficher des notifications.
    - `default` — Le choix de l'utilisateur est inconnu et donc le navigateur agira comme si la valeur était refusée.

- {{domxref("Notification.maxActions")}} {{readonlyinline}}
  - : Le nombre maximal d'actions pris en charge par l'appareil et l'agent utilisateur.

### Propriétés de l'instance

_Ces propriétés ne sont disponibles que sur les instances de l'objet_ `Notification`_._

- {{domxref("Notification.actions")}} {{readonlyinline}}
  - : Tableau d'actions de la notification comme spécifié dans le paramètre `options` du constructeur.
- {{domxref("Notification.badge")}} {{readonlyinline}}
  - : L'URL de l'image utilisée pour représenter la notification lorsqu'il n'y a pas assez d'espace pour afficher la notification elle-même.
- {{domxref("Notification.body")}} {{readonlyinline}}
  - : Une chaîne représentant le corps de la notification telle que spécifiée dans le paramètre `options` du constructeur.
- {{domxref("Notification.data")}} {{readonlyinline}}
  - : Renvoie un clone structuré des données de la notification.
- {{domxref("Notification.dir")}} {{readonlyinline}}
  - : La direction du texte de la notification comme spécifié dans le paramètre `options` du constructeur.
- {{domxref("Notification.lang")}} {{readonlyinline}}
  - : Code de langue de la notification tel que spécifié dans le paramètre `options` du constructeur.
- {{domxref("Notification.tag")}} {{readonlyinline}}
  - : L'ID de la notification (le cas échéant) tel que spécifié dans le paramètre `options` du constructeur.
- {{domxref("Notification.icon")}} {{readonlyinline}}
  - : L'URL de l'image utilisée comme icône de la notification comme spécifié dans le paramètre `options` du constructeur.
- {{domxref("Notification.image")}} {{readonlyinline}}
  - : L'URL d'une image à afficher dans le cadre de la notification, comme spécifié dans le paramètre `options` du constructeur.
- {{domxref("Notification.renotify")}} {{readonlyinline}}
  - : Spécifie si l'utilisateur doit être averti après qu'une nouvelle notification remplace l'ancienne.
- {{domxref("Notification.requireInteraction")}} {{readonlyinline}}
  - : Un {{jsxref ("Boolean")}} indiquant qu'une notification doit rester active jusqu'à ce que l'utilisateur clique dessus ou la rejette, plutôt que de se fermer automatiquement.
- {{domxref("Notification.silent")}} {{readonlyinline}}
  - : Spécifie si la notification doit être silencieuse, c'est-à-dire qu'aucun son ou vibration ne doit être émis, quels que soient les paramètres de l'appareil.
- {{domxref("Notification.timestamp")}} {{readonlyinline}}
  - : Spécifie l'heure à laquelle une notification est créée ou applicable (passée, présente ou future).
- {{domxref("Notification.title")}} {{readonlyinline}}
  - : Le titre de la notification tel que spécifié dans le premier paramètre du constructeur.
- {{domxref("Notification.vibrate")}} {{readonlyinline}}
  - : Spécifie un modèle de vibration pour les périphériques dotés d'un matériel de vibration à émettre.

### Gestionnaires d'événements

- {{domxref("Notification.onclick")}}
  - : Un gestionnaire pour l'événement {{domxref ("Element/click_event", "click")}}. Il est déclenché à chaque fois que l'utilisateur clique sur la notification.
- {{domxref("Notification.onclose")}}
  - : Un gestionnaire pour l'événement {{domxref ("HTMLDialogElement/close_event", "close")}}. Il est déclenché lorsque l'utilisateur ferme la notification.
- {{domxref("Notification.onerror")}}
  - : Un gestionnaire pour l'événement {{domxref ("HTMLElement/error_event", "error")}}. Il est déclenché chaque fois que la notification rencontre une erreur.
- {{domxref("Notification.onshow")}}
  - : Un gestionnaire pour l'événement {{domxref ("Element/show_event", "show")}}. Il est déclenché lorsque la notification est affichée.

## Méthodes

### Méthodes statiques

_Ces méthodes ne sont disponibles que sur l'objet_ `Notification` _lui-même._

- {{domxref("Notification.requestPermission()")}}
  - : Demande l'autorisation à l'utilisateur d'afficher les notifications.

### Méthodes d'instance

_Ces propriétés ne sont disponibles que sur une instance de l'objet_ `Notification` _ou via son_ [prototype](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)_. L'objet_ `Notification` _hérite également de l'interface {{domxref ("EventTarget")}}._

- {{domxref("Notification.close()")}}
  - : Ferme programmatiquement une instance de notification.

## Exemples

Supposons ce HTML de base:

```html
<button onclick="notifyMe()">Notifie moi !</button>
```

Il est possible d'envoyer une notification comme suit - nous présentons ici un ensemble de code assez détaillé et complet que vous pourriez utiliser si vous vouliez d'abord vérifier si les notifications sont prises en charge, puis vérifiez si l'autorisation a été accordée pour l'{{glossary("Origin","origine")}} actuelle d'envoyer des notifications, puis demander l'autorisation si nécessaire, avant d'envoyer une notification.

```js
function notifyMe() {
  // Vérifions si le navigateur prend en charge les notifications
  if (!("Notification" in window)) {
    alert("Ce navigateur ne prend pas en charge la notification de bureau");
  }

  // Vérifions si les autorisations de notification ont déjà été accordées
  else if (Notification.permission === "granted") {
    // Si tout va bien, créons une notification
    const notification = new Notification("Salut toi!");
  }

  // Sinon, nous devons demander la permission à l'utilisateur
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      // Si l'utilisateur accepte, créons une notification
      if (permission === "granted") {
        const notification = new Notification("Salut toi!");
      }
    });
  }

  // Enfin, si l'utilisateur a refusé les notifications, et que vous
  // voulez être respectueux, il n'est plus nécessaire de les déranger.
}
```

Nous ne montrons plus d'exemple en direct sur cette page, car Chrome et Firefox n'autorisent plus les demandes de notification des {{htmlelement ("iframe")}}s d'origine croisée, avec d'autres navigateurs à suivre. Pour voir un exemple en action, consultez notre [exemple de liste de tâches](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) (voir également l'[application en cours d'exécution](https://mdn.github.io/dom-examples/to-do-notifications/).)

> **Note :** Dans l'exemple ci-dessus, nous générons des notifications en réponse à un geste de l'utilisateur (en cliquant sur un bouton). Il ne s'agit pas seulement d'une bonne pratique - vous ne devriez pas envoyer de spam aux utilisateurs avec des notifications qu'ils n'acceptent pas - mais les navigateurs suivants interdiront explicitement les notifications non déclenchées en réponse à un geste de l'utilisateur. Firefox le fait déjà depuis la version 72, par exemple.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
