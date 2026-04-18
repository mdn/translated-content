---
title: column-height
slug: Web/CSS/Reference/Properties/column-height
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`column-height`** définit la hauteur des colonnes dans une [mise en page multi-colonnes CSS](/fr/docs/Web/CSS/Guides/Multicol_layout).

La propriété abrégée {{CSSxRef("columns")}} peut être utilisée pour définir les valeurs des propriétés `column-height`, {{CSSxRef("column-count")}} et {{CSSxRef("column-width")}} dans une seule déclaration.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
column-height: auto;

/* Valeurs de type <length> */
column-height: 300px;
column-height: 25em;
column-height: 70vh;

/* Valeurs globales */
column-height: inherit;
column-height: initial;
column-height: revert;
column-height: revert-layer;
column-height: unset;
```

### Valeurs

- `auto`
  - : La valeur initiale. Si le conteneur de contenu a une hauteur définie, les colonnes de contenu s'étendront jusqu'à cette hauteur, débordant sur le côté si le contenu ne tient pas à l'intérieur du conteneur. Si le conteneur de contenu n'a pas de hauteur définie, le contenu sera réparti également entre les colonnes générées à l'intérieur du conteneur.
- {{CSSxRef("&lt;length&gt;")}}
  - : La hauteur des colonnes. Doit être non négative.

## Description

La propriété `column-height` définit la hauteur des colonnes dans une [mise en page multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout). Cela est utile pour contraindre la hauteur des colonnes pour la lisibilité lors de la définition de plusieurs colonnes à l'aide des propriétés {{CSSxRef("column-count")}} ou {{CSSxRef("column-width")}}.

Sans `column-height`, si la hauteur du contenu multi-colonnes dépasse la hauteur de la fenêtre, les lecteurs devront faire défiler jusqu'à la fin d'une colonne, puis revenir en haut de la colonne suivante. Une solution possible serait de définir une hauteur fixe sur le conteneur de contenu, cependant, les colonnes excédentaires déborderont alors sur le côté, et les lecteurs devront faire défiler horizontalement pour lire tout le contenu.

La propriété `column-height`, ainsi que {{CSSxRef("column-wrap")}}, permet de définir une hauteur spécifique pour les colonnes et de les envelopper sur une nouvelle rangée de colonnes lorsque le bord du conteneur est atteint.

La valeur par défaut de `column-wrap` est `auto`, ce qui se résout en `wrap` lorsque `column-height` est défini sur une valeur de type `<length>`&nbsp;; `wrap` permet aux colonnes à hauteur fixe de s'enrouler sur plusieurs rangées. Lorsque `column-height` est égal à `auto`, `column-wrap: auto` se résout en `nowrap`, permettant aux colonnes de déborder horizontalement si une hauteur de conteneur fixe est définie. En raison de ce comportement par défaut, il n'est généralement pas nécessaire de définir explicitement la propriété `column-wrap`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Cet exemple démontre une utilisation simple de la propriété `column-height` pour créer une mise en page multi-colonnes enveloppée.

#### HTML

Nous incluons un poème de Dr. Seuss en utilisant une liste ordonnée ({{HTMLElement("ol")}}) contenant 28 éléments {{HTMLElement("li")}}, suivi du nom de l'auteur dans un paragraphe ({{HTMLElement("p")}}).

```html
<ol>
  <li>Un poisson</li>
  <li>Deux poissons</li>
  <li>Poisson rouge</li>
  <li>Poisson bleu</li>
  ...
</ol>
<p>-- Dr. Seuss</p>
```

```html hidden live-sample___basic-example
<ol>
  <li>Un poisson</li>
  <li>Deux poissons</li>
  <li>Poisson rouge</li>
  <li>Poisson bleu</li>
  <li>Poisson noir</li>
  <li>Poisson bleu</li>
  <li>Poisson vieux</li>
  <li>Poisson nouveau.</li>
  <li>Celui-ci a une petite étoile.</li>
  <li>Celui-ci a une petite voiture.</li>
  <li>Dis&nbsp;! Quelle quantité</li>
  <li>De poissons il y a.</li>
  <li>Oui. Certains sont rouges. Et certains sont bleus.</li>
  <li>Certains sont vieux. Et certains sont nouveaux.</li>
  <li>Certains sont tristes.</li>
  <li>Et certains sont joyeux.</li>
  <li>Et certains sont très, très mauvais.</li>
  <li>Pourquoi sont-ils</li>
  <li>Tristes et joyeux et mauvais&nbsp;?</li>
  <li>Je ne sais pas.</li>
  <li>Allez demander à votre père.</li>
  <li>Certains sont minces.</li>
  <li>Et certains sont gros.</li>
  <li>Le gros a</li>
  <li>Un chapeau jaune.</li>
  <li>De là à ici, d'ici à là,</li>
  <li>Des choses amusantes</li>
  <li>Sont partout.</li>
