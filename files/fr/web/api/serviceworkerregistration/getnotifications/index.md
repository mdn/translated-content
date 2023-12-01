---
title: ServiceWorkerRegistration.getNotifications()
slug: Web/API/ServiceWorkerRegistration/getNotifications
---

{{APIRef("Service Workers API")}}

La méthode **`getNotifications()`** de l'interface {{domxref ("ServiceWorkerRegistration")}} renvoie une liste des notifications dans l'ordre dans lequel elles ont été créées à partir de l'origine actuelle via l'enregistrement actuel du service worker. Les origines peuvent avoir de nombreuses inscriptions de service worker actives mais de portée différente. Les notifications créées par un service worker sur la même origine ne seront pas disponibles pour les autres services workers actifs sur la même origine.

## Syntaxe

```js
serviceWorkerRegistration.getNotifications(options)
.then(function(notificationsList) { ... })
```

### Paramétres

- options {{optional_inline}}

  - : Un objet contenant des options pour filtrer les notifications renvoyées. Les options disponibles sont:

    - `tag`: Un {{domxref ("DOMString")}} représentant un tag de notification. Si spécifié, seules les notifications contenant cette balise seront renvoyées.

### Valeur de retour

Une {{jsxref ("Promise", "Promesse")}} qui se résout en une liste d'objets {{domxref ("Notification")}}.

## Exemple

```js
navigator.serviceWorker.register("sw.js");

const options = { tag: "user_alerts" };

navigator.serviceWorker.ready.then((registration) => {
  registration.getNotifications(options).then((notifications) => {
    // do something with your notifications
  });
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
