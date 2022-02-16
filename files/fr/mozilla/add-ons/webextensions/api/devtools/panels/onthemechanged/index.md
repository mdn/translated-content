---
title: devtools.panels.onThemeChanged
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/onThemeChanged
tags:
  - API
  - Add-ons
  - DevTools
  - Reference
  - WebExtensions
  - devtools.panels
  - onThemeChanged
translation_of: Mozilla/Add-ons/WebExtensions/API/devtools.panels/onThemeChanged
original_slug: Mozilla/Add-ons/WebExtensions/API/devtools.panels/onThemeChanged
---
{{AddonSidebar()}}

Remplacement quand le thème de devtools change

## Syntaxe

```js
browser.devtools.panels.onThemeChanged.addListener(listener)
browser.devtools.panels.onThemeChanged.removeListener(listener)
browser.devtools.panels.onThemeChanged.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un auditeur à cet événement
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument de l'auditeur est l'auditeur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si l'auditeur est enregistré pour cet événement. Renvoie Vrai si elle écoute, sinon Faux.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Function qui sera appelée lors de l'événement. La fonction passera les arguments suivants :

    - `themeName`
      - : `string`. Nom du nouveau thème : ce sera l'une des valeurs autorisées pour  [`devtools.panels.themeName`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/devtools.panels/themeName).

## Compatibilité du navigateur

{{Compat("webextensions.api.devtools.panels.onThemeChanged")}}

## Exemples

```js
browser.devtools.panels.onThemeChanged.addListener((newThemeName) => {
  console.log(`New theme: ${newThemeName}`);
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.devtools.panels`](https://developer.chrome.com/extensions/devtools_panels).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
