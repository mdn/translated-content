---
title: Méthodes de mises en page traditionnelles
slug: Learn/CSS/CSS_layout/Legacy_Layout_Methods
tags:
  - Apprendre
  - Boîtes flottantes
  - CSS
  - Disposition
  - Débutant
  - Guide
  - Héritage
  - systèmes de trames
translation_of: Learn/CSS/CSS_layout/Legacy_Layout_Methods
original_slug: Apprendre/CSS/CSS_layout/Legacy_Layout_Methods
---
{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-Column_Layout", "Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}

Les systèmes de trames sont courants dans les mises en page avec une CSS, mais avant la création de l'application «&nbsp;CSS Grid Layout&nbsp;», ces mises en page étaient mises en œuvre à l'aide de boîtes flottantes ou autres. Vous imaginiez votre mise en page sous la forme d'un nombre fixe de colonnes (par exemple 4, 6 ou 12), puis insériez des colonnes de contenu dans ces colonnes imaginaires. Dans cet article, nous allons explorer le fonctionnement de ces méthodes traditionnelles anciennes pour que vous compreniez comment elles sont utilisées si vous travaillez sur un projet ancien.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis:</th>
      <td>
        Les fondamentaux du HTML (voyez
        <a href="/fr/Apprendre/HTML/Introduction_à_HTML">Introduction au HTML</a
        >) et une idée du fonctionnement de CSS (voyez
        <a href="/fr/Apprendre/CSS/Introduction_à_CSS">Introduction à CSS</a> et
        <a href="/fr/docs/Apprendre/CSS/styliser_boites">Styles de boîtes</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif:</th>
      <td>
        Comprendre les concepts fondamentaux derrière les systèmes de
        disposition en trame utilisés avant que CSS Grid Layout soit disponible
        dans les navigateurs.
      </td>
    </tr>
  </tbody>
</table>

## Mise en page et systèmes de trames avant CSS Grid Layout

Il peut sembler surprenant pour un désigner web que les CSS n'avaient pas de système de disposition en trame intégré jusqu'à peu. Au lieu de cela, nous utilisions diverses méthodes peu performantes pour créer des designs à trames. Nous appelerons maintenant ces méthodes «&nbsp;méthodes héritées&nbsp;».

Pour les nouveaux projets, dans la plupart des cas, CSS Grid Layout forme la base de toute mise en page en combinaison avec une ou plusieurs autres méthodes modernes. Vous rencontrerez cependant de temps en temps des «&nbsp;systèmes de trame&nbsp;» utilisant ces méthodes héritées. Il est intéressant de comprendre comment elles fonctionnent et en quoi elles différent de CSS Grid Layout.

Cette leçon explique comment fonctionnent les systèmes et les cadres de trames se fondant sur des boîtes flottantes et Flexbox. Après avoir étudié «&nbsp;Grid Layout&nbsp;», vous serez probablement surpris de voir à quel point tout cela semble compliqué ! Ces connaissances vous seront utile si vous avez besoin de créer du code de recours pour les navigateurs qui ne prenent pas en charge les nouvelles méthodes&nbsp;; de plus, elles vous permettront de travailler sur des projets existants qui utilisent ces types de systèmes.

Gardons présent à l'esprit, en explorant ces systèmes, qu'aucun d'entre eux ne crée réellement une trame de la même manière que CSS Grid Layout. Leur mode de fonctionnement consiste à donner une taille aux objets et à les pousser pour les aligner d'une manière figurant une trame.

## Disposition sur deux colonnes

Débutons avec l'exemple le plus simple qui soit — une disposition sur deux colonnes. Vous pouvez suivre en créant un nouveau fichier `index.html` sur l'ordinateur, en le remplissant avec le [modèle HTML simple](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html) et en y insérant le code ci-dessous aux endroits appropriés. À la fin du paragraphe, vous verrez un exemple en direct de ce à quoi devrait ressembler le code final.

Tout d'abord, nous avons besoin de contenu à mettre dans nos colonnes. Remplacez ce qui se trouve à l'intérieur de `body` par ceci :

```html
<h1>Exemple de disposition sur 2 colonnes</h1>
<div>
  <h2>Première colonne</h2>
  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>
</div>

<div>
  <h2>Seconde colonne</h2>
  <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
</div>
```

Chacune de ces colonnes nécessite un élément extérieur conteneur du dit contenu et manipulons‑le en bloc.. Dans notre exemple, nous avons choisi des éléments {{htmlelement("div")}}, mais vous auriez pu choisir n'importe quoi d'autre sémantiquement approprié comme un élément  {{htmlelement("article")}}, {{htmlelement("section")}} ou {{htmlelement("aside")}} ou tout autre.

Pour la CSS maintenant appliquons ce qui suit au HTML comme base de configuration&nbsp;:

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}
```

Le corps du document prendra 90% de la largeur de fenêtre de la vue jusqu'à atteindre 900px de large&nbsp;; au delà, il restera fixe à cette largeur et se centrera lui-même dans la fenêtre. Par défaut, ses enfants (les éléments {{htmlelement("h1")}}} et les deux {{htmlelement("div")}}) prenent 100% de la largeur du corps. Si nous voulons que les deux {{htmlelement("div")}} flottent l'un à côté de l'autre, nous devons fixer la somme de leur largeurs à 100% de la largeur totale de leur parent ou moins pour qu'ils puissent se placer l'un à côté de l'autre. Ajoutez ceci au bas de la CSS :

```css
div:nth-of-type(1) {
  width: 48%;
}

