---
title: sepia()
slug: Web/CSS/Reference/Values/filter-function/sepia
original_slug: Web/CSS/filter-function/sepia
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`sepia()`** convertit une image en sépia, lui donnant un aspect plus jaune/marron, voire vielli. Le résultat de cette fonction est une valeur {{CSSxRef("&lt;filter-function&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: sepia()")}}

```css interactive-example-choice
filter: sepia(0);
```

```css interactive-example-choice
filter: sepia(0.2);
```

```css interactive-example-choice
filter: sepia(60%);
```

```css interactive-example-choice
filter: sepia(1);
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
sepia(amount)
```

### Paramètres

- `amount` {{Optional_Inline}}
  - : Niveau de conversion, exprimé en nombre ({{CSSxRef("&lt;number&gt;")}}) ou en pourcentage ({{CSSxRef("&lt;percentage&gt;")}}). Une valeur de `100%` applique un effet sépia complet, tandis qu'une valeur de `0%` laisse l'image inchangée. Les valeurs comprises entre `0%` et `100%` appliquent un effet proportionnel. La valeur initiale utilisée pour {{Glossary("interpolation", "l'interpolation")}} est `0`. La valeur par défaut est `1`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemples de valeurs correctes pour sepia()

```css
sepia(0);    /* Aucun effet */
sepia(.65);  /* 65% de sépia */

sepia()      /* Complètement sépia */
sepia(100%);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

Les autres fonctions {{CSSxRef("&lt;filter-function&gt;")}} pouvant être utilisées dans les valeurs des propriétés {{CSSxRef("filter")}} et {{CSSxRef("backdrop-filter")}} sont&nbsp;:

- {{CSSxRef("filter-function/blur", "blur()")}}
- {{CSSxRef("filter-function/brightness", "brightness()")}}
- {{CSSxRef("filter-function/contrast", "contrast()")}}
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
- {{CSSxRef("filter-function/invert", "invert()")}}
- {{CSSxRef("filter-function/opacity", "opacity()")}}
- {{CSSxRef("filter-function/saturate", "saturate()")}}
