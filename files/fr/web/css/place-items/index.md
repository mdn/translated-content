---
title: place-items
slug: Web/CSS/place-items
tags:
  - CSS
  - Propriété
  - Propriété raccourcie
  - Reference
translation_of: Web/CSS/place-items
---
{{CSSRef}}

La propriété raccourcie **`place-items`** définit les valeurs utilisées pour les propriétés {{cssxref("align-items")}} et {{cssxref("justify-items")}}. La première valeur fournie est utilisée pour `align-items` et la seconde est utilisée pour `justify-items`. S'il n'y a pas de seconde valeur fournie, c'est la première qui est reprise pour `justify-items`.

{{EmbedInteractiveExample("pages/css/place-items.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
place-items: auto center;
place-items: normal start;

/* Alignement géométrique */
place-items: center normal;
place-items: start auto;
place-items: end normal;
place-items: self-start auto;
place-items: self-end normal;
place-items: flex-start auto;
place-items: flex-end normal;
place-items: left auto;
place-items: right normal;

/* Alignement par rapport à la ligne de base */
place-items: baseline normal;
place-items: first baseline auto;
place-items: last baseline normal;
place-items: stretch auto;

/* Valeurs globales */
place-items: inherit;
place-items: initial;
place-items: unset;
```

### Valeurs

- `auto`
  - : La valeur utilisée est celle de `justify-items` pour l'élément parent sauf si l'élément n'a pas de parent ou qu'il est positionné de façon absolue auquel cas `auto` sera synonyme de `normal`.
- `normal`

  - : L'effet de ce mot-clé depend du mode de disposition utilisé :

    - Pour les dispositions en bloc, ce mot-clé est synonyme de `start`.
    - Pour les dispositions absolues, ce mot-clé se comporte comme `start` pour les éléments remplacés ou comme `stretch` pour tous les autres éléments.
    - Pour les cellules de tableaux, ce mot-clé n'a pas de sens et cette propriété est ignorée.
    - Pour les dispositions utilisant des boîtes flexibles, ce mot-clé n'a pas de sens et cette propriété est ignorée.
    - Pour les dispositions en grille, ce mot-clé se comporte comme `stretch` sauf pour les éléments qui ont des dimensions intrinsèques ou des contraintes de ratio, auquel cas cette valeur est synonyme de `start`.

- `start`
  - : L'élément est aligné au début de l'axe dans la direction correspondante.
- `end`
  - : L'élément est aligné à la fin de l'axe dans la direction correspondante.
- `flex-start`
  - : Les éléments sont regroupés vers le début du conteneur flexible pour l'axe correspondant.
    Cette valeur ne s'applique qu'aux éléments flexibles. Pour les éléments qui ne font pas partie d'un conteneur flexible, cette valeur correspond à `start`.
- `flex-end`
  - : Les éléments sont regroupés vers la fin du conteneur flexible pour l'axe correspondant.
    Cette valeur ne s'applique qu'aux éléments flexibles. Pour les éléments qui ne font pas partie d'un conteneur flexible, cette valeur correspond à `end`.
- `self-start`
  - : Les éléments sont alignés sur le bord de leur boîte vers le début de l'axe correspondant.
- `self-end`
  - : Les éléments sont alignés sur le bord de leur boîte vers la fin de l'axe correspondant.
- `center`
  - : L'élément est centré le long de l'axe correspondant.
- `left`
  - : L'élément est aligné sur le bord gauche du conteneur. Si l'axe de la propriété n'est pas parallèle à l'axe en ligne, cette valeur se comporte comme `start`.
- `right`
  - : L'élément est aligné sur le bord droit du conteneur. Si l'axe de la propriété n'est pas parallèle à l'axe en ligne, cette valeur se comporte comme `start`.
- `baseline first baseline`
  `last baseline`
  - : Ces valeurs permettent de définir l'alignement par rapport à la ligne de base pour l'élément du conteneur avec la ligne de base la plus haute ou la plus basse.
    Si `first baseline` n'est pas prise en charge, la valeur correspondra à `start`, si `last baseline` n'est pas prise en charge, la valeur correspondra à `end`.
- `stretch`
  - : Si la somme des tailles des éléments est inférieure à la taille du conteneur, les éléments dimensionnés automatiquement seront élargis de la même longueur tout en respectant les contraintes imposées par {{cssxref("max-height")}}/{{cssxref("max-width")}} (ou par les fonctionnalités équivalentes), afin que l'ensemble des éléments remplisse exactement le conteneur.

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
#container {
  height:200px;
  width: 240px;
  place-items: center; /* Cette valeur peut être modifiée dans l'exemple */
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
```

```css hidden
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

```html hidden
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
  <label for="values">place-items: </label>
  <select id="values">
    <option value="start">start</option>
    <option value="center">center</option>
    <option value="end">end</option>
    <option value="left">left</option>
    <option value="right">right</option>
    <option value="auto center">auto center</option>
    <option value="normal start">normal start</option>
    <option value="center normal">center normal</option>
    <option value="start auto">start auto</option>
    <option value="end normal">end normal</option>
    <option value="self-start auto">self-start auto</option>
    <option value="self-end normal">self-end normal</option>
    <option value="flex-start auto">flex-start auto</option>
    <option value="flex-end normal">flex-end normal</option>
    <option value="left auto">left auto</option>
    <option value="right normal">right normal</option>
    <option value="baseline normal">baseline normal</option>
    <option value="first baseline auto">first baseline auto</option>
    <option value="last baseline normal">last baseline normal</option>
    <option value="stretch auto">stretch auto</option>
  </select>
</div>
```

```js hidden
var values = document.getElementById('values');
var display = document.getElementById('display');
var container = document.getElementById('container');

values.addEventListener('change', function (evt) {
  container.style.placeItems = evt.target.value;
});

display.addEventListener('change', function (evt) {
  container.className = evt.target.value;
});
```

### Résultat

{{EmbedLiveSample("Exemples", 260, 290)}}

## Spécifications

| Spécification                                                                                        | État                                     | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName("CSS3 Box Alignment", "#place-items-property", "place-items")}} | {{Spec2('CSS3 Box Alignment')}} | Définition initiale. |

{{CSSInfo}}

## Compatibilité des navigateurs

### Prise en charge pour les dispositions flexibles

{{Compat("css.properties.place-items.flex_context")}}

### Prise en charge pour les grilles

{{Compat("css.properties.place-items.grid_context")}}

## Voir aussi

- Guide sur les grilles : _[Aligner des objets dans une grille](/fr/docs/Web/CSS/CSS_Grid_Layout/Alignement_des_boîtes_avec_les_grilles_CSS)_
- Guide sur les boîtes flexibles : _[Les concepts de bases](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Concepts_de_base_flexbox)_
- Guide sur les boîtes flexibles : _[Aligner des objets dans un conteneur flexible](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Aligner_des_éléments_dans_un_conteneur_flexible)_
- [Le module de spécification CSS Box Alignment](/fr/docs/Web/CSS/CSS_Box_Alignment)
- Les propriétés détaillées correspondantes :

  - {{cssxref("align-items")}}
  - {{cssxref("justify-items")}}

- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}
