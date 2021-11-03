---
title: '-webkit-device-pixel-ratio'
slug: Web/CSS/@media/-webkit-device-pixel-ratio
tags:
  - CSS
  - Caractéristique média
  - Non-standard
  - Reference
translation_of: Web/CSS/@media/-webkit-device-pixel-ratio
---
{{CSSRef}}{{Non-standard_header}}

**`-webkit-device-pixel-ratio`** est une caractéristique média non-standard, alternative à la caractéristique média standard {{cssxref("@media/resolution","resolution")}}.

Sa valeur correspond au nombre de pixels physiques utilisés par l'appareil pour représenter [un pixel CSS (`px`)](/fr/docs/Web/CSS/length#unités_de_longueur_absolues). Bien que la valeur soit de type {{cssxref("&lt;number&gt;")}}, sans unité donc, l'unité implicite est [`dppx`](/fr/docs/Web/CSS/resolution#unités).

> **Attention :** Cette caractéristique est spécifique à WebKit. Tant que possible, on utilisera {{cssxref("@media/resolution","resolution")}}.

## Syntaxe

**`-webkit-device-pixel-ratio`** est une valleur décrivant un intervalle. On peut également utiliser **`-webkit-min-device-pixel-ratio`** et **`-webkit-max-device-pixel-ratio`** pour fixer un seuil minimum/maximum.

### Valeurs

- {{cssxref("&lt;number&gt;")}}
  - : Le nombre de pixels physiques pour chaque pixel ([`px`](/fr/docs/Web/CSS/length#unités_de_longueur_absolues)) CSS. Bien que la valeur soit un nombre et ne permette pas d'utiliser des unités, l'unité implicite est [`dppx`](/fr/docs/Web/CSS/resolution#dppx).

## Implémentation

```css
/* Unité dppx implicite */
@media (-webkit-min-device-pixel-ratio: 2) { ... }
/* équivalent à */
@media (min-resolution: 2dppx) { ... }

/* De même */
@media (-webkit-max-device-pixel-ratio: 2) { ... }
/* équivalent à */
@media (max-resolution: 2dppx) { ... }
```

## Exemples

### CSS

```css
/* Résolution exacte */
@media (-webkit-device-pixel-ratio: 1) {
  p {
    color: red;
  }
}

/* Résolution minimale */
@media (-webkit-min-device-pixel-ratio: 1.1) {
  p {
    font-size: 1.5em;
  }
}

/* Résolution maximale */
@media (-webkit-max-device-pixel-ratio: 3) {
  p {
    background: yellow;
  }
}
```

### HTML

```html
<p>Voici un test pour la densité de pixel de votre appareil.</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                                                                                                                                                                  | État                                        | Commentaires                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- | ------------------------------------- |
| {{SpecName('Compat', '#css-media-queries-webkit-device-pixel-ratio', '-webkit-device-pixel-ratio')}}                                                                                           | {{Spec2('Compat')}}                    | Définition initiale dans un standard. |
| [Safari CSS Reference 'media query extensions'.](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3) | Documentation non-officielle, non-standard. | Documentation initiale.               |

## Compatibilité des navigateurs

{{Compat("css.at-rules.media.-webkit-device-pixel-ratio")}}

## Voir aussi

- {{cssxref("@media/resolution","resolution")}}
- {{cssxref("-webkit-transition")}}
- {{cssxref("-webkit-transform-3d")}}
- {{cssxref("-webkit-transform-2d")}}
- {{cssxref("-webkit-animation")}}
- [Article du W3C pour éviter le préfixe](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/)
