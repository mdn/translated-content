---
title: Notification.onclose
slug: Web/API/notification/onclose
tags:
  - API
  - API Notifications
  - Notification
  - Notifications
  - Propriété
  - Reference
  - onclose
translation_of: Web/API/Notification/onclose
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propriété **`onclose`** de l'interface {{domxref ("Notification")}} définit un écouteur d'événements pour recevoir les événements {{domxref ("HTMLDialogElement/close_event", "close")}}. Ces événements se produisent lorsqu'une {{domxref ("Notification")}} est fermée.

## Syntaxe

    Notification.onclose = function(event) { ... }
    Notification.onclose = (event) => { ... }

## Compatibilité des navigateurs

{{Compat("api.Notification.onclose")}}

## Voir également

- {{domxref("Notification")}}
- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
