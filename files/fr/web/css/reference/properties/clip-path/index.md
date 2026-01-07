---
title: clip-path
slug: Web/CSS/Reference/Properties/clip-path
original_slug: Web/CSS/clip-path
l10n:
  sourceCommit: 82ef8b5c50a0045add71f1a06f5be1db781aede4
---

La propriété [CSS](/fr/docs/Web/CSS) **`clip-path`** empêche une portion d'un élément d'être affichée en définissant une région de rognage. Seule la zone spécifique de l'élément à l'intérieur de la région sera affichée, le reste sera masqué.

{{InteractiveExample("Démonstration CSS&nbsp;: clip-path")}}

```css interactive-example-choice
clip-path: circle(40%);
```

```css interactive-example-choice
clip-path: ellipse(130px 140px at 10% 20%);
```

```css interactive-example-choice
clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
```

```css interactive-example-choice
clip-path: path("M 0 200 L 0,75 A 5,5 0,0,1 150,75 L 200 200 z");
```

```css interactive-example-choice
clip-path: rect(5px 145px 160px 5px round 20%);
```

```css interactive-example-choice
clip-path: xywh(0 5px 100% 75% round 15% 0);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <img
      class="transition-all"
      id="example-element"
      src="/shared-assets/images/examples/balloon-small.jpg"
      width="150" />
    Mon compagnon et moi avions convenu que je passerais le chercher chez lui
    après le dîner, au plus tard à onze heures. Ce jeune Français athlétique
    fait partie d'un petit groupe de sportifs parisiens qui se sont pris de
    passion pour la « montgolfière ». Après avoir épuisé toutes les sensations
    que l'on peut trouver dans les sports ordinaires, même celles de
    l'«&nbsp;automobilisme&nbsp;» à une vitesse vertigineuse, les membres de
    l'«&nbsp;Aéro Club&nbsp;» recherchent désormais dans les airs, où ils se
    livrent à toutes sortes d'exploits audacieux, l'excitation palpitante qu'ils
    ne trouvent plus sur terre.
  </div>
</section>
```

```css interactive-example
section {
  align-items: flex-start;
}

.example-container {
  text-align: left;
  padding: 20px;
}

#example-element {
  float: left;
  width: 150px;
  margin: 20px;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
clip-path: none;

/* Valeurs pointant vers une image */
/* Type <clip-source> */
clip-path: url(resources.svg#c1);

/* Valeurs de boîte */
clip-path: border-box;
clip-path: content-box;
clip-path: fill-box;
clip-path: margin-box;
clip-path: padding-box;
clip-path: stroke-box;
clip-path: view-box;

/* Valeurs géométriques <basic-shape> */
/* avec une notation fonctionnelle */
clip-path: inset(100px 50px);
clip-path: circle(50px at 0 100px);
clip-path: ellipse(50px 60px at 10% 20%);
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
clip-path: path(
  "M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z"
);
clip-path: rect(5px 5px 160px 145px round 20%);
clip-path: shape(from 0% 0%, line to 100% 0%, line to 50% 100%, close);
clip-path: xywh(0 5px 100% 75% round 15% 0);

/* Combinaison boîte & géométrie */
clip-path: padding-box circle(50px at 0 100px);

/* Valeurs globales */
clip-path: inherit;
clip-path: initial;
clip-path: revert;
clip-path: revert-layer;
clip-path: unset;
```

La propriété `clip-path` est définie avec une ou plusieurs des valeurs listées ci-après.

### Valeurs

- `<clip-source>`
  - : Une {{cssxref("url_value", "&lt;url&gt;")}} qui référence un élément [SVG](/fr/docs/Web/SVG) {{SVGElement("clipPath")}}.

