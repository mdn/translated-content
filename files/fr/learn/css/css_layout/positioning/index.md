---
title: Le positionnement
slug: Learn/CSS/CSS_layout/Positioning
tags:
  - Agencement
  - Article
  - CSS
  - Codage de script
  - Disposition
  - Débutant
  - Guide
  - Mise en page
  - Positionnement
  - absolu
  - fixe
  - relatif
  - statique
translation_of: Learn/CSS/CSS_layout/Positioning
original_slug: Apprendre/CSS/CSS_layout/Le_positionnement
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Floats", "Apprendre/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout")}}

Le positionnement permet de sortir les éléments du cours normal de composition du document, et faire qu'ils se comportent différemment, par exemple de se placer sur un autre, ou de toujours rester à la même place dans le cadre d'affichage (viewport) du navigateur. Cet article explique les diverses valeurs de {{cssxref("position")}}, et comment les utiliser.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis:</th>
      <td>
        Les fondamentaux du HTML (étudiez
        <a href="/fr/Apprendre/HTML/Introduction_à_HTML">Introduction au HTML</a
        >), et une idée du fonctionnement de CSS (étudiez
        <a href="/fr/Apprendre/CSS/Introduction_à_CSS">Introduction à CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif:</th>
      <td>Savoir comment fonctionne le positionnement avec les CSS.</td>
    </tr>
  </tbody>
</table>

Nous aimerions que vous suiviez, si possible, les exercices sur votre ordinateur — prenez une copie de [`0_basic-flow.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/0_basic-flow.html) sur le dépôt Github ([code source ici](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/0_basic-flow.html)) et utilisez-le comme point de départ.

## Introduction au positionnement

Le positionnement permet de modifier le cours classique de la mise en page pour produire des effets intéressants. Vous souhaitez modifier légèrement le placement de boîtes par rapport à leur position par défaut dans la mise en page, et donner ainsi une touche d'originalité à votre page ? Vous souhaitez créer un élément d'interface utilisateur flottant au‑dessus d'autres parties de la page, et/ou que cet élément reste fixé à la même place dans la fenêtre du navigateur, quel que soit le point de défilement de la page ? Le positionnement est l'outil qu'il vous faut, il rend de tels agencements possibles.

Il y a différents types de positionnement que vous pouvez appliquer à des éléments HTML. Pour utiliser un type particulier de positionnement sur un élément, nous utilisons la propriété {{cssxref("position")}}.

### Positionnement «&nbsp;static&nbsp;»

Le positionnement `static` est celui reçu par défaut par chaque élément — cela veut tout simplement dire «&nbsp;positionner l'élément selon le cours normal de placement — rien de spécial à voir ici&nbsp;».

Pour le démontrer et avoir préparer un premier exemple pour les prochaines sections, ajoutez tout d'abord une classe `positioned` pour le deuxième {{htmlelement("p")}} dans le HTML:

```html
<p class="positioned"> ... </p>
```

Puis ajoutez la règle suivante au bas de votre CSS:

```css
.positioned {
  position: static;
  background: yellow; }
```

Si maintenant vous sauvegardez et actualisez, vous verrez qu'il n'y a aucune différence, à l'exception de la mise à jour de la couleur de l'arrière-plan du deuxième paragraphe. C'est correct, comme nous l'avons vu plus tôt, le positionnement statique est le comportement par défaut !

> **Note :** ce lien [`1_static-positioning.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/1_static-positioning.html) ([voir le code source](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/1_static-positioning.html)) pointe sur un exemple de positionnement « static ».

### Positionnement «&nbsp;relative&nbsp;»

Le positionnement relatif est le premier type de positionnement que nous allons étudier. Il est très similaire au positionnement statique. Cependant, une fois que l'élément positionné occupe une place dans le cours normal de la mise en page, vous pourrez modifier sa position finale. Vous pourrez par exemple le faire chevaucher d'autres éléments de la page. Poursuivons&nbsp;: mettez à jour la déclaration de `position` dans le code&nbsp;:

```css
position: relative;
```

Si vous sauvegardez et actualisez à ce stade, vous ne verrez aucun changement dans le résultat. Alors, comment modifier la position de l'élément&nbsp;? Vous avez besoin d'employer les propriétés {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} et {{cssxref("right")}} dont nous parlerons dans le prochain paragraphe.

### Présentation de top, bottom, left et right

{{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} et {{cssxref("right")}} sont utilisés conjointement à {{cssxref("position")}} pour définir exactement là où placer l'élément positionné. Pour le tester, ajoutez les déclarations suivantes à la règle `.positioned` dans la CSS&nbsp;:

    top: 30px;
    left: 30px;

> **Note :** les valeurs de ces propriétés peuvent prendre n'importe quelle [unité](/fr/Apprendre/CSS/Introduction_à_CSS/Values_and_units) logiquement attendue — pixels, mm, rem, %, etc.

Si vous enregistrez et actualisez maintenant, vous verrez ce résultat :

```html hidden
<h1>Positionnement relatif</h1>
<p>Je suis élément de base de niveau bloc. Les éléments de niveau de bloc adjacents se trouvent sur de nouvelles lignes en dessous de moi.</p>
<p class="positioned">Par défaut, je couvre 100% de la largeur de mon élément parent et je suis aussi haut que mon contenu enfant. Mes largeur et hauteur totales sont égales aux largeur et hauteur du contenu, plus celles du remplissage, plus celles de l'encadrement.</p>
<p>Entre éléments adjacents, nous sommes séparés par nos marges. En raison de la fusion des marges, nous sommes séparés par la largeur de la plus grande de nos marges, et non par la somme des deux.</p>
<p>Les éléments «&nbsp;inline&nbsp;» <span>comme celui-ci </span>ou <span>cet autre</span> sont sur une même ligne que les nœuds de texte adjacents, s'il y a de la place sur la même ligne. Les éléments «&nbsp;inline&nbsp;» débordants <span>se replient, si possible, sur une nouvelle ligne — comme celle-ci contenant du texte</span>&nbsp;; sinon, ils passent simplement à une nouvelle ligne, un peu comme cette image le fait : <img src="long.jpg"></p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto; }
p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px; }
span {
  background: red;
  border: 1px solid black; }
.positioned {
  position: relative;
  background: yellow;
  top: 30px;
  left: 30px; }
```

{{ EmbedLiveSample('Présentation_de_top,_bottom,_left,_et_right', '100%', 500) }}

Cool, n'est-ce-pas ? Oui, mais ce n'était probablement pas ce à quoi vous vous attendiez. Pourquoi le déplacement s'est‑il effectué vers le bas et à droite si nous avons défini `top` (haut) et `left` (gauche) ? Même si cela peut paraître illogique, c'est la façon dont fonctionne le positionnement relatif. Songez à une force invisible poussant le côté spécifié de l'élément à positionner, le déplaçant ainsi dans la direction opposé. Par exemple, si nous spécifions `top: 30px;`, une force pousse le haut de la boîte, entraînant son déplacement vers le bas de 30px.

> **Note :** à ce stade de l'article, vous pouvez retrouver un exemple ici [`2_relative-positioning.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/2_relative-positioning.html) ([voir le code source](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/2_relative-positioning.html)).

### Positionnement absolu

Le positionnement absolu nous apporte des résultats bien différents. Modifions la déclaration de `position` dans le code :

```css
    position: absolute;
```
Si vous enregistrez et actualisez maintenant, vous verrez quelque chose comme ceci apparaitre :

```html hidden
<h1>Positionnement absolu</h1>
<p>Je suis élément de base de niveau bloc. Les éléments de niveau de bloc adjacents se trouvent sur de nouvelles lignes en dessous de moi.</p>
<p class="positioned">Par défaut, je couvre 100% de la largeur de mon élément parent et je suis aussi haut que mon contenu enfant. Mes largeur et hauteur totales sont égales aux largeur et hauteur du contenu, plus celles du remplissage, plus celles de l'encadrement.</p>
<p>Entre éléments adjacents, nous sommes séparés par nos marges. En raison de la fusion des marges, nous sommes séparés par la largeur de la plus grande de nos marges, et non par la somme des deux.</p>
<p>Les éléments «&nbsp;inline&nbsp;» <span>comme celui-ci </span>ou <span>cet autre</span> sont sur une même ligne que les noeuds de texte adjacents, s'il y a de la place sur la même ligne. Les éléments «&nbsp;inline&nbsp;» débordants <span>se replient, si possible, sur une nouvelle ligne — comme celle-ci contenant du texte</span>&nbsp;; sinon, ils passent simplement à une nouvelle ligne, un peu comme cette image le fait : <img src="long.jpg"></p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto; }
p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px; }
span {
  background: red;
  border: 1px solid black; }
.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px; }
```

{{ EmbedLiveSample('Positionnement_absolu', '100%', 420) }}

Tout d'abord, notez que l'emplacement où l'élément à positionner aurait dû se trouver dans le cours normal de la mise en page du document ne s'y trouve plus. Le premier élément et le troisième sont l'un à côté de l'autre comme si le second n'existait plus ! Dans un sens, c'est le cas. Un élément positionné de manière absolue ne fait plus partie du cours normal de la mise en page. Il se trouve maintenant sur un plan qui lui est propre, séparé de tout le reste. C'est très utile : cela signifie que nous pouvons créer une fonctionnalité d'interface graphique isolée qui n'interfère pas avec la position des autres éléments sur la page. Par exemple, des boîtes d'informations contextuelles (popup), des menus de contrôle, des panneaux déroulants (rollover panels), des fonctionnalités d'interface utilisateur que l'on peut glisser et déposer n'importe où sur la page, et bien plus encore.

Ensuite, notez que la position de l'élément a changé. {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} et {{cssxref("right")}} se comportent différemment avec le positionnement absolu. Au lieu de positionner l'élément en fonction de sa position relative dans la mise en page du document, ils définissent la distance à laquelle l'élément doit se situer par rapport aux côtés de l'élément contenant. Dans ce cas, nous indiquons que l'élément à positionner de manière absolue doit se placer à 30px du haut et à 30px de la gauche de « l'élément conteneur ». (Dans ce cas, le bloc conteneur initial. Voir la section ci-dessous pour plus d'information)

> **Note :** vous pouvez utiliser {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} et {{cssxref("right")}} pour redimensionner les éléments selon vos besoins. Définissez `top: 0; bottom: 0; left: 0; right: 0;` et `margin: 0;` sur les éléments à positionner et voyez ce qu'il se produit ! Réinitialisez le tout ensuite...

> **Note :** Les marges affectent toujours les éléments à positionner. Toutefois, la fusion de marges ne se fait pas.

> **Note :** à ce stade de l'article, vous pouvez voir un exemple ici [`3_absolute-positioning.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/3_absolute-positioning.html) ([voir le code source](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/3_absolute-positioning.html)).

### Contextes de positionnement

Quel élément est « le conteneur » d'un élément positionné de manière absolue ? Par défaut, c'est l'élément {{htmlelement("html")}} — l'élément à position absolue est imbriqué dans l'élément {{htmlelement("body")}} dans le code source HTML, mais dans le rendu final, il est éloigné de 30px du haut et de la gauche du bord de page, qui est l'élément {{htmlelement("html")}}. Cela s'appelle plus précisément **le contexte de positionnement** de l'élément.

Nous pouvons changer ce **contexte de positionnement** — par rapport à quel élément est placé l'élément à positionner en absolu. Cela s'effectue en définissant le positionnement sur un des autres éléments parents — un des éléments dans lequel il est imbriqué (vous ne pouvez pas le positionner par rapport à un élément dans lequel il n'est pas imbriqué). Pour l'illustrer, ajoutez la déclaration suivante à la règle body:

    position: relative;

Cela devrait donner le résultat suivant:

```html hidden
<h1>Contextes de positionnement</h1>

<p>Je suis élément de base de niveau bloc. Les éléments de niveau de bloc adjacents se trouvent sur de nouvelles lignes en dessous de moi.</p>
<p class="positioned">Maintenant je suis positionné de manière absolue par rapport à l'élément <code>&lt;body&gt;</code>, et non par rapport à l'élément <code>&lt;html&gt;</code> !</p>
<p>Entre éléments adjacents, nous sommes séparés par nos marges. En raison de la fusion des marges, nous sommes séparés par la largeur de la plus grande de nos marges, et non par la somme des deux.</p>
<p>Les éléments « inline » <span>comme celui-ci </span>ou <span>cet autre</span> sont sur une même ligne que les noeuds de texte adjacents, s'il y a de la place sur la même ligne. Les éléments « inline » débordants <span>se replient, si possible, sur une nouvelle ligne — comme celle-ci contenant du texte</span> ; sinon, ils passent simplement à une nouvelle ligne, un peu comme cette image le fait : <img src="long.jpg"></p>
```

```css hidden
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

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Contextes_de_positionnement','100%', 420) }}

À présent, l'élément a été positionné par rapport à l'élément {{htmlelement("body")}}.

> **Note :** à ce stade, vous pouvez voir cet exemple ici [`4_positioning-context.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/4_positioning-context.html) ([voir le code source](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/4_positioning-context.html)).

### Présentation du z-index

Tout ce positionnement absolu est amusant, mais il y a autre chose que nous n'avons pas encore considéré — quand les éléments se chevauchent, comment est déterminé l'élément apparaissant au-dessus d'un autre ? Dans les exemples vus jusqu'à présent, nous n'avions qu'un seul élément à positionner dans le contexte ; il apparaissait en haut, car les éléments positionnés l'emportent sur les éléments non positionnés. Qu'en est‑il lorsqu'il y en a plus d'un ?

Ajoutez le code suivant à la CSS, pour faire en sorte que le premier paragraphe soit aussi en positionnement absolu :

    p:nth-of-type(1) {
      position: absolute;
      background: lime;
      top: 10px;
      right: 30px;
    }

A ce stade, vous verrez le premier paragraphe coloré en vert, déplacé hors du cours normal des documents et positionné un peu au-dessus de l'endroit où il se trouvait à l'origine. Il est également empilé sous le paragraphe `.positioned` original, là où les deux se chevauchent. C'est parce que le paragraphe `.positioned` est le deuxième paragraphe dans l'ordre du code source ; les éléments positionnés en dernier dans l'ordre du code source l'emportent sur les éléments positionnés plus en amont dans l'ordre du code source.

Est‑il possible de changer l'ordre d'empilement ? Oui, vous le pouvez avec la propriété {{cssxref("z-index")}}. « z-index » est une référence à l'axe **z**. Vous vous souvenez peut-être de points précédents du source où nous avons discuté des pages Web en utilisant des coordonnées horizontales (axe des x) et verticales (axe des y) pour déterminer le positionnement de choses comme les images de fond et les décalages d'ombres portées. (0,0) est en haut à gauche de la page (ou de l'élément), et les axes x et y vont respectivement vers la droite et vers le bas de la page (pour les langues s'écrivant de gauche à droite, en tout cas).

Les pages Web ont aussi un axe z : une ligne imaginaire qui va de la surface de votre écran, vers votre visage (ou tout ce que vous aimez avoir devant l'écran). Les valeurs de {{cssxref("z-index")}}} affectent l'emplacement des éléments positionnés sur cet axe ; les valeurs positives les déplacent vers le haut de la pile, et les valeurs négatives les déplacent vers le bas de la pile. Par défaut, les éléments positionnés ont tous un `z-index`  `auto`, qui est effectivement 0.

Pour modifier l'ordre d'empilement, ajoutez la déclaration suivante à la règle `p:nth-of-type(1)` :

    z-index: 1;

Voici maintenant l'exemple terminé :

```html hidden
<h1>z-index</h1>


<p>Je suis élément de base de niveau bloc. Les éléments de niveau de bloc adjacents se trouvent sur de nouvelles lignes en dessous de moi.</p>
<p class="positioned">Maintenant je suis positionné de manière absolue par rapport à l'élément <code>&lt;body&gt;</code>, et non par rapport à l'élément <code>&lt;html&lt;html&gt;</code> !</p>
<p>Entre éléments adjacents, nous sommes séparés par nos marges. En raison de la fusion des marges, nous sommes séparés par la largeur de la plus grande de nos marges, et non par la somme des deux.</p>
<p>Les éléments « inline » <span>comme celui-ci </span>ou <span>cet autre</span> sont sur une même ligne que les noeuds de texte adjacents, s'il y a de la place sur la même ligne. Les éléments « inline » débordants <span>se replient, si possible, sur une nouvelle ligne — comme celle-ci contenant du texte</span> ; sinon, ils passent simplement à une nouvelle ligne, un peu comme cette image le fait : <img src="long.jpg"></p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
  position: relative; }
p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px; }
span {
  background: red;
  border: 1px solid black; }
.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px; }
p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
  z-index: 1; }
```

{{ EmbedLiveSample('Présentation_du_z-index', '100%', 400) }}

Notez que `z-index` n'accepte que des valeurs d'index sans unité ; vous ne pouvez pas préciser que vous voulez qu'un élément soit à 23 pixels sur l'axe des z — cela ne fonctionne pas ainsi. Les plus grandes valeurs vont au‑dessus des valeurs plus faibles et c'est à vous d'indiquer les valeurs. Utiliser 2 et 3 aura le même effet que 300 et 40000.

> **Note :** sur ce sujet, vous pouvez voir l'exemple [`5_z-index.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/5_z-index.html) ([voir le code source](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/5_z-index.html)).

### Positionnement fixe

Voyons maintenant le positionnement « fixed ». Cela fonctionne exactement de la même manière que le positionnement absolu, avec une différence essentielle : alors que le positionnement absolu fixe un élément en place par rapport à l'élément {{htmlelement("html")}} ou son parent positionné le plus proche, le positionnement « fixed » fige un élément en place par rapport à la vue par la fenêtre du navigateur elle-même. Cela signifie que vous pouvez créer des éléments d'interface utilisateur utiles qui sont fixés en place, comme des menus de navigation persistants.

Voici un exemple simple pour montrer ce que nous voulons dire. D'abord, supprimez la règle de `p:nth-of-type(1)` et `.positioned` de la CSS.

Maintenant, mettez à jour la règle `body` : supprimez la déclaration `position : relative ;` et ajoutez une hauteur fixe, ainsi :

```css
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}
```

Maintenant, donnez la position `fixed` à l'élément {{htmlelement("h1")}} et centrez‑le en haut de la fenêtre. Ajoutez la règle suivante à la CSS :

```css
h1 {
  position: fixed;
  top: 0;
  width: 500px;
  margin: 0 auto;
  background: white;
  padding: 10px;
}
```

`top: 0;` est requis pour qu'il colle au haut de l'écran ; ensuite nous donnons au titre d'en‑tête la même largeur que la colonne de contenu et utilisons la vieille astuce classique `margin: 0 auto;` pour le centrer. Nous mettons ensuite un fond blanc et un peu de remplissage pour que le contenu ne soit pas visible sous lui.

Si vous enregistrez et actualisez maintenant, vous verrez un petit effet amusant par lequel le titre reste fixe et le contenu semble défiler vers le haut et disparaître en dessous. Mais nous pouvons l'améliorer davantage — actuellement, une partie du contenu commence sous l'en‑tête. En effet, l'en-tête positionné n'apparaît plus dans le cours du document, de sorte que le reste du contenu se déplace vers le haut. Nous devons tout baisser un peu ; nous pouvons le faire en fixant une marge supérieure sur le premier paragraphe. Ajoutez ceci maintenant :

```css
p:nth-of-type(1) {
  margin-top: 60px;
}
```

Voici l'exemple terminé :

```html hidden
<h1>Positionnement fixe</h1>

<p>Je suis élément de base de niveau bloc. Les éléments de niveau de bloc adjacents se trouvent sur de nouvelles lignes en dessous de moi.</p>
<p class="positioned">Je ne suis plus positionné...</p>
<p>Entre éléments adjacents, nous sommes séparés par nos marges. En raison de la fusion des marges, nous sommes séparés par la largeur de la plus grande de nos marges, et non par la somme des deux.</p>
<p>Les éléments «&nbsp;inline&nbsp;» <span>comme celui-ci </span>ou <span>cet autre</span> sont sur une même ligne que les noeuds de texte adjacents, s'il y a de la place sur la même ligne. Les éléments «&nbsp;inline&nbsp;» débordants <span>se replient, si possible, sur une nouvelle ligne — comme celle-ci contenant du texte</span>&nbsp;; sinon, ils passent simplement à une nouvelle ligne, un peu comme cette image le fait : <img src="long.jpg"></p>
```

```css hidden
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
  margin: 0 auto;
  background: white;
  padding: 10px;
}

p:nth-of-type(1) {
  margin-top: 60px;
}
```

{{ EmbedLiveSample('Positionnement_fixe', '100%', 400) }}

> **Note :** à ce stade de l'article, vous pouvez voir un exemple en direct ici  [`6_fixed-positioning.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/6_fixed-positioning.html) (voir le [code source](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/6_fixed-positioning.html)).

### « position: sticky »

Il y a une autre valeur de positionnement disponible appelée `position : sticky`. Elle est un peu plus récente que les autres. Il s'agit essentiellement d'un hybride entre position relative et position fixe : l'élément à positionner est en positionnement relatif jusqu'à un certain seuil (par ex. 10px du haut de la fenêtre), seuil au delà duquel il est en positionnement fixe. Ce positionnement s'utilise par exemple pour faire défiler une barre de navigation avec la page jusqu'à un certain point et ensuite coller en haut de la page.

#### Exemple simple

```html hidden
<h1>Positionnement collant</h1>

<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

<div class="positioned">Collant : relatif en deça, fixe au delà</div>

<p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

.positioned {
  background: rgba(255,84,104,.3);
  border: 2px solid rgb(255,84,104);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

```css
.positioned {
  position: sticky;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Exemple_simple', '100%', 200) }}

#### Index déroulant

Une utilisation courante pleine d'intérêt de `position: sticky` permet de créer une page d'index déroulante dans laquelle les divers en‑tête restent collés en haut de la page une fois qu'ils l'ont atteint. Le balisage d'un exemple de ce type ressemble à ceci :

```html
<h1>Positionnement collant</h1>

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

Le CSS pourrait ressembler à ce qui suit. Dans le cours normal, les éléments {{htmlelement("dt")}} défilent avec le contenu. Quand on ajoute `position : sticky` à l'élément {{htmlelement("dt")}} avec une valeur {{cssxref("top")}} de 0, les navigateurs prenant en charge ce positionnement colleront les titres au sommet de la vue de la fenêtre au fur et à mesure qu'ils atteignent cette position. Chaque en-tête suivant remplacera l'en-tête précédent au fur et à mesure que le contenu défile.

```css
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

```css hidden
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}

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

{{ EmbedLiveSample('Index_déroulant', '100%', 200) }}

> **Note :** à ce stade de l'article, vous pouvez voir un exemple en direct ici [`7_sticky-positioning.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/7_sticky-positioning.html) (voir le [code](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/7_sticky-positioning.html) [source](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/7_sticky-positioning.html)).

## Résumé

Je suis sûr que vous avez eu du plaisir à jouer avec le positionnement de base ; bien que ce ne soit pas une méthode à utiliser pour des mises en page complètes, comme vous pouvez le voir il y a beaucoup de tâches pour lesquelles il est adapté.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout")}}

## Voir aussi

- Référence de la propriété {{cssxref("position")}}.
- [Exemples pratiques de positionnement](/fr/docs/Learn/CSS/CSS_layout/Practical_positioning_examples), pour quelques idées utiles supplémentaires.

## Dans ce module

- [Introduction to CSS layout](/fr/docs/Learn/CSS/CSS_layout/Introduction)
- [Normal Flow](/fr/docs/Learn/CSS/CSS_layout/Normal_Flow)
- [Flexbox](/fr/docs/Learn/CSS/CSS_layout/Flexbox)
- [Grid](/fr/docs/Learn/CSS/CSS_layout/Grids)
- [Floats](/fr/docs/Learn/CSS/CSS_layout/Floats)
- [Positioning](/fr/docs/Learn/CSS/CSS_layout/Positioning)
- [Multiple-column Layout](/fr/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Legacy Layout Methods](/fr/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
- [Supporting older browsers](/fr/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
- [Fundamental Layout Comprehension Assessment](/fr/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
