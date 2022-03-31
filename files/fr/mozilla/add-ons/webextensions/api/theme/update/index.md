---
title: update
slug: Mozilla/Add-ons/WebExtensions/API/theme/update
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Refernce
  - Theme
  - Update
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/theme/update
---
{{AddonSidebar()}}

Met à jour le thème du navigateur en fonction du contenu de l'objet {{WebExtAPIRef("theme.Theme", "Theme")}} donné.

## Syntaxe

```js
browser.theme.update(
  windowId,    // integer
  theme        // object
)
```

### Paramètres

- `windowId` {{optional_inline}}
  - : `integer`. L'ID d'une fenêtre. Si cela est prévu, le thème est appliqué uniquement à cette fenêtre. S'il est omis, le thème est appliqué à toutes les fenêtres.

<!---->

- `theme`
  - : `object`. Un objet {{WebExtAPIRef("theme.Theme", "Theme")}} spécifiant des valeurs pour les éléments de l'interface utilisateur que vous voulez modifier

## Compatibilité du navigateur

{{Compat("webextensions.api.theme.update", 10)}}

## Exemples

Définit le thème du navigateur pour utiliser un graphique solaire avec une couleur de fond complémentaire:

```js
const suntheme = {
 images: {
   headerURL: 'sun.jpg',
 },
 colors: {
   accentcolor: '#CF723F',
   textcolor: '#111',
 }
};

browser.theme.update(suntheme);
```

Définissez le thème uniquement pour la fenêtre actuellement ciblée:

```js
const day = {
    images: {
      headerURL: 'sun.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: '#111',
    }
};

browser.menus.create({
  id: "set-theme",
  title: "set theme",
  contexts: ["all"]
});

async function updateThemeForCurrentWindow() {
  let currentWindow = await browser.windows.getLastFocused();
  browser.theme.update(currentWindow.id, day);
}

browser.menus.onClicked.addListener(updateThemeForCurrentWindow);
```

{{WebExtExamples}}
