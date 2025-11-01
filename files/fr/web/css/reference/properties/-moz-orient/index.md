---
title: -moz-orient
slug: Web/CSS/Reference/Properties/-moz-orient
original_slug: Web/CSS/-moz-orient
---

{{Non-standard_header}}

La propriété **`-moz-orient`** définit l'orientation de l'élément sur lequel elle est appliquée.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
-moz-orient: inline;

/* Valeurs globales */
-moz-orient: inherit;
-moz-orient: initial;
-moz-orient: revert;
-moz-orient: revert-layer;
-moz-orient: unset;
```

### Valeurs

- `inline`
  - : L'élément est affiché dans la même direction que l'axe du texte : il est horizontal si le mode d'écriture est horizontal et vertical pour un mode d'écriture vertical.
- `block`
  - : L'élément est affiché dans la direction perpendiculaire à l'axe du texte : il est vertical si le mode d'écriture est horizontal et horizontal pour un mode d'écriture vertical.
- `horizontal`
  - : L'élément est affiché horizontalement.
- `vertical`
  - : L'élément est affiché verticalement.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`-moz-orient = inline | block | horizontal | vertical`)}}

## Exemples

### HTML

```html
<p>
  La barre de progression suivante est horizontale (le comportement par défaut)
  :
</p>
<progress max="100" value="75"></progress>

<p>La barre de progression suivante est verticale :</p>
<progress class="vert" max="100" value="75"></progress>
```

### CSS

```css
.vert {
  -moz-orient: vertical;
  width: 16px;
  height: 150px;
}
```

### Résultat

{{EmbedLiveSample("Exemples","200","360")}}

## Spécifications

Cette propriété ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("box-orient")}}
