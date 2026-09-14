---
title: "Testez vos compétences : Le modèle de boîte"
short-title: "Test : Le modèle de boîte"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model
l10n:
  sourceCommit: a623d4459e2aa00d17dc0fd6b6bc44f56c589950
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}

L'objectif de cette évaluation est de vous aider à vérifier votre compréhension du [modèle de boîte CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model).

> [!NOTE]
> Pour obtenir de l'aide, consultez notre guide d'utilisation [Testez vos compétences](/fr/docs/Learn_web_development#testez_vos_compétences). Vous pouvez également nous contacter par l'un de nos [canaux de communication](/fr/docs/MDN/Community/Communication_channels).

## Défi interactif

Tout d'abord, nous vous proposons un défi interactif amusant impliquant le raccourci de marge, créé par notre [partenaire d'apprentissage](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations), [Scrimba <sup>(angl.)</sup>](https://scrimba.com/home).

Regardez le cours intégré, et complétez les tâches sur la timeline (les petites icônes fantômes) en suivant les instructions et en modifiant le code. Une fois terminé, vous pouvez reprendre le cours pour vérifier comment la solution de l'enseignant correspond à la vôtre.

<mdn-scrim-inline url="https://scrimba.com/learn-html-and-css-c0p/~01s" scrimtitle="Marges raccourcies" survey="true"></mdn-scrim-inline>

## Modèle de boîte n°1

Dans cette tâche, il y a deux boîtes ci-dessous, l'une utilise le modèle de boîte standard, l'autre le modèle de boîte alternatif. Nous aimerions que vous changiez la largeur de la deuxième boîte en ajoutant des déclarations à la classe `.alternatif`, afin qu'elle corresponde à la largeur visuelle de la première boîte.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("box-model1-start", "", 540)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___box-model1-start live-sample___box-model1-finish
<div class="boite">J'utilise le modèle de boîte standard.</div>
<div class="boite alternatif">J'utilise le modèle de boîte alternatif.</div>
```

```css live-sample___box-model1-start live-sample___box-model1-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
.boite {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding: 40px;
  margin: 40px;
  width: 300px;
  height: 150px;
}

.alternatif {
  box-sizing: border-box;
}
```

Le style mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("box-model1-finish", "", 540)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Vous devez augmenter la largeur du deuxième bloc pour ajouter la taille du remplissage et de la bordure&nbsp;:

```css live-sample___box-model1-finish
.alternatif {
  box-sizing: border-box;
  width: 390px;
}
```

</details>

## Modèle de boîte n°2

Pour compléter cette tâche, ajoutez les fonctionnalités suivantes à la boîte fournie&nbsp;:

- Une bordure de `5px`, noire, en pointillée.
- Une marge supérieure de `20px`.
- Une marge droite de `1em`.
- Une marge inférieure de `40px`.
- Une marge gauche de `2em`.
- Un espace intérieur sur tous les côtés de `1em`.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("box-model2-start", "100%", 100)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___box-model2-start live-sample___box-model2-finish
<div class="boite">J'utilise le modèle de boîte standard.</div>
```

```css live-sample___box-model2-start live-sample___box-model2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

.boite {
}
```

Le style mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("box-model2-finish", "100%", 140)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Cette tâche consiste à utiliser correctement les propriétés de marge, de bordure et de remplissage.
Vous pouvez choisir d'utiliser les propriétés longues ({{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, etc.)&nbsp;; cependant, lorsque vous définissez une marge et un remplissage sur tous les côtés, la notation abrégée est probablement le meilleur choix&nbsp;:

```css live-sample___box-model2-finish
.boite {
  border: 5px dotted black;
  margin: 20px 1em 40px 2em;
  padding: 1em;
}
```

</details>

## Modèle de boîte n°3

Dans cette tâche, l'élément en ligne possède une marge, un espacement intérieur et une bordure. Cependant, les lignes au-dessus et en dessous se chevauchent.

Pour compléter cette tâche, mettez à jour le CSS afin que la taille de la marge, de l'espacement intérieur et de la bordure soit respectée par les autres lignes, tout en gardant l'élément en ligne.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("box-model3-start", "100%", 220)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___box-model3-start live-sample___box-model3-finish
<div class="boite">
  <p>
    Les légumes, c'est un plus pour vous,
    <span>c'est pourquoi je vous demande</span> de mettre davantage de
    chou-rave, ciboulette, daikon, amarante, tatsoi, tomatillo, melon, haricots
    azuki, ail.
  </p>

  <p>
    Feuilles de betterave, maïs, soko, endive, courge à gumbo. Persil, échalote,
    courgette, tatsoi, pousses de pois, fèves, chou vert, pissenlit, gombo,
    wakamé, tomate. Pissenlit, concombre, arachide, pois, cacahuète, soko,
    courgette.
  </p>
</div>
```

```css live-sample___box-model3-start live-sample___box-model3-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

.boite span {
  background-color: pink;
  border: 5px solid black;
  padding: 1em;
}
```

Le style mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("box-model3-finish", "100%", 260)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

La résolution de cette tâche nécessite de comprendre quand utiliser différentes valeurs de {{CSSxRef("display")}}.
Après avoir ajouté `display: inline-block`, la marge, la bordure et le remplissage dans la direction du bloc font en sorte que les autres lignes soient repoussées loin de l'élément&nbsp;:

```css live-sample___box-model3-finish
.boite span {
  background-color: pink;
  border: 5px solid black;
  padding: 1em;
  display: inline-block;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}
