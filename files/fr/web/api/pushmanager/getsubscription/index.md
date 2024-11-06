---
title: "PushManager : la méthode getSubscription()"
short-title: getSubscription()
slug: Web/API/PushManager/getSubscription
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("Push API")}}

La méthode **`PushManager.getSubscription()`** de l'interface [`PushManager`](/fr/docs/Web/API/PushManager) récupère un abonnement push existant.

Elle renvoie une [promesse (`Promise`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui renvoie à un objet [`PushSubscription`](/fr/docs/Web/API/PushSubscription) contenant les détails d'un abonnement existant. S'il n'y a pas d'abonnement existant, cette promesse renvoie une valeur `null`.

## Syntaxe

```js-nolint
getSubscription()
```

### Paramètres

Aucun.

### Valeur de retour

Une [promesse (`Promise`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui se résout en un objet [`PushSubscription`](/fr/docs/Web/API/PushSubscription) ou `null`.

## Exemples

Cet extrait de code est tiré d'un [exemple de messagerie et de notification push](https://github.com/GoogleChrome/samples/tree/gh-pages/push-messaging-and-notifications).

```js
// Nous avons besoin de l'enregistrement du service worker pour vérifier
// l'existence d'un abonnement
navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
  // Avons-nous déjà un abonnement aux messages push ?
  serviceWorkerRegistration.pushManager
    .getSubscription()
    .then((subscription) => {
      // Activer toute interface utilisateur d'inscription / désinscription
      // des messages push.
      const pushButton = document.querySelector(".js-push-button");
      pushButton.disabled = false;

      if (!subscription) {
        // Nous ne sommes pas abonnés à push, donc définir l'UI
        // pour permettre à l'utilisateur d'activer push
        return;
      }

      // Maintenez votre serveur synchronisé avec le dernier subscriptionId
      sendSubscriptionToServer(subscription);

      showCurlCommand(subscription);

      // Réglez votre interface utilisateur pour montrer qu'ils se sont abonnés
      // à des messages push
      pushButton.textContent = "Désactiver les messages push";
      isPushEnabled = true;
    })
    .catch((err) => {
      console.error(`Erreur lors de getSubscription() : ${err}`);
    });
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
