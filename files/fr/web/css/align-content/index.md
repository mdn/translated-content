---
title: align-content
slug: Web/CSS/align-content
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/align-content
---
{{CSSRef}}

La propriété CSS **`align-content`** définit la façon dont l'espace est réparti entre et autour des éléments le long de l'axe en bloc du conteneur (c'est-à-dire l'axe orthogonal à l'axe d'écriture) lorsque celui-ci est [un conteneur de boîte flexible](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout) et le long de l'axe principal lorsque le conteneur est une grille.

L'exemple qui suit utilise une grille comme conteneur afin d'illustrer le comportement des valeurs de cette propriété.

{{EmbedInteractiveExample("pages/css/align-content.html")}}

Cette propriété n'aura aucun effet sur les boîtes flexibles disposées sur une seule ligne (celles avec `flex-wrap: nowrap` par exemple).

## Syntaxe

```css
/* Alignement le long de l'axe */
/* Note : align-content ne prend pas en charge les valeurs left et right */
align-content: center;     /* Les éléments sont groupés au centre */
align-content: start;      /* Les éléments sont groupés au début  */
align-content: end;        /* Les éléments sont groupés à la fin */
align-content: flex-start; /* Les éléments flexibles sont groupés au début */
align-content: flex-end;   /* Les éléments flexibles sont groupés à la fin */

/* Alignement normal */
align-content: normal;

/* Alignement sur la ligne de base */
align-content: baseline;
align-content: first baseline;
align-content: last baseline;

/* Répartition de l'espace */
align-content: space-between; /* L'espace est réparti entre
                                 les éléments, le premier est
                                 accolé au bord et le dernier
                                 également. */
align-content: space-around;  /* L'espace est réparti entre les
                                 éléments avec un demi-espace
                                 au début et à la fin */
align-content: space-evenly;  /* L'espace est réparti entre les
                                 éléments et autour */
align-content: stretch;       /* Les éléments dimensionnés avec
                                 auto sont étirés également
                                 afin de remplir le conteneur*/

/* Gestion du dépassement */
align-content: safe center;
align-content: unsafe center;

/* Valeurs globales */
align-content: inherit;
align-content: initial;
align-content: unset;
```

### Valeurs

- `start`
  - : Les éléments sont regroupés vers le bord au début de l'axe de bloc.
- `end`
  - : Les éléments sont regroupés vers le bord à la fin de l'axe de bloc.
- `flex-start`
  - : Les éléments flexibles sont regroupés vers le bord au début de l'axe de bloc. Cette valeur ne s'applique qu'aux éléments fils d'un conteneur flexible, sinon elle est synonyme de `start`.
- `flex-end`
  - : Les éléments flexibles sont regroupés vers le bord au début de l'axe de bloc. Cette valeur ne s'applique qu'aux éléments fils d'un conteneur flexible, sinon elle est synonyme de `end`.
- `center`
  - : Les éléments sont regroupés au centre de l'axe de bloc.
- `normal`
  - : Les éléments sont groupés sur leur position par défaut, comme si `align-content` n'avait pas été défini.
- `baseline first baseline`
  `last baseline`
  - : ![La ligne de base est la ligne sur laquelle reposent la plupart des lettres et en dessous de laquelle le jambage des caractéres descend.](410px-typography_line_terms.svg.png)Ces valeurs permettent de définir l'alignement par rapport à la ligne de base pour l'élément du conteneur avec la ligne de base la plus haute ou la plus basse.
    Si `first baseline` n'est pas prise en charge, la valeur correspondra à `start`, si `last baseline` n'est pas prise en charge, la valeur correspondra à `end`.
- `space-between`
  - : Les éléments sont équirépartis le long de l'axe en bloc. L'espace obtenu est le même entre chaque élément, le premier élément est aligné sur le bord au début du conteneur et le dernier élément est aligné sur le bord à la fin du conteneur.
- `space-around`
  - : Les éléments sont équirépartis le long de l'axe en bloc. L'espace obtenu est le même entre chaque élément, la moitié de cet espace est utilisée entre le premier élément et le bord au début du conteneur et la moitié de cet espace est utilisée entre le dernier élément et le bord à la fin du conteneur