</ol>
<p>--Dr. Seuss</p>
```

#### CSS

Nous définissons la liste ordonnée (`<ol>`) comme un conteneur multi-colonnes en définissant la propriété {{CSSxRef("column-width")}} à `150px`, ce qui signifie que le conteneur contiendra autant de colonnes que possible, chacune ayant au moins `150px` de large. La propriété {{CSSxRef("gap")}} de `2em` définit un écart horizontal entre les colonnes et un écart vertical entre les rangées de colonnes. Nous définissons ensuite la `column-height` à `2em`, ce qui fait que la valeur par défaut `auto` de la propriété `column-wrap` se résout en `wrap` pour créer des rangées de colonnes enveloppées.

```css live-sample___basic-example
ol {
  column-width: 150px;
  gap: 2em;
  column-height: 3em;
}
```

#### Résultat

{{EmbedLiveSample("basic-example", "100%", 300)}}

### Colonnes avec un défilement à accroche

Cet exemple combine une mise en page multi-colonnes enveloppée par [un défilement à accroche CSS](/fr/docs/Web/CSS/Guides/Scroll_snap), créant une expérience utilisateur·ice où chaque action de défilement accroche une nouvelle rangée de colonnes à l'intérieur de la hauteur complète de la fenêtre pour une lecture confortable.

#### HTML

Le HTML, qui contient plusieurs paragraphes de contenu provenant des pages d'accueil MDN HTML, CSS et JavaScript, a été masqué pour des raisons de concision.

```html hidden live-sample___scroll-snapped live-sample___column-playground
<h1>Résumés HTML, CSS et JavaScript</h1>
<p>
  <strong>HTML</strong> (HyperText Markup Language) est le bloc de construction
  le plus basique du Web. Il définit le sens et la structure du contenu web.
  D'autres technologies, en plus de HTML, sont généralement utilisées pour
  décrire l'apparence (CSS) ou le comportement (JavaScript) d'une page web.
</p>
<p>
  «&nbsp;L'Hypertexte&nbsp;» fait référence aux liens qui connectent les pages
  web entre elles, soit au sein d'un même site web, soit entre différents sites
  web. Les liens sont un aspect fondamental du Web. En téléchargeant du contenu
  sur Internet et en le liant à des pages créées par d'autres personnes, vous
  devenez un participant actif du World Wide Web.
</p>
<p>
  Le HTML utilise le «&nbsp;balisage&nbsp;» pour annoter le texte, les images et
  d'autres contenus afin de les afficher dans un navigateur Web. Le balisage
  HTML comprend des «&nbsp;éléments&nbsp;» spéciaux tels que
  <a href="/fr/docs/Web/HTML/Reference/Elements/head"
    ><code>&lt;head&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/title"
    ><code>&lt;title&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/body"
    ><code>&lt;body&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/header"
    ><code>&lt;header&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/footer"
    ><code>&lt;footer&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/article"
    ><code>&lt;article&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/section"
    ><code>&lt;section&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/p"> <code>&lt;p&gt;</code> </a>,
  <a href="/fr/docs/Web/HTML/Reference/Elements/div"><code>&lt;div&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/span"
    ><code>&lt;span&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/img"><code>&lt;img&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/aside"
    ><code>&lt;aside&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/audio"
    ><code>&lt;audio&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/canvas"
    ><code>&lt;canvas&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/datalist"
    ><code>&lt;datalist&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/details"
    ><code>&lt;details&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/embed"
    ><code>&lt;embed&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/nav"><code>&lt;nav&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/search"
    ><code>&lt;search&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/output"
    ><code>&lt;output&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/progress"
    ><code>&lt;progress&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/video"
    ><code>&lt;video&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/ul"><code>&lt;ul&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/ol"><code>&lt;ol&gt;</code></a
  >,
  <a href="/fr/docs/Web/HTML/Reference/Elements/li"><code>&lt;li&gt;</code></a>
  et bien d'autres.
