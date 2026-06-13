---
title: "Testez vos compétences : Les sélecteurs"
short-title: "Test : Les sélecteurs"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors
l10n:
  sourceCommit: a623d4459e2aa00d17dc0fd6b6bc44f56c589950
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}

L'objectif de ce test de compétences est de vous aider à évaluer si vous comprenez les [sélecteurs CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Basic_selectors).

Pour compléter ces tâches, vous ne devez modifier que le CSS, pas le HTML.

> [!NOTE]
> Pour obtenir de l'aide, consultez notre guide d'utilisation [Testez vos compétences](/fr/docs/Learn_web_development#testez_vos_compétences). Vous pouvez également nous contacter par l'un de nos [canaux de communication](/fr/docs/MDN/Community/Communication_channels).

## Les sélecteurs 1

Pour compléter la tâche&nbsp;:

1. Rendez les titres `<h1>` bleus.
2. Donnez aux titres `<h2>` un fond bleu et un texte blanc.
3. Faites en sorte que le texte entouré d'un `<span>` ait une taille de police de `200%`.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("selectors1-start", "", 370)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___selectors1-start live-sample___selectors1-finish
<div class="container">
  <h1>Ceci est un titre</h1>
  <p>
    Les légumes, c'est un plus pour vous,
    <span>c'est pourquoi je vous demande</span> de mettre davantage de
    chou-rave, ciboulette, daikon, amarante, tatsoi, tomatillo, melon, haricots
    azuki, ail.
  </p>
  <h2>Un titre de niveau 2</h2>
  <p>
    Feuilles de betterave, maïs, soko, endive, courge à gumbo. Persil, échalote,
    courgette, tatsoi, pousses de pois, fèves, chou vert, pissenlit, gombo,
    wakamé, tomate. Pissenlit, concombre, arachide, pois, cacahuète, soko,
    courgette.
  </p>
</div>
```

```css live-sample___selectors1-start live-sample___selectors1-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
/* Ajoutez des styles ici */
```

Le style mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("selectors1-finish", "", 400)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Vous devez cibler les sélecteurs `h1`, `h2` et `span` pour changer leur couleur ou leur taille.

```css live-sample___selectors1-finish
h1 {
  color: blue;
}

h2 {
  background-color: blue;
  color: white;
}

span {
  font-size: 200%;
}
```

</details>

## Les sélecteurs 2

Pour compléter la tâche&nbsp;:

1. Donnez à l'élément avec un id de `special` un fond jaune.
2. Donnez à l'élément avec une classe de `alerte` une bordure grise solide de `2px`.
3. Si l'élément avec une classe de `alerte` a également une classe de `stop`, faites en sorte que le fond soit rouge.
4. Si l'élément avec une classe de `alerte` a également une classe de `go`, faites en sorte que le fond soit vert.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("selectors2-start", "", 480)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___selectors2-start live-sample___selectors2-finish
<div class="conteneur">
  <h1>Ceci est un titre</h1>
  <p>
    Les légumes, c'est un plus pour vous,
    <span class="alerte">c'est pourquoi je vous demande</span> de mettre
    davantage de chou-rave, ciboulette, daikon, amarante, tatsoi, tomatillo,
    melon, haricots azuki, ail.
  </p>
  <h2 id="special">Un titre de niveau 2</h2>
  <p>Gumbo, betterave verte, maïs, soko, endive, gumbo, gourd.</p>
  <h2>Un autre titre de niveau 2</h2>
  <p>
    <span class="alerte go">Persil, échalote</span>, courgette, tatsoi, pousses
    de pois, fèves, chou vert, pissenlit, gombo, wakamé, tomate. Pissenlit,
    concombre, arachide, pois, cacahuète, soko, courgette.
  </p>
</div>
```

```css live-sample___selectors2-start live-sample___selectors2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
/* Ajoutez des styles ici */
```

Le style mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("selectors2-finish", "", 480)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Cela teste votre compréhension de la différence entre les sélecteurs de classe et d'identifiant, ainsi que la manière de cibler plusieurs classes sur un élément.

```css live-sample___selectors2-finish
#special {
  background-color: yellow;
}

.alert {
  border: 2px solid grey;
}

.alert.stop {
  background-color: red;
}

.alert.go {
  background-color: green;
}
```

</details>

## Les sélecteurs 3

Pour compléter la tâche&nbsp;:

1. Mettez en forme les liens, en rendant l'état du lien orange, les liens visités verts et en supprimant le soulignement au survol.
2. Faites en sorte que le premier élément à l'intérieur du conteneur ait une `font-size: 150%` et que la première ligne de cet élément soit rouge.
3. Rayez toutes les autres lignes du tableau en sélectionnant ces lignes et en leur donnant une couleur de fond de `#333333` et une couleur de premier plan blanche.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("selectors3-start", "", 440)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___selectors3-start live-sample___selectors3-finish
<div class="conteneur">
  <p>
    Les légumes, <a href="http://exemple.com">c'est un plus pour vous</a>, c'est
    pourquoi je vous demande de mettre davantage de chou-rave, ciboulette,
    daikon, amarante, tatsoi, tomatillo, melon, haricots azuki, ail.
  </p>
  <p>
    Feuilles de betterave, maïs, soko, endive, courge à gumbo. Persil, échalote,
    courgette, tatsoi, pousses de pois, fèves, chou vert, pissenlit, gombo,
    wakamé, tomate. Pissenlit, concombre, arachide, pois, cacahuète, soko,
    courgette.
  </p>
  <table>
    <tbody>
      <tr>
        <th>Fruits</th>
        <th>Légumes</th>
      </tr>
      <tr>
        <td>Pomme</td>
        <td>Pomme de terre</td>
      </tr>
      <tr>
        <td>Orange</td>
        <td>Carotte</td>
      </tr>
      <tr>
        <td>Tomate</td>
        <td>Panais</td>
      </tr>
      <tr>
        <td>Kiwi</td>
        <td>Oignon</td>
      </tr>
      <tr>
        <td>Banane</td>
        <td>Betterave</td>
      </tr>
    </tbody>
  </table>
</div>
```

```css live-sample___selectors3-start live-sample___selectors3-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}