div:nth-of-type(2) {
  width: 48%;
}
```

Ici nous faisons en sorte que chaque élément représente 48% de la largeur du parent — soit 96% au total, laissant 4% libres pour jouer le rôle de gouttière entre les deux colonnes et leur donner un peu d'air. Maintenant nous avons juste à faire flotter les deux colonnes ainsi&nbsp;:

```css
div:nth-of-type(1) {
  width: 48%;
  float: left;
}

div:nth-of-type(2) {
  width: 48%;
  float: right;
}
```

En mettant tout ensemble, voici le résultat&nbsp;:

### Exemple complet

```html hidden
<h1>Exemple de disposition sur 2 colonnes</h1>

<div>
  <h2>Première colonne</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>
</div>

<div>
  <h2>Seconde colonne</h2>
  <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
</div>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}

div:nth-of-type(1) {
  width: 48%;
  float: left;
}

div:nth-of-type(2) {
  width: 48%;
  float: right;
}
```

{{ EmbedLiveSample('Exemple_complet', '100%', 520) }}

Notez que nous avons utilisé des pourcentages pour définir les largeurs — c'est la bonne stratégie, cela crée une **disposition fluide**, s'ajustant à diverses tailles d'écran et gardant les mêmes proportions pour les tailles d'écran plus petites. Modifiez la taille de la fenêtre du navigateur pour voir par vous‑même. C'est un outil adapté au désign web adaptatif.

> **Note :** Vous pouvez voir cet exemple en cours à la page [0_two-column-layout.html](http://mdn.github.io/learning-area/css/css-layout/floats/0_two-column-layout.html) (voyez aussi son  [code source](https://github.com/mdn/learning-area/blob/master/css/css-layout/floats/0_two-column-layout.html)).

## Ancienne création d'un cadre de trames

La plupart des anciens cadres de création de trames utilisaient le comportement de la propriété {{cssxref("float")}} pour faire flotter les colonnes les unes à côté des autres pour créer quelque chose qui ressemble à des trames. Travailler le processus de création d'une trame avec des boîtes flottantes vous en montre le fonctionnement et sert également d'introduction à certains concepts plus avancés pour construire les choses apprises dans la leçon sur le [dégagement des boîtes flottantes](/fr/docs/Learn/CSS/CSS_layout/Floats).

Le type de cadre de trames le plus facile à créer est un cadre de largeur fixe — il faut simplement déterminer la largeur totale du désign, le nombre de colonnes voulues et la largeur des gouttières et des colonnes. Si nous décidons plutôt de disposer ce design sur une trame avec des colonnes s'adaptant à la largeur de vue du navigateur, nous devrons calculer les pourcentages de largeur des colonnes et celui des gouttières entre colonnes.

Dans les paragraphes suivants, nous verrons comment créer ces deux types. Nous allons faire une trame à 12 colonnes — un choix courant considéré comme adaptable à diverses situations étant donné que 12 est bien divisible par 6, 4, 3 et 2.

### Une simple trame de largeurs fixes

Créons d'abord une trame à colonnes à largeur fixe.

Commençons par faire une copie locale du fichier exemple [simple-grid.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/simple-grid.html) qui comporte le balisage suivant dans `body`.

```html
<div class="wrapper">
  <div class="row">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
    <div class="col">4</div>
    <div class="col">5</div>
    <div class="col">6</div>
    <div class="col">7</div>
    <div class="col">8</div>
    <div class="col">9</div>
    <div class="col">10</div>
    <div class="col">11</div>
    <div class="col">12</div>
  </div>
  <div class="row">
    <div class="col span1">13</div>
    <div class="col span6">14</div>
    <div class="col span3">15</div>
    <div class="col span2">16</div>
  </div>
