---
title: Notification.silent
slug: Web/API/notification/silent
tags:
  - API
  - API Notifications
  - Notifications
  - Propriété
  - Reference
  - Vibration
  - Vibreur
  - silencieuse
  - silent
translation_of: Web/API/Notification/silent
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propriété en lecture seule **`silent`** de l'interface {{domxref ("Notification")}} spécifie si la notification doit être silencieuse, c'est-à-dire qu'aucun son ou vibration ne doit être émis, quels que soient les paramètres de l'appareil. Ceci est comme définis à l'aide de l'option `silent` lors de la création de la notification à l'aide du constructeur {{domxref ("Notification.Notification", "Notification()")}}.

## Syntaxe

    Notification.silent

### Valeur

Un {{domxref("Boolean")}}. `false` est la valeur par défaut; `true` rend la notification silencieuse.

## Spécifications

| Spécification                                                                                | État                                     | Commentaire     |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------- |
| {{SpecName('Web Notifications','#dom-notification-silent','silent')}} | {{Spec2('Web Notifications')}} | Living standard |

## Compatibilité des navigateurs

{{Compat("api.Notification.silent")}}

## Voir également

- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