</p>
<p>
  Un élément HTML est distingué du reste du texte dans un document par des
  «&nbsp;balises&nbsp;», qui consistent en le nom de l'élément entouré de
  <code>&lt;</code> et <code>&gt;</code>. Le nom d'un élément à l'intérieur
  d'une balise n'est pas sensible à la casse. C'est-à-dire qu'il peut être écrit
  en majuscules, en minuscules ou dans un mélange des deux. Par exemple, la
  balise <code>&lt;title&gt;</code> peut être écrite comme
  <code>&lt;Title&gt;</code>, <code>&lt;TITLE&gt;</code>, ou de toute autre
  manière. Cependant, la convention et la pratique recommandée est d'écrire les
  balises en minuscules.
</p>

<hr />

<p>
  <strong>Les feuilles de style en cascade</strong>
  (<strong>CSS</strong>) est un
  <a href="/fr/docs/Web/API/StyleSheet">langage de feuilles de style</a>
  utilisé pour décrire la présentation d'un document écrit en
  <a href="/fr/docs/Web/HTML">HTML</a> ou
  <a href="/fr/docs/Web/XML/Guides/XML_introduction">XML</a> (y compris les
  dialectes XML tels que <a href="/fr/docs/Web/SVG">SVG</a>,
  <a href="/fr/docs/Web/MathML">MathML</a> ou
  <a href="/fr/docs/Glossary/XHTML">XHTML</a>). CSS décrit comment les éléments
  doivent être rendus à l'écran, sur papier, à l'oral ou sur d'autres supports.
</p>
<p>
  CSS fait partie des langages de base du <strong>web ouvert</strong> et est
  standardisé à travers les navigateurs web selon
  <a
    href="https://www.w3.org/Style/CSS/#specs"
    class="external"
    target="_blank">
    les spécifications du W3C <sup>(angl.)</sup> </a
  >. Auparavant, le développement de différentes parties de la spécification CSS
  se faisait de manière synchrone, ce qui permettait la version des dernières
  recommandations. Vous avez peut-être entendu parler de CSS1, CSS2.1, ou même
  CSS3. Il n'y aura jamais de CSS3 ou de CSS4&nbsp;; plutôt, tout est maintenant
  simplement «&nbsp;CSS&nbsp;» avec des modules CSS individuels ayant des
  numéros de version.
</p>
<p>
  Après CSS 2.1, la portée de la spécification a considérablement augmenté et le
  progrès des différents modules CSS a commencé à différer tellement, qu'il est
  devenu plus efficace de
  <a
    href="https://www.w3.org/Style/CSS/current-work"
    class="external"
    target="_blank">
    développer et publier des recommandations séparément par module
    <sup>(angl.)</sup> </a
  >. Au lieu de versionner la spécification CSS, le W3C prend maintenant
  périodiquement un instantané de
  <a href="https://www.w3.org/TR/css/" class="external" target="_blank">
    l'état stable le plus récent de la spécification CSS
    <sup>(angl.)</sup>
  </a>
  et le progrès des modules individuels. Les modules CSS ont maintenant des
  numéros de version, ou des niveaux, tels que
  <a
    href="https://drafts.csswg.org/css-color-5/"
    class="external"
    target="_blank"
    >CSS Color Module Level 5 <sup>(angl.)</sup></a
  >.
</p>

<hr />

<p>
  <strong>JavaScript</strong> (<strong>JS</strong>) est un langage de
  programmation léger interprété (ou
  <a href="/fr/docs/Glossary/Just_In_Time_Compilation">compilé juste-à-temps</a
  >) avec des
  <a href="/fr/docs/Glossary/First-class_Function">
    fonctions de première classe </a
  >. Bien qu'il soit surtout connu comme le langage de script pour les pages
  Web,
  <a
    href="https://fr.wikipedia.org/wiki/JavaScript#Autres_utilisations"
    class="external"
    target="_blank"
    >de nombreux environnements non-navigateurs</a
  >
  l'utilisent également, tels que
  <a href="/fr/docs/Glossary/Node.js">Node.js</a>,
  <a href="https://couchdb.apache.org/" class="external" target="_blank"
    >Apache CouchDB</a
  >
  et
  <a
    href="https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/"
    class="external"
    target="_blank"
    >Adobe Acrobat</a
  >. JavaScript est un langage
  <a href="/fr/docs/Glossary/Prototype-based_programming">
    basé sur les prototypes </a
  >,
  <a href="/fr/docs/Glossary/Garbage_collection">
    avec gestion automatique de la mémoire </a
  >, <a href="/fr/docs/Glossary/Dynamic_typing">dynamique</a>, supportant
  plusieurs paradigmes tels que impératif, fonctionnel et orienté objet.
