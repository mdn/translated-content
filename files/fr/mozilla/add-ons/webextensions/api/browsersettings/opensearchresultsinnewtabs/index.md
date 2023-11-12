---
title: browserSettings.openSearchResultsInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs
---

{{AddonSidebar()}}

Un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} dont la valeur sous-jacente est un booléen.

Si la valeur est définie à `true`, lorsque l'utilisateur sélectionne un terme dans la zone de recherche du navigateur, les résultats de la recherche s'affichent dans un nouvel onglet. Si la valeur est `false` (valeur par défaut), les résultats de la recherche apparaissent dans l'onglet en cours.

Notez que cela n'affecte pas le comportement lors de la sélection des éléments de omnibox/awesomebar, uniquement la zone de recherche dédiée..

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Définissez le paramètre sur `true`:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.openSearchResultsInNewTabs
  .set({ value: true })
  .then(logResult);
```

{{WebExtExamples}}