table {
  border-collapse: collapse;
  width: 300px;
}

td,
th {
  padding: 0.2em;
  text-align: left;
}

/* Ajoutez des styles ici */
```

Le style mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("selectors3-finish", "", 540)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Appliquez une pseudo-classe (`:first-child`) et un pseudo-élément (`::first-line`) au contenu.
Mettez en forme les états `:link`, `:visited` et `:hover` de l'élément `a`, et créez des lignes de tableau alternées en utilisant la pseudo-classe `:nth-child`.

```css live-sample___selectors3-finish
.conteneur p:first-child {
  font-size: 150%;
}

.conteneur p:first-child::first-line {
  color: red;
}

a:link {
  color: orange;
}

a:visited {
  color: green;
}

a:hover {
  text-decoration: none;
}

tr:nth-child(even) {
  background-color: #333333;
  color: white;
}
```

</details>

## Les sélecteurs 4

Pour compléter la tâche&nbsp;:

1. Mettez en forme les paragraphes qui suivent directement un élément `<h2>` en rouge.
2. Mettez en forme les éléments de liste qui sont un enfant direct de l'élément `<ul>` avec une classe `list` comme suit&nbsp;:
   - Supprimez leurs puces.
   - Donnez-leur une bordure inférieure grise de `1px`.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("selectors4-start", "", 500)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___selectors4-start live-sample___selectors4-finish
<div class="conteneur">
  <h2>Ceci est un titre</h2>
  <p>Ce paragraphe vient après le titre.</p>
  <p>Ceci est le deuxième paragraphe.</p>

  <h2>Un autre titre</h2>
  <p>Ce paragraphe vient après le titre.</p>
  <ul class="liste">
    <li>Un</li>
    <li>
      Deux
      <ul>
        <li>2.1</li>
        <li>2.2</li>
      </ul>
    </li>
    <li>Trois</li>
  </ul>
</div>
```

```css live-sample___selectors4-start live-sample___selectors4-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

/* Ajoutez des styles ici */
```

Le style mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("selectors4-finish", "", 500)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Cette tâche vérifie que vous comprenez comment utiliser différents combinateurs.
Voici une solution appropriée&nbsp;:

```css live-sample___selectors4-finish
h2 + p {
  color: red;
}

.liste > li {
  list-style: none;
  border-bottom: 1px solid #cccccc;
}
```

</details>

## Les sélecteurs 5

Pour compléter la tâche, fournissez des solutions pour les défis suivants en utilisant des sélecteurs d'attributs&nbsp;:

1. Ciblez l'élément `<a>` avec un attribut `title` et donnez-lui une bordure rose (`border-color: pink`).
2. Ciblez l'élément `<a>` avec un attribut `href` qui contient le mot `contact` quelque part dans sa valeur et donnez-lui une bordure orange (`border-color: orange`).
3. Ciblez l'élément `<a>` avec une valeur `href` commençant par `https` et donnez-lui une bordure verte (`border-color: green`).

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("selectors5-start", "", 300)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___selectors5-start live-sample___selectors5-finish
<ul>
  <li><a href="https://exemple.com">Lien 1</a></li>
  <li><a href="http://exemple.com" title="Visitez exemple.com">Lien 2</a></li>
  <li><a href="/contact">Lien 3</a></li>
  <li><a href="../contact/index.html">Lien 4</a></li>
</ul>
```

```css live-sample___selectors5-start live-sample___selectors5-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 0.5em;
}

a {
  display: block;
  padding: 0.5em;
}

a {
  border: 5px solid grey;
}

/* Ajoutez des styles ici */
```

Le style mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("selectors5-finish", "", 300)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

- Pour sélectionner les éléments avec un attribut title, nous pouvons ajouter title à l'intérieur des crochets (`a[title]`), ce qui sélectionne le deuxième lien, qui est le seul avec un attribut title.

- Pour cibler l'élément `<a>` avec un attribut `href` qui contient le mot «&nbsp;contact&nbsp;» quelque part dans sa valeur et lui donner une bordure orange (`border-color: orange`).
  Il y a deux choses que nous voulons correspondre ici, la valeur href `/contact` et aussi `../contact`. Nous devons donc correspondre à la chaîne de caractères «&nbsp;contact&nbsp;» n'importe où dans la valeur en utilisant `*=`. Cela sélectionne les troisième et quatrième liens.

- Pour cibler l'élément `<a>` avec une valeur `href` commençant par `https` et lui donner une bordure verte (`border-color: green`).
  Recherchez une valeur `href` qui commence par «&nbsp;https&nbsp;», donc utilisez `^=` pour ne sélectionner que le premier lien.

```css live-sample___selectors5-finish
a[title] {
  border-color: pink;
}
a[href*="contact"] {
  border-color: orange;
}
a[href^="https"] {
  border-color: green;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}
