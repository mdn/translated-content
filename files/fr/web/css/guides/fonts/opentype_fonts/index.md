---
title: Caractéristiques de police OpenType
short-title: Caractéristiques OpenType
slug: Web/CSS/Guides/Fonts/OpenType_fonts
l10n:
  sourceCommit: 6f5921b2634db4bd565e5e0cd38eafdadb4bb383
---

Les caractéristiques ou variantes de police désignent les différents glyphes ou styles de caractères contenus dans une police OpenType. Il s'agit notamment des ligatures (glyphes spéciaux combinant des caractères tels que `fi` ou ` ffl`), du crénage (ajustements de l'espacement entre certaines paires de lettres), des fractions, des styles de chiffres et bien d'autres encore. Toutes ces caractéristiques font partie des caractéristiques OpenType et sont accessibles sur le Web à l'aide de propriétés spécifiques et de propriétés de contrôle de bas niveau — {{CSSxRef("font-feature-settings")}}. Cet article vous fournit toutes les informations nécessaires pour utiliser les caractéristiques de police OpenType en CSS.

Certaines polices ont une ou plusieurs de ces caractéristiques activées par défaut (le crénage (<i lang="en">kerning</i> en anglais) et les ligatures par défaut sont des exemples courants), tandis que d'autres sont laissées au soin du·de la concepteur·ice ou développeur·euse pour choisir de les activer dans des scénarios spécifiques.