</div>
```

Le but est d'en faire une trame de démonstration sur deux lignes à partir des 12 colonnes — la ligne haute montre la taille de colonnes prises isolément, la ligne basse montre des zones de taille différentes à partir de cette trame.

![](simple-grid-finished.png)

À l'élément {{htmlelement("style")}}, ajoutons le code ci-après. Il donne une largeur de 980 pixels au conteneur enveloppe avec un remplissage de 20 pixels du côté droit. Cela nous laisse 960 pixels comme largeur totale pour les colonnes et les gouttières — dans ce cas, le remplissage est soustrait à la largeur totale du contenu car nous avons fixé la valeur de  {{cssxref("box-sizing")}} à `border-box` sur tous les éléments du site (voir [Modification totale du modèle de boîte](</fr/docs/Apprendre/CSS/Styling_boxes/Box_model_recap#Modification totale du modèle de boîte>) pour plus d'explications).

```css
* {
  box-sizing: border-box;
}

body {
  width: 980px;
  margin: 0 auto;
}

.wrapper {
  padding-right: 20px;
}
```

Utilisez maintenant le conteneur enveloppe de chaque ligne de la trame pour dissocier et dégager chaque ligne. Ajoutez la règle suivante sous la règle précédente :

```css
.row {
  clear: both;
}
```

Appliquer ce dégagement signifie que nous n'avons pas besoin de remplir totalement chaque rangée (ligne) d'éléments remplissant totalement les douze colonnes. Les lignes resteront séparées et n'interfèreront pas entre elles.

Les gouttières entre colonnes ont une largeur de 20 px. Ces gouttières sont faites en créant un marge du côté droit de chaque colonne ‑ y compris la première pour compenser le remplissage de 20 pixels du côté droit du conteneur. Nous avons donc 12 gouttières en tout — 12 x 20 = 240.

Il convient de soustraire cela de la largeur totale de 960 pixels, ce qui laisse 720 pixels pour les colonnes. En divisant par 12, nous voyons que chaque colonne aura une largeur de 60 pixels.

L'étape suivante consiste à créer un règle pour la classe `.col` la faisant flotter à gauche lui laissant une marge gauche de {{cssxref("margin-left")}} de 20 pixels formant la gouttière et une largeur {{cssxref("width")}} de 60 pixels. Ajoutez la règle suivante en fin de la CSS&nbsp;:

```css
.col {
  float: left;
  margin-left: 20px;
  width: 60px;
  background: rgb(255, 150, 150);
}
```

La ligne supérieure des colonnes unitaires est maintenant disposées en tant que trame.

> **Note :** Nous avons aussi donné à chaque colonne une couleur légèrement rosée pour que vous puissiez voir exactement l'espace pris par chacune.

Les conteneurs destinés à accueillir plusieurs colonnes doivent être d'une classe spéciale pour pouvoir ajuster leurs valeurs {{cssxref("width")}} en fonction du nombre de colonnes requis (plus les gouttières intermédiaires). Nous devons créer une classe supplémentaire pour permettre aux conteneurs de s'étendre de 2 à 12 colonnes. Cette largeur est le résultat de l'addition de la largeur de toutes les colonnes plus les largeurs des gouttières dont le nombre est toujours inférieur de 1 au nombre de colonnes.

Ajoutez ce qui suit en bas de la CSS&nbsp;:

```css
/* Deux largeurs de colonnes (120px) plus une largeur de gouttière (20px) */
.col.span2 { width: 140px; }
/* Trois largeurs de colonnes (180px) plus deux largeurs de gouttières (40px) */
.col.span3 { width: 220px; }
/* et ainsi de suite... */
.col.span4 { width: 300px; }
.col.span5 { width: 380px; }
.col.span6 { width: 460px; }
.col.span7 { width: 540px; }
.col.span8 { width: 620px; }
.col.span9 { width: 700px; }
.col.span10 { width: 780px; }
.col.span11 { width: 860px; }
.col.span12 { width: 940px; }
```

Une fois ces classes crées, nous pouvons disposer des colonnes de largeur différentes sur la trame. Enregistrez et chargez cette page dans le navigateur pour voir l'effet.

> **Note :** Si vous avez du mal à faire fonctionner cet exemple, comparez‑le avec notre [version terminée](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/simple-grid-finished.html) sur GitHub (la voir aussi [en fonctionnement direct](http://mdn.github.io/learning-area/css/css-layout/grids/simple-grid-finished.html)).

Modifiez les classes de vos éléments soit en ajoutant ou retirant certains conteneurs, pour voir comment faire varier la disposition. Par exemple, vous pouvez faire en sorte que la deuxième ligne ressemble à ceci&nbsp;:

```css
<div class="row">
  <div class="col span8">13</div>
  <div class="col span4">14</div>
