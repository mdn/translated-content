---
title: Notification.silent
slug: Web/API/Notification/silent
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propriété en lecture seule **`silent`** de l'interface {{domxref ("Notification")}} spécifie si la notification doit être silencieuse, c'est-à-dire qu'aucun son ou vibration ne doit être émis, quels que soient les paramètres de l'appareil. Ceci est comme définis à l'aide de l'option `silent` lors de la création de la notification à l'aide du constructeur {{domxref ("Notification.Notification", "Notification()")}}.

## Syntaxe

```js
Notification.silent;
```

### Valeur

Un {{domxref("Boolean")}}. `false` est la valeur par défaut; `true` rend la notification silencieuse.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
