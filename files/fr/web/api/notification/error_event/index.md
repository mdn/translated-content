---
title: Notification.onerror
slug: Web/API/Notification/error_event
tags:
  - API
  - API Notifications
  - Notification
  - Notifications
  - Propriété
  - Reference
  - onerror
translation_of: Web/API/Notification/onerror
original_slug: Web/API/notification/onerror
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propriété **`onerror`** de l'interface {{domxref ("Notification")}} spécifie un écouteur d'événements pour recevoir les événements {{domxref ("HTMLElement/error_event", "error")}}. Ces événements se produisent lorsque quelque chose ce déroule mal avec une {{domxref ("Notification")}} (dans de nombreux cas, une erreur qui empêche l'affichage de la notification.)

## Syntaxe

    Notification.onerror = function(event) { ... }
    Notification.onerror = (even) => { ... }

## Spécifications

| Spécification                                                                                    | État                                     | Commentaire          |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------------------- |
| {{SpecName('Web Notifications','#dom-notification-onerror','onerror')}} | {{Spec2('Web Notifications')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Notification.onerror")}}

## Voir également

- {{domxref("Notification")}}
- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
