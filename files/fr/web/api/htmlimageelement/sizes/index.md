---
title: "HTMLImageElement : propriété sizes"
short-title: sizes
slug: Web/API/HTMLImageElement/sizes
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("HTML DOM")}}

La propriété **`sizes`** de l'interface {{domxref("HTMLImageElement")}} permet de définir la largeur de présentation de l'[image](/fr/docs/Web/HTML/Reference/Elements/img) pour chaque condition média d'une liste. Cela permet de sélectionner automatiquement différentes images — même de différentes orientations ou proportions — lorsque l'état du document change pour correspondre à différentes conditions média.

Chaque condition est définie en utilisant le même format conditionnel que celui des [requêtes média](/fr/docs/Web/CSS/Guides/Media_queries).

## Valeur

Une chaîne de caractères contenant une liste, séparée par des virgules, de descripteurs de taille source suivis d'une taille de repli optionnelle. Chaque descripteur de taille source est composé d'une condition média, puis d'au moins un caractère d'espacement, puis de la valeur de taille source à utiliser pour l'image lorsque la condition média est vraie.
Vous pouvez utiliser la valeur `auto` pour remplacer toute la liste des tailles ou la première entrée de la liste.
Pour plus d'informations sur la syntaxe de l'attribut `sizes`, voir [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img#sizes).

## Exemples

### Sélection d'une image adaptée à la largeur de la fenêtre

Dans cet exemple, une mise en page de type blog est créée, affichant du texte et une image pour laquelle trois points de taille sont définis, selon la largeur de la fenêtre. Trois versions de l'image sont également disponibles, avec leurs largeurs indiquées. Le navigateur utilise toutes ces informations et sélectionne l'image et la largeur qui correspondent le mieux aux valeurs définies.

La façon dont les images sont utilisées peut dépendre du navigateur et de la densité de pixels de l'écran de l'utilisateur·ice.

Des boutons en bas de l'exemple permettent de modifier légèrement la propriété `sizes`, en alternant la plus grande des trois largeurs de l'image entre 40em et 50em.

#### HTML

```html
<article>
  <h1>An amazing headline</h1>
  <div class="test"></div>
  <p>
    This is even more amazing content text. It's really spectacular. And
    fascinating. Oh, it's also clever and witty. Award-winning stuff, I'm sure.
  </p>
  <img
    src="new-york-skyline-wide.jpg"
    srcset="
      new-york-skyline-wide.jpg 3724w,
      new-york-skyline-4by3.jpg 1961w,
      new-york-skyline-tall.jpg 1060w
    "
    sizes="(50em <= width <= 60em) 50em,
              (30em <= width < 50em) 30em,
              (width < 30em) 20em"
    alt="The New York City skyline on a beautiful day, with the One World Trade Center building in the middle." />
  <p>
    Then there's even more amazing stuff to say down here. Can you believe it? I
    sure can't.
  </p>

  <button id="break40">Last Width: 40em</button>
  <button id="break50">Last Width: 50em</button>
</article>
```

#### CSS

```css
article {
  margin: 1em;
  max-width: 60em;
  min-width: 20em;
  border: 4em solid #880e4f;
  border-radius: 7em;
  padding: 1.5em;
  font:
    16px "Open Sans",
    Verdana,
    Arial,
    Helvetica,
    sans-serif;
}

article img {
  display: block;
  max-width: 100%;
  border: 1px solid #888888;
  box-shadow: 0 0.5em 0.3em #888888;
  margin-bottom: 1.25em;
}
```

#### JavaScript

Le code JavaScript gère les deux boutons qui permettent d'alterner la troisième option de largeur entre 40em et 50em&nbsp;; cela se fait en gérant l'événement {{domxref("Element.click_event", "click")}} et en utilisant la méthode JavaScript {{jsxref("String.replace", "replace()")}} pour remplacer la partie concernée de la chaîne `sizes`.

```js
const image = document.querySelector("article img");
const break40 = document.getElementById("break40");
const break50 = document.getElementById("break50");

break40.addEventListener(
  "click",
  () => (image.sizes = image.sizes.replace(/50em,/, "40em,")),
);

break50.addEventListener(
  "click",
  () => (image.sizes = image.sizes.replace(/40em,/, "50em,")),
);
```

#### Résultat

{{EmbedLiveSample("sélection_dune_image_adaptée_à_la_largeur_de_la_fenêtre", "", 1050)}}

La page est mieux {{LiveSampleLink("sélection_dune_image_adaptée_à_la_largeur_de_la_fenêtre", "affichée dans sa propre fenêtre")}}, afin de pouvoir ajuster pleinement les tailles.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Requêtes média](/fr/docs/Web/CSS/Guides/Media_queries)
- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- [Images HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Images réactives](/fr/docs/Web/HTML/Guides/Responsive_images)
- [Utiliser les attributs `srcset` et `sizes`](/fr/docs/Web/HTML/Reference/Elements/img#using_the_srcset_and_sizes_attributes)
