---
title: "Testez vos compétences : Arrière-plans et bordures"
short-title: "Test : Arrière-plans et bordures"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders
l10n:
  sourceCommit: 00d961466c7e388bad444f2bb1b34d5bed629686
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}

L'objectif de ce test de compétences est de vous aider à évaluer si vous comprenez [les arrière-plans et les bordures des boîtes en CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders).

> [!NOTE]
> Pour obtenir de l'aide, consultez notre guide d'utilisation [Testez vos compétences](/fr/docs/Learn_web_development#testez_vos_compétences). Vous pouvez également nous contacter par l'un de nos [canaux de communication](/fr/docs/MDN/Community/Communication_channels).

## Arrière-plans et bordures n°1

Dans cette tâche, nous voulons que vous ajoutiez un arrière-plan, une bordure et quelques styles de base à un en-tête de page.

Pour compléter la tâche&nbsp;:

1. Donnez à la boîte une bordure noire solide de `5px`, avec des coins arrondis de `10px`.
2. Donnez au `<h2>` une couleur de fond noire semi-transparente et rendez le texte blanc.
3. Ajoutez une image de fond et redimensionnez-la pour qu'elle couvre la boîte. Vous pouvez utiliser l'image suivante&nbsp;:

   ```plain
   https://mdn.github.io/shared-assets/images/examples/balloons.jpg
   ```

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("backgrounds1-start", "", 160)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___backgrounds1-start live-sample___backgrounds1-finish
<div class="boite">
  <h2>Arrière-plans et bordures</h2>
</div>
```

```css live-sample___backgrounds1-start live-sample___backgrounds1-finish
body {
  padding: 1em;
  font: 1.2em / 1.5 sans-serif;
}

* {
  box-sizing: border-box;
}

.boite {
  padding: 0.5em;
}

.boite {
  /* Ajoutez les styles ici */
}

h2 {
  /* Ajoutez les styles ici */
}
```

Le style mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("backgrounds1-finish", "", 160)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Vous devez utiliser `border`, `border-radius`, `background-image` et `background-size` et comprendre comment utiliser les couleurs RGB pour rendre une couleur de fond partiellement transparente&nbsp;:

```css live-sample___backgrounds1-finish
.boite {
  border: 5px solid black;
  border-radius: 10px;
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloons.jpg");
  background-size: cover;
}

h2 {
  background-color: rgb(0 0 0 / 50%);
  color: white;
}
```

</details>

## Arrière-plans et bordures n°2

Dans cette tâche, nous voulons que vous ajoutiez des images de fond, une bordure et d'autres styles à une boîte décorative.

Pour compléter la tâche&nbsp;:

1. Donnez à la boîte une bordure bleu clair de `5px` et arrondissez le coin supérieur gauche de `20px` et le coin inférieur droit de `40px`.
2. L'en-tête utilise l'image `star.png` comme image de fond, avec une seule étoile centrée à gauche et un motif répétitif d'étoiles à droite.
   Vous pouvez utiliser l'image suivante&nbsp;:

   ```plain
   https://mdn.github.io/shared-assets/images/examples/star.png
   ```

3. Assurez-vous que le texte de l'en-tête ne chevauche pas l'image et qu'il est centré — vous devez utiliser les techniques apprises dans les leçons précédentes pour y parvenir.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("backgrounds2-start", "", 200)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___backgrounds2-start live-sample___backgrounds2-finish
<div class="boite">
  <h2>Arrière-plans et bordures</h2>
</div>
```

```css live-sample___backgrounds2-start live-sample___backgrounds2-finish
body {
  padding: 1em;
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}
.boite {
  width: 300px;
  padding: 0.5em;
}

.boite {
  /* Ajoutez les styles ici */
}

h2 {
  /* Ajoutez les styles ici */
}
```

Le style mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("backgrounds2-finish", "", 220)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Vous devez ajouter du remplissage à l'en-tête afin qu'il ne chevauche pas l'image de l'étoile - cela fait référence à l'apprentissage de la leçon précédente sur le [modèle de boîte](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model).
Le texte doit être aligné avec la propriété `text-align`&nbsp;:

```css live-sample___backgrounds2-finish
.boite {
  border: 5px solid lightblue;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 40px;
}

h2 {
  padding: 0 40px;
  text-align: center;
  background:
    url("https://mdn.github.io/shared-assets/images/examples/star.png")
      no-repeat left center,
    url("https://mdn.github.io/shared-assets/images/examples/star.png") repeat-y
      right center;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}
