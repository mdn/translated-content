---
title: Grilles
slug: Learn/CSS/CSS_layout/Grids
translation_of: Learn/CSS/CSS_layout/Grids
original_slug: Apprendre/CSS/CSS_layout/Grids
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout")}}

«&nbsp;CSS Grid Layout&nbsp;» (Trames avec les CSS) est un système de mise en page bidimensionnel. Il vous permet de disposer les contenus en lignes et en colonnes&nbsp;; il possède de nombreuses fonctionnalités simplifiant la construction de mises en page complexes. Cet article vous indique tout ce que vous devez savoir pour commencer une mise en page avec une trame.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Les fondamentaux du HTML (étudiez
        <a href="/fr/Learn/HTML/Introduction_to_HTML"
          >Introduction au HTML</a
        >) et une idée de la manière dont la CSS fonctionne (étudiez
        <a href="/fr/Learn/CSS/Introduction_to_CSS">Introduction aux CSS</a>
        et <a href="/fr/Learn/CSS/Building_blocks">Blocs de base en CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>
        Comprendre les concepts fondamentaux sous-jacents de la disposition en
        trame et comment la mettre en œuvre en utilisant «&nbsp;CSS Grid&nbsp;» (Grilles CSS).
      </td>
    </tr>
  </tbody>
</table>

## Qu'est qu'une disposition en trame ?

Une trame est simplement un ensemble de lignes horizontales et verticales créant un quadrillage dans lequel nous pouvons agencer les éléments à afficher. Elles nous aident à créer des compositions dans lesquelles les éléments ne sautent pas ou ne changent pas de largeur au fur et à mesure que nous nous déplaçons d'une page à l'autre, ce qui assure une plus grande cohérence des sites Web.

La trame est constituée généralement de **rangées** (**colonnes** ou **lignes**). L'espace entre chaque ligne ou colonne est communément appelé **gouttière**.

![Schéma du quadrillage](grid.png)

## Création d'une trame CSS

Après avoir décidé le maillage voulu pour votre design, vous pouvez utiliser «&nbsp;_CSS Grid Layout_&nbsp;» (modèle de disposition en grille) pour créer une trame avec la CSS et y placer des éléments. Nous examinerons d'abord les caractéristiques de base de «&nbsp;_Grid Layout_&nbsp;» (disposition en quadrillage), puis nous explorerons comment créer un système de trame simple pour le projet.

La vidéo suivante fournit une belle explication visuelle de l'utilisation de «&nbsp;_CSS Grid_&nbsp;» (Grilles CSS)&nbsp;:

{{EmbedYouTube("KOvGeFUHAC0")}}

### Définition d'une trame

Pour débuter, téléchargez et ouvrez [le fichier de départ](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/0-starting-point.html) dans l'éditeur de texte et dans le navigateur (vous pouvez également le [voir en direct ici](https://mdn.github.io/learning-area/css/css-layout/grids/0-starting-point.html)). Vous y verrez un exemple constitué d'un conteneur avec quelques enfants. Par défaut, ils sont présentés suivant le cours normal&nbsp;: les boîtes s'affichent donc accolées les unes au-dessous des autres. Nous travaillerons avec ce fichier dans la première partie de la leçon&nbsp;; nous y introduirons des changements et observerons les modifications induites dans le comportement du maillage.

Pour définir un tramage, on affecte la valeur `grid` à la propriété [`display`](/fr/docs/Web/CSS/display). De la même manière qu'avec Flexbox, nous basculons ainsi en disposition en quadrillage&nbsp;; tous les enfants directs du conteneur deviennent des éléments de la maille. Ajoutez ceci à la CSS du fichier&nbsp;:

```css
.container {
    display: grid;
}
```

Contrairement au cas de Flexbox, il n'y a sur le champ aucune différence pour les éléments. Déclarer `display: grid` fournit une chaîne à un seul fil et, donc, les éléments continuent à s'afficher juxtaposés comme dans un cours normal.

Pour voir quelque chose qui ressemble plus à un quadrillage, nous devons ajouter quelques fils de chaîne à la trame. Mettons trois colonnes de 200 pixels — vous pouvez utiliser n'importe quelle unité de taille ou bien un pourcentage pour créer ces rangées en colonne.

Ajoutons cette déclaration dans nos règles CSS, puis actualisons la page&nbsp;: nous voyons que les éléments ont été arrangés et placés chacun dans une cellule du quadrillage ainsi créé.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207,232,220);
  border: 2px solid rgb(79,185,227);
}
```

```html hidden
<div class="container">
 <div>Un</div>
 <div>Deux</div>
 <div>Trois</div>
 <div>Quatre</div>
 <div>Cinq</div>
 <div>Six</div>
 <div>Sept</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

