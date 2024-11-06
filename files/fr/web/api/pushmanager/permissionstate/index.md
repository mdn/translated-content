---
title: "PushManager : la méthode permissionState()"
short-title: permissionState()
slug: Web/API/PushManager/permissionState
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("Push API")}}

La méthode **`permissionState()`** de l'interface [`PushManager`](/fr/docs/Web/API/PushManager) renvoie une [promesse (`Promise`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui se résout en une chaîne de caractères indiquant l'état de la permission du gestionnaire de push. Les valeurs possibles sont `'prompt'`, `'denied'`, ou `'granted'`.

> [!NOTE]
> Depuis Firefox 44, les autorisations pour [Notifications](/fr/docs/Web/API/Notifications_API) et [Push](/fr/docs/Web/API/Push_API) ont été fusionnées. Si l'autorisation est accordée pour les notifications, le push sera également activé.

## Syntaxe

```js-nolint
permissionState()
permissionState(options)
```

### Paramètres

- `options` {{optional_inline}}

  - : Un objet contenant des paramètres de configuration optionnels. Il peut avoir les propriétés suivantes&nbsp;:

    - `userVisibleOnly`
      - : Un booléen indiquant que l'abonnement push renvoyé ne sera utilisé que pour les messages dont l'effet est visible pour l'utilisatrice ou l'utilisateur.
    - `applicationServerKey`
      - : Clé publique que votre serveur push utilisera pour envoyer des messages aux applications clientes via un serveur push. Cette valeur fait partie d'une paire de clés de signature générée par votre serveur d'application et utilisable avec la signature numérique à courbe elliptique (ECDSA) sur la courbe P-256.

### Valeur de retour

Une [promesse (`Promise`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui se résout en une chaîne de caractères ayant pour valeur `'prompt'`, `'denied'`, ou `'granted'`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
