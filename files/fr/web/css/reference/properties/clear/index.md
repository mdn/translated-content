---
title: clear
slug: Web/CSS/Reference/Properties/clear
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [CSS](/fr/docs/Web/CSS) **`clear`** définit si un élément doit être déplacé sous les éléments [flottants](/fr/docs/Web/CSS/Reference/Properties/float) qui le précèdent (dégagement). La propriété `clear` s'applique aux éléments flottants comme aux éléments non flottants.

{{InteractiveExample("Démonstration CSS&nbsp;: clear")}}

```css interactive-example-choice
clear: none;
```

```css interactive-example-choice
clear: left;
```

```css interactive-example-choice
clear: right;
```

```css interactive-example-choice
clear: both;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="floated-left">Gauche</div>
    <div class="floated-right">Droite</div>
    <div class="transition-all" id="example-element">
      Autant de boue dans les rues que si les eaux venaient à peine de se
      retirer de la surface de la terre, et il ne serait pas étonnant de croiser
      un Megalosaurus, long d'une douzaine de mètres, se dandinant comme un
      lézard éléphantin dans Holborn Hill.
    </div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  padding: 0.75em;
  text-align: left;
  line-height: normal;
}

.floated-left {
  border: solid 10px #ffc129;
  background-color: rgb(81 81 81 / 0.6);
  padding: 1em;
  float: left;
}

.floated-right {
  border: solid 10px #ffc129;
  background-color: rgb(81 81 81 / 0.6);
  padding: 1em;
  float: right;
  height: 150px;
}
```

## Syntaxe

```css
/* Valeurs avec mot-clé */
clear: none;
clear: left;
clear: right;
clear: both;
clear: inline-start;
clear: inline-end;

/* Valeurs globales */
clear: inherit;
clear: initial;
clear: revert;
clear: revert-layer;
clear: unset;
```

### Valeurs

- `none`
  - : Un mot-clé qui indique que l'élément n'est pas déplacé vers le bas pour dégager le flottement.
- `left`
  - : Un mot-clé qui indique que l'élément est déplacé vers le bas afin de dégager les flottements à _gauche_.
- `right`
  - : Un mot-clé qui indique que l'élément est déplacé vers le bas afin de dégager les flottements à _droite_.
- `both`
  - : Un mot-clé qui indique que l'élément est déplacé vers le bas afin de dégager les flottements _à gauche et à droite_.
- `inline-start`
  - : Un mot-clé qui indique que l'élément est déplacé vers le bas pour dégager le contenu vers le début du bloc englobant. Autrement dit, cela dégage à gauche pour les scripts de gauche à droite (_LTR_ pour _left to right_) et dégage à droite pour les scripts de droite à gauche (_RTL_ pour _droite à gauche_).
- `inline-end`
  - : Un mot-clé qui indique que l'élément est déplacé vers le bas pour dégager le contenu du côté de la fin du bloc englobant. Autrement dit, cela dégage à droite pour les scripts de gauche à droite (_LTR_ pour _left to right_) et dégage à gauche pour les scripts de droite à gauche (_RTL_ pour _droite à gauche_).

## Description

Lorsqu'elle est appliquée aux blocs non flottants, elle déplace le [bord de la bordure](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model) de l'élément vers le bas jusqu'à ce qu'il soit sous le [bord de la marge](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model) de tous les flottants concernés. La marge supérieure du bloc non flottant fusionne.

Les marges verticales entre deux éléments flottants, en revanche, ne fusionnent pas. Lorsqu'elle est appliquée aux éléments flottants, le bord de la marge de l'élément du bas est déplacé sous le bord de la marge de tous les flottants concernés. Cela affecte la position des flottants suivants, car ils ne peuvent pas être positionnés plus haut que les flottants précédents.

Les flottants concernés par le dégagement sont les flottants précédents dans le [même contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context).

> [!NOTE]
> Si un élément ne contient que des éléments flottants, sa hauteur sera nulle. Si vous souhaitez qu'il puisse toujours se redimensionner pour contenir les éléments flottants à l'intérieur, définissez la propriété {{CSSxRef("display")}} de l'élément sur [`flow-root`](/fr/docs/Web/CSS/Reference/Properties/display#flow-root).
>
> ```css
> #container {
>   display: flow-root;
> }
> ```

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### `clear: left`

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  <p class="left">Ce paragraphe est dégagé à gauche.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.left {
  border: 1px solid black;
  clear: left;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: white;
  width: 20%;
}
.red {
  float: left;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 50%;
}
```

{{EmbedLiveSample("`clear: left`", "100%", 250)}}

### `clear: right`

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  <p class="right">Ce paragraphe est dégagé à droite.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.right {
  border: 1px solid black;
  clear: right;
}
.black {
  float: right;
  margin: 0;
  background-color: black;
  color: white;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 50%;
}
```

{{EmbedLiveSample("`clear: right`", "100%", 250)}}

### `clear: both`

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor. Fusce pulvinar lacus
    ac dui.
  </p>
  <p class="red">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="both">Ce paragraphe est dégagé de chaque côté.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.both {
  border: 1px solid black;
  clear: both;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: white;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 45%;
}
```

{{EmbedLiveSample("`clear: both`", "100%", 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le modèle de boîtes CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model)
