---
title: Introduction à la mise en page en CSS
slug: Learn/CSS/CSS_layout/Introduction
tags:
  - Apprendre
  - Article
  - Boîtes flexibles
  - CSS
  - Débutant
  - Flottants
  - Flux
  - Grille
  - Intro
  - Mise en page
  - Positionnement
  - Tableaux
translation_of: Learn/CSS/CSS_layout/Introduction
original_slug: Apprendre/CSS/CSS_layout/Introduction
---
{{LearnSidebar}}{{NextMenu("Apprendre/CSS/CSS_layout/Normal_Flow", "Apprendre/CSS/CSS_layout")}}

Cet article récapitule quelques fonctionnalités de mise en page CSS que l'on a déjà côtoyées dans les modules précédents — telles que les différentes valeurs de {{cssxref("display")}} — et en introduit de nouveaux que nous aborderons dans ce module.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Les fondamentaux du HTML (étudiez
        <a href="/fr/Apprendre/HTML/Introduction_%C3%A0_HTML"
          >Introduction au HTML</a
        >) et avoir une idée de la manière dont la CSS fonctionne (étudiez
        <a href="/fr/Apprendre/CSS/Introduction_à_CSS">Introduction aux CSS</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>
        Vous donner un aperçu des techniques de mise en page des CSS. Chaque
        technique peut être apprise plus précisément dans des tutoriels dédiés.
      </td>
    </tr>
  </tbody>
</table>

Les techniques de mise en page des CSS nous permettent de prendre des éléments contenus dans une page web et d'en contrôler le placement par rapport à leur position par défaut dans le flot d'une mise en page courante, aux autres éléments environnants, à leur conteneur parents ou à la fenêtre principale d'affichage. Les techniques de mises en page abordées en détail dans ce module sont:

- le cours normal
- la propriété {{cssxref("display")}}
- Flexbox
- les trames
- les flotteurs
- le positionnement
- la mise en page des tableaux
- la disposition sur plusieurs colonnes

Chaque technique à ses usages, ses avantages et ses inconvénients. Aucune technique n'a été conçue pour être utilisée isolément. En comprenant ce pourquoi chaque méthode a été conçue, vous saurez utiliser le meilleur outil de mise en page dans chaque situation.

## Cours normal

Le cours normal est la manière dont le navigateur présente les pages HTML par défaut quand vous ne faites rien pour contrôler la mise en page. Regardons rapidement un exemple HTML:

```html
<p>J'aime mon chat.</p>

<ul>
  <li>Acheter des croquettes</li>
  <li>Exercice</li>
  <li>Haut les cœurs, ami</li>
</ul>

<p>La fin&nbsp;!</p>
```

Par défaut, le navigateur affichera ce code ainsi&nbsp;:

{{ EmbedLiveSample('Cours_normal', '100%', 200) }}

Notez que le HTML est affiché dans l'ordre exact où il est dans le code source&nbsp;: les éléments s'empilent les uns sur les autres — le premier paragraphe, puis la liste non ordonnée suivie par le second paragraphe.

Les éléments disposés en empilement sont désignés comme étant des éléments _blocs_, par opposition aux éléments _en ligne_ qui apparaissent l'un après l'autre telle la succession de mots distincts d'un paragraphe.

> **Note :** «&nbsp;Block Direction&nbsp;» (Sens d'empilement) définit le sens dans lequel les éléments blocs sont disposés. Le sens d'empilement est vertical pour une langue comme l'anglais dont le mode d'écriture est horizontal. Ce sens sera horizontal pour toute langue avec un mode d'écriture vertical, comme le japonais. La «&nbsp;Inline Direction » (sens d'écriture) correspond à celle dont les contenus en ligne (comme une phrase) sont disposés.

Lorsque vous utilisez les CSS pour faire une mise en page, vous déplacez les éléments de leur cours normal&nbsp;; toutefois, pour la plupart des éléments de la page, ce cours normal crée exactement la mise en page dont vous avez besoin. C'est pourquoi il est si important de commencer avec un document HTML bien structuré, car vous pouvez alors travailler la façon dont les choses seront disposées par défaut au lieu de lutter contre cette disposition.

Les méthodes des CSS pouvant changer le placement des éléments sont les suivantes :

- **La propriété {{cssxref("display")}}** — les valeurs standards comme `block`, `inline` ou `inline-block` peuvent changer la manière dont l'élément se comporte dans le cours normal (voir [Types de boîtes](/fr/Apprendre/CSS/Introduction_%C3%A0_CSS/Le_mod%C3%A8le_de_bo%C3%AEte#Les_types_de_bo%C3%AEte) pour plus d'informations). Ensuite, nous disposons de méthodes de mise en page autonomes activées par l'intermédiaire d'une valeur de `display`, par exemple les [Grilles CSS](/fr/docs/Learn/CSS/CSS_layout/Grids) ou [Flexbox](/fr/docs/Learn/CSS/CSS_layout/Flexbox).
- **Flotteurs** — appliquer à {{cssxref("float")}} une valeur comme `left` peut créer une juxtaposition d'un élément bloc à côté d'un autre, tout comme les images «&nbsp;baignent&nbsp;» dans le texte dans les mises en page de magazines.
- **La propriété {{cssxref("position")}}** — vous permet de contrôler avec précision le placement de boîtes dans d'autres boîtes. `static` est le placement par défaut dans le cours, mais vous pouvez manipuler les éléments pour qu'ils se comportent différemment à l'aide d'autres valeurs, par exemple en les fixant en haut à gauche de la fenêtre d'affichage du navigateur.
- **Mise en page de tableaux** — les fonctions conçues pour styliser les parties d'un tableau HTML peuvent être utilisées sur des éléments non tableau en utilisant `display: table` et les propriétés associées.
- **Mise en page sur plusieurs colonnes** — Les propriétés [Multi-column](/fr/docs/Web/CSS/CSS_Columns) peuvent faire qu'un contenu bloc soit disposé en colonnes, comme dans un journal.

