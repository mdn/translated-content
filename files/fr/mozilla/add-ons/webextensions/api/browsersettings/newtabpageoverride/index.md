---
title: browserSettings.newTabPageOverride
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/newTabPageOverride
---

{{AddonSidebar()}}

Un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} qui peut être utilisé pour obtenir une chaîne représentant l'URL de la page "nouvel onglet": c'est-à-dire, la page chargée lorsque l'utilisateur ouvre une nouvelle onglet vide.

Notez qu'il s'agit d'un paramètre en lecture seule.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Obtenir la valeur actuelle de la nouvelle URL de l'onglet :

```js
browser.browserSettings.newTabPageOverride.get({}).then((result) => {
  console.log(result.value);
});
```

{{WebExtExamples}}
