---
title: contextMenuShowEvent
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent
---

{{AddonSidebar()}}

Un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} qui détermine si le menu contextuel du navigateur est affiché sur l'événement mouseup ou sur l'événement mousedown.

Sa valeur sous-jacente est une chaîne qui peut être "mouseup" ou "mousedown".

La valeur par défaut est "mouseup" sur Windows, et "mousedown" sur macOS et Linux. 'affectation à Windows n'a aucun effet - le paramètre est uniquement conçu pour permettre l'ouverture du menu contextuel sur mouseup au lieu de mousedown, pas l'inverse.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Réglez le paramètre sur "mouseup":

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.contextMenuShowEvent
  .set({ value: "mouseup" })
  .then(logResult);
```

{{WebExtExamples}}