## La propriété «&nbsp;display »

Les principales modalités de mise en page avec les CSS relèvent toutes des valeurs de la propriété `display`. Cette propriété permet de modifier l'affichage par défaut des éléments. Chaque chose dans le cours normal a une valeur de propriété `display`. Les éléments se règlent sur cette valeur pour définir leur comportement par défaut. Par exemple, le fait que des paragraphes en langue anglaise se placent les uns au dessus des autres provient du fait que leur style est `display: block`. Si vous créez un lien sur un texte à l'intérieur d'un paragraphe, ce lien reste aligné avec le reste du texte et ne s'affiche pas sur une nouvelle ligne. C'est parce que l'élément {{htmlelement("a")}} est `display: inline` par défaut.

Vous pouvez modifier le comportement d'affichage par défaut. Par exemple, l'élément {{htmlelement("li")}} est `display: block` par défaut, ce qui signifie que les éléments de la liste s'afficheront l'un sous l'autre dans un document en anglais. Si nous changeons la valeur de `display` pour `inline`, ils s'afficheront alors les uns à côté des autres, comme les mots dans une phrase. Le fait que vous puissiez changer la valeur d'affichage de n'importe quel élément signifie que vous pouvez choisir des éléments HTML pour leur signification sémantique, sans vous soucier de leur apparence. Leur apparence est quelque chose que vous pouvez modifier.

En plus de pouvoir changer la présentation par défaut en faisant passer un élément de `block` à `inline` et vice versa, il existe des méthodes de mise en page accrues commençant avec une valeur particulière de `display`. Cependant, si vous les utilisez, vous devrez généralement invoquer des propriétés supplémentaires. Les deux valeurs les plus importantes pour notre discussion sur la mise en page sont `display: flex` et `display: grid`.

## Flexbox

