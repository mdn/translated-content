---
title: "Testez vos compétences : Audio et vidéo"
short-title: "Test : Audio et vidéo"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video
l10n:
  sourceCommit: 1cf3cb0fb22bf89c780fefe74c3db7f1b9e8ca09
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content")}}

L'objectif de ce test de compétences est de vous aider à évaluer si vous comprenez comment [intégrer du contenu vidéo et audio dans HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio).

> [!NOTE]
> Pour obtenir de l'aide, consultez notre guide d'utilisation [Testez vos compétences](/fr/docs/Learn_web_development#testez_vos_compétences). Vous pouvez également nous contacter par l'un de nos [canaux de communication](/fr/docs/MDN/Community/Communication_channels).

## Audio et vidéo n°1

Dans cette tâche, nous vous demandons d'intégrer un fichier audio sur la page.

Pour compléter cette tâche&nbsp;:

1. Ajoutez le chemin vers le fichier audio dans un attribut approprié pour l'intégrer sur la page. L'audio s'appelle `audio.mp3` et est disponible à l'adresse `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/audio.mp3`.
2. Ajoutez un attribut pour que les navigateurs affichent certains contrôles par défaut.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("audio-1", "100%", 150)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___audio-1
<h1>Intégration audio de base</h1>

<audio></audio>
```

```css hidden live-sample___video-1 live-sample___audio-1 live-sample___video-1-finished live-sample___audio-1-finished
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

audio,
video {
  border: 1px solid black;
}
```

Le contenu mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("audio-1-finished", "100%", 180)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre code HTML final doit ressembler à ceci&nbsp;:

```html live-sample___audio-1-finished
<h1>Intégration audio de base</h1>

<audio
  controls
  src="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/audio.mp3"></audio>
```

</details>

## Audio et vidéo n°2

Dans cette tâche, nous vous demandons de marquer un lecteur vidéo un peu plus complexe, avec plusieurs sources, sous-titres et d'autres fonctionnalités.

Pour compléter cette tâche&nbsp;:

1. Ajoutez un attribut pour que les navigateurs affichent certains contrôles par défaut.
2. Ajoutez plusieurs sources, contenant les chemins vers les fichiers vidéo. Les fichiers s'appellent `video.mp4` et `video.webm`, et sont disponibles aux chemins suivants&nbsp;:
   1. `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.mp4`
   2. `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.webm`
3. Informez le navigateur à l'avance des formats vidéo vers lesquels les sources pointent, afin qu'il puisse faire un choix éclairé sur celui à télécharger en premier.
4. Donnez à la balise `<video>` une largeur et une hauteur égales à sa taille intrinsèque (320 par 240 pixels).
5. Mettez la vidéo en sourdine par défaut.
6. Affichez les pistes de texte contenues dans le dossier `media`, dans un fichier appelé `https://raw.githubusercontent.com/mdn/learning-area/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/subtitles_en.vtt`, lorsque la vidéo est en cours de lecture. Vous devez explicitement définir le type comme sous-titres et la langue des sous-titres en anglais.
7. Assurez-vous que les lecteurs peuvent identifier la langue des sous-titres lorsqu'ils utilisent les contrôles par défaut.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("video-1", "100%", 300)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___video-1
<h1>Intégration vidéo</h1>

<video></video>
```

Le contenu mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("video-1-finished", "100%", 380)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre code HTML final doit ressembler à ceci&nbsp;:

```html live-sample___video-1-finished
<h1>Intégration vidéo</h1>

<video controls width="320" height="240" muted>
  <source
    src="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.mp4"
    type="video/mp4" />
  <source
    src="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.webm"
    type="video/webm" />
  <track
    kind="subtitles"
    src="https://raw.githubusercontent.com/mdn/learning-area/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/subtitles_en.vtt"
    srclang="en"
    label="Anglais" />
</video>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content")}}
