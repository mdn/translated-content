---
title: browserSettings.homepageOverride
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/homepageOverride
---

{{AddonSidebar()}}

Un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} qui peut être utilisé pour obtenir une chaîne représentant l'URL actuellement définie comme page d'accueil du navigateur.

Notez qu'il s'agit d'un paramètre en lecture seule. Pour changer la page d'accueil, voir [chrome_settings_overrides](/fr/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides).

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Obtenez la valeur actuelle de l'URL de la page d'accueil :

```js
browser.browserSettings.homepageOverride.get({}).then((result) => {
  console.log(result.value);
});
```

{{WebExtExamples}}
