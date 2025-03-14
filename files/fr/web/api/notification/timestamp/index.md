---
title: Notification.timestamp
slug: Web/API/Notification/timestamp
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propriété en lecture seule **`timestamp`** de l'interface {{domxref ("Notification")}} renvoie un {{domxref ("DOMTimeStamp")}}, comme définis à l'aide de l'option `timestamp` lors de la création de la notification à l'aide du constructeur {{domxref ("Notification.Notification", "Notification()")}}.

L'horodatage de la notification peut représenter le moment, en millisecondes depuis 00:00:00 UTC le 1er janvier 1970, de l'événement pour lequel la notification a été créée, ou il peut s'agir d'un horodatage arbitraire que vous souhaitez associer à la notification. Par exemple, un horodatage pour une réunion à venir pourrait être défini dans le futur, tandis qu'un horodatage pour un message manqué pourrait être défini dans le passé.

## Syntaxe

```js
Notification.timestamp;
```

### Valeur

Un {{domxref("DOMTimeStamp")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
