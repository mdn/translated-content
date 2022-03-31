---
title: Notification.requestPermission()
slug: Web/API/notification/requestPermission
tags:
  - API
  - API Notifications
  - Méthode
  - Notification
  - Notifications
  - Reference
translation_of: Web/API/Notification/requestPermission
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

> **Note :** Cette fonctionnalité n'est pas disponible dans {{domxref("SharedWorker")}}

> **Note :** Safari utilise toujours la syntaxe de function de rappel (callback ) pour obtenir l'autorisation. Lisez [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API) pour un bon exemple de la fonctionnalité de détection et d'exécution du code le cas échéant.

La méthode **`requestPermission()`** de l'interface {{domxref ("Notification")}} demande l'autorisation à l'utilisateur pour l'origine actuelle d'afficher des notifications.

## Syntaxe

La dernière spécification a mis à jour cette méthode avec une syntaxe basée sur une promesse qui fonctionne comme ceci:

    Notification.requestPermission()
      .then((permission) => { ... })

Auparavant, la syntaxe était basée sur un simple rappel; cette version est désormais obsolète:

    Notification.requestPermission(callback);

### Paramètres

- `callback` {{optional_inline}} {{deprecated_inline("gecko46")}}
  - : Une fonction de rappel facultative qui est appelée avec la valeur d'autorisation. Déconseillé en faveur de la valeur de retour de la promesse.

### Retour

Une {{jsxref ("Promise", "Promesse")}} qui se résout en une {{domxref ("DOMString")}} avec la permission choisie par l'utilisateur. Les valeurs possibles pour cette chaîne sont:

- `granted`
- `denied`
- `default`

## Exemples

Supposons ce HTML de base:

```html
<button onclick="notifyMe()">Notifie moi !</button>
```

Il est possible d'envoyer une notification comme suit - nous présentons ici un ensemble de code assez détaillé et complet que vous pourriez utiliser si vous vouliez d'abord vérifier si les notifications sont prises en charge, puis vérifiez si l'autorisation a été accordée pour l'origine actuelle d'envoyer des notifications, puis demander l'autorisation si nécessaire, avant d'envoyer une notification.

```js
function notifyMe() {
  // Vérifions si le navigateur prend en charge les notifications
  if (!('Notification' in window)) {
    alert('Ce navigateur ne prend pas en charge la notification de bureau')
  }

  // Vérifions si les autorisations de notification ont déjà été accordées
  else if (Notification.permission === 'granted') {
    // Si tout va bien, créons une notification
    const notification = new Notification('Salut toi!')
  }

  // Sinon, nous devons demander la permission à l'utilisateur
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
      // Si l'utilisateur accepte, créons une notification
      if (permission === 'granted') {
        const notification = new Notification('Salut toi!')
      }
    })
  }

  // Enfin, si l'utilisateur a refusé les notifications, et que vous
  // voulez être respectueux, il n'est plus nécessaire de les déranger.
}
```

Nous ne montrons plus d'exemple en direct sur cette page, car Chrome et Firefox n'autorisent plus les demandes de notification des {{htmlelement ("iframe")}}s d'origine croisée, avec d'autres navigateurs à suivre. Pour voir un exemple en action, consultez notre [exemple de liste de tâches](https://github.com/mdn/to-do-notifications/tree/gh-pages) (voir également l'[application en cours d'exécution](https://mdn.github.io/to-do-notifications/).)

> **Note :** Dans l'exemple ci-dessus, nous générons des notifications en réponse à un geste de l'utilisateur (en cliquant sur un bouton). Il ne s'agit pas seulement d'une bonne pratique - vous ne devriez pas envoyer de spam aux utilisateurs avec des notifications qu'ils n'acceptent pas - mais les navigateurs suivants interdiront explicitement les notifications non déclenchées en réponse à un geste de l'utilisateur. Firefox le fait déjà depuis la version 72, par exemple.

## Spécifications

| Spécification                                | Status                                   | Comment         |
| -------------------------------------------- | ---------------------------------------- | --------------- |
| {{SpecName('Web Notifications')}} | {{Spec2('Web Notifications')}} | Living standard |

## Compatibilité des navigateurs

{{Compat("api.Notification.requestPermission")}}

## Voir également

- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
