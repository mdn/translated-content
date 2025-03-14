---
title: margin-block-start
slug: Web/CSS/margin-block-start
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`margin-block-start`** définit la marge logique appliquée au début des éléments en bloc, selon le mode d'écriture, la directionalité et l'orientation du texte. Selon les valeurs utilisées pour {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}, elle peut correspondre à {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} ou {{cssxref("margin-left")}}.

{{EmbedInteractiveExample("pages/css/margin-block-start.html")}}

Cette propriété est à rapprocher de {{cssxref("margin-inline-start")}}, {{cssxref("margin-block-end")}} et de {{cssxref("margin-inline-end")}} qui définissent les autres marges appliquées à l'élément.

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
margin-block-start: 10px; /* Une longueur absolue */
margin-block-start: 1em; /* Une longueur relative à la taille du texte */
margin-block-start: 5%; /* Une largeur relative à la
                                   largeur du bloc englobant */

/* Valeurs avec un mot-clé */
margin-block-start: auto;

/* Valeurs globales */
margin-block-start: inherit;
```

### Valeurs

La propriété `margin-block-start` peut prendre les mêmes valeurs que la propriété {{cssxref("margin-left")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exemple {
  writing-mode: vertical-lr;
  margin-block-start: 20px;
  background-color: #c8c800;
}
```

### HTML

```html
<div>
  <p class="exemple">Texte d'exemple</p>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques correspondantes :

  - {{cssxref("margin-top")}},
  - {{cssxref("margin-right")}},
  - {{cssxref("margin-bottom")}}
  - {{cssxref("margin-left")}}

- {{cssxref("writing-mode")}}
- {{cssxref("direction")}}
- {{cssxref("text-orientation")}}