</div>
```

Maintenant vous avez un système de trame fonctionnel. Il suffit simplement de définir les lignes et le nombre de colonnes dans chaque ligne, puis de remplir chaque conteneur avec le contenu voulu. Super !

### Creation d'une trame fluide

Cette trame est tout à fait correcte, mais elle a une largeur fixe. Nous souhaitons vraiment une trame souple (fluide) qui s'élargisse ou s'étrécisse avec l'espace disponible dans la fenêtre de vue du navigateur. Pour ce faire, il faut transformer les largeurs de référence de pixels en pourcentages.

L'équation qui transforme une largeur fixe en pourcentage est la suivante :

    cible / contexte = résultat

Pour la largeur de la première colonne, la **largeur cible** est de 60 pixels et le **contexte** est l'enveloppe de 960 pixels. Avec la formule ci‑dessus nous calculons le pourcentage.

    60 / 960 = 0.0625

Décalant de deux le point décimal nous obtenons un pourcentage de 6.25%. Donc, dans la CSS, nous pouvons remplacer la largeur de colonne de 60 pixels par 6.25%.

En faisant de même pour la largeur de la gouttière&nbsp;:

    20 / 960 = 0.02083333333

Donc, remplaçons par 2.08333333% la valeur 20 pixels de {{cssxref("margin-left")}} dans la règle `.col` et de {{cssxref("padding-right")}} dans la règle `.wrapper`.

#### Mise à jour de la trame

Pour ce paragraphe, faites une autre copie de la page exemple précédente ou faites une copie locale du code de [simple-grid-finished.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/simple-grid-finished.html) comme point de départ.

Mettez à jour la deuxième règle CSS (avec le sélecteur `.wrapper`) comme suit&nbsp;:

```css
body {
  width: 90%;
  max-width: 980px;
  margin: 0 auto;
}

