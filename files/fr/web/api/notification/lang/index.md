---
title: Notification.lang
slug: Web/API/notification/lang
tags:
  - API
  - API Notifications
  - Notification
  - Notifications
  - Propriété
  - Reference
translation_of: Web/API/Notification/lang
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propriété en lecture seule **`lang`** de l'interface {{domxref ("Notification")}} indique la langue utilisée dans la notification, comme définis à l'aide de l'option `lang` lors de la création de la notification à l'aide du constructeur {{domxref ("Notification.Notification", "Notification()" )}}.

La langue elle-même est spécifiée à l'aide d'un {{domxref ("DOMString")}} représentant [une balise de langue BCP 47](http://www.rfc-editor.org/rfc/bcp/bcp47.txt). Consultez la page des [codes de langue à 2 lettres ISO](http://www.sitepoint.com/web-foundations/iso-2-letter-language-codes/) de Sitepoint pour une référence simple.

## Syntaxz

    Notification.lang

### Valeur

Une {{domxref("DOMString")}} spécifiant la balise de langue.

## Spécifications

| Spécification                                                                            | État                                     | Commentaire     |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | --------------- |
| {{SpecName('Web Notifications','#dom-notification-lang','lang')}} | {{Spec2('Web Notifications')}} | Living standard |

## Browser compatibility

{{Compat("api.Notification.lang")}}

## Voir également

- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
