---
title: notifications.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onClicked
---

{{AddonSidebar()}}

Lancé lorsque l'utilisateur clique sur une notification, mais pas sur l'un des boutons de la notification (pour cela, voir {{WebExtAPIRef("notifications.onButtonClicked")}}).

## Syntaxe

```js
browser.notifications.onClicked.addListener(listener);
browser.notifications.onClicked.removeListener(listener);
browser.notifications.onClicked.hasListener(listener);
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :

    - `notificationId`
      - : `string`. ID de la notification sur laquelle l'utilisateur a cliqué.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Dans cet exemple simple, nous ajoutons un écouteur à l'événement {{WebExtAPIRef("notifications.onClicked")}} pour écouter les notifications système en cours de clic. Lorsque cela se produit, nous enregistrons un message approprié à la console.

```js
browser.notifications.onClicked.addListener(function (notificationId) {
  console.log("Notification " + notificationId + " was clicked by the user");
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.notifications`](https://developer.chrome.com/extensions/notifications).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
