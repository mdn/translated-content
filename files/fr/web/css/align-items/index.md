---
title: align-items
slug: Web/CSS/align-items
---

{{CSSRef}}

La propriété CSS **`align-items`** définit la valeur de {{cssxref("align-self")}} sur l'ensemble des éléments-fils directs.

La propriété `align-self` définit elle l'alignement d'un objet au sein de son conteneur. Pour les boîtes flexibles, cette propriété contrôle l'alignement par rapport à l'axe secondaire (_cross axis_). Au sein d'une grille CSS, elle contrôle l'alignement des éléments sur l'axe de bloc de [la zone de grille](/fr/docs/Glossary/Grid_Areas) correspondante.

L'exemple qui suit illustre le fonctionnement des différentes valeurs de `align-items` au sein d'une grile.

{{EmbedInteractiveExample("pages/css/align-items.html")}}

À l'heure actuelle, cette propriété est prise en charge pour les dispositions _Flexbox_ et grilles CSS. Pour les boîtes flexibles, cela contrôle l'alignement des objets sur l'axe secondaire et pour les grilles, cela contrôle l'alignement sur l'axe en bloc.

## Syntaxe

```css
/* Mots-clés de base */
align-items: normal;
align-items: stretch;

/* Alignement géométrique */
/* align-items ne gère pas les valeurs left et right */
align-items: center; /* Les éléments sont regroupés au centre */
align-items: start; /* Les éléments sont regroupés au début */
align-items: end; /* Les éléments sont regroupés à la fin */
align-items: flex-start; /* Les éléments flexibles sont regroupés au début */
align-items: flex-end; /* Les éléments flexibles sont regroupés à la fin */
align-items: self-start;
align-items: self-end;

/* Alignement par rapport à la ligne de base */
align-items: first;
align-items: first baseline;
align-items: last baseline;

/* Gestion du dépassement */
align-items: safe center;
align-items: unsafe center;

/* Valeurs globales */
align-items: inherit;
align-items: initial;
align-items: unset;
```

### Valeurs

- `normal`

  - : L'effet obtenu avec ce mot-clé dépend du mode de disposition utilisé :

    - Pour les éléments positionnés de façon absolue, ce mot-clé est synonyme de `start` pour les éléments remplacés, pour les autres éléments positionnés de façon absolue, il est synonyme de `stretch`.
    - Pour les éléments avec une position statique sur une disposition absolue, ce mot-clé se comporte comme `stretch`.
    - Pour les éléments flexibles, ce mot-clé est synonyme de `stretch`.
    - Pour les éléments d'une grille, ce mot-clé se comportera comme `stretch` sauf pour les boîtes ayant des dimensions intrinsèques où il se comporte comme `start`.
    - Cette propriété ne s'applique pas aux boîtes en bloc ou aux cellules de tableaux.

- `flex-start`
  - : Le bord de la marge des éléments flexibles sur l'axe en bloc est aligné avec le bord de la ligne au début de l'axe en bloc.
- `flex-end`
  - : Le bord de la marge des éléments flexibles sur l'axe en bloc est aligné avec le bord de la ligne à la fin de l'axe en bloc.
- `center`
  - : Les éléments flexibles sont centrés sur l'axe en bloc au sein de la ligne. Si ces éléments sont plus grands que la ligne, ils dépasseront également de chaque côté.
- `start`
  - : Les éléments sont alignés sur le bord au début du conteneur selon l'axe de bloc.
- `end`
  - : Les éléments sont alignés sur le bord à la fin du conteneur selon l'axe de bloc
- `center`
  - : Les éléments sont centrés sur l'axe en bloc du conteneur.
- `self-start`
  - : Les éléments sont accolés au bord du début du conteneur dans l'axe de bloc.
- `self-end`
  - : Les éléments sont accolés au bord à la fin du conteneur dans l'axe de bloc.