- {{cssxref("&lt;basic-shape&gt;")}}
  - : Une forme dont la taille et la position sont définies par la valeur `<geometry-box>`. Si aucune valeur de géométrie n'est fournie, `border-box` sera utilisée comme boîte de référence. La forme peut être définie avec l'une de ces valeurs&nbsp;:
    - {{cssxref("basic-shape/inset","inset()")}}
      - : Définit un rectangle.
    - {{cssxref("basic-shape/circle","circle()")}}
      - : Définit un cercle avec un rayon et une position.
    - {{cssxref("basic-shape/ellipse","ellipse()")}}
      - : Définit une ellipse avec ses deux demi-rayons et une position.
    - {{cssxref("basic-shape/polygon","polygon()")}}
      - : Définit un polygone en utilisant une règle de remplissage SVG et un ensemble d'arêtes.
    - {{cssxref("basic-shape/path","path()")}}
      - : Définit une forme en utilisant une règle de remplissage SVG optionnelle et une définition de chemin SVG.
    - {{cssxref("basic-shape/rect","rect()")}}
      - : Définit un rectangle en utilisant les distances spécifiées par rapport aux bords de la boîte de référence.
    - {{cssxref("basic-shape/shape","shape()")}}
      - : Définit une forme en utilisant une règle de remplissage SVG optionnelle et des commandes de forme pour les lignes, les courbes et les arcs.
    - {{cssxref("basic-shape/xywh","xywh()")}}
      - : Définit un rectangle en utilisant les distances spécifiées par rapport aux bords supérieur et gauche de la boîte de référence et les dimensions spécifiées de la largeur et de la hauteur du rectangle.