.wrapper {
  padding-right: 2.08333333%;
}
```

Outre la définition du pourcentage comme valeur de {{cssxref("width")}}, nous avons ajouté la propriété {{cssxref("max-width")}} de façon à plafonner une mise en page qui deviendrait trop large.

Ensuite, mettez à jour les quatre règles CSS (du sélecteur `.col`) ainsi&nbsp;:

```css
.col {
  float: left;
  margin-left: 2.08333333%;
  width: 6.25%;
  background: rgb(255, 150, 150);
}
```

Maintenant vient la partie un peu plus laborieuse — nous devons mettre à jour toutes les règles `.col.span` en utilisant des largeurs en pourcentage au lieu de pixels. Cela prend un peu de temps avec une calculette&nbsp;; pour vous économiser du travail, nous l'avons fait pour vous.

Mettez à jour le bloc bas des règles CSS avec ce qui suit&nbsp;:

```css
/* Deux largeurs de colonnes (12.5%) plus une largeur de gouttière (2.08333333%) */
.col.span2 { width: 14.58333333%; }
/* Trois largeurs de colonnes (18.75%) plus deux largeurs de gouttière (4.1666666%) */
.col.span3 { width: 22.91666666%; }
/* Et ainsi de suite... */
.col.span4 { width: 31.24999999%; }
.col.span5 { width: 39.58333332%; }
.col.span6 { width: 47.91666665%; }
.col.span7 { width: 56.24999998%; }
.col.span8 { width: 64.58333331%; }
.col.span9 { width: 72.91666664%; }
.col.span10 { width: 81.24999997%; }
.col.span11 { width: 89.5833333%; }
.col.span12 { width: 97.91666663%; }
```

Maintenant enregistrez le code, chargez le dans le navigateur et modifiez la largeur de vue — vous devez constater que la largeur des colonnes s'ajuste comme il convient.

> **Note :** Si vous avez du mal à faire fonctionner l'exemple ci‑dessus, comparez‑le avec notre [version terminée sur GitHub](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/fluid-grid.html) (voir aussi celle [s'exécutant en direct](http://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid.html)).

### Faciliter les calculs avec la fonction calc()

Vous pouvez utiliser la fonction {{cssxref("calc()")}} pour faire les calculs à l'intérieur même de la CSS — la fonction vous permet d'insérer de simples expressions mathématiques pour calculer la valeur qu'il convient de donner à la propriété CSS. C'est utile quand les calculs sont complexes ; vous pouvez même effectuer un calcul avec des unités différentes, par exemple «&nbsp;je veux que la hauteur de cet élément soit toujours égale à 100% de son parent moins 50px&nbsp;». Voir [cet exemple dans le didacticiel MediaRecorder API](</fr/docs/Web/API/MediaRecorder_API/Using_the_MediaRecorder_API#Keeping_the_interface_constrained_to_the_viewport_regardless_of_device_height_with_calc()>).

Revenon à nos trames&nbsp;! Toute colonne se développant au delà de la première a une largeur totale de 6.25% multipliée par le nombre de colonnes précédentes plus 2.08333333% multiplié par le nombre de gouttières (qui doit toujours être égal au nombre de colonnes moins 1). La fonction `calc()` nous permet de faire ce calcul dans la valeur `width` même, ainsi pour tout élément au-delà de la colonne 4 nous pouvons écrire, par exemple&nbsp;:

```css
.col.span4 {
  width: calc((6.25%*4) + (2.08333333%*3));
}
```

Remplacez le bloc de règles le plus bas par le suivant, puis actualisez le navigateur pour constater que vous obtenez un résultat identique&nbsp;:

```css
.col.span2 { width: calc((6.25%*2) + 2.08333333%); }
.col.span3 { width: calc((6.25%*3) + (2.08333333%*2)); }
.col.span4 { width: calc((6.25%*4) + (2.08333333%*3)); }
.col.span5 { width: calc((6.25%*5) + (2.08333333%*4)); }
.col.span6 { width: calc((6.25%*6) + (2.08333333%*5)); }
.col.span7 { width: calc((6.25%*7) + (2.08333333%*6)); }
.col.span8 { width: calc((6.25%*8) + (2.08333333%*7)); }
.col.span9 { width: calc((6.25%*9) + (2.08333333%*8)); }
.col.span10 { width: calc((6.25%*10) + (2.08333333%*9)); }
.col.span11 { width: calc((6.25%*11) + (2.08333333%*10)); }
.col.span12 { width: calc((6.25%*12) + (2.08333333%*11)); }
```

> **Note :** Vous pouvez voir la version terminée dans [fluid-grid-calc.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/fluid-grid-calc.html) (la voir aussi  [en direct](http://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid-calc.html)).

> **Note :** Si vous n'arrivez pas à faire fonctionner ce qui précède, cela peut être dû au fait que votre navigateur ne prend pas en charge la fonction `calc()`, même si elle est assez bien prise en charge parmi les navigateurs — au‑delà de IE9.

### Systèmes de trames «&nbsp;sémantiques&nbsp;» vs. «&nbsp;non sémantiques&nbsp;»

Ajouter des classes au balisage pour définir une mise en page signifie que le contenu et le balisage sont liés à la présentation visuelle. Cette utilisation de classes CSS est parfois décrite comme étant «&nbsp;non sémantique&nbsp;» — montrant comment le contenu est disposé — par opposition à l'utilisation sémantique des classes qui décrit le contenu. C'est le cas de nos classes `span2`, `span3`, etc.

Ce n'est pas la seule approche. À la place, vous pouvez décider de la trame, puis ajouter les informations de taille aux règles des classes sémantiques existantes. Par exemple, si vous avez un élément {{htmlelement("div")}} de classe `content` que vous voulez développer sur huit colonnes, vous pouvez copier sur la largeur de la classe `span8`, ce qui vous donne une règle :

```css
.content {
  width: calc((6.25%*8) + (2.08333333%*7));
}
```

> **Note :** Si vous deviez utiliser un préprocesseur tel que [Sass](http://sass-lang.com/), vous pourriez créer un simple mixage pour qu'il insère cette valeur pour vous.

### Décalage du conteneur d'une trame

La trame créée plus haut fonctionne bien tant que tous les conteneurs sont placés à l'aplomb du côté gauche d'une colonne de trame. Si nous voulons laisser une colonne vide avant le premier conteneur — ou entre les conteneurs — nous devons créer une classe `offset` pour ajouter une marge gauche à notre site pour le décaler visuellement dans la grille. Encore des calculs !

Essayons.

Démarrons avec le code précédent ou utilisons le fichier [fluid-grid.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/fluid-grid.html) comme point de départ.

Créons dans la CSS une classe qui décale un élément de conteneur d'une largaur de colonne. Ajoutons ce qui suit au bas de la CSS&nbsp;:

```css
.offset-by-one {
  margin-left: calc(6.25% + (2.08333333%*2));
}
```

Ou, si vous préférez calculer le pourcentage vous-même, utilisez&nbsp;:

```css
.offset-by-one {
  margin-left: 10.41666666%;
}
```

Vous pouvez maintenant ajouter cette classe à tout conteneur pour lequel vous voulez laisser une colonne vide sur sa gauche. Par exemple, si vous avez ceci dans votre HTML&nbsp;:

```html
<div class="col span6">14</div>
```

remplacez‑le par&nbsp;:

```html
<div class="col span5 offset-by-one">14</div>
```

> **Note :** Notez que vous devez réduire le nombre de colonnes réparties pour faire de la place au décalage&nbsp;!

Chargez et actualisez pour voir la différence, ou bien vérifiez avec l'exemple [fluid-grid-offset.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/fluid-grid-offset.html) (voir aussi [l'exécution directement](http://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid-offset.html)). L'exemple terminé doit ressembler à ceci&nbsp;:

![](offset-grid-finished.png)

> **Note :** Comme exercice supplémentaire, pouvez‑vous implémenter une classe `offset-by-two`&nbsp;?

### Limitations des trames de boîtes flottantes

En utilisant un tel système, vous devez veiller à ce que la somme des largeurs doit correcte et que ne soit pas inclus d'éléments dans une ligne qui s'étendent sur plus de colonnes que la rangée peut en contenir. En raison du mode de fonctionnement des boîtes flottantes, si le nombre de colonnes de la grille devient trop large pour la trame, les éléments d'extrémité descendront sur la ligne suivante et casseront la trame.

N'oubliez pas non plus que si le contenu des éléments s'élargit au-delà des rangées qu'ils occupent, il y aura débordement et tout sera gâché.

La plus grande limite de ce système est essentiellement son caractère unidimensionnel. Il s'agit de colonnes et de répartition d'éléments transversaux, mais pas de lignes. Il est très difficile avec ces anciennes méthodes de mise en page de contrôler la hauteur des éléments sans fixer explicitement une hauteur, et c'est aussi une approche très rigide — cela ne fonctionne que si vous pouvez garantir que le contenu est d'une hauteur donnée..

## Trames Flexbox&nbsp;?

Si vous avez lu le précédent article à propors de Flexbox, vous pourriez penser que Flexbox est la solution idéale pour créer un système de trames. Il existe actuellement nombre de systèmes de grille fondés sur Flexbox et Flexbox peut résoudre beaucoup de problèmes mis en évidence lors de la création de notre trame ci-dessus.

Cependant, Flexbox n'a jamais été conçu comme système de trames&nbsp;: il conduit à un nouvel ensemble de défis lorsqu'il est utilisé comme tel. Comme simple exemple, prenons le même exemple que celui utilisé ci-dessus et utilisons la CSS suivante pour mettre en page les classes `wrapper`, `row` et `col` :

```css
body {
  width: 90%;
  max-width: 980px;
  margin: 0 auto;
}

