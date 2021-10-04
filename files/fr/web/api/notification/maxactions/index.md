---
title: Notification.maxActions
slug: Web/API/notification/maxActions
tags:
  - API
  - API Notifications
  - Notification
  - Notifications
  - Propriété
  - Reference
  - actions
translation_of: Web/API/Notification/maxActions
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

L'attribut **`maxActions`** de l'interface {{domxref ("Notification")}} renvoie le nombre maximal d'actions prises en charge par l'appareil et l'agent utilisateur. En effet, c'est le nombre maximum d'éléments dans le tableau {{domxref ("Notification.actions")}} qui seront respectés par l'agent utilisateur.

## Syntaxe

    Notification.maxActions

### Valeur

Un entier {{JSxRef ("Number")}} qui indique le plus grand nombre d'actions de notification pouvant être présentées à l'utilisateur par l'agent utilisateur et l'appareil.

## Exemples

L'extrait de code suivant enregistre le nombre maximal d'actions prises en charge.

```js
const { maxActions } = Notification
console.log(`This device can display at most ${maxActions} actions on each notification.`);
```

## Spécifications

| Spécification                                | Status                                   | Comment         |
| -------------------------------------------- | ---------------------------------------- | --------------- |
| {{SpecName("Web Notifications")}} | {{Spec2("Web Notifications")}} | Living standard |

## Compatibilité des navigateurs

{{Compat("api.Notification.maxActions")}}

## Voir également

- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- {{domxref("Notification.actions")}}
