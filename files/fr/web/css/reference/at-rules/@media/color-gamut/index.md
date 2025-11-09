---
title: color-gamut
slug: Web/CSS/Reference/At-rules/@media/color-gamut
original_slug: Web/CSS/@media/color-gamut
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`color-gamut`** est utilisée pour appliquer des styles CSS en fonction de l'intervalle approximatif des couleurs {{glossary("gamut")}} pris en charge par l'agent utilisateur et l'appareil de sortie.

## Syntaxe

La caractéristique `color-gamut` se définit avec l'une des valeurs-mots-clés suivantes, correspondant à des {{glossary("color space", "espaces colorimétriques")}}&nbsp;:

- `srgb`
- : L'agent utilisateur et le périphérique de sortie peuvent prendre en charge un gamut d'environ [sRGB](/fr/docs/Glossary/Color_space#srgb) ou plus. Cela inclut la grande majorité des affichages couleur.
- `p3`
- : L'agent utilisateur et le périphérique de sortie peuvent prendre en charge un gamut d'environ [Display P3 <sup>(angl.)</sup>](https://www.color.org/chardata/rgb/DisplayP3.xalter) ou plus. Le gamut P3 est plus large et inclut le gamut sRGB.
- `rec2020`
- : L'agent utilisateur et le périphérique de sortie peuvent prendre en charge un gamut d'environ [ITU-R Recommendation BT.2020](https://fr.wikipedia.org/wiki/Rec._2020) ou plus. Le gamut REC. 2020 est plus large et inclut le gamut P3.

## Exemples

### HTML

```html
<p>Un test simple.</p>
```

### CSS

```css
@media (color-gamut: srgb) {
  p {
    background: #f4ae8a;
  }
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction [`color()`](/fr/docs/Web/CSS/Reference/Values/color_value/color) pour définir des couleurs dans un espace colorimétrique donné.
- Le module des [couleurs CSS](/fr/docs/Web/CSS/Guides/Colors)
- La règle {{cssxref("@media")}} utilisée pour spécifier l'expression `color-gamut`.
- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using) pour comprendre quand et comment utiliser une requête média.
- Le module des [requêtes média CSS](/fr/docs/Web/CSS/Guides/Media_queries)
- [sRGB](https://fr.wikipedia.org/wiki/SRGB) sur Wikipedia
