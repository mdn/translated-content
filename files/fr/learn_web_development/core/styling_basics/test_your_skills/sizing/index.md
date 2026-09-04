---
title: "Testez vos compétences : Définir la taille"
short-title: "Test : Définir la taille"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing
l10n:
  sourceCommit: a623d4459e2aa00d17dc0fd6b6bc44f56c589950
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}

L'objectif de ce test de compétences est de vous aider à évaluer si vous comprenez les différentes façons de [définir la taille des éléments en CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Sizing).

> [!NOTE]
> Pour obtenir de l'aide, consultez notre guide d'utilisation [Testez vos compétences](/fr/docs/Learn_web_development#testez_vos_compétences). Vous pouvez également nous contacter par l'un de nos [canaux de communication](/fr/docs/MDN/Community/Communication_channels).

## La taille n°1

Dans cette tâche, vous avez deux boîtes.

Pour compléter la tâche&nbsp;:

1. Redimensionnez la première boîte afin que sa hauteur soit d'au moins `100px`, même si le contenu est insuffisant pour atteindre cette hauteur. Le contenu ne doit pas déborder si la boîte est trop petite.
2. Pour tester cela, supprimez le contenu du HTML pour vous assurer que vous obtenez toujours une boîte de `100px` de hauteur même sans contenu.
3. Redimensionnez la deuxième boîte afin qu'elle ait une hauteur fixe de `100px`. Dans ce cas, le contenu doit déborder.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("sizing1-start", "", 480)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___sizing1-start live-sample___sizing1-finish
<div class="boite boite1">
  <p>
    Les légumes, c'est un plus pour vous, c'est pourquoi je vous demande de
    mettre davantage de chou-rave, ciboulette, daikon, amarante, tatsoi,
    tomatillo, melon, haricots azuki, ail.
  </p>
</div>

<div class="boite boite2">
  <p>
    Feuilles de betterave, maïs, soko, endive, courge à gumbo. Persil, échalote,
    courgette, tatsoi, pousses de pois, fèves, chou vert, pissenlit, gombo,
    wakamé, tomate. Pissenlit, concombre, arachide, pois, cacahuète, soko,
    courgette.
  </p>
</div>
```

```css live-sample___sizing1-start live-sample___sizing1-finish
body {
  font: 1.2em / 1.5 sans-serif;
  padding: 1em;
}

.boite {
  border: 5px solid black;
  width: 400px;
  margin-bottom: 1em;
}

.boite1 {
  /* Ajoutez des styles ici */
}

.boite2 {
  /* Ajoutez des styles ici */
}
```

Le style mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("sizing1-finish", "", 460)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Il y a deux boîtes. La première doit recevoir une `min-height` afin qu'elle s'agrandisse pour contenir le contenu supplémentaire, mais ne rétrécit pas en dessous de `100px` si le contenu est supprimé. La deuxième boîte reçoit une hauteur fixe, ce qui fait déborder le contenu.

```css live-sample___sizing1-finish
.boite1 {
  min-height: 100px;
}

.boite2 {
  height: 100px;
}
```

</details>

## La taille n°2

Dans cette tâche, vous avez une boîte qui contient une autre boîte.

Pour compléter la tâche&nbsp;:

1. Faites en sorte que la largeur de la boîte intérieure soit de `60%` de la largeur de la boîte extérieure. La propriété {{CSSxRef("box-sizing")}} est définie sur `border-box`, ce qui signifie que la largeur totale inclut tout `padding` et `border`.
2. Donnez à la boîte intérieure un `padding` de `10%` sur tous les côtés.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("sizing2-start", "", 100)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___sizing2-start live-sample___sizing2-finish
<div class="boite">
  <div class="interieure">
    Mettez moi à 60% de la largeur de ma boîte parente.
  </div>
</div>
```

```css live-sample___sizing2-start live-sample___sizing2-finish
body {
  font: 1.2em / 1.5 sans-serif;
  padding: 1em;
}

.boite {
  border: 5px solid black;
  width: 400px;
  margin-bottom: 1em;
}

.interieure {
  background-color: rebeccapurple;
  color: white;
  border-radius: 5px;
}

* {
  box-sizing: border-box;
}
.interieure {
  /* Ajoutez des styles ici */
}
```

Le style mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("sizing2-finish", "", 220)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Définissez la largeur de la boîte à `60%` et donnez-lui une valeur de `padding` de `10%`.
Tous les éléments ont déjà `box-sizing: border-box` défini, ce qui vous évite de vous soucier du calcul de la valeur de largeur de `60%`&nbsp;:

```css live-sample___sizing2-finish
.interieure {
  width: 60%;
  padding: 10%;
}
```

</details>

## La taille n°3

Dans cette tâche, vous avez deux images dans des boîtes. Une image est plus petite que la boîte, tandis que l'autre est plus grande, ce qui la fait dépasser de la boîte.

Pour compléter la tâche, imaginez que la boîte est réactive et peut donc grandir et rétrécir. Appliquez une déclaration aux images afin que la grande image se réduise dans la boîte, mais que la petite image ne s'étire pas.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("sizing3-start", "", 700)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___sizing3-start live-sample___sizing3-finish
<div class="boite">
  <img
    alt="Une étoile rose"
    src="https://mdn.github.io/shared-assets/images/examples/star-pink_256x256.png" />
</div>

<div class="boite">
  <img
    alt="Des montgolfières volant dans un ciel dégagé, et une foule de personnes au premier plan"
    src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
</div>
```

```css live-sample___sizing3-start live-sample___sizing3-finish
body {
  font: 1.2em / 1.5 sans-serif;
  padding: 1em;
}
.boite {
  border: 5px solid black;
  margin-bottom: 1em;
  width: 500px;
}

img {
  /* Ajoutez des styles ici */
}
```

Le style mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("sizing3-finish", "", 720)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Définissez la propriété `max-width` des images à `100%` pour contenir la grande image à l'intérieur de sa boîte. Si vous utilisez `width: 100%`, la petite image s'étire.

```css live-sample___sizing3-finish
img {
  max-width: 100%;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}