</p>
<p>
  Les capacités dynamiques de JavaScript incluent la construction d'objets à
  l'exécution, les listes de paramètres variables, les variables de fonction, la
  création de scripts dynamiques (avec
  <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/eval"
    ><code>eval</code></a
  >), l'introspection des objets (avec
  <a href="/fr/docs/Web/JavaScript/Reference/Statements/for...in"
    ><code>for...in</code></a
  >
  et
  <a
    href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#méthodes_statiques"
    >les <code>Object</code> utilitaires</a
  >), et la récupération du code source (les fonctions JavaScript stockent leur
  texte source et peuvent être récupérées avec
  <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/toString"
    ><code>toString()</code></a
  >).
</p>
<p>
  Cette section est dédiée au langage JavaScript lui-même, et non aux parties
  spécifiques aux pages Web ou à d'autres environnements hôtes. Pour des
  informations sur les <a href="/fr/docs/Glossary/API">API</a>
  spécifiques aux pages Web, veuillez consulter
  <a href="/fr/docs/Web/API">Web APIs</a> et
  <a href="/fr/docs/Glossary/DOM">DOM</a>.
</p>
<p>
  Les standards pour JavaScript sont les
  <a href="https://tc39.es/ecma262/" class="external" target="_blank"
    >ECMAScript Language Specification <sup>(angl.)</sup></a
  >
  (ECMA-262) et la
  <a href="https://tc39.es/ecma402/" class="external" target="_blank">
    ECMAScript Internationalization API specification <sup>(angl.)</sup>
  </a>
  (ECMA-402). Dès qu'un navigateur implémente une fonctionnalité, nous essayons
  de la documenter. Cela signifie que dans certains cas, des
  <a href="https://github.com/tc39/proposals" class="external" target="_blank">
    propositions pour de nouvelles fonctionnalités ECMAScript
    <sup>(angl.)</sup>
  </a>
  ont déjà été implémentées dans les navigateurs, documentation et exemples dans
  les articles MDN peuvent utiliser certaines de ces nouvelles fonctionnalités.
  La plupart du temps, cela se produit entre les
  <a href="https://tc39.es/process-document/" class="external" target="_blank"
    >étapes <sup>(angl.)</sup></a
  >
  3 et 4, et se produit généralement avant que la spécification ne soit
  officiellement publiée.
</p>
<p>
  Ne confondez pas JavaScript avec le
  <a
    href="https://fr.wikipedia.org/wiki/Java_(langage)"
    class="external"
    target="_blank"
    >langage de programmation Java</a
  >
  —
  <strong>JavaScript n'est <em>pas</em> «&nbsp;Java interprété&nbsp;»</strong>.
  Les deux termes «&nbsp;Java&nbsp;» et «&nbsp;JavaScript&nbsp;» sont des
  marques déposées ou des marques commerciales d'Oracle aux États-Unis et dans
  d'autres pays. Cependant, les deux langages de programmation ont une syntaxe,
  une sémantique et une utilisation très différentes.
</p>
<p>
  La documentation JavaScript des fonctionnalités de base du langage
  (principalement
  <a href="/fr/docs/Web/JavaScript/Reference/JavaScript_technologies_overview"
    >ECMAScript <sup>(angl.)</sup></a
  >, pour la plupart) inclut les éléments suivants&nbsp;:
</p>
```

#### CSS

Nous commençons par définir {{CSSxRef("column-width")}} sur l'élément HTML {{HTMLElement("body")}} pour définir la largeur préférée des colonnes. Un {{CSSxRef("gap")}} de `3em 2em` entraîne un espace de `3em` entre les lignes et un espace de `2em` entre les colonnes. Le {{CSSxRef("column-rule")}} ajoute une ligne au centre de l'espace entre les colonnes. La `column-height` de `95vh` rend les colonnes presque aussi hautes que la fenêtre d'affichage.

Nous définissons explicitement {{CSSxRef("column-wrap")}} sur `wrap` comme rappel du comportement de retour à la ligne appliqué. Nous aurions pu définir la valeur sur `auto` ou omettre complètement la propriété, car, par défaut, `column-wrap` se résout en `wrap` lorsque `column-height` est défini sur une valeur `<length>`.

```css live-sample___scroll-snapped
body {
  column-width: 150px;
  column-rule: 2px solid red;
  gap: 3em 2em;
  padding: 0 2em;
  column-height: 95vh;
  column-wrap: wrap;
}
```

Ensuite, nous définissons la propriété {{CSSxRef("column-span")}} de l'élément HTML `{{HTMLElement("Heading_Elements", "&lt;h1&gt;")}}` sur `all`, afin que le titre s'étende sur toutes les colonnes, et nous définissons la propriété {{CSSxRef("margin-top")}} du premier {{HTMLElement("p")}} sur `0` afin qu'il s'aligne avec le haut des colonnes.

```css live-sample___scroll-snapped live-sample___column-playground
h1 {
  column-span: all;
}

