---
title: browserSettings.imageAnimationBehavior
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/imageAnimationBehavior
tags:
  - API
  - Add-ons
  - Extensions
  - Property
  - Reference
  - browserSettings
  - imageAnimationBehavior
translation_of: Mozilla/Add-ons/WebExtensions/API/browserSettings/imageAnimationBehavior
---
{{AddonSidebar()}}

Un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} qui peut être utilisé pour modifier la façon dont le navigateur traite les images animées, telles que les GIF.

La valeur sous-jacente est une chaîne qui peut prendre l'une des trois valeurs suivantes:

- "normal": la valeur par défaut Jouer des images animées comme d'habitude.
- "none": n'anime pas les images du tout.
- "once": joue une fois l'animation.

## Compatibilité du navigateur

{{Compat("webextensions.api.browserSettings.imageAnimationBehavior", 10)}}

## Exemples

Désactiver les images animées :

```js
  browser.browserSettings.imageAnimationBehavior.set({value: "none"});
```

{{WebExtExamples}}
