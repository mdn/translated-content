---
title: place-content
slug: Web/CSS/Reference/Properties/place-content
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`place-content`** permet d'aligner le contenu à la fois dans les directions bloc et en ligne (c'est-à-dire les propriétés {{CSSxRef("align-content")}} et {{CSSxRef("justify-content")}}) dans un système de mise en page pertinent tel que [la grille](/fr/docs/Web/CSS/Guides/Grid_layout) ou [les boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout).

{{InteractiveExample("Démonstration CSS&nbsp;: place-content")}}

```css interactive-example-choice
place-content: end space-between;
```

```css interactive-example-choice
place-content: space-around start;
```

```css interactive-example-choice
place-content: start space-evenly;
```

```css interactive-example-choice
place-content: end center;
```

```css interactive-example-choice
place-content: end;
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
  height: 180px;
  width: 220px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Propriétés constitutives

Cette propriété est un raccourci pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("align-content")}}
- {{CSSxRef("justify-content")}}

## Syntaxe

```css
/* Valeurs décrivant l'alignement */
/* Note : align-content ne gère pas les valeurs left et right */
place-content: center start;
place-content: start center;
place-content: end left;
place-content: flex-start center;
place-content: flex-end center;

/* Valeurs décrivant l'alignement par rapport à la ligne de base */
/* Note : justify-content ne gère pas les valeurs liées à la ligne de base */
place-content: baseline center;
place-content: first baseline space-evenly;
place-content: last baseline right;

/* Valeurs décrivant la distribution de l'alignment */
place-content: space-between space-evenly;
place-content: space-around space-evenly;
place-content: space-evenly stretch;
place-content: stretch space-evenly;

/* Valeurs globales */
place-content: inherit;
place-content: initial;
place-content: revert;
place-content: revert-layer;
place-content: unset;
```

La première valeur utilisée sera celle qui correspond à {{CSSxRef("align-content")}} et la seconde valeur correspondra à {{CSSxRef("justify-content")}}.

> [!NOTE]
> Si la deuxième valeur n'est pas présente, la première valeur indiquée sera également utilisée pour `justify-content`, à condition qu'elle soit valide pour les deux propriétés. Si elle est invalide pour l'une ou l'autre, la déclaration entière sera invalide.

### Valeurs

- `start`
  - : Les éléments sont regroupés les uns contre les autres vers le bord de départ du conteneur d'alignement dans l'axe approprié.
- `end`
  - : Les éléments sont regroupés les uns contre les autres vers le bord de fin du conteneur d'alignement dans l'axe approprié.
- `flex-start`
  - : Les éléments sont regroupés les uns contre les autres vers le bord du conteneur d'alignement en fonction du côté de départ principal ou transversal du conteneur flex.
    Cela ne s'applique qu'aux éléments de mise en page flex. Pour les éléments qui ne sont pas enfants d'un conteneur flex, cette valeur est traitée comme `start`.
- `flex-end`
  - : Les éléments sont regroupés les uns contre les autres vers le bord du conteneur d'alignement en fonction du côté de fin principal ou transversal du conteneur flex.
    Cela ne s'applique qu'aux éléments de mise en page flex. Pour les éléments qui ne sont pas enfants d'un conteneur flex, cette valeur est traitée comme `end`.
- `center`
  - : Les éléments sont regroupés les uns contre les autres vers le centre du conteneur d'alignement.
- `left`
  - : Les éléments sont regroupés les uns contre les autres vers le bord gauche du conteneur d'alignement. Si l'axe de la propriété n'est pas parallèle à l'axe en ligne, cette valeur se comporte comme `start`.
- `right`
  - : Les éléments sont regroupés les uns contre les autres vers le bord droit du conteneur d'alignement dans l'axe approprié. Si l'axe de la propriété n'est pas parallèle à l'axe en ligne, cette valeur se comporte comme `start`.
- `space-between`
  - : Les éléments sont répartis de manière égale à l'intérieur du conteneur d'alignement. L'espacement entre chaque paire d'éléments adjacents est le même. Le premier élément est aligné avec le bord de départ principal, et le dernier élément est aligné avec le bord de fin principal.
- `baseline`, `first baseline`, `last baseline`
  - : Définit la participation à l'alignement sur la première ou la dernière ligne de base&nbsp;: aligne la ligne de base d'alignement du premier ou du dernier ensemble de lignes de base de la boîte avec la ligne de base correspondante dans l'ensemble partagé de première ou dernière ligne de base de toutes les boîtes de son groupe de partage de ligne de base.
    L'alignement de repli pour `first baseline` est `start`, celui pour `last baseline` est `end`.
- `space-around`
  - : Les éléments sont répartis de manière égale à l'intérieur du conteneur d'alignement. L'espacement entre chaque paire d'éléments adjacents est le même. L'espace vide avant le premier élément et après le dernier élément est égal à la moitié de l'espace entre chaque paire d'éléments adjacents.
- `space-evenly`
  - : Les éléments sont répartis de manière égale à l'intérieur du conteneur d'alignement. L'espacement entre chaque paire d'éléments adjacents, le bord de départ principal et le premier élément, et le bord de fin principal et le dernier élément, est exactement le même.
- `stretch`
  - : Si la taille combinée des éléments est inférieure à la taille du conteneur d'alignement, les éléments de taille `auto` voient leur taille augmentée de manière égale (et non proportionnelle), tout en respectant les contraintes imposées par {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (ou une fonctionnalité équivalente), de sorte que la taille combinée remplisse exactement le conteneur d'alignement.
- `safe`
  - : Utilisé avec un mot-clé d'alignement. Si le mot-clé choisi signifie que l'élément déborde du conteneur d'alignement entraînant une perte de données, l'élément est aligné comme si le mode d'alignement était `start`.
- `unsafe`
  - : Utilisé avec un mot-clé d'alignement. Quelle que soit la taille relative de l'élément et du conteneur d'alignement, et indépendamment du fait que le débordement puisse entraîner une perte de données, la valeur d'alignement donnée est respectée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Placer le contenu dans un conteneur flexible

#### HTML

```html
<div id="container">
  <div class="small">Lorem</div>
  <div class="small">Lorem<br />ipsum</div>
  <div class="large">Lorem</div>
  <div class="large">Lorem<br />ipsum</div>
  <div class="large"></div>
  <div class="large"></div>
