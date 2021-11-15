---
title: browserSettings.cacheEnabled
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/cacheEnabled
tags:
  - API
  - Add-ons
  - Extensions
  - Property
  - Reference
  - WebExtensions
  - browserSettings
  - cacheEnabled
translation_of: Mozilla/Add-ons/WebExtensions/API/browserSettings/cacheEnabled
---
{{AddonSidebar()}}

Un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} qui peut être utilisé pour activer ou désactiver globalement le cache du navigateur.

La valeur sous-jacente est un booléen.

## Compatibilité du navigateur

{{Compat("webextensions.api.browserSettings.cacheEnabled")}}

## Exemples

Obtenir une valeur actuelle de ce paramètre :

```js
function logResult(result) {
  console.log(`Current value: ${result.value}`);
  console.log(`Current level of control: ${result.levelOfControl}`);
}

browser.browserSettings.cacheEnabled.get({}).
  then(logResult);
```

Désactivation du cache du navigateur :

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.cacheEnabled.set({value: false}).
  then(logResult);
```

{{WebExtExamples}}
