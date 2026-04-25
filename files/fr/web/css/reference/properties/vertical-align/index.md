---
title: Propriété CSS `vertical-align`
short-title: vertical-align
slug: Web/CSS/Reference/Properties/vertical-align
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`vertical-align`** définit l'alignement vertical d'une boîte en ligne (<i lang="en">inline</i> en anglais), en ligne et bloc (<i lang="en">inline-block</i> en anglais) ou d'une boîte de cellule de tableau.

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("alignment-baseline")}}
- {{CSSxRef("baseline-source")}}
- {{CSSxRef("baseline-shift")}}

{{InteractiveExample("Démonstration CSS&nbsp;: vertical-align")}}

```css interactive-example-choice
vertical-align: baseline;
```

```css interactive-example-choice
vertical-align: top;
```

```css interactive-example-choice
vertical-align: middle;
```

```css interactive-example-choice
vertical-align: bottom;
```

```css interactive-example-choice
vertical-align: sub;
```

```css interactive-example-choice
vertical-align: text-top;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p>
    Alignez l'étoile&nbsp;:
    <img id="example-element" src="/shared-assets/images/examples/star2.png" />
  </p>
</section>
```

```css interactive-example
#default-example > p {
  line-height: 3em;
  font-family: monospace;
  font-size: 1.2em;
  text-decoration: underline overline;
}
```

La propriété `vertical-align` peut être utilisée dans deux contextes&nbsp;:

- Pour aligner verticalement la boîte d'un élément en ligne à l'intérieur de la boîte en ligne de son conteneur. Par exemple, elle peut être utilisée pour [positionner verticalement une image dans une ligne de texte](#alignement_vertical_sur_une_boîte_de_ligne).
- Pour aligner verticalement [le contenu d'une cellule dans un tableau](#alignement_vertical_dune_cellule_de_tableau).

Utilisez cette syntaxe raccourcie (`vertical-align`) à la place des propriétés correspondantes en forme longue, sauf si vous avez besoin de les appliquer en cascade de manière indépendante ou (sur les éléments SVG) pour assurer la compatibilité avec les anciennes implémentations SVG.

Notez que `vertical-align` ne s'applique qu'aux éléments en ligne, en ligne-bloc et aux cellules de tableau&nbsp;: vous ne pouvez pas l'utiliser pour aligner verticalement des [éléments de niveau bloc](/fr/docs/Glossary/Block-level_content).

## Syntaxe

```css
/* Valeurs avec un mot-clé */
vertical-align: baseline;
vertical-align: sub;
vertical-align: super;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle;
vertical-align: top;
vertical-align: bottom;

/* Valeurs de type <length> */
vertical-align: 10em;
vertical-align: 4px;

/* Valeurs de type <percentage> */
vertical-align: 20%;

/* Valeurs globales */
vertical-align: inherit;
vertical-align: initial;
vertical-align: revert;
vertical-align: revert-layer;
vertical-align: unset;
```

La propriété `vertical-align` s'utilise avec une des valeurs suivantes.

### Valeurs pour les éléments en lignes

#### Valeurs relatives au parent

Ces valeurs alignent l'élément verticalement, relativement à son élément parent&nbsp;:

- `baseline`
  - : Aligne la ligne de base de l'élément avec celle de son parent. La ligne de base de certains {{Glossary("replaced elements", "éléments remplacés")}}, comme {{HTMLElement("textarea")}}, n'est pas définie par la spécification HTML et le comportement de ce mot-clé peut donc changer d'un navigateur à un autre.
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
- {{CSSxRef("&lt;length&gt;")}}
  - : Aligne la ligne de base de l'élément à la hauteur de la ligne de base de l'élément parent à laquelle on ajoute la hauteur donnée. Les valeurs négatives sont autorisées.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Aligne la ligne de base de l'élément à un pourcentage donné au-dessus de la ligne de base de son parent, la valeur étant un pourcentage de la propriété {{CSSxRef("line-height")}}. Une valeur négative est autorisée.

#### Valeurs relatives à la ligne

Les valeurs suivantes alignent l'élément par rapport à la ligne entière plutôt que par rapport à leur parent&nbsp;:

- `top`
  - : Aligne le haut de l'élément et de ses descendants avec le haut de la ligne entière.
- `bottom`
  - : Aligne le bas de l'élément et de ses descendants avec le bas de la ligne entière.

Pour les éléments qui n'ont pas de ligne de base définie, c'est le bord de la marge basse qui est utilisée.

### Valeurs pour les cellules de tableau

- `baseline` (et `sub`, `super`, `text-top`, `text-bottom`, `<length>`, et `<percentage>`)
  - : La ligne de base de la cellule est alignée avec celle de toutes les autres cellules de la ligne courante qui sont alignées par rapport à la ligne de base.
- `top`
  - : Aligne le bord haut de la boîte de remplissage (<i lang="en">padding</i> en anglais) de la cellule avec le haut de la ligne.
- `middle`
  - : Centre la boîte de remplissage de la cellule avec la ligne.
- `bottom`
  - : Aligne le bord bas de la boîte de remplissage avec le bas de la ligne.

Les valeurs négatives sont autorisées.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

#### HTML

```html
<div>
  Une <img src="frame_image.svg" alt="link" width="32" height="32" />
  image avec un alignement par défaut.
</div>
<div>
  Une
  <img class="haut" src="frame_image.svg" alt="link" width="32" height="32" />
  image avec un alignement en haut du texte.
</div>
<div>
  Une
  <img class="bas" src="frame_image.svg" alt="link" width="32" height="32" />
  image avec un alignement en bas du texte.
</div>
<div>
  Une
  <img class="milieu" src="frame_image.svg" alt="link" width="32" height="32" />
  image avec un alignement au milieu.
</div>
```

#### CSS

```css
img.haut {
  vertical-align: text-top;
}
img.bas {
  vertical-align: text-bottom;
}
img.milieu {
  vertical-align: middle;
}
```

#### Résultat

{{EmbedLiveSample("Exemple simple")}}

### Alignement vertical sur une boîte de ligne

#### HTML

```html-nolint
<p>
top:         <img style="vertical-align: top" src="star.png" alt="étoile"/>
middle:      <img style="vertical-align: middle" src="star.png" alt="étoile"/>
bottom:      <img style="vertical-align: bottom" src="star.png" alt="étoile"/>
super:       <img style="vertical-align: super" src="star.png" alt="étoile"/>
sub:         <img style="vertical-align: sub" src="star.png" alt="étoile"/>
</p>

<p>
text-top:    <img style="vertical-align: text-top" src="star.png" alt="étoile"/>
text-bottom: <img style="vertical-align: text-bottom" src="star.png" alt="étoile"/>
0.2em:       <img style="vertical-align: 0.2em" src="star.png" alt="étoile"/>
-1em:        <img style="vertical-align: -1em" src="star.png" alt="étoile"/>
20%:         <img style="vertical-align: 20%" src="star.png" alt="étoile"/>
-100%:       <img style="vertical-align: -100%" src="star.png" alt="étoile"/>
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

{{EmbedLiveSample("Alignement vertical sur une boîte de ligne", "100%", 160)}}

### Alignement vertical d'une cellule de tableau

Dans cet exemple, nous avons un tableau avec une seule ligne contenant six cellules. La ligne définit `vertical-align` sur `bottom` comme valeur par défaut.

- Les quatre premières cellules définissent chacune leurs propres valeurs de `vertical-align`, qui remplacent la valeur de la ligne.
- La cinquième cellule ne définit aucune valeur de `vertical-align`, elle hérite donc de la valeur de la ligne.

La sixième cellule est uniquement utilisée pour s'assurer que les cellules sont suffisamment hautes pour voir l'effet.

#### HTML

```html
<table>
  <tbody>
    <tr class="bas">
      <td class="ligne-de-base">baseline</td>
      <td class="haut">top</td>
      <td class="milieu">middle</td>
      <td>bottom</td>
      <td>Style de la ligne</td>
      <td>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        pretium felis eu sem mattis vulputate.
      </td>
    </tr>
  </tbody>
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

.bas {
  vertical-align: bottom;
}

.ligne-de-base {
  vertical-align: baseline;
}

.haut {
  vertical-align: top;
}

.milieu {
  vertical-align: middle;
}
```

#### Résultat

{{EmbedLiveSample("Alignement vertical d'une cellule de tableau", "100%", 230)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Cas d'utilisation classique des boîtes flexibles, section «&nbsp;Centrer des éléments&nbsp;»](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases#centrer_des_éléments)
- Les propriétés {{CSSxRef("line-height")}}, {{CSSxRef("text-align")}}, {{CSSxRef("margin")}}
- [Comprendre `vertical-align`, ou comment (ne pas) centrer des éléments verticalement <sup>(angl.)</sup>](https://phrogz.net/css/vertical-align/index.html)
- [Tout ce qu'il y a à savoir sur `vertical-align` <sup>(angl.)</sup>](https://christopheraue.net/design/vertical-align)
