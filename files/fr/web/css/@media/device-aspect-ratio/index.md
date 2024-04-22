---
title: device-aspect-ratio
slug: Web/CSS/@media/device-aspect-ratio
---

{{CSSRef}}{{deprecated_header}}

**`device-aspect-ratio`** est une caractéristique média (cf. {{cssxref("@media")}}) dont la valeur correspond au ratio entre la largeur et la hauteur de l'appareil d'affichage.

## Syntaxe

La caractéristique `device-aspect-ratio` est définie sous la forme d'un ratio (type CSS {{cssxref("&lt;ratio&gt;")}}). C'est une caractéristique d'intervalle ce qui signifie qu'on peut utiliser les variantes préfixées **`min-device-aspect-ratio`** et **`max-device-aspect-ratio`** afin de cibler des règles en fonction de minimum ou maximum.

## Exemples

```css
article {
  padding: 1rem;
}

@media screen and (min-device-aspect-ratio: 16/9) {
  article {
    padding: 1rem 5vw;
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
