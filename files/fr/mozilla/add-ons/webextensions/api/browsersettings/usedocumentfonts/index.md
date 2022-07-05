---
title: browserSettings.useDocumentFonts
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/useDocumentFonts
tags:
  - API
  - Add-ons
  - Extensions
  - Property
  - Reference
  - WebExtensions
  - browserSettings
  - useDocumentFonts
translation_of: Mozilla/Add-ons/WebExtensions/API/browserSettings/useDocumentFonts
---
{{AddonSidebar()}}

Un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} dont la valeur sous-jacente est un booléen.

Par défaut, bien sûr, les pages Web peuvent spécifier les polices qu'ils veulent utiliser les propriétés CSS comme [`font-family`](/fr/docs/Web/CSS/font-family). Ce paramètre permet à une extension d'indiquer à Firefox d'ignorer les polices spécifiées par la page et d'utiliser uniquement les polices système.

Sa valeur sous-jacente est un booléen :

- `true`: utilise les polices spécifiées par la page Web. C'est la valeur par défaut.
- `false`:  utilise les polices du système.

## Compatibilité du navigateur

{{Compat("webextensions.api.browserSettings.useDocumentFonts")}}

## Exemples

Définissez le paramètre sur `false`:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.useDocumentFonts.set({value: false}).
  then(logResult);
```

{{WebExtExamples}}
