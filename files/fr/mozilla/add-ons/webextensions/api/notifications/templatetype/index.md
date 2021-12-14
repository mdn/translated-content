---
title: notifications.TemplateType
slug: Mozilla/Add-ons/WebExtensions/API/notifications/TemplateType
tags:
  - API
  - Add-ons
  - Extensions
  - Non-standard
  - Notifications
  - Reference
  - TemplateType
  - Type
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/notifications/TemplateType
---
{{AddonSidebar()}}

Ceci est une chaîne et représente le type de notification à créer. Il existe quatre types de notification : "basic", "image", "list", "progress".

Ceci est passé dans {{WebExtAPIRef("notifications.create()")}} et {{WebExtAPIRef("notifications.update()")}} comme propriété de `type` {{WebExtAPIRef("notifications.NotificationOptions", "NotificationOptions")}}.

## Type

Les valeurs de ce type sont des chaînes. Les valeurs possibles sont :

- `"basic"`: la notification comprend :

  - un titre ([`NotificationOptions.title`](/fr/Add-ons/WebExtensions/API/notifications/NotificationOptions#title))
  - un message ([`NotificationOptions.message`](/fr/Add-ons/WebExtensions/API/notifications/NotificationOptions#message))
  - une icône ([`NotificationOptions.iconUrl`](/fr/Add-ons/WebExtensions/API/notifications/NotificationOptions#iconUrl)){{optional_inline}}
  - un message supplémentaire ([`NotificationOptions.contextMessage`](/fr/Add-ons/WebExtensions/API/notifications/NotificationOptions#contextMessage)){{optional_inline}}
  - jusqu'à deux boutons ([`NotificationOptions.buttons`](/fr/Add-ons/WebExtensions/API/notifications/NotificationOptions#buttons)){{optional_inline}}

- `"image"`: tout dans `"basic"` et aussi :

  - Une image ([`NotificationOptions.imageUrl`](/fr/Add-ons/WebExtensions/API/notifications/NotificationOptions#imageUrl))

- `"list"`: tout dans `"basic"` et aussi :

  - Une liste d'éléments ([`NotificationOptions.items`](/fr/Add-ons/WebExtensions/API/notifications/NotificationOptions#items))

- `"progress"`: tout en `"basic"` et aussi :

  - Un indicator de progression ([`NotificationOptions.progress`](/fr/Add-ons/WebExtensions/API/notifications/NotificationOptions#progress))

Actuellement Firefox ne supporte que "basic" ici.

## Compatibilité du navigateur

{{Compat("webextensions.api.notifications.TemplateType")}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.notifications`](https://developer.chrome.com/extensions/notifications).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
