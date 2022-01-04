---
title: vertical-align
slug: Web/CSS/vertical-align
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/vertical-align
---
{{CSSRef}}

La propriété **`vertical-align`** définit l'alignement vertical d'une boîte en ligne (_inline_) ou d'une cellule de tableau.

{{EmbedInteractiveExample("pages/css/vertical-align.html")}}

La propriété `vertical-align` peut être utilisée dans deux contextes :

- Afin d'aligner verticalement la boîte d'un élément en ligne à l'intérieur de la boîte en ligne de son conteneur (par exemple pour aligner verticalement une image ({{HTMLElement("img")}} sur une ligne de texte)
- ou pour aligner verticalement le contenu d'une cellule dans un tableau

`vertical-align` ne s'applique qu'aux cellules de tableaux et aux éléments en ligne (_inline_), elle ne peut pas être utilisée pour aligner verticalement [les éléments de bloc](/fr/docs/Web/HTML/Éléments_en_bloc).

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
vertical-align: unset;
```

### Valeurs

#### Pour les éléments _inline_

> **Note :** La plupart des valeurs alignent l'élément verticalement, relativement à son élément parent.

- `baseline`
  - : Aligne la ligne de base de l'élément avec celle de son parent. La ligne de base de certains [éléments remplacés](/fr/docs/Web/CSS/Élément_remplacé), comme {{HTMLElement("textarea")}}, n'est pas définie par la spécification HTML et le comportement de ce mot-clé peut donc changer d'un navigateur à un autre.
- `sub`
  - : Aligne la ligne de base sur la ligne de base inférieure (celle utilisée pour les indices) de l'élément parent.
- `super`
  - : Aligne la ligne de base sur la ligne de base supérieure (celle utilisée pour les exposants) de l'élément parent.
- `text-top`
  - : Aligne le haut de l'élément avec le haut de la police de l'élément parent.
- `text-bottom`
  - : Aligne le bas de l'élément avec le bas de la police de l'élément parent.
- `middle`
  - : Aligne le milieu de l'élément avec la hauteur donnée par la ligne de base de l'élément parent à laquelle on ajoute la moitié de sa hauteur.
- {{cssxref("&lt;length&gt;")}}
  - : Aligne la ligne de base de l'élément à la hauteur de la ligne de base de l'élément parent à laquelle on ajoute la hauteur donnée. Les valeurs négatives sont autorisées.
- {{cssxref("&lt;percentage&gt;")}}
  - : Fonctionne comme avec les valeurs de type {{cssxref("&lt;length&gt;")}}, le pourcentage indique une fraction de la propriété {{cssxref("line-height")}}. Les valeurs négatives sont autorisées.

Les valeurs suivantes alignent l'élément par rapport à la ligne entière (absolu) plutôt que par rapport à leur parent (relatif) :

- `top`
  - : Aligne le haut de l'élément et de ses descendants avec le haut de la ligne entière.
- `bottom`
  - : Aligne le bas de l'élément et de ses descendants avec le bas de la ligne entière.

Pour les éléments qui n'ont pas de ligne de base définie, c'est le bord de la marge basse qui est utilisée.

#### Pour les cellules de tableau

- `baseline`, `sub`, `super`, `text-top`, `text-bottom`, `<length>` et `<percentage>`
  - : La ligne de base de la cellule est alignée avec celle de toutes les autres cellules de la ligne courante qui sont alignées par rapport à la ligne de base. Les valeurs négatives sont autorisées.
- `top`
  - : Aligne le bord haut de la boîte de remplissage (_padding_) de la cellule avec le haut de la ligne.
- `middle`
  - : Centre la boîte de remplissage (_padding_) de la cellule avec la ligne.
- `bottom`
  - : Aligne le bord bas de la boîte de remplissage (_padding_) avec le bas de la ligne.

### Syntaxe formelle

{{csssyntax}}

## Exemple

#### HTML

```html
<div>
  Une <img src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="une icone générique" width="32" height="32" />
  image alignée par défaut.
</div>
<div>
  Une <img class="haut" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" />
  image alignée avec text-top.
</div>
<div>
  Une <img class="bas" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" />
  image alignée avec text-bottom.</div>
<div>
  Une <img class="pourcents" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" />
  image alignée avec 200%.
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
img.pourcents {
  vertical-align: 200%;
}
```

#### Résultat

{{EmbedLiveSample("Exemple")}}

## Spécifications

| Spécification                                                                                            | État                                     | Commentaires                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'vertical-align')}}             | {{Spec2('CSS3 Transitions')}} | `vertical-align` peut désormais être animée.                                                                                                                          |
| {{SpecName('CSS2.1', 'visudet.html#propdef-vertical-align', 'vertical-align')}} | {{Spec2('CSS2.1')}}                 | Ajoute la valeur {{cssxref("&lt;length&gt;")}} et permet d'appliquer la propriété aux éléments dont {{cssxref("display")}} est de type `table-cell`. |
| {{SpecName('CSS1', '#vertical-align', 'vertical-align')}}                             | {{Spec2('CSS1')}}                 | Définition initiale.                                                                                                                                                  |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.vertical-align")}}

## Voir aussi

- {{cssxref("line-height")}}, {{cssxref("text-align")}}, {{cssxref("margin")}}
- [Comprendre `vertical-align` ou comment (ne pas) centrer des éléments verticalement](https://phrogz.net/css/vertical-align/index.html) (en anglais)
- [Tout ce qu'il y a à savoir sur `vertical-align`](https://christopheraue.net/design/vertical-align) (en anglais)
- [Centrer des éléments avec _flexbox_](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Cas_utilisation_flexbox#Centrer_des_éléments)
