---
title: Notification.onshow
slug: Web/API/Notification/show_event
tags:
  - API
  - API Notifications
  - Notification
  - Notifications
  - Propriété
  - Reference
  - onshow
translation_of: Web/API/Notification/onshow
original_slug: Web/API/notification/onshow
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propriété **`onshow`** de l'interface {{domxref ("Notification")}} définit un écouteur d'événements pour recevoir des événements {{domxref ("Element/show_event", "show")}}. Ces événements se produisent lorsqu'une {{domxref ("Notification")}} est affiché.

## Syntaxe

    Notification.onshow = function() { ... }
    Notification.onshow = () => { ... }

## Compatibilité des navigateurs

{{Compat("api.Notification.onshow")}}

## Voir également

- {{domxref("Notification")}}
- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