{{ EmbedLiveSample('', '100%', 400) }}

### Trames adaptables avec l'unité **fr**

En plus de créer des fils de chaîne en unités de longueur ou de pourcentage, nous pouvons utiliser l'unité `fr` pour moduler la taille des lignes et colonnes du quadrillage. Cette unité représente une fraction de l'espace disponible du conteneur de trame.

En changeant la liste des chaînes par la suivante, on crée trois chaînes de `1fr`.

```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
```

Vous avez maintenant des chaînes de trame adaptables. L'espace est distribué en proportion de la valeur donnée à l'unité `fr` ; vous pouvez donc affecter des valeurs positives différentes à chaque piste. Par exemple, si vous changez la définition ainsi&nbsp;:

```css
.container {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
}
```

La première chaîne obtient `2fr` de l'espace disponible et les deux autres `1fr`&nbsp;; la première chaîne sera plus large. Il est possible de mélanger des unités `fr` et des largeurs fixes pour les chaînes — dans ce cas, l'espace nécessaire aux chaînes de largeur fixée est réservé avant la distribution proportionnelle de l'espace restant aux autres chaînes.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}

.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207,232,220);
  border: 2px solid rgb(79,185,227);
}

```

```html hidden
<div class="container">
 <div>Un</div>
 <div>Deux</div>
 <div>Trois</div>
 <div>Quatre</div>
 <div>Cinq</div>
 <div>Six</div>
 <div>Sept</div>
</div>
```

{{ EmbedLiveSample('', '100%', 400) }}

> **Note :** L'unité `fr` distribue l'espace disponible, et non sa _totalité_. Donc, si une des pistes contient quelque chose de grande taille, il y aura moins d'espace disponible à partager.

### Espaces entre pistes

Pour créer des «&nbsp;gouttières&nbsp;» entre chaînes et trames, nous nous servons des propriétés [`column-gap`](/fr/docs/Web/CSS/column-gap) et [`row-gap`](/fr/docs/Web/CSS/row-gap) pour, respectivement, les espacements entre colonnes et entre lignes&nbsp;; la propriété [`gap`](/fr/docs/Web/CSS/gap) définit les deux d'un coup.

```css
.container {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 20px;
}
```

Ces espacements peuvent être définis avec n'importe quelle unité de longueur ou un pourcentage, mais pas avec l'unité `fr`.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207,232,220);
  border: 2px solid rgb(79,185,227);
}

```

```html hidden
<div class="container">
 <div>Un</div>
 <div>Deux</div>
 <div>Trois</div>
 <div>Quatre</div>
 <div>Cinq</div>
 <div>Six</div>
 <div>Sept</div>
</div>
```

{{ EmbedLiveSample('', '100%', 400) }}

> **Note :** Les propriétés `-gap` (`column-gap`, `row-gap` et `gap`) étaient traditionnellement préfixées par `grid-`, mais la norme a été modifiée avec l'intention de la rendre utilisable dans les diverses méthodes de mise en page. Les versions préfixées seront maintenues en tant qu'alias, de sorte qu'elles seront utilisables en toute sécurité pendant un certain temps. En appliquant le principe de précaution, vous pouvez doubler et mettre les deux types de propriétés pour «&nbsp;blinder&nbsp;» votre code&nbsp;:
> 
> ```css
> .container {
>     display: grid;
>     grid-template-columns: 2fr 1fr 1fr;
>     grid-gap: 20px;
>     gap: 20px;
> }
> ```

### Répétition des listes de pistes

Vous pouvez répéter tout ou partie d'une liste de chaînes à l'aide d'une notation adaptée. Modifiez la liste des chaînes ainsi&nbsp;:

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```

Nous obtenons trois chaînes de `1fr` de large, comme précédemment. La première valeur passée à la fonction `repeat()` est le nombre de répétitions de la liste, définie par le paramètre suivant&nbsp;: celui-ci peut être une ou plusieurs chaînes que vous voulez répéter.

### Trame implicite et explicite

Nous n'avons jusqu'à présent défini que des chaînes en colonnes, mais on peut aussi les créer en lignes pour recevoir les contenus. C'est un exemple de trame explicite (la chaîne) vs implicite (la trame). La chaîne explicite est celle créée avec `grid-template-columns` ou `grid-template-rows`. La trame implicite est créée lorsque l'on met du contenu dans ce quadrillage — comme dans les rangées de nos exemples. La chaîne explicite et la trame implicite sont analogues aux axes principal et croisé de Flexbox.

Par défaut, les rangées de la trame implicite sont `auto` dimensionnées, ce qui signifie qu'elles sont, en général, suffisamment grandes pour accueillir le contenu. Si vous voulez que les rangées de trame créées par le navigateur aient une taille donnée, utilisez les propriétés [`grid-auto-rows`](/fr/docs/Web/CSS/grid-auto-rows) et [`grid-auto-columns`](/fr/docs/Web/CSS/grid-auto-columns). Si vous ajoutez la propriété `grid-auto-rows` avec une valeur de `100px` dans la CSS, vous verrez que les rangées créées ont maintenant 100 pixels de haut.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207,232,220);
  border: 2px solid rgb(79,185,227);
}
```

