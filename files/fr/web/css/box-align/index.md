---
title: box-align
slug: Web/CSS/box-align
---

{{CSSRef}}{{Non-standard_header}}

> **Attention :** Cette propriété s'inscrivait dans une ancienne version du standard pour le module CSS sur les boîtes flexibles et a été remplacée dans une nouvelle version du standard.

La propriété [CSS](/fr/docs/Web/CSS) **`box-align`** définit comment un élément aligne son contenu par rapport à l'axe orthogonal à la disposition. L'effet obtenu ne sera visible que s'il y a de l'espace supplémentaire dans la boîte flexible.

Voir la page [Flexbox](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) pour plus d'informations.

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

## Notes

Le bord de la boîte désigné par `start` pour l'alignement dépend de l'orientation de la boîte&nbsp;:

- Pour les éléments horizontaux, `start` correspond au bord haut.
- Pour les éléments verticaux, `start` correspond au bord gauche.

Le bord opposé au bord `start` est désigné par `end`.

Si l'alignement est défini grâce à l'attribut HTML `align`, le style est ignoré.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

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

{{EmbedLiveSample("","500","500")}}

## Spécifications

Cette propriété ne fait partie d'aucun standard

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`align-items`](/fr/docs/Web/CSS/align-items)
- [`box-orient`](/fr/docs/Web/CSS/box-orient)
- [`box-direction`](/fr/docs/Web/CSS/box-direction)
- [`box-pack`](/fr/docs/Web/CSS/box-pack)
