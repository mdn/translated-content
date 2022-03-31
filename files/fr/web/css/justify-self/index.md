---
title: justify-self
slug: Web/CSS/justify-self
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/justify-self
---
{{CSSRef}}

La propriété CSS **`justify-self`** définit la façon dont une boîte est alignée sur l'axe en ligne du conteneur.

{{EmbedInteractiveExample("pages/css/justify-self.html")}}L'effet de cette propriété varie selon le mode de disposition utilisé :

- Pour les dispositions de bloc : elle permet d'aligner un élément sur l'axe en ligne par rapport à son bloc englobant.
- Pour les éléments positionnés de façon absolue : elle permet d'aligner un élément dans le bloc englobant par rapport à l'axe en ligne en prenant en compte les valeurs de décalage pour les côtés haut, gauche, bas et droit.
- Pour les dispositions des cellules de tableau : cette propriété est ignorée ([en savoir plus](/fr/docs/Web/CSS/CSS_Box_Alignment/Alignement_boîtes_disposition_bloc_absolue_tableau)).
- Pour les dispositions flexibles : cette propriété est ignorée ([en savoir plus](/fr/docs/Web/CSS/CSS_Box_Alignment/Alignement_boîtes_disposition_Flexbox)).
- Pour les dispositions avec les grilles : cette propriété permet d'aligner un objet sur l'axe en ligne sur la zone de grille à laquelle il appartient ([en savoir plus](/fr/docs/Web/CSS/CSS_Box_Alignment/Alignement_boîtes_disposition_grille)).

## Syntaxe

```css
/* Mots-clés de base */
justify-self: auto;
justify-self: normal;
justify-self: stretch;

/* Alignement par rapport à l'axe */
justify-self: center;     /* L'élément est aligné au centre */
justify-self: start;      /* L'élément est aligné au début  */
justify-self: end;        /* L'élément est aligné à la fin  */
justify-self: flex-start; /* L'élément est aligné au début de l'axe */
justify-self: flex-end;   /* L'élément est aligné à la fin de l'axe */
justify-self: self-start;
justify-self: self-end;
justify-self: left;       /* L'élément est aligné à gauche */
justify-self: right;      /* L'élément est aligné à droite */

/* Alignement par rapport à la ligne de base */
justify-self: baseline;
justify-self: first baseline;
justify-self: last baseline;

/* Gestion du dépassement */
justify-self: safe center;
justify-self: unsafe center;

/* Valeurs globales */
justify-self: inherit;
justify-self: initial;
justify-self: unset;
```

Cette propriété peut être définie selon trois formes différentes :

- Grâce à un mot-clé : `normal`, `auto` ou `stretch`.
- Relativement à la ligne de base : dans ce cas, on a le mot-clé `baseline` éventuellement suivi de `first` ou de `last`
- Grâce à un positionnement :

  - Un mot-clé parmi : `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left` ou `right`
  - Puis éventuellement `safe` ou `unsafe`

### Valeurs

- `auto`
  - : La valeur utilisée est celle de la propriété `justify-items` définie pour la boîte parente. Si la boîte n'a pas de parent ou est positionnée de façon absolue, `auto` sera synonyme de `normal`.
- `normal`

  - : Ce mot-clé aura un sens différent selon le mode de disposition utilisé :

    - Pour une disposition en bloc, `normal` est synonyme de `start`.
    - Pour les dispositions avec un positionnment absolu, ce mot-clé se comporte comme `start` pour les boîtes des éléments remplacés ou comme `stretch` pour les autres boîtes positionnées de façon absolue.
    - Pour les dispositions des cellules de tableaux, ce mot-clé n'a pas de signification car cette propriété est ignorée.
    - Pour les dispositions qui utilisent les boîtes flexibles, ce mot-clé n'a pas de signification car cette propriété est ignorée*.*
    - Pour les dispositions qui utilisent une grille, ce mot-clé aura un comportement proche de `stretch`, sauf pour les boîtes qui ont des dimensions intrinsèques, dans ce cas, il est synonyme de `start`.

- `start`
  - : L'élément est aligné vers le début du conteneur pour l'axe en ligne.
- `end`
  - : L'élément est aligné vers la fin du conteneur pour l'axe en ligne.
- `flex-start`
  - : L'élément est aligné vers le début du conteneur flexible pour l'axe en ligne.
    Cette valeur ne s'applique qu'aux éléments flexibles. Pour les éléments qui ne font pas partie d'un conteneur flexible, cette valeur correspond à `start`.
- `flex-end`
  - : L'élément est aligné vers la fin du conteneur flexible pour l'axe en ligne.
    Cette valeur ne s'applique qu'aux éléments flexibles. Pour les éléments qui ne font pas partie d'un conteneur flexible, cette valeur correspond à `end`.
- `self-start`
  - : L'élément est aligné sur le bord du conteneur au début de l'axe en ligne.
- `self-end`
  - : L'élément est aligné sur le bord du conteneur à la fin de l'axe en ligne.
- `center`
  - : L'élément est aligné au centre du conteneur dans le sens de l'axe en ligne.
- `left`
  - : L'élément est aligné vers la gauche du conteneur dans le sens de l'axe en ligne.
- `right`
  - : L'élément est aligné vers la droite du conteneur dans le sens de l'axe en ligne.
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
  grid-template-columns: repeat(2, 100px);
  grid-template-rows: repeat(2,100px);
  height: 300px;
  width: 300px;
  grid-gap: 10px;
  align-content: space-between;
}
.item1 {
  justify-self: start;
}
.item3 {
  justify-self: end;
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

{{EmbedLiveSample('Exemples', '300', '300')}}

## Spécifications

| Spécification                                                                                        | État                                     | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('CSS3 Box Alignment', '#propdef-justify-slef', 'justify-self')}} | {{Spec2('CSS3 Box Alignment')}} | Définition initiale. |

{{CSSInfo}}

## Compatibilité des navigateurs

### Prise en charge pour les dispositions flexibles/_flexbox_

{{Compat("css.properties.justify-self.flex_context")}}

### Prise en charge pour les grilles CSS

{{Compat("css.properties.justify-self.grid_context")}}

## Voir aussi

- [L'alignement des boîtes avec les grilles CSS](/fr/docs/Web/CSS/CSS_Grid_Layout/Alignement_des_boîtes_avec_les_grilles_CSS)
- La propriété {{cssxref("justify-items")}}
- [Le module de spécification CSS Box Alignment](/fr/docs/Web/CSS/CSS_Box_Alignment)