```html hidden
<div class="container">
 <div>Un</div>
 <div>Deux</div>
 <div>Trois</div>
 <div>Quatre</div>
 <div>Cinq</div>
 <div>Six</div>
 <div>Sept</div>
</div>

```

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  gap: 20px;
}
```

{{ EmbedLiveSample('', '100%', 400) }}

### La fonction minmax()

Les rangées de trame de 100 pixels de haut ne seront pas très utiles si nous y plaçons des contenus de plus de 100 pixels de haut&nbsp;: il y aurait alors débordement. Il est préférable d'avoir des pistes d'_au moins_ 100 pixels de haut, mais susceptibles de s'agrandir si le contenu déposé le nécessite. C'est un constat classique à propos du web&nbsp;: vous ne savez jamais vraiment quelle sera la hauteur d'un élément — du contenu supplémentaire ou des tailles de police plus grandes peuvent amener des problèmes avec des designs en pixels visant la perfection dans toute dimension.

La fonction [`minmax()`](/fr/docs/Web/CSS/minmax()) nous permet de fixer une taille maximale et minimale pour une trame, par exemple `minmax(100px, auto)`. La taille minimale est de 100 pixels, mais la maximale est `auto` — elle s'agrandira selon le contenu. Changeons `grid-auto-rows` en utilisant une valeur `minmax`&nbsp;:

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    gap: 20px;
}
```

Si vous ajoutez du contenu supplémentaire, vous verrez que la trame grandit pour permettre l'incorporation. Notez que l'agrandissement est général pour toute la rangée.

### Autant de chaînes que possible

Il est possible de combiner nos savoirs à propos des listes de pistes, la notation `repeat()` et [`minmax()`](/fr/docs/Web/CSS/minmax()) pour créer un modèle utile. Parfois, demander à ce que la génération automatique crée autant de chaînes que possible dans un conteneur nous faciliterait la tâche. Pour réaliser cela, définissez la valeur de `grid-template-columns` égale à [`repeat()`](/fr/docs/Web/CSS/repeat()) avec le mot-clé `auto-fill` comme premier paramètre au lieu d'un nombre. Pour le second paramètre de la fonction, utilisez `minmax()` avec pour minimum la taille souhaitée pour la piste et `1fr` pour maximum.

Essayez ceci dans le fichier avec la CSS ci-dessous&nbsp;:

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207,232,220);
  border: 2px solid rgb(79,185,227);
}

```

```html hidden
<div class="container">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
  <div>Cinq</div>
  <div>Six</div>
  <div>Sept</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  gap: 20px;
}
```

{{ EmbedLiveSample('', '100%', 400) }}

Il a été créé autant de chaînes de 200 pixels qu'il y a de place dans le conteneur, puis l'espace restant a été partagé entre toutes les colonnes — le maximum de `1fr` répartit, comme nous le savons déjà, l'espace de façon égale entre rangées.

## Placement sur les lignes

Nous passons maintenant de la création du quadrillage à la mise en place des choses dans celui-ci. Le quadrillage a toujours des fils de chaîne, ils commencent à 1 et sont en relation avec le [«&nbsp;_writing mode_&nbsp;» (mode d'écriture)](/fr/docs/Web/CSS/CSS_Writing_Modes) du document. Ainsi, en anglais, la rangée de la chaîne 1 sera une colonne et se trouvera à gauche du quadrillage et la rangée de la trame sera une ligne 1 en haut. En arabe, la rangée de la chaîne 1 se situera du côté droit, car l'arabe s'écrit de droite à gauche.

Nous pouvons placer les choses dans ces rangées en indiquant les rangées de début et de fin. Pour ce faire, nous utilisons les propriétés suivantes&nbsp;:

- [`grid-column-start`](/fr/docs/Web/CSS/grid-column-start)
- [`grid-column-end`](/fr/docs/Web/CSS/grid-column-end)
- [`grid-row-start`](/fr/docs/Web/CSS/grid-row-start)
- [`grid-row-end`](/fr/docs/Web/CSS/grid-row-end)

Ces propriétés acceptent toutes un numéro de ligne comme valeur. Vous pouvez également utiliser les formes abrégées de ces propriétés&nbsp;:

- [`grid-column`](/fr/docs/Web/CSS/grid-column)
- [`grid-row`](/fr/docs/Web/CSS/grid-row)

Cela vous permet de définir les rangées de départ et de fin simultanément, en les séparant avec une barre oblique `/`.

[Pour débuter, téléchargez ce fichier](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/8-placement-starting-point.html) ou [voyez-le en direct ici](https://mdn.github.io/learning-area/css/css-layout/grids/8-placement-starting-point.html). Il comporte déjà une définition de quadrillage et un seul article. Constatez que le _placement automatique_ met les éléments dans chaque cellule du quadrillage créé.

À la place, nous allons mettre la totalité des éléments du site sur le quadrillage en utilisant les rangées de la chaîne (les colonnes dans notre cas). Ajoutez les règles ci-après à la fin de la CSS&nbsp;:

```css
header {
  grid-column: 1 / 3;
  grid-row: 1;
}

