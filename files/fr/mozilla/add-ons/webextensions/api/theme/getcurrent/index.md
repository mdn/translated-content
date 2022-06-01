---
title: theme.getCurrent()
slug: Mozilla/Add-ons/WebExtensions/API/theme/getCurrent
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - Theme
  - WebExtensions
  - getCurrent
translation_of: Mozilla/Add-ons/WebExtensions/API/theme/getCurrent
---
{{AddonSidebar()}}

Retourne le theme utilisé actuellement sous la forme d'un objet {{WebExtAPIRef("theme.Theme", "Theme")}}. Les arguments disponible dans l'objet couleur sont listés dans les [propriétés de la couleur](/fr/Add-ons/WebExtensions/manifest.json/theme#colors).

Il s'agit d'une fonction asynchrone qui renvoie un objet [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var getting = browser.theme.getCurrent(
  windowId    // integer
)
```

### Paramètres

- `windowId` {{optional_inline}}
  - : `integer`. L'ID d'une fenêtre. Si cela est indiqué, le thème appliqué sur cette fenêtre sera retourné. Sinon le thème appliqué sur la dernière fenêtre active sera retourné.

### Valeur retournée

Un objet [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise). L'objet Promise sera résolu avec un objet {{WebExtAPIRef("theme.Theme")}} représentant le thème appliqué à la fenêtre spécifiée. Si aucun thème provenant d'une extension a été appliqué, l'objet Promise sera résolu avec un objet vide.

## Compatibilité du navigateur

{{Compat("webextensions.api.theme.getCurrent", 10)}}

## Exemples

Obtient les propriétés des couleurs `accentcolor` et `toolbar` dans le thème actuel.

```js
function getStyle(themeInfo)
{
  if (themeInfo.colors)
  {
    console.log("accent color : " +  themeInfo.colors.accentcolor);
    console.log("toolbar : " + themeInfo.colors.toolbar);
  }
}

async function getCurrentThemeInfo()
{
  var themeInfo = await browser.theme.getCurrent();
  getStyle(themeInfo);
}

getCurrentThemeInfo();
```

{{WebExtExamples}}