Flexbox est l'abréviation pour [Flexible Box Layout](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout) Module (Mise en page de boîtes modulaires), conçu pour faciliter une disposition alignée sur une dimension — soit en ligne, soit en colonne. Pour utiliser `flexbox`, appliquez `display: flex` à l'élément parent des éléments à placer&nbsp;; tous ses enfants directs deviennent alors des éléments `flex`. Voyons cela avec un simple exemple.

Le balisage HTML ci-dessous crée un élément conteneur de la classe `wrapper`, dans lequel nous plaçons 3 éléments {{htmlelement("div")}}. Par défaut ces éléments s'afficheront en tant qu'éléments blocs, les uns sous les autres, dans ce document en langue française.

### Utiliser display: flex

Mais nous ajoutons `display: flex` sur le parent&nbsp;; les trois éléments se placent maintenant côte à côte. Cela provient du fait qu'ils sont devenus des _éléments flex_ et qu'ils utilisent les valeurs initiales données par flexbox. Ils sont disposés alignés, car la valeur initiale de {{cssxref("flex-direction")}} est `row`. Ils apparaissent serrés au haut de l'élément le plus haut, car la valeur initiale de la propriété {{cssxref("align-items")}} est `stretch`. Ce qui signifie que les éléments se casent dans la hauteur du conteneur `flex` défini dans ce cas par l'élément le plus grand. Les éléments s'alignent à partir de l'origine du conteneur à la fin sans laisser d'espace.

```css hidden
* {box-sizing: border-box;}

.wrapper > div {
    border-radius: 5px;
    background-color: rgb(207,232,220);
    padding: 1em;
}

```

```css
.wrapper {
  display: flex;
}
```

```html
<div class="wrapper">
  <div class="box1">Un</div>
  <div class="box2">Deux</div>
  <div class="box3">Trois</div>
</div>
```

{{ EmbedLiveSample('Utiliser_display_flex', '300', '200') }}

### Définir la propriété flex

En plus des propriétés ci-dessus applicables au conteneur `flex`, il existe des propriétés applicables aux éléments flex. Ces propriétés, entre autres choses, peuvent changer le mode d'adaptation des éléments, leur permettant de s'étaler et de se resserrer pour s'adapter à l'espace disponible.

À titre d'exemple, nous pouvons donner la valeur `1` à la propriété {{cssxref("flex")}} des éléments enfants. Tous les éléments vont grandir jusqu'à remplir le conteneur, au lieu de laisser de l'espace à la suite. S'il y a assez d'espace, les éléments vont devenir plus larges&nbsp;; s'il y en a moins ils vont devenir plus étroits. En outre, si vous ajoutez un autre élément au balisage, les éléments vont rapetisser pour lui faire de la place — ils ajusteront leur taille pour prendre la même quantité d'espace, quel qu'il soit.

```css hidden
    * {box-sizing: border-box;}

    .wrapper > div {
        border-radius: 5px;
        background-color: rgb(207,232,220);
        padding: 1em;
    }

```

```css
.wrapper {
    display: flex;
}

.wrapper > div {
    flex: 1;
}
```

```html
<div class="wrapper">
    <div class="box1">Un</div>
    <div class="box2">Deux</div>
    <div class="box3">Trois</div>
</div>
```

{{ EmbedLiveSample('Définir_la_propriété_flex', '300', '200') }}

> **Note :** Ce n'est qu'une très brève introduction aux possibilités de Flexbox&nbsp;: pour en apprendre plus, voyez notre article sur [Flexbox](/fr/docs/Learn/CSS/CSS_layout/Flexbox).

## Disposition en trame

Alors que «&nbsp;flexbox&nbsp;» est conçu pour une disposition unidimensionnelle, «&nbsp;Grid Layout&nbsp;» (Disposition tramée) est bidimensionnel — il place les choses en rangées et colonnes.

