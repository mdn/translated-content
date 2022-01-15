---
title: À propos du bloc conteneur
slug: Web/CSS/Containing_block
tags:
  - CSS
  - Guide
  - Reference
translation_of: Web/CSS/Containing_block
original_slug: Web/CSS/A_Propos_Du_Bloc_Conteneur
---
{{CSSRef}}

Le **bloc englobant (_containing block_)** affecte souvent la taille et la position d'un élément. La plupart du temps, le bloc englobant est la [zone de contenu](/en-US/docs/Learn/CSS/Building_blocks/The_box_model#les_propri%c3%a9t%c3%a9s_des_bo%c3%aetes) de l'ancêtre de [bloc](/fr/docs/Web/HTML/Block-level_elements) le plus proche mais cette règle n'est pas absolue. Dans cet article, nous verrons les différents facteurs qui participent à la définition du bloc englobant.

Lorsqu'un agent utilisateur (un navigateur web par exemple) dispose un document, il génère une boîte pour chaque élément du document. Chaque boîte est divisée en quatre zones :

1.  La zone de contenu (_content area_)
2.  La zone de remplissage (_padding area_)
3.  La zone de bordure (_border area_)
4.  La zone de marge (_margin area_)

![Diagram of the box model](box-model.png)

> **Note :** Voir [cet article pour découvrir le modèle de boîtes](/fr/docs/Apprendre/CSS/Introduction_%C3%A0_CSS/Le_mod%C3%A8le_de_bo%C3%AEte) en CSS.

On pourrait penser que le bloc englobant d'un élément est toujours la zone de contenu de son élément parent. Toutefois, ce n'est pas toujours le cas. Voyons donc les facteurs qui déterminent ce bloc englobant.

## Les effets du bloc englobant

Avant d'aller plus loin, voyons l'impact du bloc englobant sur un élément.

Les dimensions et la position d'un élément sont souvent dépendants du bloc englobant. Les valeurs en pourcentages appliquées à des propriétés comme {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} sont calculées relativement à la taille du bloc englobant. Il en va de même pour les propriétés de décalage des éléments positionnés de façon absolue (c'est-à-dire avec {{cssxref("position")}} qui vaut `absolute` ou `fixed`).

## Identifier le bloc englobant

Le bloc englobant est entièrement déterminé par la valeur de la propriété {{cssxref("position")}} pour l'élément :

