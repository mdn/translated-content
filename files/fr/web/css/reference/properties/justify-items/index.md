---
title: justify-items
slug: Web/CSS/Reference/Properties/justify-items
l10n:
  sourceCommit: 05e0ea073802694cc49d76d566778bd607a9511f
---

La propriété [CSS](/fr/docs/Web/CSS) **`justify-items`** définit la valeur par défaut de {{CSSxRef("justify-self")}} pour tous les éléments de la boîte, leur donnant ainsi une façon par défaut de justifier chaque boîte le long de l'axe approprié.

{{InteractiveExample("Démonstration CSS&nbsp;: justify-items")}}

```css interactive-example-choice
justify-items: stretch;
```

```css interactive-example-choice
justify-items: center;
```

```css interactive-example-choice
justify-items: start;
```

```css interactive-example-choice
justify-items: end;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>Un</div>
      <div>Deux</div>
      <div>Trois</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 40px;
  grid-gap: 10px;
  width: 220px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

L'effet de cette propriété sera différent selon le type de disposition utilisé&nbsp;:

- Pour les dispositions de bloc, cette propriété aligne les éléments à l'intérieur de leur bloc englobant sur l'axe en ligne.
- Pour les éléments positionnés de façon absolue, cette propriété aligne les éléments à l'intérieur de leur bloc englobant sur l'axe en ligne, en tenant compte des valeurs de décalage haut, gauche, bas et droite.
- Pour les dispositions des cellules de tableau, cette propriété est _ignorée_ (voir [L'alignement des boîtes pour les dispositions de bloc, positionnées absolument et les tableaux](/fr/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables))
- Pour les dispositions flexibles (_flexbox_), cette propriété est _ignorée_ (voir [L'alignement des boîtes flexibles](/fr/docs/Web/CSS/Guides/Box_alignment/In_flexbox))
- Pour les grilles, cette propriété aligne les éléments à l'intérieur de leur zone de grille sur l'axe en ligne (voir [L'alignement des boîtes en disposition grille](/fr/docs/Web/CSS/Guides/Box_alignment/In_grid_layout))

## Syntaxe

```css
/* Mots-clés de base */
justify-items: normal;
justify-items: stretch;

/* Alignement par rapport à l'axe */
justify-items: center; /* Les éléments sont regroupés au centre */
justify-items: start; /* Les éléments sont regroupés au début  */
justify-items: end; /* Les éléments sont regroupés à la fin  */
justify-items: flex-start; /* Les éléments sont regroupés au début de l'axe */
justify-items: flex-end; /* Les éléments sont regroupés à la fin de l'axe */
justify-items: self-start;
justify-items: self-end;
justify-items: left; /* Les éléments sont regroupés à gauche */
justify-items: right; /* Les éléments sont regroupés à droite */
justify-items: anchor-center;

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
justify-items: revert;
justify-items: revert-layer;
justify-items: unset;
```

Cette propriété peut prendre l'une des quatre formes suivantes&nbsp;:

- Mots-clés de base&nbsp;: l'une des valeurs de mot-clé `normal` ou `stretch`.
- Alignement sur la ligne de base&nbsp;: le mot-clé `baseline`, éventuellement suivi de `first` ou `last`.
- Alignement positionnel&nbsp;: l'une des valeurs&nbsp;: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left` ou `right`. Puis éventuellement `safe` ou `unsafe`.
- Alignement hérité&nbsp;: le mot-clé `legacy`, suivi de l'une des valeurs `left`, `right` ou `center`.

### Valeurs

- `normal`
  - : Ce mot-clé aura un sens différent selon le mode de disposition utilisé :
    - Pour une disposition en bloc, `normal` est synonyme de `start`.
    - Pour les dispositions avec un positionnment absolu, ce mot-clé se comporte comme `start` pour les boîtes des éléments remplacés ou comme `stretch` pour les autres boîtes positionnées de façon absolue.
    - Pour les dispositions des cellules de tableaux, ce mot-clé n'a pas de signification car cette propriété est _ignorée_.
    - Pour les dispositions qui utilisent les boîtes flexibles, ce mot-clé n'a pas de signification car cette propriété est _ignorée_.
    - Pour les dispositions qui utilisent une grille, ce mot-clé aura un comportement proche de `stretch`, sauf pour les boîtes qui ont des dimensions intrinsèques, dans ce cas, il est synonyme de `start`.
