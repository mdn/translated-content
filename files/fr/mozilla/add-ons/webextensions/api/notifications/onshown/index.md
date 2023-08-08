---
title: notifications.onShown
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onShown
---

{{AddonSidebar()}}

Lancé immédiatement après l'affichage d'une notification.

## Syntaxe

```js
browser.notifications.onShown.addListener(listener);
browser.notifications.onShown.removeListener(listener);
browser.notifications.onShown.hasListener(listener);
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré pour cet événement. Renvoie `true`s'il écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :

    - `notificationId`
      - : `string`. ID de la notification qui a été affichée.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Ajoutez un écouteur à l'événement {{WebExtAPIRef("notifications.onShown")}} et consignez ses détails :

```js
function logShown(itemId) {
  console.log(`shown: ${itemId}`);
  browser.notifications.getAll().then((all) => {
    console.log(all[itemId]);
  });
}

browser.notifications.onShown.addListener(logShown);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.notifications`](https://developer.chrome.com/extensions/notifications).
