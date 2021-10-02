---
title: Notification.badge
slug: Web/API/notification/badge
tags:
  - API Notification
  - API badge
  - Notification
  - Notifications
  - Propriété
  - Reference
translation_of: Web/API/Notification/badge
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propriété **`badge`** de l'interface {{domxref ("Notification")}} renvoie l'URL de l'image utilisée pour représenter la notification lorsqu'il n'y a pas assez d'espace pour afficher la notification elle-même.

## Syntaxe

    const url = Notification.badge

### Valeur

Une {{domxref('USVString')}} contenant une URL.

## Spécifications

| Spécification                                                                            | État                                     | Commentaire          |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Web Notifications','#dom-notification-badge','badge')}} | {{Spec2('Web Notifications')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Notification.badge")}}
