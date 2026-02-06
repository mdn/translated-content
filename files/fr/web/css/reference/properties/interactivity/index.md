---
title: interactivity
slug: Web/CSS/Reference/Properties/interactivity
l10n:
  sourceCommit: 4b6027efb86db472ca6c37390fe9402b16b2716c
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`interactivity`** définit si un élément et ses nœuds descendants sont définis comme étant [inertes](/fr/docs/Web/HTML/Reference/Global_attributes/inert).

## Syntaxe

```css
/* Valeurs avec un mot-clé */
interactivity: auto;
interactivity: inert;

/* Valeurs globales */
interactivity: inherit;
interactivity: initial;
interactivity: revert;
interactivity: revert-layer;
interactivity: unset;
```

### Valeurs

- `auto` {{Experimental_Inline}}
  - : Les éléments sélectionnés sont dans leur état par défaut concernant l'inertie. Cela signifie généralement qu'ils sont interactifs, mais ce n'est [pas toujours le cas](#inertie_par_défaut). Il s'agit de la valeur par défaut.

- `inert` {{Experimental_Inline}}
  - : Les éléments sélectionnés et leurs descendants sont inertes.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Description

La propriété `interactivity` permet de définir si un élément et ses descendants sont inertes. Consultez la page de référence de l'attribut HTML [`inert`](/fr/docs/Web/HTML/Reference/Global_attributes/inert) pour une description détaillée de l'état inerte.

Un cas d'utilisation typique de `interactivity: inert` concerne le contenu paginé, comme les carrousels, lorsque vous souhaitez que seuls le contenu et les contrôles de la page actuellement visible soient interactifs. Dans ces cas, le fait de sélectionner par inadvertance un lien ou un bouton hors écran pourrait nuire à l'expérience.

