---
title: Créer un menu de navigation irrégulier avec `border-shape`
short-title: Menu de navigation avec border-shape
slug: Web/CSS/Guides/Borders_and_box_decorations/Border_shape_nav_menu
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

La propriété CSS {{CSSxRef("border-shape")}} peut être appliquée aux éléments pour créer des conteneurs de forme précise tels que des bulles de dialogue, des conceptions d'infobulles abstraites, et plus encore, permettant de mettre en production de nombreuses nouvelles idées créatives sans avoir besoin de solutions de contournement ou d'astuces. Vous pouvez tout apprendre sur cette propriété et voir des exemples de base en action sur la page de référence de la propriété.

Dans ce guide, nous vous montrons comment utiliser `border-shape` pour créer un menu de navigation animé irrégulier avec chaque élément de navigation ayant la forme d'une pièce de puzzle.

## Définir le balisage du menu de navigation

Notre HTML est assez typique pour un menu de navigation — une liste de liens.

```html live-sample___jigsaw-example
<ul>
  <li><a href="#">Un</a></li>
  <li><a href="#">Deux</a></li>
  <li><a href="#">Trois</a></li>
  <li><a href="#">Quatre</a></li>
</ul>
```

## Définir les styles simples de la page

La configuration de base des styles de la page est la suivante. Nous appliquons quelques styles de police rudimentaires, utilisons {{CSSxRef("height")}} pour que le {{HTMLElement("body")}} remplisse la zone d'affichage, et utilisons [les boîtes flexibles](/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox) pour placer le menu de navigation au centre de l'écran.

```css live-sample___jigsaw-example
* {
  box-sizing: border-box;
}

html {
  height: 100%;
  font-family: "Helvetica", "Arial";
  font-size: 1.2rem;
}

body {
  margin: 0;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Appliquer les styles généraux du menu de navigation

Tout d'abord, nous mettons en forme le {{HTMLElement("ul")}} en supprimant le {{CSSxRef("list-style-type")}} et le {{CSSxRef("padding")}} par défaut et en définissant une valeur {{CSSxRef("display")}} à `flex` pour disposer les éléments HTML {{HTMLElement("li")}} contenus sur une ligne. Nous définissons ensuite une valeur {{CSSxRef("gap")}} de `0` et appliquons une {{CSSxRef("transition")}}, de sorte que lorsque l'état du `<ul>` change, un changement de la valeur `gap` s'anime en douceur.

```css live-sample___jigsaw-example
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 0;
  transition: gap 0.6s;
}
```

Ensuite, nous mettons en forme les éléments `<li>`. Nous voulons que chaque élément de navigation soit carré, nous définissons donc une valeur égale pour {{CSSxRef("width")}} et {{CSSxRef("height")}}.

```css live-sample___jigsaw-example
li {
  width: 160px;
  height: 160px;
}
```

Ensuite, nous mettons en forme les éléments HTML {{HTMLElement("a")}} à l'intérieur des éléments de liste. Nous commençons par supprimer la {{CSSxRef("text-decoration")}} par défaut et définir la {{CSSxRef("color")}} sur `black`. Nous définissons ensuite une `width` et une `height` de `100%` pour que les éléments `<a>` remplissent toute la zone des éléments `<li>`, puis utilisons [les boîtes flexibles](/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox) pour centrer leur texte horizontalement et verticalement.

Nous définissons ensuite les propriétés {{CSSxRef("box-shadow")}} et {{CSSxRef("text-shadow")}} sur les liens, ainsi qu'une `transition` afin que toute modification de la valeur d'une propriété soit animée en douceur lorsque l'état de l'élément change.

```css live-sample___jigsaw-example
a {
  text-decoration: none;
  color: black;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow:
    2px 0px 2px rgb(0 0 0 / 0.5),
    inset 3px 3px 3px rgb(255 255 255 / 0.5);
  text-shadow: 1px 1px 1px rgb(0 0 0 / 0.5);
  transition: all 0.6s;
}
```

Nous donnons ensuite à chaque pièce de puzzle une couleur différente&nbsp;:

```css live-sample___jigsaw-example
li:nth-child(1) a {
  background-color: #2de1fc;
}

li:nth-child(2) a {
  background-color: #2afc98;
}

li:nth-child(3) a {
  background-color: #09e85e;
}

li:nth-child(4) a {
  background-color: #16c172;
}
```

## Gérer la forme de la bordure

Maintenant, il est temps de définir la `border-shape` pour chaque élément de navigation afin d'obtenir l'apparence de pièce de puzzle que nous recherchons. Pour varier, nous avons façonné chaque élément `<a>` d'indice impair comme une pièce de puzzle pointant vers le bas, et chaque élément `<a>` d'indice pair comme une pièce de puzzle pointant vers le haut&nbsp;:

```css live-sample___jigsaw-example
li:nth-child(even) a {
  border-shape: shape(
      from 0% 0%,
      hline to 33%,
      arc by 33% 0% of 16% 20% small cw,
      hline to 100%,
      line to 100% 33%,
      arc by 0% 33% of 20% 16% small cw,
      line to 100% 100%,
      hline to 66%,
      arc by -33% 0% of 16% 20% small ccw,
      hline to 0%,
      line to 0% 66%,
      arc by 0% -33% of 20% 16% small ccw,
      close
    )
    content-box;
}

