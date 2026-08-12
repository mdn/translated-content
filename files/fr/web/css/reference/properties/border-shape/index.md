---
title: Propriété CSS `border-shape`
short-title: border-shape
slug: Web/CSS/Reference/Properties/border-shape
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`border-shape`** définit la forme de la bordure d'un élément en utilisant des valeurs {{CSSxRef("&lt;basic-shape&gt;")}}.

## Syntaxe

```css
/* Mot-clé */
border-shape: none;

/* Une seule valeur <basic-shape> */
border-shape: circle(50%);
border-shape: rect(10px 460px 130px 20px round 20px);
border-shape: shape(
  from 5% 0.5rem,
  arc to 80px 1pt of 10% ccw large rotate 25deg
);

/* Deux valeurs <basic-shape> */
border-shape: circle(50%) ellipse(40% 30%);
border-shape: polygon(0% 0%, 0% 100%, 100% 0%)
  polygon(10% 10%, 10% 70%, 70% 10%);

/* Valeurs <basic-shape> et <geometry-box> */
border-shape: circle(50%) border-box ellipse(40% 30%) view-box;
border-shape: rect(5px 198px 189px 0px round 20px) view-box circle(50%);
border-shape: path(
    "M 35,95 C 35,50 60,15 100,20 C 120,5 160,5 180,22 C 200,5 250,5 270,22 C 295,5 340,5 360,22 C 395,10 440,35 440,75 C 455,90 450,120 430,128 C 400,145 360,145 330,130 C 300,145 260,145 230,130 C 200,145 160,145 130,130 C 80,142 35,120 35,95 Z"
  )
  view-box;

/* Valeurs globales */
border-shape: inherit;
border-shape: initial;
border-shape: revert;
border-shape: revert-layer;
border-shape: unset;
```

La propriété `border-shape` peut être définie en utilisant le mot-clé `none`, ou une ou deux définitions de forme séparées par des espaces, chacune consistant en une valeur `<basic-shape>` ou une valeur `<basic-shape>` et une valeur `<geometry-box>`.

### Valeurs

- `none`
  - : Définit qu'aucune forme de bordure n'est définie. Il s'agit de la valeur initiale.
- {{CSSxRef("&lt;basic-shape&gt;")}}
  - : Définit la forme de la bordure en utilisant l'une des fonctions `<basic-shape>`.
- [`<geometry-box>`](/fr/docs/Web/CSS/Reference/Values/box-edge#geometry-box) {{Optional_Inline}}
  - : Définit la boîte de référence par rapport à laquelle la forme de la bordure est dessinée. Si elle n'est pas incluse, la boîte de géométrie de référence de la forme par défaut est&nbsp;:
    - `half-border-box` si une seule forme de base est définie, ce qui signifie que toute bordure définie est dessinée au-dessus du chemin de la forme, le chemin passant par son centre.
    - `border-box` pour la première forme (externe) et `padding-box` pour la deuxième forme (interne) si deux formes de base sont définies. La bordure occupe alors la zone entre les deux formes.

## Description

La propriété `border-shape` peut être appliquée aux éléments pour créer des conteneurs de forme précise, tels que des bulles de dialogue, comme illustré ici, ou des infobulles abstraites, sans avoir à utiliser de solutions de contournement.

```html hidden live-sample___speech-bubble-demo
<img src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg" />
<p>Je suis un léopard</p>
```

```css hidden live-sample___speech-bubble-demo
html {
  height: 100%;
}

body {
  margin: 0;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  display: block;
  width: 300px;
  anchor-name: --leopard;
  position: relative;
  top: 45px;
}

p {
  font-family: "Helvetica", "Arial";
  font-size: 1.3rem;
  padding: 15px 0;
  margin: 0 0 -30px -110px;
  background-color: chartreuse;
  border: 7px solid rgb(50 50 50);
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.75);

  width: 250px;
  height: 100px;
  border-shape: shape(
      from 50.08% 0%,
      curve to 97.71% 25.55% with 72.95% 0%/93.9% 8.76%,
      curve to 97.71% 62.04% with 100.76% 37.96%/100.76% 49.64%,
      curve to 50.08% 83.94% with 93.9% 75.18%/72.95% 83.94%,
      curve to 23.41% 82.48% with 36.75% 83.94%/27.22% 83.21%,
      curve to 17.7% 100% with 21.51% 87.59%/19.22% 94.16%,
      curve to 11.98% 82.48% with 16.17% 94.16%/13.89% 87.59%,
      curve to 1.31% 62.04% with 13.5% 81.75%/3.98% 76.64%,
      curve to 2.45% 25.55% with -0.59% 49.64%/-0.59% 37.96%,
      curve to 50.08% 0% with 6.26% 8.76%/27.22% 0%,
      close
    )
    content-box;

  text-align: center;
  line-height: 4;

  position: absolute;
  position-anchor: --leopard;
  bottom: anchor(top);
  left: anchor(right);
}
```

{{EmbedLiveSample("speech-bubble-demo", "100%", 240)}}

Notez comment la `border-shape` appliquée s'accorde bien avec la bordure ({{CSSxRef("border")}}) et l'ombre ({{CSSxRef("box-shadow")}}) définies sur l'élément — elles suivent la forme de la bordure.

### Prise en charge des fonctions de forme

Vous pouvez définir la `border-shape` d'un élément (y compris celle d'un élément en ligne ou pseudo-élément) en utilisant l'une des fonctions {{CSSxRef("&lt;basic-shape&gt;")}}. Ces fonctions incluent&nbsp;:

