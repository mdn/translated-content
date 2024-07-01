---
title: color-gamut
slug: Web/CSS/@media/color-gamut
---

{{CSSRef}}

**`color-gamut`** est une caractéristique média dont la valeur décrit l'intervalle approximatif des couleurs qui sont prises en charge par l'agent utilisateur et l'appareil responsable de l'affichage.

## Syntaxe

La caractéristique `color-gamut` est définie avec un mot-clé parmi ceux de la liste ci-après.

- `srgb`
  - : L'appareil d'affichage prend approximativement en charge l'espace de couleurs [sRGB](https://en.wikipedia.org/wiki/SRGB) ou un espace plus grand. Cela correspond à la majorité des appareils d'affichage.
- `p3`
  - : L'appareil d'affichage prend approximativement en charge l'espace de couleurs spécifié par [l'espace de couleur DCI P3](https://en.wikipedia.org/wiki/DCI-P3) ou un espace plus grand; L'espace p3 est plus grand (et inclut) l'espace srgb.
- `rec2020`
  - : L'appareil d'affichage prend approximativement l'espace de couleurs spécifié par [l'espace de couleurs ITU-R Recommendation BT.2020](https://en.wikipedia.org/wiki/Rec._2020) ou un espace plus grand. L'espace rec2020 est plus grand (et inclut) l'espace p3.

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
