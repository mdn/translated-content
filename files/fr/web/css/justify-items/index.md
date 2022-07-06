---
title: justify-items
slug: Web/CSS/justify-items
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/justify-items
---
{{CSSRef}}

La propriété CSS **`justify-items`** définit la valeur par défaut de {{cssxref("justify-self")}} pour tous les éléments d'une boîte et permet ainsi de définir le comportement par défaut pour la justification des éléments d'une boîte le long de l'axe en ligne (c'est-à-dire l'axe correspondant au sens d'écriture).

{{EmbedInteractiveExample("pages/css/justify-items.html")}}

L'effet de cette propriété sera différent selon le type de disposition utilisé :

- Pour les dispositions de bloc : cette propriété aligne l'élément selon l'axe en ligne au sein du bloc englobant.
- Pour les éléments positionnés de façon absolue : cette propriété aligne l'élément selon l'axe en ligne au sein du bloc englobant en prenant en compte les valeurs de décalage par rapport au haut, à la gauche, au bas et à la droite.
- Pour les cellules de tableau, cette propriété est ignorée ([en savoir plus](/fr/docs/Web/CSS/CSS_Box_Alignment/Alignement_boîtes_disposition_bloc_absolue_tableau)).
- Pour les dispositions flexibles (_flexbox_), cette propriété est ignorée ([en savoir plus](/fr/docs/Web/CSS/CSS_Box_Alignment/Alignement_boîtes_disposition_Flexbox)).
- Pour les grilles, cette propriété aligne l'élément sur la zone de la grille à laquelle il appartient selon l'axe en ligne ([en savoir plus](/fr/docs/Web/CSS/CSS_Box_Alignment/Alignement_boîtes_disposition_grille)).

## Syntaxe

```css
/* Mots-clés de base */
justify-items: auto;
justify-items: normal;
justify-items: stretch;

/* Alignement par rapport à l'axe */
justify-items: center;     /* Les éléments sont regroupés au centre */
justify-items: start;      /* Les éléments sont regroupés au début  */
justify-items: end;        /* Les éléments sont regroupés à la fin  */
justify-items: flex-start; /* Les éléments sont regroupés au début de l'axe */
justify-items: flex-end;   /* Les éléments sont regroupés à la fin de l'axe */
justify-items: self-start;
justify-items: self-end;
justify-items: left;       /* Les éléments sont regroupés à gauche */
justify-items: right;      /* Les éléments sont regroupés à droite */

/* Alignement par rapport à la ligne de base */
justify-items: baseline;
justify-items: first baseline;
justify-items: last baseline;

/* Gestion du dépassement */
justify-items: safe center;
justify-items: unsafe center;

/* Valeurs historiques */
justify-items: legacy right;
justify-items: legacy left;
justify-items: legacy center;

/* Valeurs globales */
justify-items: inherit;
justify-items: initial;
justify-items: unset;
```

Cette propriété peut être définie selon trois formes différentes :

- Grâce à un mot-clé : `normal`, `auto` ou `stretch`.
- Relativement à la ligne de base : dans ce cas, on a le mot-clé `baseline` éventuellement suivi de `first` ou de `last`
- Grâce à un positionnement :

  - Un mot-clé parmi : `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left` ou `right`
  - Puis éventuellement `safe` ou `unsafe`

- Grâce à un alignement tel que précédemment spécifié : le mot-clé `legacy` suivi de `left` ou de `right`.

### Valeurs

- `auto`
  - : La valeur utilisée est celle de la propriété `justify-items` pour la boîte parente. Si la boîte n'a pas de parent ou est positionnée de façon absolue, `auto` sera synonyme de `normal`.
- `normal`

  - : Ce mot-clé aura un sens différent selon le mode de disposition utilisé :

    - Pour une disposition en bloc, `normal` est synonyme de `start`.
    - Pour les dispositions avec un positionnment absolu, ce mot-clé se comporte comme `start` pour les boîtes des éléments remplacés ou comme `stretch` pour les autres boîtes positionnées de façon absolue.
    - Pour les dispositions des cellules de tableaux, ce mot-clé n'a pas de signification car cette propriété est ignorée.
    - Pour les dispositions qui utilisent les boîtes flexibles, ce mot-clé n'a pas de signification car cette propriété est ignorée*.*
    - Pour les dispositions qui utilisent une grille, ce mot-clé aura un comportement proche de `stretch`, sauf pour les boîtes qui ont des dimensions intrinsèques, dans ce cas, il est synonyme de `start`.

