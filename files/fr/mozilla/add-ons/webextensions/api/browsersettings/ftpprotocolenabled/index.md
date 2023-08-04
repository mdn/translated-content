---
title: browserSettings.ftpProtocolEnabled
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/ftpProtocolEnabled
---

{{AddonSidebar()}}

Un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} qui détermine si le protocole FTP est activé dans le navigateur.

La valeur sous-jaccente est un booléen.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Changer le réglage:

```js
function toggleAllowFtp() {
  function toggle(current) {
    console.log(`Valeur actuelle: ${current.value}`);
    browser.browserSettings.ftpProtocolEnabled.set({ value: !current.value });
  }

  browser.browserSettings.ftpProtocolEnabled.get({}).then(toggle);
}

browser.browserAction.onClicked.addListener(() => {
  toggleAllowFtp();
});
```

{{WebExtExamples}}
