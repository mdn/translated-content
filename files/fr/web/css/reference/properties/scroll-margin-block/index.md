---
title: Propriété CSS `scroll-margin-block`
short-title: scroll-margin-block
slug: Web/CSS/Reference/Properties/scroll-margin-block
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`scroll-margin-block`** définit les marges de défilement d'un élément dans la dimension de bloc.

{{InteractiveExample("Démonstration CSS&nbsp;: scroll-margin-block")}}

```css interactive-example-choice
scroll-margin-block: 0;
```

```css interactive-example-choice
scroll-margin-block: 20px;
```

```css interactive-example-choice
scroll-margin-block: 2em;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="scroller">
    <div>1</div>
    <div id="example-element">2</div>
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

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("scroll-margin-block-end")}}
- {{CSSxRef("scroll-margin-block-start")}}

## Syntaxe

```css
/* Valeurs de type <length> */
scroll-margin-block: 10px;
scroll-margin-block: 1em 0.5em;

/* Valeurs globales */
scroll-margin-block: inherit;
scroll-margin-block: initial;
scroll-margin-block: revert;
scroll-margin-block: revert-layer;
scroll-margin-block: unset;
```

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : Un décalage par rapport au bord correspondant du conteneur de défilement.

## Description

Les valeurs de `scroll-margin` représentent des décalages définissant la zone de capture de défilement utilisée pour accrocher cette boîte au [port d'accrochage](/fr/docs/Glossary/Scroll_snap#port_daccrochage). La zone de capture de défilement est déterminée en prenant la boîte de bordure transformée, en trouvant sa boîte englobante rectangulaire (alignée sur les axes dans l'espace de coordonnées du conteneur de défilement), puis en ajoutant les décalages définis.

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
