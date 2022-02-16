---
title: Notification.icon
slug: Web/API/notification/icon
tags:
  - API
  - API Notifications
  - Icône
  - Notification
  - Notifications
  - Propriété
  - Reference
translation_of: Web/API/Notification/icon
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propriété en lecture seule **`icon`** de l'interface {{domxref ("Notification")}} contient l'URL d'une icône à afficher dans le cadre de la notification, comme définis à l'aide de l'option `icon` lors de la création de la notification à l'aide du constructeur {{domxref ("Notification.Notification"," Notification()")}}.

## Syntaxe

    Notification.icon

### Valeur

Une {{domxref("USVString")}}.

## Spécifications

| Spécification                                                                            | État                                     | Commentaire     |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | --------------- |
| {{SpecName('Web Notifications','#dom-notification-icon','icon')}} | {{Spec2('Web Notifications')}} | Living standard |

## Compatibilité des navigateurs

{{Compat("api.Notification.icon")}}

## Voir également

- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
