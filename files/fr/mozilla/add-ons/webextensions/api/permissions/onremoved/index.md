---
title: permissions.onRemoved
slug: Mozilla/Add-ons/WebExtensions/API/permissions/onRemoved
---

{{AddonSidebar()}}

Activé lorsque certaines permissions sont supprimés de l'extension.

## Syntaxe

```js
browser.permissions.onRemoved.addListener(listener);
browser.permissions.onRemoved.removeListener(listener);
browser.permissions.onRemoved.hasListener(listener);
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur a supprimée.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré dans l'événement. Retourne `true` s'il écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Fonction qui ne sera appelée lorsque cet événement se produira. La fonction sera passée avec les arguments suivants :

    - `permissions`
      - : L'objet {{WebExtAPIRef("permissions.Permissions")}} contenant les permissions qui ont été supprimées.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

```js
function handleRemoved(permissions) {
  console.log(`Removed API permissions: ${permissions.permissions}`);
  console.log(`Removed host permissions: ${permissions.origins}`);
}

browser.permissions.onRemoved.addListener(handleRemoved);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.permissions`](https://developer.chrome.com/extensions/permissions).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