À nouveau, vous basculez en disposition tramée en donnant une valeur appropriée à `display` — `display: grid`. L'exemple ci-dessous utilise un balisage semblable à celui de l'exemple flex&nbsp;: un conteneur et quelques éléments enfants. Outre `display: grid`, nous définissons une trame de placement sur le parent avec les propriétés {{cssxref("grid-template-rows")}} et {{cssxref("grid-template-columns")}}. Nous avons défini trois colonnes de `1fr` chacune et deux lignes de `100px`. Il n'est pas nécessaire de mettre de règles sur les éléments enfants&nbsp;; il seront automatiquement placés dans les cellules de trame créées.

### Utiliser display: grid

```css hidden
    * {box-sizing: border-box;}

    .wrapper > div {
        border-radius: 5px;
        background-color: rgb(207,232,220);
        padding: 1em;
    }

```

```css
.wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 100px;
    grid-gap: 10px;
}
```

```html
<div class="wrapper">
    <div class="box1">Un</div>
    <div class="box2">Deux</div>
    <div class="box3">Trois</div>
    <div class="box4">Quatre</div>
    <div class="box5">Cinq</div>
    <div class="box6">Six</div>
</div>
```

{{ EmbedLiveSample('Utiliser_display_grid', '300', '330') }}

### Placer des objets sur la grille

Une fois la trame créée, vous pouvez y placer explicitement les éléments au lieu de compter sur le placement automatique. Dans ce second exemple ci‑dessous nous avons défini la même trame, mais cette fois avec trois éléments enfants. Nous avons défini début et fin de ligne pour chaque élément avec les propriétés {{cssxref("grid-column")}} et {{cssxref("grid-row")}}. Les éléments occupent alors plusieurs trames.

```css hidden
    * {box-sizing: border-box;}

    .wrapper > div {
        border-radius: 5px;
        background-color: rgb(207,232,220);
        padding: 1em;
    }

```

```css
.wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 100px;
    grid-gap: 10px;
}

.box1 {
    grid-column: 2 / 4;
    grid-row: 1;
}

.box2 {
    grid-column: 1;
    grid-row: 1 / 3;
}

.box3 {
    grid-row: 2;
    grid-column: 3;
}
```

```html
<div class="wrapper">
    <div class="box1">Un</div>
    <div class="box2">Deux</div>
    <div class="box3">Trois</div>
</div>
```

{{ EmbedLiveSample('Placer_des_objets_sur_la_grille', '300', '330') }}

> **Note :** Ces deux exemples ne sont qu'une petite partie de la puissance des dispositions tramées&nbsp;; pour en savoir plus, voyez l'article [Disposition tramée](/fr/docs/Learn/CSS/CSS_layout/Grids).

La suite de ce guide porte sur d'autres méthodes de mise en page. Elles ont moins d'importance pour la structure générale de la mise en page, mais peuvent tout de même vous aider à réaliser des tâches spécifiques. En comprenant la nature de chaque tâche de mise en page, vous découvrez rapidement, en regardant un composant particulier de votre design, que le type de mise en page le plus adapté est souvent évident.

## Flotteurs (boîtes flottantes)

Faire flotter un élément change son comportement ainsi que celui de l'élément qui le suit dans le cours normal. L'élément est déplacé à gauche ou à droite. Il est sorti du cours normal. Le contenu environnant l'enveloppe comme si l'élément flottait dans ce contenu.

La propriété {{cssxref("float")}} a quatre valeurs possibles&nbsp;:

- `left` — fait flotter l'élément sur la gauche.
- `right` — fait flotter l'élément sur la droite.
- `none` — indique que rien ne flotte. C'est la valeur par défaut.
- `inherit` — indique que la valeur de la propriété `float` sera héritée de celle de l'élément parent.

Dans l'exemple ci‑dessous nous faisons flotter un élément `<div>` à gauche avec un valeur pour la propriété {{cssxref("margin")}} sur la droite pour éloigner le texte de l'élément. Cela donne un effet de texte enveloppant cette boîte. C'est l'essentiel de ce qu'il faut savoir à propos des boîtes flottantes dans le design du web moderne.

