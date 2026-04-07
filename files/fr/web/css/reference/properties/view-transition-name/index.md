---
title: view-transition-name
slug: Web/CSS/Reference/Properties/view-transition-name
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`view-transition-name`** définit le nom de la [transition de vue](/fr/docs/Web/API/View_Transition_API) à laquelle les éléments sélectionnés participeront. Cela vous permet d'animer ces éléments séparément du reste de la page, qui utilise l'animation de fondu croisé par défaut pendant une transition de vue. Vous pouvez ensuite définir des styles d'animation personnalisés pour ces éléments.

## Syntaxe

```css
/* Exemples de valeurs <custom-ident> */
view-transition-name: header;
view-transition-name: figure-caption;

/* Valeurs avec un mot-clé */
view-transition-name: none;
view-transition-name: match-element;

/* Valeurs globales */
view-transition-name: inherit;
view-transition-name: initial;
view-transition-name: revert;
view-transition-name: revert-layer;
view-transition-name: unset;
```

### Valeurs

- {{CSSxRef("&lt;custom-ident&gt;")}}
  - : Un nom d'identification qui permet à l'élément sélectionné de participer à un instantané distinct de l'instantané racine. Le `<custom-ident>` ne peut pas être `auto`, `match-element`, `none` ou une valeur de [mot-clé CSS global](/fr/docs/Web/CSS/Reference/Values/Data_types).
- `match-element`
  - : Le navigateur attribue automatiquement un nom unique à l'élément sélectionné. Ce nom est utilisé pour capturer l'élément séparément de tous les autres éléments de la page. (Ce nom est interne et ne peut pas être lu depuis le DOM.)
- `none`
  - : L'élément sélectionné ne participera pas à un instantané distinct, sauf s'il a un élément parent avec un `view-transition-name` défini, auquel cas il sera capturé dans le cadre de cet élément.

## Description

