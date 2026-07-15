---
title: "Testez vos compétences : Images HTML"
short-title: "Test : Images"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Images
l10n:
  sourceCommit: 1cf3cb0fb22bf89c780fefe74c3db7f1b9e8ca09
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}

L'objectif de ce test de compétences est de vous aider à évaluer si vous comprenez [les images et comment les intégrer dans HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_images).

> [!NOTE]
> Pour obtenir de l'aide, consultez notre guide d'utilisation [Testez vos compétences](/fr/docs/Learn_web_development#testez_vos_compétences). Vous pouvez également nous contacter par l'un de nos [canaux de communication](/fr/docs/MDN/Community/Communication_channels).

## Les images n°1

Dans cette tâche, nous vous demandons d'intégrer une image de quelques myrtilles dans la page.

Pour compléter cette tâche&nbsp;:

1. Ajoutez le chemin vers l'image dans un attribut approprié pour l'intégrer dans la page. L'image s'appelle `blueberries.jpg` et est disponible à l'adresse `https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/images/blueberries.jpg?raw=true`.
2. Ajoutez un texte alternatif dans un attribut approprié pour décrire l'image, pour les personnes qui ne peuvent pas la voir.
3. Donnez à l'élément `<img>` un attribut `width` de `400` et un attribut `height` approprié afin qu'il s'affiche avec le bon {{Glossary("aspect ratio", "rapport d'aspect")}} et qu'il ne provoque pas de re-render lors du chargement. La {{Glossary("intrinsic size", "taille intrinsèque")}} de l'image est de 615 x 419 pixels.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("images-1", "100%", 200)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___images-1
<h1>Image simple intégrée</h1>

<img />

<p>Vous devez voir une image de quelques myrtilles ci-dessus.</p>
```

```css hidden live-sample___images-1 live-sample___images-2 live-sample___images-3 live-sample___images-1-finished live-sample___images-2-finished live-sample___images-3-finished
body {
  background-color: white;
  color: #333333;
  font:
    1em / 1.4 "Helvetica Neue",
    "Helvetica",
    "Arial",
    sans-serif;
  padding: 1em;
  margin: 0;
}

* {
  box-sizing: border-box;
}

img {
  border: 1px solid black;
}
```

Le contenu mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("images-1-finished", "100%", 460)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre code HTML final doit ressembler à ceci&nbsp;:

```html-nolint live-sample___images-1-finished
<h1>Image simple intégrée</h1>

<img src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/images/blueberries.jpg?raw=true"
     alt="myrtilles" width="400" height="273" />

<p>Vous devez voir une image de quelques myrtilles ci-dessus.</p>
```

Nous avons calculé la valeur correcte de `height` à définir en utilisant le calcul 400 x 419/615.

</details>

## Les images n°2

Dans cette tâche, vous avez déjà une image complète, mais nous aimerions que vous ajoutiez une info-bulle qui apparaît lorsque l'image est survolée par la souris. Vous devez y mettre des informations appropriées.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("images-2", "100%", 600)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___images-2
<h1>Titre d'image simple</h1>

<img
  src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/larch.jpg?raw=true"
  alt="Plusieurs grands arbres à feuilles persistantes appelés mélèzes" />
```

Nous n'avons pas fourni de contenu terminé pour cette tâche, car il ressemble au point de départ.

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre code HTML final doit ressembler à ceci&nbsp;:

```html-nolint live-sample___images-2-finished
<h1>Titre d'image simple</h1>

<img
  src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/larch.jpg?raw=true"
  alt="Plusieurs grands arbres à feuilles persistantes appelés mélèzes"
  title="Et maintenant, numéro 1, le mélèze" />
```

</details>

## Images 3

Dans cette tâche, vous disposez à la fois d'une image complète et d'un texte de légende. Ce que vous devez faire ici, c'est ajouter des éléments qui associent l'image à la légende.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("images-3", "100%", 600)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___images-3
<h1>Image et légende</h1>

<img
  src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/firefox.png?raw=true"
  alt="Un renard enflammé abstrait enroulé autour d'une sphère bleue"
  width="446"
  height="460" />
Le logo Firefox de 2019
```

```css hidden live-sample___images-3 live-sample___images-3-finished
figcaption {
  font-style: italic;
}
```

Le contenu mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("images-3-finished", "100%", 640)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre code HTML final doit ressembler à ceci&nbsp;:

```html live-sample___images-3-finished
<h1>Image et légende</h1>

<figure>
  <img
    src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/firefox.png?raw=true"
    alt="Un renard enflammé abstrait enroulé autour d'une sphère bleue"
    width="446"
    height="460" />
  <figcaption>Le logo Firefox de 2019</figcaption>
</figure>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}
