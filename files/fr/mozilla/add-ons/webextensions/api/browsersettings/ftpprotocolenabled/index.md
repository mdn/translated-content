---
title: browserSettings.ftpProtocolEnabled
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/ftpProtocolEnabled
tags:
  - API
  - Add-ons
  - Extensions
  - Property
  - Reference
  - WebExtensions
  - browserSettings
  - contextMenuShowEvent
  - ftpProtocolEnabled
translation_of: Mozilla/Add-ons/WebExtensions/API/browserSettings/ftpProtocolEnabled
---
{{AddonSidebar()}}

Un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} qui détermine si le protocole FTP est activé dans le navigateur.

La valeur sous-jaccente est un booléen.

## Compatibilité du navigateur

{{Compat("webextensions.api.browserSettings.ftpProtocolEnabled")}}

## Exemples

Changer le réglage:

```js
function toggleAllowFtp() {

  function toggle(current) {
    console.log(`Valeur actuelle: ${current.value}`);
    browser.browserSettings.ftpProtocolEnabled.set({value: !current.value});
  }

  browser.browserSettings.ftpProtocolEnabled.get({}).then(toggle);
}

browser.browserAction.onClicked.addListener(() => {
  toggleAllowFtp();
});
```

{{WebExtExamples}}
