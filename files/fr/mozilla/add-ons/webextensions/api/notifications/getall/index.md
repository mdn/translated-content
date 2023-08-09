---
title: notifications.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/notifications/getAll
---

{{AddonSidebar()}}

Obtient toutes les notifications actuellement actives créées par l'extension.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var gettingAll = browser.notifications.getAll();
```

### Paramètres

None.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera accomplie avec un objet. Chaque notification actuellement active est une propriété de cet objet : le nom de la propriété est l'ID de la notification et la valeur de la propriété est un objet {{WebExtAPIRef("notifications.NotificationOptions")}} décrivant cette notification.

Notez que vous pouvez définir explicitement un ID pour une notification en le passant dans {{WebExtAPIRef("notifications.create()")}}. Si vous ne le faites pas, le navigateur en générera un. Les ID spécifiés explicitement sont des chaînes, mais les ID générés sont des nombres.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Cet exemple affiche une notification lorsque l'utilisateur clique sur une action du navigateur, à moins que la notification ne soit déjà affichée, auquel cas il efface la notification. Il utilise getAll() pour déterminer si la notification est affichée :

```js
var myNotification = "my-notification";

function toggleAlarm(all) {
  let ids = Object.keys(all);
  if (ids.indexOf(myNotification) != -1) {
    browser.notifications.clear(myNotification);
  } else {
    console.log("showing");

    browser.notifications.create(myNotification, {
      type: "basic",
      title: "Am imposing title",
      message: "Some interesting content",
    });
  }
}

function handleClick() {
  console.log("clicked");
  browser.notifications.getAll().then(toggleAlarm);
}

browser.browserAction.onClicked.addListener(handleClick);
```

Cet exemple enregistre le titre de toutes les notifications actives :

```js
function logNotifications(all) {
  for (let id in all) {
    console.log(`Title: ${all[id].title}`);
  }
}

browser.notifications.getAll().then(logNotifications);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.notifications`](https://developer.chrome.com/extensions/notifications).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
