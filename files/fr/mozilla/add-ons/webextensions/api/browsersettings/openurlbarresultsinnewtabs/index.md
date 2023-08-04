---
title: browserSettings.openUrlbarResultsInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openUrlbarResultsInNewTabs
---

{{AddonSidebar()}}

Un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} dont la valeur sous-jacente est un booléen.

Quand l'utilisateur facalise la barre d'adresse et commence à taper, le navigateur propose des suggestions de saisie semi-automatique : une liste déroulante de pages web basée sur l'entrée incomplète de l'utilisateur et son historique de navigation.

Si la valeur est `true`, alors lorsque l'utiliseur sélectionne l'un des éléments, l'élément est ouvert dans un nouvel onglet. Si la valeur est `false` (valeur par défaut) l'élément est ouvert dans l'onglet en cours.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Définit le paramètre à `true`:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.openUrlbarResultsInNewTabs
  .set({ value: true })
  .then(logResult);
```

{{WebExtExamples}}
