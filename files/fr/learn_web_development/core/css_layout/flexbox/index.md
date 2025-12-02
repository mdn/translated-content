---
title: Flexbox
slug: Learn_web_development/Core/CSS_layout/Flexbox
original_slug: Learn/CSS/CSS_layout/Flexbox
l10n:
  sourceCommit: 2a4d705a12d76ee17e013f8a50007fd25029e0fc
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout")}}

[Flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout) est une méthode de mise en page selon un axe principal, permettant de disposer des éléments en ligne ou en colonne. Les éléments se dilatent ou se rétractent pour occuper l'espace disponible. Cet article en explique tous les fondamentaux.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content"
          >Structurer le contenu avec HTML</a
        >,
        <a href="/fr/docs/Learn_web_development/Core/Styling_basics">Bases du style CSS</a>,
        <a href="/fr/docs/Learn_web_development/Core/Text_styling/Fundamentals">Fondamentaux du style du texte et des polices</a>,
        notions de base sur <a href="/fr/docs/Learn_web_development/Core/CSS_layout/Introduction">la mise en page CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Le but de Flexbox&nbsp;: disposer de façon flexible un ensemble d'éléments blocs ou en ligne sur un seul axe.</li>
          <li>La terminologie Flex&nbsp;: conteneur flex, élément flex, axe principal, axe croisé.</li>
          <li>Comprendre ce que <code>display: flex</code> apporte par défaut.</li>
          <li>Comment répartir le contenu sur de nouvelles lignes ou colonnes.</li>
          <li>Dimensionnement et ordre flexibles des éléments flex.</li>
          <li>Justification et alignement du contenu.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Pourquoi Flexbox ?

La mise en page CSS flexible (Flexbox) permet&nbsp;:

- De centrer verticalement un bloc de contenu dans son parent&nbsp;;
- De faire que tous les enfants d'un conteneur occupent chacun la même quantité de hauteur ou de largeur disponible selon l'espace offert&nbsp;;
- De faire que toutes les colonnes dans une disposition multi‑colonnes aient la même hauteur, même si leur quantité de contenu diffère.

Les fonctionnalités de Flexbox peuvent être la solution idéale pour vos besoins de mise en page unidimensionnelle. Découvrons cela ensemble&nbsp;!

> [!NOTE]
> L'introduction de Scrimba pour [Flexbox <sup>(angl.)</sup>](https://scrimba.com/learn-html-and-css-c0p/~017?via=mdn) <sup>[_Partenaire d'apprentissage MDN_](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_et_intégrations_partenaires)</sup> propose un guide interactif expliquant à quel point Flexbox est courant sur le web, pourquoi il est important de l'apprendre, et vous guide à travers un cas d'utilisation typique qui démontre la puissance de Flexbox.

## Voici un exemple simple

Dans cet article, vous allez suivre une série d'exercices pour vous aider à comprendre le fonctionnement de Flexbox. Pour commencer, faites une copie locale du HTML et du CSS. Chargez-les dans un navigateur moderne (comme Firefox ou Chrome) et examinez le code dans votre éditeur. Vous pouvez aussi cliquer sur le bouton «&nbsp;Exécuter&nbsp;» pour l'ouvrir dans l'aire de jeu.

```html live-sample___flexbox_0
<header>
  <h1>Un exemple de flexbox</h1>
</header>
<section>
  <article>
    <h2>Premier article</h2>
    <p>Contenu…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Contenu…</p>
  </article>
  <article>
    <h2>Troisième article</h2>
    <p>Contenu…</p>
  </article>
</section>
```

```css live-sample___flexbox_0
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
section {
  zoom: 0.8;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
/* Ajoutez votre CSS flexbox ci-dessous */
```

{{EmbedLiveSample("flexbox_0", "100", "415")}}

