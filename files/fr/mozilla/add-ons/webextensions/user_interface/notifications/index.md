---
title: Notifications
slug: Mozilla/Add-ons/WebExtensions/user_interface/Notifications
tags:
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Notifications
---
{{AddonSidebar}}

Les notifications vous permettent d'afficher des informations sur votre extension ou son contenu en utilisant le système d'exploitation sous-jacent.

![](notify-shadowed.png)

Les notifications peuvent inclure un appel d'action pour l'utilisateur, et votre extension peut écouter l'utilisateur en cliquant sur la notification ou la fermeture de la notification.

## Spécification des notifications

Vous gérez les notifications en programmant, en utilisant l'API {{WebExtAPIRef("notifications")}}. Pour utiliser cette API, vous devez demander la permission de notification dans votre manifest.json :

```json
"permissions": ["notifications"]
```

Vous utilisez ensuite {{WebExtAPIRef("notifications.create")}} pour créer vos notifications, comme dans cet exemple de [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n) :

```js
var title = browser.i18n.getMessage("notificationTitle");
var content = browser.i18n.getMessage("notificationContent", message.url);
browser.notifications.create({
  "type": "basic",
  "iconUrl": browser.extension.getURL("icons/link-48.png"),
  "title": title,
  "message": content
});
```

Ce code crée une notification avec un icône, un titre et un message.

Si la notification inclut un appel à l'action, vous pouvez écouter l'utilisateur en cliquant sur la notification pour appeler la fonction pour gérer l'action:

```js
browser.notifications.onClicked.addListener(handleClick);
```

Si vous émettez des appels à l'action par le biais de notifications, vous souhaitez également définir l'ID de notification facultatif, afin de déterminer quel appel à l'action a sélectionné.

## Icônes

Pour plus d'informations sur la création d'icônes à utiliser avec votre notification, reportez-vous à la section [Iconography](https://design.firefox.com/photon/visuals/iconography.html) dans la documentation [Photon Design System](https://design.firefox.com/photon/index.html).

## Exemples

Le dépôt [webextensions-examples](https://github.com/mdn/webextensions-examples) sur GitHub contient plusieurs exemples de WebExtensions qui utilise la création de notifications :

- [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n) utilise la création de notifications.