```css hidden
body {
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
}

p {
    line-height: 2;
    word-spacing: 0.1rem;
}

.box {
    background-color: rgb(207,232,220);
    border: 2px solid rgb(79,185,227);
    padding: 10px;
    border-radius: 5px;
}
```

```html
<h1>Exemple simple de boîte flottante</h1>

<div class="box">Boîte flottante</div>

<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>
```

```css
.box {
    float: left;
    width: 150px;
    height: 150px;
    margin-right: 30px;
}
```

{{ EmbedLiveSample('Flotteurs_boîtes_flottantes', '100%', 600) }}

> **Note :** Les boîtes flottantes sont précisément expliquées dans la leçon à propos des propriétés [float et clear](/fr/docs/Learn/CSS/CSS_layout/Floats). Précédant les techniques telles que Flexbox et les trames, les boîtes flottantes étaient utilisées comme méthode pour créer des dispositions en colonnes. Vous rencontrerez peut‑être encore ce méthodes sur le Web ; nous les expliciterons dans la leçon sur les [Méthodes de mise en page traditionnelles](/fr/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods).

## Techniques de positionnement

Le positionnement permet de déplacer un élément de l'endroit où il serait placé dans le cours normal vers un autre endroit. Le positionnement n'est pas une méthode pour créer des mises en page principales, il s'agit plutôt de gérer et d'affiner la position d'éléments donnés sur la page.

Il existe cependant des techniques utiles pour certains modes de positionnement se fondant sur la propriété {{cssxref("position")}}. Comprendre le positionnement aide aussi à comprendre le cours normal et le fait de déplacer un objet hors du cours normal.

Il y a cinq types de positionnement à connaître&nbsp;:

- **positionnement statique** : valeur par défaut reçue par chaque élément — il signifie simplement «&nbsp;placer l'élément à sa position normale suivant le cours normal de mise en page du document — rien de spécial à constater ici&nbsp;».
- **positionnement relatif :** modification de la position d'un élément dans la page — il est déplacé par rapport à sa position dans le cours normal — y compris la possibilité de chevaucher d'autres éléments de la page.
- **positionnement absolu** : déplacement d'un élément indépendamment du cours normal de positionnement, comme s'il était placé sur un calque séparé. À partir de là, vous pouvez le fixer à une position relative au bord de la page de l'élément `<html>` (ou de son plus proche élément ancêtre positionné). Ce positionnement est utile pour créer des effets de mise en page complexes tels que des boîtes à onglets où différents panneaux de contenu sont superposés, affichés ou cachés comme vous le souhaitez, ou des panneaux d'information hors de l'écran par défaut, mais qui peuvent glisser à l'écran à l'aide d'un bouton de contrôle.
- **positionnement fixe :** tout à fait semblable au précédent, à l'exception que l'élément est fixé par rapport à la vue du navigateur et non d'un autre élément. C'est très pratique pour créer des effets tels qu'un menu de navigation persistant, toujours au même endroit sur l'écran, quand l'utilisateur fait défiler le reste de la page.
- **positionnement collant&nbsp;:** nouvelle méthode de positionnement qui fait qu'un élément se comporte comme `position: static` jusqu'à un certain décalage de la vue au delà duquel il se comporte comme si sa propriété était `position: fixed`.

### Exemple simple de positionnement

Afin de se familiariser avec ces techniques de mises en page, nous allons vous montrer quelques exemples. Nos exemples utiliserons tous le même code HTML, qui est celui-ci:

```html
<h1>Positionnement</h1>

<p>Je suis un élément de niveau bloc de base.</p>
<p class="positioned">Je suis un élément de niveau bloc de base.</p>
<p>Je suis un élément de niveau bloc de base.</p>
```

Ce code HTML sera stylisé par défaut en utilisant la CSS suivante&nbsp;:

```css
body {
  width: 500px;
  margin: 0 auto;
}

p {
    background-color: rgb(207,232,220);
    border: 2px solid rgb(79,185,227);
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}
```

Le rendu est le suivant:

{{ EmbedLiveSample('Exemple_simple_de_positionnement', '100%', 300) }}

