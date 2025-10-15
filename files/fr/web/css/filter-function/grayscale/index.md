---
title: grayscale()
slug: Web/CSS/filter-function/grayscale
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

La [fonction](/fr/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) [CSS](/fr/docs/Web/CSS) **`grayscale()`** convertit une image en niveaux de gris. Le résultat de cette fonction est une valeur {{cssxref("&lt;filter-function&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: grayscale()")}}

```css interactive-example-choice
filter: grayscale(0);
```

```css interactive-example-choice
filter: grayscale(0.2);
```

```css interactive-example-choice
filter: grayscale(60%);
```

```css interactive-example-choice
filter: grayscale(1);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

## Syntaxe

```css
grayscale(amount)
```

### Paramètres

- `amount` {{Optional_Inline}}
  - : La quantité de l'image d'entrée convertie en niveaux de gris. Elle s'exprime en nombre ({{cssxref("&lt;number&gt;")}}) ou en pourcentage ({{cssxref("&lt;percentage&gt;")}}). Une valeur de `100%` convertit l'image entièrement en niveaux de gris, tandis qu'une valeur de `0%` laisse l'image inchangée. Les valeurs comprises entre `0%` et `100%` appliquent un effet linéairement proportionnel. La valeur initiale utilisée pour {{Glossary("interpolation", "l'interpolation")}} est `0`. La valeur par défaut est `1`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemples de valeurs correctes pour `grayscale()`

```css
grayscale(0)     /* Aucun effet */
grayscale(.7)    /* 70% en niveaux de gris */

grayscale()      /* Complètement gris */
grayscale(1)
grayscale(100%)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

Les autres fonctions {{cssxref("&lt;filter-function&gt;")}} pouvant être utilisées dans les valeurs des propriétés {{cssxref("filter")}} et {{cssxref("backdrop-filter")}} sont&nbsp;:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
