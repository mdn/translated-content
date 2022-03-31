---
title: browserSettings.overrideDocumentColors
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideDocumentColors
tags:
  - API
  - Add-ons
  - Extensions
  - Property
  - Reference
  - WebExtensions
  - browserSettings
  - overrideDocumentColors
translation_of: Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideDocumentColors
---
{{AddonSidebar()}}

Un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} dont la valeur sous-jacente est une chaîne.

Firefox permet à l'utilisateur de définir ses propres couleurs pour les arrière-plans et le texte du document. Par défaut, ces valeurs ne sont appliquées que lorsqu'un thème à fort contraste est sélectionné (un thème à contraste élevé est une caractéristique de certaines interfaces utilisateur du système d'exploitation qui augmente le contraste pour une meilleure accessibilité). Cependant, les utilisateurs peuvent également choisir d'appliquer ces couleurs toujours ou jamais. Ce paramètre du navigateur expose cette préférence.

Sa valeur sous-jacente est une chaîne qui peut prendre l'une des valeurs suivantes:

- "high-contrast-only": applique les choix de l'utilisateur uniquement lorsqu'un thème à contraste élevé est sélectionné. C'est la valeur par défaut.
- "never":  n'applique jamais les choix de l'utilisateur
- "always": Toujours appliquer les choix de l'utilisateur.

## Compatibilité du navigateur

{{Compat("webextensions.api.browserSettings.openUrlbarResultsInNewTabs")}}

## Exemples

Définissez le paramètre sur "always":

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.overrideDocumentColors.set({value: "always"}).
  then(logResult);
```

{{WebExtExamples}}
