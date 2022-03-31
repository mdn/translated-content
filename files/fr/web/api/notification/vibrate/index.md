---
title: Notification.vibrate
slug: Web/API/notification/vibrate
tags:
  - API
  - API Notifications
  - Notification
  - Notifications
  - Propriété
  - Reference
  - Vibration
  - Vibreur
  - vibrate
translation_of: Web/API/Notification/vibrate
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propriété en lecture seule **`vibrate`** de l'interface {{domxref ("Notification")}} spécifie un modèle de vibration que le matériel de vibration de l'appareil doit émettre lorsque la notification se déclenche. Ceci est comme définis à l'aide de l'option `vibrate` lors de la création de la notification à l'aide du constructeur {{domxref ("Notification.Notification", "Notification ()")}}.

## Syntaxe

    Notification.vibrate

### Valeur

Un [modèle de vibration](/fr/docs/Web/Guide/API/Vibration#Vibration_patterns), tel que spécifié dans la spécification de l'{{domxref ("Vibration_API", "Api de Vibration")}}.

## Spécifications

| Spécification                                                                                    | État                                     | Commentaire     |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | --------------- |
| {{SpecName('Web Notifications','#dom-notification-vibrate','vibrate')}} | {{Spec2('Web Notifications')}} | Living standard |

## Compatibilité des navigateurs

{{Compat("api.Notification.vibrate")}}

## Voir également

- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
