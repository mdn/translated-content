---
title: margin-inline-end
slug: Web/CSS/margin-inline-end
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`margin-inline-end`** définit la marge logique appliquée à la fin des éléments en ligne, selon le mode d'écriture, la directionalité et l'orientation du texte. Selon les valeurs utilisées pour {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}, elle peut correspondre à {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} ou {{cssxref("margin-left")}}.

{{EmbedInteractiveExample("pages/css/margin-inline-end.html")}}

Cette propriété est à rapprocher de {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}} et de {{cssxref("margin-inline-start")}} qui définissent les autres marges appliquées à l'élément.

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
margin-inline-end: 10px; /* Une longueur absolue */
margin-inline-end: 1em; /* Une longueur relative à la taille du texte */
margin-inline-end: 5%; /* Une largeur relative à la
                                   largeur du bloc englobant */

/* Valeurs avec un mot-clé */
margin-inline-end: auto;

/* Valeurs globales */
margin-inline-end: inherit;
```

### Valeurs

La propriété `margin-inline-end` peut prendre les mêmes valeurs que la propriété {{cssxref("margin-left")}}.

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
  margin-inline-end: 20px;
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

- {{cssxref("margin-inline-start")}}
- {{cssxref("writing-mode")}}
- {{cssxref("direction")}}
- {{cssxref("text-orientation")}}