- `baseline`

  `first baseline last baseline`

  - : Tous les éléments flexibles sont alignés afin que [leurs différentes lignes de base](https://drafts.csswg.org/css-flexbox-1/#flex-baselines) soient alignées. L'élément pour lequel on a la plus grande distance entre la marge et la ligne de base est aligné sur le bord de la ligne courante.

- `stretch`
  - : Les éléments flexibles sont étirés afin que la taille de la boîte de marge sur l'axe en bloc est la même que celle de la ligne sur laquelle l'élément se trouve, tout en respectant les contraintes de hauteur et de largeur.
- `safe`
  - : Ce mot-clé est utilisé avec un mot-clé d'alignement. Si la taille d'un des éléments dépasse du conteneur avec la valeur d'alignement indiquée, l'alignement sera réalisé avec la valeur `start` à la place.
- `unsafe`
  - : Ce mot-clé est utilisé avec un mot-clé d'alignement. Quelle que soit la taille relative et l'éventuel dépassement de l'élément par rapport au conteneur, la valeur indiquée pour l'alignement est respectée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
#container {
  height: 200px;
  width: 240px;
  align-items: center; /* Cette valeur peut être modifiée dans l'exemple */
  background-color: #8c8c8c;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
}

div > div {
  box-sizing: border-box;
  border: 2px solid #8c8c8c;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
}

#item2 {
  background-color: #a0c8ff;
  min-height: 50px;
}

#item3 {
  background-color: #ffa08c;
  min-height: 40px;
}

#item4 {
  background-color: #ffff8c;
  min-height: 60px;
}

#item5 {
  background-color: #ff8cff;
  min-height: 70px;
}

#item6 {
  background-color: #8cffff;
  min-height: 50px;
  font-size: 30px;
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```

### HTML

```html
<div id="container" class="flex">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
  <div id="item6">6</div>
</div>

<div class="row">
  <label for="display">display: </label>
  <select id="display">
    <option value="flex">flex</option>
    <option value="grid">grid</option>
  </select>
</div>

<div class="row">
  <label for="values">align-items: </label>
  <select id="values">
    <option value="normal">normal</option>
    <option value="flex-start">flex-start</option>
    <option value="flex-end">flex-end</option>
    <option value="center" selected>center</option>
    <option value="baseline">baseline</option>
    <option value="stretch">stretch</option>

    <option value="start">start</option>
    <option value="end">end</option>
    <option value="self-start">self-start</option>
    <option value="self-end">self-end</option>
    <option value="first baseline">first baseline</option>
    <option value="last baseline">last baseline</option>

    <option value="safe center">safe center</option>
    <option value="unsafe center">unsafe center</option>
    <option value="safe right">safe right</option>
    <option value="unsafe right">unsafe right</option>
    <option value="safe end">safe end</option>
    <option value="unsafe end">unsafe end</option>
    <option value="safe self-end">safe self-end</option>
    <option value="unsafe self-end">unsafe self-end</option>
    <option value="safe flex-end">safe flex-end</option>
    <option value="unsafe flex-end">unsafe flex-end</option>
  </select>
</div>
```

```js hidden
var values = document.getElementById("values");
var display = document.getElementById("display");
var container = document.getElementById("container");

values.addEventListener("change", function (evt) {
  container.style.alignItems = evt.target.value;
});

display.addEventListener("change", function (evt) {
  container.className = evt.target.value;
});
```

### Résultat

{{EmbedLiveSample("Exemples", "260px", "290px")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les boîtes flexibles CSS](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- Guide sur les boîtes flexibles : _[Les concepts de bases](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- Guide sur les boîtes flexibles : _[Aligner des objets dans un conteneur flexible](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- Guide sur les grilles : _[Aligner des objets dans une grille](/fr/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- [Le module de spécification CSS Box Alignment](/fr/docs/Web/CSS/CSS_Box_Alignment)
- La propriété {{cssxref("align-self")}}
