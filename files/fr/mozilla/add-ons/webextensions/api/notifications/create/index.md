---
title: notifications.create()
slug: Mozilla/Add-ons/WebExtensions/API/notifications/create
tags:
  - API
  - Add-ons
  - Create
  - Extensions
  - Method
  - Non-standard
  - Notifications
  - Reference
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/notifications/create
---
{{AddonSidebar()}}

Crée et affiche une notification.

Passez un {{WebExtAPIRef("notifications.NotificationOptions")}} pour définir le contenu et le comportement de la notification.

Vous pouvez éventuellement fournir un ID pour la notification. Si vous omettez l'ID, un ID sera généré. Vous pouvez utiliser l'ID pour {{WebExtAPIRef("notifications.update()", "update")}} ou {{WebExtAPIRef("notifications.clear()", "clear")}} la notification.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

> **Attention :** Si vous appelez `notifications.create()` plus d'une fois de suite, Firefox peut ne pas afficher de notification pour tout.

## Syntaxe

```js
var creating = browser.notifications.create(
  id,                   // optional string
  options               // NotificationOptions
)
```

### Paramètres

- `id`{{optional_inline}}
  - : `string`. Ceci est utilisé pour faire référence à cette notification dans {{WebExtAPIRef("notifications.update()")}}, {{WebExtAPIRef("notifications.clear()")}}, et les écouteurs d'événements. Si vous omettez cet argument ou passez une chaîne vide, un nouvel ID sera généré pour cette notification. Si l'ID que vous fournissez correspond à l'ID d'une notification existante provenant de cette extension, l'autre notification sera effacée.
- `options`
  - : {{WebExtAPIRef('notifications.NotificationOptions')}}. Définit le contenu et le comportement de la notification.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie lorsque la notification est créée et que le processus d'affichage a été démarré, avant que la notification ne s'affiche réellement à l'utilisateur. Il est rempli avec une chaîne représentant l'identifiant de la notification.

## Compatibilité du navigateur

{{Compat("webextensions.api.notifications.create")}}

## Exemples

Créez et affichez périodiquement une notification de base à l'aide d'un  {{WebExtAPIRef("alarms", "alarm")}}. En cliquant sur l'action du navigateur, la notification est rejetée.

Notez que vous aurez besoin de la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) "alarms" pour créer des alarmes (ainsi que de la permission "notifications" pour créer des notifications).

```js
var cakeNotification = "cake-notification"

/*

CAKE_INTERVAL is set to 6 seconds in this example.
Such a short period is chosen to make the extension's behavior
more obvious, but this is not recommended in real life.
Note that in Chrome, alarms cannot be set for less
than a minute.

*/
var CAKE_INTERVAL = 0.1;

browser.alarms.create("", {periodInMinutes: CAKE_INTERVAL});

browser.alarms.onAlarm.addListener(function(alarm) {
  browser.notifications.create(cakeNotification, {
    "type": "basic",
    "iconUrl": browser.extension.getURL("icons/cake-96.png"),
    "title": "Time for cake!",
    "message": "Something something cake"
  });
});

browser.browserAction.onClicked.addListener(()=> {
  var clearing = browser.notifications.clear(cakeNotification);
  clearing.then(() => {
    console.log("cleared");
  });
});
```

Affichez une notification similaire, mais ajoutez des boutons nommant des gâteaux et consignez le gâteau sélectionné lorsque vous cliquez sur un bouton :

```js
var cakeNotification = "cake-notification"

/*

CAKE_INTERVAL is set to 6 seconds in this example.
Such a short period is chosen to make the extension's behavior
more obvious, but this is not recommended in real life.
Note that in Chrome, alarms cannot be set for less
than a minute.

*/
var CAKE_INTERVAL = 0.1;

var buttons = [
  {
    "title": "Chocolate"
  }, {
    "title": "Battenberg"
  }
];

browser.alarms.create("", {periodInMinutes: CAKE_INTERVAL});

browser.alarms.onAlarm.addListener(function(alarm) {
  browser.notifications.create(cakeNotification, {
    "type": "basic",
    "iconUrl": browser.extension.getURL("icons/cake-96.png"),
    "title": "Time for cake!",
    "message": "Something something cake",
    "buttons": buttons
  });
});

browser.browserAction.onClicked.addListener(()=> {
  var clearing = browser.notifications.clear(cakeNotification);
  clearing.then(() => {
    console.log("cleared");
  });
});

browser.notifications.onButtonClicked.addListener((id, index) => {
  browser.notifications.clear(id);
  console.log("You chose: " + buttons[index].title);
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.notifications`](https://developer.chrome.com/extensions/notifications).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
