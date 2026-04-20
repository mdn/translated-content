---
title: Propriété CSS `scroll-margin-right`
short-title: scroll-margin-right
slug: Web/CSS/Reference/Properties/scroll-margin-right
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`scroll-margin-right`** définit la marge de la zone d'accrochage au défilement à droite, utilisée pour accrocher cette boîte au [port d'accrochage](/fr/docs/Glossary/Scroll_snap#port_daccrochage). La zone d'accrochage au défilement est déterminée en prenant la boîte de bordure transformée, en trouvant sa boîte englobante rectangulaire (alignée sur les axes dans l'espace de coordonnées du conteneur de défilement), puis en ajoutant les décalages définis.

{{InteractiveExample("Démonstration CSS&nbsp;: scroll-margin-right")}}

```css interactive-example-choice
scroll-margin-right: 0;
```

```css interactive-example-choice
scroll-margin-right: 20px;
```

```css interactive-example-choice
scroll-margin-right: 2em;
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
.default-example {
  flex-wrap: wrap;
}

.default-example .info {
  width: 100%;
  padding: 0.5em 0;
  font-size: 90%;
}

.scroller {
  text-align: right;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: x mandatory;
}

.scroller > div {
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

.scroller > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

## Syntaxe

```css
/* Valeurs de type <length> */
scroll-margin-right: 10px;
scroll-margin-right: 1em;

/* Valeurs globales */
scroll-margin-right: inherit;
scroll-margin-right: initial;
scroll-margin-right: revert;
scroll-margin-right: revert-layer;
scroll-margin-right: unset;
```

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : Un décalage par rapport au bord droit du conteneur de défilement.

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