Par défaut, lorsqu'une transition de vue est appliquée à une application web, toutes les modifications de l'interface utilisateur qui se produisent pendant cette transition sont capturées et animées ensemble. Il s'agit de l'instantané par défaut — ou `racine` — (voir [L'arborescence des pseudo-éléments de transition de vue](/fr/docs/Web/API/View_Transition_API/Using#larborecence_des_pseudos-éléments_de_transition_de_vue)). Par défaut, cette animation est un fondu croisé fluide, qui peut être vu en action dans la [démonstration SPA des transitions de vue <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/view-transitions/spa/).

Si vous souhaitez que certains éléments soient animés différemment de l'instantané `racine` pendant la transition de vue, vous pouvez le faire en leur attribuant un `view-transition-name` différent, par exemple&nbsp;:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Vous pouvez ensuite définir les animations que vous souhaitez pour les instantanés avant et après en utilisant les pseudo-éléments de transition de vue pertinents — {{CSSxRef("::view-transition-old()")}} et {{CSSxRef("::view-transition-new()")}}. Par exemple&nbsp;:

```css
::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

Si vous ne souhaitez pas qu'un élément soit capturé séparément, vous pouvez définir une valeur `view-transition-name` de `none`&nbsp;:

```css
.dont-animate-me {
  view-transition-name: none;
}
```

Le `<custom-ident>` de `view-transition-name` doit être unique pour chaque élément rendu participant à la transition de vue. Si deux éléments rendus ont le même `view-transition-name` en même temps, la promesse ({{JSxRef("Promise")}}) {{DOMxRef("ViewTransition.ready")}} sera rejetée et la transition sera ignorée.

### Définition automatique des valeurs de `view-transition-name`

Parfois, vous souhaiterez animer plusieurs éléments de l'interface utilisateur séparément dans une transition de vue. C'est souvent le cas lorsque vous avez une liste d'éléments sur une page et que vous souhaitez les réorganiser d'une certaine manière&nbsp;:

```html
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
  <li>Élément 3</li>
  <li>Élément 4</li>

  <!-- … -->

  <li>Élément 99</li>
</ul>
```

Attribuer un nom unique à chacun peut être fastidieux, surtout lorsque le nombre d'éléments augmente&nbsp;:

```css-nolint
li:nth-child(1) {
  view-transition-name: item1;
}
li:nth-child(2) {
  view-transition-name: item2;
}
li:nth-child(3) {
  view-transition-name: item3;
}
li:nth-child(4) {
  view-transition-name: item4;
}

/* ... */

li:nth-child(99) {
  view-transition-name: item99;
}
```

Pour contourner ce problème, vous pouvez utiliser la valeur `match-element`, qui permet au navigateur d'attribuer à chaque élément sélectionné un `view-transition-name` interne unique&nbsp;:

```css
li {
  view-transition-name: match-element;
}
```

Comme `match-element` attribue des valeurs automatiques de `view-transition-name` en fonction de l'identité des éléments, il ne peut être utilisé que pour les transitions de vue dans le même document. Les identifiants internes générés automatiquement ne sont pas transférables entre différents éléments ou documents.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple de `view-transition-name`

Cet exemple provient de la [page unique de démonstration des transitions de vue <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/view-transitions/spa/), qui est une galerie d'images de base. La [transition de vue simple en page unique](/fr/docs/Web/API/View_Transition_API/Using#basic_spa_view_transition) fournit une explication plus détaillée de la façon dont cette démonstration fonctionne.

La plupart des modifications de l'interface utilisateur sont animées en utilisant l'instantané de transition `racine`. Cependant, le `<figcaption>` se voit attribuer un `view-transition-name` de `figure-caption` pour permettre de l'animer différemment du reste de la page&nbsp;:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Le code suivant applique une animation personnalisée uniquement au `<figcaption>`&nbsp;:

```css
@keyframes grow-x {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes shrink-x {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

::view-transition-group(figure-caption) {
  height: auto;
  right: 0;
  left: auto;
  transform-origin: right center;
}

::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

Nous créons une animation CSS personnalisée et l'appliquons aux pseudo-éléments `::view-transition-old(figure-caption)` et `::view-transition-new(figure-caption)`. Nous appliquons également d'autres styles pour les maintenir tous les deux au même endroit et pour empêcher le style par défaut d'interférer avec nos animations personnalisées.

### Utiliser la valeur `match-element`

Cet exemple contient une liste de technologies — HTML, CSS, SVG et JS — qui sont affichées dans une barre latérale à côté d'une zone de contenu principale, qui est initialement vide. Cliquer sur le titre d'une technologie anime son contenu dans la zone de contenu adjacente qui affiche plus de détails.

#### HTML

L'élément HTML {{HTMLElement("main")}} contient une [liste non ordonnée](/fr/docs/Web/HTML/Reference/Elements/ul) et un élément HTML {{HTMLElement("article")}}. Les multiples éléments enfants {{HTMLElement("li")}} à l'intérieur de la liste contiennent chacun un élément HTML {{HTMLElement("a")}} à l'intérieur d'un [titre](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements).

```html
<main class="match-element-applied">
  <ul>
    <li>
      <h2><a href="#">HTML</a></h2>
      <h3>HyperText Markup Language</h3>
      <p>
        HyperText Markup Language (HTML) est le bloc de construction le plus
        basique du web. Il définit la signification et la structure du contenu
        web. HTML fournit les éléments fondamentaux pour structurer les
        documents et applications web.
      </p>
    </li>
    <li>
      <h2><a href="#">CSS</a></h2>
      <h3>Feuilles de style en cascade</h3>
      <p>
        Les feuilles de style en cascade (CSS) est un langage de feuille de
        style utilisé pour décrire la présentation d'un document écrit en HTML
        ou XML (y compris les dialectes XML tels que SVG, MathML ou XHTML). CSS
        décrit comment les éléments doivent être rendus à l'écran, sur papier,
        en parole ou sur d'autres supports.
      </p>
    </li>
    <li>
      <h2><a href="#">SVG</a></h2>
      <h3>Scalable Vector Graphics</h3>
      <p>
        Scalable Vector Graphics (SVG) est un langage de balisage basé sur XML
        pour décrire des graphiques vectoriels bidimensionnels.
      </p>
    </li>
    <li>
      <h2><a href="#">JS</a></h2>
      <h3>JavaScript</h3>
      <p>
        JavaScript (JS) est le langage de programmation natif du web. JavaScript
        est un langage de programmation léger, interprété (ou compilé
        juste-à-temps) avec des fonctions de première classe. Bien qu'il soit
        surtout connu comme le langage de script pour les pages web, de nombreux
        environnements non-navigateurs, tels que Node.js, l'utilisent également.
      </p>
    </li>
  </ul>
  <article></article>
</main>
```

```html hidden
<form>
  <label for="match-element-checkbox">
    Appliquer <code>match-element</code> aux éléments de la liste&nbsp;?
  </label>
  <input type="checkbox" id="match-element-checkbox" checked />
</form>
```

#### CSS

Nous utilisons les [boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout) pour disposer les `<li>` et le `<article>` côte à côte, et pour que les éléments de la liste partagent un espace égal dans la première colonne. La liste occupe 35 % de la largeur du conteneur, tandis que le `<article>` remplit l'espace horizontal restant.

```css hidden
/* Mise en forme générale et réinitialisation */
* {
  box-sizing: border-box;
  font-size: 0.9rem;
}

html {
  font-family: "Helvetica", "Arial", sans-serif;
  height: 100%;
}

body {
  margin: 0;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
li h2 {
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

li {
  overflow: hidden;
  container-type: inline-size;
}

li p {
  display: none;
}

li.active-item p {
  display: block;
}

li:nth-child(1) {
  background-color: #cbc0d3;
  border: 20px solid #cbc0d3;
}

li:nth-child(2) {
  background-color: #efd3d7;
  border: 20px solid #efd3d7;
}

li:nth-child(3) {
  background-color: #feeafa;
  border: 20px solid #feeafa;
}

li:nth-child(4) {
  background-color: #dee2ff;
  border: 20px solid #dee2ff;
}

/* Liens */

a {
  text-decoration: none;
  color: rgb(0 0 255 / 0.8);
}

a:hover,
a:focus {
  color: rgb(100 100 255);
}

/* Mise en forme du formulaire et des cases à cocher */
form {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  background-color: white;
  padding: 10px;
  border: 1px solid black;
}
```

```css
main {
  container-type: inline-size;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 2cqw;
  position: relative;
}

ul {
  width: 35cqw;
  display: flex;
  flex-direction: column;
  gap: 1cqw;
}

article {
  flex: 1;
}

li {
  flex: 1;
}
```

Nous définissons également une règle qui sélectionne les éléments avec la classe `active-item`. Lorsque cette classe est appliquée à un élément, la règle fait en sorte qu'il soit positionné exactement au-dessus de l'élément `<article>`. Cette classe sera appliquée aux éléments de la liste par JavaScript lorsque leurs liens seront cliqués, ce qui déclenchera une transition de vue.

```css
.active-item {
  position: absolute;
  z-index: 1;
  translate: 37cqw;
  width: calc(100% - 37cqw);
  height: 100%;
}
```

Par défaut, tous les éléments d'une transition de vue sont animés ensemble dans un fondu croisé unique. Dans cet exemple, cependant, nous ne voulons pas cela — nous voulons que chaque élément de la liste ait sa propre animation de mouvement. Nous pouvons y parvenir en appliquant `view-transition-name: match-element` à chaque élément de la liste&nbsp;:

```css
.match-element-applied li {
  view-transition-name: match-element;
}
```

La classe `match-element-applied` est appliquée à l'élément `<main>` par défaut, ce qui explique pourquoi la case à cocher dans le cadre Résultat est initialement sélectionnée. Si vous la décochez, la classe est supprimée et l'animation de fondu croisé par défaut entre en vigueur à la place. Vous pouvez basculer la case à cocher pour comparer l'animation par défaut avec celle appliquée lorsque `view-transition-name: match-element` est utilisé.

Ensuite, nous personnalisons l'animation en utilisant le pseudo-élément {{CSSxRef("::view-transition-group()")}} pour appliquer une {{CSSxRef("animation-duration")}} à tous les groupes de transition de vue (indiqués par l'identifiant `*`) et donner à tous les instantanés anciens et nouveaux une {{CSSxRef("height")}} de `100%`. Cela permet de contourner les différences de rapports d'aspect entre les anciens et les nouveaux instantanés et rend les animations plus fluides&nbsp;:

```css
::view-transition-group(*) {
  animation-duration: 0.5s;
}

html::view-transition-old(*),
html::view-transition-new(*) {
  height: 100%;
}
```

#### JavaScript

Dans cet exemple, la classe `active-item` est appliquée aux éléments de la liste lorsque leurs liens sont cliqués ; cela est réalisé via la fonction `updateActiveItem()`&nbsp;:

```js
const mainElem = document.querySelector("main");
let prevElem;
let checkboxElem = document.querySelector("input");

// Code de transition de vue
function updateActiveItem(event) {
  // Obtenez l'élément de la liste qui contient le lien cliqué
  const clickedElem = event.target.parentElement.parentElement;

  // Définir la classe active-item sur l'élément de la liste
  clickedElem.className = "active-item";

  // Garder une trace de l'élément précédent qui a été cliqué, le cas échéant.
  // Supprimer la classe active-item de l'élément précédent afin qu'un seul
  // élément de la liste soit placé au-dessus de <article> à la fois
  if (prevElem === clickedElem) {
    prevElem.className = "";
    prevElem = undefined;
  } else if (prevElem) {
    prevElem.className = "";
    prevElem = clickedElem;
  } else {
    prevElem = clickedElem;
  }
}

mainElem.addEventListener("click", (event) => {
  event.preventDefault(); // Empêcher l'iframe de défiler lorsqu'on clique
  // Ne rien faire sauf si un lien est cliqué à l'intérieur de l'élément <main>
  if (event.target.tagName !== "A") {
    return;
  }

  // Exécuter updateActiveItem() seul si les transitions de vue ne sont pas prises en charge
  if (!document.startViewTransition) {
    updateActiveItem(event);
  } else {
    // Exécuter updateActiveItem() avec startViewTransition()
    const transition = document.startViewTransition(() =>
      updateActiveItem(event),
    );
  }
});

// Basculer la classe sur <main> pour contrôler si match-element est appliqué ou non

checkboxElem.addEventListener("change", () => {
  mainElem.classList.toggle("match-element-applied");
});
```

Exécuter la fonction `updateActiveItem()` avec la fonction `startViewTransition()` anime l'affichage des détails de la technologie de manière fluide.

#### Résultat

Choisissez un titre de technologie dans la barre latérale et remarquez l'effet d'animation de son contenu dans la zone de contenu principale.

Il y a également une case à cocher, qui est sélectionnée par défaut, donc `view-transition-name: match-element` est appliqué. Décochez la case et cliquez à nouveau sur un titre pour voir comment la transition de vue fonctionne sans `view-transition-name: match-element`.

{{EmbedLiveSample("Utiliser la valeur `match-element`", "", 400)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("view-transition-class")}}
- Le pseudo-élément {{CSSxRef("::view-transition-group()")}}
- Le pseudo-élément {{CSSxRef("::view-transition-old()")}}
- Le pseudo-élément {{CSSxRef("::view-transition-new()")}}
- [L'API View Transition](/fr/docs/Web/API/View_Transition_API)
- [Transitions fluides avec l'API de transition de vue <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/view-transitions/)
