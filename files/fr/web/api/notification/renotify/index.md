---
title: Notification.renotify
slug: Web/API/notification/renotify
tags:
  - API
  - API Notifications
  - Experimental
  - Notification
  - Notifications
  - Propriété
  - Reference
  - renotifier
  - renotify
translation_of: Web/API/Notification/renotify
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propriété en lecture seule **`renotify`** de l'interface {{domxref ("Notification")}} spécifie si l'utilisateur doit être notifié après qu'une nouvelle notification remplace l'ancienne, comme spécifié comme définis à l'aide de l'option `renotify` lors de la création de la notification à l'aide du constructeur {{domxref ("Notification.Notification"," Notification()")}}.

## Syntaxe

    Notification.renotify

### Valeur

Un {{domxref("Boolean")}}. `false` est la valeur par défaut; `true` oblige la notification à renotifier l'utilisateur.

## Spécifications

| Spécification                                                                                    | État                                     | Commentaire     |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | --------------- |
| {{SpecName('Web Notifications','#dom-notification-renotify','renotify')}} | {{Spec2('Web Notifications')}} | Living standard |

## Compatibilité des navigateurs

{{Compat("api.Notification.renotify")}}

## Voir également

- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