li:nth-child(odd) a {
  border-shape: shape(
      from 0% 0%,
      hline to 33%,
      arc by 33% 0% of 16% 20% small ccw,
      hline to 100%,
      line to 100% 33%,
      arc by 0% 33% of 20% 16% small cw,
      line to 100% 100%,
      hline to 66%,
      arc by -33% 0% of 16% 20% small cw,
      hline to 0%,
      line to 0% 66%,
      arc by 0% -33% of 20% 16% small ccw,
      close
    )
    content-box;
}
```

Ça crée immédiatement un problème — les encoches des pièces de puzzle qui dépassent de la zone `<a>` d'origine ne sont pas remplies par les couleurs de fond des éléments `<a>`.

Il existe une solution à ce problème. Nous avons délibérément inclus la valeur `content-box` `<geometry-box>` après chaque fonction `shape()` dans les deux règles précédentes. Cela signifie que les formes sont dessinées par rapport aux boîtes de contenu des éléments, et tout `padding` appliqué n'est pas défini à l'intérieur de la forme. Au lieu de cela, le remplissage est placé à l'extérieur de la forme, ce qui la fait rétrécir et force la couleur de fond à remplir les encoches.

Le `padding` requis est défini comme suit&nbsp;:

```css live-sample___jigsaw-example
a {
  padding: 24px;
}
```

> [!NOTE]
> Vous pouvez voir à quoi ressemble le problème de fond en inspectant [l'exemple en direct](#résultat) dans les outils de développement de votre navigateur et en désactivant le `padding` appliqué aux éléments `<a>`.

Le `padding` fait que les pièces de puzzle deviennent plus petites, créant ainsi des espaces entre elles. Nous voulons qu'elles se touchent initialement, donc nous définissons une grande valeur négative de {{CSSxRef("margin-right")}} sur chaque élément de liste pour les rapprocher&nbsp;:

```css live-sample___jigsaw-example
li {
  margin-right: -47px;
}
```

Un effet secondaire de ce réglage de `margin-right` est que tous les éléments `<li>` sont déplacés vers la droite, de sorte que le menu de navigation n'est plus centré horizontalement. Pour corriger cela, nous utilisons le [positionnement relatif](/fr/docs/Learn_web_development/Core/CSS_layout/Positioning#positionnement_relatif) pour déplacer le `<ul>` vers la gauche&nbsp;:

```css live-sample___jigsaw-example
ul {
  position: relative;
  right: 23.5px;
}
```

Enfin, nous appliquons quelques mises à jour de style sur `:hover` et `:focus` qui, lorsqu'elles sont combinées avec les propriétés `transition` que nous avons définies précédemment, produisent des effets animés lors de l'interaction avec les éléments de navigation. Nous augmentons le `gap` défini sur la disposition de boîte flexible du `<ul>` lorsqu'il est survolé ou sélectionné. Pour gérer l'état de sélection, nous utilisons la pseudo-classe {{CSSxRef(":has")}} pour sélectionner l'ensemble du `<ul>` lorsqu'un `<a>` à l'intérieur est sélectionné.

```css live-sample___jigsaw-example
ul:hover,
ul:has(a:focus) {
  gap: 30px;
}
```

Nous appliquons ensuite un facteur `brightness` {{CSSxRef("filter")}} et {{CSSxRef("scale")}} augmenté, ainsi qu'une `box-shadow` externe sur les éléments `<a>` eux-mêmes lorsqu'ils sont survolés ou sélectionnés, les faisant apparaître plus lumineux et surélevés lors de l'interaction.

```css live-sample___jigsaw-example
a:hover,
a:focus {
  filter: brightness(1.2);
  scale: 1.1;
  box-shadow:
    5px 0px 10px rgb(0 0 0 / 0.5),
    inset 3px 3px 3px rgb(255 255 255 / 0.5);
}
```

## Résultat

{{EmbedLiveSample("jigsaw-example", "100%", 240)}}

Survolez ou sélectionnez les éléments de navigation pour voir les effets animés. Remarquez à quel point les différents effets appliqués fonctionnent naturellement avec les valeurs de `border-shape`.

```css hidden live-sample___jigsaw-example
@supports not (border-shape: circle(50%)) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété 'border-shape'.";
    font-family: sans-serif;
    background-color: wheat;
    padding: 1rem 0;
    text-align: center;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

## Voir aussi

- La propriété {{CSSxRef("border-shape")}}
- Le module [des bordures et boîtes de décoration CSS](/fr/docs/Web/CSS/Guides/Borders_and_box_decorations)
- Le module [des arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
- [`border-shape`&nbsp;: le futur du web non rectangulaire <sup>(angl.)</sup>](https://una.im/border-shape) par Una Kravets (2026)
- [Préparez-vous pour la puissante propriété CSS `border-shape`&nbsp;! <sup>(angl.)</sup>](https://css-tricks.com/get-ready-for-the-powerful-css-border-shape-property/) sur CSS Tricks (2026)
