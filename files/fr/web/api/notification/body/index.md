---
title: Notification.body
slug: Web/API/notification/body
tags:
  - API
  - API Notifications
  - Corps
  - Notification
  - Notifications
  - Propriété
  - Reference
translation_of: Web/API/Notification/body
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propriété en lecture seule **`body`** de l'interface {{domxref ("Notification")}} est la chaîne de caractères qui correspond au corps de la notification, comme définis à l'aide de l'option `body` lors de la création de la notification à l'aide du constructeur {{domxref ("Notification.Notification", "Notification()" )}}.

## Syntaxe

    Notification.body

### Valeur

Une {{domxref("DOMString")}} contenant le corps de la notification.

## Spécifications

| Spécification                                                                            | État                                     | Commentaire          |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Web Notifications','#dom-notification-body','body')}} | {{Spec2('Web Notifications')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Notification.body")}}

## Voir également

- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