Qu'avons‑nous&nbsp;? Un élément [`<header>`](/fr/docs/Web/HTML/Reference/Elements/header) avec un en‑tête de haut niveau à l'intérieur, et un élément [`<section>`](/fr/docs/Web/HTML/Reference/Elements/section) contenant trois éléments [`<article>`](/fr/docs/Web/HTML/Reference/Elements/article). Nous allons les utiliser pour créer une disposition vraiment classique sur trois colonnes.

## Détermination des éléments à disposer en boîtes flexibles

Pour commencer, sélectionnons les éléments devant être présentés sous forme de boîtes flexibles. Pour ce faire, donnons une valeur spéciale à la propriété [`display`](/fr/docs/Web/CSS/Reference/Properties/display) du parent de ces éléments à disposer. Dans ce cas, comme cela concerne les éléments [`<article>`](/fr/docs/Web/HTML/Reference/Elements/article), nous affectons la valeur `flex` à l'élément [`<section>`](/fr/docs/Web/HTML/Reference/Elements/section) (qui devient un conteneur flex)&nbsp;:

```html hidden live-sample___flexbox_1
<header>
  <h1>Un exemple de flexbox</h1>
</header>
<section>
  <article>
    <h2>Premier article</h2>
    <p>Contenu…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Contenu…</p>
  </article>
  <article>
    <h2>Troisième article</h2>
    <p>Contenu…</p>
  </article>
</section>
```

```css hidden live-sample___flexbox_1
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
section {
  zoom: 0.8;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
/* Ajoutez votre CSS flexbox ci-dessous */
```

```css live-sample___flexbox_1
section {
  display: flex;
}
```

Voici le résultat&nbsp;:

{{EmbedLiveSample("flexbox_1", "100", "210")}}

Cette unique déclaration donne tout ce dont nous avons besoin&nbsp;: incroyable, non&nbsp;? Nous avons ainsi une disposition en plusieurs colonnes de largeur égale et toutes de même hauteur. Ceci parce que les valeurs par défaut données aux éléments flex (les enfants du conteneur flex) sont configurées pour résoudre des problèmes courants comme celui-ci.

Récapitulons ce qui se passe ici&nbsp;: ajouter une valeur `flex` à l'attribut {{cssxref("display")}} d'un élément en fait un conteneur flex. Le conteneur est affiché comme un {{Glossary("Block-level_content", "contenu de type bloc")}} en ce qui concerne son interaction avec le reste de la page. Quand l'élément devient un conteneur flex, ses enfants deviennent (et sont disposés comme) des éléments flexibles.

