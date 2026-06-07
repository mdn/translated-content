---
title: Fonction CSS `ray()`
short-title: ray()
slug: Web/CSS/Reference/Values/ray
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`ray()`** définit le segment de ligne {{CSSxRef("offset-path")}} qu'un élément animé peut suivre. Le segment de ligne est appelé «&nbsp;rayon&nbsp;». Le rayon commence à partir d'une {{CSSxRef("offset-position")}} et s'étend dans la direction de l'angle défini. La longueur d'un rayon peut être limitée en définissant une taille et en utilisant le mot-clé `contain`.

## Syntaxe

```css
/* tous les paramètres définis */
offset-path: ray(50deg closest-corner contain at 100px 20px);

/* deux paramètres définis, l'ordre n'a pas d'importance */
offset-path: ray(contain 200deg);

/* un seul paramètre défini */
offset-path: ray(45deg);
```

### Paramètres

Les paramètres peuvent être définis dans n'importe quel ordre.

- {{CSSxRef("&lt;angle&gt;")}}
  - : Définit la direction dans laquelle le segment de ligne s'étend à partir de la position de départ du décalage. L'angle `0deg` se situe sur l'axe y pointant vers le haut, et les angles positifs augmentent dans le sens des aiguilles d'une montre.

- `<size>`
  - : Définit la longueur du segment de ligne, qui est la distance entre {{CSSxRef("offset-distance")}} `0%` et `100%`, par rapport à la boîte englobante. Il s'agit d'un paramètre optionnel (`closest-side` est utilisé si aucun `<size>` n'est défini). Il accepte l'une des valeurs clés suivantes&nbsp;:

    `closest-side`&nbsp;: Distance entre le point de départ du rayon et le côté le plus proche du [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block) de l'élément. Si le point de départ du rayon se trouve sur un bord du bloc englobant, la longueur du segment de ligne est nulle. Si le point de départ du rayon se trouve en dehors du bloc englobant, le bord du bloc englobant est considéré comme s'étendant à l'infini. Il s'agit de la valeur par défaut.

    `closest-corner`&nbsp;: Distance entre le point de départ du rayon et le coin le plus proche du bloc englobant de l'élément. Si le point de départ du rayon se trouve sur un coin du bloc englobant, la longueur du segment de ligne est nulle.

    `farthest-side`&nbsp;: Distance entre le point de départ du rayon et le côté le plus éloigné du bloc englobant de l'élément. Si le point de départ du rayon se trouve en dehors du bloc englobant, le bord du bloc englobant est considéré comme s'étendant à l'infini.

    `farthest-corner`&nbsp;: Distance entre le point de départ du rayon et le coin le plus éloigné du bloc englobant de l'élément.

    `sides`&nbsp;: Distance entre le point de départ du rayon et le point où le segment de ligne intersecte la frontière du bloc englobant. Si le point de départ se trouve sur ou en dehors de la frontière du bloc englobant, la longueur du segment de ligne est nulle.

- `contain`
  - : Réduit la longueur du segment de ligne afin que l'élément reste à l'intérieur du bloc englobant même à `offset-distance: 100%`. Plus précisément, la longueur du segment est réduite de moitié de la largeur ou de la hauteur de la boîte de bordure de l'élément, selon la plus grande, et jamais inférieure à zéro. Il s'agit d'un paramètre optionnel.

- `at <position>`
  - : Définit le point de départ du rayon et l'endroit où l'élément est placé dans son bloc englobant. Il s'agit d'un paramètre optionnel. Si inclus, la valeur `<position>` doit être précédée du mot-clé `at`. Si omis, la valeur utilisée est celle de `offset-position` de l'élément. Si omis et que l'élément n'a pas de valeur `offset-position`, la valeur utilisée pour le point de départ du rayon est `offset-position: normal`, ce qui place l'élément au centre (ou `50% 50%`) du bloc englobant.

## Description

La fonction `ray()` positionne un élément le long d'un chemin en définissant son emplacement dans un espace bidimensionnel à travers un angle et une distance par rapport à un point de référence (coordonnées polaires). Cette fonctionnalité rend la fonction `ray()` utile pour créer des transitions spatiales 2D. En comparaison, cette approche diffère de la méthode consistant à définir un point par ses distances horizontales et verticales par rapport à une origine fixe (coordonnées rectangulaires), utilisée par la fonction {{CSSxRef("translate","translate()")}}, et de celle consistant à déplacer un élément le long d'un chemin défini par une animation.

Comme `ray()` fonctionne dans un espace 2D, il est important de considérer à la fois la position initiale et l'orientation de l'élément. Lorsque la fonction `ray()` est appliquée comme valeur de `offset-path` sur un élément, voici comment vous pouvez contrôler ces aspects&nbsp;:

- L'élément est initialement positionné en déplaçant le point {{CSSxRef("offset-anchor")}} de l'élément vers la position de départ de l'élément. Par défaut, la position de départ du rayon est déterminée par la valeur {{CSSxRef("offset-position")}}. Si `offset-position` est explicitement définie comme `normal` (ou omis et autorisé à revenir à `normal`), l'élément est positionné au `centre` (ou `50% 50%`) de son bloc englobant. La spécification de `offset-position: auto` définit la position de départ au coin `haut gauche` (ou `0 0`) de la position de l'élément.
- L'élément est initialement tourné de manière à ce que son [axe en ligne](/fr/docs/Web/CSS/Guides/Grid_layout/Box_alignment#the_two_axes_of_a_grid_layout) — sa direction de flux de texte — s'aligne avec l'angle définie par `ray()`. Par exemple, avec un angle `ray()` de `0deg`, qui se trouve sur l'axe y pointant vers le haut, l'axe en ligne de l'élément est tourné pour être vertical afin de correspondre à l'angle du rayon. L'élément maintient cette rotation tout au long de son chemin. Pour personnaliser ce comportement, utilisez la propriété {{CSSxRef("offset-rotate")}}, qui vous permet de définir un angle ou une direction de rotation différent pour l'élément, offrant un contrôle plus précis sur son apparence lorsqu'il suit le chemin. Par exemple, définir `offset-rotate: 0deg` supprime toute rotation appliquée par `ray()`, réalignant l'axe en ligne de l'élément avec la direction du flux de texte.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir l'angle et la position de départ d'un rayon

Cet exemple montre comment travailler avec la position de départ d'un élément et comment l'orientation de l'élément est impactée par l'angle de rayon défini.

#### CSS

```css hidden
body {
  width: fit-content;
  height: fit-content;
}

.container {
  width: 80vw;
  height: 100px;
  border: 1px dashed black;
  margin: 0 0.5em 2em 2em;
  text-align: center;
}

pre {
  font-size: 1em;
  text-align: right;
  padding-right: 10px;
  line-height: 1em;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
}

.box + .box {
  opacity: 1;
}
```

```css
.box {
  background-color: palegreen;
  border-top: 4px solid black;
  opacity: 20%;
}

.box:first-of-type {
  position: absolute;
}

.box1 {
  offset-path: ray(0deg);
}

.box2 {
  offset-path: ray(150deg);
}

.box3 {
  offset-rotate: 0deg;
  offset-position: 20% 40%;
  offset-path: ray(150deg);
}

.box4 {
  offset-position: 0 0;
  offset-path: ray(0deg);
}

.box5 {
  offset-path: ray(60deg closest-side at bottom right);
}
```

```html hidden
<pre>/* original */</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box0">0</div>
</div>

<pre>
  offset-path: ray(0deg);
  /* La position de départ par défaut est 50% 50% */
</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box1">1</div>
</div>

<pre>
  offset-path: ray(150deg);
</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box2">2</div>
</div>

<pre>
  offset-rotate: 0deg;
  offset-position: 20% 40%;
  offset-path: ray(150deg);
</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box3">3</div>
</div>

<pre>
  offset-position: 0 0;
  offset-path: ray(0deg);
</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box4">4</div>
</div>

<pre>
  offset-path: ray(60deg closest-side at bottom right);
</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box5">5</div>
</div>
```

Similaire à {{CSSxRef("transform-origin")}}, le point d'ancrage par défaut est au centre d'un élément. Ce point d'ancrage peut être modifié à l'aide de la propriété {{CSSxRef("offset-anchor")}}.

Dans cet exemple, différentes valeurs `offset-path: ray()` sont appliquées aux boîtes numérotées de `1` à `5`. Le «&nbsp;bloc contenant&nbsp;» de chaque boîte est représenté par une bordure en pointillés. Une boîte estompée dans le coin supérieur gauche montre la position par défaut de chaque boîte sans `offset-position` ou `offset-path` appliqué, permettant une comparaison côte à côte. Le haut de chaque boîte est mis en évidence avec une bordure `solide` pour illustrer les variations des points de départ et des orientations des rayons. Après le positionnement au point de départ du rayon, une boîte s'aligne avec la direction de l'angle de rayon défini. Si {{CSSxRef("offset-position")}} n'est pas défini, la position de départ par défaut du rayon est le centre (ou `50% 50%`) du bloc contenant de la boîte.

#### Résultat

{{EmbedLiveSample("Définir l'angle et la position de départ d'un rayon", "100%", 1100)}}

- `box1` est initialement positionnée de manière à ce que son point d'ancrage (son centre) soit à la position de départ par défaut du décalage (`50% 50%` du bloc contenant). `box1` est également tournée pour s'orienter vers l'angle `0deg` du rayon. C'est maintenant le point de départ du chemin. Vous pouvez observer le changement de position et de rotation de la boîte en la comparant à la `box0` estompée à gauche. La boîte est tournée pour correspondre à l'angle `0deg` le long de l'axe y, pointant vers le haut. La rotation de la boîte est évidente à partir de l'orientation du numéro à l'intérieur de la boîte.

- Dans `box2`, un angle positif plus grand de `150deg` est appliqué au rayon pour montrer comment fonctionne l'angle du rayon. En partant du coin supérieur gauche, la boîte est tournée dans le sens des aiguilles d'une montre pour atteindre l'angle défini de `150deg`.

- `box2` et `box3` ont les mêmes valeurs `offset-path`. Dans `box3`, un {{CSSxRef("offset-rotate")}} de `0deg` est également appliqué à l'élément. En conséquence, l'élément reste tourné à cet angle spécifique tout au long du chemin du rayon, et l'élément ne tourne pas dans la direction du chemin. Remarquez que dans `box3`, le chemin du rayon est à `150deg`, mais l'orientation de la boîte ne change pas le long du chemin en raison de `offset-rotate`. Notez également que la propriété `offset-path` de `box3` ne définit pas de `<position>` de départ, donc la position de départ du rayon est dérivée de `offset-position` de l'élément, qui dans ce cas est `top 20% left 40%`.

- La `offset-position` de `box4` est définie sur le coin supérieur gauche (`0 0`) du bloc contenant, et par conséquent, le point d'ancrage de l'élément et la position de départ du décalage coïncident. L'angle du rayon de `0deg` est appliqué à l'élément à ce point de départ.

- Dans `box5`, la propriété `offset-path` définit la valeur `at <position>`, ce qui place la boîte au bord `bottom` et `right` du bloc contenant de l'élément et applique un angle de `60deg` au rayon.

### Animer un élément le long du rayon

Dans cet exemple, la première forme est affichée comme référence pour sa position et son orientation. Un chemin de mouvement en rayon est appliqué aux autres formes.

#### CSS

```css
body {
  display: grid;
  grid-template-columns: 200px 100px;
  gap: 40px;
  margin-left: 40px;
}

.container {
  transform-style: preserve-3d;
  width: 150px;
  height: 100px;
  border: 2px dotted green;
}

.shape {
  width: 40px;
  height: 40px;
  background: #2bc4a2;
  margin: 5px;
  text-align: center;
  line-height: 40px;
  clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
  animation: move 5000ms infinite alternate ease-in-out;
}

.shape2 {
  offset-path: ray(120deg sides contain);
}

.shape3 {
  offset-rotate: 0deg;
  offset-path: ray(120deg sides contain);
}

.shape4 {
  offset-position: auto;
  offset-path: ray(120deg closest-corner);
}

.shape5 {
  offset-position: auto;
  offset-path: ray(120deg farthest-corner);
}

@keyframes move {
  0%,
  20% {
    offset-distance: 0%;
  }
  80%,
  100% {
    offset-distance: 100%;
  }
}
```

```html hidden
<div>
  <div class="container">
    <div class="shape shape1">&mdash;</div>
  </div>
</div>

<pre>/* aucun offset-path appliqué */</pre>

<div>
  <div class="container">
    <div class="shape shape2">&mdash;</div>
  </div>
</div>

<pre>offset-path: ray(120deg sides contain);</pre>

<div>
  <div class="container">
    <div class="shape shape3">&mdash;</div>
  </div>
</div>

<pre>
offset-path: ray(120deg sides contain);
offset-rotate: 0deg;
</pre>

<div>
  <div class="container">
    <div class="shape shape4">&mdash;</div>
  </div>
</div>

<pre>
  offset-position: auto;
  offset-path: ray(120deg closest-corner);
</pre>

<div>
  <div class="container">
    <div class="shape shape5">&mdash;</div>
  </div>
</div>

<pre>
  offset-position: auto;
  offset-path: ray(120deg farthest-corner);
</pre>
```

#### Résultat

{{EmbedLiveSample("Animer un élément le long du rayon", "100%", 750)}}

Dans les deux premiers exemples où `offset-path` est appliqué, remarquez l'orientation de la forme sans {{CSSxRef("offset-rotate")}} et avec `offset-rotate`. Ces deux exemples utilisent la valeur par défaut {{CSSxRef("offset-position")}} `normal`, et par conséquent, le mouvement le long du chemin commence à partir de `50% 50%`. Les deux derniers exemples de `offset-path` montrent l'impact des valeurs de coin `<size>`&nbsp;: `closest-corner` et `farthest-corner`. La valeur `closest-corner` crée un chemin de décalage très court car la forme est déjà au coin (`offset-position: auto`). La valeur `farthest-corner` crée le chemin de décalage le plus long, allant du coin supérieur gauche du bloc contenant au coin inférieur droit.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("offset-distance")}}
- La propriété {{CSSxRef("offset-path")}}
- La propriété {{CSSxRef("offset-rotate")}}