.wrapper {
  padding-right: 2.08333333%;
}


.row {
  display: flex;
}

.col {
  margin-left: 2.08333333%;
  margin-bottom: 1em;
  width: 6.25%;
  flex: 1 1 auto;
  background: rgb(255,150,150);
}
```

Faites ces remplacements dans votre exemple, ou regardez l'exemeple de code [flexbox-grid.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/flexbox-grid.html) (voir aussi en  [exécution directe](http://mdn.github.io/learning-area/css/css-layout/grids/flexbox-grid.html)).

Ici, nous transformons chaque rangée en conteneur flexible. Avec une trame fondée sur Flexbox, nous avons encore besoin de rangées pour avoir des éléments tant que leur somme est inférieure à 100%. Nous avons réglé ce conteneur à `display : flex`.

Pour `.col` nous fixons à 1 la première valeur ({{cssxref("flex-grow")}}) de la propriété  {{cssxref("flex")}}, ainsi nos éléments peuvent s'élargir, la deuxième valeur ({{cssxref("flex-shrink")}}) à 1 également, ainsi les éléments peuvent s'étrécir, et la troisième valeur ({{cssxref("flex-basis")}}) à `auto`. Comme la valeur {{cssxref("width")}} de l'élément est fixée, `auto` utilisera cette valeur en tant que valeur de `flex-basis`.

Sur la ligne haute, nous disposons de douze boîtes nettes sur la trame et elle s'élargissent ou s'étrécissent de manière égale quand nous modifions la largeur de la vue. Sur la ligne suivante, toutefois, nous n'avons que quatre éléments et ceux-ci s'élargissent ou s'étrécissent à partir de la base de 60px. Avec seulement quatre d'entre eux ils peuvent s'élargir un peu plus que les éléments de la ligne au‑dessus, le résultat étant qu'ils occupent tous la même largeur sur la deuxième ligne.

![](flexbox-grid-incomplete.png)

Pour corriger cela, nous avons encore besoin d'inclure les classes `span` pour donner une largeur qui remplave la valeur donnée par `flex-basis` pour cet élément.

Également, ils ne respectent pas la trame utilisée par les éléments au‑dessus car ils ne «&nbsp;savent&nbsp;» rien à son propos.

Flexbox est un design **mono-dimensionnel** par conception. Il compose avec une seule dimentsion, celle d'une ligne ou d'une colonne. Nous ne pouvons pas créer une trame stricte pour les colonnes **et** pour les lignes, ce qui signifie que si nous utilisons Flexbox pour une trame, nous devons encore calculer les pourcentages comme pour la disposition en boîtes flottantes.

Dans votre projet, vous pouvez toujours choisir d'utiliser une «&nbsp;trame&nbsp;» Flexbox en raison des capacités d'alignement et de distribution de l'espace supplémentaires que Flexbox offre pour les boites flottantes. Mais sachez que vous utilisez encore un outil pour autre chose que ce pour quoi il a été conçu. Vous pouvez donc avoir l'impression d'être obligé de passer par un tas de circonvolutions pour obtenir le résultat final souhaité.

## Systèmes de trame tierces parties

Maintenant que nous avons compris la mathématique derrière les calculs de grille, nous sommes au bon endroit pour examiner certains des systèmes de trame tierces parties couramment utilisés. Si vous faite une recherche web pour «&nbsp;CSS Grid framework&nbsp;», vous vous trouverez devant une liste de choix énorme. Les canevas populaires tels que [Bootstrap](http://getbootstrap.com/) et [Foundation](http://foundation.zurb.com/) incluent un système de trame. Il existe également des systèmes de trames autonomes, développés soit à l'aide des CSS, soit à l'aide de préprocesseurs.

Voyons un de ces systèmes autonomes&nbsp;: il montre les techniques courantes pour travailler dans un cadre de trames. La trame que nous allons utiliser fait partie de Skeleton, un simple canevas CSS.

Commençons par visiter le [site web de Skeleton](http://getskeleton.com/) et choisissons «&nbsp;Download&nbsp;» pour télécharger le fichier ZIP. Faisons l'extraction et copions les fichiers _skeleton.css_ et _normalize.css_ dans un nouveau répertoire.

Faites une copie de [html-skeleton.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/html-skeleton.html) et enregistrez le dans le même répertoire que _skeleton.css_ et _normalize.css_.

Incorporez les .css _skeleton_ et _normalize_ dans la page HTML, en ajoutant ce qui suit dans `head`&nbsp;:

```html
<link href="normalize.css" rel="stylesheet">
<link href="skeleton.css" rel="stylesheet">
```

Skeleton inclut plus qu'un système de grille — il contient aussi des CSS pour la typographie et autres éléments de page que vous pouvez utiliser comme point de départ. Toutefois nous les laisserons de côté pour l'instant — c'est la trame qui nous interesse pour le moment.

> **Note :** [Normalize](/fr/docs/) est une petite bibliothèque réellement utile écrite par Nicolas Gallagher, bibliothèque qui fait automatiquement quelques corrections sur les dispositions de base et rend le style des éléments par défaut plus conhérent entre les divers navigateurs.

Nous utiliserons un HTML similaire à celui de notre dernier exemple. Ajoutez ce qui suit dans le corps du HTML&nbsp;:

```html
<div class="container">
  <div class="row">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
    <div class="col">4</div>
    <div class="col">5</div>
    <div class="col">6</div>
    <div class="col">7</div>
    <div class="col">8</div>
    <div class="col">9</div>
    <div class="col">10</div>
    <div class="col">11</div>
    <div class="col">12</div>
  </div>
  <div class="row">
    <div class="col">13</div>
    <div class="col">14</div>
    <div class="col">15</div>
    <div class="col">16</div>
  </div>
