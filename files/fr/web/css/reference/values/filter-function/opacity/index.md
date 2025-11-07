---
title: opacity()
slug: Web/CSS/Reference/Values/filter-function/opacity
original_slug: Web/CSS/filter-function/opacity
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

La [fonction](/fr/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) [CSS](/fr/docs/Web/CSS) **`opacity()`** permet de modifier la transparence de l'image. Le résultat de cette fonction est une valeur {{cssxref("&lt;filter-function&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: opacity()")}}

```css interactive-example-choice
filter: opacity(1);
```

```css interactive-example-choice
filter: opacity(80%);
```

```css interactive-example-choice
filter: opacity(50%);
```

```css interactive-example-choice
filter: opacity(0.2);
```

```css interactive-example-choice
filter: opacity(0);
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

> [!NOTE]
> Cette fonction est proche de la propriété {{Cssxref("opacity")}} mais, selon le navigateur, les filtres CSS peuvent bénéficier de l'accélération matérielle pour de meilleures performances.

## Syntaxe

```css
opacity(amount)
```

### Paramètres

- `amount` {{Optional_Inline}}
  - : Niveau de transparence, exprimé en nombre ({{cssxref("&lt;number&gt;")}}) ou en pourcentage ({{cssxref("&lt;percentage&gt;")}}). Une valeur de `0%` rend l'image complètement transparente, tandis qu'une valeur de `100%` laisse l'image inchangée. Les valeurs comprises entre `0%` et `100%` appliquent un effet proportionnel. La valeur initiale utilisée pour {{Glossary("interpolation", "l'interpolation")}} est `1`. La valeur par défaut est `1`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemples de valeurs correctes pour `opacity()`

```css
opacity(0%)   /* Complètement transparente */
opacity(50%)  /* TTransparent à 50% */

opacity()     /* Aucun effet */
opacity(1)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres fonctions {{cssxref("&lt;filter-function&gt;")}} pouvant être utilisées dans les valeurs des propriétés {{cssxref("filter")}} et {{cssxref("backdrop-filter")}} sont&nbsp;:
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
- La propriété CSS {{cssxref("opacity")}}
