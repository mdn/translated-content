---
title: "Testez vos compétences : Valeurs et unités"
short-title: "Test : Valeurs et unités"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Values
l10n:
  sourceCommit: 8c253b4a3c79adb13bc6a70427cc38f438b6a809
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}

L'objectif de ce test de compétences est de vous aider à évaluer si vous comprenez les différents types de [valeurs et unités utilisées dans les propriétés CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units).

> [!NOTE]
> Pour obtenir de l'aide, consultez notre guide d'utilisation [Testez vos compétences](/fr/docs/Learn_web_development#testez_vos_compétences). Vous pouvez également nous contacter par l'un de nos [canaux de communication](/fr/docs/MDN/Community/Communication_channels).

## Valeurs et unités n°1

Dans cette tâche, le premier élément de la liste a été coloré en utilisant un code couleur hexadécimal. Complétez le CSS en utilisant la même couleur dans différents formats, plus un dernier élément de la liste où vous devez rendre l'arrière-plan semi-transparent.

- Le deuxième élément de la liste doit utiliser une couleur RGB.
- Le troisième doit utiliser une couleur HSL.
- Le quatrième doit utiliser une couleur RGB mais avec le canal alpha réglé à `0.6`.

Vous pouvez convertir la couleur hexadécimale en utilisant [convertingcolors.com <sup>(angl.)</sup>](https://convertingcolors.com/hex-color-86DEFA.html). Vous devez ensuite déterminer comment utiliser ces valeurs en CSS.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("values1-start", "", 300)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___values1-start live-sample___values1-finish
<ul>
  <li class="hex">couleur hexadécimale</li>
  <li class="rgb">couleur RGB</li>
  <li class="hsl">couleur HSL</li>
  <li class="transparence">valeur alpha 0.6</li>
</ul>
```

```css live-sample___values1-start live-sample___values1-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 1em;
  padding: 0.5em;
}

.hex {
  background-color: #86defa;
}

/* Ajoutez des styles ici */
```

Le style mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("values1-finish", "", 300)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

En utilisant [un outil de conversion de couleurs <sup>(angl.)</sup>](https://convertingcolors.com/hex-color-86DEFA.html), vous devez être en mesure d'utiliser différentes [fonctions de couleur](/fr/docs/Web/CSS/Reference/Values/color_value#syntax) pour définir la même couleur de différentes manières&nbsp;:

```css live-sample___values1-finish
.rgb {
  background-color: rgb(134 222 250);
}

.hsl {
  background-color: hsl(194 92% 75%);
}

.transparence {
  background-color: rgb(134 222 250 / 60%);
}
```

</details>

## Valeurs et unités n°2

Dans cette tâche, nous voulons que vous définissiez la taille de la police de différents éléments de texte&nbsp;:

- L'élément `<h1>` doit être de `50px`.
- L'élément `<h2>` doit être de `2em`.
- Tous les éléments `<p>` doivent être de `16px`.
- Un élément `<p>` qui suit directement un `<h1>` doit être de `120%`.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("values2-start", "", 420)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___values2-start live-sample___values2-finish
<h1>Titre de niveau 1</h1>
<p>
  Les légumes, c'est un plus pour vous, c'est pourquoi je vous demande de mettre
  davantage de chou-rave, ciboulette, daikon, amarante, tatsoi, tomatillo,
  melon, haricots azuki, ail.
</p>
<h2>Titre de niveau 2</h2>
<p>
  Feuilles de betterave, maïs, soko, endive, courge à gumbo. Persil, échalote,
  courgette, tatsoi, pousses de pois, fèves, chou vert, pissenlit, gombo,
  wakamé, tomate. Pissenlit, concombre, arachide, pois, cacahuète, soko,
  courgette.
</p>
```

```css live-sample___values2-start live-sample___values2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

h1 {
  /* Ajoutez des styles ici */
}

h2 {
  /* Ajoutez des styles ici */
}

p {
  /* Ajoutez des styles ici */
}

h1 + p {
  /* Ajoutez des styles ici */
}
```

Le style mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("values2-finish", "", 430)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Vous pouvez utiliser les valeurs de longueur suivantes&nbsp;:

```css live-sample___values2-finish
h1 {
  font-size: 50px;
}

h2 {
  font-size: 2em;
}

p {
  font-size: 16px;
}

h1 + p {
  font-size: 120%;
}
```

</details>

## Valeurs et unités n°3

Pour compléter la tâche, mettez à jour le CSS afin de déplacer l'image de fond de manière à ce qu'elle soit centrée horizontalement et à `20%` du haut de la boîte.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("values3-start", "", 400)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___values3-start live-sample___values3-finish
<div class="boite"></div>
```

```css live-sample___values3-start live-sample___values3-finish
.boite {
  border: 5px solid black;
  height: 350px;
}

.boite {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/purple-star.png");
  background-repeat: no-repeat;
}
```

Le style mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("values3-finish", "", 400)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Utilisez `background-position` avec le mot-clé `center` et un pourcentage&nbsp;:

```css live-sample___values3-finish
.boite {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/purple-star.png");
  background-repeat: no-repeat;
  background-position: center 20%;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}