</div>
```

Pour commencer à utiliser Skeleton nous devons donner à l'élément enveloppe {{htmlelement("div")}} une classe `container` — elle est déjà comprise dans le HTML. Ceci centre le contenu avec une largeur maximale de 960 pixels. Vous pouvez voir que les boîtes ne deviennent plus jamais plus large que 960 pixels.

Regardez dans le fichier skeleton.css, vous verrez la CSS appliquée quand on se sert de cette classe. L'élément `<div>` est centré en utilisant la valeur `auto` pour les marges droite et gauche ; de plus, un remplissage de 20 pixels est appliqué à droite et à gauche. Skeleton fixe également la propriété {{cssxref("box-sizing")}} à la valeur `border-box` comme nous l'avions fait plu tôt et donc le remplissage et l'encadrement de cet élément seront inclus dans la largeur totale.

```css
.container {
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
```

Les éléments ne peuvent faire partie d'une trame que s'ils sont à l'intérieur d'une ligne, donc avec notre exemple précédent nous aurons besoin d'un `<div>` supplémentaire ou d'un autre élément de la classe `row` imbriqué entre le `<div>` de `content` et les véritables conteneurs `<div>` de contenu. Nous avons aussi déjà fait cela.

Disposons maintenant les boîtes conteneur. Skeleton est fondé sur une trame de 12 colonnes. Les boîtes de la ligne supérieure nécessitent toutes des classes `one column` pour qu'elles se répartissent à raison de une par colonne.

Ajoutez maintenant cet extrait de lignes de code&nbsp;:

```html
<div class="container">
  <div class="row">
    <div class="one column">1</div>
    <div class="one column">2</div>
    <div class="one column">3</div>
    /* and so on */
  </div>
</div>
```

Ensuite, indiquez les conteneurs sur la deuxième ligne en précisant le nombre de colonnes qu'ils englobent , ainsi&nbsp;:

```html
<div class="row">
  <div class="one column">13</div>
  <div class="six columns">14</div>
  <div class="three columns">15</div>
  <div class="two columns">16</div>
</div>
```

Enregistrez le fichier HTML et chargez‑le dans le navigateur pour voir ce que cela donne.

> **Note :** Si vous éprouvez des difficulatés à faire fonctionner cet exemple, comparez votre code avec le fichier [html-skeleton-finished.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/html-skeleton-finished.html) (à voir aussi  [en exécution directe](http://mdn.github.io/learning-area/css/css-layout/grids/html-skeleton-finished.html)).

Si vous regardez dans le fichier _skeleton.css_ vous verrez comment cela fonctionne. Par exemple, Skeleton prédéfinit ce qui suit pour styler des éléments de la classe «&nbsp;three columns&nbsp;» que l'on ajouterait.

```css
.three.columns { width: 22%; }
```

Tout Skeleton (ou n'importe quel autre canevas) paramètre des classes prédéfinies qu'il est possible d'utiliser en les ajoutant à votre balisage. Vous avez fait exactement la même chose en calculant ces pourcentages vous même.

Comme vous le voyez, vous n'avez besoin d'écrire que peu de CSS en utilisant Skeleton. Il traite tout l'aspect boîte flottante pour vous quand vous ajoutez des classes à votre balisage. C'est la possibilité de gérer la responsabilité de la disposition sur quelque chose d'autre qui fait que l'utilisation d'un canevas pour un système de trames est un choix convaincan&nbsp;! Toutefois, actuellement avec «&nbsp;CSS Grid Layout&nbsp;», nombre de développeurs délaissent ces canevas pour l'utilisation des trames natives intégrées que les CSS fournissent.

## Résumé

Vous savez maintenant comment les divers systèmes de trames sont créés. La connaissance de ces processus est utile dans le cadre d'un travail sur des sites anciens, ainsi que pour la compréhension des différences entre les trames natives de «&nbsp;CSS Grid Layout&nbsp;» et celles des anciens systèmes.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-Column_Layout", "Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}

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
