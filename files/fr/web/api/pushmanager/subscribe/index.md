---
title: "PushManager : la méthode subscribe()"
short-title: subscribe()
slug: Web/API/PushManager/subscribe
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ApiRef("Push API")}}

La méthode **`subscribe()`** de l'interface [`PushManager`](/fr/docs/Web/API/PushManager) permet de s'abonner à un service push.

Elle renvoie une [promesse (`Promise`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui se résout en un objet [`PushSubscription`](/fr/docs/Web/API/PushSubscription) contenant les détails d'un abonnement à un service de push. Un nouvel abonnement est créé si le <i lang="en">service worker</i> actuel n'a pas d'abonnement existant.

## Syntaxe

```js-nolint
subscribe(options)
```

### Paramètres

- `options` {{optional_inline}}
  - : Un objet contenant des paramètres de configuration optionnels. Il peut avoir les propriétés suivantes&nbsp;:
    - `userVisibleOnly`
      - : Un booléen indiquant que l'abonnement push renvoyé ne sera utilisé que pour les messages dont l'effet est visible pour l'utilisatrice ou l'utilisateur.
    - `applicationServerKey`
      - : Une chaîne encodée en Base64 ou un [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) contenant une clé publique [ECDSA](https://fr.wikipedia.org/wiki/Elliptic_curve_digital_signature_algorithm) P-256 que le serveur push utilisera pour authentifier votre serveur d'application. Si vous le spécifiez, tous les messages provenant de votre serveur d'application doivent utiliser le schéma d'authentification [VAPID](https://datatracker.ietf.org/doc/html/rfc8292) et inclure un JWT signé avec la clé privée correspondante. Cette clé **_n'est pas_** la même clé ECDH que celle que vous utilisez pour chiffrer les données. Pour plus d'informations, voir «&nbsp;[Utiliser VAPID avec WebPush (en anglais)](https://blog.mozilla.org/services/2016/04/04/using-vapid-with-webpush/)&nbsp;».

    > [!NOTE]
    > Ce paramètre est nécessaire dans certains navigateurs comme Chrome et Edge.

### Valeur de retour

Une [promesse (`Promise`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui se résout en un objet [`PushSubscription`](/fr/docs/Web/API/PushSubscription).

## Exemples

```js
this.onpush = (event) => {
  console.log(event.data);
  // À partir de là, nous pouvons écrire les données dans IndexedDB,
  // les envoyer à toutes les fenêtres ouvertes, afficher une notification, etc.
};

navigator.serviceWorker.register("serviceworker.js");

// Utilisez serviceWorker.ready pour vous assurer que vous pouvez vous abonner au push
navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
  const options = {
    userVisibleOnly: true,
    applicationServerKey,
  };
  serviceWorkerRegistration.pushManager.subscribe(options).then(
    (pushSubscription) => {
      console.log(pushSubscription.endpoint);
      // Les détails de l'abonnement push dont le serveur d'application a besoin
      // sont maintenant disponibles et peuvent lui être envoyés en utilisant,
      // par exemple, un XMLHttpRequest.
    },
    (error) => {
      // Pendant le développement, il est souvent utile de consigner les erreurs
      // dans la console. Dans un environnement de production, il peut être
      // judicieux de transmettre également des informations sur les erreurs
      // au serveur d'application.
      console.error(error);
    },
  );
});
```

### Répondre aux actions de l'utilisatrice ou de l'utilisateur

Les appels `subscribe()` doivent être effectués en réponse à une action de l'utilisatrice ou de l'utilisateur, tel qu'un clic sur un bouton, par exemple&nbsp;:

```js
btn.addEventListener("click", () => {
  serviceWorkerRegistration.pushManager
    .subscribe(options)
    .then((pushSubscription) => {
      // gérer l'abonnement
    });
});
```

Il ne s'agit pas que d'une bonne pratique&nbsp;: vous ne devriez pas inonder les utilisateurs avec des notifications qu'ils n'ont pas acceptées. À l'avenir, les navigateurs interdiront explicitement les notifications qui ne sont pas déclenchées en réponse à une action explicite de l'utilisatrice ou de l'utilisateur. Firefox fonctionne ainsi depuis la version 72, par exemple.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