- `start`
  - : Les éléments sont regroupés vers le début du conteneur pour l'axe en ligne.
- `end`
  - : Les éléments sont regroupés vers la fin du conteneur pour l'axe en ligne.
- `flex-start`
  - : Pour les éléments qui ne sont pas enfants d'un conteneur flexible, cette valeur est traitée comme `start`.
- `flex-end`
  - : Pour les éléments qui ne sont pas enfants d'un conteneur flexible, cette valeur est traitée comme `end`.
- `self-start`
  - : Les éléments sont alignés sur le bord du conteneur au début de l'axe en ligne.
- `self-end`
  - : Les éléments sont alignés sur le bord du conteneur à la fin de l'axe en ligne.
- `center`
  - : Les éléments sont regroupés au centre du conteneur dans le sens de l'axe en ligne.
- `left`
  - : Les éléments sont accolés les uns aux autres vers le bord gauche du conteneur d'alignement. Si l'axe de la propriété n'est pas parallèle à l'axe en ligne, cette valeur se comporte comme `start`.
- `right`
  - : Les éléments sont accolés les uns aux autres vers le bord droit du conteneur d'alignement sur l'axe approprié. Si l'axe de la propriété n'est pas parallèle à l'axe en ligne, cette valeur se comporte comme `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Ces valeurs permettent de définir l'alignement par rapport à la ligne de base pour l'élément du conteneur avec la ligne de base la plus haute ou la plus basse.
    Si `first baseline` n'est pas prise en charge, la valeur correspondra à `start`, si `last baseline` n'est pas prise en charge, la valeur correspondra à `end`.
- `stretch`
  - : Si la somme des tailles des éléments est inférieure à la taille du conteneur pour l'axe en ligne, les éléments dimensionnés automatiquement seront élargis de la même longueur tout en respectant les contraintes imposées par {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (ou par les fonctionnalités équivalentes), afin que l'ensemble des éléments remplisse exactement le conteneur.
- `anchor-center`
  - : Dans le cas des éléments [positionnés avec une ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning), aligne les éléments au centre de l'élément d'ancre associé dans la direction en ligne. Voir [Centrer sur l'ancre avec `anchor-center`](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#centrer_sur_lancre_avec_anchor-center).
- `safe`
  - : Si la taille de l'élément dépasse du conteneur pour la valeur d'alignement indiquée, l'élément est alors aligné comme si la valeur `start` avait été utilisée.
- `unsafe`
  - : Quelle que soit la taille de l'élément par rapport au conteneur (il peut dépasser), la valeur fournie pour indiquer l'alignement est respectée.
- `legacy`
  - : La valeur est héritée par les éléments descendants de la boîte. Si un élément descendant a `justify-self: auto`, le mot-clé `legacy` ne sera pas pris en compte mais uniquement la valeur `left`, `right`, ou `center`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Démonstration simple

Dans cet exemple, nous avons une disposition en grille 2 x 2. Initialement, le conteneur de grille reçoit une valeur `justify-items` de `stretch` (la valeur par défaut), ce qui fait que les éléments de la grille s'étendent sur toute la largeur de leurs cellules.

Cependant, si vous survolez ou sélectionnez le conteneur de grille, il reçoit une valeur `justify-items` de `center`, ce qui fait que les éléments de la grille n'occupent que la largeur de leur contenu et sont alignés au centre de leurs cellules.

#### HTML

```html
<article class="container" tabindex="0">
  <span>Premier enfant</span>
  <span>Deuxième enfant</span>
  <span>Troisième enfant</span>
  <span>Quatrième enfant</span>
</article>
```

#### CSS

```css
html {
  font-family: "Helvetica", "Arial", sans-serif;
  letter-spacing: 1px;
}

article {
  background-color: red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 40px;
  grid-gap: 10px;
  margin: 20px;
  width: 300px;
  justify-items: stretch;
}

article:hover,
article:focus {
  justify-items: center;
}

article span {
  background-color: black;
  color: white;
  margin: 1px;
  text-align: center;
}

article,
span {
  padding: 10px;
  border-radius: 7px;
}
```

#### Résultat

{{EmbedLiveSample("Démonstration simple", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("justify-self")}}
- La propriété {{CSSxRef("align-items")}}
- La propriété raccourcie {{CSSxRef("place-items")}}
- [L'alignement des boîtes avec les grilles CSS](/fr/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- Le module [d'alignement de boîte CSS](/fr/docs/Web/CSS/Guides/Box_alignment)