- Si la propriété `position` vaut **`static`**, **`relative`** ou **`sticky`**, le bloc englobant est constitué par le bord de la boîte de contenu de l'ancêtre le plus proche qui est un conteneur de bloc (c'est-à-dire qui est un élément avec `display` qui vaut `inline-block`, `block` ou `list-item`) ou qui crée un contexte de formatage (tel qu'un conteneur de tableau, un conteneur flexible, un conteneur de grille ou le conteneur du bloc même).
- Si la propriété `position` vaut **`absolute`**, le bloc englobant est constitué par le bord de la boîte de remplissage (_padding_) de l'ancêtre le plus proche dont la valeur de `position` est différente de `static` (`fixed`, `absolute`, `relative` ou `sticky`).
- Si la propriété `position` vaut **`fixed`**, le bloc englobant est formé par le {{glossary("viewport")}} (ou la page dans le cas des média paginés).
- Si la propriété `position` vaut **`absolute`** ou `fixed`, le bloc englobant peut également être constitué par le bord de la boîte de remplissage le plus proche qui a :

  1.  Une propriété {{cssxref("transform")}} ou {{cssxref("perspective")}} avec une valeur différente de `none`
  2.  Une propriété {{cssxref("will-change")}} qui vaut `transform` ou `perspective`
  3.  Une propriété {{cssxref("filter")}} différente de `none` ou une propriété `will-change` différente of `filter` (ne fonctionne que pour Firefox).
  4.  Une propriété {{cssxref("contain")}} qui vaut `paint`.

> **Note :** Le bloc englobant contenant l'élément racine ({{HTMLElement("html")}}) est situé dans un rectangle appelé **bloc englobant initial**. Ce dernier a les dimensions de la zone d'affichage (_viewport_) ou de la page (pour les média paginés).

## Calcul des pourcentages à partir du bloc englobant

Comme mentionné ci-avant, lorsque certaines propriétés ont une valeur en pourcentage, la valeur calculée dépend du bloc contenant l'élément. Les propriétés qui fonctionnent de cette manière sont les propriétés **_box model_** et **_offset_** :

1.  Les valeurs calculées des propriétés {{cssxref("height")}}, {{cssxref("top")}} et {{cssxref("bottom")}} sont construites à partir de la hauteur du bloc englobant.
2.  Les valeurs calculées des propriétés {{cssxref("width")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("padding")}} et {{cssxref("margin")}} sont calculées à partir de la largeur (`width`) du bloc englobant.

## Quelques exemples

Le code HTML utilisé pour les exemples suivants sera :

```html
<body>
  <section>
    <p>Et voici un paragraphe !</p>
  </section>
</body>
```

### Premier exemple

Dans cet exemple, le paragraphe est positionné de façon statique et son bloc englobant est la zone de contenu de {{HTMLElement("section")}} car cet élément est l'ancêtre le plus proche qui est un conteneur de bloc.

```html hidden
<body>
  <section>
    <p>Et voici un paragraphe !</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  display: block;
  width: 400px;
  height: 160px;
  background: lightgray;
}

p {
  width: 50%;   /* == 400px * .5 = 200px */
  height: 25%;  /* == 160px * .25 = 40px */
  margin: 5%;   /* == 400px * .05 = 20px */
  padding: 5%;  /* == 400px * .05 = 20px */
  background: cyan;
}
```

{{EmbedLiveSample('Premier_exemple','100%','300')}}

### Deuxième exemple

Dans cet exemple, le bloc englobant est formé par l'élément {{HTMLElement("body")}} car `<section>` n'est pas un conteneur de bloc en raison de `display: inline` et il ne crée pas de contexte de formatage.

```html
<body>
  <section>
    <p>Et voici un paragraphe !</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  display: inline;
  background: lightgray;
}

p {
  width: 50%;     /* == half the body's width */
  height: 200px;  /* Note: a percentage would be 0 */
  background: cyan;
}
```

{{EmbedLiveSample('Deuxième_exemple','100%','300')}}

### Troisième exemple

Ici, le bloc englobant du paragraphe est `<section>` car la propriété `position` de ce dernier vaut `absolute`. Les valeurs exprimées en pourcentages et associées au paragraphe sont relatives à la zone de remplissage du bloc englobant (ce ne serait pas le cas si la propriété {{cssxref("box-sizing")}} du bloc englobant valait `border-box`).

```html hidden
<body>
  <section>
    <p>Et voici un paragraphe !</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  position: absolute;
  left: 30px;
  top: 30px;
  width: 400px;
  height: 160px;
  padding: 30px 20px;
  background: lightgray;
}

p {
  position: absolute;
  width: 50%;   /* == (400px + 20px + 20px) * .5 = 220px */
  height: 25%;  /* == (160px + 30px + 30px) * .25 = 55px */
  margin: 5%;   /* == (400px + 20px + 20px) * .05 = 22px */
  padding: 5%;  /* == (400px + 20px + 20px) * .05 = 22px */
  background: cyan;
}
```

{{EmbedLiveSample('Troisième_exemple','100%','300')}}

### Quatrième exemple

Dans cet exemple, la propriété `position` du paragraphe vaut `fixed`. Le bloc englobant est donc le bloc englobant initial (c'est-à-dire le _viewport_ pour les écrans). Aussi, les dimensions du paragraphe changent selon la taille de la fenêtre du navigateur.

```html hidden
<body>
  <section>
    <p>Et voici un paragraphe !</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  width: 400px;
  height: 480px;
  margin: 30px;
  padding: 15px;
  background: lightgray;
}

p {
  position: fixed;
  width: 50%;   /* == (50vw - (width of vertical scrollbar)) */
  height: 50%;  /* == (50vh - (height of horizontal scrollbar)) */
  margin: 5%;   /* == (5vw - (width of vertical scrollbar)) */
  padding: 5%;  /* == (5vw - (width of vertical scrollbar)) */
  background: cyan;
}
```

{{EmbedLiveSample('Quatrième_exemple','100%','300')}}

### Cinquième exemple

Dans cet exemple, la propriété `position` du paragraphe vaut `absolute`. Son bloc englobant est donc `<section>` car c'est l'ancêtre le plus proche dont la propriété {{cssxref("transform")}} ne vaut pas `none`.

```html hidden
<body>
  <section>
    <p>Et voici un paragraphe !</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  transform: rotate(0deg);
  width: 400px;
  height: 160px;
  background: lightgray;
}

p {
  position: absolute;
  left: 80px;
  top: 30px;
  width: 50%;   /* == 200px */
  height: 25%;  /* == 40px */
  margin: 5%;   /* == 20px */
  padding: 5%;  /* == 20px */
  background: cyan;
}
```

{{EmbedLiveSample('Cinquième_exemple','100%','300')}}

## Voir aussi

- La propriété {{cssxref("all")}} permet de réinitialiser l'ensemble des déclarations CSS dans un certain état.
