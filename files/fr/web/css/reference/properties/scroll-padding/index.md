---
title: scroll-padding
slug: Web/CSS/Reference/Properties/scroll-padding
l10n:
  sourceCommit: 57b9e55cd708d8ff4bfd9dc65c568bdee4089453
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`scroll-padding`** définit le padding de défilement sur tous les côtés d'un élément à la fois. Elle définit des décalages qui déterminent la zone de visualisation optimale d'un viewport de défilement à l'intérieur d'un {{Glossary("scroll container", "conteneur de défilement")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: scroll-padding")}}

```css interactive-example-choice
scroll-padding: 0;
```

```css interactive-example-choice
scroll-padding: 20px;
```

```css interactive-example-choice
scroll-padding: 2em;
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

## Propriétés constitutives

Cette propriété est un raccourci pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("scroll-padding-bottom")}}
- {{CSSxRef("scroll-padding-left")}}
- {{CSSxRef("scroll-padding-right")}}
- {{CSSxRef("scroll-padding-top")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
scroll-padding: auto;

/* Valeurs de type <length> */
scroll-padding: 10px;
scroll-padding: 1em 0.5em 1em 1em;
scroll-padding: 10%;

/* Valeurs globales */
scroll-padding: inherit;
scroll-padding: initial;
scroll-padding: revert;
scroll-padding: revert-layer;
scroll-padding: unset;
```

### Valeurs

- {{CSSxRef("&lt;length-percentage&gt;")}}
  - : Un décalage vers l'intérieur depuis le bord correspondant de la zone de défilement, exprimé comme une {{CSSxRef("&lt;length&gt;")}} valide ou une {{CSSxRef("&lt;percentage&gt;")}}.
- `auto`
  - : Le décalage est déterminé par l'agent utilisateur. Il sera généralement `0px`, mais l'agent utilisateur peut détecter et faire autrement si une valeur non nulle est plus appropriée.

## Description

La propriété `scroll-padding` est une propriété raccourcie qui définit {{CSSxRef("scroll-padding-top")}}, {{CSSxRef("scroll-padding-right")}}, {{CSSxRef("scroll-padding-bottom")}} et {{CSSxRef("scroll-padding-left")}}, dans cet ordre, réglant respectivement le padding de défilement en haut, à droite, en bas et à gauche d'un conteneur de défilement.

Utile lors de la création de conteneurs d'accrochage de défilement, la propriété `scroll-padding` permet de définir des décalages pour la _zone de visualisation optimale_ de la zone de défilement&nbsp;: la région utilisée comme zone cible pour placer des éléments à la vue de l'utilisateur. Cela permet de créer des encarts dans la zone de défilement pour laisser de la place aux objets qui pourraient masquer le contenu, tels que des barres d'outils ou des barres latérales en position fixe, ou pour laisser plus d'espace entre un élément ciblé et les bords de la zone de défilement.

Bien que définie dans le [module d'accrochage de défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap), cette propriété s'applique à tous les conteneurs de défilement, quelle que soit la valeur de la propriété {{CSSxRef("scroll-snap-type")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("scroll-snap-type")}}
- [Concepts de base de l'accrochage de défilement](/fr/docs/Web/CSS/Guides/Scroll_snap/Basic_concepts)
- Le module [d'accrochage de défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap)
- Le module [de débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
- Le module [d'animations CSS pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations)
