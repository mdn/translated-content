---
title: browserSettings.zoomSiteSpecific
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/zoomSiteSpecific
tags:
  - API
  - Add-ons
  - Extensions
  - Property
  - WebExtensions
  - browserSettings
  - zoomSiteSpecific
translation_of: Mozilla/Add-ons/WebExtensions/API/browserSettings/zoomSiteSpecific
---
{{AddonSidebar()}}

Un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} dont la valeur sous-jaccente est un booléen.

Cette propriété contrôle le [réglage de configuration](https://support.mozilla.org/fr/kb/editeur-configuration-firefox) `browser.zoom.siteSpecific`, qui règle comment le zoom est appliqué aux sites et onglets.

Si `browser.zoom.siteSpecific` est à vrai, les opérations de zoom s'appliquent à toutes les pages du même site selon les règles :

- quand une page charge, si il existe un niveau de zoom pour ce site alors il est appliqué par le navigateur sinon le niveau de zoom par défaut "global" est appliqué.
- quand le niveau de zoom change pour une page, le niveau des autres pages (dans d'autres onglets) de ce site sont mises à jour.

Si la préférence `browser.zoom.siteSpecific` est à faux, les opérations de zoom s'appliquent uniquement à l'onglet actif selon les règles :

- quand un nouvel onglet s'ouvre, le niveau de zoom par défaut "global" est appliqué.
- quand le niveau de zoom change dans un onglet, il sera appliqué durant toute la navigation dans cet onglet et n'affectera pas le niveau de zoom des autres onglets.

Lors de l'installation de Firefox, `browser.zoom.siteSpecific` est à vrai.

Si [`privacy.websites`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites)`.resistFingerprinting` est à vrai, ce réglage ne peut pas être changé et le niveau de zoom est appliqué sur le schéma par-onglet.

## Compatibilité du navigateur

{{Compat("webextensions.api.browserSettings.zoomSiteSpecific")}}

## Exemples

Mettre le réglage à `false`:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.zoomSiteSpecific.set({value: false}).
  then(logResult);
```

{{WebExtExamples}}