- {{CSSxRef("basic-shape/inset","inset()")}}, {{CSSxRef("basic-shape/rect","rect()")}} et {{CSSxRef("basic-shape/xywh","xywh()")}}&nbsp;: Fournissent différentes façons de définir des formes rectangulaires de base.
- {{CSSxRef("basic-shape/circle","circle()")}}&nbsp;: Définit des formes circulaires.
- {{CSSxRef("basic-shape/ellipse","ellipse()")}}&nbsp;: Définit des formes elliptiques.
- {{CSSxRef("basic-shape/path","path()")}}&nbsp;: Définit tout type de forme en utilisant la syntaxe de chaîne de caractères de [chemin SVG](/fr/docs/Web/SVG/Reference/Element/path). La syntaxe SVG path a des limitations — elle ne peut utiliser que des valeurs en pixels et le chemin doit être défini comme une seule chaîne de caractères, donc les propriétés personnalisées ne peuvent pas être incluses avec {{CSSxRef("var()")}}. Il est conseillé d'utiliser `shape()` à la place.
- {{CSSxRef("basic-shape/polygon","polygon()")}}&nbsp;: Définit tout type de polygone à l'aide de paires de coordonnées de sommets. Si la forme souhaitée comporte des courbes lisses, il est recommandé d'utiliser la fonction `shape()`.
- {{CSSxRef("basic-shape/shape","shape()")}}&nbsp;: Définit tout type de forme. La syntaxe de `shape()` est plus compatible avec CSS que celle de `path()` et résout ses limitations.

