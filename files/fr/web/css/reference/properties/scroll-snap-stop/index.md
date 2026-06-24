---
title: Propriété CSS `scroll-snap-stop`
short-title: scroll-snap-stop
slug: Web/CSS/Reference/Properties/scroll-snap-stop
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`scroll-snap-stop`** définit si le conteneur de défilement est autorisé ou non à «&nbsp;passer sur&nbsp;» les positions d'accrochage possibles.

{{InteractiveExample("Démonstration CSS&nbsp;: scroll-snap-stop")}}

```css interactive-example-choice
scroll-snap-stop: normal;
```

```css interactive-example-choice
scroll-snap-stop: always;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p class="explanation">
    L'effet de cette propriété peut être remarqué sur les appareils avec un pavé
    tactile. Essayez de faire défiler tous les éléments en un seul mouvement. La
    valeur <b class="keyword">'normal'</b> devrait passer à travers toutes les
    pages, tandis que <b class="keyword">'always'</b> s'arrêtera à la deuxième
    page.
  </p>
  <div class="snap-container">
    <div>1</div>
    <div id="example-element">2</div>
    <div>3</div>
  </div>
  <div class="info">Défiler »</div>
</section>
```

```css interactive-example
.default-example {
  flex-direction: column;
}

.explanation {
  margin-top: 0;
}

.keyword {
  color: darkorange;
}

.default-example .info {
  width: 100%;
  padding: 0.5em 0;
  font-size: 90%;
}

.snap-container {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: x mandatory;
}

.snap-container > div {
  flex: 0 0 250px;
  width: 250px;
  background-color: rebeccapurple;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.snap-container > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
scroll-snap-stop: normal;
scroll-snap-stop: always;

/* Valeurs globales */
scroll-snap-stop: inherit;
scroll-snap-stop: initial;
scroll-snap-stop: revert;
scroll-snap-stop: revert-layer;
scroll-snap-stop: unset;
```

### Valeurs

- `normal`
  - : Lorsque la {{Glossary("viewport", "zone d'affichage")}} du conteneur défile, elle peut «&nbsp;passer sur&nbsp;» certaines positions d'accroche.
- `always`
  - : Le conteneur de défilement ne peut pas passer sur une position d'accroche. Le conteneur doit « s'accrocher » dès la première position d'accroche de l'élément.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir différents arrêts d'accrochage

L'exemple ci-dessous montre le contraste entre les valeurs `always` et `normal` de `scroll-snap-stop`. La différence entre les deux valeurs de `scroll-snap-stop` est plus perceptible lorsque la propriété `scroll-snap-type` est définie sur `mandatory`, ce qui est utilisé dans cet exemple.

#### HTML

```html
<p>scroll-snap-stop: always (X Mandatory)</p>
<div class="x mandatory-scroll-snapping always-stop">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>scroll-snap-stop: always (X Mandatory) on odd child elements</p>
<div class="x mandatory-scroll-snapping always-stop-odd">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>scroll-snap-stop: always (X Mandatory) on even child elements</p>
<div class="x mandatory-scroll-snapping always-stop-even">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>scroll-snap-stop: normal (X Mandatory)</p>
<div class="x mandatory-scroll-snapping normal-stop">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>scroll-snap-stop: always (Y Mandatory)</p>
<div class="y mandatory-scroll-snapping always-stop">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>scroll-snap-stop: normal (Y Mandatory)</p>
<div class="y mandatory-scroll-snapping normal-stop">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

#### CSS

```css
/* configuration */
body {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  font-family: monospace;
  text-align: center;
}

div[class] {
  font-size: 3rem;
  display: flex;
  overflow: auto;
  flex: none;
}

.x {
  width: 50%;
  min-width: 15rem;
  height: 6rem;
  flex-flow: row nowrap;
}

.y {
  width: 30%;
  min-width: 12rem;
  height: 12rem;
  flex-flow: column nowrap;
}

div > div {
  flex: none;
  outline: 1px solid #333333;
}

.x > div {
  width: 90%;
  height: 100%;
}

.y > div {
  width: 100%;
  height: 80%;
}

/* coloration */
div > div:nth-child(even) {
  background-color: #87ea87;
}

div > div:nth-child(odd) {
  background-color: #87ccea;
}
```

```css
/* définir le type d'accrochage obligatoire sur le parent */
.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}

.y.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
}

/* définir l'alignement de l'accrochage sur les enfants */
div > div {
  scroll-snap-align: center;
}

/* définir l'arrêt d'accrochage sur les enfants */
.always-stop > div {
  scroll-snap-stop: always;
}

.always-stop-odd > div:nth-of-type(odd) {
  scroll-snap-stop: always;
}

.always-stop-even > div:nth-of-type(even) {
  scroll-snap-stop: always;
}

.normal-stop > div {
  scroll-snap-stop: normal;
}
```

#### Résultat

Faites défiler de gauche à droite et de haut en bas dans les boîtes X et Y ci-dessous, respectivement. Dans les boîtes X et Y où la propriété `scroll-snap-stop` est définie sur `always`, le défilement est forcé de s'arrêter au point d'accrochage même lorsque vous faites défiler rapidement. Cependant, dans les boîtes où la propriété `scroll-snap-stop` est définie sur `normal`, les points d'accrochage sont ignorés lorsque vous faites défiler rapidement.

Si nécessaire, vous pouvez être sélectif quant aux éléments qui sont toujours arrêtés à l'intérieur du conteneur de défilement. Cela est démontré dans l'exemple ci-dessous en ciblant les éléments impairs et pairs&nbsp;; vous pouvez choisir une stratégie différente en fonction de vos besoins. Dans l'exemple ci-dessous, le défilement ne «&nbsp;passe pas&nbsp;» sur les éléments impairs et pairs dans les deuxième et troisième boîtes, respectivement.

{{EmbedLiveSample("Définir différents arrêts d'accrochage", "100%", 1080)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("scroll-snap-align")}}
- La propriété {{CSSxRef("scroll-initial-target")}}
- Le module [d'accrochage au défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap)
- [Contrôler précisément le défilement avec l'accrochage CSS <sup>(angl.)</sup>](https://web.dev/articles/css-scroll-snap) sur web.dev (2018)
