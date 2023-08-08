---
title: permissions.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/getAll
---

{{AddonSidebar()}}

Récupère un objet {{WebExtAPIRef("permissions.Permissions")}} contenant toutes les permissions actuellement acccordées à l'extension.

Il s'agit d'une fonction asynchrone qui retourne une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var gettingAll = browser.permissions.getAll();
```

### Paramètres

None.

### Valeur renvoyée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un objet {{WebExtAPIRef("permissions.Permissions")}} contenant toutes les permissions actuellement accordées à l'extensions. Cela inclut toutes les permissions que l'extension à répertoriées dans la clé de [`permissions`](/fr/Add-ons/WebExtensions/manifest.json/permissions) , et toutes les permissions répertoriées dans [`optional_permissions`](/fr/Add-ons/WebExtensions/manifest.json/optional_permissions) que l'extension a été accordée en appelant {{WebExtAPIRef("permissions.request()")}}.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

```js
// Extension permissions are:
// "webRequest", "tabs", "*://*.mozilla.org/*"

browser.permissions.getAll().then((result) => {
  console.log(result.permissions); // [ "webRequest", "tabs" ]
  console.log(result.origins); // [ "*://*.mozilla.org/*" ]
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.permissions`](https://developer.chrome.com/extensions/permissions).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
