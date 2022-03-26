---
title: Notification.data
slug: Web/API/notification/data
tags:
  - API
  - API Notifications
  - Notification
  - Notifications
  - Propriété
  - Reference
  - données
translation_of: Web/API/Notification/data
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propriété en lecture seule **`data`** de l'interface {{domxref ("Notification")}} renvoie un clone structuré des données de la notification, comme définis à l'aide de l'option `data`  lors de la création de la notification à l'aide du constructeur {{domxref ("Notification.Notification", "Notification() ")}}.

Les données de la notification peuvent être des données arbitraires, sans restriction de format que vous souhaitez associer à la notification.

## Syntaxe

    Notification.data

### Valeur

Un clone structuré.

## Spécifications

| Spécification                                                                            | État                                     | Commentaire          |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Web Notifications','#dom-notification-data','data')}} | {{Spec2('Web Notifications')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Notification.data")}}

## Voir également

- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
