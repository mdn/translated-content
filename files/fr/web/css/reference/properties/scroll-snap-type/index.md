---
title: scroll-snap-type
slug: Web/CSS/Reference/Properties/scroll-snap-type
l10n:
  sourceCommit: a14f56b06eabf3b182ae4bc0e02634a8ccc01f20
---

La propriété [CSS](/fr/docs/Web/CSS) **`scroll-snap-type`** est définie sur un {{Glossary("scroll container", "conteneur de défilement")}}, l'optant pour l'accrochage au défilement en définissant la direction et la rigueur de l'application des points d'accroche dans le [port d'accrochage](/fr/docs/Glossary/Scroll_snap#port_daccrochage).

{{InteractiveExample("Démonstration CSS&nbsp;: scroll-snap-type")}}

```css interactive-example-choice
scroll-snap-type: none;
```

```css interactive-example-choice
scroll-snap-type: x mandatory;
```

```css interactive-example-choice
scroll-snap-type: x proximity;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <div class="info">Défiler »</div>
</section>
```

```css interactive-example
.default-example {
  flex-wrap: wrap;
}

.default-example .info {
  width: 100%;
  padding: 0.5em 0;
  font-size: 90%;
}

#example-element {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
}

#example-element > div {
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

#example-element > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

Si le contenu dans le port de défilement change — par exemple, si du contenu est ajouté, déplacé, supprimé ou redimensionné — le conteneur de défilement se repositionnera sur le contenu précédemment accroché si ce contenu est toujours présent.

Si la valeur d'une propriété liée à l'accrochage au défilement, telle que `scroll-snap-type` ou {{CSSxRef("scroll-margin")}}, est modifiée, le conteneur de défilement se repositionnera en fonction de la valeur actuelle de `scroll-snap-type`.

La spécification de toute animation ou physique précise utilisée pour appliquer ces points d'accroche n'est pas couverte par cette propriété, mais laissée à la discrétion de l'agent utilisateur.

## Syntaxe

```css
/* Aucun accrochage */
scroll-snap-type: none;

/* Valeur avec un mot-clé */
scroll-snap-type: x;
scroll-snap-type: y;
scroll-snap-type: block;
scroll-snap-type: inline;
scroll-snap-type: both;

/* Valeurs optionnelles pour la rigueur de l'accrochage */
/* mandatory | proximity */
scroll-snap-type: x mandatory;
scroll-snap-type: y proximity;
scroll-snap-type: both mandatory;

/* Valeurs globales */
scroll-snap-type: inherit;
scroll-snap-type: initial;
scroll-snap-type: revert;
scroll-snap-type: revert-layer;
scroll-snap-type: unset;
```

### Valeurs

- `none`
  - : Lorsque la {{Glossary("viewport", "zone d'affichage")}} visuelle de ce conteneur de défilement est défilée, elle doit ignorer les points d'accrochage.
- `x`
  - : Le conteneur de défilement s'accroche aux positions d'accrochage uniquement sur son axe horizontal.
- `y`
  - : Le conteneur de défilement s'accroche aux positions d'accrochage uniquement sur son axe vertical.
- `block`
  - : Le conteneur de défilement s'accroche aux positions d'accrochage uniquement sur son axe de bloc.
- `inline`
  - : Le conteneur de défilement s'accroche aux positions d'accrochage uniquement sur son axe en ligne.
- `both`
  - : Le conteneur de défilement s'accroche aux positions d'accrochage sur ses deux axes indépendamment (il peut s'accrocher à des éléments différents selon chaque axe).
- `mandatory`
  - : La zone d'affichage visuelle de ce conteneur de défilement doit s'accrocher à une position d'accrochage si elle n'est pas actuellement défilée.
- `proximity`
  - : La zone d'affichage visuelle de ce conteneur de défilement peut s'accrocher à une position d'accrochage si elle n'est pas actuellement défilée. L'agent utilisateur décide s'il s'accroche en fonction des paramètres de défilement. Il s'agit de la rigueur d'accrochage par défaut si un axe d'accrochage est défini.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Accrochage sur différents axes

#### HTML

```html
<main>
  <section class="x mandatory-scroll-snapping" dir="ltr">
    <div>X Mand. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="x proximity-scroll-snapping" dir="ltr">
    <div>X Prox. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="y mandatory-scroll-snapping" dir="ltr">
    <div>Y Mand. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="y proximity-scroll-snapping" dir="ltr">
    <div>Y Prox. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="x mandatory-scroll-snapping" dir="rtl">
    <div>X Mand. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="x proximity-scroll-snapping" dir="rtl">
    <div>X Prox. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="y mandatory-scroll-snapping" dir="rtl">
    <div>Y Mand. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="y proximity-scroll-snapping" dir="rtl">
    <div>Y Prox. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
</main>
```

#### CSS

```css hidden
main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  font-family: monospace;
}
section {
  display: flex;
  margin: 1em auto;
  outline: 1px dashed lightgray;
  flex: none;
  overflow: auto;
}
.x {
  width: 100%;
  height: 128px;
  flex-flow: row nowrap;
  overflow-y: hidden;
}
.y {
  width: 256px;
  height: 256px;
  flex-flow: column nowrap;
  overflow-x: hidden;
}
```

```css
/* scroll-snap */
.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}
.x.proximity-scroll-snapping {
  scroll-snap-type: x proximity;
}
.y.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
}
.y.proximity-scroll-snapping {
  scroll-snap-type: y proximity;
}

div {
  text-align: center;
  scroll-snap-align: center;
  flex: none;
}
```

```css hidden
.x div {
  line-height: 128px;
  font-size: 64px;
  width: 100%;
  height: 128px;
}
.y div {
  line-height: 256px;
  font-size: 128px;
  width: 256px;
  height: 100%;
}

/* appearance fixes */
.y div:first-child {
  line-height: 1.3;
  font-size: 64px;
}

/* coloration */
div:nth-child(even) {
  background-color: #87ea87;
}
div:nth-child(odd) {
  background-color: #87ccea;
}
```

#### Résultat

{{EmbedLiveSample("Exemples", "100%", 1800)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Autres propriétés de la zone de défilement&nbsp;: {{CSSxRef("scroll-margin")}}, {{CSSxRef("scroll-padding")}}
- Propriétés des enfants de défilement&nbsp;: {{CSSxRef("scroll-snap-align")}}, {{CSSxRef("scroll-margin")}}, {{CSSxRef("scroll-snap-stop")}}
- [Concepts de base de l'accrochage au défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap/Basic_concepts)
- [Utilisation des évènements d'accrochage au défilement](/fr/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- Le module [d'accrochage au défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap)
- [Contrôler précisément le défilement avec l'accrochage CSS <sup>(angl.)</sup>](https://web.dev/articles/css-scroll-snap) sur web.dev (2018)