### Positionnement relatif

Le positionnement relatif vous permet de décaler un élément de la position qu'il occuperait par défaut dans le cours normal de la mise en page. Ce positionnement permet de déplacer légèrement une icône pour l'aligner avec une étiquette de texte. Pour faire cette opération, nous ajoutons la règle suivante pour réaliser le positionnement relatif&nbsp;:

```css
.positioned {
  position: relative;
  top: 30px;
  left: 30px;
}
```

Ici, nous donnons au paragraphe médian à la propriété  {{cssxref("position")}} la valeur `relative` — ce qui ne fait rien en soi, alors nous ajoutons également les propriétés {{cssxref("top")}} et {{cssxref("left")}}. Elles servent à déplacer l'élément en question vers le bas et à droite — cela pourrait sembler être l'opposé de ce à quoi vous vous attendiez, mais représentez-vous l'élément comme poussé à partir de ses côtés gauche et haut&nbsp;: il en résulte un déplacement vers la droite et vers le bas.

Ajouter ce code donne le résultat suivant&nbsp;:

```html hidden
<h1>Positionnement relatif</h1>

<p>Je suis un élément de niveau bloc de base.</p>
<p class="positioned">Voici un élément avec un positionnement relatif.</p>
<p>Je suis un élément de niveau bloc de base.</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
    background-color: rgb(207,232,220);
    border: 2px solid rgb(79,185,227);
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}
```

```css
.positioned {
  position: relative;
  background: rgba(255,84,104,.3);
  border: 2px solid rgb(255,84,104);
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Positionnement_relatif', '100%', 300) }}

### Positionnement absolu

Le positionnement absolu s'utilise pour sortir totalement un élément du cours normal de la mise en page et le placer selon son décalage par rapport à un bloc conteneur.

En revenant à l'exemple sans positionnement, nous pourrions ajouter la règle CSS suivante pour implémenter un positionnement absolu&nbsp;:

```css
.positioned {
  position: absolute;
  top: 30px;
  left: 30px;
}
```

Ici pour notre paragraphe médian, nous donnons à la propriété {{cssxref("position")}} la valeur `absolute` et les mêmes valeurs aux propriétés {{cssxref("top")}} et {{cssxref("left")}} que précédemment. Ajouter ce code, cependant, donnera le résultat suivant&nbsp;:

```html hidden
<h1>Positionnement absolu</h1>

