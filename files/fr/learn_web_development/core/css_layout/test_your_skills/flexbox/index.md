---
title: "Testez vos compétences : Flexbox"
short-title: "Test : Flexbox"
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox
l10n:
  sourceCommit: 143f7345a4276156679d816a153470fe1fc6f3f8
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}

Le but de ce test de compétences est de vous aider à évaluer si vous comprenez comment [les boîtes flexibles et les éléments flexibles](/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox) se comportent. Vous trouverez ci-dessous quatre séries de problèmes de conception que vous pouvez résoudre en utilisant <i lang="en">flexbox</i>. Votre tâche consiste à corriger les problèmes.

> [!NOTE]
> Pour obtenir de l'aide, lisez notre guide d'utilisation [Testez vos compétences](/fr/docs/Learn_web_development#testez_vos_compétences). Vous pouvez également nous contacter en utilisant l'un de nos [canaux de communication](/fr/docs/MDN/Community/Communication_channels).

## Défi interactif

Tout d'abord, nous vous proposons un défi interactif amusant sur les boîtes flexibles créé par notre [partenaire d'apprentissage](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations), [Scrimba <sup>(angl.)</sup>](https://scrimba.com/home).

Regardez le scrim intégré et complétez toutes les tâches sur la frise chronologique (les petites icônes fantômes) en suivant les instructions et en modifiant le code. Lorsque vous avez terminé, vous pouvez reprendre le visionnage du scrim pour vérifier comment la solution de l'enseignant·e correspond à la vôtre.

<mdn-scrim-inline url="https://scrimba.com/frontend-path-c0j/~03a" scrimtitle="Flexbox alignment challenges" survey="true"></scrim-inline>

## Disposition flexible 1

Dans cette tâche, nous utilisons quelques éléments de liste pour créer la navigation d'un site. Pour réaliser la tâche, utilisez les boîtes flexibles pour disposer les éléments de liste en ligne, avec un espace égal entre chaque élément.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("flexbox1-start", "", 240)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___flexbox1-start live-sample___flexbox1-finish
<nav>
  <ul>
    <li><a href="/">Accueil</a></li>
    <li><a href="/about">À propos</a></li>
    <li><a href="/products">Nos produits</a></li>
    <li><a href="/contact">Contactez-nous</a></li>
  </ul>
</nav>
```

```css live-sample___flexbox1-start live-sample___flexbox1-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
nav ul {
  max-width: 750px;
  list-style: none;
  padding: 0;
  margin: 0;
}
nav a:link,
nav a:visited {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: white;
  padding: 0.5em;
  display: inline-block;
  text-decoration: none;
}

nav ul {
  /* Ajoutez des styles ici */
}
```

Lorsque la tâche est terminée, les éléments devraient ressembler à ceci&nbsp;:

{{EmbedLiveSample("flexbox1-finish", "", 100)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Vous pouvez appliquer `display: flex` et contrôler l'espacement en utilisant la propriété `justify-content`&nbsp;:

```css live-sample___flexbox1-finish
nav ul {
  display: flex;
  justify-content: space-between;
}
```

</details>

## Disposition flexible 2

Dans cette tâche, les éléments de liste sont tous de tailles différentes, mais nous voulons qu'ils soient affichés sous forme de trois colonnes de taille égale, quel que soit le contenu de chaque élément.

**Question bonus&nbsp;:** Pouvez-vous maintenant faire en sorte que le premier élément soit deux fois plus grand que les autres&nbsp;?

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("flexbox2-start", "", 240)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___flexbox2-start live-sample___flexbox2-finish
<ul>
  <li>Je suis petit</li>
  <li>J'ai plus de contenu que le très petit élément.</li>
  <li>
    J'ai beaucoup de contenu. Tellement de contenu que je ne sais pas où tout
    cela va aller. Je suis content que CSS soit assez bon pour gérer les
    situations où nous avons plus de mots que prévu&nbsp;!
  </li>
</ul>
```

```css live-sample___flexbox2-start live-sample___flexbox2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
ul {
  max-width: 750px;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: white;
  padding: 0.5em;
}

ul {
  /* Ajoutez des styles ici */
}

li {
  /* Ajoutez des styles ici */
}
```

Lorsque la tâche est terminée, les éléments devraient ressembler à ceci&nbsp;:

{{EmbedLiveSample("flexbox2-finish", "", 380)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Il est préférable d'utiliser des raccourcis, donc dans ce scénario `flex: 1` est probablement la meilleure réponse, et donc le résultat le plus optimal serait&nbsp;:

```css live-sample___flexbox2-finish
ul {
  display: flex;
}

li {
  flex: 1;
}
```

Pour la question bonus, ajoutez un sélecteur qui cible le premier élément et définit `flex: 2;` (ou `flex: 2 0 0;` ou `flex-grow: 2`)&nbsp;:

```css live-sample___flexbox2-finish
li:first-child {
  flex: 2;
}
```

</details>

## Disposition flexible 3

Dans cette tâche, nous voulons disposer les éléments de la liste en lignes.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("flexbox3-start", "", 260)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___flexbox3-start live-sample___flexbox3-finish
<ul>
  <li>Navet</li>
  <li>Feuilles de navet</li>
  <li>Achillée</li>
  <li>Haricot riz</li>
  <li>Rutabaga</li>
  <li>Endive</li>
  <li>Chou-fleur</li>
  <li>Laitue de mer</li>
  <li>Chou-rave</li>
  <li>Amarante</li>
</ul>
```

```css live-sample___flexbox3-start live-sample___flexbox3-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
ul {
  width: 450px;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: white;
  padding: 0.5em;
  margin: 0.5em;
}

ul {
  /* Ajoutez des styles ici */
}

li {
  /* Ajoutez des styles ici */
}
```

Lorsque la tâche est terminée, les éléments devraient ressembler à ceci&nbsp;:

{{EmbedLiveSample("flexbox3-finish", "", 260)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Cette tâche nécessite une compréhension de la propriété `flex-wrap` pour envelopper les lignes flexibles. De plus, pour vous assurer que vous obtenez quelque chose qui ressemble à l'exemple, vous devez définir `flex: auto` sur l'enfant (ou `flex: 1 1 auto;`).

```css live-sample___flexbox3-finish
ul {
  display: flex;
  flex-wrap: wrap;
}

li {
  flex: auto;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}
