---
title: permissions.onAdded
slug: Mozilla/Add-ons/WebExtensions/API/permissions/onAdded
---

{{AddonSidebar()}}

Activé lorsque l'extension a accordé de nouvelles permissions.

## Syntaxe

```js
browser.permissions.onAdded.addListener(listener);
browser.permissions.onAdded.removeListener(listener);
browser.permissions.onAdded.hasListener(listener);
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute une écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifier si le `listener` est enregistré pour cet événement. Retourne `true` s'il écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Fonction qui sera appelée lorsque cet événement se produira. La fonction passera les arguments suivants :

    - `permissions`
      - : Objet {{WebExtAPIRef("permissions.Permissions")}} contenant les permissions qui ont été accordées.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

```js
function handleAdded(permissions) {
  console.log(`New API permissions: ${permissions.permissions}`);
  console.log(`New host permissions: ${permissions.origins}`);
}

browser.permissions.onAdded.addListener(handleAdded);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.permissions`](https://developer.chrome.com/extensions/permissions).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