</div>
```

```html hidden
<code>writing-mode:</code
><select id="writingMode">
  <option value="horizontal-tb" selected>horizontal-tb</option>
  <option value="vertical-rl">vertical-rl</option>
  <option value="vertical-lr">vertical-lr</option>
  <option value="sideways-rl">sideways-rl</option>
  <option value="sideways-lr">sideways-lr</option></select
><code>;</code><br />

<code>direction:</code
><select id="direction">
  <option value="ltr" selected>ltr</option>
  <option value="rtl">rtl</option></select
><code>;</code><br />

<code>place-content:</code
><select id="alignerAlignContent">
  <option value="normal">normal</option>
  <option value="first baseline">first baseline</option>
  <option value="last baseline">last baseline</option>
  <option value="baseline">baseline</option>
  <option value="space-between">space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly" selected>space-evenly</option>
  <option value="stretch">stretch</option>
  <option value="center">center</option>
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="safe">safe</option>
  <option value="unsafe">unsafe</option>
</select>
<select id="justifierAlignContent">
  <option value="normal">normal</option>
  <option value="space-between">space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly">space-evenly</option>
  <option value="stretch">stretch</option>
  <option value="center" selected>center</option>
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="left">left</option>
  <option value="right">right</option>
  <option value="safe">safe</option>
  <option value="unsafe">unsafe</option></select
><code>;</code>
```

```js hidden
function mettreAJour() {
  document.getElementById("container").style.placeContent =
    `${document.getElementById("alignerAlignContent").value} ` +
    `${document.getElementById("justifierAlignContent").value}`;
}

const alignerAlignContent = document.getElementById("alignerAlignContent");
alignerAlignContent.addEventListener("change", mettreAJour);

const justifierAlignContent = document.getElementById("justifierAlignContent");
justifierAlignContent.addEventListener("change", mettreAJour);

const writingM = document.getElementById("writingMode");
writingM.addEventListener("change", (evt) => {
  document.getElementById("container").style.writingMode = evt.target.value;
});

const direction = document.getElementById("direction");
direction.addEventListener("change", (evt) => {
  document.getElementById("container").style.direction = evt.target.value;
});
```

#### CSS

```css
#container {
  display: flex;
  height: 240px;
  width: 240px;
  flex-wrap: wrap;
  background-color: #8c8c8c;
  writing-mode: horizontal-tb; /* Peut être modifié dans l'exemple interactif */
  direction: ltr; /* Peut être modifié dans l'exemple interactif */
  place-content: flex-end center; /* Peut être modifié dans l'exemple interactif */
}

div > div {
  border: 2px solid #8c8c8c;
  width: 50px;
  background-color: #a0c8ff;
}

.small {
  font-size: 12px;
  height: 40px;
}

.large {
  font-size: 14px;
  height: 50px;
}
```

#### Résultat

{{EmbedLiveSample("Placer le contenu dans un conteneur flexible", 370, 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("align-content")}}
- La propriété {{CSSxRef("justify-content")}}
- [Concepts de base des boîtes flexibles en CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Aligner des objets dans un conteneur flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Alignement des boîtes dans une grille](/fr/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- Le guide [de l'alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment)
