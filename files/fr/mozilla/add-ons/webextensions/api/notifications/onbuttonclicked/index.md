---
title: notifications.onButtonClicked
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onButtonClicked
---

{{AddonSidebar()}}

Lancé lorsque l'utilisateur clique sur l'un des boutons de la notification.

## Syntaxe

```js
browser.notifications.onButtonClicked.addListener(listener);
browser.notifications.onButtonClicked.removeListener(listener);
browser.notifications.onButtonClicked.hasListener(listener);
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument de `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

## Syntaxe addListener

### Parameters

- `callback`

  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :

    - `notificationId`
      - : `string`. ID de la notification sur laquelle le bouton a été cliqué.
    - `buttonIndex`
      - : `integer`. L'index [zero-based](https://en.wikipedia.org/wiki/Zero-based_numbering) du bouton sur lequel vous avez cliqué.

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.notifications`](https://developer.chrome.com/extensions/notifications).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
