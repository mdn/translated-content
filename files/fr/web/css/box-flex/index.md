---
title: box-flex
slug: Web/CSS/box-flex
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/box-flex
---
{{CSSRef}}{{Non-standard_header}}

> **Attention :** Cette propriété est utilisée pour contrôler certaines parties du modèle de boîtes XUL. Elle ne correspond ni à l'ancienne version de la spécification pour `box-flex` ni au comportement de `-webkit-box-flex`. Voir la page [Flexbox](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) pour plus d'informations sur ce qui doit être utilisé à la place.

Les propriétés **`-moz-box-flex`** et **`-webkit-box-flex`** définissent la façon dont une boîte `-moz-box` ou `-webkit-box` s'étend pour remplir la boîte englobante, dans la direction indiquée par la disposition de la boîte. Pour plus de détails, se référer à la page [Flexbox](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) qui décrit les différentes propriétés des boîtes flexibles.

```css
/* Valeurs numériques */
/* Type <number>      */
-moz-box-flex: 0;
-moz-box-flex: 2;
-moz-box-flex: 3.5;
-webkit-box-flex: 0;
-webkit-box-flex: 2;
-webkit-box-flex: 3.5;

/* Valeurs globales */
-moz-box-flex: inherit;
-moz-box-flex: initial;
-moz-box-flex: unset;
-webkit-box-flex: inherit;
-webkit-box-flex: initial;
-webkit-box-flex: unset;
```

## Syntaxe

### Valeurs

- `<number>`
  - : Une valeur de type {{cssxref("&lt;number&gt;")}}. Si la valeur vaut 0, la boîte ne s'étend pas. Si elle est supérieure à 0, la boîte s'étendra sur l'espace disponible de façon proportionnelle.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
div.exemple {
  display: -moz-box;
  display: -webkit-box;
  border: 1px solid black;
  width: 100%;
}

div.exemple > p:nth-child(1) {
  -moz-box-flex: 1; /* Mozilla */
  -webkit-box-flex: 1; /* WebKit */
  border: 1px solid black;
}

div.exemple > p:nth-child(2) {
  -moz-box-flex: 0; /* Mozilla */
  -webkit-box-flex: 0; /* WebKit */
  border: 1px solid black;
}
```

### HTML

```html
<div class="exemple">
  <p>Je m'étends sur l'espace.</p>
  <p>Je ne me dilate pas.</p>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples","200","200")}}

## Notes

La boîte englobante distribue l'espace supplémentaire en fonction de la valeur de `flex` de chaque élément. Les éléments pour lesquels ce coefficient est nul ne s'agrandiront pas. Si un seul élément possède un coefficient non nul, celui-ci occupera l'espace supplémentaires.

Les éléments qui possèdent le même coefficient grandiront de la même façon.

Si la valeur de cette propriété est définie via l'attribut XUL `flex`, la déclaration est ignorée. Afin que les éléments XUL d'une même boîte aient la même taille, on utilisera l'attribut `equalsize` avec la valeur `always`. Il n'existe pas de propriété CSS correspondante.

## Spécifications

Cette propriété n'est pas une propriété standard. [Une ancienne version de la spécification CSS3 pour les boîtes flexibles](https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/) définissait une propriété `box-flex` mais ce brouillon a depuis été remplacé.

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.box-flex")}}

## Voir aussi

- {{cssxref("box-orient")}},
- {{cssxref("box-pack")}},
- {{cssxref("box-direction")}},
- {{cssxref("flex")}}.
