---
title: notifications.update()
slug: Mozilla/Add-ons/WebExtensions/API/notifications/update
---

{{AddonSidebar()}}

Met à jour une notification, compte tenu de son identifiant

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var updating = browser.notifications.update(
  id, // string
  options, // NotificationOptions
);
```

### Paramètres

- `id`
  - : `string`. L'ID de la notification à mettre à jour. C'est la même chose que l'ID transmis dans le callback {{WebExtAPIRef('notifications.create()')}}.
- `options`
  - : {{WebExtAPIRef('notifications.NotificationOptions')}}. Définit le nouveau contenu et le nouveau comportement de la notification.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un booléen : `true` si la notification a été mise à jour, ou `false` si ce n'est pas le cas (par exemple, parce que la notification référencée par `id` n'existe pas).

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Cet exemple utilise `update()` pour mettre à jour une notification de progression. Cliquez sur l'action du navigateur pour afficher la notification et lancer un {{WebExtAPIRef("alarms", "alarm")}}, que nous utilisons pour mettre à jour l'indicateur de progression de la notification.

Notez que vous aurez besoin de la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) "alarms" pour créer des alarmes (ainsi que de la permission "notifications" pour créer des notifications). Notez également que Firefox ne prend pas en charge l'attribut de `progress`.

```js
var cakeNotification = "cake-notification";

/*

CAKE_INTERVAL is set to 0.3 seconds in this example.
Such a short period is chosen to make the extension's behavior
more obvious, but this is not recommended in real life.
Note that in Chrome, alarms cannot be set for less than
a minute.

*/
var CAKE_PREP_INTERVAL = 0.005;

var progress = 0;

browser.alarms.onAlarm.addListener(function (alarm) {
  progress = progress + 10;
  if (progress > 100) {
    browser.notifications.clear(cakeNotification);
    browser.alarms.clear("cake-progress");
  } else {
    browser.notifications.update(cakeNotification, {
      progress: progress,
    });
  }
});

browser.browserAction.onClicked.addListener(function () {
  browser.notifications.getAll((all) => {
    if (all.length > 0) {
      browser.notifications.clear(cakeNotification);
      return;
    }
    progress = 0;
    browser.notifications.create(cakeNotification, {
      type: "progress",
      iconUrl: browser.extension.getURL("icons/cake-48.png"),
      title: "Your cake is being prepared...",
      message: "Something something cake",
      progress: progress,
    });
    browser.alarms.create("cake-progress", {
      periodInMinutes: CAKE_PREP_INTERVAL,
    });
  });
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.notifications`](https://developer.chrome.com/extensions/notifications).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