- `<geometry-box>`
  - : Si cette valeur est combinée avec une valeur `<basic-shape>`, elle définira la boîte de référence dans laquelle placer la forme. Si elle est utilisée seule, ce sont les bords de la boîte (ainsi que les éventuels coins arrondis définis avec {{cssxref("border-radius")}}) qui sont utilisés comme ligne de rognage. Cette composante peut prendre les valeurs suivantes&nbsp;:
    - `margin-box`
      - : La [boîte de marge](/fr/docs/Web/CSS/Guides/Shapes/From_box_values#margin-box) est utilisée comme boîte de référence.
    - `border-box`
      - : La [boîte de bordure](/fr/docs/Web/CSS/Guides/Shapes/From_box_values#border-box) est utilisée comme boîte de référence.
    - `padding-box`
      - : La [boîte de remplissage (<i lang="en">padding</i>)](/fr/docs/Web/CSS/Guides/Shapes/From_box_values#padding-box) est utilisée comme boîte de référence.
    - `content-box`
      - : La [boîte de contenu](/fr/docs/Web/CSS/Guides/Shapes/From_box_values#content-box) est utilisée comme boîte de référence.
    - `fill-box`
      - : La boîte englobante (<i lang="en">bounding box</i>) est utilisée comme boîte de référence.
    - `stroke-box`
      - : La boîte de contour de la boîte englobante est utilisée comme boîte de référence.
    - `view-box`
      - : La zone d'affichage SVG la plus proche est utilisée comme boîte de référence. Si un attribut {{SVGAttr("viewBox")}} est défini pour l'élément qui crée la zone d'affichage SVG, la boîte de référence est située à l'origine du système construit par `viewBox` et les dimensions de la boîte de référence sont les valeurs de hauteur et de largeur de l'attribut `viewBox`.

- `none`
  - : Aucun chemin de rognage n'est créé.

> [!NOTE]
> Si [la valeur calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing) est différente de `none`, cela entraînera la création d'un nouveau [contexte d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) (de la même façon qu'{{cssxref("opacity")}} avec des valeurs différentes de `1`).

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Formes de base et boîtes de géométrie

Dans cet exemple, deux triangles sont créés en définissant un `polygon()` comme chemin de rognage sur des éléments {{htmlelement("div")}}. Chacun a un fond de couleur unie et une épaisse {{cssxref("border")}}. Le deuxième élément `<div>` a sa boîte de référence définie sur `content-box`&nbsp;:

#### HTML

```html live-sample___shapes1 live-sample___shapes2 live-sample___shapes3
<div></div>
<div></div>
```

#### CSS

```css hidden live-sample___shapes1 live-sample___shapes2 live-sample___shapes3
body {
  display: flex;
  gap: 20px;
  flex-flow: row wrap;
}
```

```css live-sample___shapes1 live-sample___shapes2 live-sample___shapes3
div {
  height: 200px;
  width: 200px;
  box-sizing: border-box;
  background-color: rebeccapurple;
  border: 20px solid magenta;

  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

div:last-of-type {
  clip-path: content-box polygon(50% 0, 100% 100%, 0 100%);
}
```

#### Résultat

{{EmbedLiveSample("shapes1", "", "230")}}

Pour le premier triangle, nous n'avons pas spécifié de boîte de référence ; elle est donc par défaut `border-box`, avec les positions 0 % et 100 % situées sur le bord extérieur de la bordure. Dans le deuxième exemple, nous avons défini la `<geometry-box>` sur `content-box`, ce qui signifie que la boîte de référence pour la forme de base est le bord extérieur de la zone de contenu, qui se trouve à l'intérieur de la boîte de remplissage. Comme notre exemple n'a pas de `padding`, il s'agit du bord intérieur de la bordure.

### Les fonctions `shape()` et `path()`

En s'appuyant sur l'exemple précédent, nous créons le même triangle avec différentes valeurs de `<basic-shape>`, démontrant comment les fonctions {{cssxref("basic-shape/shape", "shape()")}} et {{cssxref("basic-shape/path", "path()")}} peuvent également être utilisées pour créer des chemins de rognage, `shape()` étant une solution plus flexible.

Nous utilisons `path()` pour définir le chemin de rognage du premier élément, et `shape()` pour le second, tous deux utilisant la valeur par défaut `border-box` comme boîte de référence&nbsp;:

```css live-sample___shapes2 live-sample___shapes3
div {
  clip-path: path("M100 0 L200 200 L0 200 Z");
}

div:last-of-type {
  clip-path: shape(from 50% 0, line to 100% 100%, line to 0 100%, close);
}
```

A la suite, le chemin défini avec la fonction `shape()` grandit avec l'élément, tandis que la version `path()` ne le fait pas&nbsp;:

{{EmbedLiveSample("shapes2", "", "230")}}

Parce que la fonction `shape()` permet d'utiliser des valeurs {{cssxref("percentage")}} (et [des propriétés personnalisées](/fr/docs/Web/CSS/Reference/Properties/--*) aussi), elle est plus robuste.

Nous allons le démontrer en augmentant la taille de l'élément sous-jacent&nbsp;:

```css live-sample___shapes3
div {
  width: 250px;
  height: 250px;
}
```

{{EmbedLiveSample("shapes3", "", "280")}}

La visibilité, ou du moins la visibilité partielle, des quatre côtés de la bordure dans l'exemple de chemin de rognage défini par la fonction `shape()` est due aux valeurs de pourcentage permettant au chemin de grandir avec l'élément. Dans la version `path()`, l'élément a grandi, mais pas la forme. En conséquence, les bordures supérieure et gauche sont partiellement visibles tandis que les bordures droite et inférieure sont rognées.

### Le SVG comme source de rognage

Dans cet exemple, nous définissons des éléments SVG {{svgElement("clipPath")}} à utiliser comme source de `clip-path`.

#### HTML

Nous incluons deux {{htmlElement("div")}} éléments et un élément `<svg>` contenant deux éléments `<clipPath>`. Un `<clipPath>` contient quatre éléments {{svgElement("rect")}} qui définissent ensemble des fenêtres, laissant un croisement d'espace vide au milieu, et l'autre contient deux éléments `<rect>` qui se croisent.

```html
<svg height="0" width="0">
  <defs>
    <clipPath id="window">
      <rect y="0" x="0" width="80" height="80" />
      <rect y="0" x="120" width="80" height="80" />
      <rect y="120" x="0" width="80" height="80" />
      <rect y="120" x="120" width="80" height="80" />
    </clipPath>
    <clipPath id="cross">
      <rect y="0" x="80" width="40" height="200" />
      <rect y="80" x="0" width="200" height="40" />
    </clipPath>
  </defs>
</svg>

<div class="window">Fenêtre</div>
<div class="cross">Croix</div>
```

#### CSS

Nous utilisons [flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout) pour permettre à nos éléments de s'asseoir côte à côte avec un espace entre eux, s'il y a de l'espace disponible. Nous définissons une image de fond {{cssxref("gradient/conic-gradient", "conic-gradient()")}} sur les deux éléments `<div>`, fournissant un visuel intéressant à rogner, ainsi qu'une {{cssxref("border")}}.

```css
body {
  display: flex;
  gap: 20px;
  flex-flow: row wrap;
  font: 2em sans-serif;
}

div {
  width: 200px;
  height: 200px;
  background-image: conic-gradient(
    at center,
    rebeccapurple,
    green,
    lightblue,
    rebeccapurple
  );

  border: 5px solid;
  box-sizing: border-box;
}
```

Nous définissons ensuite l'`id` du `<clipPath>` comme la `<clip-source>`. Nous centrons le texte dans l'exemple `cross` verticalement en utilisant {{cssxref("align-content")}}, sinon le texte serait rogné, comme c'est le cas dans l'exemple `window`.

```css
.window {
  clip-path: url("#window");
}

.cross {
  clip-path: url("#cross");
  align-content: center;
}
```

#### Résultat

{{EmbedLiveSample("SVG as clip source", "", "230")}}

Les éléments, y compris leur bordure et leur texte, sont rognés, seules les parties se chevauchant avec les éléments `<clipPath>` étant dessinées sur la page.

### Les différents types de valeurs

Cet exemple démontre les différentes valeurs de la propriété `clip-path` rognant une {{htmlelement("img")}} HTML.

#### HTML

Le HTML comprend une `<img>` qui sera rognée, un `<clipPath>` en forme d'étoile, et un élément {{htmlelement("select")}} pour choisir une valeur de propriété `clip-path`.

```html
<img
  id="clipped"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<svg height="0" width="0">
  <defs>
    <clipPath id="star">
      <path d="M100,0 42,180 196,70 4,70 158,180z" />
    </clipPath>
  </defs>
</svg>

<select id="clipPath">
  <option value="none">none</option>
  <option value="circle(100px at 110px 100px)">circle</option>
  <option value="url(#star)" selected>star</option>
  <option value="inset(20px round 20px)">inset</option>
  <option value="rect(20px 150px 200px 20px round 10%)">rect</option>
  <option value="xywh(0 20% 90% 67% round 0 0 5% 5px)">xywh</option>
  <option value="path('M 0 200 L 0,110 A 110,90 0,0,1 240,100 L 200 340 z')">
    path
  </option>
</select>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

Le rendu initial inclut l'étoile comme source de `clip-path`.

```css
#clipped {
  margin-bottom: 20px;
  clip-path: url("#star");
}
```

#### JavaScript

Lorsque vous sélectionnez une nouvelle option dans le menu `<select>`, un gestionnaire d'événements met à jour la valeur de `clip-path` définie sur le `<img>`.

```js
const clipPathSelect = document.getElementById("clipPath");
clipPathSelect.addEventListener("change", (evt) => {
  const path = evt.target.value;
  document.getElementById("clipped").style.clipPath = path;
  log(`clip-path: ${path};`);
});
```

```js hidden
function log(text) {
  const logElement = document.querySelector("#log");
  logElement.innerText = `${text}`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### Résultat

{{EmbedLiveSample("Complete_example", 230, 300)}}

Sélectionnez différentes options pour changer la valeur de `clip-path`.

> [!NOTE]
> Quand il est possible de définir un chemin de texte, si vous souhaitez rogner une image d'arrière-plan sur du texte plutôt que sur une forme, consultez la propriété {{cssxref("background-clip")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef("clip-rule")}}
- {{CSSxRef("mask")}}
- {{CSSxRef("filter")}}
- {{cssxref("background-clip")}}
- [Introduction au découpage CSS](/fr/docs/Web/CSS/CSS_masking/Clipping)
- Le module de [masquage CSS](/fr/docs/Web/CSS/Guides/Masking)
- L'attribut SVG {{SVGAttr("clip-path")}}
- [Appliquer des effets SVG sur du contenu HTML](/fr/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
