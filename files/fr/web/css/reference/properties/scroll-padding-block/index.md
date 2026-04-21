---
title: Propriété CSS `scroll-padding-block`
short-title: scroll-padding-block
slug: Web/CSS/Reference/Properties/scroll-padding-block
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`scroll-padding-block`** définit le padding de défilement d'un élément dans la dimension de bloc.

{{InteractiveExample("Démonstration CSS&nbsp;: scroll-padding-block")}}

```css interactive-example-choice
scroll-padding-block: 0;
```

```css interactive-example-choice
scroll-padding-block: 20px;
```

```css interactive-example-choice
scroll-padding-block: 2em;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="scroller" id="example-element">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <div class="info">Défiler »</div>
</section>
```

```css interactive-example
.default-example .info {
  inline-size: 100%;
  padding: 0.5em 0;
  font-size: 90%;
  writing-mode: vertical-rl;
}

.scroller {
  text-align: left;
  height: 250px;
  width: 270px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: y mandatory;
}

.scroller > div {
  flex: 0 0 250px;
  background-color: rebeccapurple;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.scroller > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

Les propriétés `scroll-padding` définissent des décalages pour la _zone de visualisation optimale_ de la zone de défilement&nbsp;: la région utilisée comme zone cible pour placer des éléments à la vue de l'utilisateur·ice. Cela permet à l'auteur·ice d'exclure des régions de la zone de défilement qui sont masquées par d'autres contenus (comme des barres d'outils ou des barres latérales en position fixe) ou de laisser plus d'espace entre un élément ciblé et les bords de la zone de défilement.

## Propriétés constitutives

Cette propriété est un raccourci pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("scroll-padding-block-end")}}
- {{CSSxRef("scroll-padding-block-start")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
scroll-padding-block: auto;

/* Valeurs de type <length> */
scroll-padding-block: 10px;
scroll-padding-block: 1em 0.5em;
scroll-padding-block: 10%;

/* Valeurs globales */
scroll-padding-block: inherit;
scroll-padding-block: initial;
scroll-padding-block: revert;
scroll-padding-block: revert-layer;
scroll-padding-block: unset;
```

### Valeurs

- `<length-percentage>`
  - : Un décalage intérieur entre la boîte de défilement et le bord correspondant de l'élément. C'est une longueur ou un pourcentage valide.
- `auto`
  - : Le décalage est déterminé par l'agent utilisateur. Cette valeur correspond généralement à `0px` mais le navigateur peut utiliser une heuristique et déterminer si une valeur non nulle est préférable au regard du contexte dans lequel se trouve l'élément.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module [d'accrochage au défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap)
- [Contrôler précisément le défilement avec l'accrochage CSS <sup>(angl.)</sup>](https://web.dev/articles/css-scroll-snap) sur web.dev (2018)
