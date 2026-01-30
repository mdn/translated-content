---
title: align-content
slug: Web/CSS/Reference/Properties/align-content
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`align-content`** permet de définir la répartition de l'espace entre et autour des éléments de contenu le long de [l'axe transversal](/fr/docs/Glossary/Cross_Axis) d'un [flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout), ou de l'axe de bloc d'un élément [grille](/fr/docs/Web/CSS/Guides/Grid_layout) ou [de niveau bloc](/fr/docs/Glossary/Block-level_content).

Cette propriété n'a aucun effet sur les conteneurs flexibles à une seule ligne (c'est-à-dire ceux avec `flex-wrap: nowrap`).

L'exemple interactif ci-dessous utilise la mise en page en grille pour illustrer certaines des valeurs de cette propriété.

{{InteractiveExample("Démonstration CSS&nbsp;: align-content")}}

```css interactive-example-choice
align-content: start;
```

```css interactive-example-choice
align-content: center;
```

```css interactive-example-choice
align-content: space-between;
```

```css interactive-example-choice
align-content: space-around;
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
  grid-template-columns: 60px 60px;
  grid-auto-rows: 40px;
  column-gap: 10px;
  height: 180px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Syntaxe

```css
/* Alignement normal */
align-content: normal;

/* Alignement le long de l'axe */
/* align-content ne prend pas en charge les valeurs left et right */
align-content: center;
align-content: start;
align-content: end;
align-content: flex-start;
align-content: flex-end;

/* Alignement sur la ligne de base */
align-content: baseline;
align-content: first baseline;
align-content: last baseline;

/* Répartition de l'espace */
align-content: space-between;
align-content: space-around;
align-content: space-evenly;
align-content: stretch;

/* Gestion du dépassement */
align-content: safe center;
align-content: unsafe center;

/* Valeurs globales */
align-content: inherit;
align-content: initial;
align-content: revert;
align-content: revert-layer;
align-content: unset;
```

### Valeurs

- `normal`
  - : Les éléments sont groupés sur leur position par défaut, comme si `align-content` n'avait pas été défini.
- `start`
  - : Les éléments sont regroupés vers le bord au début de l'axe de bloc.
- `center`
  - : Les éléments sont regroupés au centre de l'axe de bloc.
- `end`
  - : Les éléments sont regroupés vers le bord à la fin de l'axe de bloc.
- `flex-start`
  - : Les éléments flexibles sont regroupés vers le bord au début de l'axe de bloc. Cette valeur ne s'applique qu'aux éléments fils d'un conteneur flexible, sinon elle est synonyme de `start`.
- `flex-end`
  - : Les éléments flexibles sont regroupés vers le bord au début de l'axe de bloc. Cette valeur ne s'applique qu'aux éléments fils d'un conteneur flexible, sinon elle est synonyme de `end`.
- `baseline`, `first baseline`, `last baseline`
  - : Définir la participation à l'alignement sur la première ou la dernière ligne de base&nbsp;: aligner la ligne de base d'alignement de la première ou de la dernière série de lignes de base de la boîte avec la ligne de base correspondante dans la série partagée (première ou dernière) de toutes les boîtes de son groupe de partage de ligne de base.

    ![La ligne de base est la ligne sur laquelle reposent la plupart des lettres et en dessous de laquelle descendent les jambages.](410px-typography_line_terms.svg.png)

    L'alignement de secours pour `first baseline` est `start`, celui pour `last baseline` est `end`.

- `space-between`
  - : Les éléments sont équirépartis le long de l'axe en bloc. L'espace obtenu est le même entre chaque élément, le premier élément est aligné sur le bord au début du conteneur et le dernier élément est aligné sur le bord à la fin du conteneur.
- `space-around`
  - : Les éléments sont équirépartis le long de l'axe en bloc. L'espace obtenu est le même entre chaque élément, la moitié de cet espace est utilisée entre le premier élément et le bord au début du conteneur et la moitié de cet espace est utilisée entre le dernier élément et le bord à la fin du conteneur
- `space-evenly`
  - : Les éléments sont équirépartis le long de l'axe en bloc. L'espace obtenu est le même entre chaque élément, entre le premier élément et le bord du conteneur et entre le dernier élément et le bord du conteneur.
- `stretch`
  - : Si la somme des tailles des éléments est inférieure à la taille du conteneur pour l'axe en bloc, les éléments dimensionnés automatiquement seront élargis de la même longueur tout en respectant les contraintes imposées par {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (ou par les fonctionnalités équivalentes), afin que l'ensemble des éléments remplisse exactement le conteneur.
- `safe`
  - : Ce mot-clé est utilisé avec un mot-clé pour l'alignement. Si l'élément dépasse du conteneur avec la valeur d'alignement indiquée, l'élément sera alors aligné avec la valeur `start`.
- `unsafe`
  - : Ce mot-clé est utilisé avec un mot-clé pour l'alignement. Quelle que soit la taille et le dépassement éventuellement occasionné, l'élément est aligné avec la valeur indiquée.

> [!NOTE]
> Les valeurs `<content-distribution>` (`space-between`, `space-around`, `space-evenly` et `stretch`) n'ont aucun effet dans la [mise en page de bloc](/fr/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables#align-content_et_justify-content) car tout le contenu de ce bloc est traité comme un seul {{Glossary("Alignment_Subject", "sujet d'alignement")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Effets des différentes valeurs de `align-content`

Dans cet exemple, vous pouvez basculer entre trois différentes valeurs de la propriété {{CSSxRef("display")}}, y compris `flex`, `grid` et `block`. Vous pouvez aussi basculer entre les différentes valeurs pour `align-content`.

### HTML

```html
<section>
  <div class="olive">Olive</div>
  <div class="coral">Corail</div>
  <div class="deepskyblue">Bleu<br />ciel<br />profond</div>
  <div class="orchid">Orchidée</div>
  <div class="slateblue">Ardoise bleue</div>
  <div class="maroon">Marron</div>
