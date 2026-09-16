---
title: Disposition et bloc englobant
slug: Web/CSS/Guides/Display/Containing_block
l10n:
  sourceCommit: 19497692665c3551b4097af5cd9f52f84564cefd
---

La taille et la position d'un élément sont souvent impactées par son **bloc englobant**. La plupart du temps, le bloc englobant est la [zone de contenu](/fr/docs/Web/CSS/Guides/Box_model/Introduction#zone_de_contenu) de l'ancêtre de [bloc](/fr/docs/Glossary/Block-level_content) le plus proche, mais ce n'est pas toujours le cas. Dans cet article, nous examinons les facteurs qui déterminent le bloc englobant d'un élément.

Lorsqu'un agent utilisateur (tel que votre navigateur) dispose un document, il génère une boîte pour chaque élément. Chaque boîte est divisée en quatre zones&nbsp;:

1. La zone de contenu (<i lang="en">content area</i>)
2. La zone de remplissage (<i lang="en">padding area</i>)
3. La zone de bordure (<i lang="en">border area</i>)
4. La zone de marge (<i lang="en">margin area</i>)

![Diagramme du modèle de boîte](box-model.png)

Beaucoup de développeur·euse·s pensent que le bloc englobant d'un élément est toujours la zone de contenu de son parent, mais ce n'est pas nécessairement vrai. Voyons quels sont les facteurs qui déterminent le bloc englobant d'un élément.

## Les effets du bloc englobant

Avant d'aller plus loin, voyons l'impact du bloc englobant sur un élément, il est utile de savoir pourquoi cela importe en premier lieu.

Les dimensions et la position d'un élément sont souvent dépendants du bloc englobant. Les valeurs en pourcentages appliquées à des propriétés comme {{CSSxRef("width")}}, {{CSSxRef("height")}}, {{CSSxRef("padding")}}, {{CSSxRef("margin")}} sont calculées relativement à la taille du bloc englobant. Il en va de même pour les propriétés de décalage des éléments positionnés de façon absolue (c'est-à-dire avec {{CSSxRef("position")}} qui vaut `absolute` ou `fixed`).

## Identifier le bloc englobant

Le bloc englobant est entièrement déterminé par la valeur de la propriété {{CSSxRef("position")}} pour l'élément&nbsp;:

1. Si la propriété `position` vaut **`static`**, **`relative`** ou **`sticky`**, le bloc englobant est formé par le bord de la _zone de contenu_ de l'élément ancêtre le plus proche qui est soit **un conteneur de bloc** (comme un élément en bloc en incise, en bloc ou un élément de liste), soit **établit un contexte de formatage** (comme un conteneur de tableau, un conteneur flexible, un conteneur grille ou le conteneur de bloc lui-même).
2. Si la propriété `position` vaut **`absolute`**, le bloc englobant est formé par le bord de la _zone de remplissage_ de l'élément ancêtre le plus proche qui a une valeur de `position` autre que `static` (`fixed`, `absolute`, `relative` ou `sticky`).
3. Si la propriété `position` vaut **`fixed`**, le bloc englobant est établi par la {{Glossary("viewport", "zone d'affichage")}} (dans le cas des médias continus) ou par la zone de la page (dans le cas des médias paginés).
4. Si la propriété `position` vaut **`absolute`** ou **`fixed`**, le bloc englobant peut également être formé par le bord de la _zone de remplissage_ de l'élément ancêtre le plus proche qui a l'une des caractéristiques suivantes&nbsp;:
   - Une valeur autre que `none` pour {{CSSxRef("filter")}}, {{CSSxRef("backdrop-filter")}}, {{CSSxRef("transform")}}, {{CSSxRef("perspective")}}, {{CSSxRef("rotate")}}, {{CSSxRef("scale")}} ou {{CSSxRef("translate")}}.
   - Une valeur de {{CSSxRef("contain")}} sur `layout`, `paint`, `strict` ou `content` (par exemple, `contain: paint;`).
   - Une valeur de {{CSSxRef("will-change")}} contenant une propriété pour laquelle une valeur non initiale forme un bloc englobant (par exemple, `filter` ou `transform`).
   - Une valeur de {{CSSxRef("content-visibility")}} sur `auto`.

> [!NOTE]
> Le bloc conteneur dans lequel se trouve l'élément racine ({{HTMLElement("html")}}) est un rectangle appelé **bloc englobant initial**. Ses dimensions correspondent à celles de la zone d'affichage (pour les supports continus) ou à celles de la zone de la page (pour les supports paginés).

> [!NOTE]
> Il existe des incohérences entre les navigateurs concernant les propriétés `perspective` et `filter`, qui contribuent à la formation du bloc englobant.

## Calculer des pourcentages à partir du bloc englobant

Comme indiqué ci-dessus, lorsque certaines propriétés se voient attribuer une valeur en pourcentage, la valeur calculée dépend du bloc contenant l'élément. Les propriétés qui fonctionnent de cette manière sont les **propriétés du modèle de boîte** et les **propriétés de décalage**&nbsp;:

1. Les valeurs calculées des propriétés {{CSSxRef("height")}}, {{CSSxRef("top")}} et {{CSSxRef("bottom")}} sont construites à partir de la hauteur du bloc englobant.
2. Les valeurs calculées des propriétés {{CSSxRef("width")}}, {{CSSxRef("left")}}, {{CSSxRef("right")}}, {{CSSxRef("padding")}} et {{CSSxRef("margin")}} sont calculées à partir de la largeur (`width`) du bloc englobant.

