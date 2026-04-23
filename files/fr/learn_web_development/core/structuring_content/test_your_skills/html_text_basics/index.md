---
title: "Testez vos compétences : Les bases du texte en HTML"
short-title: "Test : Les bases du texte en HTML"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics
l10n:
  sourceCommit: 1cf3cb0fb22bf89c780fefe74c3db7f1b9e8ca09
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}

Le but de ce test de compétences est de vous aider à évaluer si vous comprenez comment baliser du texte en HTML pour lui donner une structure et du sens.

> [!NOTE]
> Pour obtenir de l'aide, lisez notre guide d'utilisation [Testez vos compétences](/fr/docs/Learn_web_development#testez_vos_compétences). Vous pouvez aussi nous contacter via l'un de nos [canaux de communication](/fr/docs/MDN/Community/Communication_channels).

## Les bases du texte 1

Dans cette tâche, nous vous demandons de baliser le HTML fourni en utilisant des éléments sémantiques de titre et de paragraphe.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("text-basics-1", "100%", 130)}}

Voici le code de départ&nbsp;:

```html-nolint live-sample___text-basics-1
Animaux en HTML simple

Voici le premier paragraphe de notre page. Il présente nos animaux.

Le lama

Notre lama est un grand amateur d'éléments de liste. Lorsqu'elle repère un groupe d'éléments sur une page web, elle les mange comme des bonbons, en se léchant les babines au passage.

L'anaconda

Le rusé anaconda aime se faufiler sur la page, se déplaçant rapidement grâce aux ancres pour surprendre ses proies.
```

<!-- Paramètres globaux -->

```css hidden live-sample___text-basics-1 live-sample___text-basics-1-finished live-sample___text-basics-2 live-sample___text-basics-2-finished live-sample___text-basics-3 live-sample___text-basics-3-finished live-sample___text-basics-4 live-sample___text-basics-4-finished
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
}

h2 {
  font-size: 1.6rem;
  margin: 0;
}

* {
  box-sizing: border-box;
}
```

<!-- Code d'exemple spécifique -->

```css hidden live-sample___text-basics-1 live-sample___text-basics-1-finished
h1,
h2 {
  color: purple;
}

p {
  color: gray;
  margin: 0.5em 0;
}
```

Le contenu mis à jour devrait ressembler à ceci&nbsp;:

{{EmbedLiveSample("text-basics-1-finished", "100%", 320)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final devrait ressembler à ceci&nbsp;:

```html live-sample___text-basics-1-finished
<h1>Animaux en HTML simple</h1>

<p>Voici le premier paragraphe de notre page. Il présente nos animaux.</p>

<h2>Le lama</h2>

<p>
  Notre lama est un grand amateur d'éléments de liste. Lorsqu'elle repère un
  groupe d'éléments sur une page web, elle les mange comme des bonbons, en se
  léchant les babines au passage.
</p>

<h2>L'anaconda</h2>

<p>
  Le rusé anaconda aime se faufiler sur la page, se déplaçant rapidement grâce
  aux ancres pour surprendre ses proies.
</p>
```

</details>

## Les bases du texte 2

Dans cette tâche, nous vous demandons de transformer la première liste non balisée en liste non ordonnée, et la seconde en liste ordonnée.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("text-basics-2", "100%", 220)}}

Voici le code de départ&nbsp;:

```html-nolint live-sample___text-basics-2
<h1>Regard sur les listes</h1>

<p>
Transformez la liste suivante de mes légumes préférés en liste non
ordonnée.
</p>

Concombre
Brocoli
Asperge
Poivron

<p>Transformez les instructions suivantes en liste ordonnée.</p>

Frappez d'abord à la porte
Lorsque l'on vous le demande, dites le mot magique
Attendez au moins 5 secondes
Tournez la poignée et poussez
```

```css hidden live-sample___text-basics-2 live-sample___text-basics-2-finished
p {
  margin: 0.5em 0;
}

ol {
  border: 2px solid purple;
}

ul {
  border: 2px solid orange;
}

ol,
ul {
  padding: 5px 20px;
  border-radius: 4px;
}
```