article {
  grid-column: 2;
  grid-row: 2;
}

aside {
  grid-column: 1;
  grid-row: 2;
}

footer {
  grid-column: 1 / 3;
  grid-row: 3;
}
```

```css hidden
body {
    width: 90%;
    max-width: 900px;
    margin: 2em auto;
    font: .9em/1.2 Arial, Helvetica, sans-serif;
}

.container {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 20px;
}
header {
    grid-column: 1 / 3;
    grid-row: 1;
}

article {
    grid-column: 2;
    grid-row: 2;
}

aside {
    grid-column: 1;
    grid-row: 2;
}

footer {
    grid-column: 1 / 3;
    grid-row: 3;
}

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207,232,220);
  border: 2px solid rgb(79,185,227);
}

aside {
  border-right: 1px solid #999;
}
```

```html hidden
<div class="container">
  <header>Voici mon joli blog</header>
  <article>
    <h1>Mon article</h1>
    <p>Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

    <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </article>
  <aside>
    <h2>Autres sujets</h2>
    <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est.</p>
  </aside>
  <footer>Contactez moi@monsite.com</footer>
</div>
```

{{ EmbedLiveSample('', '100%', 600) }}

> **Note :** Vous pouvez aussi utiliser la valeur `-1` pour cibler la dernière rangée de la chaîne et compter vers l'intérieur à partir de la fin en utilisant des valeurs négatives. Cependant, cela ne fonctionne que pour la chaîne explicite. La valeur `-1` ne ciblera pas le rang de fin de [trame implicite](/fr/docs/Glossary/Grid).

## Placer avec grid-template-areas

Une autre façon de placer des éléments dans le quadrillage consiste à utiliser la propriété [`grid-template-areas`](/fr/docs/Web/CSS/grid-template-areas) en donnant un nom au divers éléments du design.

Supprimez le placement sur les lignes du dernier exemple (ou bien rechargez le fichier pour avoir un nouveau point de départ) et ajoutez ceci à la CSS.

```css
.container {
  display: grid;
  grid-template-areas:
      "header header"
      "sidebar content"
      "footer footer";
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}

header {
  grid-area: header;
}

article {
  grid-area: content;
}

aside {
  grid-area: sidebar;
}

footer {
  grid-area: footer;
}
```

Actualisez la page et vous verrez que vos éléments ont été placés comme la fois précédente sans que nous ayons besoin d'utiliser un quelconque numéro de ligne&nbsp;!

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207,232,220);
  border: 2px solid rgb(79,185,227);
}

aside {
  border-right: 1px solid #999;
}

.container {
  display: grid;
  grid-template-areas:
  "header header"
  "sidebar content"
  "footer footer";
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
}

header {
  grid-area: header;
}

article {
  grid-area: content;
}

aside {
  grid-area: sidebar;
}

footer {
  grid-area: footer;
}

```

```html hidden
<div class="container">
  <header>Voici mon joli blog</header>
  <article>
    <h1>Mon article</h1>
    <p>Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

    <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </article>
  <aside>
    <h2>Autres sujets</h2>
    <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est.</p>
  </aside>
  <footer>Contactez moi@monsite.com</footer>
</div>
```

{{ EmbedLiveSample('', '100%', 600) }}

Les règles pour `grid-template-areas` sont les suivantes&nbsp;:

- Toute cellule du quadrillage doit être remplie&nbsp;;
- Pour couvrir deux cellules, répétez le nom&nbsp;;
- Pour laisser une cellule vide, utilisez un point `.`&nbsp;;
- Les zones doivent être rectangulaires — par exemple, vous ne pouvez pas avoir une zone en L&nbsp;;
- Les zones ne peuvent pas être répétées dans des emplacements différents.

Vous pouvez jouer avec la disposition, en modifiant le pied de page pour qu'il ne soit placé que sous le contenu et que la barre latérale soit sur toute la hauteur de la page, par exemple. C'est une très belle façon de décrire une disposition, car elle est évidente à la seule lecture de la CSS.

## Grilles CSS&nbsp;: une structure de quadrillage

Les «&nbsp;structures&nbsp;» de quadrillage se fondent sur une série de 12 à 16 rangées. Avec les grilles CSS, vous n'avez pas besoin d'outils tierce partie pour créer la structure — elle est déjà dans les spécifications.

[Chargez le fichier de départ](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/11-grid-system-starting-point.html). Il contient un conteneur à 12 colonnes et le même balisage que celui utilisé dans les deux exemples précédents. Nous pouvons maintenant utiliser le placement sur les lignes pour mettre le contenu sur le quadrillage à 12 colonnes.

```css
header {
  grid-column: 1 / 13;
  grid-row: 1;
}

article {
  grid-column: 4 / 13;
  grid-row: 2;
}

aside {
  grid-column: 1 / 4;
  grid-row: 2;
}

footer {
  grid-column: 1 / 13;
  grid-row: 3;
}
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}

.container {
  display: grid;
  grid-template-columns: repeat(12, minmax(0,1fr));
  grid-gap: 20px;
}

header {
  grid-column: 1 / 13;
  grid-row: 1;
}

article {
  grid-column: 4 / 13;
  grid-row: 2;
}

aside {
  grid-column: 1 / 4;
  grid-row: 2;
}

footer {
  grid-column: 1 / 13;
  grid-row: 3;
}

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207,232,220);
  border: 2px solid rgb(79,185,227);
}

aside {
  border-right: 1px solid #999;
}

```

```html hidden
<div class="container">
  <header>Voici mon joli blog</header>
  <article>
    <h1>Mon article</h1>
    <p>Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

    <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </article>
  <aside>
    <h2>Autres sujets</h2>
    <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est.</p>
  </aside>
  <footer>Contactez moi@monsite.com</footer>
</div>
```

{{ EmbedLiveSample('', '100%', 600) }}

Si vous utilisez [_Firefox Grid Inspector_ (inspecteur de grilles)](/fr/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts) (Inspecteur > Mise en page > Grilles) pour superposer les lignes du quadrillage sur le design, vous verrez comment le quadrillage à 12 colonnes fonctionne.

![Les lignes d'un quadrillage à 12 colonnes superposées sur notre design.](learn-grids-inspector.png)

## Testez vos compétences&nbsp;!

Vous avez atteint la fin de cet article, mais pourriez-vous retenir les informations les plus importantes&nbsp;? Vous trouverez des tests supplémentaires pour évaluer vos compétences sur la page [Testez vos compétences&nbsp;: Grilles](/fr/docs/Learn/CSS/CSS_layout/Grid_skills).

## Résumé

Dans cet aperçu, nous avons parcouru les principales caractéristiques de la mise en page avec les fonctionnalités du modèle de disposition en grille. Vous devriez pouvoir commencer à l'utiliser dans vos mises en page. Pour en savoir plus sur les spécifications, lisez nos guides sur la disposition en trame&nbsp;; leurs intitulés sont rappelés ci-dessous.

## Voir aussi

- [Grilles CSS (CSS Grid)&nbsp;: Guides](/fr/docs/Web/CSS/CSS_Grid_Layout#guides)
- [Inspecteur de grille CSS&nbsp;: examiner les grilles](/fr/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts)

{{PreviousMenuNext("Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout")}}

## Dans ce module

- [Introduction à la mise en page en CSS](/fr/docs/Learn/CSS/CSS_layout/Introduction)
- [Cours normal](/fr/docs/Learn/CSS/CSS_layout/Normal_Flow)
- [Flexbox](/fr/docs/Learn/CSS/CSS_layout/Flexbox)
- [Grilles](/fr/docs/Learn/CSS/CSS_layout/Grids)
- [Les boîtes flottantes](/fr/docs/Learn/CSS/CSS_layout/Floats)
- [Le positionnement](/fr/docs/Learn/CSS/CSS_layout/Positioning)
- [Disposition sur plusieurs colonnes](/fr/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Méthodes de mises en page traditionnelles](/fr/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
- [Prise en charge des anciens navigateurs](/fr/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
- [Compréhension fondamentale de la mise en page](/fr/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