En plus des ensembles de caractéristiques larges comme les ligatures ou les chiffres alignés (des chiffres qui s'alignent uniformément par opposition aux `oldstyle`, qui ressemblent davantage à des lettres minuscules), il existe également des caractéristiques très spécifiques telles que les jeux stylistiques (qui peuvent inclure plusieurs variantes spécifiques de glyphes destinées à être utilisées ensemble), les variantes (qui peuvent être une ou plusieurs variantes de la lettre «&nbsp;a&nbsp;»), ou même des altérations spécifiques aux langues pour les langues d'Asie de l'Est. Dans ce dernier cas, ces altérations sont en réalité nécessaires pour exprimer correctement la langue, elles vont donc au-delà de la préférence stylistique de la plupart des autres caractéristiques OpenType.

> [!WARNING]
> Il existe de nombreux attributs CSS définis pour exploiter les caractéristiques des polices, mais malheureusement beaucoup ne sont pas entièrement implémentés. Ils sont tous définis et affichés ici, mais beaucoup ne fonctionnent qu'en utilisant la propriété de bas niveau {{CSSxRef("font-feature-settings")}}. Il est possible d'écrire du CSS pour fonctionner des deux manières, mais cela peut devenir fastidieux. Le problème de l'utilisation de `font-feature-settings` pour tout est que chaque fois que vous voulez changer l'une des caractéristiques individuelles, vous devez redéfinir toute la chaîne de caractères (similaire à la manipulation des polices variables avec {{CSSxRef("font-variation-settings")}}).

## Découvrir la disponibilité des caractéristiques des polices

Il est parfois délicat de savoir quelles caractéristiques sont disponibles pour une police donnée si celle-ci n'est pas accompagnée d'une documentation (la plupart des concepteurs de polices et des fonderies fournissent des pages d'exemple et du CSS pour cette raison précise). Mais certains sites facilitent cette tâche. Vous pouvez visiter [wakamaifondue.com <sup>(angl.)</sup>](https://wakamaifondue.com/), déposer votre fichier de police sur le cercle indiqué, et en quelques instants vous obtenez un rapport complet sur toutes les capacités et caractéristiques de votre police. [Axis-praxis.org <sup>(angl.)</sup>](https://www.axis-praxis.org/) offre également une fonctionnalité similaire, avec la possibilité de cliquer sur les caractéristiques pour les activer ou les désactiver dans un bloc de texte donné.

## Pourquoi vous voulez les utiliser ?

Étant donné que ces caractéristiques peuvent être difficilement accessibles, on peut légitimement se demander pourquoi il faut les utiliser. Pour répondre à cette question, il faut voir comment ces caractéristiques peuvent aider à rendre un site plus lisible, accessible, élégant&nbsp;:

- **Les ligatures** telles que `œ`, `ff` ou `fi` répartissent plus également l'espace entre les lettres et permettent une lecture plus douce.
- **Les fractions** permettent d'améliorer la compréhension et la lecture de certains textes (des recettes par exemple).
- **L'écriture des nombres** au sein de paragraphes de texte définis comme `oldstyle` s'intègre plus confortablement entre les lettres minuscules, et de même, les définir comme `tabular numbers` les alignent mieux lorsqu'il s'agit de présenter une liste de coûts dans un tableau par exemple. Les chiffres `lining`, en revanche, s'alignent de manière plus uniforme seuls ou devant des mots en majuscules.

Bien qu'aucune de ces caractéristiques, prise isolément, ne rende un site inutilisable en raison de leur absence, chacune d'elles peut à son tour rendre un site plus facile à utiliser et plus mémorable grâce à son souci du détail.

> Les caractéristiques OpenType ressemblent à des compartiments secrets dans les polices. En les déverrouillant, vous découvrez des moyens de faire en sorte que les polices aient un aspect et un comportement différents de manière subtile et spectaculaire. Toutes les caractéristiques OpenType ne sont pas appropriées à utiliser tout le temps, mais certaines sont cruciales pour une typographie de qualité. _-- Tim Brown, Directeur de la typographie chez Adobe_.

### Au-delà du style, le contenu même

Il existe certains cas (notamment avec {{CSSxRef("font-variant-east-asian")}}) où les caractéristiques OpenType sont directement liées à l'utilisation de formes différentes pour certains glyphes. Ces caractéristiques ont un impact sur la lisibilité mais aussi et surtout sur la signification du texte. Dans ces cas, les caractéristiques de police ne sont pas un outil de style mais font partie intégrante du contenu.

## Les caractéristiques de police

Il existe une variété de caractéristiques. Nous les avons ici regroupées selon leurs attributs principaux et les options développées dans les spécifications du W3C.

> [!NOTE]
> Les exemples qui suivent illustrent certaines propriétés et des combinaisons d'exemple et sont accompagnés des équivalents utilisant la syntaxe de plus bas niveau. Il est possible que ces deux versions d'exemple ne correspondent pas exactement selon l'implémentation des navigateurs. Les polices utilisées ici sont Playfair Display, Source Serif Pro, IBM Plex Serif, Dancing Script et Kokoro (qui sont libres d'utilisation et disponibles avec différents services tels que Google Fonts).

### Crénage

Associé à la propriété CSS&nbsp;: {{CSSxRef("font-kerning")}}

Cela fait référence à l'espacement entre des paires de glyphes spécifiques. Cette caractéristique est généralement activée par défaut (comme recommandé par la spécification OpenType). Il convient de noter que si {{CSSxRef("letter-spacing")}} est également défini sur votre texte, il est appliqué après le crénage.
Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour modifier l'exemple dans le MDN Playground&nbsp;:

```html hidden live-sample___font-kerning-example
<fieldset>
  <legend>Utiliser la propriété <code>font-kerning</code></legend>
  <div class="conteneur conteneur1">
    <p>Pangolins duveteux</p>
  </div>
  <input type="checkbox" name="coche1" id="coche1" value="on" checked />
  <label for="coche1">Crénage actif</label>
</fieldset>

<fieldset>
  <legend>Utiliser la propriété <code>font-feature-settings</code></legend>
  <div class="conteneur conteneur2">
    <p>Pangolins duveteux</p>
  </div>
  <input type="checkbox" name="coche2" id="coche2" value="on" checked />
  <label for="coche2">Crénage actif</label>
</fieldset>
```

```css hidden live-sample___font-kerning-example
@font-face {
  font-family: "Plex Serif";
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  src:
    url("https://mdn.github.io/shared-assets/fonts/plex/IBMPlexSerif-Regular.woff")
      format("woff"),
    url("https://mdn.github.io/shared-assets/fonts/plex/IBMPlexSerif-Regular.woff2")
      format("woff2");
}

body {
  font:
    1.2em "Plex Serif",
    "Times New Roman",
    serif;
  margin: 1rem;
}

fieldset {
  margin-bottom: 1rem;
}

label {
  user-select: none;
}

.conteneur > p {
  font-size: 4rem;
  margin: 1.5rem 0;
}
```

```css live-sample___font-kerning-example
/* kerning: auto|normal|none */
.conteneur1 * {
  font-kerning: normal;
}
.inactif.conteneur1 * {
  font-kerning: none;
}

/* 'kern' 1|0 (on ou off) */
.conteneur2 * {
  font-feature-settings: "kern" 1;
}
.inactif.conteneur2 * {
  font-feature-settings: "kern" 0;
}
```

```js hidden live-sample___font-kerning-example
const caseACocher1 = document.getElementById("coche1");
const caseACocher2 = document.getElementById("coche2");
const conteneur1 = document.querySelector(".conteneur1");
const conteneur2 = document.querySelector(".conteneur2");

const basculerInactif = (caseACocher, conteneur) => {
  if (caseACocher.checked) {
    conteneur.classList.remove("inactif");
  } else {
    conteneur.classList.add("inactif");
  }
};

caseACocher1.addEventListener("change", () => {
  basculerInactif(caseACocher1, conteneur1);
});

caseACocher2.addEventListener("change", () => {
  basculerInactif(caseACocher2, conteneur2);
});
```

{{EmbedLiveSample("font-kerning-example", "", 450)}}

### Alternatives

Associé à la propriété CSS&nbsp;: {{CSSxRef("font-variant-alternates")}}

Les polices peuvent proposer plusieurs variantes pour divers glyphes, comme différents styles du «&nbsp;a&nbsp;» minuscule ou des lettrines plus ou moins élaborées dans une police manuscrite. Cette propriété permet d'activer un ensemble complet de variantes ou une seule variante spécifique, selon les valeurs fournies. L'exemple ci-dessous illustre plusieurs aspects de l'utilisation des caractères alternatifs. Les polices comportant des glyphes alternatifs peuvent les rendre disponibles de manière globale ou individuellement, dans des ensembles de styles distincts, voire pour des caractères isolés. Dans cet exemple, vous pouvez voir deux polices différentes, ainsi que l'introduction de la règle {{CSSxRef("@font-feature-values")}}. Celle-ci sert à définir des raccourcis ou des options nommées pouvant être définies pour chaque famille de polices. Vous pouvez ainsi créer une option nommée qui s'applique uniquement à une seule police, ou une option partagée pouvant être appliquée de manière plus générale. Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour modifier l'exemple dans le MDN Playground&nbsp;:

```html hidden live-sample___font-variant-alternates-example
<fieldset>
  <legend>Utiliser la propriété <code>font-variant-alternates</code></legend>
  <div class="conteneur conteneur1">
    <p><span class="script">Mon</span> Pangramme perfide</p>
  </div>
  <input type="checkbox" name="coche1" id="coche1" value="on" checked />
  <label for="coche1">Alternative activée</label>
</fieldset>

<fieldset>
  <legend>Utiliser la propriété <code>font-feature-settings</code></legend>
  <div class="conteneur conteneur2">
    <p><span class="script">Mon</span> Pangramme perfide</p>
  </div>
  <input type="checkbox" name="coche2" id="coche2" value="on" checked />
  <label for="coche2">Alternative activée</label>
</fieldset>
```

```css hidden live-sample___font-variant-alternates-example
@font-face {
  font-family: "Plex Serif";
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  src:
    url("https://mdn.github.io/shared-assets/fonts/plex/IBMPlexSerif-Regular.woff")
      format("woff"),
    url("https://mdn.github.io/shared-assets/fonts/plex/IBMPlexSerif-Regular.woff2")
      format("woff2");
}

@font-face {
  font-family: "Dancing Script";
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  src:
    url("https://mdn.github.io/shared-assets/fonts/dancing-script/dancing-script-regular.woff")
      format("woff"),
    url("https://mdn.github.io/shared-assets/fonts/dancing-script/dancing-script-regular.woff2")
      format("woff2");
}

body {
  font:
    1.2em "Plex Serif",
    "Times New Roman",
    serif;
  margin: 1rem;
}

.script {
  font-family: "Dancing Script", serif;
}

fieldset {
  margin-bottom: 1rem;
}

label {
  user-select: none;
}

.conteneur > * {
  font-size: 4rem;
  margin: 1.5rem 0;
}
```

```css live-sample___font-variant-alternates-example
@font-feature-values "Plex Serif" {
  @styleset {
    alt-a: 1;
    alt-g: 2;
  }
  @stylistic {
    alternates: 1;
  }
}

@font-feature-values "Dancing Script" {
  @stylistic {
    alternates: 1;
  }
}

.conteneur1 * {
  font-variant-alternates: styleset(alt-a);
}
.conteneur1 .script {
  font-variant-alternates: stylistic(alternates);
}
.inactif.conteneur1 * {
  font-variant-alternates: normal;
}

.conteneur2 * {
  font-feature-settings: "ss01";
}
.conteneur2 .script {
  font-feature-settings: "salt";
}
.inactif.conteneur2 * {
  font-feature-settings:
    "ss01" 0,
    "salt" 0;
}
```

```js hidden live-sample___font-variant-alternates-example
const caseACocher1 = document.getElementById("coche1");
const caseACocher2 = document.getElementById("coche2");
const conteneur1 = document.querySelector(".conteneur1");
const conteneur2 = document.querySelector(".conteneur2");

const basculerInactif = (caseACocher, conteneur) => {
  if (caseACocher.checked) {
    conteneur.classList.remove("inactif");
  } else {
    conteneur.classList.add("inactif");
  }
};

caseACocher1.addEventListener("change", () => {
  basculerInactif(caseACocher1, conteneur1);
});

caseACocher2.addEventListener("change", () => {
  basculerInactif(caseACocher2, conteneur2);
});
```

{{EmbedLiveSample("font-variant-alternates-example", "", 600)}}

Dans ce cas, `@stylistic(alternates)` affiche tous les caractères alternatifs pour chacune des polices. En appliquant uniquement ces règles au mot «&nbsp;Mon&nbsp;», seul l'affichage de la lettre «&nbsp;M&nbsp;» est modifié. Si on applique `@styleset(alt-a)`, seule l'apparence de la lettre a minuscule change.

Vous pouvez modifier la ligne&nbsp;:

```css
font-variant-alternates: styleset(alt-a);
```

par&nbsp;:

```css
font-variant-alternates: styleset(alt-g);
```

et voir comment la lettre a retrouve sa forme normale et comment la lettre g est modifiée.

### Ligatures

Associé à la propriété CSS&nbsp;: {{CSSxRef("font-variant-ligatures")}}

Les ligatures sont des glyphes qui remplacent deux ou plusieurs glyphes afin de les représenter de façon plus harmonieuse (pour l'espacement et l'esthétique notamment). Certaines de ces ligatures sont fréquemment utilisées (comme les lettres `fi`, `fl` ou `ffl`) — mais il en existe beaucoup d'autres. Il y a les plus fréquentes (appelées ligatures communes), et il y a aussi des catégories plus spécialisées comme les «&nbsp;ligatures discrétionnaires&nbsp;», les «&nbsp;ligatures historiques&nbsp;» et les «&nbsp;alternatifs contextuels&nbsp;». Bien que ces dernières ne soient pas techniquement des ligatures, elles sont généralement similaires en ce qu'elles remplacent des combinaisons spécifiques de lettres lorsqu'elles apparaissent ensemble.

Bien que plus courantes dans les polices de style script, dans l'exemple ci-dessous, elles sont utilisées pour créer des flèches. Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour modifier l'exemple dans le MDN Playground&nbsp;:

```html hidden live-sample___font-variant-ligatures-example
<fieldset>
  <legend>Utiliser la propriété <code>font-variant-ligatures</code></legend>
  <div class="conteneur conteneur1">
    <p>Parfaitement duveteux -^ &lt;-&gt;</p>
  </div>
  <input type="checkbox" name="coche1" id="coche1" value="on" checked />
  <label for="coche1">Ligatures activée</label>
</fieldset>

<fieldset>
  <legend>Utiliser la propriété <code>font-feature-settings</code></legend>
  <div class="conteneur conteneur2">
    <p>Parfaitement duveteux -^ &lt;-&gt;</p>
  </div>
  <input type="checkbox" name="coche2" id="coche2" value="on" checked />
  <label for="coche2">Ligatures activée</label>
</fieldset>
```

```css hidden live-sample___font-variant-ligatures-example
@font-face {
  font-family: "Playfair Display";
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  src:
    url("https://mdn.github.io/shared-assets/fonts/playfair-display/playfair-display-regular.woff")
      format("woff"),
    url("https://mdn.github.io/shared-assets/fonts/playfair-display/playfair-display-regular.woff2")
      format("woff2");
}

body {
  font:
    1.2em "Playfair Display",
    "Times New Roman",
    serif;
  margin: 1rem;
}

fieldset {
  margin-bottom: 1rem;
}

label {
  user-select: none;
}

.conteneur > p {
  font-size: 4rem;
  margin: 1.5rem 0;
}
```

```css live-sample___font-variant-ligatures-example
.conteneur1 * {
  font-variant-ligatures: common-ligatures discretionary-ligatures contextual;
}
.inactif.conteneur1 * {
  font-variant-ligatures: none;
}

/* 'liga', 'dlig', 'hlig', 'calt' */
.conteneur2 * {
  font-feature-settings: "dlig", "liga", "calt";
}
.inactif.conteneur2 * {
  font-feature-settings:
    "dlig" 0,
    "liga" 0,
    "calt" 0;
}
```

```js hidden live-sample___font-variant-ligatures-example
const caseACocher1 = document.getElementById("coche1");
const caseACocher2 = document.getElementById("coche2");
const conteneur1 = document.querySelector(".conteneur1");
const conteneur2 = document.querySelector(".conteneur2");

const basculerInactif = (caseACocher, conteneur) => {
  if (caseACocher.checked) {
    conteneur.classList.remove("inactif");
  } else {
    conteneur.classList.add("inactif");
  }
};

caseACocher1.addEventListener("change", () => {
  basculerInactif(caseACocher1, conteneur1);
});

caseACocher2.addEventListener("change", () => {
  basculerInactif(caseACocher2, conteneur2);
});
```

{{EmbedLiveSample("font-variant-ligatures-example", "", 640)}}

### Position

Associée à la propriété CSS&nbsp;: {{CSSxRef("font-variant-position")}}

Les variantes de position permettent d'activer le support typographique des glyphes pour les exposants et les indices. Celles-ci sont utilisées dans le texte sans modifier la ligne de base ou l'interlignage (c'est un des avantages par rapport à l'utilisation des éléments HTML {{HTMLElement("sub")}} et {{HTMLElement("sup")}}). Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour modifier l'exemple dans le MDN Playground&nbsp;:

```html hidden live-sample___font-variant-position-example
<fieldset>
  <legend>Utiliser la propriété <code>font-variant-position</code></legend>
  <div class="conteneur conteneur1">
    <p>
      Exposants<span class="exposant">1</span> et indices<span class="indice"
        >2</span
      >
    </p>
  </div>
  <input type="checkbox" name="coche1" id="coche1" value="on" checked />
  <label for="coche1">Position activée</label>
</fieldset>

<fieldset>
  <legend>Utiliser la propriété <code>font-feature-settings</code></legend>
  <div class="conteneur conteneur2">
    <p>
      Exposants<span class="exposant">1</span> et indices<span class="indice"
        >2</span
      >
    </p>
  </div>
  <input type="checkbox" name="coche2" id="coche2" value="on" checked />
  <label for="coche2">Position activée</label>
</fieldset>
```

```css hidden live-sample___font-variant-position-example
@font-face {
  font-family: "Playfair Display";
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  src:
    url("https://mdn.github.io/shared-assets/fonts/playfair-display/playfair-display-regular.woff")
      format("woff"),
    url("https://mdn.github.io/shared-assets/fonts/playfair-display/playfair-display-regular.woff2")
      format("woff2");
}

body {
  font:
    1.2em "Playfair Display",
    "Times New Roman",
    serif;
  margin: 1rem;
}

fieldset {
  margin-bottom: 1rem;
}

label {
  user-select: none;
}

.conteneur > p {
  font-size: 4rem;
  margin: 1.5rem 0;
}
```

```css live-sample___font-variant-position-example
/* position: normal|sub|super */
.conteneur1 .exposant {
  font-variant-position: super;
}
.conteneur1 .indice {
  font-variant-position: sub;
}
.inactif.conteneur1 * {
  font-variant-position: normal;
}

/* 'subs', 'sups' */
.conteneur2 .exposant {
  font-feature-settings: "sups";
}
.conteneur2 .indice {
  font-feature-settings: "subs";
}
.inactif.conteneur2 * {
  font-feature-settings:
    "sups" 0,
    "subs" 0;
}
```

```js hidden live-sample___font-variant-position-example
const caseACocher1 = document.getElementById("coche1");
const caseACocher2 = document.getElementById("coche2");
const conteneur1 = document.querySelector(".conteneur1");
const conteneur2 = document.querySelector(".conteneur2");

const basculerInactif = (caseACocher, conteneur) => {
  if (caseACocher.checked) {
    conteneur.classList.remove("inactif");
  } else {
    conteneur.classList.add("inactif");
  }
};

caseACocher1.addEventListener("change", () => {
  basculerInactif(caseACocher1, conteneur1);
});

caseACocher2.addEventListener("change", () => {
  basculerInactif(caseACocher2, conteneur2);
});
```

{{EmbedLiveSample("font-variant-position-example", "", 460)}}

### Capitales

Associé à la propriété CSS&nbsp;: {{CSSxRef("font-variant-caps")}}

L'une des utilisations les plus courantes des fonctionnalités OpenType concerne les petites capitales. Il s'agit de lettres majuscules dont la taille est adaptée pour s'intégrer mieux parmi les lettres minuscules et qui sont généralement utilisées pour les acronymes et les abréviations. Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour modifier l'exemple dans le MDN Playground&nbsp;:

```html hidden live-sample___font-variant-caps-example
<fieldset>
  <legend>Utiliser la propriété <code>font-variant-caps</code></legend>
  <div class="conteneur conteneur1">
    <p>
      <span class="petites-majuscules">Petites Majuscules</span> et
      <span class="toutes-petites-majuscules"
        >Toutes les Petites Majuscules</span
      >
    </p>
  </div>
  <input type="checkbox" name="coche1" id="coche1" value="on" checked />
  <label for="coche1">Majuscules activées</label>
</fieldset>

<fieldset>
  <legend>Utiliser la propriété <code>font-feature-settings</code></legend>
  <div class="conteneur conteneur2">
    <p>
      <span class="petites-majuscules">Petites Majuscules</span> et
      <span class="toutes-petites-majuscules"
        >Toutes les Petites Majuscules</span
      >
    </p>
  </div>
  <input type="checkbox" name="coche2" id="coche2" value="on" checked />
  <label for="coche2">Majuscules activées</label>
</fieldset>
```

```css hidden live-sample___font-variant-caps-example
@font-face {
  font-family: "Playfair Display";
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  src:
    url("https://mdn.github.io/shared-assets/fonts/playfair-display/playfair-display-regular.woff")
      format("woff"),
    url("https://mdn.github.io/shared-assets/fonts/playfair-display/playfair-display-regular.woff2")
      format("woff2");
}

body {
  font:
    1.2em "Playfair Display",
    "Times New Roman",
    serif;
  margin: 1rem;
}

fieldset {
  margin-bottom: 1rem;
}

label {
  user-select: none;
}

.conteneur > p {
  font-size: 4rem;
  margin: 1.5rem 0;
}
```

```css live-sample___font-variant-caps-example
/* position: normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps */
.conteneur1 .petites-majuscules {
  font-variant-caps: small-caps;
}
.conteneur1 .toutes-petites-majuscules {
  font-variant-caps: all-small-caps;
}
.inactif.conteneur1 * {
  font-variant-caps: normal;
}

/* 'smcp', 'c2sc' */
.conteneur2 .petites-majuscules {
  font-feature-settings: "smcp" 1;
}
.conteneur2 .toutes-petites-majuscules {
  font-feature-settings:
    "c2sc" 1,
    "smcp" 1;
}
.inactif.conteneur2 * {
  font-feature-settings:
    "smcp" 0,
    "c2sc" 0;
}
```

```js hidden live-sample___font-variant-caps-example
const caseACocher1 = document.getElementById("coche1");
const caseACocher2 = document.getElementById("coche2");
const conteneur1 = document.querySelector(".conteneur1");
const conteneur2 = document.querySelector(".conteneur2");

const basculerInactif = (caseACocher, conteneur) => {
  if (caseACocher.checked) {
    conteneur.classList.remove("inactif");
  } else {
    conteneur.classList.add("inactif");
  }
};

caseACocher1.addEventListener("change", () => {
  basculerInactif(caseACocher1, conteneur1);
});

caseACocher2.addEventListener("change", () => {
  basculerInactif(caseACocher2, conteneur2);
});
```

{{EmbedLiveSample("font-variant-caps-example", "", 820)}}

### Caractères numériques

Associé à la propriété CSS&nbsp;: {{CSSxRef("font-variant-numeric")}}

Il existe plusieurs styles différents de chiffres couramment inclus dans les polices&nbsp;:

- «&nbsp;Classique&nbsp;» qui sont toutes de la même hauteur et alignées sur la même ligne de base.
- «&nbsp;Elzévirien&nbsp;» qui ont des hauteurs variées et sont conçus pour avoir l'apparence de jambages et de hampes comme les autres lettres minuscules. Ces chiffres sont conçus pour être utilisés en incise afin que les chiffres se fondent visuellement avec les glyphes environnants de manière similaire aux petites capitales.

On y retrouve également la notion d'espacement. L'espacement proportionnel est le réglage par défaut et l'espacement tabulaire permet d'aligner les chiffres de manière uniforme quelle que soit la largeur du caractère, ce qui est plus approprié pour aligner des tableaux de nombres dans des tableaux financiers.

Deux types de fractions peuvent être prises en charge avec cette propriété&nbsp;:

- Les fractions avec barre diagonale.
- Les fractions empilées verticalement.

Les nombres ordinaux peuvent également être pris en charge («&nbsp;1er&nbsp;», «&nbsp;3e&nbsp;») de même qu'un zéro barré si celui-ci est présent dans la police.

#### Chiffres classiques et chiffres elzéviriens

Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour modifier l'exemple dans le MDN Playground&nbsp;:

```html hidden live-sample___font-variant-numeric-example
<fieldset>
  <legend>Utiliser la propriété <code>font-variant-numeric</code></legend>
  <div class="conteneur conteneur1">
    <p>
      <span class="classique">6,142</span> ou
      <span class="elzevirien">6,142</span>
    </p>
  </div>
  <input type="checkbox" name="coche1" id="coche1" value="on" checked />
  <label for="coche1">Chiffres activés</label>
</fieldset>

<fieldset>
  <legend>Utiliser la propriété <code>font-feature-settings</code></legend>
  <div class="conteneur conteneur2">
    <p>
      <span class="classique">6,142</span> ou
      <span class="elzevirien">6,142</span>
    </p>
  </div>
  <input type="checkbox" name="coche2" id="coche2" value="on" checked />
  <label for="coche2">Chiffres activés</label>
</fieldset>
```

```css hidden live-sample___font-variant-numeric-example
@font-face {
  font-family: "Source Serif";
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  src:
    url("https://mdn.github.io/shared-assets/fonts/source-serif/SourceSerifPro-Regular.ttf.woff")
      format("woff"),
    url("https://mdn.github.io/shared-assets/fonts/source-serif/SourceSerifPro-Regular.ttf.woff2")
      format("woff2");
}

body {
  font:
    1.2em "Source Serif",
    "Times New Roman",
    serif;
  margin: 20px;
  padding: 0;
}

fieldset {
  margin-bottom: 1rem;
}

label {
  user-select: none;
}

.conteneur > p {
  font-size: 4rem;
  margin: 1.5rem 0;
}
```

```css live-sample___font-variant-numeric-example
.conteneur1 .classique {
  font-variant-numeric: lining-nums;
}
.conteneur1 .elzevirien {
  font-variant-numeric: oldstyle-nums;
}
.inactif.conteneur1 * {
  font-variant-numeric: normal;
}

.conteneur2 .classique {
  font-feature-settings: "lnum" 1;
}
.conteneur2 .elzevirien {
  font-feature-settings: "onum" 1;
}
.inactif.conteneur2 * {
  font-feature-settings:
    "lnum" 0,
    "onum" 0;
}
```

```js hidden live-sample___font-variant-numeric-example
const caseACocher1 = document.getElementById("coche1");
const caseACocher2 = document.getElementById("coche2");
const conteneur1 = document.querySelector(".conteneur1");
const conteneur2 = document.querySelector(".conteneur2");

const basculerInactif = (caseACocher, conteneur) => {
  if (caseACocher.checked) {
    conteneur.classList.remove("inactif");
  } else {
    conteneur.classList.add("inactif");
  }
};

caseACocher1.addEventListener("change", () => {
  basculerInactif(caseACocher1, conteneur1);
});

caseACocher2.addEventListener("change", () => {
  basculerInactif(caseACocher2, conteneur2);
});
```

{{EmbedLiveSample("font-variant-numeric-example", "", 480)}}

#### Fractions, nombres ordinaux et zéro barré

Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour modifier l'exemple dans le MDN Playground&nbsp;:

```html hidden live-sample___font-variant-numeric-frac-example
<fieldset>
  <legend>Utiliser la propriété <code>font-variant-numeric</code></legend>
  <div class="conteneur conteneur1">
    <p>
      <span class="fractions-diagonale">3/16</span>, ou
      <span class="ordinal">1er</span> de <span class="zero">0</span>
    </p>
  </div>
  <input type="checkbox" name="coche1" id="coche1" value="on" checked />
  <label for="coche1">Chiffres activés</label>
</fieldset>

<fieldset>
  <legend>Utiliser la propriété <code>font-feature-settings</code></legend>
  <div class="conteneur conteneur2">
    <p>
      <span class="fractions-diagonale">3/16</span>, ou
      <span class="ordinal">1er</span> de <span class="zero">0</span>
    </p>
  </div>
  <input type="checkbox" name="coche2" id="coche2" value="on" checked />
  <label for="coche2">Chiffres activés</label>
</fieldset>
```

```css hidden live-sample___font-variant-numeric-frac-example
@font-face {
  font-family: "Source Serif";
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  src:
    url("https://mdn.github.io/shared-assets/fonts/source-serif/SourceSerifPro-Regular.ttf.woff")
      format("woff"),
    url("https://mdn.github.io/shared-assets/fonts/source-serif/SourceSerifPro-Regular.ttf.woff2")
      format("woff2");
}

body {
  font:
    1.2em "Source Serif",
    "Times New Roman",
    serif;
  margin: 20px;
  padding: 0;
}

fieldset {
  margin-bottom: 1rem;
}

label {
  user-select: none;
}

.conteneur > p {
  font-size: 4rem;
  margin: 1.5rem 0;
}
```

```css live-sample___font-variant-numeric-frac-example
.conteneur1 .fractions-diagonale {
  font-variant-numeric: diagonal-fractions;
}
.conteneur1 .ordinal {
  font-variant-numeric: ordinal;
}
.conteneur1 .zero {
  font-variant-numeric: slashed-zero;
}
.inactif.conteneur1 * {
  font-variant-numeric: normal;
}

.conteneur2 .fractions-diagonale {
  font-feature-settings: "frac" 1;
}
.conteneur2 .ordinal {
  font-feature-settings: "ordn" 1;
}
.conteneur2 .zero {
  font-feature-settings: "zero" 1;
}
.inactif.conteneur2 * {
  font-feature-settings:
    "frac" 0,
    "ordn" 0,
    "zero" 0;
}
```

```js hidden live-sample___font-variant-numeric-frac-example
const caseACocher1 = document.getElementById("coche1");
const caseACocher2 = document.getElementById("coche2");
const conteneur1 = document.querySelector(".conteneur1");
const conteneur2 = document.querySelector(".conteneur2");

const basculerInactif = (caseACocher, conteneur) => {
  if (caseACocher.checked) {
    conteneur.classList.remove("inactif");
  } else {
    conteneur.classList.add("inactif");
  }
};

caseACocher1.addEventListener("change", () => {
  basculerInactif(caseACocher1, conteneur1);
});

caseACocher2.addEventListener("change", () => {
  basculerInactif(caseACocher2, conteneur2);
});
```

{{EmbedLiveSample("font-variant-numeric-frac-example", "", 480)}}

### Asie orientale

Associé à la propriété CSS&nbsp;: {{CSSxRef("font-variant-east-asian")}}

Cela permet d'accéder à différentes formes alternatives de glyphes dans une police. L'exemple qui suit illustre une chaîne de caractères de glyphes où seul l'ensemble OpenType `jis78` est activé. Vous pouvez décocher la case et voir alors d'autres caractères s'afficher. Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour modifier l'exemple dans le MDN Playground&nbsp;:

```html hidden live-sample___font-variant-east-asian-example
<fieldset>
  <legend class="fr-exemple">
    Utiliser la propriété <code>font-variant-numeric</code>
  </legend>
  <div class="conteneur conteneur1">
    <p>唖 芦 溢 茨 鰯 嘘 欝 厩 噂</p>
  </div>
  <input type="checkbox" name="coche1" id="coche1" value="on" checked />
  <label for="coche1" class="fr-exemple">Caractéristique désactivée</label>
</fieldset>

<fieldset>
  <legend class="fr-exemple">
    Utiliser la propriété <code>font-feature-settings</code>
  </legend>
  <div class="conteneur conteneur2">
    <p>唖 芦 溢 茨 鰯 嘘 欝 厩 噂</p>
  </div>
  <input type="checkbox" name="coche2" id="coche2" value="on" checked />
  <label for="coche2" class="fr-exemple">Caractéristique désactivée</label>
</fieldset>
```

```css hidden live-sample___font-variant-east-asian-example
@font-face {
  font-family: "Kokoro";
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  src: url("https://mdn.github.io/shared-assets/fonts/kokoro/Kokoro.woff2")
    format("woff2");
}

body {
  font:
    1.2em "Kokoro",
    "Times New Roman",
    serif;
  margin: 20px;
  padding: 0;
}

fieldset {
  margin-bottom: 1rem;
}

label {
  user-select: none;
}

.conteneur > p {
  font-size: 4rem;
  margin: 1.5rem 0;
}

/* Contenu spécial ajouté pour les accents — ne pas prendre en compte */
.fr-exemple {
  font-family: "Times New Roman", serif;
}
```

```css live-sample___font-variant-east-asian-example
.conteneur1 * {
  font-variant-east-asian: normal;
}
.inactif.conteneur1 * {
  font-variant-east-asian: jis78;
}

.conteneur2 * {
  font-feature-settings: "jp78" 0;
}
.inactif.conteneur2 * {
  font-feature-settings: "jp78";
}
```

```js hidden live-sample___font-variant-east-asian-example
const caseACocher1 = document.getElementById("coche1");
const caseACocher2 = document.getElementById("coche2");
const conteneur1 = document.querySelector(".conteneur1");
const conteneur2 = document.querySelector(".conteneur2");

const basculerInactif = (caseACocher, conteneur) => {
  if (caseACocher.checked) {
    conteneur.classList.remove("inactif");
  } else {
    conteneur.classList.add("inactif");
  }
};

caseACocher1.addEventListener("change", () => {
  basculerInactif(caseACocher1, conteneur1);
});

caseACocher2.addEventListener("change", () => {
  basculerInactif(caseACocher2, conteneur2);
});
```

{{EmbedLiveSample("font-variant-east-asian-example", "", 700)}}

> [!NOTE]
> Ces glyphes ont été copiés à partir d'un exemple et le texte qu'ils constituent n'ont aucun sens particulier.

### Propriété raccourcie des variations de police

La propriété {{CSSxRef("font-variant")}} est la syntaxe raccourcie permettant de définir l'ensemble des caractéristiques précédentes. La valeur `normal` réinitialise toutes les propriétés à leur valeur initiale. La valeur `none` définit `font-variant-ligatures` à `none` et toutes les autres propriétés à leur valeur initiale. Cela signifie que si le crénage est activé par défaut, il reste activé même si `none` est fourni ici. Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour modifier l'exemple dans le MDN Playground&nbsp;:

```html hidden live-sample___font-variant-example
<fieldset>
  <legend>Utiliser la propriété <code>font-variant</code></legend>
  <div class="conteneur conteneur1">
    <p>Plastique chic -> divisé par 3/4</p>
  </div>
  <input type="checkbox" name="coche1" id="coche1" value="on" checked />
  <label for="coche1">Caractéristique activée</label>
</fieldset>

<fieldset>
  <legend>Utiliser la propriété <code>font-feature-settings</code></legend>
  <div class="conteneur conteneur2">
    <p>Plastique chic -> divisé par 3/4</p>
  </div>
  <input type="checkbox" name="coche2" id="coche2" value="on" checked />
  <label for="coche2">Caractéristique activée</label>
</fieldset>
```

```css hidden live-sample___font-variant-example
@font-face {
  font-family: "Playfair Display";
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  src:
    url("https://mdn.github.io/shared-assets/fonts/playfair-display/playfair-display-regular.woff")
      format("woff"),
    url("https://mdn.github.io/shared-assets/fonts/playfair-display/playfair-display-regular.woff2")
      format("woff2");
}

body {
  font:
    1.2em "Playfair Display",
    "Times New Roman",
    serif;
  margin: 20px;
  padding: 0;
}

fieldset {
  margin-bottom: 1rem;
}

label {
  user-select: none;
}

.conteneur > p {
  font-size: 4rem;
  margin: 1.5rem 0;
}
```

```css live-sample___font-variant-example
.conteneur1 * {
  font-variant: common-ligatures discretionary-ligatures contextual
    diagonal-fractions;
}
.inactif.conteneur1 * {
  font-variant: none;
}

.conteneur2 * {
  font-feature-settings: "dlig", "liga", "calt", "frac";
}
.inactif.conteneur2 * {
  font-feature-settings:
    "dlig" 0,
    "liga" 0,
    "calt" 0,
    "frac" 0;
}
```

```js hidden live-sample___font-variant-example
const caseACocher1 = document.getElementById("coche1");
const caseACocher2 = document.getElementById("coche2");
const conteneur1 = document.querySelector(".conteneur1");
const conteneur2 = document.querySelector(".conteneur2");

const basculerInactif = (caseACocher, conteneur) => {
  if (caseACocher.checked) {
    conteneur.classList.remove("inactif");
  } else {
    conteneur.classList.add("inactif");
  }
};

caseACocher1.addEventListener("change", () => {
  basculerInactif(caseACocher1, conteneur1);
});

caseACocher2.addEventListener("change", () => {
  basculerInactif(caseACocher2, conteneur2);
});
```

{{EmbedLiveSample("font-variant-example", "", 650)}}

## Paramètres de caractéristique de police

La propriété {{CSSxRef("font-feature-settings")}} permet d'utiliser une syntaxe «&nbsp;bas niveau&nbsp;» qui permet un accès explicite à chaque caractéristique OpenType disponible. Cela donne un contrôle accru mais présente certains inconvénients quant à son impact sur l'héritage et — comme mentionné ci-dessus — si vous souhaitez modifier un paramètre, vous devez redéclarer toute la chaîne de caractères (sauf à utiliser [des propriétés CSS personnalisées](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) afin de définir les valeurs). Aussi, mieux vaut utiliser les propriétés standards lorsque c'est possible.

Il existe une myriade de caractéristiques possibles. Vous pouvez en voir quelques exemples ici et il existe plusieurs ressources pour en exploiter d'autres.

La syntaxe générale ressemble généralement à ceci&nbsp;:

```css
.petites-majuscules {
  font-feature-settings: "smcp", "c2sc";
}
```

Selon la spécification, on peut fournir le code à quatre caractères de la caractéristique ou fournir le code suivi d'un 1 pour activer la fonctionnalité ou suivi d'un 0 pour la désactiver. Ainsi, si on dispose de caractéristiques liées à la ligature et qui sont activées par défaut, on peut les désactiver de la façon suivante&nbsp;:

```css
.sans-ligatures {
  font-feature-settings:
    "liga" 0,
    "dlig" 0;
}
```

### En savoir plus sur les codes des caractéristiques `font-feature-settings`

- [Une démonstration complète des caractéristiques OpenType <sup>(angl.)</sup>](https://sparanoid.com/lab/opentype-features/) (nous ne pouvons pas garantir l'authenticité de ce nom, mais c'est un sacré gros poisson)
- [La liste des caractéristiques OpenType sur Wikipédia <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/List_of_typographic_features)

## Utiliser la détection des fonctionnalités CSS pour l'implémentation

Étant donné que toutes les propriétés ne sont pas prises en charge de manière uniforme, il est recommandé de configurer votre CSS à l'aide de la détection des fonctionnalités afin d'utiliser les propriétés appropriées, en utilisant {{CSSxRef("font-feature-settings")}} comme solution de repli.

Par exemple, les petites majuscules peuvent être définies de plusieurs manières, mais si vous voulez vous assurer que, quelle que soit la capitalisation sous-jacente, vous obtenez tout en petites majuscules, cela nécessite 2 réglages avec `font-feature-settings` contre une seule valeur de propriété utilisant {{CSSxRef("font-variant-caps")}}.

```css
.petites-majuscules {
  font-feature-settings: "smcp", "c2sc";
}

@supports (font-variant-caps: all-small-caps) {
  .petites-majuscules {
    font-feature-settings: normal;
    font-variant-caps: all-small-caps;
  }
}
```

## Voir aussi

### Démonstrations de caractéristiques OpenType en CSS

- [Démonstration complète des caractéristiques OpenType <sup>(angl.)</sup>](https://sparanoid.com/lab/opentype-features/)

### Outils web d'analyse de polices

- [Wakamai Fondue <sup>(angl.)</sup>](https://wakamaifondue.com/)
- [Axis Praxis <sup>(angl.)</sup>](https://www.axis-praxis.org/)

### Spécifications W3C

- [Les propriétés relatives aux caractéristiques de police dans le module CSS Fonts de niveau 3 <sup>(angl.)</sup>](https://drafts.csswg.org/css-fonts-3/#font-rend-props)
- [`font-variant-alternatives` dans le module CSS Fonts de niveau 4 <sup>(angl.)</sup>](https://drafts.csswg.org/css-fonts-4/#propdef-font-variant-alternates)

### Autres ressources

- [Utiliser les caractéristiques OpenType <sup>(angl.)</sup>](https://helpx.adobe.com/fonts/web/language-support-and-opentype-features/use-open-type-features.html) par Tim Brown, Chef de la Typographie chez Adobe
- [La syntaxe Adobe pour les caractéristiques OpenType en CSS <sup>(angl.)</sup>](https://helpx.adobe.com/fonts/web/language-support-and-opentype-features/open-type-syntax.html)
