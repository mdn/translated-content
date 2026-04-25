---
title: Propriété CSS `column-wrap`
short-title: column-wrap
slug: Web/CSS/Reference/Properties/column-wrap
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`column-wrap`** définit le comportement de retour à la ligne des colonnes débordantes dans une [mise en page multi-colonnes CSS](/fr/docs/Web/CSS/Guides/Multicol_layout).

## Syntaxe

```css
/* Valeurs avec un mot-clé */
column-wrap: auto;
column-wrap: nowrap;
column-wrap: wrap;

/* Valeurs globales */
column-wrap: inherit;
column-wrap: initial;
column-wrap: revert;
column-wrap: revert-layer;
column-wrap: unset;
```

### Valeurs

- `auto`
  - : La valeur initiale. Si la propriété {{CSSxRef("column-height")}} du conteneur de contenu est définie sur une valeur de type {{CSSxRef("&lt;length&gt;")}}, `auto` se résout en `wrap`, sinon elle se résout en `nowrap`.
- `nowrap`
  - : Les colonnes débordantes dépassent dans la direction en ligne.
- `wrap`
  - : Les colonnes débordantes sont placées dans une nouvelle rangée dans la direction de bloc.

## Description

La propriété `column-wrap` peut être utilisée pour définir les colonnes d'une [mise en page multi-colonnes CSS](/fr/docs/Web/CSS/Guides/Multicol_layout) afin qu'elles se replient sur une nouvelle rangée lorsqu'elles commencent à déborder de la largeur de la colonne. Cela est utile pour créer des mises en page plus lisibles lors de l'utilisation des propriétés {{CSSxRef("column-count")}} ou {{CSSxRef("column-width")}} pour définir plusieurs colonnes.

Sans `column-wrap`, les colonnes excédentaires déborderont sur le côté, et les lecteurs devront faire défiler dans la direction en ligne pour lire tout le contenu. La propriété {{CSSxRef("column-height")}}, ainsi que `column-wrap`, permet de définir une hauteur spécifique pour les colonnes et de les envelopper sur une nouvelle rangée de colonnes lorsque le bord du conteneur est atteint.

La valeur par défaut de `column-wrap` est `auto`, ce qui se résout en `wrap` lorsque `column-height` est défini sur une valeur de type `<length>`&nbsp;; `wrap` permet aux colonnes à hauteur fixe de s'enrouler sur plusieurs rangées. Lorsque `column-height` est égal à `auto`, `column-wrap: auto` se résout en `nowrap`, permettant aux colonnes de déborder horizontalement si une hauteur de conteneur fixe est définie.

En raison de ce comportement par défaut, il n'est généralement pas nécessaire de définir explicitement la propriété `column-wrap`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Cet exemple démontre une utilisation simple de la propriété `column-wrap` pour créer une mise en page multi-colonnes enveloppée en définissant une propriété `column-height`.

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
  <li>Dis&nbsp;! Quel lot</li>
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

### Comparaison entre `wrap` et `nowrap`

Cet exemple présente une mise en page multi-colonnes qui démontre la différence entre les valeurs `wrap` et `nowrap` en vous permettant de basculer la valeur de la propriété `column-wrap` du conteneur de colonnes entre les deux. Le résultat est une mise en page qui change dynamiquement entre le défilement horizontal et vertical.

#### HTML et JavaScript

Le balisage de cet exemple contient plusieurs paragraphes de contenu, provenant des pages d'accueil HTML, CSS et JavaScript de MDN, et un élément HTML `{{HTMLElement("input/range", "&lt;input type=\"range\"&gt;")}}` alimenté par JavaScript pour basculer la valeur de la propriété `column-wrap` du conteneur entre `nowrap` et `wrap`. Le HTML et le JavaScript ont été masqués pour des raisons de concision.

```html hidden live-sample___wrap-nowrap
<form>
  <label for="set-wrap"
    >Définir <code>column-wrap</code> sur <code>wrap</code></label
  >
  <input type="checkbox" id="set-wrap" />
</form>
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

```js hidden live-sample___wrap-nowrap
const checkbox = document.getElementById("set-wrap");
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    document.body.style.columnWrap = "wrap";
  } else {
    document.body.style.columnWrap = "nowrap";
  }
});
```

#### CSS

Nous faisons de l'élément HTML {{HTMLElement("body")}} un conteneur multi-colonnes en définissant la propriété {{CSSxRef("column-count")}} à `3`. Nous définissons ensuite un {{CSSxRef("gap")}} de `3em 2em`, ce qui donne un écart de `3em` entre les rangées et un écart de `2em` entre les colonnes.

Nous définissons ensuite une `column-height` de `90vh`, ce qui rend les colonnes presque aussi hautes que la fenêtre. Nous définissons également `column-wrap` sur `nowrap`, ce qui fait que les colonnes excédentaires débordent horizontalement. Cela est nécessaire car la valeur initiale de `column-wrap` est `auto`, ce qui se résout en `wrap` lorsque `column-height` est défini sur une valeur de type `<length>`.

La case à cocher permet de basculer la propriété `column-wrap` entre `nowrap` et `wrap`. Lorsqu'elle est définie sur `wrap`, les colonnes de contenu excédentaires débordent verticalement dans de nouvelles rangées de colonnes, créant ainsi la mise en page verticale. La valeur de `column-height` fait en sorte que chaque rangée de colonnes remplisse la fenêtre.

```css live-sample___wrap-nowrap
body {
  column-count: 3;
  gap: 3em 2em;
  padding: 0 2em;
  column-height: 90vh;
  column-wrap: nowrap;
}
```

Ensuite, nous définissons la propriété {{CSSxRef("column-span")}} de l'élément HTML `{{HTMLElement("Heading_Elements", "&lt;h1&gt;")}}` sur `all`, afin que le titre s'étende sur toutes les colonnes, et nous définissons la propriété {{CSSxRef("margin-top")}} du premier {{HTMLElement("p")}} sur `0` afin qu'il s'aligne avec le haut des colonnes.

```css live-sample___wrap-nowrap
h1 {
  column-span: all;
}

p:first-of-type {
  margin-top: 0;
}
```

```css hidden live-sample___wrap-nowrap
* {
  box-sizing: border-box;
}

html {
  font-family: "Arial", sans-serif;
}

p {
  line-height: 1.5;
}

@supports not (column-wrap: wrap) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété 'column-wrap'.";
    background-color: wheat;
    position: fixed;
    inset: 40% 0;
    height: fit-content;
    text-align: center;
    padding: 1rem 0;
  }
}

form {
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  padding: 5px;
  border: 1px solid black;
}
```

#### Résultat

{{EmbedLiveSample("wrap-nowrap", "100%", 400)}}

La case à cocher permet de basculer la propriété `column-wrap` entre `nowrap` et `wrap`. Lorsqu'elle est définie sur `nowrap`, les colonnes débordent horizontalement&nbsp;; lorsqu'elle est définie sur `wrap`, de nouvelles rangées de colonnes sont ajoutées verticalement.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("column-count")}}
- La propriété {{CSSxRef("column-width")}}
- La propriété raccourcie {{CSSxRef("columns")}}
- La propriété {{CSSxRef("column-height")}}
- Le module [de mise en page multi-colonnes CSS](/fr/docs/Web/CSS/Guides/Multicol_layout)
