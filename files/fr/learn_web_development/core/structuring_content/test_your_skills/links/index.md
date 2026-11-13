---
title: "Testez vos compétences : les liens"
short-title: "Test : Les liens"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Links
l10n:
  sourceCommit: 1cf3cb0fb22bf89c780fefe74c3db7f1b9e8ca09
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content")}}

L'objectif de ce test de compétences est d'évaluer si vous comprenez comment [mettre en place des liens hypertextes en HTML](/fr/docs/Learn_web_development/Core/Structuring_content/Creating_links).

> [!NOTE]
> Pour obtenir de l'aide, consultez notre guide d'utilisation [Testez vos compétences](/fr/docs/Learn_web_development#testez_vos_compétences). Vous pouvez également nous contacter par l'un de nos [canaux de communication](/fr/docs/MDN/Community/Communication_channels).

> [!NOTE]
> Certains des liens dans le code de départ de ces tâches ont l'attribut `target="_blank"` défini. Ainsi, lorsque vous cliquez dessus, ils essaient d'ouvrir la page liée dans un nouvel onglet plutôt que dans le même onglet. Ce n'est pas strictement une bonne pratique, mais nous l'avons fait ici pour que les pages ne s'ouvrent pas dans un `<iframe>` intégré de MDN Playground, ce qui efface votre code d'exemple dans le processus&nbsp;!

## Les liens n°1

Dans cette tâche, nous voulons que vous aidiez à remplir les liens sur notre page d'information sur les baleines.

Pour compléter la tâche, mettez à jour les liens comme suit&nbsp;:

1. Le premier lien doit pointer vers une page appelée `whales.html`, qui se trouve dans le même répertoire que la page actuelle.
2. Ajoutez-lui une info-bulle qui apparaît lorsque l'on survole le lien avec la souris, indiquant que la page contient des informations sur les baleines bleues et les cachalots.
3. Le deuxième lien doit être transformé en un lien cliquable qui ouvre un email dans l'application de messagerie par défaut de l'utilisateur·ice, avec le destinataire défini sur «&nbsp;whales\@example.com&nbsp;».
4. Points bonus si vous configurez également la ligne d'objet de l'email pour qu'elle soit automatiquement remplie avec «&nbsp;Question à propos des baleines&nbsp;».

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("links-1", "100%", 170)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___links-1
<h1>Information sur les baleines</h1>

<p>
  Pour plus d'informations sur nos activités de conservation et les baleines que
  nous étudions, consultez notre <a target="_blank">page sur les baleines</a>.
</p>

<p>
  Si vous souhaitez poser plus de questions à notre équipe, n'hésitez pas à
  <a target="_blank">nous envoyer un email</a>.
</p>
```

```css hidden live-sample___links-1 live-sample___links-1-finished
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

h1 {
  font-size: 2rem;
  margin: 0;
  color: purple;
}

p {
  color: gray;
  margin: 0.5em 0;
}

* {
  box-sizing: border-box;
}
```

Le contenu mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("links-1-finished", "100%", 170)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final doit ressembler à ceci&nbsp;:

```html-nolint live-sample___links-1-finished
<h1>Information sur les baleines</h1>

<p>
  Pour plus d'informations sur nos activités de conservation et les baleines que nous étudions,
  consultez notre <a target="_blank" href="whales.html" title="Inclut des informations sur les baleines bleues et les cachalots">
  page sur les baleines</a>.
</p>

<p>
  Si vous souhaitez poser plus de questions à notre équipe, n'hésitez pas à
  <a target="_blank" href="mailto:whales@example.com?subject=Question%20à%20propos%20des%20baleines">
  nous envoyer un email</a>.
</p>
```

</details>

## Les liens n°2

Dans cette tâche, nous voulons que vous remplissiez les quatre liens afin qu'ils pointent vers les endroits appropriés.

Pour compléter la tâche, mettez à jour les liens comme suit&nbsp;:

1. Le premier lien doit pointer vers une image appelée `blue-whale.jpg`, qui se trouve dans un répertoire appelé `blue` à l'intérieur du répertoire actuel.
2. Le deuxième lien doit pointer vers une image appelée `narwhal.jpg`, qui se trouve dans un répertoire appelé `narwhal`, situé un niveau au-dessus du répertoire actuel.
3. Le troisième lien doit pointer vers la recherche d'images Google en France. L'URL de base est `https://www.google.fr`, et la recherche d'images se trouve dans un sous-répertoire appelé `imghp`.
4. Le quatrième lien doit pointer vers le paragraphe situé tout en bas de la page actuelle. Il a un identifiant `bottom`.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("links-2", "100%", 200)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___links-2
<h1>Tests de chemin en liste</h1>

<ul>
  <li><a target="_blank">Lien vers l'image de la baleine bleue</a></li>
  <li><a target="_blank">Lien vers l'image du narval</a></li>
  <li><a target="_blank">Lien vers la recherche d'images Google</a></li>
  <li><a>Lien vers le paragraphe en bas de la page</a></li>
</ul>

<div></div>

<p id="bottom">Le bas de la page !</p>
```

```css hidden live-sample___links-2 live-sample___links-2-finished
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

h1 {
  font-size: 2rem;
  margin: 0;
  color: purple;
}

li {
  color: gray;
  margin: 0.5em 0;
}

div {
  height: 600px;
}
```

Le contenu mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("links-2-finished", "100%", 200)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final doit ressembler à ceci&nbsp;:

```html-nolint live-sample___links-2-finished
<h1>Tests de chemin en liste</h1>

<ul>
  <li><a target="_blank" href="blue/blue-whale.jpg">
    Lien vers l'image de la baleine bleue
  </a></li>
  <li><a target="_blank" href="../narwhal/narwhal.jpg">
    Lien vers l'image du narval
  </a></li>
  <li><a target="_blank" href="https://www.google.co.uk/imghp">
    Lien vers la recherche d'images Google
  </a></li>
  <li><a href="#bottom">
    Lien vers le paragraphe en bas de la page
  </a></li>
</ul>

<div></div>

<p id="bottom">Le bas de la page !</p>
```

</details>

## Les liens n°3

Les liens suivants pointent vers une page d'information sur les narvals, une adresse email de support et un fichier PDF de 4 Mo.

Pour compléter la tâche&nbsp;:

1. Prenez les paragraphes existants avec un texte de lien mal rédigé et réécrivez-les afin qu'ils aient un bon texte de lien.
2. Ajoutez un avertissement à tous les liens qui nécessitent un avertissement.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("links-3", "100%", 200)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___links-3
<p>
  Nous faisons beaucoup de travail avec les narvals. Pour en savoir plus sur ce
  travail,
  <a href="narwhals.html" target="_blank">cliquez ici</a>.
</p>

<p>
  Vous pouvez envoyer un e-mail à notre équipe de support si vous avez d'autres
  questions —
  <a href="mailto:whales@example.com">cliquez ici</a> pour le faire.
</p>

<p>
  Vous pouvez également
  <a href="factfile.pdf" target="_blank">cliquer ici</a> pour télécharger notre
  fiche d'information, qui contient beaucoup plus d'informations, y compris une
  FAQ.
</p>
```

```css hidden live-sample___links-3
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

p {
  color: gray;
  margin: 0.5em 0;
}

* {
  box-sizing: border-box;
}
```

Nous ne fournissons pas de contenu final pour cette tâche, car ça donne la solution.

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final doit ressembler à ceci&nbsp;:

```html-nolint
<p>
  Nous faisons beaucoup de travail avec les narvals. <a href="narwhals.html" target="_blank">En savoir plus sur ce travail</a>.
</p>

<p>
  Vous pouvez <a href="mailto:whales@example.com">envoyer un e-mail à notre équipe de support</a> si vous avez d'autres questions.
</p>

<p>
  Vous pouvez également <a href="factfile.pdf" target="_blank">télécharger notre fiche d'information</a> (PDF, 4 Mo), qui contient beaucoup plus d'informations, y compris une FAQ.
</p>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content")}}
