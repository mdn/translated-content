---
title: notifications.clear()
slug: Mozilla/Add-ons/WebExtensions/API/notifications/clear
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Notifications
  - Reference
  - WebExtensions
  - clear
translation_of: Mozilla/Add-ons/WebExtensions/API/notifications/clear
---
{{AddonSidebar()}}

Efface une notification, compte tenu de son identifiant.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var clearing = browser.notifications.clear(
  id                            // string
)
```

### Paramètres

- `id`
  - : `string`. L'ID de la notification à effacer. C'est la même chose que l'ID transmis dans le callback {{WebExtAPIRef('notifications.create()')}}.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un booléen : `true` la notification a été effacée, ou `false` si ce n'est pas le cas (par exemple, parce que la notification référencée par `id` n'existe pas).

## Compatibilité du navigateur

{{Compat("webextensions.api.notifications.clear")}}

## Exemples

Cet exemple affiche une notification lorsque l'utilisateur clique sur une action du navigateur, à moins que la notification ne soit déjà affichée, auquel cas il efface la notification :

```js
var myNotification = "my-notification";

function toggleAlarm(all) {
  if (myNotification in all) {
    browser.notifications.clear(myNotification);
  } else {
    browser.notifications.create(myNotification, {
      "type": "basic",
      "iconUrl": browser.extension.getURL("icons/cake-48.png"),
      "title": "Am imposing title",
      "message": "Some interesting content"
    });
  }
}

function handleClick() {
  var gettingAll = browser.notifications.getAll();
  gettingAll.then(toggleAlarm);
}

browser.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.notifications`](https://developer.chrome.com/extensions/notifications).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
