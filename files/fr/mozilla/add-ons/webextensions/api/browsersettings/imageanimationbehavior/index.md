---
title: browserSettings.imageAnimationBehavior
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/imageAnimationBehavior
---

{{AddonSidebar()}}

Un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} qui peut être utilisé pour modifier la façon dont le navigateur traite les images animées, telles que les GIF.

La valeur sous-jacente est une chaîne qui peut prendre l'une des trois valeurs suivantes:

- "normal": la valeur par défaut Jouer des images animées comme d'habitude.
- "none": n'anime pas les images du tout.
- "once": joue une fois l'animation.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Désactiver les images animées :

```js
browser.browserSettings.imageAnimationBehavior.set({ value: "none" });
```

{{WebExtExamples}}
