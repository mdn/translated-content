---
title: box-align
slug: Web/CSS/box-align
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/box-align
---
{{CSSRef}}{{Non-standard_header}}{{warning("Cette propriété s'inscrivait dans une ancienne version du standard pour le module CSS sur les boîtes flexibles et a été remplacée dans une nouvelle version du standard.")}}

La propriété CSS **`box-align`** définit comment un élément aligne son contenu par rapport à l'axe orthogonal à la disposition. L'effet obtenu ne sera visible que s'il y a de l'espace supplémentaire dans la boîte flexible. Voir la page [Flexbox](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Utilisation_des_flexbox_en_CSS "CSS/Flexible_boxes") pour plus d'informations.

```css
/* Valeurs avec un mot-clé */
box-align: start;
box-align: center;
box-align: end;
box-align: baseline;
box-align: stretch;

/* Valeurs globales */
box-lines: inherit;
box-lines: initial;
box-lines: unset;
```

La direction de l'élément dépend de son orientation.

## Syntaxe

La propriété `box-align` est paramétrée grâce à l'un des mots-clés suivants.

### Valeurs

- `start`
  - : La boîte aligne son contenu au début (l'espace restant est alors situé à la fin).
- `center`
  - : La boîte aligne son contenu sur le centre (l'espace restant est équitablement réparti entre le début et la fin).
- `end`
  - : La boîte aligne son contenu au début (l'espace restant est alors situé au début).
- `baseline`
  - : La boîte aligne les lignes de base des contenus (le texte sera sur la même ligne). Cela ne s'applique que si l'orientation de la boîte est horizontale.
- `stretch`
  - : Les boîtes s'étirent afin qu'il n'y ait plus d'espace restant dans la boîte.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
div.exemple {
  display: box;
  display: -moz-box; /* Mozilla */
  display: -webkit-box; /* WebKit */

  /* La boîte est plus grande que ses
     éléments afin que box-pack ait
     un effet */
  height: 400px;

  /* La boîte est plus large que ses
     éléments afin que box-align ait
     un effet */
  width: 300px;

  /* Les éléments fils seront orientés
     verticalement */
  box-orient: vertical;
  -moz-box-orient: vertical; /* Mozilla */
  -webkit-box-orient: vertical; /* WebKit */

  /* On centre les éléments horizontalement */
  box-align: center;
  -moz-box-align: center; /* Mozilla */
  -webkit-box-align: center; /* WebKit */

  /* On les regroupe vers le bas */
  box-pack: end;
  -moz-box-pack: end; /* Mozilla */
  -webkit-box-pack: end; /* WebKit */
}

div.exemple > p {
  /* On réduit les éléments fils pour que
     box-align ait un impact. */
  width: 200px;
}
```

### HTML

```html
<div class="exemple">
  <p>Je serai deuxième en partant du bas, centré horizontalement.</p>
  <p>Je serai en bas de div.exemple, centré horizontalement.</p>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples","500","500")}}

## Notes

Le bord de la boîte qui est indiqué par `start` dépend de l'orientation de la boîte : si celle-ci est orientée horizontalement, ce sera le côté haut, si elle est orientée verticalement, ce sera le côté bas. Le côté désigné par `end` est le côté opposé à `start`.

Si l'alignement est défini via l'attribut HTML `align`, la déclaration sera alors ignorée.

## Spécifications

- [Brouillon de travail pour le module des boîtes flexibles (W3C)](http://www.w3.org/TR/css3-flexbox/) {{Note("L'état actuel de cette spécification ne reflète pas l'implémentation de Gecko ou WebKit.")}}
- [Ancienne version de la spécification](http://www.w3.org/TR/2009/WD-css3-flexbox-20090723/) {{Note("Les implémentations de WebKit et Gecko reflètent cette version de la spécification.")}}

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.box-align")}}

## Voir aussi

- {{cssxref("align-items")}},
- {{cssxref("box-orient")}},
- {{cssxref("box-direction")}},
- {{cssxref("box-pack")}}.
