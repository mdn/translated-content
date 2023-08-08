---
title: Style de listes
slug: Learn/CSS/Styling_text/Styling_lists
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Fundamentals", "Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text")}}

Les [listes](/fr/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#listes) se comportent comme la plupart des autres textes, mais il existe des propriétés CSS propres aux listes que vous devez connaître, et quelques bonnes pratiques à prendre en compte. Cet article explique tout.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Connaissances de base informatiques, bases HTML (étudiées dans
        <a href="/fr/Learn/HTML/Introduction_to_HTML"
          >Introduction au HTML</a
        >), bases CSS (étudiées dans
        <a href="/fr/Learn/CSS/Introduction_to_CSS"
          >Introduction aux CSS</a
        >),
        <a
          href="/fr/docs/Learn/CSS/Styling_text/Fundamentals"
          >la mise en forme du texte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>
        Se familiariser avec les meilleures pratiques et propriétés liées aux
        styles de liste.
      </td>
    </tr>
  </tbody>
</table>

## Un exemple de liste simple

Pour commencer, regardons un exemple de liste simple. Au long de cet article, nous verrons les listes non ordonnées, ordonnées et des listes descriptives — tous les styles ont des fonctionnalités similaires, mais il existe quelques particularités en fonction du type de liste. Un exemple sans style est [disponible sur GitHub](https://mdn.github.io/learning-area/css/styling-text/styling-lists/unstyled-list.html) (voyez aussi le [code source](https://github.com/mdn/learning-area/blob/master/css/styling-text/styling-lists/unstyled-list.html)).

Le code HTML pour nos exemples de liste ressemble à ceci&nbsp;:

```html
<h2>Liste de courses (non ordonnée)</h2>

<p>
  Paragraphe de référence, paragraphe de référence, paragraphe de référence,
  paragraphe de référence, paragraphe de référence, paragraphe de référence.
</p>

<ul>
  <li>Houmous</li>
  <li>Pain blanc</li>
  <li>Salade verte</li>
  <li>Fromage halloumi</li>
</ul>

<h2>Liste de recette (ordonnée)</h2>

<p>
  Paragraphe de référence, paragraphe de référence, paragraphe de référence,
  paragraphe de référence, paragraphe de référence, paragraphe de référence.
</p>

<ol>
  <li>
    Faire griller le pain pitta, laisser refroidir, puis le trancher sur le
    côté.
  </li>
  <li>
    Frire l'halloumi dans une poêle plate antiadhésive, jusqu'à ce qu'il soit
    doré des deux côtés.
  </li>
  <li>Laver et hacher la salade.</li>
  <li>
    Mettre la salade, l'houmous et l'halloumi frit entre les tranches de pain.
  </li>
</ol>

<h2>Liste descriptive des ingrédients</h2>

<p>
  Paragraphe de référence, paragraphe de référence, paragraphe de référence,
  paragraphe de référence, paragraphe de référence, paragraphe de référence.
</p>

<dl>
  <dt>Houmous</dt>
  <dd>
    Une purée ou sauce épaisse généralement faite de pois chiches mélangés avec
    du tahini, du jus de citron, du sel, de l'ail et d'autres aromates.
  </dd>
  <dt>Pain pitta</dt>
  <dd>Un pain plat moelleux, légèrement levé.</dd>
  <dt>Halloumi</dt>
  <dd>
    Fromage à pâte mi-dure, non affiné, saumuré, à point de fusion plus élevé
    que d'habitude, généralement fabriqué à partir de lait de chèvre et de
    brebis.
  </dd>
  <dt>Salade verte</dt>
  <dd>
    Ces feuilles vertes et saines que beaucoup d'entre nous n'utilisent que pour
    garnir les kebabs.
  </dd>
</dl>
```

### Résultat

{{EmbedLiveSample('','100%',770)}}

Si vous allez à l'exemple réel maintenant, et examinez les éléments de la liste en utilisant [les outils de développement des navigateurs](/fr/docs/Learn/Common_questions/What_are_browser_developer_tools), vous noterez quelques valeurs de style par défaut&nbsp;:

- Les éléments [`<ul>`](/fr/docs/Web/HTML/Element/ul) et [`<ol>`](/fr/docs/Web/HTML/Element/ol) ont une propriété [`margin`](/fr/docs/Web/CSS/margin) de `16px` (`1em`) en haut et en bas et une propriété [`padding-left`](/fr/docs/Web/CSS/padding-left) de `40px` (`2.5em`).
- Les éléments de la liste ([`<li>`](/fr/docs/Web/HTML/Element/li)) n'ont aucun paramètre d'espacement par défaut.
- L'élément [`<dl>`](/fr/docs/Web/HTML/Element/dl) a des propriétés [`margin`](/fr/docs/Web/CSS/margin) de `16px` (`1em`) en haut et en bas, mais pas de définition du remplissage.
- Les éléments [`<dd>`](/fr/docs/Web/HTML/Element/dd) ont une propriété [`margin-left`](/fr/docs/Web/CSS/margin-left) de `40px` (`2.5em`).
- Les éléments [`<p>`](/fr/docs/Web/HTML/Element/p), inclus pour référence, ont des propriétés [`margin`](/fr/docs/Web/CSS/margin) de `16px` (`1em`) en haut et en bas, identiques à ceux des différents types de listes.

## Gestion d'espacement des listes

Si vous modifiez le style des listes, vous devez ajuster l'espacement vertical et horizontal de manière à le rendre identique à celui des éléments environnants (tels que paragraphes ou images&nbsp;: ce principe est parfois appelé «&nbsp;rythme vertical&nbsp;» — vous pouvez voir l'[exemple de style terminé](https://mdn.github.io/learning-area/css/styling-text/styling-lists/) sur GitHub et trouver [le code source](https://github.com/mdn/learning-area/blob/master/css/styling-text/styling-lists/index.html) aussi.)

Le CSS utilisé pour le style et l'espacement du texte est le suivant&nbsp;:

```css
/* Style général */

html {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 10px;
}

h2 {
  font-size: 2rem;
}

ul,
ol,
dl,
p {
  font-size: 1.5rem;
}

li,
p {
  line-height: 1.5;
}

/* Styles des listes descriptives */

dd,
dt {
  line-height: 1.5;
}
dt {
  font-weight: bold;
}
```

- La première règle définit une police de caractères pour l'ensemble du site avec une taille de base de 10px. Elles sont héritées par tous les éléments de la page.
- Les règles 2 et 3 définissent des tailles relatives de la police pour les titres, les différents types de liste (les enfants des éléments de liste en héritent) et les paragraphes. Cela signifie que les paragraphes et listes auront la même taille de police et les mêmes espacements entre le haut et le bas, ce qui aidera à garder un rythme vertical cohérent.
- La règle 4 définit la même propriété [`line-height`](/fr/docs/Web/CSS/line-height) pour les paragraphes et éléments de listes — ainsi, les paragraphes et chaque élément de liste individuellement auront le même espacement entre les lignes. Cela aidera également à garder un rythme vertical cohérent.
- Les règles 5 et 6 s'appliquent à la liste descriptive — nous définissons la même propriété `line-height` pour les termes à décrire et les descriptions, comme celle pour les paragraphes et les éléments de liste. Encore une fois, la cohérence est bonne&nbsp;! Nous écrivons aussi les termes à décrire avec une police en gras, pour les distinguer visuellement plus facilement.

## Style propre à une liste

Maintenant que nous avons examiné l'espacement général des listes, explorons quelques propriétés propres à une liste. Il y a trois propriétés à connaître pour commencer&nbsp;; elles s'appliquent aux éléments [`<ul>`](/fr/docs/Web/HTML/Element/ul) ou [`<ol>`](/fr/docs/Web/HTML/Element/ol)&nbsp;:

- [`list-style-type`](/fr/docs/Web/CSS/list-style-type)&nbsp;: définit le type de puces à utiliser pour la liste, par exemple des puces carrées ou rondes pour une liste non ordonnée ou bien des nombres, des lettres ou des chiffres romains pour une liste ordonnée.
- [`list-style-position`](/fr/docs/Web/CSS/list-style-position)&nbsp;: définit si les puces seront disposées à l'intérieur ou à l'extérieur du début de l'élément de liste.
- [`list-style-image`](/fr/docs/Web/CSS/list-style-image)&nbsp;: permet d'utiliser une image personnalisée pour la puce, plutôt qu'un simple carré ou rond.

### Styles de puces

Comme mentionné ci-dessus, la propriété [`list-style-type`](/fr/docs/Web/CSS/list-style-type) vous permet de définir le type de puce à utiliser. Dans notre exemple, nous avons défini une liste ordonnée utilisant les chiffres romains en majuscules avec&nbsp;:

```css
ol {
  list-style-type: upper-roman;
}
```

Cela donne l'apparence suivante&nbsp;:

![Une liste ordonnée avec les puces placées à l'extérieur du texte de l'élément de la liste.](outer-bullets.png)

Vous pouvez trouver beaucoup plus d'options en consultant la page de référence [`list-style-type`](/fr/docs/Web/CSS/list-style-type).

### Position des puces

La propriété [`list-style-position`](/fr/docs/Web/CSS/list-style-position) définit si les puces apparaissent à l'extérieur ou à l'intérieur de la liste devant chaque élément. Par défaut, la valeur est `outside` et les puces apparaissent comme ci-dessus.

Si vous choisissez la valeur `inside`, les puces seront disposées dans la ligne&nbsp;:

```css
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

![Une liste ordonnée avec les puces intégrées au texte des éléments de la liste.](inner-bullets.png)

### Utilisation d'une puce image personnalisée

La propriété [`list-style-image`](/fr/docs/Web/CSS/list-style-image) vous permet d'utiliser une image pour personnaliser vos puces. La syntaxe est assez simple&nbsp;:

```css
ul {
  list-style-image: url(star.svg);
}
```

Cependant, cette propriété est un peu limitée en termes de contrôle de la position, de la taille, etc. des puces. Il vaut mieux utiliser la famille de propriétés de [`background`](/fr/docs/Web/CSS/background), dont vous apprendrez beaucoup plus dans le module [Blocs de base en CSS](/fr/docs/Learn/CSS/Building_blocks). Pour l'instant, voici un avant-goût&nbsp;!

Dans notre exemple achevé, nous avons appliqué un style à la liste non ordonnée (en plus de ce que vous avez déjà vu ci-dessus) comme ceci&nbsp;:

```css
ul {
  padding-left: 2rem;
  list-style-type: none;
}

ul li {
  padding-left: 2rem;
  background-image: url(star.svg);
  background-position: 0 0;
  background-size: 1.6rem 1.6rem;
  background-repeat: no-repeat;
}
```

Voici ce que nous avons fait&nbsp;:

- Abaissé la valeur de la propriété [`padding-left`](/fr/docs/Web/CSS/padding-left) de l'élément [`<ul>`](/fr/docs/Web/HTML/Element/ul) de `40px` par défaut à `20px`, puis défini la même valeur pour les éléments de la liste. Ainsi, l'ensemble des éléments d'une liste non ordonnée seront toujours alignés avec les éléments d'une liste ordonnée et les descriptions d'une liste descriptive&nbsp;; tout en disposant d'un remplissage où les images d'arrière-plan seront placées. Si nous ne le faisions pas, les images d'arrière-plan et le texte de l'élément de liste se superposeraient, ce qui ferait brouillon.
- Défini la propriété [`list-style-type`](/fr/docs/Web/CSS/list-style-type) à `none`, ainsi aucune puce par défaut n'apparaît. Nous allons utiliser les propriétés de [`background`](/fr/docs/Web/CSS/background) pour gérer les puces.
- Inséré une puce pour chaque élément de la liste désordonnée. Les propriétés pertinentes sont les suivantes&nbsp;:

  - [`background-image`](/fr/docs/Web/CSS/background-image)&nbsp;: la référence du chemin d'accès au fichier image utilisé comme puce.
  - [`background-position`](/fr/docs/Web/CSS/background-position)&nbsp;: l'emplacement de l'image dans l'arrière-plan de l'élément sélectionné — dans ce cas, puisque nous disons `0 0`, la puce apparaîtra dans le coin supérieur gauche de chaque élément de la liste.
  - [`background-size`](/fr/docs/Web/CSS/background-size)&nbsp;: la taille de l'image d'arrière-plan. L'idéal est que les puces soient de même taille que les éléments de la liste (ou légèrement plus petites ou plus grandes). Nous utilisons une taille de `1.6rem` (`16px`), qui correspond bien au remplissage de `20px` dans lequel la puce est placée — 16px plus 4px d'espace entre la puce et le texte de l'élément de liste fonctionne bien.
  - [`background-repeat`](/fr/docs/Web/CSS/background-repeat)&nbsp;: par défaut, les images d'arrière-plan se répètent jusqu'à avoir rempli l'espace d'arrière-plan disponible. Nous voulons l'insertion d'une seule copie de l'image sans répétition, donc nous choisissons la valeur `no-repeat`.

Ceci nous donne le résultat suivant&nbsp;:

![Une liste non ordonnée avec les puces définies comme de petites images d'étoiles.](list_formatting.png)

### Raccourci de style de liste

Les 3 propriétés mentionnées ci-dessus peuvent toutes être définies en utilisant la propriété abrégée [`list-style`](/fr/docs/Web/CSS/list-style). Par exemple, le CSS suivant&nbsp;:

```css
ul {
  list-style-type: square;
  list-style-image: url(example.png);
  list-style-position: inside;
}
```

peut être remplacé par cela&nbsp;:

```css
ul {
  list-style: square url(example.png) inside;
}
```

Les valeurs peuvent être listées dans n'importe quel ordre et vous pouvez en mentionner une, deux ou les trois (les valeurs par défaut utilisées pour les propriétés non-citées sont `disc`, `none` et `outside`). Si un `type` et une `image` sont donnés, le type sera affiché en solution de repli dans le cas où l'image ne peut pas être chargée pour une raison quelconque.

## Contrôle du numérotage des listes

Parfois, vous pouvez vouloir numéroter différemment une liste ordonnée — par exemple, à partir d'un nombre autre que 1, en comptant à rebours ou en comptant par pas supérieur à 1. HTML et CSS ont quelques outils pour vous le permettre.

### Numéro de départ

L'attribut [`start`](/fr/docs/Web/HTML/Element/ol#attr-start) vous permet de commencer le numérotage de la liste à partir d'un nombre autre que 1.

```html
<ol start="4">
  <li>
    Faire griller le pain pitta, laisser refroidir, puis le trancher sur le
    côté.
  </li>
  <li>
    Frire l'halloumi dans une poêle plate antiadhésive, jusqu'à ce qu'il soit
    doré des deux côtés.
  </li>
  <li>Laver et hacher la salade.</li>
  <li>
    Mettre la salade, l'houmous et l'halloumi frit entre les tranches de pain.
  </li>
</ol>
```

#### Résultat

{{ EmbedLiveSample('', '100%', 150) }}

### Numérotation inversée

L'attribut [`reversed`](/fr/docs/Web/HTML/Element/ol#attr-reversed) inverse la numérotation de la liste.

```html
<ol start="4" reversed>
  <li>
    Faire griller le pain pitta, le laisser refroidir, puis le trancher sur le
    côté.
  </li>
  <li>
    Frire l'halloumi dans une poêle plate antiadhésive, jusqu'à ce qu'il soit
    doré des deux côtés.
  </li>
  <li>Laver et hacher la salade.</li>
  <li>
    Mettre la salade, l'houmous et l'halloumi frit entre les tranches de pain.
  </li>
</ol>
```

#### Résultat

{{ EmbedLiveSample('', '100%', 150) }}

> **Note :** S'il existe plus d'éléments dans une liste inversée que la valeur de l'attribut `start`, la numérotation continuera à zéro, puis à des valeurs négatives.

### Valeurs individualisées

L'attribut [`value`](/fr/docs/Web/HTML/Element/ol#attr-value) vous permet de numéroter les éléments de liste avec des valeurs numériques de votre choix.

```html
<ol>
  <li value="2">
    Faire griller le pain pitta, laisser refroidir, puis le trancher sur le
    côté.
  </li>
  <li value="4">
    Frire l'halloumi dans une poêle plate antiadhésive, jusqu'à ce qu'il soit
    doré des deux côtés.
  </li>
  <li value="6">Laver et hacher la salade.</li>
  <li value="8">
    Mettre la salade, l'houmous et l'halloumi frit entre les tranches de pain.
  </li>
</ol>
```

#### Résultat

{{ EmbedLiveSample('', '100%', 150) }}

> **Note :** Même si vous utilisez une propriété [`list-style-type`](/fr/docs/Web/CSS/list-style-type) avec des caractères non‑numériques, vous devez toujours utiliser les valeurs numériques équivalentes avec l'attribut `value`.

## Apprentissage actif&nbsp;: définir le style d'une liste imbriquée

Dans cette session d'apprentissage actif, vous devez utiliser ce que vous avez appris ci-dessus en donnant un certain style à une liste imbriquée. Avec le code HTML fourni, nous vous demandons de&nbsp;:

1. Mettre une puce carrée devant les éléments de la liste non ordonnée.
2. Donner aux éléments des listes, ordonnées ou non, une hauteur de ligne de 1.5 fois la taille de la police de caractères.
3. Donner à la liste ordonnée une puce alphabétique en minuscules.
4. Ne pas hésiter à jouer avec l'exemple de liste autant que vous le souhaitez, en expérimentant les types de puces, l'espacement ou tout ce que vous pouvez trouver.

Si vous faites une erreur, vous pourrez toujours tout remettre à zéro avec le bouton _Réinitialiser_. Si vous êtes vraiment bloqué, pressez le bouton _Voir la solution_ pour voir une réponse possible.

```html hidden
<div
  class="body-wrapper"
  style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>Zone de saisie du HTML</h2>
  <textarea
    id="code"
    class="html-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
<ul>
  <li>D'abord, allumez la chandelle.</li>
  <li>Ensuite, ouvrez la boîte.</li>
  <li>Puis, mettez les trois objets magiques dans la
      boîte, dans cet ordre exactement, pour terminer
      le charme&nbsp;:
    <ol>
      <li>le livre de sorts,</li>
      <li>la baguette brillante,</li>
      <li>la statue du lutin.</li>
    </ol>
  </li>
</ul></textarea
  >

  <h2>Zone de saisie de la CSS</h2>
  <textarea
    id="code"
    class="css-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"></textarea>

  <h2>Zone de rendu</h2>
  <div
    class="output"
    style="width: 90%;height: 12em;padding: 10px;border: 1px solid #0095dd;overflow: auto;"></div>
  <div class="controls">
    <input
      id="reset"
      type="button"
      value="Réinitialiser"
      style="margin: 10px 10px 0 0;" />
    <input
      id="solution"
      type="button"
      value="Voir la solution"
      style="margin: 10px 0 0 10px;" />
  </div>
</div>
```

```js hidden
var htmlInput = document.querySelector(".html-input");
var cssInput = document.querySelector(".css-input");
var reset = document.getElementById("reset");
var htmlCode = htmlInput.value;
var cssCode = cssInput.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

var styleElem = document.createElement("style");
var headElem = document.querySelector("head");
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", function () {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

solution.addEventListener("click", function () {
  htmlInput.value = htmlCode;
  cssInput.value =
    "ul {\n list-style-type: square;\n}\n\nul li, ol li {\n line-height: 1.5;\n}\n\nol {\n list-style-type: lower-alpha\n}";
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('', 700, 800) }}

## Voir aussi

Les compteurs CSS fournissent des outils avancés pour personnaliser le comptage et le style des listes, mais ils sont assez complexes. Nous vous recommandons de les examiner si vous voulez vous étendre sur le sujet. Voir&nbsp;:

- [`@counter-style`](/fr/docs/Web/CSS/@counter-style)
- [`counter-increment`](/fr/docs/Web/CSS/counter-increment)
- [`counter-reset`](/fr/docs/Web/CSS/counter-reset)

## Testez vos compétences&nbsp;!

Vous avez atteint la fin de cet article, mais pourriez-vous retenir les informations les plus importantes&nbsp;? Vous trouverez une évaluation de vos compétences à la fin de ce module — voir [Composition de la page d'accueil d'une école de communauté](/fr/docs/Learn/CSS/Styling_text/Typesetting_a_homepage). Peut-être que vous voudriez revoir les autres articles avant de l'essayer.

## Résumé

Les listes sont relativement faciles à saisir lorsque vous connaissez les quelques principes de base associés et les propriétés spécifiques. Dans le prochain article, nous allons évoquer des techniques de style des liens.

{{PreviousMenuNext("Learn/CSS/Styling_text/Fundamentals", "Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text")}}
