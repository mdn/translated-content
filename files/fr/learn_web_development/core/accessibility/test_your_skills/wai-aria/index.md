---
title: "Testez vos compétences : WAI-ARIA"
short-title: "Test : WAI-ARIA"
slug: Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA
l10n:
  sourceCommit: bfead5c281d92a213f0191746fd98a6bdc4dc457
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}

L'objectif de ce test de compétences est de vous aider à évaluer si vous comprenez notre article [Les bases de WAI-ARIA](/fr/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics).

> [!NOTE]
> Pour obtenir de l'aide, consultez notre guide d'utilisation [Testez vos compétences](/fr/docs/Learn_web_development#testez_vos_compétences). Vous pouvez aussi nous contacter par l'un de nos [canaux de communication](/fr/docs/MDN/Community/Communication_channels).

## WAI-ARIA n°1

Notre première tâche ARIA comprend une section de balisage non sémantique, qui représente visuellement une liste. Si vous ne pouvez pas modifier les éléments utilisés, comment permettre aux personnes qui utilisent un lecteur d'écran de comprendre de quoi il s'agit&nbsp;?

Pour terminer la tâche, ajoutez des sémantiques WAI-ARIA pour que les lecteurs d'écran reconnaissent les éléments `<div>` comme une liste non ordonnée.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("aria-1", "100%", 250)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

<!-- Code partagé entre les exemples -->

```css hidden live-sample___aria-1 live-sample___aria-2 live-sample___aria-3
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

<!-- Code spécifique à l'exemple -->

```html live-sample___aria-1
<p>Mes animaux préférés :</p>

<div>
  <div>Cochon</div>
  <div>Gazelle</div>
  <div>Lama</div>
  <div>Orignal majestueux</div>
  <div>Hérisson</div>
</div>
```

```css live-sample___aria-1
div > div {
  padding-left: 20px;
  position: relative;
}

div > div::before {
  content: " ";
  width: 8px;
  height: 8px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 8px;
}
```

Nous ne fournissons pas de contenu final pour cette tâche, car il semble identique au point de départ.

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final doit ressembler à quelque chose comme ceci&nbsp;:

```html
<p>Mes animaux préférés :</p>

<div role="list">
  <div role="listitem">Cochon</div>
  <div role="listitem">Gazelle</div>
  <div role="listitem">Lama</div>
  <div role="listitem">Orignal majestueux</div>
  <div role="listitem">Hérisson</div>
</div>
```

</details>

## WAI-ARIA n°2

Dans notre deuxième tâche WAI-ARIA, nous présentons un formulaire de recherche de base, et nous voulons que vous ajoutiez quelques fonctionnalités WAI-ARIA pour améliorer son accessibilité.

Pour terminer la tâche&nbsp;:

1. Ajoutez un attribut pour permettre au formulaire de recherche d'être identifié comme un point de repère distinct sur la page par les lecteurs d'écran, afin de le rendre facilement trouvable.
2. Donnez à l'entrée de recherche un label approprié, sans ajouter explicitement de texte visible dans le DOM.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("aria-2", "100%", 100)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___aria-2
<form>
  <input type="search" name="search" />
</form>
```

```js hidden live-sample___aria-2
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
```

Nous ne fournissons pas de contenu final pour cette tâche, car il semble identique au point de départ.

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final doit ressembler à quelque chose comme ceci&nbsp;:

```html
<form role="search">
  <input
    type="search"
    name="search"
    aria-label="Recherchez votre contenu préféré sur notre site" />
</form>
```

</details>

## WAI-ARIA n°3

Pour cette tâche finale WAI-ARIA, nous revenons à un exemple que nous avons déjà vu dans le [test de compétences CSS et JavaScript](/fr/docs/Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript).
Comme auparavant, nous avons une application qui présente une liste de noms d'animaux. Cliquer sur l'un des noms d'animaux fait apparaître une description supplémentaire de cet animal dans une boîte sous la liste. Ici, nous commençons avec une version accessible à la souris et au clavier.

Le problème que nous avons maintenant est que lorsque le DOM change pour afficher une nouvelle description, les lecteurs d'écran ne peuvent pas voir ce qui a changé. Pouvez-vous le mettre à jour afin que les changements de description soient annoncés par le lecteur d'écran&nbsp;?

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("aria-3", "100%", 400)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___aria-3
<section class="preview">
  <div class="animal-list">
    <h1>Descriptions d'animaux</h1>

    <p>
      Cliquez sur les noms d'animaux de la liste suivante pour afficher une
      description de l'animal.
    </p>

    <ul>
      <li
        tabindex="0"
        data-description="Un type de chèvre sauvage des montagnes, avec de grandes cornes recourbées vers l'arrière, que l'on trouve en Eurasie, en Afrique du Nord, et en Afrique de l'Est.">
        Bouquetin
      </li>
      <li
        tabindex="0"
        data-description="Un mammifère marin de taille moyenne, semblable à un lamantin, mais avec une queue semblable à celle d'un dauphin.">
        Dugong
      </li>
      <li
        tabindex="0"
        data-description="Un marsupial rare, qui ressemble plutôt à un petit kangourou, mesurant environ 50 à 75 centimètres.">
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

```css hidden live-sample___aria-3
p {
  color: purple;
  margin: 0.5em 0;
}

* {
  box-sizing: border-box;
}

li {
  cursor: pointer;
}
```

```js hidden live-sample___aria-3
const listItems = document.querySelectorAll("li");
const descHeading = document.querySelector(".animal-description h2");
const descPara = document.querySelector(".animal-description p");

listItems.forEach((item) => {
  item.addEventListener("mouseup", handleSelection);
  item.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      handleSelection(e);
    }
  });
});

function handleSelection(e) {
  const heading = e.target.textContent;
  const description = e.target.getAttribute("data-description");
  descHeading.textContent = heading;
  descPara.textContent = description;
}
```

Nous ne fournissons pas de contenu final pour cette tâche, car il ressemble au point de départ.

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Il existe deux façons de résoudre le problème que présente cette tâche&nbsp;:

- Ajouter un attribut `aria-live=""` à l'élément `<div>` de description de l'animal pour en faire une région dynamique, de sorte que lorsque son contenu change, le lecteur d'écran lise le contenu mis à jour. La meilleure valeur est probablement `assertive`, qui fait lire au lecteur d'écran le contenu mis à jour dès qu'il change. `polite` signifie que le lecteur d'écran attend que les autres descriptions se terminent avant de commencer à lire le contenu modifié.
- Ajouter un attribut `role="alert"` à l'élément `<div>` de description de l'animal, pour que cet élément ait la sémantique d'une boîte d'alerte. Cela a le même effet sur le lecteur d'écran que définir `aria-live="assertive"` sur cet élément.

</details>

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}