Si l'état inerte d'un élément est défini à la fois par HTML (l'attribut `inert` ou un réglage automatique du navigateur) et par CSS (la propriété `interactivity`) en même temps, le CSS n'aura aucun effet — il ne peut pas outrepasser l'inertie définie par HTML.

Par exemple, l'élément HTML suivant sera inerte&nbsp;:

```html
<button inert>Vous ne pouvez pas cliquer sur moi</button>
```

Définir `interactivity: auto` dessus n'aura aucun effet.

### Inertie par défaut

La plupart des éléments sont interactifs par défaut, mais ce n'est pas toujours le cas&nbsp;:

- Un ancêtre de l'élément peut être défini comme inerte, via la propriété `interactivity` ou l'attribut `inert`.
- Lorsqu'une boîte de dialogue modale {{HTMLElement("dialog")}} est affichée, le reste de la page est automatiquement défini comme inerte.

## Exemples

### Utilisation simple de `interactivity`

Dans cet exemple, nous avons deux éléments HTML {{HTMLElement("input")}}. Le second a `interactivity: inert` appliqué via une classe, il n'est donc pas sélectionnable ni modifiable dans les navigateurs compatibles.

```html live-sample___basic-interactivity
<p>
  <label>
    Ce champ de saisie est interactif&nbsp;:
    <input type="text" name="one" value="Modifiable" />
  </label>
</p>
<p>
  <label>
    Ce champ de saisie n'est pas interactif&nbsp;:
    <input type="text" name="two" value="Non modifiable" class="inert" />
  </label>
</p>
```

```css live-sample___basic-interactivity
.inert {
  interactivity: inert;
  background-color: lightpink;
}
```

#### Résultat

Le rendu est le suivant&nbsp;:

{{EmbedLiveSample("basic-interactivity", "100%", 100)}}

### Explorer les effets de l'inertie

Dans cet exemple, nous explorons les effets de la propriété `interactivity`.

#### HTML

Le balisage comporte deux éléments HTML {{HTMLElement("p")}}, chacun contenant un lien. Le second paragraphe possède aussi la classe `inert` et un enfant {{HTMLElement("span")}} avec [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) pour le rendre modifiable.

```html-nolint live-sample___inertness-effects
<p>
  Ce paragraphe n'est pas
  <a
    href="https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Global_attributes/inert"
    >inerte</a
  >. Vous devriez pouvoir sélectionner le contenu textuel, le rechercher avec les fonctions du navigateur, et sélectionner ou cliquer sur le lien. Un gestionnaire d'évènement <code>click</code> est défini sur le paragraphe et change la couleur de la bordure pendant une seconde lorsqu'il est cliqué n'importe où.
  <span contenteditable>Cette phrase a l'attribut <code>contenteditable</code>, elle est donc modifiable</span>.
</p>

<p class="inert">
  Ce paragraphe est
  <a
    href="https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Global_attributes/inert"
    >inerte</a
  >. Vous ne pourrez pas sélectionner le contenu textuel, le rechercher avec les fonctions du navigateur, sélectionner ou cliquer sur le lien, ou déclencher des évènements <code>click</code> dessus (la couleur de la bordure ne changera pas lors d'un clic).
  <span contenteditable
    >Cette phrase a l'attribut <code>contenteditable</code>, mais elle n'est pas modifiable car le paragraphe est inerte</span
  >.
</p>
```

#### CSS

Nous appliquons la propriété `interactivity` avec la valeur `inert` sur le second paragraphe, ce qui le rend inerte. Vous pouvez donc modifier le texte `contenteditable` dans le premier paragraphe, mais pas dans le second, et vous ne pourrez pas non plus rechercher, sélectionner ou interagir avec le lien dans le second paragraphe.

```css live-sample___inertness-effects
.inert {
  interactivity: inert;
}

[contenteditable] {
  outline: 1px dashed lightblue;
}

.borderChanged {
  border-color: orange;
}
```

```css hidden live-sample___inertness-effects
body {
  font: 1.2em / 1.5 system-ui;
}

p {
  border: 5px solid black;
  padding: 10px;
  width: 90%;
  margin: 20px auto;
}
```

#### JavaScript

Nous définissons un gestionnaire d'évènement sur chaque paragraphe qui ajoute une classe lors d'un clic, puis la retire après deux secondes.

```js live-sample___inertness-effects
const paras = document.querySelectorAll("p");

function tempBorderChange(e) {
  const targetPara = e.currentTarget;
  targetPara.classList.add("borderChanged");
  setTimeout(() => {
    targetPara.classList.remove("borderChanged");
  }, 2000);
}

for (para of paras) {
  para.addEventListener("click", tempBorderChange);
}
```

#### Résultat

{{EmbedLiveSample("inertness-effects", "100%", 380)}}

Remarquez que le second paragraphe est inerte&nbsp;; il ne se comporte donc pas comme le premier paragraphe. Par exemple, le lien ne peut pas être cliqué ou sélectionné, le texte ne peut pas être sélectionné ou recherché, le `<span>` avec `contenteditable` n'est pas modifiable, et les évènements `click` ne sont pas pris en compte.

### Rendre inertes les éléments hors écran à l'aide d'une chronologie de vue

Cet exemple montre un contenu paginé défilant horizontalement, chaque page étant alignée grâce à [l'alignement par défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap), et l'inertie contrôlée par une [animation pilotée par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations) utilisant une [chronologie de progression de vue](/fr/docs/Web/CSS/Reference/Properties/view-timeline-name). Le contenu affiché dans le {{Glossary("scroll container", "contenant de défilement")}} est interactif&nbsp;; il devient inerte lorsqu'il sort dans le contenu débordant.

#### HTML

Le HTML se compose d'un [titre](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements) de haut niveau et d'une [liste non ordonnée](/fr/docs/Web/HTML/Reference/Elements/ul) avec quatre [éléments de liste](/fr/docs/Web/HTML/Reference/Elements/li), chacun contenant le contenu d'une page distincte.

```html live-sample___offscreen-inert
<h1>Démo d'interactivité de pagination</h1>
<ul>
  <li>
    <h2>Page 1</h2>
    <p>Ceci est la première page du contenu.</p>
    <p><a href="#">Un lien de démonstration</a>.</p>
    <p><button>Appuyez sur moi</button></p>
  </li>
  <li>
    <h2>Page 2</h2>
    <p>Ceci est la deuxième page du contenu.</p>
    <p><a href="#">Un lien de démonstration</a>.</p>
    <p><button>Appuyez sur moi</button></p>
  </li>
  <li>
    <h2>Page 3</h2>
    <p>Ceci est la troisième page du contenu.</p>
    <p><a href="#">Un lien de démonstration</a>.</p>
    <p><button>Appuyez sur moi</button></p>
  </li>
  <li>
    <h2>Page 4</h2>
    <p>Ceci est la quatrième page du contenu.</p>
    <p><a href="#">Un lien de démonstration</a>.</p>
    <p><button>Appuyez sur moi</button></p>
  </li>
</ul>
```

#### CSS

Une {{CSSxRef("width")}} de `100vw` est appliquée à la liste non ordonnée pour qu'elle soit aussi large que la zone d'affichage. Nous ajoutons une {{CSSxRef("height")}} fixe, un peu de {{CSSxRef("padding")}}, et une valeur {{CSSxRef("overflow-x")}} de `scroll` pour permettre le défilement du contenu débordant. Les éléments enfants de la liste sont disposés horizontalement avec {{CSSxRef("display", "display: flex")}}. Ce conteneur flex reçoit une valeur {{CSSxRef("scroll-snap-type")}} de `x mandatory` pour en faire un [contenueur de défilement avec accrochage](/fr/docs/Glossary/Scroll_snap#conteneur_de_défilement_avec_accrochage). Le mot-clé `x` fait que les [cibles d'accrochage](/fr/docs/Glossary/Scroll_snap#cible_daccrochage) du conteneur sont accrochées horizontalement. Le mot-clé `mandatory` signifie que le conteneur s'accrochera toujours à une cible d'accrochage à la fin d'une action de défilement.

```css hidden live-sample___offscreen-inert
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Helvetica", "Arial", sans-serif;
}

h1 {
  text-align: center;
  margin: 0;
}

button {
  background-color: white;
}
```

```css live-sample___offscreen-inert
ul {
  width: 100vw;
  height: 250px;
  padding: 1vw;
  overflow-x: scroll;
  display: flex;
  gap: 1vw;
  scroll-snap-type: x mandatory;
}
```

Chaque élément de liste reçoit les styles suivants&nbsp;:

- Une valeur {{CSSxRef("flex")}} de `0 0 98vw`, forçant chaque élément à être aussi grand que le contenant de défilement moins le {{CSSxRef("gap")}} défini sur la liste (voir la déclaration `gap` dans la règle `ul` plus haut). Cela a aussi pour effet de centrer chaque page dans le contenant de défilement.
- Une valeur {{CSSxRef("scroll-snap-align")}} de `center`, pour que le contenant de défilement s'accroche au centre de chaque cible d'accrochage.
- Une valeur {{CSSxRef("view-timeline")}} de `--inner-change inline`, pour déclarer l'élément comme sujet de la chronologie de progression de vue `--inner-change` et faire progresser cette chronologie dans la direction en ligne à travers son contenant de défilement ancêtre.
- Une valeur {{CSSxRef("animation-timeline")}} identique à celle de {{CSSxRef("view-timeline-name")}}, comme défini dans l'abrégé `view-timeline`, ce qui signifie que la chronologie de progression de vue nommée sera utilisée pour contrôler la progression des animations appliquées à l'élément.
- {{CSSxRef("animation-name")}} et {{CSSxRef("animation-fill-mode")}} définissant l'animation appliquée à cet élément et son mode de remplissage. La valeur `both` est requise car vous souhaitez que l'état initial de l'animation s'applique à l'élément avant le début de l'animation, et que l'état final s'applique après la fin de l'animation. Si l'animation n'est pas persistée, la déclaration `interactivity: inert` appliquée via l'animation ne s'appliquera pas aux éléments de liste lorsqu'ils sont en dehors du contenant de défilement.

```css live-sample___offscreen-inert
li {
  list-style-type: none;
  background-color: #eeeeee;
  border: 1px solid #dddddd;
  padding: 20px;

  flex: 0 0 98vw;

  scroll-snap-align: center;

  view-timeline: --inner-change inline;
  animation-timeline: --inner-change;
  animation-name: inert-change;
  animation-fill-mode: both;
}
```

Enfin, les animations {{CSSxRef("@keyframes")}} sont définies. `interactivity: inert` est appliqué aux positions `entry 0%` et `exit 100%` de la chronologie de vue. Combiné à la valeur `animation-fill-mode: both`, cela signifie que les éléments de liste seront inertes avant le début et après la fin de la chronologie de vue, c'est-à-dire lorsqu'ils sont en dehors du contenant de défilement. Entre les positions `entry 1%` et `exit 99%`, `interactivity: auto` est appliqué aux éléments de liste, ce qui signifie qu'ils sont interactifs lorsqu'ils sont à l'intérieur du contenant de défilement.

```css live-sample___offscreen-inert
@keyframes inert-change {
  entry 0%,
  exit 100% {
    interactivity: inert;
  }

  entry 1%,
  exit 99% {
    interactivity: auto;
  }
}
```

Consultez la page de référence {{CSSxRef("animation-range")}} pour une explication des valeurs de position.

#### Résultat

Faites défiler la liste non ordonnée horizontalement pour voir l'effet de pagination — chaque page s'aligne dans la vue. Essayez de tabuler entre les liens et les boutons&nbsp;; vous constaterez que seuls ceux qui sont à l'écran sont interactifs et peuvent être tabulés.

{{EmbedLiveSample("offscreen-inert", "100%", 320)}}

## Problèmes d'accessibilité

Prendre en compte l'accessibilité avec attention lorsque vous rendez des éléments inertes. Par défaut, il n'existe aucun moyen visuel d'indiquer si un élément ou son sous-arbre est inerte. En tant que développeur·euse web, il est de votre responsabilité d'indiquer clairement les parties du contenu qui sont actives et celles qui sont inertes.

Lorsque vous fournissez des indices visuels et non visuels sur l'inertie du contenu, gardez aussi à l'esprit que la zone d'affichage visuelle peut ne contenir que des sections du contenu. Les utilisateur·ice·s peuvent avoir zoomé·e·s sur une petite section du contenu, ou ne pas pouvoir voir le contenu du tout. Le fait que les sections inertes ne soient pas évidemment inertes peut entraîner de la frustration et une mauvaise expérience utilisateur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML [`inert`](/fr/docs/Web/HTML/Reference/Global_attributes/inert)
- La propriété API {{DOMxRef("HTMLElement.inert")}}
