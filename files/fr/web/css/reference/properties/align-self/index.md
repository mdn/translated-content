---
title: align-self
slug: Web/CSS/Reference/Properties/align-self
original_slug: Web/CSS/align-self
---

{{CSSRef}}

La propriété CSS **`align-self`** permet d'aligner les objets flexibles d'une ligne flexible ou d'une grille en surchargeant la valeur donnée par {{cssxref("align-items")}}.

Si l'un des objet a une marge automatique (`auto`) pour l'axe perpendiculaire à l'axe principal, `align-self` sera ignoré. Lorsque le conteneur est une grille, `align-self` permet d'aligner l'élément au sein de [la zone de grille](/fr/docs/Glossary/Grid_Areas). Si le conteneur est une boîte flexible, l'alignement se fait selon [l'axe secondaire](/fr/docs/Glossary/Cross_Axis).

{{InteractiveExample("CSS Demo: align-self")}}

```css interactive-example-choice
align-self: stretch;
```

```css interactive-example-choice
align-self: center;
```

```css interactive-example-choice
align-self: start;
```

```css interactive-example-choice
align-self: end;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">One</div>
    <div>Two</div>
    <div>Three</div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  display: grid;
  width: 200px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  grid-gap: 10px;
}

.example-container > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

Cette propriété ne s'applique pas aux boîtes qui sont des blocs ou aux cellules d'un tableau.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
align-self: auto;
align-self: normal;

/* Alignement géométrique */
/* align-self ne gère pas les valeurs left et right */
align-self: center; /* Les éléments sont alignés sur le centre */
align-self: start; /* Les éléments sont alignés au début de l'axe */
align-self: end; /* Les éléments sont alignés à la fin de l'axe */
align-self: self-start; /* Les éléments sont alignés par rapport à leur début */
align-self: self-end; /* Les éléments sont alignés par rapport à leur fin */
align-self: flex-start; /* Les éléments flexibles sont alignés au début */
align-self: flex-end; /* Les éléments flexibles sont alignés à la fin */

/* Alignement selon la ligne de base */
align-self: baseline;
align-self: first baseline;
align-self: last baseline;
align-self: stretch; /* Les objets dimensionnés avec 'auto' sont étirés pour remplir le conteneur */

/* Alignement avec gestion du dépassement */
align-self: safe center;
align-self: unsafe center;

/* Valeurs globales */
align-self: inherit;
align-self: initial;
align-self: unset;
```

### Valeurs

- `auto`
  - : La valeur est calculée par rapport à celle de {{cssxref("align-items")}}.
- `normal`
  - : L'effet de ce mot-clé dépend du mode de disposition utilisé :
    - Pour une disposition absolue, ce mot-clé est synonyme de `start` pour les boîtes remplacées positionnées de façon absolue, il est synonyme de _stretch_ pour les autres boîtes positionnées de façon absolue.
    - Pour une disposition absolue et des positions statiques, ce mot-clé est synonyme de `stretch`.
    - Pour les éléments flexibles, ce mot-clé est synonyme de `stretch`.
    - Pour les éléments positionnés sur une grille, ce mot-clé est synonyme de `stretch`, sauf pour les boîtes qui ont un ratio d'aspec ou des dimensions intrinsèques, dans ce cas, cette valeur se comporte comme `start`.
    - Cette propriété ne s'applique pas aux boîtes qui sont des blocs ou aux cellules d'un tableau.

- `self-start`
  - : Les éléments sont alignés dans l'axe perpendiculaire à l'axe principal pour que le bord correspondant soit aligné avec le bord du conteneur au début de l'axe.
- `self-end`
  - : Les éléments sont alignés dans l'axe perpendiculaire à l'axe principal pour que le bord correspondant soit aligné avec le bord du conteneur à la fin de l'axe.
- `flex-start`
  - : Le bord de l'élément flexible, au début de l'axe perpendiculaire à l'axe principal, est aligné avec le bord au début de l'axe perpendiculaire pour la ligne flexible.
- `flex-end`
  - : Le bord de l'élément flexible, à la fin de l'axe perpendiculaire à l'axe principal, est aligné avec le bord à la fin de l'axe perpendiculaire pour la ligne flexible.
- `center`
  - : La boîte définies par les marges est centrée sur la ligne de l'axe perpendiculaire à l'axe principal de la ligne. Si l'élément est plus grand que le conteneur dans ce sens, il dépassera également de chaque côté.
- `baseline first baseline`
  `last baseline`
  - : Indique l'alignement par rapport à la ligne de base.
    Si besoin, la valeur `first baseline` est remplacée par `start` et `last baseline` est remplacée par `end`.
- `stretch`
  - : Si la somme des dimensions des éléments sur l'axe perpendiculaire à l'axe principal est inférieure à la dimension du conteneur et que l'élément est dimensionné automatiquement, celui-ci est agrandi (tout en respectant les éventuelles contraintes dictées par {{cssxref("max-height")}}/{{cssxref("max-width")}} ou autres) afin que l'ensemble des éléments remplissent le conteneur sur cet axe.
- `safe`
  - : Si la taille d'un élément dépasse du conteneur avec l'alignement fourni par la valeur, l'élément sera en réalité aligné comme si la valeur `start` avait été utilisée.
- `unsafe`
  - : Quelle que soit les tailles relatives des objets par rapport au conteneur, la valeur indiquant l'alignement sera respectée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.flex-container {
  height: 250px;
  display: flex;
}

.element-flex {
  background: palegreen;
  width: 100px;
  padding: 5px;
  margin: 5px;
  line-height: 50px;
  font-size: 2em;
}

.center {
  -webkit-align-self: center;
  align-self: center;
}

.baseline {
  -webkit-align-self: baseline;
  align-self: baseline;
}

.stretch {
  -webkit-align-self: stretch;
  align-self: stretch;
}
```

### HTML

```html
<div class="flex-container">
  <p class="element-flex center">Milieu</p>
  <p class="element-flex baseline">Base</p>
  <p class="element-flex stretch">Étiré</p>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples","300","300")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les boîtes flexibles CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- Guide sur les boîtes flexibles : _[Les concepts de bases](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)_
- Guide sur les boîtes flexibles : _[Aligner des objets dans un conteneur flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)_
- Guide sur les grilles : _[Aligner des objets dans une grille](/fr/docs/Web/CSS/Guides/Grid_layout/Box_alignment)_
- [Le module de spécification CSS Box Alignment](/fr/docs/Web/CSS/Guides/Box_alignment)
- La propriété {{cssxref("align-items")}}
