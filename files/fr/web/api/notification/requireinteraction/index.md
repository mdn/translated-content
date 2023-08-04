---
title: Notification.requireInteraction
slug: Web/API/Notification/requireInteraction
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propriété en lecture seule **`requireInteraction`** de l'interface {{domxref ("Notification")}} renvoie un {{jsxref ("Boolean")}} indiquant qu'une notification doit rester active jusqu'à ce que l'utilisateur clique dessus ou la rejette, plutôt que de se fermer automatiquement. Ceci peut être défini à l'aide de l'option `requireInteraction` lors de la création de la notification à l'aide du constructeur {{domxref ("Notification.Notification()")}}.

## Syntaxe

```js
Notification.requireInteraction;
```

### Valeur

Un {{jsxref("Boolean")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
