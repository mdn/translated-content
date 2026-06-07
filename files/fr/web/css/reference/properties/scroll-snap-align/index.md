---
title: Propriété CSS `scroll-snap-align`
short-title: scroll-snap-align
slug: Web/CSS/Reference/Properties/scroll-snap-align
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`scroll-snap-align`** définit la position d'accrochage de la boîte comme un alignement de sa [zone d'accrochage](/fr/docs/Glossary/Scroll_snap#snap_area) (en tant que {{Glossary("alignment subject", "sujet d'alignement")}}) à l'intérieur du port d'accrochage de son conteneur (en tant que {{Glossary("alignment container", "conteneur d'alignement")}}).

{{InteractiveExample("Démonstration CSS&nbsp;: scroll-snap-align")}}

```css interactive-example-choice
scroll-snap-align: start;
```

```css interactive-example-choice
scroll-snap-align: end;
```

```css interactive-example-choice
scroll-snap-align: center;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-parent">
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

#example-parent {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: x mandatory;
}

#example-parent > div {
  flex: 0 0 66%;
  width: 250px;
  background-color: rebeccapurple;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#example-parent > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
scroll-snap-align: none;
scroll-snap-align: center;
scroll-snap-align: start;
scroll-snap-align: end;

/* Valeurs avec deux mots-clés */
scroll-snap-align: start end;
scroll-snap-align: end center;
scroll-snap-align: center start;

/* Valeurs globales */
scroll-snap-align: inherit;
scroll-snap-align: initial;
scroll-snap-align: revert;
scroll-snap-align: revert-layer;
scroll-snap-align: unset;
```

### Valeurs

Une ou deux valeurs peuvent être définies pour la propriété `scroll-snap-align`. Si une seule valeur est définie, elle s'applique aux axes bloc et en ligne. Si deux valeurs sont définies, la première valeur contrôle l'axe bloc et la deuxième valeur contrôle l'axe en ligne.

- `none`
  - : La boîte ne définit aucune position d'accroche sur cet axe.
- `start`
  - : L'alignement de début de la [zone d'accrochage](/fr/docs/Glossary/Scroll_snap#zone_daccrochage) de cette boîte, à l'intérieur du [port d'accrochage](/fr/docs/Glossary/Scroll_snap#port_daccrochage) du conteneur de défilement, est une position d'accroche sur cet axe.
- `end`
  - : L'alignement de fin de la zone d'accrochage de cette boîte, à l'intérieur du port d'accrochage du conteneur de défilement est une position d'accroche sur cet axe.
- `center`
  - : Le point d'alignement situé au centre de l'axe et à l'intérieur de la boîte de défilement est une position d'accroche sur cet axe.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("scroll-snap-stop")}}
- La propriété {{CSSxRef("scroll-initial-target")}}
- Le module [d'accrochage au défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap)
- [Contrôler précisément le défilement avec l'accrochage CSS <sup>(angl.)</sup>](https://web.dev/articles/css-scroll-snap) sur web.dev (2018)
