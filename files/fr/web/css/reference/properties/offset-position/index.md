---
title: Propriété CSS `offset-position`
short-title: offset-position
slug: Web/CSS/Reference/Properties/offset-position
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`offset-position`** définit la position initiale d'un élément le long d'un chemin. Cette propriété est généralement utilisée en combinaison avec la propriété {{CSSxRef("offset-path")}} pour créer un effet de mouvement. La valeur de `offset-position` détermine où l'élément est placé initialement pour se déplacer le long d'un chemin de décalage si une fonction `offset-path` telle que {{CSSxRef("basic-shape/path", "path()")}} ne définit pas sa propre position de départ.

La propriété `offset-position` fait partie d'un système de mouvement basé sur les propriétés constitutives {{CSSxRef("offset")}}, y compris {{CSSxRef("offset-anchor")}}, {{CSSxRef("offset-distance")}} et `offset-path`. Ces propriétés fonctionnent ensemble pour créer divers effets de mouvement le long d'un chemin.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
offset-position: normal;
offset-position: auto;
offset-position: top;
offset-position: bottom;
offset-position: left;
offset-position: right;
offset-position: center;

/* Valeurs de type <percentage> */
offset-position: 25% 75%;

/* Valeurs de type <length> */
offset-position: 0 0;
offset-position: 1cm 2cm;
offset-position: 10ch 8em;

/* Valeurs d'écart d'un bord */
offset-position: bottom 10px right 20px;
offset-position: right 3em bottom 10px;
offset-position: bottom 10px right;
offset-position: top right 10px;

/* Valeurs globales */
offset-position: inherit;
offset-position: initial;
offset-position: revert;
offset-position: revert-layer;
offset-position: unset;
```

### Values

- `normal`
  - : Indique que l'élément n'a pas de position de départ de décalage et place l'élément à `50% 50%` du bloc contenant. C'est la valeur par défaut.
- `auto`
  - : Indique que la position de départ du décalage est le coin supérieur gauche de la boîte de l'élément.
- {{CSSxRef("&lt;position&gt;")}}
  - : Définit la position comme une coordonnée x/y pour placer un élément par rapport aux bords de sa boîte. La position peut être définie en utilisant une à quatre valeurs. Si deux valeurs qui ne sont pas des mots-clés sont utilisées, la première valeur représente la position horizontale et la seconde représente la position verticale. Si une seule valeur est spécifiée, la seconde valeur est supposée être `center`. Si trois ou quatre valeurs sont utilisées, les valeurs {{CSSxRef("length-percentage")}} sont des décalages pour les valeurs de mot-clé précédentes. Pour plus d'explications sur ces types de valeurs, voir {{CSSxRef("background-position")}}.

## Définition formelle

{{CSSInfo}}

## Syntax formelle

{{CSSSyntax}}

## Exemples

### Définir la valeur initiale de `offset-position` pour un `offset-path`

Dans cet exemple, la propriété {{CSSxRef("offset-path")}} est utilisée pour définir le chemin le long duquel l'élément `cyan` doit se déplacer. La valeur de la fonction CSS {{CSSxRef("basic-shape/path", "path()")}} est un [chemin de données SVG](/fr/docs/Web/SVG/Reference/Attribute/d) qui décrit un chemin courbé. L'élément se déplace le long de ce chemin courbé pendant l'animation `move`.

#### HTML

```html
<div id="wrap">
  <div id="motion-demo"></div>
</div>
```

#### CSS

```css hidden
#wrap {
  width: 260px;
  height: 160px;
  border: 1px dashed black;
}
```

```css
#motion-demo {
  offset-path: path("M20,20 C20,100 200,0 200,100");
  offset-position: left top;
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
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

#### Résultat

{{EmbedLiveSample("Définir la valeur initiale de `offset-position` pour un `offset-path`", "100%", 200)}}

### Comparaison des différentes positions de départ du décalage

Cet exemple compare visuellement les différentes positions de départ initiales d'un élément lorsque {{CSSxRef("ray()")}} est utilisé pour définir une valeur pour la propriété {{CSSxRef("offset-path")}}. Le numéro à l'intérieur de la boîte de l'élément indique l'élément auquel le CSS est appliqué ainsi que le point d'ancrage de l'élément.

```html hidden
<div class="wrap">
  <div class="box">0</div>
  <div class="box box0">0</div>
  <pre>
    offset-position: normal;
    /* Aucun offset-path défini */
  </pre>
</div>

<div class="wrap">
  <div class="box">0</div>
  <div class="box box1">1</div>
  <pre>
    offset-position: normal;
    offset-path: ray(0deg);
  </pre>
</div>

<div class="wrap">
  <div class="box">0</div>
  <div class="box box2">2</div>
  <pre>
    offset-position: auto;
    offset-path: ray(0deg);
  </pre>
</div>

<div class="wrap">
  <div class="box">0</div>
  <div class="box box3">3</div>
  <pre>
    offset-position: left top;
    offset-path: ray(0deg);
  </pre>
</div>

<div class="wrap">
  <div class="box">0</div>
  <div class="box box4">4</div>
  <pre>
    offset-position: 30% 70%;
    offset-path: ray(120deg);
  </pre>
</div>
```

```css hidden
.wrap {
  position: relative;
  width: 80vw;
  height: 120px;
  border: 1px solid black;
  margin: 0 2em 4em 5em;
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
  background-color: green;
  border-top: 6px dashed white;
  background-clip: border-box;
  position: absolute;
  top: 20px;
  left: 20px;
  opacity: 20%;
  color: white;
}

.box0 {
  offset-position: normal;
}

.box1 {
  offset-position: normal;
  offset-path: ray(0deg);
}

.box2 {
  offset-position: auto;
  offset-path: ray(0deg);
}

.box3 {
  offset-position: left top;
  offset-path: ray(0deg);
}

.box4 {
  offset-position: 30% 70%;
  offset-path: ray(120deg);
}
```

#### Résultat

{{EmbedLiveSample("Comparaison des différentes positions de départ du décalage", "100%", 930)}}

Dans `box0`, l'absence de la propriété `offset-path` signifie qu'une valeur de `offset-position` de `normal` ou `auto` n'a aucun effet. Lorsque `offset-position` est `normal`, le rayon commence au centre du bloc contenant (c'est-à-dire `50% 50%`). Il s'agit de la position de départ par défaut d'un chemin de décalage et elle est utilisée lorsqu'aucune valeur de `offset-position` n'est définie. Remarquez la différence entre les positions de départ du décalage `auto` et `left top`. La valeur `auto` aligne le point d'ancrage de l'élément sur son propre coin supérieur gauche, tandis que la valeur `left top` aligne le point d'ancrage de l'élément sur le coin supérieur gauche du bloc contenant.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("offset")}}
- La propriété {{CSSxRef("offset-anchor")}}
- La propriété {{CSSxRef("offset-distance")}}
- La propriété {{CSSxRef("offset-path")}}
- La propriété {{CSSxRef("offset-rotate")}}
