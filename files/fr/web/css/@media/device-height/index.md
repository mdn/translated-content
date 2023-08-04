---
title: device-height
slug: Web/CSS/@media/device-height
---

{{CSSRef}}{{deprecated_header}}

**`device-height`** est une caractéristique média (cf. {{cssxref("@media")}}) dépréciée dont la valeur correspond à la hauteur de la surface de rendu pour l'appareil d'affichage.

## Syntaxe

La caractéristique `device-height` est définie comme une longueur (type {{cssxref("&lt;length&gt;")}}). C'est une caractéristique d'intervalle ce qui signifie qu'on peut utiliser les variantes préfixées **`min-device-height`** et **`max-device-height`** afin d'utiliser des critères de minimum et maximum.

## Exemples

Ce fragment HTML applique une feuille de style spécifique pour les appareils dont la hauteur est inférieure à 800 pixels.

```html
<link
  rel="stylesheet"
  media="screen and (max-device-height: 799px)"
  href="http://toto.truc.com/short-styles.css" />
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
