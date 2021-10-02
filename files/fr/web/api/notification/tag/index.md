---
title: Notification.tag
slug: Web/API/notification/tag
tags:
  - API
  - API Notifications
  - Balise
  - Notification
  - Notifications
  - Propriété
  - Reference
  - tag
translation_of: Web/API/Notification/tag
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propriété en lecture seule **`tag`** de l'interface {{domxref ("Notification")}} correspond à une balise d'identification pour la notification, comme définis à l'aide de l'option `tag` lors de la création de la notification à l'aide du constructeur {{domxref ("Notification.Notification", "Notification()" )}}.

L'idée des balises de notification est que plusieurs notifications peuvent partager la même balise, les reliant entre elles. Une notification peut ensuite être programmatiquement remplacée par une autre pour éviter que l'écran des utilisateurs ne soit rempli d'un grand nombre de notifications similaires.

## Syntaxe

    Notification.tag

### Valeur

Une {{domxref("DOMString")}}.

## Spécifications

| Spécification                                                                        | État                                     | Commentaire     |
| ------------------------------------------------------------------------------------ | ---------------------------------------- | --------------- |
| {{SpecName('Web Notifications','#dom-notification-tag','tag')}} | {{Spec2('Web Notifications')}} | Living standard |

## Compatibilité des navigateurs

{{Compat("api.Notification.tag")}}

## Voir également

- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
