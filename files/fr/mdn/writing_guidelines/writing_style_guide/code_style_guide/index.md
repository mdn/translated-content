---
title: Lignes directrices générales pour tous les exemples de code
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide
tags:
  - Code
  - General
  - Guide
  - Directives
  - MDN Meta
translation_of: MDN/Guidelines/Code_guidelines/General
original_slug: MDN/Guidelines/Code_guidelines/General
---
{{MDNSidebar}}

Les directives suivantes concernant les exemples de code s'appliquent à tout le code, qu'il s'agisse de HTML, de CSS, de JavaScript ou d'autre chose.

## Dans cet article

- [Indentation, espacement, taille](#indentation_spacing_size)

  - [Indentation](#indentation)
  - [Longueur des lignes de code](#code_line_length)
  - [Hauteur des blocs de code](#code_block_height)

- [Directives pour l'affichage des exemples](#guidelines_for_displaying_examples)

  - [Taille du rendu des exemples](#size_of_rendered_example)
  - [Utilisation d'images et d'autres médias](#use_of_images_and_other_media)
  - [Utilisation de la couleur](#use_of_color)
  - [Mettre en évidence les exemples de bonnes et de mauvaises pratiques](#highlight_good_and_bad_practice_examples)

- [Rédaction de sections syntaxiques sur les pages de référence](#writing_syntax_sections_on_reference_pages)

## Indentation, espacement, taille

### Indentation

Tout le code doit utiliser 2 espaces pour l'indentation, par exemple :

```html example-good
<div>
  <p>C'est mon paragraphe.</p>
</div>
```

```js example-good
function myFunc() {
  if(thingy) {
    console.log('Ouaip, ça a marché.');
  }
}
```

### Longueur des lignes de code

Les lignes de code ne doivent pas comporter plus de 80 caractères (64 pour les [exemples interactifs](https://github.com/mdn/interactive-examples)). Vous devez rompre les lignes de manière raisonnable pour des raisons de lisibilité, mais pas au détriment des bonnes pratiques.

Par exemple, ceci n'est pas génial :

```js example-bad
let tommyCat = 'Dit Tommy le chat en reculant pour évacuer tout corps étranger qui aurait pu se loger dans sa puissante gorge. Plus d'un gros rat de gouttière avait trouvé la mort en regardant à bout portant le canon caverneux de cette impressionnante machine à rôder.';
```

C'est mieux, mais un peu gênant :

```js
let tommyCat = 'Dit Tommy le chat en reculant pour évacuer tout corps étranger '
+ 'qui aurait pu se loger dans sa puissante gorge. Plus d’un gros rat de gouttière '
+ 'avait trouvé la mort en regardant à bout portant le canon caverneux de cette '
+ 'impressionnante machine à rôder.';
```

Une meilleure solution consiste à utiliser un _template_ :

```js example-good
let tommyCat = `Dit Tommy le chat en reculant pour évacuer tout corps étranger
  qui aurait pu se loger dans sa puissante gorge. Plus d'un gros rat de gouttière
  avait trouvé la mort en regardant à bout portant le canon caverneux de cette
  impressionnante machine à rôder.`;
```

### Hauteur des blocs de code

Les blocs de code doivent être aussi longs que nécessaire, mais pas plus. L'idéal est de viser quelque chose de court, comme 15 à 25 lignes. Si un bloc de code doit être beaucoup plus long, envisagez de ne montrer que l'extrait le plus utile et de créer un lien vers l'exemple complet sur un repo GitHub ou un CodePen, par exemple.

## Directives pour l'affichage des exemples

### Taille du rendu des exemples

Le volet de contenu principal de MDN a une largeur d'environ 700px sur un ordinateur de bureau. Les exemples intégrés à MDN doivent donc avoir une apparence correcte à cette largeur (définissez la largeur des exemples intégrés à 100%).

En ce qui concerne la hauteur, nous vous recommandons de maintenir l'exemple rendu à moins de 700px de hauteur si possible, pour une lisibilité maximale à l'écran.

Vous devriez également penser à rendre vos exemples plus ou moins adaptables, afin qu'ils soient également utiles sur les appareils mobiles.

### Utilisation d'images et d'autres médias

Parfois, vous voudrez inclure des images ou d'autres médias dans un exemple. Si vous le faites :

- Assurez-vous que leur licence vous permet de les utiliser. Essayez d'utiliser des médias dont la licence est très permissive, comme [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/), ou au moins compatible avec notre licence générale de contenu - [Licence Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA).
- Pour les images, faites-les passer par <https://tinypng.com> ou <https://imageoptim.com>, pour réduire le poids de la page des exemples.
- Pour le `SVG`, exécutez le code via [SVGOMG](https://jakearchibald.github.io/svgomg/), et assurez-vous que le fichier `SVG` comporte une ligne vide à la fin du fichier.
- Lorsque vous affichez des icônes sur une page (ex. via [`background-image`](/fr/docs/Web/CSS/background-image)), utilisez les icônes du référentiel [mdn-dinocons](https://github.com/mdn/mdn-dinocons), le cas échéant, et essayez de correspondre à leur style dans les autres cas.

### Utilisation de la couleur

Minuscule pour l'hexadécimal, peut utiliser des mots-clés pour les nuances et les couleurs primaires (ex. : black, white, red), utiliser des schémas plus complexes uniquement si nécessaire (ex. : pour inclure la transparence).

Préférez utiliser des mots-clés pour les couleurs primaires et autres couleurs "de base", par exemple :

```css example-good
color: black;
color: white;
color: red;
```

Utilisez rgb() pour des couleurs plus complexes (y compris les couleurs semi-transparentes) :

```css example-good
color: rgb(0, 0, 0, 0.5);
color: rgb(248, 242, 230);
```

Si vous devez utiliser des couleurs hexadécimales, utilisez des minuscules :

```css example-good
color: #058ed9;
color: #a39a92;
```

et utilisez la forme abrégée le cas échéant :

```css example-good
color: #ff0;
color: #fff;
```

Le fichier [sass/vars/\_color-palette.scss](https://github.com/mdn/mdn-minimalist/blob/main/sass/vars/_color-palette.scss) du dépôt [mdn-minimalist](https://github.com/mdn/mdn-minimalist) comporte un ensemble de couleurs utiles qui complètent le design général de MDN.

### Mettre en évidence les exemples de bonnes et de mauvaises pratiques

Comme vous le remarquerez en parcourant ces lignes directrices, les blocs de code censés être des exemples de bonnes pratiques sont marqués d'un fond en vert, et les blocs de code censés être des exemples de mauvaises pratiques sont marqués d'un fond en rouge.

Pour ce faire, vous devez d'abord utiliser les commandes de l'éditeur MDN pour placer votre bloc de code dans un bloc `<pre>` et lui donner la coloration syntaxique appropriée. La source du code ressemblera à quelque chose comme ceci :

```js
function myFunc() {
  console.log('Hello!');
};
</pre>
```

Pour en faire un bon exemple, vous insérez `example-good` juste avant le guillemet fermant de l'attribut `class` :

```html
<pre class="brush: js example-good">
  ...
```

Pour en faire un mauvais exemple, vous insérez `example-bad` juste avant le guillemet fermant de l'attribut `class` :

```html
<pre class="brush: js example-bad">
  ...
```

Nous aimerions vous encourager à les utiliser. Il n'est pas nécessaire de les utiliser partout, mais seulement lorsque vous signalez spécifiquement les bonnes et mauvaises pratiques dans votre code.

## Rédaction de sections syntaxiques sur les pages de référence

Les pages de référence MDN comprennent des sections Syntaxe qui indiquent sans ambiguïté quelle peut/doit être la syntaxe d'une fonctionnalité, par exemple une méthode JavaScript, une propriété CSS, un élément HTML, etc. Des directives pour les rédiger sont données sur le document [Sections syntaxiques](/fr/docs/MDN/Structures/Syntax_sections).