Vous pouvez rendre le conteneur en ligne en utilisant une [valeur de `display` externe](/fr/docs/Web/CSS/Reference/Properties/display#outside) (par exemple, `display: inline flex`), ce qui affecte la façon dont le conteneur lui-même est disposé dans la page.
La valeur héritée `inline-flex` affiche également le conteneur en ligne.
Nous allons nous concentrer sur le comportement du contenu dans ce tutoriel, mais si vous souhaitez voir l'effet d'une disposition en ligne par rapport à une disposition en bloc, consultez la [comparaison des valeurs](/fr/docs/Web/CSS/Reference/Properties/display#comparaison_des_valeurs_de_display) sur la page de la propriété `display`.

Les prochaines sections expliquent plus en détail ce que sont les éléments flex et ce qui se passe à l'intérieur d'un élément lorsque vous en faites un conteneur flex.

## Aparté sur le modèle flex

Lorsque les éléments sont disposés en boîtes flexibles, ils sont disposés le long de deux axes&nbsp;:

![Trois éléments flex dans une langue de gauche à droite sont disposés côte à côte dans un conteneur flex. L'axe principal — l'axe du conteneur flex dans la direction dans laquelle les éléments flex sont disposés — est horizontal. Les extrémités de l'axe sont main-start et main-end et se trouvent respectivement à gauche et à droite. L'axe croisé est vertical ; perpendiculaire à l'axe principal. Les extrémités croisée et croisée sont respectivement en haut et en bas. La longueur de l'élément flex le long de l'axe principal, dans ce cas, la largeur, est appelée la taille principale, et la longueur de l'élément flex le long de l'axe croisé, dans ce cas, la hauteur, est appelée la taille croisée.](flex_terms.png)

- L'**axe principal (_main axis_)** est l'axe de la direction dans laquelle sont disposés les éléments flex (par exemple, horizontalement sur la page, ou verticalement de haut en bas de la page). Le début et la fin de cet axe sont appelés l'**origine principale (_main start_)** et la **fin principale (_main end_)**.
- L'**axe croisé (_cross axis_)** est l'axe perpendiculaire à l'axe principal, c'est-à-dire à la direction dans laquelle sont disposés les éléments flex. Le début et la fin de cet axe sont appelés le **début (_cross start_)** et la **fin (_cross end_)** de l'axe croisé.
- L'élément parent dont la propriété est `display: flex` ([`<section>`](/fr/docs/Web/HTML/Reference/Elements/section) dans notre exemple) est appelé le **conteneur flex (_flex container_)**.
- Les éléments disposés en tant que boîtes flexibles à l'intérieur du conteneur flex sont appelés **éléments flex (_flex items_)** (les éléments [`<article>`](/fr/docs/Web/HTML/Reference/Elements/article) dans notre exemple).

Gardez cette terminologie en tête en lisant les paragraphes suivants. Vous pouvez toujours vous y référer si vous avez un doute sur la signification des termes utilisés.

## Colonnes ou lignes ?

Flexbox dispose de la propriété [`flex-direction`](/fr/docs/Web/CSS/Reference/Properties/flex-direction) pour indiquer la direction de l'axe principal (direction dans laquelle les enfants flexibles sont disposés). Cette propriété est égale par défaut à `row`&nbsp;: ils sont donc disposés en ligne, dans le sens de lecture de la langue par défaut du navigateur (de gauche à droite, dans le cas d'un navigateur français).

Ajoutez la déclaration suivante dans la règle CSS pour l'élément [`<section>`](/fr/docs/Web/HTML/Reference/Elements/section)&nbsp;:

```css
flex-direction: column;
```

Cela dispose de nouveau les éléments en colonnes, comme c'était le cas avant l'ajout de la CSS. Avant de poursuivre, enlevez cette déclaration de l'exemple.

> [!NOTE]
> Vous pouvez aussi disposer les éléments flex dans la direction inverse avec les valeurs `row-reverse` et `column-reverse`. Expérimentez ces valeurs aussi&nbsp;!

## Enveloppement

Un problème qui survient lorsque vous avez une largeur ou une hauteur fixe dans votre mise en page est que, tôt ou tard, les enfants flexbox vont déborder de leur conteneur, cassant ainsi la mise en page. Dans l'exemple suivant, nous avons 5 éléments {{htmlelement("article")}}, qui ne tiennent pas, car ils ont une `min-width` de `400px`, ce qui provoque une barre de défilement horizontale.

```html hidden live-sample___flex-wrap_0
<header>
  <h1>Un exemple de flexbox</h1>
</header>
<section>
  <article>
    <h2>Premier article</h2>
    <p>Contenu…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Contenu…</p>
  </article>
  <article>
    <h2>Troisième article</h2>
    <p>Contenu…</p>
  </article>
  <article>
    <h2>Quatrième article</h2>
    <p>Contenu…</p>
  </article>
  <article>
    <h2>Cinquième article</h2>
    <p>Contenu…</p>
  </article>
</section>
```

```css hidden live-sample___flex-wrap_0
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  min-width: 400px;
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  display: flex;
  flex-direction: row;
  zoom: 0.8;
}
```

{{EmbedLiveSample("flex-wrap_0", "100", "230")}}

Ici, nous voyons que les enfants débordent effectivement de leur conteneur. Par défaut, le navigateur tente de placer tous les éléments flex sur une seule ligne si `flex-direction` vaut `row`, ou sur une seule colonne si `flex-direction` vaut `column`.

```html hidden live-sample___flex-wrap_1
<header>
  <h1>Un exemple de flexbox</h1>
</header>
<section>
  <article>
    <h2>Premier article</h2>
    <p>Contenu…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Contenu…</p>
  </article>
  <article>
    <h2>Troisième article</h2>
    <p>Contenu…</p>
  </article>
  <article>
    <h2>Quatrième article</h2>
    <p>Contenu…</p>
  </article>
  <article>
    <h2>Cinquième article</h2>
    <p>Contenu…</p>
  </article>
</section>
```

```css hidden live-sample___flex-wrap_1
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  min-width: 400px;
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  display: flex;
  flex-direction: row;
  zoom: 0.8;
}
```

Une façon d'y remédier est d'ajouter la déclaration suivante à votre règle pour {{htmlelement("section")}}&nbsp;:

```css live-sample___flex-wrap_1
section {
  flex-wrap: wrap;
}
```

Vous verrez que la disposition est bien meilleure avec cet ajout&nbsp;:

{{EmbedLiveSample("flex-wrap_1", "100", "430")}}

Nous avons maintenant plusieurs lignes. Chaque ligne contient autant d'enfants flexbox qu'il est raisonnable d'y placer. Tout débordement est déplacé sur la ligne suivante.

Mais nous pouvons aller plus loin ici. Pour commencer, essayez de changer la valeur de la propriété {{cssxref("flex-direction")}} en `row-reverse`. Vous verrez alors que vous avez toujours une disposition sur plusieurs lignes, mais qu'elle commence dans l'angle opposé de la fenêtre du navigateur et se déroule à l'envers.

## Forme abrégée `flex-flow`

Notez maintenant qu'il y a une forme abrégée pour [`flex-direction`](/fr/docs/Web/CSS/Reference/Properties/flex-direction) et [`flex-wrap`](/fr/docs/Web/CSS/Reference/Properties/flex-wrap) — [`flex-flow`](/fr/docs/Web/CSS/Reference/Properties/flex-flow). Ainsi, par exemple, vous pouvez remplacer&nbsp;:

```css
flex-direction: row;
flex-wrap: wrap;
```

par&nbsp;:

```css
flex-flow: row wrap;
```

## Taille modulable des éléments flex

Revenons maintenant à notre premier exemple et voyons comment nous pouvons contrôler la proportion d'espace que chaque élément flex occupe par rapport aux autres éléments flex.

```html hidden live-sample___flexbox_1
<header>
  <h1>Un exemple de flexbox</h1>
</header>
<section>
  <article>
    <h2>Premier article</h2>
    <p>Contenu…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Contenu…</p>
  </article>
  <article>
    <h2>Troisième article</h2>
    <p>Contenu…</p>
  </article>
</section>
```

```css hidden live-sample___flexbox_1
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  zoom: 0.8;
  display: flex;
}
```

Ajoutez d'abord la règle ci-dessous en fin de la CSS&nbsp;:

```css live-sample___flexbox_1
article {
  flex: 1;
}
```

{{EmbedLiveSample("flexbox_1", "100", "210")}}

Il s'agit d'une valeur de proportion, sans unité, définissant la quantité d'espace disponible que chaque élément flex prendra le long de l'axe principal. Dans ce cas, nous donnons à chaque élément [`<article>`](/fr/docs/Web/HTML/Reference/Elements/article) une valeur de 1, ce qui signifie qu'ils prendront tous une portion égale de l'espace libre après le calcul du remplissage et de la marge. Cette valeur représente une proportion, c'est-à-dire que le fait de donner une valeur de 400 000 simultanément à tous les éléments flex aurait exactement le même effet.

```html hidden live-sample___flexbox_2
<header>
  <h1>Un exemple de flexbox</h1>
</header>
<section>
  <article>
    <h2>Premier article</h2>
    <p>Contenu…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Contenu…</p>
  </article>
  <article>
    <h2>Troisième article</h2>
    <p>Contenu…</p>
  </article>
</section>
```

```css hidden live-sample___flexbox_2
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  zoom: 0.8;
  display: flex;
}
article {
  flex: 1;
}
```

Maintenant ajoutons cette règle en dessous de la précédente&nbsp;:

```css live-sample___flexbox_2
article:nth-of-type(3) {
  flex: 2;
}
```

{{EmbedLiveSample("flexbox_2", "100", "210")}}

Maintenant, lorsque vous actualisez, vous voyez que le troisième {{htmlelement("article")}} occupe deux fois plus de largeur disponible que chacun des deux autres — il y a maintenant quatre unités de division disponibles au total (puisque 1&nbsp;+&nbsp;1&nbsp;+&nbsp;2&nbsp;=&nbsp;4). Les deux premiers éléments flexibles en occupent chacun un, soit 1/4 de l'espace disponible pour chacun. Le troisième remplit deux unités, soit 2/4 (la moitié) de l'espace disponible.

Vous pouvez également définir une valeur minimale de taille dans la valeur `flex`. Modifiez comme suit vos règles `article` existantes&nbsp;:

```html hidden live-sample___flexbox_3
<header>
  <h1>Un exemple de flexbox</h1>
</header>
<section>
  <article>
    <h2>Premier article</h2>
    <p>Contenu…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Contenu…</p>
  </article>
  <article>
    <h2>Troisième article</h2>
    <p>Contenu…</p>
  </article>
</section>
```

```css hidden live-sample___flexbox_3
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  zoom: 0.8;
  display: flex;
}
```

```css live-sample___flexbox_3
article {
  flex: 1 100px;
}

article:nth-of-type(3) {
  flex: 2 100px;
}
```

En gros, cela dit&nbsp;: «&nbsp;Chaque élément flex reçoit d'abord 200px de l'espace disponible. Ensuite, le reste de l'espace disponible est réparti selon les unités de proportion&nbsp;». Actualisez et vous devriez voir une différence dans la façon dont l'espace est réparti.

{{EmbedLiveSample("flexbox_3", "100", "210")}}

Tous les éléments flex ont une largeur minimale de 100 pixels — définie avec `flex`. La valeur de `flex` pour les deux premiers éléments flex est 1 et pour le troisième élément, elle est de 2. Cela divise l'espace restant dans le conteneur flex en 4 unités de proportion. Une unité est attribuée à chacun des deux premiers éléments flex, et 2 unités sont attribuées au troisième élément flex, ce qui rend ce dernier plus large que les deux autres, qui ont la même largeur.

Le véritable intérêt de Flexbox apparaît dans sa souplesse et sa réactivité — si vous redimensionnez la fenêtre du navigateur ou ajoutez un autre élément [`<article>`](/fr/docs/Web/HTML/Reference/Elements/article), la mise en page continue de fonctionner correctement.

## flex : forme abrégée vs forme longue

{{cssxref("flex")}} est une forme abrégée de propriété qui peut servir à définir trois valeurs différentes&nbsp;:

- Une valeur de proportion sans unité, vue ci‑dessus. Elle peut être précisée seule avec la forme longue de la propriété {{cssxref("flex-grow")}}&nbsp;;
- Une deuxième valeur de proportion sans unité, {{cssxref("flex-shrink")}}, intervenant quand les éléments flex débordent du conteneur. Elle indique la quantité de dépassement à retirer de l'extension de chacun des éléments flex pour les empêcher de déborder du conteneur. Il s'agit d'une fonctionnalité avancée de Flexbox — nous n'en parlerons plus dans cet article&nbsp;;
- Une valeur de taille minimale, vue ci‑dessus. Elle peut aussi être précisée seule avec la forme longue de la propriété {{cssxref("flex-basis")}}.

Nous vous déconseillons d'utiliser les propriétés flex sous leur forme longue, sans autre alternative possible (par exemple, pour annuler quelque chose déjà défini). Elles représentent du code supplémentaire et peuvent être quelque peu déroutantes.

## Alignement horizontal et vertical

Vous pouvez également utiliser les fonctionnalités de Flexbox pour aligner les éléments flex le long de l'axe principal ou de l'axe croisé. Explorons cela à l'aide d'un nouvel exemple&nbsp;:

```html live-sample___flex-align_0
<div>
  <button>Sourire</button>
  <button>Rire</button>
  <button>Cligner de l'œil</button>
  <button>Hausser les épaules</button>
  <button>Rougir</button>
</div>
```

```css live-sample___flex-align_0
body {
  font-family: sans-serif;
  width: 90%;
  max-width: 960px;
  margin: 10px auto;
}
div {
  height: 100px;
  border: 1px solid black;
}
button {
  font-size: 18px;
  line-height: 1.5;
  width: 15%;
}
/* Ajoutez votre CSS flexbox ci-dessous */
```

Nous allons transformer ceci en une barre de boutons souple et bien présentée. Pour l'instant, vous voyez une barre de menu horizontale avec quelques boutons tassés dans le coin supérieur gauche.

{{EmbedLiveSample("flex-align_0", "100", "125")}}

D'abord, faites une copie locale de cet exemple.

Ensuite, ajoutez ce qui suit à la fin de la CSS de l'exemple&nbsp;:

```html hidden live-sample___flex-align_1
<div>
  <button>Sourire</button>
  <button>Rire</button>
  <button>Cligner de l'œil</button>
  <button>Hausser les épaules</button>
  <button>Rougir</button>
</div>
```

```css hidden live-sample___flex-align_1
body {
  font-family: sans-serif;
  width: 90%;
  max-width: 960px;
  margin: 10px auto;
}
div {
  height: 100px;
  border: 1px solid black;
}
button {
  font-size: 18px;
  line-height: 1.5;
  width: 15%;
}
/* Add your flexbox CSS below here */
```

```css live-sample___flex-align_1
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
```

{{EmbedLiveSample("flex-align_1", "100", "125")}}

Actualisez la page et vous verrez que les boutons sont maintenant bien centrés, horizontalement et verticalement. Cette transformation a été opérée grâce à deux nouvelles propriétés.

La propriété {{cssxref("align-items")}} fixe là où les éléments flex sont placés sur l'axe perpendiculaire, dit aussi croisé (_cross axis_).

- Par défaut, la valeur est `stretch`, qui étire tous les éléments flex de manière à emplir le conteneur parent le long de l'axe croisé. Si le parent ne possède pas de dimension définie dans la direction de l'axe croisé, alors tous les éléments flex auront la dimension du plus étiré des éléments. C'est pour cette raison que, dans notre premier exemple, les colonnes ont toutes la même hauteur par défaut.
- Avec la valeur `center` utilisée dans le code ci-dessus, les éléments gardent leur dimension intrinsèque, tout en étant centrés sur l'axe croisé. C'est la raison pour laquelle, dans l'exemple actuel, les boutons sont centrés verticalement.
- Il y a également des valeurs comme `flex-start` et `flex-end` qui alignent respectivement tous les éléments au début ou à la fin de l'axe croisé. Voyez {{cssxref("align-items")}} pour tous les détails.

Vous pouvez prendre le pas sur le comportement de {{cssxref("align-items")}} pour un élément flex donné en lui appliquant la propriété {{cssxref("align-self")}}. Par exemple, ajoutez ce qui suit aux CSS&nbsp;:

```html hidden live-sample___flex-align_2
<div>
  <button>Sourire</button>
  <button>Rire</button>
  <button>Cligner de l'œil</button>
  <button>Hausser les épaules</button>
  <button>Rougir</button>
</div>
```

```css hidden live-sample___flex-align_2
body {
  font-family: sans-serif;
  width: 90%;
  max-width: 960px;
  margin: 10px auto;
}
div {
  height: 100px;
  border: 1px solid black;
}
button {
  font-size: 18px;
  line-height: 1.5;
  width: 15%;
}
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
/* Add your flexbox CSS below here */
```

```css live-sample___flex-align_2
button:first-child {
  align-self: flex-end;
}
```

{{EmbedLiveSample("flex-align_2", "100", "125")}}

Observez l'effet produit, puis retirez cette règle une fois que vous avez terminé.

La propriété {{cssxref("justify-content")}} contrôle l'emplacement des éléments flex sur l'axe principal.

- La valeur par défaut est `normal`, qui se comporte comme `start`&nbsp;: tous les éléments sont placés au début de l'axe principal.
- Vous pouvez utiliser `end` ou `flex-end` pour les placer à la fin.
- Les valeurs `left` et `right` se comportent comme `start` ou `end` selon la direction du mode d'écriture.
- `center` est aussi une valeur pour `justify-content`&nbsp;: elle place les éléments flex au centre de l'axe principal.
- La valeur utilisée ci-dessus, `space-around`, est pratique&nbsp;: elle répartit tous les éléments de façon régulière le long de l'axe principal, en laissant un peu d'espace à chaque extrémité.
- Il existe une autre valeur, `space-between`, très similaire à `space-around`, sauf qu'elle ne laisse aucun espace aux extrémités.

La propriété {{cssxref("justify-items")}} est ignorée dans les mises en page flexbox.

N'hésitez pas à jouer avec ces valeurs pour visualiser leur fonctionnement avant de poursuivre.

## Ordonner les éléments flex

Flexbox dispose aussi d'une fonctionnalité pour modifier l'ordre d'affichage des éléments flex, sans en modifier l'ordre dans la source. C'est une chose impossible à réaliser avec les méthodes classiques de mise en page.

Le code pour ce faire est simple — ajoutez la règle CSS suivante dans l'exemple de code de la barre de boutons&nbsp;:

```css
button:first-child {
  order: 1;
}
```

Actualisez, et vous pouvez voir que le bouton «&nbsp;Sourire&nbsp;» a été déplacé en fin de l'axe principal. Voyons en détail comment cela fonctionne&nbsp;:

- Par défaut, tous les éléments flex possèdent une valeur de {{cssxref("order")}} égale à 0&nbsp;;
- Les éléments flex avec des valeurs `order` plus élevées apparaîtront plus tard dans l'ordre d'affichage que ceux avec des valeurs plus faibles&nbsp;;
- Les éléments flex avec les mêmes valeurs pour `order` sont affichés dans l'ordre de la source. Ainsi, si vous avez 4 éléments avec des valeurs `order` de 2, 1, 1 et 0, leur ordre d'affichage sera 4e, 2e, 3e et 1er&nbsp;;
- Le troisième élément suit le deuxième, car il a la même valeur pour `order` et qu'il est placé après dans le code source.

Vous pouvez donner des valeurs négatives à `order` pour faire en sorte que ces éléments soient affichés avant les éléments d'ordre 0. Par exemple, vous pouvez faire apparaître le bouton «&nbsp;Rougir&nbsp;» en tête de l'axe principal avec la règle suivante&nbsp;:

```css
button:last-child {
  order: -1;
}
```

Lorsqu'il est possible de changer l'ordre à l'aide de `order`, l'ordre de tabulation reste le même que l'ordre du code. Changer l'ordre des éléments sélectionnables peut avoir un impact négatif sur l'utilisabilité pour vos utilisateur·ice·s de clavier&nbsp;!

## Boîtes flex imbriquées

Il est possible de créer des mises en page assez complexes avec flexbox. Il est tout à fait correct de faire d'un élément flex un conteneur flex, afin que ses enfants soient aussi disposés comme des boîtes flexibles.

```html hidden live-sample___flex-nesting
<header>
  <h1>Un exemple complexe de flexbox</h1>
</header>
<section>
  <article>
    <h2>Premier article</h2>
    <p>Contenu…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Contenu…</p>
  </article>
  <article>
    <div>
      <button>Sourire</button>
      <button>Rire</button>
      <button>Cligner de l'œil</button>
      <button>Hausser les épaules</button>
      <button>Rougir</button>
    </div>
    <div>
      <p>Contenu du paragraphe un…</p>
    </div>
    <div>
      <p>Contenu du paragraphe deux…</p>
    </div>
  </article>
</section>
```

```css hidden live-sample___flex-nesting
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  display: flex;
  zoom: 0.8;
}
article {
  flex: 1 170px;
}
article:nth-of-type(3) {
  flex: 3 170px;
  display: flex;
  flex-flow: column;
}
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

{{EmbedLiveSample("flex-nesting", "100", "290")}}

Le HTML pour cela est vraiment simple. Voici un élément {{htmlelement("section")}} contenant trois éléments {{htmlelement("article")}}. Le troisième élément {{htmlelement("article")}} contient trois éléments {{htmlelement("div")}}, et le premier élément {{htmlelement("div")}} contient cinq éléments {{htmlelement("button")}}&nbsp;:

```
section - article
          article
          article - div - button
                    div   button
                    div   button
                          button
                          button
```

Regardez le code utilisé pour cette disposition.

Premièrement, nous déterminons que les enfants de l'élément {{htmlelement("section")}} seront des boîtes flexibles.

```css
section {
  display: flex;
}
```

Ensuite, nous définissons des valeurs flex pour les éléments {{htmlelement("article")}} eux‑mêmes. Remarquez en particulier ici la deuxième règle — nous paramétrons le troisième élément {{htmlelement("article")}} pour que ses enfants soient eux-mêmes disposés en tant qu'éléments flex, mais cette fois‑ci en colonne.

```css
article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 3 200px;
  display: flex;
  flex-flow: column;
}
```

Après, nous sélectionnons le premier élément {{htmlelement("div")}} et lui assignons la valeur `flex: 1 100px;` pour qu'il ait effectivement une hauteur minimale de 100px. Ensuite, nous indiquons que ses enfants (les éléments {{htmlelement("button")}}) doivent être disposés en tant qu'éléments flex dans une ligne enveloppante, centrés dans l'espace disponible comme dans l'exemple des boutons vu plus haut.

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Enfin, nous définissons un dimensionnement des boutons, et plus précisément nous leur donnons une valeur flex de `1 auto`. L'effet obtenu est très intéressant ; vous l'observerez en modifiant la largeur de la fenêtre du navigateur. Les boutons prennent autant d'espace qu'il leur est permis et sont, si possible, disposés sur la même ligne&nbsp;; sinon ils «&nbsp;descendent&nbsp;» pour créer de nouvelles lignes.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Résumé

Notre visite guidée des bases de Flexbox est maintenant terminée. Espérons que vous en êtes satisfaits, et que vous saurez jouer avec ses fonctionnalités tout en progressant dans l'apprentissage. Nous allons examiner ensuite un autre aspect important de la mise en page avec les CSS — les grilles CSS.

## Voir aussi

- [Concepts de base de Flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Alignement des éléments dans un conteneur flex](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Ordre des éléments flex](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
- [Contrôle des proportions des éléments flex le long de l'axe principal](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [Module CSS flexible box layout](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
- [Guide sur Flexbox par CSS-Tricks <sup>(angl.)</sup>](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — un article qui explique tout sur Flexbox de façon visuelle
- [Flexbox Froggy <sup>(angl.)</sup>](https://flexboxfroggy.com/) — un jeu éducatif pour apprendre et mieux comprendre les bases de Flexbox

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout")}}