<p>Je suis un élément de niveau bloc de base.</p>
<p class="positioned">Voici un élément avec un positionnement absolu.</p>
<p>Je suis un élément de niveau bloc de base.</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
    background-color: rgb(207,232,220);
    border: 2px solid rgb(79,185,227);
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}
```

```css
.positioned {
  position: absolute;
  background: rgba(255,84,104,.3);
  border: 2px solid rgb(255,84,104);
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Positionnement_absolu', '100%', 300) }}

C'est vraiment différent&nbsp;! L'élément positionné a maintenant complètement été séparé du reste de la mise en page et se situe au haut de celle-ci. Les deux autres paragraphes se trouvent maintenant ensemble comme si leur frère positionné n'existait pas. Les propriétés {{cssxref("top")}} et {{cssxref("left")}} ont des effets différents pour un positionnement absolu comparativement à un relatif. Dans ce cas les décalages ont été calculés à compter du haut et du côté gauche de la la page. Il est possible de modifier l'élément parent conteneur ; nous verrons cela dans la leçon sur le [positionnement](/fr/docs/Learn/CSS/CSS_layout/Positioning).

### Positionnement fixé

Le positionnement fixé sort l'élément du cours normal de la même façon que le positionnement absolu. Toutefois, les décalages ne sont plus relatifs au conteneur, mais à la vue. L'élément étant fixé par rapport à la vue, nous pourrons créer des effets comme celui d'un menu restant fixé au haut de la fenêtre alors que la page défile sous lui.

Pour cet exemple, l'HTML est constitué de trois paragraphes de texte, de façon à pouvoir les faire défiler, et d'une boîte à laquelle nous avons donné la propriété `position: fixed`.

```html
<h1>Positionnement fixé</h1>

<div class="positioned">Fixé</div>

<p>Paragraphe 1.</p>
<p>Paragraphe 2.</p>
<p>Paragraphe 3.</p>
```

```html hidden
<h1>Positionnement fixé</h1>

<div class="positioned">Fixé</div>

<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

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
    position: fixed;
    top: 30px;
    left: 30px;
}
```

{{ EmbedLiveSample('Positionnement_fixé', '100%', 200) }}

### Positionnement collant

Le positionnement collant est la dernière méthode de positionnement à notre disposition. Elle mélange le positionnement statique par défaut avec le positionnement fixé. Lorsqu'un élément a la propriété `position: sticky`, il défile dans le cours normal jusqu'à atteindre un décalage défini de la fenêtre de vue. A ce moment-là, il est «&nbsp;collé&nbsp;» comme si `position: fixed` lui était appliqué.

```html hidden
<h1>Positionnement collant</h1>

<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

<div class="positioned">Collé</div>

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

{{ EmbedLiveSample('Positionnement_collant', '100%', 200) }}

> **Note :** pour plus de précisions à propos du positionnement, voir l'article [Positionnement](/fr/docs/Learn/CSS/CSS_layout/Positioning).

## Les tableaux CSS

Les tableaux HTML sont utiles pour afficher des données sous forme de tableaux, mais il y a des années de cela — avant même que les bases des CSS soit prises en charge de manière fiable par les navigateurs — les développeurs web avaient l'habitude d'utiliser les tableaux pour agencer toute la mise en page — y plaçant les en‑têtes, les pieds-de-page, diverses colonnes, etc. en multiples lignes et colonnes de tableaux. Cela fonctionnait en son temps, mais il y avait beaucoup de problèmes — la mise en page par tableau n'est pas souple, très lourde en balisage, difficile à déboguer et sémantiquement erronée (par ex., les utilisateurs de lecteur d'écran avaient des problèmes de navigation avec cette disposition en tableau).

La façon dont un tableau est affiché sur une page web quand vous utilisez le balisage «&nbsp;table&nbsp;» résulte d'un ensemble de propriétés des CSS définissant la composition du tableau. Ces propriétés peuvent être utilisées pour placer des éléments qui ne sont pas des tableaux, utilisation quelquefois désignée sous le vocable «&nbsp;utiliser des tableaux CSS&nbsp;».

Prenons un exemple. Tout d'abord, un simple balisage qui crée un formulaire HTML. Chaque élément en entrée a une étiquette ; nous avons également inclus une légende à l'intérieur d'un paragraphe. Chaque paire étiquette/entrée est incorporée dans un élément {{htmlelement("div")}} pour les besoins de la mise en page.

```html
<form>
  <p>Tout d'abord, dites‑nous votre nom et votre âge.</p>
  <div>
    <label for="fname">Prénom&nbsp;:</label>
    <input type="text" id="fname">
  </div>
  <div>
    <label for="lname">Nom&nbsp;:</label>
    <input type="text" id="lname">
  </div>
  <div>
    <label for="age">Âge&nbsp;:</label>
    <input type="text" id="age">
  </div>
</form>
```

Maintenant, le CSS pour cet exemple. Le gros de la CSS est plutôt ordinaire, à l'exception de l'utilisation de la propriété {{cssxref("display")}}. Les éléments {{htmlelement("form")}}, {{htmlelement("div")}} et {{htmlelement("label")}} ainsi que {{htmlelement("input")}} ont été configurés pour disposés en tableau, en lignes de tableau et en cellules de tableau respectivement — à la base, ils se comporteront comme dans le cas d'un balisage de tableau HTML, avec pour résultat un bon alignement par défaut entre les étiquettes et le texte. Tout ce qu'il nous reste à faire est d'ajouter un peu d'ampleur, des marges, etc. pour que tout soit agréable visuellement et c'est tout.

Notez que les propriétés `display: table-caption;` et `caption-side: bottom;` ont été affectées au paragraphe légende — il sera donc disposé comme une légende de tableau ({{htmlelement("caption")}})  placée en bas de la table pour des raisons de style, même si son balisage est placé avant les éléments `input` dans le code source. Voilà une bonne dose de souplesse.

```css
html {
  font-family: sans-serif;
}

form {
  display: table;
  margin: 0 auto;
}

form div {
  display: table-row;
}

form label, form input {
  display: table-cell;
  margin-bottom: 10px;
}

form label {
  width: 200px;
  padding-right: 5%;
  text-align: right;
}

form input {
  width: 300px;
}

form p {
  display: table-caption;
  caption-side: bottom;
  width: 400px;
  color: #999;
  font-style: italic;
}
```

Ce qui nous donne le résultat suivant:

{{ EmbedLiveSample('Les_tableaux_CSS', '100%', '170') }}

Vous pouvez également examiner cet exemple directement à [css-tables-example.html](https://mdn.github.io/learning-area/css/styling-boxes/box-model-recap/css-tables-example.html) (voyez le [code source également](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/box-model-recap/css-tables-example.html)).

## Disposition sur plusieurs colonnes

Le module mise en page sur plusieurs colonnes permet de placer un contenu en colonnes, telle la présentation de l'enchaînement des textes dans un journal. Bien que la lecture de colonnes de haut en bas soit moins utile dans un contexte Web, car il n'est pas question de forcer les utilisateurs à faire défiler en tous sens le contenu d'écran, la disposition en colonnes peut se révéler une technique utile.

Pour transformer un bloc en conteneur multicolonnes, utilisez soit la propriété {{cssxref("column-count")}} qui indique au navigateur le nombre de colonnes souhaitées, soit la propriété {{cssxref("column-width")}}, qui demande au navigateur de remplir le conteneur d'autant de colonnes de la largeur donnée.

Dans l'exemple ci–dessous, nous démarrons avec un bloc HTML dans un élément conteneur `<div>` de la classe `container`.

```html
<div class="container">
    <h1>Disposition en colonnes</h1>

    <p>Paragraphe 1.</p>
    <p>Paragraphe 2.</p>

</div>
```

Noux utilisons une propriété `column-width` de valeur 200 pixels pour ce conteneur&nbsp;; le navigateur crée autant de colonnes de 200 pixels de large qu'il est possible de faire entrer dans le conteneur, puis il partage l'espace restant entre les colonnes crées.

```html hidden
    <div class="container">
        <h2>Disposition en colonnes</h2>

        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>


        <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

    </div>

```

```css hidden
body { max-width: 800px; margin: 0 auto; }
```

```css
    .container {
        column-width: 200px;
    }
```

{{ EmbedLiveSample('Disposition_sur_plusieurs_colonnes', '100%', 200) }}

## Résumé

Cet article donne un bref résumé de toutes les techniques de mise en page à connaître. Poursuivez la lecture pour en savoir plus à propos de chaque technique !

{{NextMenu("Apprendre/CSS/CSS_layout/Floats", "Apprendre/CSS/CSS_layout")}}

## In this module

- [La mise en page avec les CSS](/fr/docs/Apprendre/CSS/CSS_layout)
- [Cours normal](/fr/docs/Apprendre/CSS/CSS_layout/Normal_Flow)
- [Flexbox](/fr/docs/Learn/CSS/CSS_layout/Flexbox)
- [Grid](/fr/docs/Learn/CSS/CSS_layout/Grids)
- [Floats](/fr/docs/Learn/CSS/CSS_layout/Floats)
- [Positioning](/fr/docs/Learn/CSS/CSS_layout/Positioning)
- [Multiple-column Layout](/fr/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Legacy Layout Methods](/fr/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
- [Supporting older browsers](/fr/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
- [Fundamental Layout Comprehension Assessment](/fr/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
