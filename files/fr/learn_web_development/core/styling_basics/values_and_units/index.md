---
title: Valeurs et unités CSS
short-title: Valeurs et unités
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics")}}

Les règles CSS contiennent des [déclarations](/fr/docs/Web/CSS/Guides/Syntax/Introduction#déclarations_css), qui sont elles-mêmes composées de propriétés et de valeurs.
Chaque propriété utilisée en CSS possède un **type de valeur** qui décrit quel genre de valeurs elle peut accepter.
Dans cette leçon, nous allons examiner certains des types de valeurs les plus fréquemment utilisés, ce qu'ils sont et comment ils fonctionnent.

> [!NOTE]
> Chaque [page de propriété CSS](/fr/docs/Web/CSS/Reference#index) possède une section de syntaxe qui liste les types de valeurs que vous pouvez utiliser avec cette propriété.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Notions de base en HTML (étudiez
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Syntaxe HTML de base</a
        >), <a href="/fr/docs/Learn_web_development/Core/Styling_basics/Getting_started">Syntaxe CSS de base</a>, <a href="/fr/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">Sélecteurs CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Comprendre que les valeurs des propriétés peuvent prendre de nombreux types différents et ce que ces types représentent.</li>
          <li>Se familiariser avec l'utilisation des types fondamentaux&nbsp;: nombres, longueurs, pourcentages, couleurs, images, positions, chaînes de caractères et identifiants, et fonctions.</li>
          <li>Comprendre ce que sont les unités absolues et relatives, et la différence entre elles.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Qu'est-ce qu'une valeur CSS ?

Les valeurs CSS définissent quels types de valeurs sont valides pour chaque propriété CSS. Par exemple, vous pouvez définir des couleurs pour les valeurs de {{CSSxRef("color")}} ou {{CSSxRef("border-color")}}, mais pas des longueurs ou des pourcentages.

Dans les spécifications CSS et sur les pages de propriétés présentes sur MDN, vous pouvez identifier les types de valeurs, car ils sont entourés par des chevrons (`<`, `>`) — tels que {{CSSxRef("&lt;color&gt;")}} ou {{CSSxRef("&lt;length&gt;")}}. Quand vous voyez le type de valeur `<color>` comme valide pour une propriété particulière, cela signifie que vous pouvez utiliser n'importe quelle couleur valide comme valeur pour cette propriété, comme énoncé dans la page de référence de {{CSSxRef("&lt;color&gt;")}}.

Parfois, les types de valeurs et les propriétés peuvent avoir les mêmes noms ou des noms similaires — par exemple, il existe une propriété {{CSSxRef("color")}} et un type de donnée {{CSSxRef("&lt;color&gt;")}}. Vous pouvez utiliser les chevrons pour déterminer lequel vous étudiez dans chaque cas. Les éléments HTML utilisent également des chevrons, mais il devrait être clair d'après le contexte lequel vous regardez. Si vous n'êtes pas sûr, essayez de le rechercher sur MDN.

> [!NOTE]
> Vous allez voir les types de valeurs CSS appelés _types de données_. Les termes sont essentiellement interchangeables — lorsque vous voyez quelque chose en CSS appelée type de données, c'est en réalité juste une manière sophistiquée de dire type de valeur. Le terme _valeur_ fait référence à toute expression particulière prise en charge par un type de valeur que vous choisissez d'utiliser.

Dans l'exemple suivant, nous avons défini la couleur du texte de notre titre en utilisant un mot-clé de couleur, et l'arrière-plan en utilisant un type de valeur de couleur différent — la fonction `rgb()`&nbsp;:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Un type de valeur en CSS définit un ensemble de valeurs autorisées. Cela signifie que si vous voyez `<color>` comme valide, vous n'avez pas besoin de vous demander quel type de valeur de couleur peut être utilisé — mots-clés, valeurs hexadécimales, fonctions `rgb()`, etc. Vous pouvez utiliser _n'importe quelle_ valeur `<color>` disponible, à condition qu'elle soit prise en charge par votre navigateur. La page MDN pour chaque valeur vous donne des informations sur la compatibilité avec les navigateurs. Par exemple, si vous consultez la page pour {{CSSxRef("&lt;color&gt;")}}, vous verrez que la section sur la compatibilité des navigateurs liste différents types de valeurs de couleur et leur support.

Observons quelques-uns des types de valeurs et d'unités que vous pouvez fréquemment rencontrer, avec des exemples, pour que vous puissiez essayer différentes valeurs possibles.

## Nombres, longueurs et pourcentages

Il existe plusieurs types de valeur numérique que vous pouvez utiliser en CSS. Les types qui suivent sont classés comme numériques :

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Type de donnée</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/CSS/Reference/Values/integer">&#x3C;integer></a></code>
      </td>
      <td>
        Un <code>&#x3C;integer></code> est un nombre entier tel que
        <code>1024</code> ou <code>-55</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/CSS/Reference/Values/number">&#x3C;number></a></code>
      </td>
      <td>
        Un <code>&#x3C;number></code> représente un nombre décimal — il peut ou non avoir un point décimal avec une composante fractionnaire. Par exemple, <code>0.255</code>, <code>128</code>, ou <code>-1.2</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/fr/docs/Web/CSS/Reference/Values/dimension">&#x3C;dimension></a></code
        >
      </td>
      <td>
        Une dimension (<code>&#x3C;dimension></code>) est un nombre (<code>&#x3C;number></code>) avec une
        unité attachée. Par exemple, <code>45deg</code>, <code>5s</code>,
        ou <code>10px</code>. <code>&#x3C;dimension></code> est une catégorie
        englobante qui inclut les {{CSSxRef("length")}}, <code><a href="/fr/docs/Web/CSS/Reference/Values/angle">&#x3C;angle></a></code
        >, <code><a href="/fr/docs/Web/CSS/Reference/Values/time">&#x3C;time></a></code
        >, et
        <code
          ><a href="/fr/docs/Web/CSS/Reference/Values/resolution">&#x3C;resolution></a></code
        >
        types.
      </td>
    </tr>
    <tr>
      <td>{{CSSxRef("percentage")}}</td>
      <td>
        Un <code>&#x3C;percentage></code> représente une fraction d'une autre valeur.
        Par exemple, <code>50%</code>. Les valeurs en pourcentage sont toujours
        relatives à une autre quantité. Par exemple, la longueur d'un élément est
        relative à la longueur de son élément parent.
      </td>
    </tr>
  </tbody>
</table>

### Longueurs

Le type numérique que vous rencontrez le plus souvent est {{CSSxRef("length")}}. Par exemple, `10px` (pixels) ou `30em`. Il existe deux types de longueurs en CSS — les longueurs relatives et les longueurs absolues. Connaître la différence entre les deux est important pour comprendre la taille que les éléments obtiennent.

#### Unités de longueur absolue

Les unités suivantes sont toutes des unités de longueur **absolue** — elles ne sont pas relatives à autre chose et sont généralement considérées comme ayant toujours la même taille.

| Unité | Nom                              | Équivalent à             |
| ----- | -------------------------------- | ------------------------ |
| `cm`  | Centimètres                      | 1cm = 37.8px = 25.2/64in |
| `mm`  | Millimètres                      | 1mm = 1/10e de 1cm       |
| `Q`   | Quarts de millimètre             | 1Q = 1/40e de 1cm        |
| `in`  | Pouces (<i lang="en">inches</i>) | 1in = 2.54cm = 96px      |
| `pc`  | Picas                            | 1pc = 1/6e de 1in        |
| `pt`  | Points                           | 1pt = 1/72e de 1in       |
| `px`  | Pixels                           | 1px = 1/96e de 1in       |

La plupart de ces unités sont plus utiles pour l'impression que pour l'affichage à l'écran. Par exemple, on n'utilise généralement pas `cm` (centimètres) à l'écran. La seule valeur que vous utilisez couramment est `px` (pixels).

Notez que `1px` n'équivaut pas nécessairement à un pixel physique de l'appareil. Sur les écrans HD, il peut couvrir plusieurs pixels physiques.
De même, `1cm` en CSS ne correspond souvent pas à un centième de mètre selon le [<abbr title="Système international d'unités">SI</abbr>](https://fr.wikipedia.org/wiki/Syst%C3%A8me_international_d%27unit%C3%A9s). Sur un grand écran de télévision, il est généralement plus long que cela.
Les longueurs sont perceptuelles&nbsp;: `16px` semble à peu près identique sur un téléphone, un ordinateur portable ou un écran de télévision à une distance de visualisation typique.

#### Unités de longueur relative

Les unités de longueur relative sont relatives à autre chose. Par exemple&nbsp;:

- `em` est relative à la taille de la police de cet élément, ou à la taille de la police de l'élément parent lorsqu'elle est utilisée pour {{CSSxRef("font-size")}}. `rem` est relative à la taille de la police de l'élément racine.
- `vh` et `vw` sont relatives à la hauteur et à la largeur de la zone d'affichage, respectivement.

L'avantage d'utiliser des unités relatives est qu'avec une planification minutieuse, vous pouvez faire en sorte que la taille du texte ou d'autres éléments s'adapte par rapport à tout le reste de la page. Pour une liste complète des unités relatives disponibles, consultez la page de référence pour le type {{CSSxRef("&lt;length&gt;")}}.

Dans cette section, nous allons explorer certaines des unités relatives les plus courantes.

#### Exploration d'un exemple

Dans l'exemple ci-dessous, vous pouvez voir comment certaines unités de longueur relative et absolue se comportent. La première boîte a une largeur ({{CSSxRef("width")}}) définie en pixels. En tant qu'unité absolue, cette largeur reste la même, quels que soient les autres changements.

La deuxième boîte a une largeur définie en unités `vw` (largeur de la zone d'affichage). Cette valeur est relative à la largeur de la zone d'affichage, donc `10vw` correspond à 10 pourcents de la largeur de la zone d'affichage. Si vous changez la largeur de votre fenêtre de navigateur, la taille de la boîte devrait changer. Cependant, cet exemple est intégré dans la page à l'aide d'un {{HTMLElement("iframe")}}, donc cela ne fonctionne pas. Pour voir cela en action, vous devez [essayer l'exemple après l'avoir ouvert dans son propre onglet de navigateur <sup>(angl.)</sup>](https://mdn.github.io/css-examples/learn/values-units/length.html).

La troisième boîte utilise des unités `em`. Celles-ci sont relatives à la taille de la police de l'élément. J'ai défini une taille de police de `1em` sur le {{HTMLElement("div")}} contenant, qui a une classe `.wrapper`. Changez cette valeur à `1.5em` et vous voyez que la taille de la police de tous les éléments augmente, mais seul le dernier élément devient plus large, car sa largeur est relative à cette taille de police.

Après avoir suivi les instructions ci-dessus, essayez d'exécuter avec les valeurs d'autres manières, pour voir ce que vous obtenez.

```html live-sample___length
<div class="wrapper">
  <div class="box px">Je suis large de 200px</div>
  <div class="box vw">Je suis large de 10vw</div>
  <div class="box em">Je suis large de 10em</div>
</div>
```

```css live-sample___length
.box {
  background-color: lightblue;
  border: 5px solid darkblue;
  padding: 10px;
  margin: 1em 0;
}

.wrapper {
  font-size: 1em;
}

.px {
  width: 200px;
}

.vw {
  width: 10vw;
}

.em {
  width: 10em;
}
```

{{EmbedLiveSample("length", "", 250)}}

#### `em` et `rem`

`em` et `rem` sont deux unités de longueur relative que vous rencontrez fréquemment dès que vous dimensionnez des boîtes ou du texte. Aussi, il est intéressant de comprendre leur fonctionnement, les différences entre ces deux unités, surtout avant d'aborder des sujets plus complexes comme [la mise en forme du texte](/fr/docs/Learn_web_development/Core/Text_styling) ou [les dispositions CSS](/fr/docs/Learn_web_development/Core/CSS_layout). L'exemple qui suit fournit une démonstration.

L'exemple suivant est un ensemble de listes imbriquées — nous avons deux listes au total et les deux exemples ont le même HTML. La seule différence est que le premier a une classe _ems_ et le second une classe _rems_.

Pour commencer, on définit la taille de la police à 16px sur l'élément `<html>`.

Pour récapituler, l'unité `em` signifie **"la taille de police de l'élément parent"** si elle est utilisée pour `font-size`, et **"ma propre taille de police"** lorsqu'elle est utilisée pour autre chose. Les éléments HTML {{HTMLElement("li")}} à l'intérieur des {{HTMLElement("ul")}} avec une `class` de `ems` prennent leur taille de leur parent. Ainsi, chaque niveau successif d'imbrication devient progressivement plus grand, chaque élément ayant sa taille de police définie à `1.3em` — 1,3 fois la taille de police de son élément parent.

Pour récapituler, l'unité `rem` signifie **"la taille de police de l'élément racine"** (rem signifie "root em"). Les éléments HTML {{HTMLElement("li")}} à l'intérieur des {{HTMLElement("ul")}} avec une `class` de `rems` prennent leur taille de l'élément racine (`<html>`). Cela signifie que chaque niveau successif d'imbrication ne devient pas plus grand.

Cependant, si vous modifiez la taille de la police de l'élément `<html>` dans le CSS, vous pouvez voir que tout le reste change en fonction de celle-ci — que ce soit du texte dimensionné en `rem` ou en `em`. Essayez cela maintenant dans MDN Playground.

```html live-sample___em-rem
<ul class="ems">
  <li>Un</li>
  <li>Deux</li>
  <li>
    Trois
    <ul>
      <li>Trois A</li>
      <li>
        Trois B
        <ul>
          <li>Trois B 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul class="rems">
  <li>Un</li>
  <li>Deux</li>
  <li>
    Trois
    <ul>
      <li>Trois A</li>
      <li>
        Trois B
        <ul>
          <li>Trois B 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

```css live-sample___em-rem
html {
  font-size: 16px;
}

.ems li {
  font-size: 1.3em;
}

.rems li {
  font-size: 1.3rem;
}
```

{{EmbedLiveSample("em-rem", "", 400)}}

### Pourcentages

Dans de nombreux cas, un pourcentage est traité de la même manière qu'une longueur. La particularité des pourcentages est qu'ils sont toujours définis par rapport à une autre valeur. Par exemple, si vous définissez la propriété `font-size` d'un élément en pourcentage, celle-ci correspond à un pourcentage de la `font-size` de l'élément parent. Si vous utilisez un pourcentage pour la valeur `width`, celle-ci correspond à un pourcentage de la `width` de l'élément parent.

Dans l'exemple suivant, les deux paires de boîtes dont la taille est exprimée en pourcentage et en pixels ont les mêmes noms de classe. Les boîtes à l'intérieur de chaque paire ont respectivement une largeur de `40%` et de `200px`.

La différence est que le deuxième ensemble de deux boîtes se trouve à l'intérieur d'un conteneur de `400px` de large. La deuxième boîte de `200px` de large a la même largeur que la première, mais la deuxième boîte de `40%` représente désormais `40%` de `400px` — elle est donc beaucoup plus étroite que la première&nbsp;!

Essayez de modifier la largeur du conteneur ou la valeur en pourcentage pour voir comment cela fonctionne&nbsp;:

```html live-sample___percentage
<div class="box px">Je suis large de 200px</div>
<div class="box percent">Je suis large de 40%</div>
<div class="wrapper">
  <div class="box px">Je suis large de 200px</div>
  <div class="box percent">Je suis large de 40%</div>
</div>
```

```css live-sample___percentage
.box {
  background-color: lightblue;
  border: 5px solid darkblue;
  padding: 10px;
  margin: 1em 0;
}
.wrapper {
  width: 400px;
  border: 5px solid rebeccapurple;
}

.px {
  width: 200px;
}

.percent {
  width: 40%;
}
```

{{EmbedLiveSample("percentage", "", 350)}}

Le prochain exemple utilise des tailles de police définies en pourcentages. Chaque élément `<li>` a `font-size` avec 80%, ainsi les éléments de listes imbriqués deviennent de plus en plus petits en héritant de la taille de leur parent.

```html live-sample___percentage-fonts
<ul>
  <li>Un</li>
  <li>Deux</li>
  <li>
    Trois
    <ul>
      <li>Trois A</li>
      <li>
        Trois B
        <ul>
          <li>Trois B 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

```css live-sample___percentage-fonts
li {
  font-size: 80%;
}
```

{{EmbedLiveSample("percentage-fonts")}}

Lorsque de nombreuses propriétés acceptent une longueur ou un pourcentage comme valeur, certaines n'acceptent qu'une longueur, par exemple {{CSSxRef("border-width")}}. Les pages de référence des propriétés sur MDN détaillent les types de valeurs qu'elles acceptent. Si la valeur autorisée inclut {{CSSxRef("&lt;length-percentage&gt;")}}, vous pouvez utiliser une longueur ou un pourcentage. Si la valeur autorisée n'inclut que `<length>`, il n'est pas possible d'utiliser un pourcentage.

### Nombres

Certains types de valeur acceptent des nombres sans unité&nbsp;; un exemple est la propriété `opacity`, qui contrôle l'opacité d'un élément (c'est-à-dire sa transparence). Cette propriété accepte un nombre compris entre `0` (totalement transparent) et `1` (totalement opaque).

Dans l'exemple ci-dessous, essayez de modifier la valeur de `opacity` en utilisant différentes valeurs décimales entre `0` et `1` afin de voir comment la boîte et son contenu deviennent plus ou moins opaques&nbsp;:

```html live-sample___opacity
<div class="wrapper">
  <div class="box">Je suis une boîte avec une opacité</div>
</div>
```

```css live-sample___opacity
.wrapper {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloons.jpg");
  background-repeat: no-repeat;
  background-position: bottom left;
  padding: 20px;
}

.box {
  margin: 40px auto;
  width: 200px;
  background-color: lightblue;
  border: 5px solid darkblue;
  padding: 30px;
  opacity: 0.6;
}
```

{{EmbedLiveSample("opacity", "", 210)}}

> [!NOTE]
> Lorsque vous utilisez un nombre comme valeur dans le CSS, il ne doit pas être placé entre guillemets.

## Couleur

Les valeurs de couleur peuvent être utilisées à de nombreux endroits en CSS, que vous définissiez la couleur du texte, des arrière-plans, des bordures, et bien plus encore.
Il existe de nombreuses façons de définir une couleur en CSS, vous permettant de contrôler de nombreuses propriétés intéressantes.

Le système de couleurs standard disponible sur les ordinateurs modernes utilise des couleurs sur 24 bits, ce qui permet d'afficher environ 16,7 millions de couleurs distinctes grâce à une combinaison de différents canaux rouge, vert et bleu avec 256 valeurs différentes par canal (256 x 256 x 256 = 16 777 216).

Dans cette section, nous allons d'abord examiner les méthodes les plus couramment utilisées pour définir les couleurs&nbsp;: en utilisant des mots-clés, des valeurs hexadécimales et des valeurs `rgb()`.
Nous allons également jeter un coup d'œil rapide à des fonctions de couleur supplémentaires, vous permettant de les reconnaître lorsque vous les voyez ou d'expérimenter différentes façons d'appliquer la couleur.

Vous allez probablement décider d'une palette de couleurs, puis utiliser ces couleurs — et votre méthode préférée pour définir les couleurs — tout au long de votre projet.
Vous pouvez mélanger et assortir les modèles de couleurs, mais il est généralement préférable que l'ensemble de votre projet utilise la même méthode de déclaration des couleurs pour plus de cohérence.

### Mots-clés pour les couleurs

Vous pouvez voir les mots-clés de couleur (ou «&nbsp;couleurs nommées&nbsp;») utilisés dans de nombreux exemples de code MDN. Comme le type de donnée {{CSSxRef("&lt;named-color&gt;")}} contient un nombre très limité de valeurs de couleur, ils ne sont pas couramment utilisés sur les sites Web de production avec un langage de conception sophistiqué. En revanche, les couleurs nommées sont utilisées dans les exemples de code pour indiquer clairement à l'utilisateur·ice quelle couleur est attendue, afin que l'apprenant·e puisse se concentrer sur le contenu enseigné.

Dans l'exemple suivant, essayez de manipuler différentes valeurs de mots-clés de couleur pour mieux comprendre leur fonctionnement. Vous pouvez les consulter en utilisant la page de référence {{CSSxRef("&lt;named-color&gt;")}}.

```html live-sample___color-keywords
<div class="wrapper">
  <div class="box one">antiquewhite</div>
  <div class="box two">blueviolet</div>
  <div class="box three">greenyellow</div>
</div>
```

```css live-sample___color-keywords
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}
.one {
  background-color: antiquewhite;
}

.two {
  background-color: blueviolet;
}

.three {
  background-color: greenyellow;
}
```

{{EmbedLiveSample("color-keywords")}}

### Valeurs RGB hexadécimales

Le type de valeur de couleur suivant que vous êtes susceptible de rencontrer est les codes hexadécimaux (hex).

Les nombres hexadécimaux utilisent 16 caractères de `0-9` et `a-f`, donc la plage complète est `0123456789abcdef`. Chaque valeur de couleur hexadécimale se compose d'un symbole dièse (`#`) suivi de six caractères hexadécimaux (`#ffc0cb`, par exemple). Chaque **paire** de caractères hexadécimaux représente l'un des canaux d'une couleur RVB — rouge, vert et bleu — et nous permet de définir n'importe laquelle des 256 valeurs disponibles pour chacun (16 x 16 = 256).

Ces valeurs sont moins intuitives que les mots-clés pour définir les couleurs, mais elles sont beaucoup plus polyvalentes car vous pouvez _représenter_ n'importe quelle couleur RVB avec elles.

Dans l'exemple suivant, essayez de changer les valeurs pour voir comment les couleurs varient&nbsp;:

```html live-sample___color-hex
<div class="wrapper">
  <div class="box one">#02798b</div>
  <div class="box two">#c55da1</div>
  <div class="box three">#128a7d</div>
</div>
```

```css live-sample___color-hex
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: #02798b;
}

.two {
  background-color: #c55da1;
}

.three {
  background-color: #128a7d;
}
```

{{EmbedLiveSample("color-hex")}}

> [!NOTE]
> Vous pouvez voir des valeurs de couleur hexadécimales écrites avec trois caractères au lieu de six. Il s'agit d'une abréviation qui peut être utilisée lorsque les caractères de chaque paire sont identiques. Par exemple, `#ff00ff` et `#f0f` sont équivalents. Vous pouvez également voir des valeurs de couleur hexadécimales écrites avec huit (ou quatre) caractères, le quatrième représentant la transparence alpha des trois valeurs précédentes — par exemple `#ff00ff66`.

### Les valeurs RGB

Pour créer des valeurs RGB directement, la fonction {{CSSxRef("color_value/rgb", "rgb()")}} prend trois paramètres représentant les valeurs des canaux **rouge**, **vert** et **bleu** des couleurs, avec une quatrième valeur optionnelle séparée par une barre oblique (`/`) représentant l'opacité, de la même manière que les valeurs hexadécimales. La différence avec RGB est que chaque canal est représenté non pas par deux chiffres hexadécimaux, mais par un nombre décimal allant de `0` à `255` ou un pourcentage allant de `0%` à `100%` (mais pas un mélange des deux).

Réécrivons notre dernier exemple pour utiliser des couleurs RGB&nbsp;:

```html live-sample___color-rgb
<div class="wrapper">
  <div class="box one">rgb(2 121 139)</div>
  <div class="box two">rgb(197 93 161)</div>
  <div class="box three">rgb(18 138 125)</div>
</div>
```

```css live-sample___color-rgb
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}
.one {
  background-color: rgb(2 121 139);
}

.two {
  background-color: rgb(197 93 161);
}

.three {
  background-color: rgb(18 138 125);
}
```

{{EmbedLiveSample("color-rgb")}}

#### Un exemple RGB avec opacité

Dans l'exemple suivant, nous avons ajouté une image de fond au bloc contenant nos boîtes colorées. Nous avons ensuite défini des valeurs d'opacité différentes pour chaque boîte — remarquez comment le fond apparaît davantage lorsque la valeur du canal alpha est plus petite. Si vous définissez cette valeur à `0`, la couleur est complètement transparente, tandis que `1` la rend complètement opaque. Les valeurs intermédiaires donnent différents niveaux de transparence.

Essayez de modifier les valeurs du canal alpha pour voir comment cela affecte le rendu des couleurs.

```html live-sample___color-rgba
<div class="wrapper">
  <div class="box one">rgb(2 121 139 / .3)</div>
  <div class="box two">rgb(197 93 161 / .7)</div>
  <div class="box three">rgb(18 138 125 / .9)</div>
</div>
```

```css live-sample___color-rgba
.wrapper {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloons.jpg");
  padding: 40px 20px;
}

.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: rgb(2 121 139 / 0.3);
}

.two {
  background-color: rgb(197 93 161 / 0.7);
}

.three {
  background-color: rgb(18 138 125 / 0.9);
}
```

{{EmbedLiveSample("color-rgba", "", "250px")}}

> [!NOTE]
> Définir un canal alpha sur une couleur présente une différence clé par rapport à l'utilisation de la propriété {{CSSxRef("opacity")}} que nous avons mentionnée précédemment. Lorsque vous utilisez `opacity`, vous rendez l'élément et tout ce qu'il contient transparent, tandis qu'utiliser RGB avec un paramètre alpha ne rend transparente que la couleur que vous définissez.

### Utiliser les teintes pour définir une couleur

Si vous voulez aller au-delà des mots-clés, des valeurs hexadécimales et de {{CSSxRef("color_value/rgb")}} pour les couleurs, vous pouvez essayer d'utiliser {{CSSxRef("hue")}}.
La teinte est le type de valeur qui nous permet de distinguer ou de rapprocher des couleurs comme le rouge, l'orange, le jaune, le vert, le bleu, etc.
Le concept clé est que vous pouvez définir une teinte dans un angle ({{CSSxRef("angle")}}) car la plupart des modèles de couleurs décrivent les teintes en utilisant une {{Glossary("color wheel", "roue des couleurs")}}.

Il existe plusieurs fonctions de couleur qui incluent un composant {{CSSxRef("hue")}}, y compris {{CSSxRef("color_value/hsl")}}, {{CSSxRef("color_value/hwb")}}, et {{CSSxRef("color_value/lch")}}. D'autres fonctions de couleur, comme {{CSSxRef("color_value/lab")}}, définissent les couleurs en fonction de ce que les humains peuvent percevoir.

Si vous voulez en savoir plus sur ces fonctions et les espaces de couleurs, consultez le guide [Appliquer des couleurs aux éléments HTML en utilisant CSS](/fr/docs/Web/CSS/Guides/Colors/Applying_color), la référence {{CSSxRef("&lt;color&gt;")}} qui répertorie toutes les différentes façons d'utiliser les couleurs en CSS, et [le module de couleur CSS](/fr/docs/Web/CSS/Guides/Colors) qui fournit un aperçu de tous les types de couleurs en CSS et des propriétés qui utilisent des valeurs de couleur.

### Valeurs HWB

Un bon point de départ pour utiliser les teintes en CSS est la fonction {{CSSxRef("color_value/hwb")}}, qui définit une couleur `srgb()`.
Les trois parties sont&nbsp;:

- **Teinte**&nbsp;: La teinte de base de la couleur. Elle prend une valeur {{CSSxRef("hue")}} comprise entre `0` et `360`, correspondant aux angles autour d'un cercle chromatique.
- **Blancheur**&nbsp;: La quantité de blanc dans la couleur. La valeur est comprise entre `0%` (aucune blancheur) et `100%` (blancheur complète).
- **Noirceur**&nbsp;: La quantité de noir dans la couleur. La valeur est comprise entre `0%` (aucune noirceur) et `100%` (noirceur complète).

### Valeurs HSL

Similaire à la fonction {{CSSxRef("color_value/hwb")}}, la fonction {{CSSxRef("color_value/hsl")}} définit également une couleur `srgb()`.
HSL utilise `Hue`, en plus de `Saturation` et `Lightness`&nbsp;:

- **Teinte**&nbsp;: La teinte de base de la couleur. Elle prend une valeur {{CSSxRef("hue")}} comprise entre `0` et `360`, correspondant aux angles autour d'un cercle chromatique.
- **Saturation**&nbsp;: La saturation de la couleur. Elle prend une valeur comprise entre `0%` (aucune couleur, apparaît en gris) et `100%` (saturation complète de la couleur).
- **Luminosité**&nbsp;: La luminosité de la couleur. Elle prend une valeur comprise entre `0%` (aucune lumière, apparaît complètement noire) et `100%` (pleine lumière, apparaît complètement blanche).

La valeur de couleur {{CSSxRef("color_value/hsl")}} a également une quatrième valeur optionnelle, séparée de la couleur par une barre oblique (`/`), représentant la transparence alpha.

Mettons à jour l'exemple RGB pour utiliser des couleurs HSL à la place&nbsp;:

```html live-sample___color-hsl
<div class="wrapper">
  <div class="box one">hsl(188 97% 28%)</div>
  <div class="box two">hsl(321 47% 57%)</div>
  <div class="box three">hsl(174 77% 31%)</div>
</div>
```

```css live-sample___color-hsl
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: hsl(188 97% 28%);
}

.two {
  background-color: hsl(321 47% 57%);
}

.three {
  background-color: hsl(174 77% 31%);
}
```

{{EmbedLiveSample("color-hsl")}}

Tout comme avec `rgb()`, vous pouvez passer un paramètre alpha à `hsl()` pour définir l'opacité&nbsp;:

```html live-sample___color-hsla
<div class="wrapper">
  <div class="box one">hsl(188 97% 28% / .3)</div>
  <div class="box two">hsl(321 47% 57% / .7)</div>
  <div class="box three">hsl(174 77% 31% / .9)</div>
</div>
```

```css live-sample___color-hsla
.wrapper {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloons.jpg");
  padding: 40px 20px;
}

.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: hsl(188 97% 28% / 0.3);
}

.two {
  background-color: hsl(321 47% 57% / 0.7);
}

.three {
  background-color: hsl(174 77% 31% / 0.9);
}
```

{{EmbedLiveSample("color-hsla", "", 250)}}

Avant de continuer, essayez de modifier les deux exemples précédents pour utiliser des valeurs de couleur basées sur la teinte. Essayez de varier la valeur de la teinte dans chaque cas pour voir comment cela affecte la couleur de base, puis essayez de varier les autres paramètres également.

## Images

Le type de valeur {{CSSxRef("&lt;image&gt;")}} est utilisé à chaque endroit où une image est une valeur valide. Il peut s'agir d'une image à proprement parler dans un fichier (avec une fonction `url()` qui utilise l'adresse du fichier avec l'image) ou d'un dégradé.

Dans l'exemple ci-dessous, nous utilisons une image et un dégradé comme valeurs pour la propriété CSS `background-image`.

```html live-sample___image
<div class="box image"></div>
<div class="box gradient"></div>
```

```css live-sample___image
.box {
  height: 150px;
  width: 300px;
  margin: 20px auto;
  border-radius: 0.5em;
}

.image {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/big-star.png");
}

.gradient {
  background-image: linear-gradient(
    90deg,
    rgb(119 0 255 / 39%),
    rgb(0 212 255 / 25%)
  );
}
```

{{EmbedLiveSample("image", "", 380)}}

> [!NOTE]
> Il existe d'autres valeurs possibles pour le type `<image>`, toutefois celles-ci sont plus récentes et moins bien prises en charge par les navigateurs. Consultez la page MDN pour le type de donnée {{CSSxRef("&lt;image&gt;")}} si vous voulez en savoir plus.

Vous pouvez en apprendre davantage sur les valeurs d'image dans notre article [Arrière-plans et bordures](/fr/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) plus tard.

## Position

La valeur de type {{CSSxRef("&lt;position&gt;")}} représente un ensemble de coordonnées sur deux dimensions, utilisé pour positionner un objet comme une image d'arrière-plan (avec {{CSSxRef("background-position")}}). Elle peut prendre des mots-clés tels que `top`, `left`, `bottom`, `right` et `center` pour aligner les éléments par rapport aux limites d'une boîte en deux dimensions, ainsi que des longueurs, qui représentent des décalages par rapport aux bords supérieur et gauche de la boîte.

Une valeur de position typique se compose de deux valeurs — la première définit la position horizontale, la seconde la position verticale. Si vous ne définissez des valeurs que pour un seul axe, l'autre est par défaut `center`.

Dans l'exemple suivant, nous avons positionné une image d'arrière-plan à `60px` du haut et à `droite` du conteneur en utilisant un mot-clé.

Essayez d'exécuter avec ces valeurs pour voir comment vous pouvez déplacer l'image.

```html live-sample___position
<div class="box"></div>
```

```css live-sample___position
.box {
  height: 200px;
  width: 400px;
  background-image: url("https://mdn.github.io/shared-assets/images/examples/big-star.png");
  background-repeat: no-repeat;
  background-position: right 60px;
  margin: 20px auto;
  border-radius: 0.5em;
  border: 5px solid rebeccapurple;
}
```

{{EmbedLiveSample("position", "100%", 260)}}

## Chaînes de caractères et identifiants

Tout au long des exemples ci-dessus, nous avons vu des endroits où des mots-clés sont utilisés comme valeur (par exemple, les mots-clés `<color>` comme `red`, `black`, `rebeccapurple` et `goldenrod`). Ces mots-clés sont plus précisément décrits comme des _identifiants_, une valeur spéciale que CSS comprend. En tant que tels, ils ne sont pas entre guillemets — ils ne sont pas traités comme des chaînes de caractères.

Il existe des endroits où vous utilisez des chaînes de caractères en CSS. Par exemple, [lors de la spécification de contenu généré](/fr/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#générer_du_contenu_avec_before_et_after). Dans ce cas, la valeur est entre guillemets pour montrer qu'il s'agit d'une chaîne de caractères. Dans l'exemple ci-dessous, nous utilisons des mots-clés de couleur non cités avec une chaîne de contenu généré citée.

```html live-sample___strings-idents
<div class="box"></div>
```

```css live-sample___strings-idents
.box {
  width: 400px;
  padding: 1em;
  border-radius: 0.5em;
  border: 5px solid rebeccapurple;
  background-color: lightblue;
}

.box::after {
  content: "Ceci est une chaîne de caractères. Je le sais parce qu'elle est citée dans le CSS.";
}
```

{{EmbedLiveSample("strings-idents", "100%", 80)}}

## Fonctions

En programmation, une fonction est un morceau de code qui effectue une tâche spécifique.
Les fonctions sont utiles car vous pouvez écrire du code une fois, puis le réutiliser plusieurs fois au lieu d'écrire la même logique encore et encore.
La plupart des langages de programmation non seulement prennent en charge les fonctions, mais sont également livrés avec des fonctions intégrées pratiques pour des tâches courantes afin que vous n'ayez pas à les écrire vous-même à partir de zéro.

Le CSS a également des [fonctions](/fr/docs/Web/CSS/Reference/Values/Functions), qui fonctionnent de manière similaire aux fonctions dans d'autres langages.
En fait, nous avons déjà vu des fonctions CSS dans la section [Couleur](#couleur) ci-dessus, telles que {{CSSxRef("color_value/rgb")}} et {{CSSxRef("color_value/hsl")}}.

En dehors de l'application des couleurs, vous pouvez utiliser des fonctions en CSS pour faire beaucoup d'autres choses.
Par exemple, les [fonctions de transformation](/fr/docs/Web/CSS/Reference/Values/Functions#fonctions_de_transformation) sont un moyen courant de déplacer, faire pivoter et redimensionner des éléments sur une page.
Vous pourriez voir {{CSSxRef("transform-function/translate")}} pour déplacer quelque chose horizontalement ou verticalement, {{CSSxRef("transform-function/rotate")}} pour faire pivoter quelque chose, ou {{CSSxRef("transform-function/scale")}} pour agrandir ou réduire quelque chose.

### Fonctions mathématiques

Lorsque vous créez des styles pour un projet, vous allez commencer probablement avec des nombres comme `300px` pour les longueurs ou `200ms` pour les durées.
Si vous voulez que ces valeurs changent en fonction d'autres valeurs, vous allez devoir faire un peu de mathématiques.
Vous pourriez calculer le pourcentage d'une valeur ou ajouter un nombre à un autre, puis mettre à jour votre CSS avec le résultat.

Le CSS prend en charge les [fonctions mathématiques](/fr/docs/Web/CSS/Reference/Values/Functions#fonctions_mathématiques), qui nous permettent d'effectuer des calculs en CSS au lieu de nous fier à des valeurs statiques ou de faire les calculs en JavaScript.
L'une des fonctions mathématiques les plus courantes est {{CSSxRef("calc()")}}, qui permet de faire des opérations comme l'addition, la soustraction, la multiplication et la division.

Par exemple, supposons que nous voulons définir la largeur d'un élément pour qu'elle soit `20%` de son conteneur parent plus `100px`.
Nous ne pouvons pas définir cette largeur avec une valeur statique — si le parent utilise une largeur en pourcentage (ou une unité relative comme `em` ou `rem`), elle varie en fonction du contexte dans lequel elle est utilisée, et d'autres facteurs tels que l'appareil de l'utilisateur·ice ou la largeur de la fenêtre du navigateur.
Cependant, nous pouvons utiliser `calc()` pour définir la largeur de l'élément à `20%` de son conteneur parent plus `100px`.
Le `20%` est basé sur la largeur du conteneur parent (`.wrapper`) et si cette largeur change, le calcul change également&nbsp;:

```html live-sample___calc
<div class="wrapper">
  <div class="box">Ma largeur est calculée.</div>
</div>
```

```css live-sample___calc
.wrapper {
  width: 400px;
}
.box {
  padding: 1em;
  border-radius: 0.5em;
  border: 5px solid rebeccapurple;
  background-color: lightblue;
  width: calc(20% + 100px);
}
```

{{EmbedLiveSample("calc")}}

Il existe de nombreuses autres fonctions mathématiques que vous pouvez utiliser en CSS, telles que {{CSSxRef("min()")}}, {{CSSxRef("max()")}}, et {{CSSxRef("clamp()")}}&nbsp;; elles vous permettent respectivement de choisir la valeur la plus petite, la plus grande ou la valeur intermédiaire parmi un ensemble de valeurs. Explorez notre page de référence sur les [fonctions de valeurs CSS](/fr/docs/Web/CSS/Reference/Values/Functions) pour découvrir toutes les fonctions CSS disponibles.

Connaître les fonctions CSS est utile pour les reconnaître lorsque vous les voyez. Vous devriez commencer à les expérimenter dans vos projets — elles vous aident à éviter d'écrire du code personnalisé ou répétitif pour obtenir des résultats que vous pouvez obtenir avec le CSS régulier.

## Résumé

Ceci a été un aperçu rapide des types de valeurs et d'unités les plus courants que vous pourriez rencontrer. Vous pouvez consulter tous les différents types sur la page du module [Valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units) — vous en rencontrez beaucoup en les utilisant au fur et à mesure que vous travaillez sur ces leçons.

L'essentiel à retenir est que chaque propriété a une liste définie de types de valeurs autorisés, et chaque type de valeur a une définition expliquant ce que sont les valeurs. Vous pouvez ensuite consulter les détails ici sur MDN. Par exemple, comprendre que {{CSSxRef("&lt;image&gt;")}} permet également de créer un dégradé de couleurs est utile mais peut-être une connaissance non évidente à avoir&nbsp;!

Dans le prochain article, nous vous proposons des tests que vous pouvez utiliser pour vérifier dans quelle mesure vous avez compris et retenu les informations que nous avons fournies sur les valeurs et les unités.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics")}}
