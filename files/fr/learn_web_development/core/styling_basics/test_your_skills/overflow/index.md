---
title: "Testez vos compétences : Débordement"
short-title: "Test : Débordement"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow
l10n:
  sourceCommit: a623d4459e2aa00d17dc0fd6b6bc44f56c589950
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics")}}

L'objectif de ce test de compétences est de vous aider à évaluer si vous comprenez [le débordement en CSS et comment le gérer](/fr/docs/Learn_web_development/Core/Styling_basics/Overflow).

> [!NOTE]
> Pour obtenir de l'aide, consultez notre guide d'utilisation [Testez vos compétences](/fr/docs/Learn_web_development#testez_vos_compétences). Vous pouvez également nous contacter par l'un de nos [canaux de communication](/fr/docs/MDN/Community/Communication_channels).

## Débordement n°1

Dans cette tâche, le contenu déborde de la boîte, car elle a une hauteur fixe.

Pour compléter la tâche&nbsp;:

1. Mettez à jour le CSS afin que la hauteur de la boîte soit maintenue et que les barres de défilement n'apparaissent que lorsqu'il y a suffisamment de texte pour provoquer un débordement.
2. Testez votre solution en supprimant du texte dans le HTML et en vérifiant qu'aucune barre de défilement n'apparaît lorsqu'il n'y a qu'une petite quantité de texte.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("overflow1-start", "", 450)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___overflow1-start live-sample___overflow1-finish
<div class="boite">
  <p>
    Les légumes, c'est un plus pour vous, c'est pourquoi je vous demande de
    mettre davantage de chou-rave, ciboulette, daikon, amarante, tatsoi,
    tomatillo, melon, haricots azuki, ail.
  </p>

  <p>
    Feuilles de betterave, maïs, soko, endive, courge à gumbo. Persil, échalote,
    courgette, tatsoi, pousses de pois, fèves, chou vert, pissenlit, gombo,
    wakamé, tomate. Pissenlit, concombre, arachide, pois, cacahuète, soko,
    courgette.
  </p>
</div>
```

```css live-sample___overflow1-start live-sample___overflow1-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

.boite {
  border: 5px solid black;
  padding: 1em;
  height: 200px;
  width: 300px;
}
```

Le style mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("overflow1-finish", "", 300)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Vous devez ajouter `overflow: auto` afin que la boîte n'affiche des barres de défilement que lorsque le contenu est trop grand&nbsp;:

```css live-sample___overflow1-finish
.boite {
  overflow: auto;
}
```

</details>

## Débordement n°2

Dans cette tâche, il y a une image dans la boîte qui est plus grande que les dimensions de la boîte, de sorte qu'elle déborde visiblement. Mettez à jour le CSS afin que toute image en dehors de la boîte soit masquée.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("overflow2-start", "", 260)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___overflow2-start live-sample___overflow2-finish
<div class="boite">
  <img
    alt="fleurs"
    src="https://mdn.github.io/shared-assets/images/examples/flowers.jpg" />
</div>
```

```css live-sample___overflow2-start live-sample___overflow2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
.boite {
  border: 5px solid black;
  height: 200px;
  width: 300px;
}
```

Le style mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("overflow2-finish", "", 260)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Vous devez ajouter `overflow: hidden` au sélecteur `.boite`&nbsp;:

```css live-sample___overflow2-finish
.boite {
  overflow: hidden;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics")}}