- `start`
  - : Les éléments sont regroupés vers le début du conteneur pour l'axe en ligne.
- `end`
  - : Les éléments sont regroupés vers la fin du conteneur pour l'axe en ligne.
- `flex-start`
  - : Les éléments sont regroupés vers le début du conteneur flexible pour l'axe en ligne.
    Cette valeur ne s'applique qu'aux éléments flexibles. Pour les éléments qui ne font pas partie d'un conteneur flexible, cette valeur correspond à `start`.
- `flex-end`
  - : Les éléments sont regroupés vers la fin du conteneur flexible pour l'axe en ligne.
    Cette valeur ne s'applique qu'aux éléments flexibles. Pour les éléments qui ne font pas partie d'un conteneur flexible, cette valeur correspond à `end`.
- `self-start`
  - : Les éléments sont alignés sur le bord du conteneur au début de l'axe en ligne.
- `self-end`
  - : Les éléments sont alignés sur le bord du conteneur à la fin de l'axe en ligne.
- `center`
  - : Les éléments sont regroupés au centre du conteneur dans le sens de l'axe en ligne.
- `left`
  - : Les éléments sont alignés vers la gauche du conteneur dans le sens de l'axe en ligne.
- `right`
  - : Les éléments sont alignés vers la droite du conteneur dans le sens de l'axe en ligne.
- `baseline first baseline`
  `last baseline`
  - : Ces valeurs permettent de définir l'alignement par rapport à la ligne de base pour l'élément du conteneur avec la ligne de base la plus haute ou la plus basse.
    Si `first baseline` n'est pas prise en charge, la valeur correspondra à `start`, si `last baseline` n'est pas prise en charge, la valeur correspondra à `end`.
- `stretch`
  - : Si la somme des tailles des éléments est inférieure à la taille du conteneur pour l'axe en ligne, les éléments dimensionnés automatiquement seront élargis de la même longueur tout en respectant les contraintes imposées par {{cssxref("max-height")}}/{{cssxref("max-width")}} (ou par les fonctionnalités équivalentes), afin que l'ensemble des éléments remplisse exactement le conteneur.
- `safe`
  - : Si la taille de l'élément dépasse du conteneur pour la valeur d'alignement indiquée, l'élément est alors aligné comme si la valeur `start` avait été utilisée.
- `unsafe`
  - : Quelle que soit la taille de l'élément par rapport au conteneur (il peut dépasser), la valeur fournie pour indiquer l'alignement est respectée.
- `legacy`
  - : La valeur est héritée par les éléments descendants de la boîte. Si un élément descendant a `justify-self: auto`, le mot-clé `legacy` ne sera pas pris en compte mais uniquement la valeur `left`, `right`, ou `center`.

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css hidden
* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3,100px);
  height: 500px;
  width: 500px;
  grid-gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
  align-content: space-between;
  justify-items: start;
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

### HTML

```html
<div class="wrapper">
  <div class="item1">Objet 1</div>
  <div class="item2">Objet 2</div>
  <div class="item3">Objet 3</div>
  <div class="item4">Objet 4</div>
</div>
```

### Résultat

{{EmbedLiveSample('Exemples', '500', '500')}}

## Spécifications

| Spécification                                                                                            | État                                     | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName("CSS3 Box Alignment", "#propdef-justify-items", "justify-items")}} | {{Spec2("CSS3 Box Alignment")}} | Définition initiale. |

{{CSSInfo}}

## Compatibilité des navigateurs

### Prise en charge pour les dispositions flexibles

{{Compat("css.properties.justify-items.flex_context")}}

### Prise en charge pour les grilles CSS

{{Compat("css.properties.justify-items.grid_context")}}

## Voir aussi

- [L'alignement des boîtes avec les grilles CSS](/fr/docs/Web/CSS/CSS_Grid_Layout/Alignement_des_boîtes_avec_les_grilles_CSS)
- La propriété {{cssxref("justify-self")}}
- [Le module de spécification CSS Box Alignment](/fr/docs/Web/CSS/CSS_Box_Alignment)
- La propriété raccourcie {{CSSxRef("place-items")}}
- La propriété {{CSSxRef("align-items")}}
