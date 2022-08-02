---
title: browserSettings.newTabPosition
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/newTabPosition
translation_of: Mozilla/Add-ons/WebExtensions/API/browserSettings/newTabPosition
---
{{AddonSidebar()}}

Un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} qui peut être utilisé pour contrôler la position des onglets nouvellement ouverts par rapport aux onglets déjà ouverts.

La valeur sous-jacente est une chaîne qui peut prendre l'une des trois valeurs suivantes :

- "afterCurrent": ouvre tous les nouveaux onglets à côté de l'onglet actuel.
- "relatedAfterCurrent": La valeur par défaut. Ouvrez les nouveaux onglets à côté de l'onglet en cours s'ils sont liés à l'onglet en cours (par exemple, s'ils ont été ouverts via un lien dans l'onglet en cours). Sinon, ouvrez les nouveaux onglets à la fin de la bande d'onglets.
- "atEnd": ouvre tous les onglets à la fin de la bande d'onglets.

## Compatibilité du navigateur

{{Compat("webextensions.api.browserSettings.newTabPosition", 10)}}

## Exemples

Ce code définit la valeur à "afterCurrent" puis enregistre la nouvelle valeur :

```js
async function setAfterCurrent() {
  let result = await browser.browserSettings.newTabPosition.set({value: "afterCurrent"});
  console.log(`Result: ${result}`);
  let newValue = await browser.browserSettings.newTabPosition.get({});
  console.log(`New value: ${newValue.value}`);
}
```

{{WebExtExamples}}
