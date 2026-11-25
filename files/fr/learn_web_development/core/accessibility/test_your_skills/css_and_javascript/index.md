---
title: "Testez vos compétences : l'accessibilité en CSS et JavaScript"
short-title: "Test : A11é CSS/JS"
slug: Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript
l10n:
  sourceCommit: 2bda943b59604eb44f5d759708845c5f56970635
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}

L'objectif de ce test de compétences est de vous aider à évaluer si vous avez compris notre article sur les [meilleures pratiques d'accessibilité en CSS et JavaScript](/fr/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript).

> [!NOTE]
> Pour obtenir de l'aide, consultez notre guide d'utilisation [Testez vos compétences](/fr/docs/Learn_web_development#testez_vos_compétences). Vous pouvez également nous contacter par l'un de nos [canaux de communication](/fr/docs/MDN/Community/Communication_channels).

## Accessibilité en CSS n°1

Dans le premier exercice, vous êtes confronté à une liste de liens. Cependant, leur accessibilité est assez mauvaise — il n'y a aucun moyen de savoir réellement qu'il s'agit de liens, ni de savoir sur lequel l'utilisateur·ice est concentré. Nous vous demandons de partir du principe que l'ensemble des règles associées au sélecteur `a` est fourni par un CMS, et qu'il vous est impossible de le modifier.

Pour accomplir cette tâche, créez de nouvelles règles pour que les liens apparaissent et se comportent comme des liens, et pour que l'utilisateur·ice puisse savoir sur quel lien il·elle est concentré·e dans la liste.

<!-- Code partagé entre les exemples -->

```css hidden live-sample___css-js-ally-1 live-sample___css-js-ally-2 live-sample___css-js-ally-3 live-sample___css-js-ally-1-finish live-sample___css-js-ally-2-finish
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
```

<!-- Code spécifique à exemple -->

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("css-js-ally-1", "100%", 200)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___css-js-ally-1 live-sample___css-js-ally-1-finish
<ul>
  <li><a href="">Animaux</a></li>
  <li><a href="">Ordinateurs</a></li>
  <li><a href="">Diversité et inclusion</a></li>
  <li><a href="">Alimentation</a></li>
  <li><a href="">Médecine</a></li>
  <li><a href="">Musique</a></li>
</ul>
```

```css live-sample___css-js-ally-1
a {
  text-decoration: none;
  color: #666666;
  outline: none;
}

/* Ne modifiez pas le code ci-dessus ! */

/* Ajoutez votre code ici */
```

Lorsque la tâche est terminée, les liens doivent ressembler à ceci&nbsp;:

{{EmbedLiveSample("css-js-ally-1-finish", "100%", 200)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre CSS final peut ressembler à ceci&nbsp;:

```css
/* ... */
/* Ne modifiez pas le code ci-dessus ! */

li a {
  text-decoration: underline;
  color: rgb(150 0 0);
}

li a:hover,
li a:focus {
  text-decoration: none;
  color: red;
}
```

```css hidden live-sample___css-js-ally-1-finish
a {
  text-decoration: none;
  color: #666666;
  outline: none;
}

li a {
  text-decoration: underline;
  color: rgb(150 0 0);
}

li a:hover,
li a:focus {
  text-decoration: none;
  color: red;
}
```

</details>

## Accessibilité en CSS n°2

Dans ce nouvel exercice, vous démarrez avec une petite portion de contenu — de simples titres et paragraphes. On constate des problèmes d'accessibilité avec les couleurs et la taille du texte. Nous vous demandons de les corriger.

Pour accomplir la tâche&nbsp;:

1. Réfléchissez aux problèmes rencontrés et aux directives qui définissent les valeurs acceptables pour les couleurs et la taille du texte.
2. Mettez à jour le CSS avec de nouvelles valeurs pour la couleur et la taille de la police afin de résoudre le problème.
3. Testez le code pour vous assurer que le problème est désormais résolu. Expliquez quels outils ou méthodes vous avez utilisés pour choisir les nouvelles valeurs et tester le code.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("css-js-ally-2", "100%", 240)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

<!-- spellchecker: disable -->

```html live-sample___css-js-ally-2 live-sample___css-js-ally-2-finish
<main>
  <h1>Je suis l'homme-œuf</h1>

  <p>
    Proue écoutille collier de vergue prévôt à la voile haubans esprits perche
    grand mât d'artimon vergue. Pinasse pierre à poncer grand mât d'artimon
    quart nid-de-pie petit verre grog vergue licou de chanvre ferler.
  </p>

  <h2>Ils sont l'homme-œuf</h2>

  <p>
    Frotter barque intrus chant de marin doublon tribord grog blackjack
    passerelle cartes marines.
  </p>

  <h2>Je suis le morse</h2>

  <p>
    Hublots garçon goélette vaurien danser la danse de la corde noceur bordée
    câble amener les couleurs.
  </p>
</main>
```

<!-- spellchecker: enable -->

```css live-sample___css-js-ally-2
/* Modifiez le CSS pour corriger les problèmes d'accessibilité */

main {
  padding: 20px;
  background-color: red;
}

h1,
h2,
p {
  color: #999999;
}

h1 {
  font-size: 2vw;
}

h2 {
  font-size: 1.5vw;
}

p {
  font-size: 1.2vw;
}
```

Le contenu mis à jour ressemble à ceci&nbsp;:

{{ EmbedLiveSample("css-js-ally-2-finish", "100%", 600) }}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

1. Les problèmes sont&nbsp;:
   - Le contraste des couleurs n'est pas acceptable selon les critères WCAG [1.4.3 (AA) <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) et [1.4.6 (AAA) <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#contrast-enhanced).
   - Le texte utilise des unités `vw`, ce qui signifie que vous ne pouvez pas zoomer sur le texte dans la plupart des navigateurs. Le critère [WCAG 1.4.4 (AA) <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#resize-text) indique que le texte doit être redimensionnable.
2. Pour corriger le code, vous devez
   - Choisissez des couleurs d'arrière-plan et de premier plan qui offrent un meilleur contraste.
   - Utilisez différentes unités pour définir la taille du texte (comme `rem` ou même `px`), ou implémentez même quelque chose qui utilise une combinaison de `vw` et d'autres unités si vous voulez que le texte soit redimensionnable tout en restant relatif à la taille de la zone d'affichage.
3. Pour tester&nbsp;:
   - Vous pouvez tester le contraste des couleurs avec un outil tel que [aXe <sup>(angl.)</sup>](https://www.deque.com/axe/), [l'inspecteur d'accessibilité de Firefox <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/) ou même un outil Web autonome simple comme [le vérificateur de contraste de WebAIM <sup>(angl.)</sup>](https://webaim.org/resources/contrastchecker/).
   - Pour redimensionner le texte, chargez l'exemple dans un navigateur et essayez de le redimensionner. Le redimensionnement du texte défini avec des unités `vw` fonctionne dans Safari, mais pas dans Firefox ni dans les navigateurs basés sur Chromium.

Pour le code mis à jour, voici un exemple qui permet de corriger le contraste des couleurs&nbsp;:

```css live-sample___css-js-ally-2-finish
main {
  padding: 20px;
  background-color: red;
}

h1,
h2,
p {
  color: black;
}
```

Et voici un exemple qui fonctionne pour définir la taille de police&nbsp;:

```css live-sample___css-js-ally-2-finish
h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}

