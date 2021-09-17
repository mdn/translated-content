---
title: '-moz-orient'
slug: Web/CSS/-moz-orient
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-moz-orient
---
{{CSSRef}}{{Non-standard_header}}

La propriété **`-moz-orient`** définit l'orientation de l'élément sur lequel elle est appliquée.

## Syntaxe

La propriété `moz-orient` est définie avec un mot-clé parmi ceux de la liste ci-après.

### Valeurs

- `inline`
  - : L'élément est affiché dans la même direction que l'axe du texte : il est horizontal si le mode d'écriture est horizontal et vertical pour un mode d'écriture vertical.
- `block`
  - : L'élément est affiché dans la direction perpendiculaire à l'axe du texte : il est vertical si le mode d'écriture est horizontal et horizontal pour un mode d'écriture vertical.
- `horizontal`
  - : L'élément est affiché horizontalement.
- `vertical`
  - : L'élément est affiché verticalement.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<p>
  La barre de progression suivante est
  horizontale (le comportement par défaut) :
</p>
<progress max="100" value="75"></progress>

<p>
  La barre de progression suivante
  est verticale :
</p>
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

Bien que [proposée](https://lists.w3.org/Archives/Public/www-style/2014Jun/0396.html) au W3C, cette propriété ne fait partie d'aucune spécification standard. C'est donc une propriété propriétaire liée à Mozilla/Gecko.

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.-moz-orient")}}

## Voir aussi

- {{cssxref("box-orient")}}
