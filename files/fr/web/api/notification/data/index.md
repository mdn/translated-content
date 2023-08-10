---
title: Notification.data
slug: Web/API/Notification/data
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propriété en lecture seule **`data`** de l'interface {{domxref ("Notification")}} renvoie un clone structuré des données de la notification, comme définis à l'aide de l'option `data` lors de la création de la notification à l'aide du constructeur {{domxref ("Notification.Notification", "Notification() ")}}.

Les données de la notification peuvent être des données arbitraires, sans restriction de format que vous souhaitez associer à la notification.

## Syntaxe

```js
Notification.data;
```

### Valeur

Un clone structuré.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
