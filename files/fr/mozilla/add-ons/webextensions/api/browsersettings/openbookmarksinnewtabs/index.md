---
title: browserSettings.openBookmarksInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs
tags:
  - API
  - Add-ons
  - Extensions
  - Property
  - Reference
  - WebExtensions
  - browsetSettings
  - openBookmarksInNewTabs
translation_of: Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs
---
{{AddonSidebar()}}

Un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} dont la valeur sous-jacente est un booléen.

Si la valeur est `true`, alors lorsque l'utilisateur sélectionne un signet, il sera ouvert dans un nouvel onglet. Si la valeur est`false` (valeur par défaut), les marque-pages sont ouverts dans l'onglet en cours.

## Compatibilité de navigateur

{{Compat("webextensions.api.browserSettings.openBookmarksInNewTabs")}}

## Exemples

Définissez le paramètre sur `true`:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.openBookmarksInNewTabs.set({value: true}).
  then(logResult);
```

{{WebExtExamples}}
