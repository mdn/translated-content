---
title: L'interface PushManager
slug: Web/API/PushManager
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{ApiRef("Push API")}}

L'interface **`PushManager`** de l'[API Push](/fr/docs/Web/API/Push_API) permet de recevoir des notifications de serveurs tiers et de demander des URL pour les notifications push.

Cette interface est accessible via la propriété [`ServiceWorkerRegistration.pushManager`](/fr/docs/Web/API/ServiceWorkerRegistration/pushManager).

## Propriétés statitiques

- [`PushManager.supportedContentEncodings`](/fr/docs/Web/API/PushManager/supportedContentEncodings_static)
  - : Retourne un tableau des encodages de contenu pris en charge qui peuvent être utilisés pour chiffrer la charge utile d'un message push.

## Méthodes d'instance

- [`PushManager.getSubscription()`](/fr/docs/Web/API/PushManager/getSubscription)
  - : Récupère un abonnement push existant. Elle renvoie une [promesse (`Promise`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui se résout en un objet [`PushSubscription`](/fr/docs/Web/API/PushSubscription) contenant les détails d'un abonnement existant. S'il n'existe pas d'abonnement existant, cette promesse renvoie une valeur `null`.
- [`PushManager.permissionState()`](/fr/docs/Web/API/PushManager/permissionState)
  - : Retourne une [promesse (`Promise`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui correspond à l'état de la permission du `PushManager` courant. La valeur de résolution sera l'une des valeurs suivantes&nbsp;: `'granted'`, `'denied'`, ou `'prompt'`.
- [`PushManager.subscribe()`](/fr/docs/Web/API/PushManager/subscribe)
  - : Permet de s'abonner à un service de push. Il retourne une [promesse (`Promise`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui se résout en un objet [`PushSubscription`](/fr/docs/Web/API/PushSubscription) contenant les détails d'un abonnement à un service push. Un nouvel abonnement est créé si le <i lang="en">service worker</i> actuel n'a pas d'abonnement existant.

### Méthodes obsolètes

- [`PushManager.hasPermission()`](/fr/docs/Web/API/PushManager/hasPermission) {{deprecated_inline}}
  - : Retourne une [promesse (`Promise`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui résout le statut `PushPermissionStatus` de l'application web requérante, qui sera l'un des éléments suivants&nbsp;: `granted`, `denied`, ou `default`. Remplacée par [`PushManager.permissionState()`](/fr/docs/Web/API/PushManager/permissionState).
- [`PushManager.register()`](/fr/docs/Web/API/PushManager/register) {{deprecated_inline}}
  - : Permet de s'abonner à un abonnement push. Remplacée par [`PushManager.subscribe()`](/fr/docs/Web/API/PushManager/subscribe).
- [`PushManager.registrations()`](/fr/docs/Web/API/PushManager/registrations) {{deprecated_inline}}
  - : Récupère les abonnements push existants. Remplacée par [`PushManager.getSubscription()`](/fr/docs/Web/API/PushManager/getSubscription).
- [`PushManager.unregister()`](/fr/docs/Web/API/PushManager/unregister) {{deprecated_inline}}
  - : Désinscrit et supprime un point d'extrémité d'abonnement spécifié. Dans l'API actuelle, un abonnement est désinscrit en appelant la méthode [`PushSubscription.unsubscribe()`](/fr/docs/Web/API/PushSubscription/unsubscribe).

## Exemple

```js
this.onpush = (event) => {
  console.log(event.data);
  // A partir de là, nous pouvons écrire les données dans IndexedDB, les envoyer
  // à n'importe quelle fenêtre ouverte, afficher une notification, etc.
};

navigator.serviceWorker
  .register("serviceworker.js")
  .then((serviceWorkerRegistration) => {
    serviceWorkerRegistration.pushManager.subscribe().then(
      (pushSubscription) => {
        console.log(pushSubscription.endpoint);
        // Les détails de l'abonnement push nécessaires au serveur d'application
        // sont maintenant disponibles et peuvent lui être envoyées en utilisant,
        // par exemple, un XMLHttpRequest.
      },
      (error) => {
        console.error(error);
      },
    );
  });
```

## Spécifications

{{Specifications}}

## Compabilité des navigateurs

{{Compat}}

## Vois aussi

- [L'API Push](/fr/docs/Web/API/Push_API)
- [L'API Service Worker](/fr/docs/Web/API/Service_Worker_API)
