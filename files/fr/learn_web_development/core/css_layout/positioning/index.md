---
title: Le positionnement
slug: Learn_web_development/Core/CSS_layout/Positioning
l10n:
  sourceCommit: 1b7c3c1e03f14c3878e4d8518b0f1a89bedfdc9c
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Floats", "Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout")}}

Le positionnement permet de sortir les éléments du flux normal de la composition du document, et de les faire se comporter différemment, par exemple en plaçant un élément sur un autre ou en occupant toujours la même place dans la zone d'affichage du navigateur. Cet article explique les diverses valeurs de {{CSSxRef("position")}}, et comment les utiliser.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content"
          >Structurer le contenu avec HTML</a
        >,
        <a href="/fr/docs/Learn_web_development/Core/Styling_basics">Bases du style CSS</a>,
        <a href="/fr/docs/Learn_web_development/Core/Text_styling/Fundamentals">Fondamentaux du style et des polices de texte</a>,
        être familiarisé avec les <a href="/fr/docs/Learn_web_development/Core/CSS_layout/Introduction">Concepts fondamentaux de la mise en page CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Le positionnement <code>static</code> est la façon par défaut dont les éléments sont positionnés sur la page.</li>
          <li>Les éléments positionnés relativement restent dans le flux normal, mais le positionnement absolu (ainsi que fixe/adhérent) retire complètement les éléments du flux normal pour les placer sur un calque séparé.</li>
          <li>La position finale dans la mise en page peut être modifiée à l'aide des propriétés <code>top</code>, <code>bottom</code>, <code>left</code> et <code>right</code>, mais leurs effets diffèrent selon la valeur de <code>position</code> définie.</li>
          <li>Définir le contexte de positionnement d'un élément positionné par rapport à un élément parent.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Travailler au travers des exercices