Vous pouvez également inclure un mot-clé optionnel [`<geometry-box>`](/fr/docs/Web/CSS/Reference/Values/box-edge#geometry-box) après chaque valeur `<basic-shape>` pour définir la boîte de référence par rapport à laquelle les formes doivent être dessinées.

### Modes de trait et de remplissage

La propriété `border-shape` a les deux modes suivants&nbsp;:

- Si une seule `<basic-shape>` est fournie dans la valeur, cette forme définit la forme de la bordure de l'élément, les styles de bordure définis étant dessinés comme un trait autour de la forme, comme illustré dans l'exemple précédent. C'est ce qu'on appelle le **mode trait**.
- Si deux `<basic-shape>` sont fournis dans la valeur, la première forme définit la limite extérieure de la bordure, la deuxième forme définit la limite intérieure de la bordure, et toute couleur de bordure définie remplit la zone entre les deux limites. C'est ce qu'on appelle le **mode remplissage**.

> [!NOTE]
> Évitez de définir une forme pour la limite intérieure qui soit plus grande que la limite extérieure. Si vous le faites, la zone de la bordure ne s'affiche pas correctement&nbsp;; vous risquez de ne voir aucun remplissage de bordure ou qu'une forme soit affichée derrière l'autre.

### Effet sur la disposition et le rendu

La propriété `border-shape` crée un effet purement visuel — la disposition de l'élément est toujours calculée en utilisant la définition de boîte rectangulaire sous-jacente, et le flux de contenu n'est pas affecté.

Le contenu et l'arrière-plan de l'élément sont découpés par la propriété `border-shape` (la forme intérieure en mode remplissage). Lorsque la `border-shape` définie a la même taille ou est plus petite que le contenu/l'arrière-plan, vous n'avez pas besoin d'ajuster la boîte de référence, sauf si vous souhaitez créer un certain effet de décalage. Cependant, lorsque la `border-shape` définie est plus grande que le contenu/l'arrière-plan, vous pouvez voir des écarts entre le bord de l'arrière-plan et la ou les formes. Dans ce cas, vous devez peut-être utiliser une boîte de référence différente pour corriger l'affichage (voir [Gérer les `border-shapes` plus grandes que l'arrière-plan de l'élément](#gérer_les_border-shapes_plus_grandes_que_larriere-plan_de_lelement) pour plus d'informations).

### Limitations sur les styles de bordure appliqués aux formes de bordure

Tous les styles de bordure ne sont pas appliqués aux éléments ayant la propriété `border-shape` définie. La liste suivante explique comment chaque propriété est affectée&nbsp;:

- {{CSSxRef("border-color")}}&nbsp;: Cette propriété est appliquée. Cependant, lorsque plusieurs bordures d'éléments ont des couleurs différentes appliquées, le navigateur choisit le premier bord avec une couleur de bordure, dans l'ordre suivant&nbsp;:

  - Bord du bloc de début
  - Bord en ligne de début
  - Bord du bloc de fin
  - Bord en ligne de fin

  Le navigateur applique ensuite la couleur de bordure de ce bord à l'ensemble de la `border-shape` rendue.

- {{CSSxRef("border-image")}}&nbsp;: N'est pas appliquée.
- {{CSSxRef("border-style")}}&nbsp;: N'est pas appliquée. Toutes les bordures sont rendues avec un style `solid`.
- {{CSSxRef("border-width")}}&nbsp;: En mode trait, `border-width` est appliqué directement à la `border-shape` rendue. Lorsque plusieurs bords ont des largeurs de bordure différentes, le navigateur choisit une largeur à appliquer à l'ensemble de la bordure en utilisant le même processus que celui décrit pour `border-color`.

  En mode remplissage, la zone de la bordure est définie par la différence entre les zones des formes extérieure et intérieure&nbsp;; par conséquent, `border-width` n'a pas d'effet direct sur la largeur de la bordure rendue. Cependant, il a un effet indirect — il affecte toujours la taille des boîtes de référence par rapport auxquelles les formes sont dessinées (sauf si vous définissez leur `<geometry-box>` sur `content-box` ou `padding-box`). Vous devez donc toujours tenir compte du `border-width` défini sur l'élément sous-jacent lors de l'utilisation du mode remplissage.

Par exemple, si un élément a les déclarations suivantes appliquées&nbsp;:

```css
border-shape: rect(5px 198px 189px 0px round 20px);
border-bottom: 30px dashed blue;
border-left: 40px dotted hotpink;
border-right: 50px double yellow;
```

La boîte rendue a une bordure rectangulaire avec des coins arrondis. Le style de la bordure est `solid`, car les autres styles sont ignorés. La largeur et la couleur de la bordure sont respectivement de `40px` et `hotpink` — c'est dû au fait que la propriété `border-left` applique des styles au bord de début en ligne (en supposant que la page a un {{CSSxRef("writing-mode")}} horizontal), qui est le premier bord avec des styles de bordure&nbsp;; celui-ci est choisi par le navigateur selon la liste de priorité décrite précédemment.

### Interaction avec `border-radius` et `corner-shape`

Les propriétés {{CSSxRef("border-radius")}} et {{CSSxRef("corner-shape")}} sont incompatibles avec `border-shape`. Lorsqu'une `border-shape` est définie sur un élément, tout `border-radius` défini est ignoré, donc `corner-shape` n'a également aucun effet. Les propriétés `border-shape` et `border-radius`/`corner-shape` ont des effets différents et sont utilisées séparément.

Si vous souhaitez utiliser des coins façonnés dans une `border-shape`, vous devez les dessiner directement dans la forme.

### `border-shape` contre `clip-path`

La propriété {{CSSxRef("clip-path")}} prend des valeurs similaires à `border-shape` et produit des effets similaires. Les deux propriétés peuvent être utilisées pour changer la forme d'un élément et donc la zone cliquable de l'élément, modifiant la limite à l'intérieur de laquelle les effets `:hover` et les évènements liés au pointeur sont activés.

Cependant, il existe une différence fondamentale dans le fonctionnement des deux propriétés&nbsp;:

- `clip-path` masque la zone de l'élément qui se trouve en dehors de la région définie par la forme fournie.
- `border-shape` modifie le rendu visuel de l'élément afin qu'il se trouve à l'intérieur de la région définie par la forme fournie.

Cela signifie que `border-shape` découpe le contenu de l'élément tout en laissant la propriété {{CSSxRef("overflow")}} contrôler son affichage, tandis que `clip-path` masque complètement le contenu de l'élément, de sorte que le contrôle du débordement n'est pas possible.

De plus, des propriétés telles que `box-shadow` et `outline` ne suivent pas la forme créée par `clip-path` — elle coupe l'extérieur de l'élément, ce qui signifie que ces effets sont tronqués de manière disgracieuse ou supprimés complètement. La propriété `border-shape`, en revanche, crée une bordure de forme différente qui est suivie correctement par ces effets.

### Gérer les `border-shapes` plus grandes que l'arrière-plan de l'élément

Comme mentionné précédemment, un problème avec `border-shape` est que lorsque vous définissez une forme qui est plus grande que le contenu/l'arrière-plan de l'élément, vous pouvez vous retrouver avec un écart entre l'arrière-plan et la bordure.

La méthode recommandée pour résoudre ce problème consiste à définir la `<geometry-box>` de référence sur `content-box`, puis à utiliser {{CSSxRef("padding")}} pour combler les écarts entre le contenu et la bordure. Par exemple&nbsp;:

```css
border-shape: shape(
    from 0% 0%,
    hline to 33%,
    arc by 33% 0% of 16% 20% small cw,
    hline to 100%,
    line to 100% 33%,
    arc by 0% 33% of 20% 16% small cw,
    line to 100% 100%,
    hline to 66%,
    arc by -33% 0% of 16% 20% small ccw,
    hline to 0%,
    line to 0% 66%,
    arc by 0% -33% of 20% 16% small ccw,
    close
  )
  content-box;
padding: 24px;
```

De cette façon, le `padding` est défini à l'extérieur de la forme, ce qui la fait rétrécir et force l'arrière-plan à remplir les parties de la forme qui dépassent de la zone de contenu. Vous pouvez voir cette technique en action dans notre exemple de [menu de navigation en forme de pièce de puzzle irrégulière](/fr/docs/Web/CSS/Guides/Borders_and_box_decorations/Border_shape_nav_menu).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple de `border-shape` en mode trait

Cet exemple montre comment utiliser `border-shape` en mode trait.

#### HTML

Le balisage pour cet exemple contient un seul élément HTML {{HTMLElement("p")}}.

```html live-sample___basic-border-shape live-sample___basic-border-shape-fill
<p>Cercle</p>
```

#### CSS

```css hidden live-sample___basic-border-shape live-sample___basic-border-shape-fill live-sample___border-shape-select live-sample___animate-border-shape
html {
  height: 100%;
}

body {
  margin: 0;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  box-sizing: border-box;
  font-family: "Helvetica", "Arial";
  font-size: 1.6rem;
  padding: 40px 50px;
  background-color: chartreuse;
  display: flex;
  align-items: center;
}
```

Nous donnons à la boîte une largeur ({{CSSxRef("width")}}) de `fit-content` et un rapport d'aspect ({{CSSxRef("aspect-ratio")}}) de `1/1` pour que le contenu s'adapte parfaitement à l'intérieur d'un carré. Nous définissons également une bordure ({{CSSxRef("border")}}) noire épaisse et une ombre ({{CSSxRef("box-shadow")}}) avant de définir une forme de bordure (`border-shape`) de `circle(50%)` pour créer une bordure circulaire qui s'adapte parfaitement au contenu et à l'arrière-plan.

```css live-sample___basic-border-shape
p {
  width: fit-content;
  aspect-ratio: 1/1;
  border: 15px solid black;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.5);
  border-shape: circle(50%);
}
```

#### Résultat

{{EmbedLiveSample("basic-border-shape", "100%", 240)}}

Notez comment la bordure (`border`) et l'ombre (`box-shadow`) suivent parfaitement la forme définie.

### Utilisation simple de `border-shape` en mode remplissage

Cet exemple s'appuie sur le précédent et montre comment utiliser `border-shape` en mode remplissage pour créer une bordure remplie irrégulière.

Le HTML est le même que dans l'exemple précédent.

#### CSS

Le CSS est le même que dans l'exemple précédent, sauf que cette fois nous colorions la bordure en `hotpink` et que nous incluons deux définitions de `<basic-shape>` à l'intérieur de la valeur `border-shape`. Il y a un rectangle extérieur qui couvre toute la zone du contenu et un cercle intérieur identique à celui de l'exemple précédent.

```css live-sample___basic-border-shape-fill
p {
  width: fit-content;
  aspect-ratio: 1/1;
  border: 15px solid hotpink;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.5);
  border-shape: rect(0% 100% 100% 0% round 20px) circle(50%);
}
```

#### Résultat

{{EmbedLiveSample("basic-border-shape-fill", "100%", 240)}}

Notez comment cette fois, la bordure couvre la zone entre le rectangle et le cercle, et elle adopte la couleur définie dans la déclaration `border`.

### Comparer les valeurs de `border-shape`

Dans cet exemple, nous vous permettons de sélectionner différentes valeurs de `border-shape` à appliquer à un élément, afin que vous puissiez comparer et contraster leur rendu.

#### HTML

Le HTML est similaire à celui de l'exemple précédent, sauf que cette fois nous incluons un peu plus de texte dans l'élément `<p>`. Nous avons également inclus un élément HTML {{HTMLElement("select")}} afin que vous puissiez choisir différentes classes à appliquer au `<p>` avec JavaScript (nous avons masqué à la fois le `<select>` et le JavaScript pour plus de concision).

```html live-sample___border-shape-select
<p>Bienheureux sont les fromagers.</p>
```

```html hidden live-sample___border-shape-select
<form>
  <label for="selection-forme"
    >Sélectionnez le type de border-shape&nbsp;:</label
  >
  <br />
  <select id="selection-forme">
    <option>circle</option>
    <option selected>ellipse</option>
    <option>inset</option>
    <option>path</option>
    <option>polygon</option>
    <option>rect</option>
    <option>shape</option>
    <option>two-polygons</option>
    <option>xywh</option>
  </select>
</form>
```

Les classes définissent différentes valeurs de `border-shape` sur l'élément `<p>`. Pour commencer, une `class` de `ellipse` est définie sur l'élément `<p>`, donc initialement il a un `border-shape` de type `ellipse()`.

```js hidden live-sample___border-shape-select
const boite = document.querySelector("p");
const select = document.querySelector("select");

select.addEventListener("change", selectionnerClasse);

function selectionnerClasse() {
  boite.className = select.value;
}

selectionnerClasse();
```

#### CSS

Dans le CSS, nous donnons à la boîte une largeur ({{CSSxRef("width")}}) de `550px`, une bordure ({{CSSxRef("border")}}) noire épaisse et une ombre ({{CSSxRef("box-shadow")}}).

```css live-sample___border-shape-select
p {
  width: 550px;
  border: 15px solid black;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.5);
}
```

Ensuite, nous définissons les règles pour chacune des classes qui sont appliquées lorsque vous sélectionnez les différentes options dans l'élément `<select>`.

```css-nolint live-sample___border-shape-select
.circle {
  border-shape: circle(60%);
}

.ellipse {
  border-shape: ellipse(50% 40%);
}

.inset {
  border-shape: inset(10px 20px 10px 20px round 20px);
}

.path {
  border-shape: path(
      "M 35,95 C 35,50 60,15 100,20 C 120,5 160,5 180,22 C 200,5 250,5 270,22 C 295,5 340,5 360,22 C 460,10 477,35 496,75 C 515,157 450,120 430,128 C 400,145 360,145 330,130 C 300,145 260,145 230,130 C 200,145 160,145 130,130 C 80,142 35,120 35,95 Z"
    )
    view-box;
}

.polygon {
  border-shape: polygon(0% 60%, 0% 85%, 8% 100%, 18% 88%, 30% 100%, 42% 88%, 55% 100%, 68% 88%, 80% 100%, 86% 88%, 90% 75%, 100% 60%, 90% 30%, 85% 5%, 75% 18%, 65% 3%, 52% 16%, 40% 3%, 27% 16%, 15% 3%, 5% 18%) view-box;
}

.rect {
  border-shape: rect(10px 500px 130px 20px round 20px);
}

.shape {
  border-shape: shape(
    from 0% 64.5%,
    curve to 15.71% 8.26% with 0% 30.76%/6.04% 4.51%,
    curve to 35.05% 9.76% with 20.55% -2.99%/30.21% -2.99%,
    curve to 56.8% 9.76% with 39.88% -2.99%/51.97% -2.99%,
    curve to 78.56% 9.76% with 62.84% -2.99%/73.72% -2.99%,
    curve to 97.89% 49.5% with 87.02% 0.76%/97.89% 19.51%,
    curve to 95.47% 89.25% with 101.52% 60.75%/100.31% 83.25%,
    curve to 71.3% 90.75% with 88.22% 102%/78.56% 102%,
    curve to 47.13% 90.75% with 64.05% 102%/54.38% 102%,
    curve to 22.96% 90.75% with 39.88% 102%/30.21% 102%,
    curve to 0% 64.5% with 10.88% 99.75%/0% 83.25%,
    close
  );
}

.two-polygons {
  border-shape: polygon(0% 60%, 0% 85%, 8% 100%, 18% 88%, 30% 100%, 42% 88%, 55% 100%, 68% 88%, 80% 105%, 86% 88%, 91% 75%, 101% 60%, 93% 30%, 86% 5%, 75% 18%, 65% 3%, 52% 16%, 40% 3%, 27% 16%, 15% 3%, 5% 18%)
    polygon(0% 55%, 0% 90%, 6% 104%, 17% 93%, 30% 100%, 43% 93%, 56% 102%, 69% 93%, 81% 102%, 88% 93%, 94% 78%, 100% 58%, 94% 24%, 88% -2%, 76% 13%, 64% -4%, 51% 11%, 39% -4%, 26% 11%, 13% -4%, 3% 13%);
}

.xywh {
  border-shape: xywh(5% 5% 90% 90% round 20px);
}
```

```css hidden live-sample___border-shape-select
form {
  position: absolute;
  border: 2px solid black;
  background: white;
  padding: 5px;
  bottom: 0;
  right: 0;
}

form select {
  width: 100%;
  padding: 2px 5px;
  margin-top: 10px;
}
```

#### Résultat

{{EmbedLiveSample("border-shape-select", "100%", 350)}}

Sélectionnez différentes options dans le menu déroulant pour voir comment les différentes formes de bordure sont rendues. À tout moment, n'hésitez pas à utiliser les outils de développement de votre navigateur pour inspecter les valeurs de `border-shape` appliquées à l'élément `<p>` et les modifier pour vous faire une idée de leur fonctionnement.

### Animer une `border-shape`

Cet exemple montre comment vous pouvez animer la propriété `border-shape`.

#### HTML

Le même élément `<p>` est utilisé que dans l'exemple précédent, sauf que cette fois nous avons inclus un attribut [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) afin qu'il puisse être sélectionné par le clavier.

```html live-sample___animate-border-shape
<p tabindex="0">Bienheureux sont les fromagers.</p>
```

#### CSS

Pour cet exemple, nous appliquons une `border-shape` de type `polygon()` à l'élément `<p>`.

```css-nolint live-sample___animate-border-shape
p {
  width: 550px;
  border: 15px solid black;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 0.5);
  border-shape: polygon(0% 60%, 0% 85%, 8% 100%, 18% 88%, 30% 100%, 42% 88%, 55% 100%, 68% 88%, 80% 100%, 86% 88%, 90% 75%, 100% 60%, 90% 30%, 85% 5%, 75% 18%, 65% 3%, 52% 16%, 40% 3%, 27% 16%, 15% 3%, 5% 18%) view-box;
}
```

Nous appliquons également une {{CSSxRef("animation")}} aux états {{CSSxRef(":hover")}} et {{CSSxRef(":focus")}} de l'élément `<p>`, de sorte que lorsque l'élément est survolé ou sélectionné, il anime en douceur les deux formes de bordure polygonales de manière infinie.

```css-nolint live-sample___animate-border-shape
p:hover,
p:focus {
  animation: morph 1s ease-in-out infinite alternate;
}

@keyframes morph {
  from {
    border-shape: polygon(0% 60%, 0% 85%, 8% 100%, 18% 88%, 30% 100%, 42% 88%, 55% 100%, 68% 88%, 80% 100%, 86% 88%, 90% 75%, 100% 60%, 90% 30%, 85% 5%, 75% 18%, 65% 3%, 52% 16%, 40% 3%, 27% 16%, 15% 3%, 5% 18%) view-box;
  }
  to {
    border-shape: polygon(0% 55%, 0% 90%, 6% 104%, 17% 93%, 30% 100%, 43% 93%, 56% 102%, 69% 93%, 81% 102%, 88% 93%, 94% 78%, 100% 58%, 94% 24%, 88% -2%, 76% 13%, 64% -4%, 51% 11%, 39% -4%, 26% 11%, 13% -4%, 3% 13%) view-box;
  }
}
```

#### Résultat

{{EmbedLiveSample("animate-border-shape", "100%", 240)}}

Survolez ou sélectionnez le paragraphe pour voir l'animation.

```css hidden live-sample___speech-bubble-demo live-sample___basic-border-shape live-sample___basic-border-shape-fill live-sample___border-shape-select live-sample___animate-border-shape
@supports not (border-shape: circle(50%)) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété 'border-shape'.";
    font-family: sans-serif;
    background-color: wheat;
    padding: 1rem 0;
    text-align: center;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("border")}}
- La propriété {{CSSxRef("corner-shape")}}
- [Créer un menu de navigation irrégulier avec `border-shape`](/fr/docs/Web/CSS/Guides/Borders_and_box_decorations/Border_shape_nav_menu)
- Le module [des décorations de bordure et de boîte CSS](/fr/docs/Web/CSS/Guides/Borders_and_box_decorations)
- Le module [des arrière-plans et des bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
- [`border-shape`&nbsp;: le futur du web non rectangulaire <sup>(angl.)</sup>](https://una.im/border-shape) par Una Kravets (2026)
- [Préparez-vous pour la puissante propriété CSS `border-shape`&nbsp;! <sup>(angl.)</sup>](https://css-tricks.com/get-ready-for-the-powerful-css-border-shape-property/) sur CSS Tricks (2026)
