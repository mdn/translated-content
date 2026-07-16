---
title: Propriété CSS `offset-distance`
short-title: offset-distance
slug: Web/CSS/Reference/Properties/offset-distance
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`offset-distance`** définit une position le long d'un chemin {{CSSxRef("offset-path")}} pour un élément à placer.

{{InteractiveExample("Démonstration CSS&nbsp;: offset-distance")}}

```css interactive-example-choice
offset-distance: 0%;
```

```css interactive-example-choice
offset-distance: 80%;
```

```css interactive-example-choice
offset-distance: 50px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  width: 24px;
  height: 24px;
  background: #2bc4a2;
  offset-path: path("M-70,-40 C-70,70 70,70 70,-40");
  clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
}

/* Fournit une image de référence du chemin que l'élément suit */
#default-example {
  background-position: calc(50% - 12px) calc(50% + 14px);
  background-repeat: no-repeat;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-75 -45 150 140" width="150" height="140"><path d="M-70,-40 C-70,70 70,70 70,-40" fill="none" stroke="lightgrey" stroke-width="2" stroke-dasharray="4.5"/></svg>');
}
```

## Syntaxe

```css
/* Valeur par défaut */
offset-distance: 0;

/* La position à la moitié de offset-path */
offset-distance: 50%;

/* Une position absolue le long du chemin */
offset-distance: 40px;

/* Valeurs globales */
offset-distance: inherit;
offset-distance: initial;
offset-distance: revert;
offset-distance: revert-layer;
offset-distance: unset;
```

### Valeurs

- {{CSSxRef('&lt;length-percentage&gt;')}}
  - : Une longueur qui définit l'emplacement de l'élément le long d'un chemin (défini par {{CSSxRef('offset-path')}}).

    100% représente la longueur totale du chemin (lorsque `offset-path` est défini comme une forme de base ou avec `path()`).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser `offset-distance` dans une animation

L'aspect mouvement dans <i lang="en">CSS Motion Path</i> provient généralement de l'animation de la propriété `offset-distance`. Si vous souhaitez animer un élément le long de son chemin complet, vous devez définir son {{CSSxRef('offset-path')}} puis configurer une animation qui fait évoluer `offset-distance` de `0%` à `100%`.

#### HTML

```html
<div id="motion-demo"></div>
```

#### CSS

```css
#motion-demo {
  offset-path: path("M20,20 C20,100 200,0 200,100");
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

#### Résultat

{{EmbedLiveSample("Utiliser `offset-distance` dans une animation", "100%", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("offset")}}
- La propriété {{CSSxRef("offset-anchor")}}
- La propriété {{CSSxRef("offset-path")}}
- La propriété {{CSSxRef("offset-position")}}
- La propriété {{CSSxRef("offset-rotate")}}
