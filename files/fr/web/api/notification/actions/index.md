---
title: Notification.actions
slug: Web/API/notification/actions
tags:
  - API
  - API Notifications
  - Notification
  - Notifications
  - Propriété
  - Reference
  - actions
translation_of: Web/API/Notification/actions
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propriété **`actions`** en lecture seule de l'interface {{domxref ("Notification")}} renvoie la liste des {{domxref ("NotificationAction")}} objets définis à l'aide de l'option `actions` lors de la création de la notification à l'aide du constructeur {{domxref("Notification.Notification","Notification()")}}.

Il s'agit d'une liste des actions définies par l'application que l'utilisateur peut choisir de prendre directement depuis le contexte d'une notification.

> **Note :** Le périphérique et l'agent utilisateur peuvent ne pouvoir afficher qu'un nombre limité d'actions (en raison, par exemple, d'un espace d'écran limité). Cette limite peut être déduite de {{DOMxRef ("Notification.maxActions")}}.

## Syntaxe

    Notification.actions

### Valeur

Un tableau en lecture seule d'objets {{domxref ("NotificationAction")}}, chacun décrivant une action unique que l'utilisateur peut choisir dans une notification.

## Spécifications

| Spécification                                                                                    | État                                     | Commentaire     |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | --------------- |
| {{SpecName('Web Notifications','#dom-notification-actions','actions')}} | {{Spec2('Web Notifications')}} | Living standard |

## Compatibilité des navigateurs

{{Compat("api.Notification.actions")}}

## Voir également

- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- {{DOMxRef("Notification.maxActions")}}