- `space-evenly`
  - : Les éléments sont équirépartis le long de l'axe en bloc. L'espace obtenu est le même entre chaque élément, entre le premier élément et le bord du conteneur et entre le dernier élément et le bord du conteneur.
- `stretch`
  - : Si la somme des tailles des éléments est inférieure à la taille du conteneur pour l'axe en bloc, les éléments dimensionnés automatiquement seront élargis de la même longueur tout en respectant les contraintes imposées par {{cssxref("max-height")}}/{{cssxref("max-width")}} (ou par les fonctionnalités équivalentes), afin que l'ensemble des éléments remplisse exactement le conteneur.
- `safe`
  - : Ce mot-clé est utilisé avec un mot-clé pour l'alignement. Si l'élément dépasse du conteneur avec la valeur d'alignement indiquée, l'élément sera alors aligné avec la valeur `start`.
- `unsafe`
  - : Ce mot-clé est utilisé avec un mot-clé pour l'alignement. Quelle que soit la taille et le dépassement éventuellement occasionné, l'élément est aligné avec la valeur indiquée.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
#container {
  height:200px;
  width: 240px;
  align-content: center; /* Cette valeur peut être changée dans la démonstration */
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
  <label for="values">align-content: </label>
  <select id="values">
    <option value="normal">normal</option>
    <option value="stretch">stretch</option>
    <option value="flex-start">flex-start</option>
    <option value="flex-end">flex-end</option>
    <option value="center" selected>center</option>
    <option value="space-between">space-between</option>
    <option value="space-around">space-around</option>
    <option value="space-evenly">space-evenly</option>

    <option value="start">start</option>
    <option value="end">end</option>
    <option value="left">left</option>
    <option value="right">right</option>

    <option value="baseline">baseline</option>
    <option value="first baseline">first baseline</option>
    <option value="last baseline">last baseline</option>

    <option value="safe center">safe center</option>
    <option value="unsafe center">unsafe center</option>
    <option value="safe right">safe right</option>
    <option value="unsafe right">unsafe right</option>
    <option value="safe end">safe end</option>
    <option value="unsafe end">unsafe end</option>
    <option value="safe flex-end">safe flex-end</option>
    <option value="unsafe flex-end">unsafe flex-end</option>
  </select>
</div>
```

```js hidden
var values = document.getElementById('values');
var display = document.getElementById('display');
var container = document.getElementById('container');

values.addEventListener('change', function (evt) {
  container.style.alignContent = evt.target.value;
});

display.addEventListener('change', function (evt) {
  container.className = evt.target.value;
});
```

### Résultat

{{EmbedLiveSample("Exemples", 260, 290)}}

## Spécifications

| Spécification                                                                                            | État                                     | Commentaires                                                                                          |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| {{SpecName("CSS3 Box Alignment", "#propdef-align-content", "align-content")}} | {{Spec2("CSS3 Box Alignment")}} | Ajout des valeurs `[ first \| last ]? baseline`, `start`, `end`, `left`, `right` et `unsafe \| safe`. |
| {{SpecName("CSS3 Flexbox", "#align-content", "align-content")}}                     | {{Spec2("CSS3 Flexbox")}}         | Définition initiale.                                                                                  |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.align-content")}}

### Prise en charge pour les dispositions flexibles (_Flexbox_)

{{Compat("css.properties.align-content.flex_context")}}

### Prise en charge pour les dispositions avec les grilles CSS

{{Compat("css.properties.align-content.grid_context")}}

## Voir aussi

- [Utiliser les boîtes flexibles](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- Guide sur les grilles : _[Aligner des objets dans une grille](/fr/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- Guide sur les boîtes flexibles : _[Les concepts de bases](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- Guide sur les boîtes flexibles : _[Aligner des objets dans un conteneur flexible](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- [Le module de spécification CSS Box Alignment](/fr/docs/Web/CSS/CSS_Box_Alignment)
