---
title: place-self
slug: Web/CSS/place-self
tags:
  - CSS
  - Propriété
  - Propriété raccourcie
  - Reference
translation_of: Web/CSS/place-self
---
{{CSSRef}}

La propriété **`place-self`** est une [propriété raccourcie](/fr/docs/Web/CSS/Propri%C3%A9t%C3%A9s_raccourcies) qui permet de paramétrer les valeurs des propriétés {{cssxref("align-self")}} et  {{cssxref("justify-self")}}. La première valeur sera utilisée pour `align-self` et la seconde pour `justify-self`. S'il n'y a pas de seconde valeur, la première sera également utilisée pour `justify-self`.

{{EmbedInteractiveExample("pages/css/place-self.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
place-self: auto center;
place-self: normal start;

/* Alignement géométrique */
place-self: center normal;
place-self: start auto;
place-self: end normal;
place-self: self-start auto;
place-self: self-end normal;
place-self: flex-start auto;
place-self: flex-end normal;
place-self: left auto;
place-self: right normal;

/* Alignement relatif à la ligne de base */
place-self: baseline normal;
place-self: first baseline auto;
place-self: last baseline normal;
place-self: stretch auto;

/* Valeurs globales */
place-self: inherit;
place-self: initial;
place-self: unset;
```

### Valeurs

- `auto`
  - : La valeur utilise celle de {{cssxref("align-items")}} pour l'élément parent.
- `normal`

  - : Ce mot-clé aura un sens différent selon le mode de disposition utilisé :

    - Pour les dispositions avec un positionnment absolu, ce mot-clé se comporte comme `start` pour les boîtes des éléments remplacés ou comme `stretch` pour les autres boîtes positionnées de façon absolue.
    - Pour les éléments positionnés de façon statique au sein d'une disposition absolue, ce mot-clé agira comme `stretch`
    - Pour les cellules de tableaux, ce mot-clé n'a pas de signification car cette propriété est ignorée.
    - Pour les éléments disposés en blocs, cette propriété est ignorée.
    - Pour les dispositions qui utilisent les boîtes flexibles, ce mot-clé n'a pas de signification car cette propriété est ignorée.
    - Pour les dispositions qui utilisent une grille, ce mot-clé aura un comportement proche de `stretch`, sauf pour les boîtes qui ont des dimensions intrinsèques, dans ce cas, il est synonyme de `start`.

- `self-start`
  - : Les éléments sont alignés sur le bord du conteneur vers le début de l'axe en bloc.
- `self-end`
  - : Les éléments sont alignés sur le bord du conteneur vers la fin de l'axe en bloc.
- `flex-start`
  - : Le bord de l'élément flexible au début de l'axe en bloc est aligné avec le début de l'axe en bloc sur la ligne.
- `flex-end`
  - : Le bord de l'élément flexible à la fin de l'axe en bloc est aligné avec la fin de l'axe en bloc sur la ligne.
- `center`
  - : La boîte de marge de l'élément flexible est centrée sur la ligne par rapport à l'axe en bloc. Si la taille de l'élément est supérieure à celle du conteneur flexible, l'élément dépasse également dans chaque direction.
- `baseline first baseline`
  `last baseline`
  - : Ces valeurs permettent de définir l'alignement par rapport à la ligne de base pour l'élément du conteneur avec la ligne de base la plus haute ou la plus basse.
    Si `first baseline` n'est pas prise en charge, la valeur correspondra à `start`, si `last baseline` n'est pas prise en charge, la valeur correspondra à `end`.
- `stretch`
  - : Si la somme des tailles des éléments est inférieure à la taille du conteneur pour l'axe en ligne, les éléments dimensionnés automatiquement seront élargis de la même longueur tout en respectant les contraintes imposées par {{cssxref("max-height")}}/{{cssxref("max-width")}} (ou par les fonctionnalités équivalentes), afin que l'ensemble des éléments remplisse exactement le conteneur.

### Syntaxe formelle

{{CSSSyntax}}

## Spécifications

| Spécification                                                                                    | État                                     | Commentaires         |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------------------- |
| {{SpecName("CSS3 Box Alignment", "#place-self-property", "place-self")}} | {{Spec2("CSS3 Box Alignment")}} | Définition initiale. |

{{CSSInfo}}

## Compatibilité des navigateurs

### Prise en charge pour les dispositions flexibles

{{Compat("css.properties.place-self.flex_context")}}

### Prise en charge pour les grilles

{{Compat("css.properties.place-self.grid_context")}}

## Voir aussi

- Guide sur les grilles : _[Aligner des objets dans une grille](/fr/docs/Web/CSS/CSS_Grid_Layout/Alignement_des_boîtes_avec_les_grilles_CSS)_
- Guide sur les boîtes flexibles : _[Les concepts de bases](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Concepts_de_base_flexbox)_
- Guide sur les boîtes flexibles : _[Aligner des objets dans un conteneur flexible](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Aligner_des_éléments_dans_un_conteneur_flexible)_
- [Le module de spécification CSS Box Alignment](/fr/docs/Web/CSS/CSS_Box_Alignment)
- Les propriétés détaillées correspondantes

  - {{cssxref("align-self")}}
  - {{cssxref("justify-self")}}