> [!NOTE]
> Un **conteneur de bloc** (comme un élément en bloc en incise, en bloc ou un élément de liste) contient soit uniquement des boîtes de niveau en incise participant à un contexte de formatage en incise, soit uniquement des boîtes de niveau bloc participant à un contexte de formatage en bloc. Un élément est un conteneur de bloc uniquement s'il contient des boîtes de niveau bloc ou de niveau en incise.

## Quelques exemples

Le code HTML utilisé pour les exemples suivants est&nbsp;:

```html
<body>
  <section>
    <p>Et voici un paragraphe&nbsp;!</p>
  </section>
</body>
```

Seul le CSS est différent dans chaque exemple ci-dessous.

### Exemple 1

Dans cet exemple, le paragraphe est positionné de manière statique, son bloc englobant est donc {{HTMLElement("section")}}, car il s'agit de l'ancêtre le plus proche qui soit un conteneur de blocs (en raison de `display: block`).

```html hidden
<body>
  <section>
    <p>Et voici un paragraphe&nbsp;!</p>
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
  width: 50%; /* == 400px * .5 = 200px */
  height: 25%; /* == 160px * .25 = 40px */
  margin: 5%; /* == 400px * .05 = 20px */
  padding: 5%; /* == 400px * .05 = 20px */
  background: cyan;
}
```

{{EmbedLiveSample("Exemple 1", "100%", 300)}}

### Exemple 2

Dans cet exemple, le bloc englobant est formé par l'élément {{HTMLElement("body")}}, car `<section>` n'est pas un conteneur de bloc en raison de `display: inline` et il ne crée pas de contexte de formatage.

```html
<body>
  <section>
    <p>Et voici un paragraphe&nbsp;!</p>
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
  width: 50%; /* == moitié de la largeur du corps */
  height: 200px; /* Note : un pourcentage de 0 */
  background: cyan;
}
```

{{EmbedLiveSample("Exemple 2", "100%", 300)}}

### Exemple 3

Ici, le bloc englobant du paragraphe est `<section>`, car la propriété `position` de ce dernier vaut `absolute`. Les valeurs exprimées en pourcentages et associées au paragraphe sont relatives à la zone de remplissage du bloc englobant (ce n'est pas le cas si la propriété {{CSSxRef("box-sizing")}} du bloc englobant vaut `border-box`).

```html hidden
<body>
  <section>
    <p>Et voici un paragraphe&nbsp;!</p>
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
  width: 50%; /* == (400px + 20px + 20px) * .5 = 220px */
  height: 25%; /* == (160px + 30px + 30px) * .25 = 55px */
  margin: 5%; /* == (400px + 20px + 20px) * .05 = 22px */
  padding: 5%; /* == (400px + 20px + 20px) * .05 = 22px */
  background: cyan;
}
```

{{EmbedLiveSample("Exemple 3", "100%", 300)}}

### Exemple 4

Dans cet exemple, la propriété `position` du paragraphe vaut `fixed`. Le bloc englobant est donc le bloc englobant initial (c'est-à-dire la zone d'affichage pour les écrans). Aussi, les dimensions du paragraphe changent selon la taille de la fenêtre du navigateur.

```html hidden
<body>
  <section>
    <p>Et voici un paragraphe&nbsp;!</p>
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
  width: 50%; /* == (50vw - (largeur de la barre de défilement horizontale)) */
  height: 50%; /* == (50vh - (hauteur de la barre de défilement horizontale)) */
  margin: 5%; /* == (5vw - (largeur de la barre de défilement verticale)) */
  padding: 5%; /* == (5vw - (largeur de la barre de défilement verticale)) */
  background: cyan;
}
```

{{EmbedLiveSample("Exemple 4", "100%", 300)}}

### Exemple 5

Dans cet exemple, la propriété `position` du paragraphe vaut `absolute`. Son bloc englobant est donc `<section>`, car c'est l'ancêtre le plus proche dont la propriété {{CSSxRef("transform")}} ne vaut pas `none`.

```html hidden
<body>
  <section>
    <p>Et voici un paragraphe&nbsp;!</p>
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
  width: 50%; /* == 200px */
  height: 25%; /* == 40px */
  margin: 5%; /* == 20px */
  padding: 5%; /* == 20px */
  background: cyan;
}
```

{{EmbedLiveSample("Exemple 5", "100%", 300)}}

## Voir aussi

- La propriété {{CSSxRef("all")}}
- La propriété {{CSSxRef("contain")}}
- La propriété {{CSSxRef("aspect-ratio")}}
- La propriété {{CSSxRef("box-sizing")}}
- Les valeurs de tailles {{CSSxRef("min-content")}} et {{CSSxRef("max-content")}}
- [Apprendre&nbsp;: dimension des éléments en CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Sizing)
- [Le modèle de boîte](/fr/docs/Web/CSS/Guides/Box_model/Introduction)
- Le module [de modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model)
- L'entrée de glossaire [Modes de mise en page](/fr/docs/Glossary/Layout_mode)
- [Modèles de formatage visuel](/fr/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- [Contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [Contexte d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [Effondrement des marges](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- Les valeurs [initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale), [calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée), [utilisée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_utilisée) et [réelle](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_réelle)
- L'entrée de glossaire {{Glossary("Replaced elements", "Éléments remplacés")}}
- L'entrée de glossaire {{Glossary("Intrinsic size", "Taille intrinsèque")}}
