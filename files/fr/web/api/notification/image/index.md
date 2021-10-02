---
title: Notification.image
slug: Web/API/notification/image
tags:
  - API
  - API Notifications
  - Image
  - Notification
  - Notifications
  - Propriété
  - Reference
translation_of: Web/API/Notification/image
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propriété en lecture seule **`image`** de l'interface {{domxref ("Notification")}} contient l'URL d'une image à afficher dans le cadre de la notification, comme définis à l'aide de l'option `image` lors de la création de la notification à l'aide du constructeur {{domxref ("Notification.Notification"," Notification()")}}.

## Syntaxe

    Notification.image

### Valeur

Une {{domxref("USVString")}}.

## Spécifications

| Spécification                                                                    | État                                     | Commentaire     |
| -------------------------------------------------------------------------------- | ---------------------------------------- | --------------- |
| {{SpecName('Web Notifications','#image-resource','image')}} | {{Spec2('Web Notifications')}} | Living standard |

## Compatibilité des navigateurs

{{Compat("api.Notification.image")}}

## Voir également

- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
