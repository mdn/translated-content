---
title: notifications.onClosed
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onClosed
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Notifications
  - Reference
  - WebExtensions
  - onClosed
translation_of: Mozilla/Add-ons/WebExtensions/API/notifications/onClosed
---
{{AddonSidebar()}}

Lancé lorsqu'une notification est fermée, soit par le système, soit par l'utilisateur.

## Syntaxe

```js
browser.notifications.onClosed.addListener(listener)
browser.notifications.onClosed.removeListener(listener)
browser.notifications.onClosed.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` st l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` st enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

## Syntaxe addListener

### Parameters

- `callback`

  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :

    - `notificationId`
      - : `string`. ID de la notification fermée.
    - `byUser`
      - : `boolean`. `true` si la notification a été fermée par l'utilisateur, ou `false`si elle a été fermée par le système. Cet argument n'est pas supporté dans Firefox.

## Compatibilité du navigateur

{{Compat("webextensions.api.notifications.onClosed")}}

## Exemples

Dans cet exemple simple, nous ajoutons un écouteur à l'événement  {{WebExtAPIRef("notifications.onClosed")}} pour écouter les notifications système fermées. Lorsque cela se produit, nous enregistrons un message approprié à la console.

```js
browser.notifications.onClosed.addListener(function(notificationId) {
  console.log('Notification ' + notificationId + ' has closed.');
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.notifications`](https://developer.chrome.com/extensions/notifications).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
