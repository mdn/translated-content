---
title: notifications.TemplateType
slug: Mozilla/Add-ons/WebExtensions/API/notifications/TemplateType
---

{{AddonSidebar}}

Ceci est une chaîne et représente le type de notification à créer. Il existe quatre types de notification : "basic", "image", "list", "progress".

Ceci est passé dans {{WebExtAPIRef("notifications.create()")}} et {{WebExtAPIRef("notifications.update()")}} comme propriété de `type` {{WebExtAPIRef("notifications.NotificationOptions", "NotificationOptions")}}.

## Type

Les valeurs de ce type sont des chaînes. Les valeurs possibles sont :

- `"basic"`: la notification comprend :

  - un titre ([`NotificationOptions.title`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions#title))
  - un message ([`NotificationOptions.message`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions#message))
  - une icône ([`NotificationOptions.iconUrl`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions#iconurl)){{optional_inline}}
  - un message supplémentaire ([`NotificationOptions.contextMessage`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions#contextmessage)){{optional_inline}}
  - jusqu'à deux boutons ([`NotificationOptions.buttons`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions#buttons)){{optional_inline}}

- `"image"`: tout dans `"basic"` et aussi :

  - Une image ([`NotificationOptions.imageUrl`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions#imageurl))

- `"list"`: tout dans `"basic"` et aussi :

  - Une liste d'éléments ([`NotificationOptions.items`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions#items))

- `"progress"`: tout en `"basic"` et aussi :

  - Un indicator de progression ([`NotificationOptions.progress`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions#progress))

Actuellement Firefox ne supporte que "basic" ici.

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
>
> Cette API est basée sur l'API Chromium [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