</section>
```

```html hidden
<fieldset class="controls">
  <legend>Contrôles</legend>
  <div class="row">
    <label for="display">display: </label>
    <select id="display">
      <option value="block" selected>block</option>
      <option value="flex">flex</option>
      <option value="grid">grid</option>
    </select>
  </div>
  <div class="row">
    <label for="alignContent">align-content: </label>
    <select id="alignContent">
      <option value="normal" selected>normal</option>
      <option value="start">start</option>
      <option value="center">center</option>
      <option value="end">end</option>
      <option value="flex-start">flex-start</option>
      <option value="flex-end">flex-end</option>
      <option value="space-between">space-between</option>
      <option value="space-around">space-around</option>
      <option value="space-evenly">space-evenly</option>
    </select>
  </div>
  <p>CSS appliqué</p>
  <pre>
section {
  display: <span id="displayStyle">block</span>;
  align-content: <span id="align">normal</span>
}
  </pre>
</fieldset>
```

### CSS

```css hidden
body {
  font-size: 1.25rem;
  display: flex;
  gap: 1rem;
}
section div {
  font-family: monospace;
  padding: 3px;
}
```

```css
section {
  border: solid 1.5px tomato;
  height: 300px;
  width: 300px;
  flex-wrap: wrap; /* utilisé uniquement par flex */
  gap: 0.2rem; /* non utilisé par block */
}
.olive {
  background-color: olive;
}
.coral {
  background-color: coral;
}
.deepskyblue {
  background-color: deepskyblue;
}
.orchid {
  background-color: orchid;
}
.slateblue {
  background-color: slateblue;
  color: white;
}
.maroon {
  background-color: maroon;
  color: white;
}
```

```js hidden
const alignContent = document.querySelector("#alignContent");
const display = document.querySelector("#display");
const container = document.querySelector("section");
const displayStyle = document.querySelector("#displayStyle");
const alignStyle = document.querySelector("#align");

alignContent.addEventListener("change", () => {
  updatePage();
});
display.addEventListener("change", () => {
  updatePage();
});
function updatePage() {
  const alVal = alignContent.value;
  const dVal = display.value;
  container.style.alignContent = alVal;
  container.style.display = dVal;
  alignStyle.innerText = alVal;
  displayStyle.innerText = dVal;
}
updatePage();
```

### Résultat

Essayez de changer la valeur de `display` et la valeur de `align-content`.

{{EmbedLiveSample("Exemples", 260, 310)}}

Dans la [mise en page de bloc](/fr/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables#align-content_et_justify-content), les éléments enfants sont traités comme un seul élément, ce qui signifie que `space-between`, `space-around` et `space-evenly` se comportent différemment.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Concepts de base des boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Aligner des éléments dans un conteneur flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Alignement des boîtes dans une grille](/fr/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [Alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment)
- [Disposition en bloc et en ligne dans le flux normal](/fr/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [Contenu de niveau bloc](/fr/docs/Glossary/Block-level_content)
- La propriété {{CSSxRef("display")}}