Le contenu mis à jour devrait ressembler à ceci&nbsp;:

{{EmbedLiveSample("text-basics-2-finished", "100%", 400)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final devrait ressembler à ceci&nbsp;:

```html live-sample___text-basics-2-finished
<h1>Regard sur les listes</h1>

<p>
  Transformez la liste suivante de mes légumes préférés en liste non ordonnée.
</p>

<ul>
  <li>Concombre</li>
  <li>Brocoli</li>
  <li>Asperge</li>
  <li>Poivron</li>
</ul>

<p>Transformez les instructions suivantes en liste ordonnée.</p>

<ol>
  <li>Frappez d'abord à la porte</li>
  <li>Lorsque l'on vous le demande, dites le mot magique</li>
  <li>Attendez au moins 5 secondes</li>
  <li>Tournez la poignée et poussez</li>
</ol>
```

</details>

## Les bases du texte 3

Dans cette tâche, nous vous demandons de transformer les animaux et leurs définitions en une liste de description.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("text-basics-3", "100%", 160)}}

Voici le code de départ&nbsp;:

```html-nolint live-sample___text-basics-3
<h1>Animaux en HTML avancés</h1>

Lama
Grand quadrupède laineux, oreilles pointues. Parfois montable, mais grognon et il crache beaucoup. Grand amateur d'éléments de liste.
Anaconda
Un très grand serpent constricteur ; se déplace rapidement grâce aux ancres pour surprendre ses proies.
Hippopotame
Sa description est sans fond.
```

```css hidden live-sample___text-basics-3 live-sample___text-basics-3-finished
h1 {
  color: purple;
}

dl {
  color: gray;
  margin: 0.5em 0;
}

dt {
  font-weight: bold;
  color: purple;
}
```

Le contenu mis à jour devrait ressembler à ceci&nbsp;:

{{EmbedLiveSample("text-basics-3-finished", "100%", 260)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final devrait ressembler à ceci&nbsp;:

```html live-sample___text-basics-3-finished
<h1>Animaux en HTML avancés</h1>

<dl>
  <dt>Lama</dt>
  <dd>
    Grand quadrupède laineux, oreilles pointues. Parfois montable, mais grognon
    et il crache beaucoup. Grand amateur d'éléments de liste.
  </dd>
  <dt>Anaconda</dt>
  <dd>
    Un très grand serpent constricteur ; se déplace rapidement grâce aux ancres
    pour surprendre ses proies.
  </dd>
  <dt>Hippopotame</dt>
  <dd>Sa description est sans fond.</dd>
</dl>
```

</details>

## Les bases du texte 4

Dans cette tâche, un paragraphe vous est fourni et votre objectif est d'utiliser des éléments en ligne pour baliser quelques mots appropriés avec une forte importance, et d'autres avec une emphase.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample('text-basics-4', "100%", 160)}}

Voici le code de départ&nbsp;:

```html live-sample___text-basics-4
<h1>Importance et emphase</h1>

<p>
  Il y a deux choses qui comptent pour moi — la musique et les amis. Un jour, je
  pourrai peut-être intéresser mes amis les uns aux autres, et à ma
  musique&nbsp;!
</p>
```

```css hidden live-sample___text-basics-4 live-sample___text-basics-4-finished
h1,
strong {
  color: purple;
}

p,
em {
  margin: 0.5em 0;
}

em {
  color: gray;
}
```

Le contenu mis à jour devrait ressembler à ceci&nbsp;:

{{EmbedLiveSample('text-basics-4-finished', "100%", 140)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final devrait ressembler à ceci&nbsp;:

```html live-sample___text-basics-4-finished
<h1>Importance et emphase</h1>

<p>
  Il y a <strong>deux</strong> choses qui comptent pour moi —
  <strong>la musique</strong> et <strong>les amis</strong>. Un jour, je
  <em>pourrai</em> peut-être intéresser mes amis les uns aux autres,
  <em>et</em> ma musique&nbsp;!
</p>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}
