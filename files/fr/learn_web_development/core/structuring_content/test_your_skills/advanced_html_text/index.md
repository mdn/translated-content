---
title: "Testez vos compétences : Texte HTML avancé"
short-title: "Test : Texte HTML avancé"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text
l10n:
  sourceCommit: 1cf3cb0fb22bf89c780fefe74c3db7f1b9e8ca09
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}

L'objectif de ce test de compétences est de vous aider à évaluer si vous comprenez comment utiliser [les éléments HTML moins connus pour marquer des fonctionnalités sémantiques avancées](/fr/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features).

> [!NOTE]
> Pour obtenir de l'aide, consultez notre guide d'utilisation [Testez vos compétences](/fr/docs/Learn_web_development#testez_vos_compétences). Vous pouvez également nous contacter par l'un de nos [canaux de communication](/fr/docs/MDN/Community/Communication_channels).

## Texte avancé n°1

Dans cette tâche, nous vous demandons d'ajouter des fonctionnalités sémantiques au HTML fourni.

Pour compléter cette tâche&nbsp;:

1. Transformez le deuxième paragraphe en une citation de niveau bloc et indiquez sémantiquement que la citation provient de [l'accessibilité](/fr/docs/Learn_web_development/Core/Accessibility).
2. Marquez sémantiquement «&nbsp;HTML&nbsp;» et «&nbsp;CSS&nbsp;» comme des acronymes, en fournissant des expansions sous forme d'infobulles.
3. Utilisez les indices et exposants pour fournir la sémantique correcte pour les formules chimiques et les dates, et faites-les afficher correctement.
4. Associez sémantiquement les dates lisibles par machine aux dates dans le texte.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("advanced-text", "100%", 260)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___advanced-text
<h1>Texte sémantique avancé</h1>

<p>Commençons par une citation&nbsp;:</p>

<p>
  HTML, Hypertext Markup Language est par défaut accessible, si utilisé
  correctement.
</p>

<p>
  CSS peut également être utilisé pour rendre les pages web plus ou moins
  accessibles.
</p>

<p>Formules chimiques : H2O (Eau), C2H6O (Éthanol).</p>

<p>
  Dates : 25 Décembre 2019 (Jour de Noël), 2 Novembre 2019 (Día de los Muertos).
</p>
```

```css hidden live-sample___advanced-text live-sample___advanced-text-solution
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
  margin: 0.5em 0;
}

abbr,
time {
  color: green;
}
```

Le contenu mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("advanced-text-solution", "", 260)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre code HTML final doit ressembler à ceci&nbsp;:

```html live-sample___advanced-text-solution
<h1>Texte sémantique avancé</h1>

<p>Commençons par une citation&nbsp;:</p>

<blockquote cite="https://developer.mozilla.org/fr/docs/Learn/Accessibility">
  <p>
    <abbr title="HyperText Markup Language">HTML</abbr>, Hypertext Markup
    Language est par défaut accessible, si utilisé correctement.
  </p>
</blockquote>

<p>
  <abbr title="Cascading Style Sheets">CSS</abbr>, Cascading Style Sheets, peut
  également être utilisé pour rendre les pages web plus ou moins accessibles.
</p>

<p>
  Formules chimiques : H<sub>2</sub>O (Eau), C<sub>2</sub>H<sub>6</sub>O
  (Éthanol).
</p>

<p>
  Dates :
  <time datetime="2019-12-25">25 Décembre 2019</time> (Jour de Noël), (Christmas
  Day), <time datetime="2019-11-02">2 Novembre 2019</time> (Día de los Muertos).
</p>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}