Nous vous invitons à réaliser les exercices suivants sur votre ordinateur local. Pour commencer, créez un nouveau fichier HTML sur votre système local et ajoutez-y le contenu suivant&nbsp;:

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exemple de positionnement</title>

    <style>
      body {
        width: 500px;
        margin: 0 auto;
      }

      p {
        background: aqua;
        border: 3px solid blue;
        padding: 10px;
        margin: 10px;
      }

      span {
        background: red;
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <h1>Flux de document de base</h1>

    <p>
      Je suis un élément de niveau bloc de base. Mes éléments adjacents de
      niveau bloc se trouvent sur de nouvelles lignes en dessous de moi.
    </p>

    <p>
      Par défaut, nous occupons 100% de la largeur de notre élément parent, et
      notre hauteur est aussi grande que le contenu de nos enfants. Notre
      largeur et hauteur totales correspondent à notre contenu + le remplissage
      + la largeur/hauteur des bordures.
    </p>

    <p>
      Nous sommes séparés par nos marges. En raison de la fusion des marges,
      nous sommes séparés par la largeur de l'une de nos marges, et non par les
      deux.
    </p>

    <p>
      les éléments en incise <span>comme celui-ci</span> et
      <span>celui-là</span> se trouvent sur la même ligne les uns que les
      autres, ainsi que les nœuds de texte adjacents, s'il y a de la place sur
      la même ligne. Les éléments en incise qui débordent
      <span>
        passez à une nouvelle ligne si possible — comme celle-ci qui contient du
        texte </span
      >, ou passez simplement à une nouvelle ligne si ce n'est pas le cas, un
      peu comme le fait cette image&nbsp;:
      <img
        src="https://mdn.github.io/shared-assets/images/examples/long.jpg"
        alt="un extrait large mais court d'une photo montrant plusieurs tissus" />
    </p>
  </body>
</html>
```

## Introduction au positionnement

Le positionnement permet de modifier le cours classique de la mise en page pour produire des effets intéressants. Vous souhaitez modifier légèrement le placement de boîtes par rapport à leur position par défaut dans la mise en page, et donner ainsi une touche d'originalité à votre page&nbsp;? Vous souhaitez créer un élément d'interface utilisateur flottant au‑dessus d'autres parties de la page, et/ou que cet élément reste fixé à la même place dans la fenêtre du navigateur, quel que soit le point de défilement de la page&nbsp;? Le positionnement est l'outil qu'il vous faut, il rend de tels agencements possibles.

Il y a différents types de positionnement que vous pouvez appliquer à des éléments HTML. Pour utiliser un type particulier de positionnement sur un élément, nous utilisons la propriété {{CSSxRef("position")}}.

## Positionnement statique

Le positionnement statique est celui reçu par défaut par chaque élément. Cela veut tout simplement dire «&nbsp;positionner l'élément selon le flux normal, rien de spécial à voir ici&nbsp;».

Pour illustrer ce positionnement (et disposer d'exemple qui nous sert pour les prochaines sections), ajoutez tout d'abord une classe `positionne` pour le deuxième {{HTMLElement("p")}} dans le HTML&nbsp;:

```html
<p class="positionne">…</p>
```

Puis ajoutez la règle suivante au bas de votre CSS&nbsp;:

```html hidden live-sample___static
<h1>Positionnement statique</h1>

<p>
  Je suis un élément de niveau bloc basique. Mes éléments de niveau bloc
  adjacents se trouvent sur de nouvelles lignes en dessous de moi.
</p>

<p class="positionne">
  Par défaut, nous occupons 100% de la largeur de notre élément parent, et nous
  sommes aussi hauts que notre contenu enfant. Notre largeur et hauteur totales
  sont notre contenu + le remplissage + la largeur/hauteur de la bordure.
</p>

<p>
  Nous sommes séparés par nos marges. En raison de la fusion des marges, nous
  sommes séparés par la largeur d'une seule de nos marges, et non des deux.
</p>

<p>
  les éléments en incise <span>comme celui-ci</span> et <span>celui-là</span> se
  trouvent sur la même ligne les uns que les autres, ainsi que les nœuds de
  texte adjacents, s'il y a de l'espace sur la même ligne. Les éléments en
  incise qui débordent
  <span>
    passent à une nouvelle ligne si possible — comme celui-ci contenant du texte </span
  >, ou vont simplement sur une nouvelle ligne sinon, un peu comme le fait cette
  image&nbsp;:
  <img
    src="https://mdn.github.io/shared-assets/images/examples/long.jpg"
    alt="un extrait large mais court d'une photo montrant plusieurs tissus" />
</p>
```

```css hidden live-sample___static live-sample___relative live-sample___absolute
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}
```

```css live-sample___static
.positionne {
  position: static;
  background: yellow;
}
```

Si vous sauvegardez et actualisez, vous ne voyez aucune différence, à l'exception de la mise à jour de la couleur de fond du deuxième paragraphe. L'exemple doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("static", "100%", 500)}}

C'est correct — comme nous l'avons vu plus tôt, le positionnement statique est le comportement par défaut&nbsp;!

## Positionnement relatif

Le positionnement relatif est le premier type de positionnement que nous allons étudier. Il est très similaire au positionnement statique. Cependant, une fois que l'élément positionné occupe une place dans le cours normal de la mise en page, vous pouvez modifier sa position finale. Vous pouvez par exemple le faire chevaucher d'autres éléments de la page. Poursuivons&nbsp;: mettez à jour la déclaration de `position` dans le code&nbsp;:

```css
.positionne {
  position: relative;
  background: yellow;
}
```

Si vous sauvegardez et actualisez à ce stade, vous ne voyez aucun changement dans le résultat. Alors, comment modifier la position de l'élément&nbsp;? Vous avez besoin d'employer les propriétés {{CSSxRef("top")}}, {{CSSxRef("bottom")}}, {{CSSxRef("left")}} et {{CSSxRef("right")}} dont nous parlons dans le prochain paragraphe.

### Présentation de `top`, `bottom`, `left` et `right`

{{CSSxRef("top")}}, {{CSSxRef("bottom")}}, {{CSSxRef("left")}} et {{CSSxRef("right")}} sont utilisés conjointement à {{cssxref("position")}} pour définir exactement là où placer l'élément positionné. Pour le tester, ajoutez les déclarations suivantes à la règle `.positionne` dans le CSS&nbsp;:

```css live-sample___relative
.positionne {
  position: relative;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

> [!NOTE]
> Les valeurs de ces propriétés peuvent prendre n'importe quelle [unité](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units) logiquement attendue ici&nbsp;: pixels, mm, rem, %, etc.

Si vous enregistrez et actualisez maintenant, vous voyez ce résultat&nbsp;:

```html hidden live-sample___relative
<h1>Positionnement relatif</h1>

<p>
  Je suis un élément de niveau bloc basique. Mes éléments de niveau bloc
  adjacents se trouvent sur de nouvelles lignes en dessous de moi.
</p>

<p class="positionne">
  Par défaut, nous occupons 100% de la largeur de notre élément parent, et nous
  sommes aussi hauts que notre contenu enfant. Notre largeur et hauteur totales
  sont notre contenu + le remplissage + la largeur/hauteur de la bordure.
</p>

<p>
  Nous sommes séparés par nos marges. En raison de la fusion des marges, nous
  sommes séparés par la largeur d'une seule de nos marges, et non des deux.
</p>

<p>
  les éléments en incise <span>comme celui-ci</span> et <span>celui-là</span> se
  trouvent sur la même ligne les uns que les autres, ainsi que les nœuds de
  texte adjacents, s'il y a de l'espace sur la même ligne. Les éléments en
  incise qui débordent
  <span>
    passent à une nouvelle ligne si possible — comme celui-ci contenant du texte </span
  >, ou vont simplement sur une nouvelle ligne sinon, un peu comme le fait cette
  image&nbsp;:
  <img
    src="https://mdn.github.io/shared-assets/images/examples/long.jpg"
    alt="un extrait large mais court d'une photo montrant plusieurs tissus" />
</p>
```

{{EmbedLiveSample("relative", "100%", 500)}}

Cool, n'est-ce pas&nbsp;? Oui, mais ce n'est probablement pas ce à quoi vous vous attendiez. Pourquoi le déplacement s'est‑il effectué vers le bas et à droite si nous avons défini `top` (haut) et `left` (gauche)&nbsp;? Même si cela peut paraître illogique, c'est la façon dont fonctionne le positionnement relatif. Songez à une force invisible poussant le côté défini de l'élément à positionner, le déplaçant ainsi dans la direction opposée. Par exemple, si nous spécifions `top: 30px;`, une force pousse le haut de la boîte, entraînant son déplacement vers le bas de `30px`.

## Positionnement absolu

Le positionnement absolu nous apporte des résultats bien différents.

### Appliquer `position: absolute`

Modifions la déclaration de `position` dans le code&nbsp;:

```css live-sample___absolute
.positionne {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

Si vous enregistrez et actualisez maintenant, vous verrez quelque chose comme ceci apparaître&nbsp;:

```html hidden live-sample___absolute
<h1>Positionnement absolu</h1>

<p>
  Je suis un élément de niveau bloc basique. Mes éléments de niveau bloc
  adjacents se trouvent sur de nouvelles lignes en dessous de moi.
</p>

<p class="positionne">
  Par défaut, nous occupons 100% de la largeur de notre élément parent, et nous
  sommes aussi hauts que notre contenu enfant. Notre largeur et hauteur totales
  sont notre contenu + le remplissage + la largeur/hauteur de la bordure.
</p>

<p>
  Nous sommes séparés par nos marges. En raison de la fusion des marges, nous
  sommes séparés par la largeur d'une seule de nos marges, et non des deux.
</p>

<p>
  les éléments en incise <span>comme celui-ci</span> et <span>celui-là</span> se
  trouvent sur la même ligne les uns que les autres, ainsi que les nœuds de
  texte adjacents, s'il y a de l'espace sur la même ligne. Les éléments en
  incise qui débordent
  <span>
    passent à une nouvelle ligne si possible — comme celui-ci contenant du texte </span
  >, ou vont simplement sur une nouvelle ligne sinon, un peu comme le fait cette
  image&nbsp;:
  <img
    src="https://mdn.github.io/shared-assets/images/examples/long.jpg"
    alt="un extrait large mais court d'une photo montrant plusieurs tissus" />
</p>
```

{{EmbedLiveSample("absolute", "100%", 450)}}

Tout d'abord, notez que l'emplacement où l'élément à positionner aurait dû se trouver dans le cours normal de la mise en page du document ne s'y trouve plus. Le premier élément et le troisième sont l'un à côté de l'autre comme si le second n'existe plus&nbsp;! Dans un sens, c'est le cas. Un élément positionné de manière absolue ne fait plus partie du cours normal de la mise en page. Il se trouve maintenant sur un plan qui lui est propre, séparé de tout le reste. C'est très utile&nbsp;: cela signifie que nous pouvons créer une fonctionnalité d'interface graphique isolée qui n'interfère pas avec la position des autres éléments sur la page. Par exemple, des fenêtres intrusives (<i lang="en">popup</i> en anglais), des menus de contrôle, des panneaux déroulants (<i lang="en">rollover panels</i>), des fonctionnalités d'interface utilisateur que l'on peut glisser et déposer n'importe où sur la page, et bien plus encore.

Ensuite, notez que la position de l'élément a changé. {{CSSxRef("top")}}, {{CSSxRef("bottom")}}, {{CSSxRef("left")}} et {{CSSxRef("right")}} se comportent différemment avec le positionnement absolu. Au lieu de positionner l'élément en fonction de sa position relative dans la mise en page du document, ils définissent la distance à laquelle l'élément doit se situer par rapport aux côtés de l'élément contenant. Dans ce cas, nous indiquons que l'élément à positionner de manière absolue doit se placer à 30px du haut et à 30px de la gauche de «&nbsp;l'élément conteneur&nbsp;» (il s'agit dans ce cas, l'élément conteneur est le bloc conteneur initial, voir la section ci-dessous pour plus d'informations).

> [!NOTE]
> Vous pouvez utiliser {{CSSxRef("top")}}, {{CSSxRef("bottom")}}, {{CSSxRef("left")}} et {{CSSxRef("right")}} pour redimensionner les éléments selon vos besoins. Définissez `top: 0; bottom: 0; left: 0; right: 0;` et `margin: 0;` sur les éléments à positionner et voyez ce qui se produit&nbsp;! Réinitialisez le tout ensuite…

> [!NOTE]
> Les marges affectent toujours les éléments à positionner. Toutefois, la fusion de marges ne se fait pas.

### Contextes de positionnement

Quel élément est «&nbsp;le conteneur&nbsp;» d'un élément positionné de manière absolue&nbsp;? Cela dépend en grande partie de la propriété `position` des éléments qui sont les ancêtres de l'élément positionné (voir [Identifier le bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block#identifier_le_bloc_englobant)).

Si aucun élément ancêtre ne voit sa propriété `position` explicitement définie, par défaut, tous les éléments ancêtres ont une position statique et par conséquent, l'élément positionné de façon absolue est contenu dans **le bloc englobant initial**. Ce bloc englobant initial a les dimensions de la zone d'affichage (<i lang="en">viewport</i>) et est aussi le bloc qui contient l'élément {{HTMLElement("html")}}. Autrement dit, l'élément positionné de façon absolue est affiché en dehors de l'élément {{HTMLElement("html")}} et positionné relativement à la zone d'affichage.

Dans la structure HTML, l'élément positionné est imbriqué dans l'élément HTML {{HTMLElement("body")}}, mais pour la disposition finale, il est situé à 30px du bord haut et du bord gauche de la page.

Vous pouvez modifier **le contexte de positionnement**, c'est-à-dire l'élément par rapport auquel l'élément est positionné de façon absolue. Pour cela, on définit le positionnement d'un des éléments ancêtres (les éléments dans lesquels il est imbriqué&nbsp;; vous ne pouvez pas le positionner par rapport à un élément dans lequel il n'est pas imbriqué). Pour voir cet effet, mettez à jour votre règle `body` pour définir `position: relative` dessus&nbsp;:

```css
body {
  width: 500px;
  margin: 0 auto;
  position: relative;
}
```

Cela doit vous donner le résultat suivant&nbsp;:

```html hidden live-sample___contexts
<h1>Contextes de positionnement</h1>

<p>
  Je suis un élément de niveau bloc basique. Mes éléments de niveau bloc
  adjacents se trouvent sur de nouvelles lignes en dessous de moi.
</p>

<p class="positionne">
  Maintenant je suis positionné de façon absolue par rapport à l'élément
  <code>&lt;body&gt;</code> et non à l'élément <code>&lt;html&gt;</code>&nbsp;!
</p>

<p>
  Nous sommes séparés par nos marges. En raison de la fusion des marges, nous
  sommes séparés par la largeur d'une seule de nos marges, et non des deux.
</p>

<p>
  les éléments en incise <span>comme celui-ci</span> et <span>celui-là</span> se
  trouvent sur la même ligne les uns que les autres, ainsi que les nœuds de
  texte adjacents, s'il y a de l'espace sur la même ligne. Les éléments en
  incise qui débordent
  <span>
    passent à une nouvelle ligne si possible — comme celui-ci contenant du texte </span
  >, ou vont simplement sur une nouvelle ligne sinon, un peu comme le fait cette
  image&nbsp;:
  <img
    src="https://mdn.github.io/shared-assets/images/examples/long.jpg"
    alt="un extrait large mais court d'une photo montrant plusieurs tissus" />
</p>
```

```css hidden live-sample___contexts live-sample___z-index
body {
  width: 500px;
  margin: 0 auto;
  position: relative;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positionne {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

{{EmbedLiveSample("contexts", "100%", 420)}}

À présent, l'élément a été positionné par rapport à l'élément HTML {{HTMLElement("body")}}.

### Introduction au `z-index`

Tout ce positionnement absolu est amusant, mais il y a autre chose que nous n'avons pas encore considéré&nbsp;: quand les éléments se chevauchent, comment est déterminé l'élément apparaissant au-dessus d'un autre&nbsp;? Dans les exemples vus jusqu'à présent, nous n'avions qu'un seul élément à positionner dans le contexte&nbsp;; il apparaissait en haut, car les éléments positionnés l'emportent sur les éléments non positionnés. Qu'en est‑il lorsqu'il y en a plus d'un&nbsp;?

Ajoutez le code suivant à la CSS, pour faire en sorte que le premier paragraphe soit aussi en positionnement absolu&nbsp;:

```css
p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
}
```

À ce stade, vous voyez le premier paragraphe coloré en vert, déplacé hors du cours normal des documents et positionné un peu au-dessus de l'endroit où il se trouve à l'origine. Il est également empilé sous le paragraphe `.positionne` original, là où les deux se chevauchent. C'est parce que le paragraphe `.positionne` est le deuxième paragraphe dans l'ordre du code source HTML&nbsp;; les éléments positionnés en dernier dans l'ordre du code source l'emportent sur les éléments positionnés plus en amont dans l'ordre du code source.

Est‑il possible de changer l'ordre d'empilement&nbsp;? Oui, vous le pouvez avec la propriété {{CSSxRef("z-index")}}. «&nbsp;<i lang="en">z-index</i>&nbsp;» est une référence à l'axe **z**. Vous vous souvenez peut-être de points précédents du cours où nous avions discuté des pages Web en utilisant des coordonnées horizontales (axe x pour les abscisses) et verticales (axe y pour les ordonnées) pour déterminer le positionnement de choses comme les images de fond et les décalages d'ombres portées. `(0,0)` est en haut à gauche de la page (ou de l'élément), et les axes x et y vont respectivement vers la droite et vers le bas de la page (pour les langues s'écrivant de gauche à droite, en tout cas).

Les pages web ont aussi un axe z&nbsp;: une ligne imaginaire qui va de la surface de votre écran, vers votre visage. Les valeurs de {{CSSxRef("z-index")}} affectent l'emplacement des éléments positionnés sur cet axe&nbsp;; les valeurs positives les déplacent vers le haut de la pile, et les valeurs négatives les déplacent vers le bas de la pile. Par défaut, la propriété `z-index` des éléments positionnés vaut `auto`, qui est effectivement 0.

Pour modifier l'ordre d'empilement, ajoutez la déclaration `z-index: 1` suivante à la règle `p:nth-of-type(1)`&nbsp;:

```css live-sample___z-index
p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
  z-index: 1;
}
```

Voici maintenant l'exemple terminé où vous devez voir le paragraphe vert par-dessus&nbsp;:

```html hidden live-sample___z-index
<h1>z-index</h1>

<p>
  Je suis un élément de niveau bloc basique. Mes éléments de niveau bloc
  adjacents se trouvent sur de nouvelles lignes en dessous de moi.
</p>

<p class="positionne">
  Maintenant je suis positionné de façon absolue par rapport à l'élément
  <code>&lt;body&gt;</code> et non à l'élément <code>&lt;html&gt;</code>&nbsp;!
</p>

<p>
  Nous sommes séparés par nos marges. En raison de la fusion des marges, nous
  sommes séparés par la largeur d'une seule de nos marges, et non des deux.
</p>

<p>
  les éléments en incise <span>comme celui-ci</span> et <span>celui-là</span> se
  trouvent sur la même ligne les uns que les autres, ainsi que les nœuds de
  texte adjacents, s'il y a de l'espace sur la même ligne. Les éléments en
  incise qui débordent
  <span>
    passent à une nouvelle ligne si possible — comme celui-ci contenant du texte </span
  >, ou vont simplement sur une nouvelle ligne sinon, un peu comme le fait cette
  image&nbsp;:
  <img
    src="https://mdn.github.io/shared-assets/images/examples/long.jpg"
    alt="un extrait large mais court d'une photo montrant plusieurs tissus" />
</p>
```

{{EmbedLiveSample("z-index", "100%", 400)}}

Notez que `z-index` n'accepte que des valeurs d'index sans unité&nbsp;; vous ne pouvez pas préciser que vous voulez qu'un élément soit à 23 pixels sur l'axe des z — cela ne fonctionne pas ainsi. Les plus grandes valeurs vont au‑dessus des valeurs plus faibles et c'est à vous d'indiquer les valeurs. Utiliser 2 et 3 a le même effet que 300 et 40000.

## Positionnement fixe

Voyons maintenant le positionnement fixe. Cela fonctionne exactement de la même manière que le positionnement absolu, avec une différence essentielle&nbsp;: alors que le positionnement absolu fixe un élément en place par rapport à son parent positionné le plus proche, le positionnement fixe fige un élément en place par rapport à la vue par la fenêtre du navigateur elle-même. Cela signifie que vous pouvez créer des éléments d'interface utilisateur utiles qui sont fixés en place, comme des menus de navigation persistants.

Voici un exemple simple pour montrer ce que nous voulons dire. D'abord, supprimez la règle de `p:nth-of-type(1)` et `.positionne` de la CSS.

Maintenant, mettez à jour la règle `body`. Supprimez la déclaration `position: relative;` et ajoutez une hauteur fixe, ainsi&nbsp;:

```css
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}
```

Maintenant, nous allons donner à l'élément HTML `{{HTMLElement("Heading_Elements", "&lt;h1>")}}` une déclaration `position: fixed;` et le positionner en haut de la fenêtre. Ajoutez la règle suivante à votre CSS&nbsp;:

```css
h1 {
  position: fixed;
  top: 0;
  width: 500px;
  margin-top: 0;
  background: white;
  padding: 10px;
}
```

`top: 0;` est requis pour que l'élément soit collé au haut de l'écran. Ensuite, nous donnons au titre d'en‑tête la même largeur que la colonne de contenu et un fond blanc et un peu de remplissage pour que le contenu ne soit pas visible sous lui.

Si vous sauvegardez et rechargez, vous voyez un petit effet amusant où l'en-tête reste fixe — le contenu semble défiler vers le haut et disparaître en dessous. Mais remarquez comment une partie du contenu est initialement masquée sous l'en-tête. Cela s'explique par le fait que l'en-tête positionnée n'apparaît plus dans le flux du document, ce qui fait que le reste du contenu remonte vers le haut.

Nous pouvons améliorer cela en décalant légèrement tous les paragraphes vers le bas. Définissez une marge supérieure pour le premier paragraphe, comme ceci&nbsp;:

```css
p:nth-of-type(1) {
  margin-top: 60px;
}
```

Vous devez maintenant voir l'exemple suivant être rendu&nbsp;:

```html hidden live-sample___fixed
<h1>Positionnement absolu</h1>

<p>
  Je suis un élément de niveau bloc basique. Mes éléments de niveau bloc
  adjacents se trouvent sur de nouvelles lignes en dessous de moi.
</p>

<p class="positionne">Je ne suis plus positionné.</p>

<p>
  Nous sommes séparés par nos marges. En raison de la fusion des marges, nous
  sommes séparés par la largeur d'une seule de nos marges, et non des deux.
</p>

<p>
  les éléments en incise <span>comme celui-ci</span> et <span>celui-là</span> se
  trouvent sur la même ligne les uns que les autres, ainsi que les nœuds de
  texte adjacents, s'il y a de l'espace sur la même ligne. Les éléments en
  incise qui débordent
  <span>
    passent à une nouvelle ligne si possible — comme celui-ci contenant du texte </span
  >, ou vont simplement sur une nouvelle ligne sinon, un peu comme le fait cette
  image&nbsp;:
  <img
    src="https://mdn.github.io/shared-assets/images/examples/long.jpg"
    alt="un extrait large mais court d'une photo montrant plusieurs tissus" />
</p>
```

```css hidden live-sample___fixed
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

h1 {
  position: fixed;
  top: 0px;
  width: 500px;
  margin-top: 0;
  background: white;
  padding: 10px;
}

p:nth-of-type(1) {
  margin-top: 60px;
}
```

{{EmbedLiveSample("fixed", "100%", 400)}}

## Positionnement adhérent

Il existe une autre valeur de position appelée `position: sticky`, qui est un peu plus récente que les autres. Il s'agit en fait d'un hybride entre la position relative et la position fixe. Elle permet à un élément positionné de se comporter comme s'il était positionné de manière relative jusqu'à ce qu'il atteigne un certain seuil de défilement (par exemple, à 10px du haut de la fenêtre d'affichage), après quoi il devient fixe.

### Exemple simple

Ce positionnement s'utilise par exemple pour faire défiler une barre de navigation avec la page jusqu'à un certain point et ensuite coller en haut de la page.

```html hidden live-sample___basic-sticky
<h1>Positionnement adhérent</h1>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<div class="positioned">adhérent : relatif en deçà, fixe au delà</div>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>
```

```css hidden live-sample___basic-sticky
body {
  width: 500px;
  margin: 0 auto;
}

.positionne {
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

```css live-sample___basic-sticky
.positionne {
  position: sticky;
  top: 30px;
  left: 30px;
}
```

{{EmbedLiveSample("basic-sticky", "100%", 200)}}

### Index déroulant

Une utilisation courante et pleine d'intérêt de `position: sticky` consiste à créer une page d'index déroulante dans laquelle les divers en‑têtes restent collés en haut de la page une fois qu'ils l'ont atteint. Le balisage d'un exemple de ce type ressemble à ceci&nbsp;:

```html live-sample___sticky-scrolling-index
<h1>Index déroulant adhérent</h1>

<dl>
  <dt>A</dt>
  <dd>Abeille</dd>
  <dd>Abricot</dd>
  <dd>Altimètre</dd>
  <dd>Avion</dd>
  <dt>B</dt>
  <dd>Banane</dd>
  <dd>Betterave</dd>
  <dd>Bœuf</dd>
  <dd>Bouvreuil</dd>
  <dd>Buzzard</dd>
  <dt>C</dt>
  <dd>Calculateur</dd>
  <dd>Camera</dd>
  <dd>Cane</dd>
  <dd>Chameau</dd>
  <dt>D</dt>
  <dd>Dime</dd>
  <dd>Dindon</dd>
  <dd>Drapeau</dd>
  <dd>Drone</dd>
  <dt>E</dt>
  <dd>Eau</dd>
  <dd>Éléphant</dd>
  <dd>Escadrille</dd>
</dl>
```

Le CSS peut ressembler à ce qui suit. Dans le flux normal, les éléments {{HTMLElement("dt")}} défilent avec le contenu. Quand on ajoute `position: sticky` à l'élément {{HTMLElement("dt")}} avec une valeur {{CSSxRef("top")}} de `0`, les titres se collent au sommet de la zone d'affichage au fur et à mesure qu'ils atteignent cette position. Chaque en-tête suivant remplace l'en-tête précédent au fur et à mesure que le contenu défile.

```css live-sample___sticky-scrolling-index
dt {
  background-color: black;
  color: white;
  padding: 10px;
  position: sticky;
  top: 0;
  left: 0;
  margin: 1em 0;
}
```

```css hidden live-sample___sticky-scrolling-index
body {
  width: 500px;
  height: 880px;
  margin: 0 auto;
}
```

{{EmbedLiveSample("sticky-scrolling-index", "100%", 200)}}

Les éléments ainsi positionnés «&nbsp;adhèrent&nbsp;» au plus proche ancêtre qui dispose d'un mécanisme de défilement, ce qui est déterminé d'après la propriété {{CSSxRef("overflow")}} de ses ancêtres.

## Résumé

On espère que vous vous êtes amusé⋅e à jouer avec le positionnement de base. Bien que ce ne soit pas une méthode à utiliser pour des mises en page complètes, elle est toutefois adaptée à de nombreuses tâches.

## Voir aussi

- Référence de la propriété {{CSSxRef("position")}}.
- [Exemples pratiques de positionnement](/fr/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples), pour quelques idées utiles supplémentaires.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Floats", "Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout")}}
