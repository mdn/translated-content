---
title: Flux normal
slug: conflicting/Learn_web_development/Core/CSS_layout/Introduction
original_slug: Learn/CSS/CSS_layout/Normal_Flow
l10n:
  sourceCommit: 45268b07c84a04b45d46bcdf104e2b33be00adcf
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}

Cet article décrit le flux normal des éléments, c'est-à-dire la façon dont les éléments d'une page web se présentent si vous ne modifiez pas leur mise en page.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Fondamentaux en HTML (voir <a href="/fr/docs/Learn/HTML/Introduction_to_HTML">Introduction au HTML</a>) et une idée du fonctionnement de CSS (voir <a href="/fr/docs/Learn/CSS/First_steps">Introduction à CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>
        Expliquer comment les navigateurs composent les pages web par défaut, avant d'apporter des modifications.
      </td>
    </tr>
  </tbody>
</table>

Comme nous l'avons expliqué dans la dernière leçon consacrée à la mise en page, tant que vous n'avez pas appliqué de feuilles de style CSS, les éléments d'une page web sont disposés selon le flux normal. Et, comme nous avons commencé à le découvrir, il est possible de modifier le comportement des éléments en ajustant leur position dans le flux normal ou en les en retirant complètement. Commencer par un document solide, bien structuré et lisible dans le flux normal est la meilleure façon de commencer une page web. Cela garantit que votre contenu est lisible même si la personne utilise un navigateur très limité ou un dispositif tel qu'un lecteur d'écran qui lit le contenu de la page. En outre, comme le flux normal est conçu pour créer un document lisible, en commençant de cette manière, vous travaillez avec le document plutôt que de lutter contre lui en apportant des modifications à la mise en page.

Avant d'approfondir les diverses méthodes de mise en page, il serait bien de revoir certaines choses déjà exposées dans les modules précédents à propos du flux normal.

## Comment les éléments sont-ils disposés par défaut ?

Le processus commence lorsque les boîtes des éléments individuels sont disposées de telle manière que leur remplissage, bordure et/ou marge est ajouté à leur contenu. C'est ce que nous appelons le **modèle de boîte**.

Par défaut, le contenu d'un [élément de bloc](/fr/docs/Glossary/Block-level_content) remplit l'espace en ligne disponible de l'élément parent qui le contient, en s'agrandissant le long de la dimension du bloc pour s'adapter à son contenu. La taille des [éléments en ligne](/fr/docs/Glossary/Inline-level_content) correspond simplement à la taille de leur contenu. Vous pouvez définir la largeur ([`width`](/fr/docs/Web/CSS/width)) ou la hauteur ([`height`](/fr/docs/Web/CSS/height)) pour certains éléments dont la propriété `display` vaut `inline` par défaut, comme [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img), mais la valeur de `display` restera toujours `inline`.

Si vous voulez contrôler la taille d'un élément en ligne de cette manière, vous devez le paramétrer pour qu'il se comporte comme un élément de niveau bloc avec `display: block;` (ou même `display: inline-block;` qui mélange les caractéristiques des deux).

Ce qui précède explique le comportement des éléments pris individuellement, mais qu'en est-il de la façon dont les éléments interagissent les uns avec les autres&nbsp;? Le flux normal de mise en page (mentionné dans l'article d'introduction à la mise en page) est le système par lequel les éléments sont placés à l'intérieur de la fenêtre de vue du navigateur. Par défaut, les éléments de bloc sont disposés _dans le sens d'affichage des blocs_, basé sur le [mode d'écriture (`writing-mode`)](/fr/docs/Web/CSS/writing-mode) de l'élément parent (la valeur initiale de la propriété `writing-mode` est `horizontal-tb`). Chacun apparaît sur une nouvelle ligne en dessous de la dernière et ils sont séparés par la marge qui leur a été assignée. En français par exemple, ou tout autre mode d'écriture horizontal qui progresse du haut vers le bas, les éléments de bloc sont empilés verticalement.

Les éléments en ligne se comportent différemment. Ils n'apparaissent pas sur de nouvelles lignes&nbsp;; au lieu de cela, ils se placent tous sur la même ligne avec tout contenu textuel adjacent (ou enveloppé) tant qu'il y a de la place pour le faire dans la largeur de l'élément de bloc parent. S'il n'y a pas d'espace, le contenu débordant sera déplacé sur une nouvelle ligne.

Si deux éléments adjacents verticalement ont tous deux une marge définie et que leurs marges se touchent, la plus grande des deux marges reste en place et la plus petite disparaît. C'est ce qu'on appelle [**la fusion des marges**](/fr/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing). La fusion des marges n'est pertinente que dans le **sens vertical**.

Voici un exemple simple expliquant cela&nbsp;:

```html
<h1>Flux d'un document de base</h1>

<p>
  Je suis un élément de niveau bloc de base. Mes éléments de niveau bloc
  adjacents sont sur de nouvelles lignes en dessous de moi.
</p>

<p>
  Par défaut, nous occupons 100% de la largeur de notre élément parent et nous
  sommes aussi hauts que notre contenu enfant. Nos largeur et hauteur totales
  sont égales à la largeur/hauteur de notre contenu + remplissage + encadrement.
</p>

<p>
  Nous sommes séparés de nos marges. Comme il y a fusion des marges, nous sommes
  séparés par la largeur de l'une de nos marges et non les deux.
</p>

<p>
  Des éléments inline <span>comme celui-ci</span> ou <span>celui‑là</span> sont
  placés sur la même ligne et les nœuds de texte adjacents, s'il y a de la place
  sur la même ligne. Les débordements des éléments inline
  <span
    >sont placés sur une nouvelle ligne si possible (comme celle‑ci contenant du
    texte)</span
  >, sinon ils sont placés sur une nouvelle ligne, comme cette image&nbsp;:
  <img src="long.jpg" alt="morceau de tissus" />
</p>
```

```css
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  padding: 10px;
  margin: 10px;
}

span {
  background: white;
  border: 1px solid black;
}
```

{{EmbedLiveSample('', '100%', 600)}}

## Résumé

Dans cette leçon, vous avez appris les bases du flux normal, c'est-à-dire la disposition par défaut des éléments CSS. En comprenant comment les éléments en ligne, les éléments en bloc et les marges se comportent par défaut, il vous sera plus facile de modifier leur comportement à l'avenir.

Dans le prochain article, nous approfondirons ces connaissances en apportant des modifications aux éléments CSS à l'aide des [boîtes flexibles (<i lang="en">flexbox</i>)](/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox).

{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}
