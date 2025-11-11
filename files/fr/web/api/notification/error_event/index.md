---
title: Notification.onerror
slug: Web/API/Notification/error_event
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propriété **`onerror`** de l'interface {{domxref ("Notification")}} spécifie un écouteur d'événements pour recevoir les événements {{domxref ("HTMLElement/error_event", "error")}}. Ces événements se produisent lorsque quelque chose ce déroule mal avec une {{domxref ("Notification")}} (dans de nombreux cas, une erreur qui empêche l'affichage de la notification.)

## Syntaxe

```js
Notification.onerror = function(event) { ... }
Notification.onerror = (even) => { ... }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Notification")}}
- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
