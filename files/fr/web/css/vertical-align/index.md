---
title: vertical-align
slug: Web/CSS/vertical-align
---

{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`vertical-align`** définit l'alignement vertical d'une boîte en ligne (<i lang="en">inline</i>), en ligne / bloc (<i lang="en">inline-block</i>) ou d'une boîte de cellule de tableau.

{{EmbedInteractiveExample("pages/css/vertical-align.html")}}

La propriété `vertical-align` peut être utilisée dans deux contextes&nbsp;:

- Afin d'aligner verticalement la boîte d'un élément en ligne à l'intérieur de la boîte en ligne de son conteneur (par exemple pour aligner verticalement une image ([`<img>`](/fr/docs/Web/HTML/Element/Img) sur une ligne de texte)
- ou pour aligner verticalement le contenu d'une cellule dans un tableau

`vertical-align` ne s'applique qu'aux cellules de tableaux, aux éléments en ligne (<i lang="en">inline</i>) ou en ligne / bloc (<i lang="en">inline-block</i>), elle ne peut pas être utilisée pour aligner verticalement [les éléments de bloc](/fr/docs/Web/HTML/Block-level_elements).

## Syntaxe

```css
/* Avec un mot-clé */
vertical-align: baseline;
vertical-align: sub;
vertical-align: super;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle;
vertical-align: top;
vertical-align: bottom;

/* Valeurs de longueur */
/* type <length> */
vertical-align: 10em;
vertical-align: 4px;

/* Valeurs en pourcentage */
/* type <percentage> */
vertical-align: 20%;

/* Valeurs globales */
vertical-align: inherit;
vertical-align: initial;
vertical-align: revert;
vertical-align: unset;
```

La propriété `vertical-align` s'utilise avec une des valeurs suivantes.

### Valeurs pour les éléments en lignes

#### Valeurs relatives au parent

Ces valeurs alignent l'élément verticalement, relativement à son élément parent.

- `baseline`
  - : Aligne la ligne de base de l'élément avec celle de son parent. La ligne de base de certains [éléments remplacés](/fr/docs/Web/CSS/Replaced_element), comme [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea), n'est pas définie par la spécification HTML et le comportement de ce mot-clé peut donc changer d'un navigateur à un autre.
- `sub`
  - : Aligne la ligne de base sur la ligne de base inférieure (celle utilisée pour les indices) de l'élément parent.
- `super`
  - : Aligne la ligne de base sur la ligne de base supérieure (celle utilisée pour les exposants) de l'élément parent.
- `text-top`
  - : Aligne le haut de l'élément avec le haut de la police de l'élément parent.
- `text-bottom`
  - : Aligne le bas de l'élément avec le bas de la police de l'élément parent.
- `middle`
  - : Aligne le milieu de l'élément avec la hauteur donnée par la ligne de base de l'élément parent à laquelle on ajoute la moitié de sa hauteur en x (<i lang="en">x-height</i>).
- [`<length>`](/fr/docs/Web/CSS/length)
  - : Aligne la ligne de base de l'élément à la hauteur de la ligne de base de l'élément parent à laquelle on ajoute la hauteur donnée. Les valeurs négatives sont autorisées.
- [`<percentage>`](/fr/docs/Web/CSS/percentage)
  - : Fonctionne comme avec les valeurs de type [`<length>`](/fr/docs/Web/CSS/length), le pourcentage indique une fraction de la propriété [`line-height`](/fr/docs/Web/CSS/line-height). Les valeurs négatives sont autorisées.

#### Valeurs relatives à la ligne

Les valeurs suivantes alignent l'élément par rapport à la ligne entière plutôt que par rapport à leur parent&nbsp;:

- `top`
  - : Aligne le haut de l'élément et de ses descendants avec le haut de la ligne entière.
- `bottom`
  - : Aligne le bas de l'élément et de ses descendants avec le bas de la ligne entière.

Pour les éléments qui n'ont pas de ligne de base définie, c'est le bord de la marge basse qui est utilisée.

### Pour les cellules de tableau

- `baseline`, `sub`, `super`, `text-top`, `text-bottom`, `<length>` et `<percentage>`
  - : La ligne de base de la cellule est alignée avec celle de toutes les autres cellules de la ligne courante qui sont alignées par rapport à la ligne de base.
- `top`
  - : Aligne le bord haut de la boîte de remplissage (<i lang="en">padding</i>) de la cellule avec le haut de la ligne.
- `middle`
  - : Centre la boîte de remplissage (<i lang="en">padding</i>) de la cellule avec la ligne.
- `bottom`
  - : Aligne le bord bas de la boîte de remplissage (<i lang="en">padding</i>) avec le bas de la ligne.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Exemple simple

#### HTML

```html
<div>
  Une <img src="frame_image.svg" alt="link" width="32" height="32" /> image avec
  un alignement par défaut.
</div>
<div>
  Une
  <img class="top" src="frame_image.svg" alt="link" width="32" height="32" />
  image avec un alignement en haut du texte.
</div>
<div>
  Une
  <img class="bottom" src="frame_image.svg" alt="link" width="32" height="32" />
  image avec un alignement en bas du texte.
</div>
<div>
  Une
  <img class="middle" src="frame_image.svg" alt="link" width="32" height="32" />
  image avec un alignement au milieu.
</div>
```

#### CSS

```css
img.top {
  vertical-align: text-top;
}
img.bottom {
  vertical-align: text-bottom;
}
img.middle {
  vertical-align: middle;
}
```

#### Résultat

{{EmbedLiveSample("")}}

### Alignement vertical sur une boîte de ligne

#### HTML

```html
<p>
  top: <img style="vertical-align: top" src="star.png" /> middle:
  <img style="vertical-align: middle" src="star.png" /> bottom:
  <img style="vertical-align: bottom" src="star.png" /> super:
  <img style="vertical-align: super" src="star.png" /> sub:
  <img style="vertical-align: sub" src="star.png" />
</p>

<p>
  text-top: <img style="vertical-align: text-top" src="star.png" /> text-bottom:
  <img style="vertical-align: text-bottom" src="star.png" /> 0.2em:
  <img style="vertical-align: 0.2em" src="star.png" /> -1em:
  <img style="vertical-align: -1em" src="star.png" /> 20%:
  <img style="vertical-align: 20%" src="star.png" /> -100%:
  <img style="vertical-align: -100%" src="star.png" />
</p>
```

```css hidden
#* {
  box-sizing: border-box;
}

img {
  margin-right: 0.5em;
}

p {
  height: 3em;
  padding: 0 0.5em;
  font-family: monospace;
  text-decoration: underline overline;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
```

#### Résultat

{{EmbedLiveSample("", '100%', 160)}}

### Alignement vertical d'une cellule de tableau

#### HTML

```html
<table>
  <tr>
    <td style="vertical-align: baseline">baseline</td>
    <td style="vertical-align: top">top</td>
    <td style="vertical-align: middle">middle</td>
    <td style="vertical-align: bottom">bottom</td>
    <td>
      <p>
        Elle voulait savoir si elle grandissait ou rapetissait, et fut tout
        étonnée de rester la même; franchement, c'est ce qui arrive le plus
        souvent lorsqu'on mange du gâteau; mais Alice avait tellement pris
        l'habitude de s'attendre à des choses extraordinaires, que cela lui
        paraissait ennuyeux et stupide de vivre comme tout le monde.
      </p>
      <p>
        Aussi elle se remit à l'œuvre, et eut bien vite fait disparaître le
        gâteau.
      </p>
    </td>
  </tr>
</table>
```

#### CSS

```css
table {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

table,
th,
td {
  border: 1px solid black;
}

td {
  padding: 0.5em;
  font-family: monospace;
}
```

#### Résultat

{{EmbedLiveSample("", '100%', 230)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Centrer des éléments avec Flexbox](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox#centrer_des_éléments)
- [`line-height`](/fr/docs/Web/CSS/line-height)
- [`text-align`](/fr/docs/Web/CSS/text-align)
- [`margin`](/fr/docs/Web/CSS/margin)
- [Comprendre `vertical-align` ou comment (ne pas) centrer des éléments verticalement (en anglais)](http://phrogz.net/css/vertical-align/index.html)
- [Tout ce qu'il y a à savoir sur `vertical-align` (en anglais)](https://christopheraue.net/design/vertical-align)
