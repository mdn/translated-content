---
title: opacity()
slug: Web/CSS/Reference/Values/filter-function/opacity
original_slug: Web/CSS/filter-function/opacity
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`opacity()`** permet de modifier la transparence de l'image. Le résultat de cette fonction est une valeur {{CSSxRef("&lt;filter-function&gt;")}}.

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
> Cette fonction est proche de la propriété {{CSSxRef("opacity")}} mais, selon le navigateur, les filtres CSS peuvent bénéficier de l'accélération matérielle pour de meilleures performances.

## Syntaxe

```css
opacity(amount)
```

### Paramètres

- `amount` {{Optional_Inline}}
  - : Niveau de transparence, exprimé en nombre ({{CSSxRef("&lt;number&gt;")}}) ou en pourcentage ({{CSSxRef("&lt;percentage&gt;")}}). Une valeur de `0%` rend l'image complètement transparente, tandis qu'une valeur de `100%` laisse l'image inchangée. Les valeurs comprises entre `0%` et `100%` appliquent un effet proportionnel. La valeur initiale utilisée pour {{Glossary("interpolation", "l'interpolation")}} est `1`. La valeur par défaut est `1`.

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

- Les autres fonctions {{CSSxRef("&lt;filter-function&gt;")}} pouvant être utilisées dans les valeurs des propriétés {{CSSxRef("filter")}} et {{CSSxRef("backdrop-filter")}} sont&nbsp;:
  - {{CSSxRef("filter-function/blur", "blur()")}}
  - {{CSSxRef("filter-function/brightness", "brightness()")}}
  - {{CSSxRef("filter-function/contrast", "contrast()")}}
  - {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - {{CSSxRef("filter-function/invert", "invert()")}}
  - {{CSSxRef("filter-function/saturate", "saturate()")}}
  - {{CSSxRef("filter-function/sepia", "sepia()")}}
- La propriété CSS {{CSSxRef("opacity")}}