p:first-of-type {
  margin-top: 0;
}
```

Enfin, nous ajoutons le défilement par accroche en définissant {{CSSxRef("scroll-snap-type")}} sur `y mandatory` sur l'élément {{HTMLElement("html")}}, et {{CSSxRef("scroll-snap-align")}} sur `start` sur les pseudo-éléments {{CSSxRef("::column")}} qui représentent chaque colonne générée. Cela fait en sorte que le contenu s'accroche en haut d'une nouvelle colonne à chaque fois qu'il est défilé.

```css live-sample___scroll-snapped
html {
  scroll-snap-type: y mandatory;
}

::column {
  scroll-snap-align: start;
}
```

```css hidden live-sample___scroll-snapped live-sample___column-playground
* {
  box-sizing: border-box;
}

html {
  font-family: "Arial", sans-serif;
}

p {
  line-height: 1.5;
}

@supports not (column-height: 15em) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété 'column-height'.";
    background-color: wheat;
    position: fixed;
    inset: 40% 0;
    height: fit-content;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Résultat

{{EmbedLiveSample("scroll-snapped", "100%", 400)}}

Essayez de faire défiler le contenu. Remarquez comment chaque nouvelle ligne de colonnes remplit la fenêtre d'affichage, et comment le contenu s'accroche proprement en haut d'une nouvelle ligne à chaque défilement.

### Zone de test de `column-height` et `column-count` playground

Cet exemple s'appuie sur le précédent en incluant deux curseurs de plage qui vous permettent d'ajuster le nombre de colonnes et la hauteur des colonnes dans la mise en page multi-colonnes.

#### HTML et JavaScript

Le HTML est le même que dans l'exemple précédent, avec l'ajout d'un formulaire contenant deux éléments `{{HTMLElement("input/range", "&lt;input type=\"range\"&gt;")}}` qui mettent à jour les valeurs de `column-count` et `column-height` via JavaScript. Le HTML et le JavaScript sont masqués pour plus de concision.

```html hidden live-sample___column-playground
<form>
  <div>
    <label for="columns">
      <code>column-count <output id="columns-output">3</output></code>
    </label>
    <input type="range" min="3" max="6" value="3" id="columns" />
  </div>
  <div>
    <label for="column-height">
      <code>column-height <output id="column-height-output">20em</output></code>
    </label>
    <input type="range" min="10" max="30" value="20" id="column-height" />
  </div>
</form>
```

```js hidden live-sample___column-playground
const columnsRange = document.getElementById("columns");
const columnsOutput = document.getElementById("columns-output");
const columnHeightRange = document.getElementById("column-height");
const columnHeightOutput = document.getElementById("column-height-output");

columnsRange.addEventListener("input", () => {
  document.body.style.columnCount = columnsRange.value;
  columnsOutput.textContent = columnsRange.value;
});

columnHeightRange.addEventListener("input", () => {
  document.body.style.columnHeight = `${columnHeightRange.value}em`;
  columnHeightOutput.textContent = `${columnHeightRange.value}em`;
});
```

#### CSS

Nous définissons la {{CSSxRef("column-rule")}} et la {{CSSxRef("gap")}} avec les mêmes valeurs que dans l'exemple précédent. Nous ne définissons pas de `column-width`&nbsp;; à la place, nous créons une mise en page multi-colonnes en utilisant la propriété {{CSSxRef("column-count")}}, en réglant de manière interactive le nombre de colonnes et la hauteur des lignes de colonnes avec JavaScript. Le défilement par accroche n'est pas inclus dans cet exemple.

```css live-sample___column-playground
body {
  column-count: 3;
  column-height: 20em;
  column-rule: 2px solid red;
  gap: 3em 2em;
  padding: 0 2em;
}
```

```css hidden live-sample___column-playground
form {
  border: 1px solid black;
  background-color: white;
  padding: 10px;
  position: fixed;
  bottom: 1px;
  right: 1px;
}

form div {
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: space-between;
}
```

#### Résultat

{{EmbedLiveSample("column-playground", "100%", 400)}}

Ajustez le nombre de colonnes et la hauteur des colonnes pour voir l'effet de ces propriétés.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("column-count")}}
- La propriété {{CSSxRef("column-width")}}
- La propriété raccourcie {{CSSxRef("columns")}}
- La propriété {{CSSxRef("column-wrap")}}
- Le module [de mise en page multi-colonnes CSS](/fr/docs/Web/CSS/Guides/Multicol_layout)