p {
  font-size: 1.2rem;
}
```

Ou ceci, si vous souhaitez obtenir un texte redimensionnable dont la taille dépend de la zone d'affichage&nbsp;:

```css
h1 {
  font-size: calc(1.5vw + 1rem);
}

h2 {
  font-size: calc(1.2vw + 0.7rem);
}

p {
  font-size: calc(1vw + 0.4rem);
}
```

</details>

## Accessibilité JavaScript n°1

Dans notre tâche finale d'accessibilité, vous avez un peu de JavaScript à écrire. Nous avons une application qui présente une liste de noms d'animaux. Cliquer sur l'un des noms d'animaux fait apparaître une description supplémentaire de cet animal dans une boîte en dessous de la liste.

Mais ce n'est pas très accessible — dans son état actuel, vous ne pouvez l'utiliser qu'avec la souris. Nous aimerions que vous ajoutiez du HTML et du JavaScript pour le rendre accessible au clavier également.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("css-js-ally-3", "100%", 400)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___css-js-ally-3
<section class="preview">
  <div class="animal-list">
    <h1>Descriptions d'animaux</h1>

    <p>
      Cliquez sur les animaux de la liste suivante pour afficher la description
      de chaque animal.
    </p>

    <ul>
      <li
        data-description="Une espèce de chèvre sauvage des montagnes, avec de grandes cornes recourbées vers l'arrière, présente en Eurasie, en Afrique du Nord et en Afrique de l'Est.">
        Bouquetin
      </li>
      <li
        data-description="Un mammifère marin de taille moyenne, similaire à un lamantin, mais avec une queue semblable à celle d'un dauphin.">
        Dugong
      </li>
      <li
        data-description="Un marsupial rare, qui ressemble plutôt à un petit kangourou et mesure environ 50 à 75 centimètres.">
        Quokka
      </li>
    </ul>
  </div>

  <div class="animal-description">
    <h2></h2>

    <p></p>
  </div>
</section>
```

```css hidden live-sample___css-js-ally-3
p {
  color: purple;
  margin: 0.5em 0;
}

li {
  cursor: pointer;
}
```

```js live-sample___css-js-ally-3
const listItems = document.querySelectorAll("li");
const descHeading = document.querySelector(".animal-description h2");
const descPara = document.querySelector(".animal-description p");

listItems.forEach((item) => {
  item.addEventListener("mouseup", handleSelection);
});

function handleSelection(e) {
  const heading = e.target.textContent;
  const description = e.target.getAttribute("data-description");
  descHeading.textContent = heading;
  descPara.textContent = description;
}
```

Nous ne fournissons pas de contenu terminé pour cette tâche, car il ressemble au point de départ.

<details>
<summary>Cliquez ici pour afficher la solution</summary>

1. Pour commencer, vous devez ajouter `tabindex="0"` aux éléments de liste pour qu'ils soient sélectionnables à l'aide du clavier.
2. Ensuite, vous devez ajouter un autre gestionnaire d'évènements à l'intérieur de la boucle `forEach()` pour que le code réagisse aux touches enfoncées pendant que les éléments de liste sont sélectionnés. C'est probablement une bonne idée de le faire réagir à une touche spécifique, comme <kbd>Entrée</kbd>, auquel cas quelque chose comme ce qui suit est probablement acceptable&nbsp;:

```js
item.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    handleSelection(e);
  }
});
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}
