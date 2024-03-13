---
title: inset-block-start
slug: Web/CSS/inset-block-start
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`inset-block-start`** définit le début du décalage logique en bloc (_block_) d'un élément, selon le mode d'écriture, la directionnalité et l'orientation. Elle correspond à une des propriétés parmi {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} ou {{cssxref("left")}} selon les valeurs des propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

> **Note :** Avant Firefox 63, cette propriété était implémentée avec le nom `offset-block-start`. Firefox 63 a mis à jour son implémentation afin de suivre les modifications apportées à la spécification.

```css
/* Valeurs de longueur */
/* Type <length>       */
inset-block-start: 3px;
inset-block-start: 2.4em;

/* Valeurs relatives à la largeur */
/* du bloc englobant              */
/* Type <percentage>              */
inset-block-start: 10%;

/* Valeurs avec un mot-clé */
inset-block-start: auto;

/* Valeurs globales */
inset-block-start: inherit;
inset-block-start: initial;
inset-block-start: unset;
```

## Syntaxe

### Valeurs

La propriété `inset-block-start` peut prendre les mêmes valeurs que la propriété {{cssxref("left")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<div>
  <p class="exemple">Texte pour l'exemple</p>
</div>
```

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exemple {
  writing-mode: vertical-lr;
  position: relative;
  inset-block-start: 20px;
  background-color: #c8c800;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques correspondantes :

  - {{cssxref("top")}}
  - {{cssxref("right")}}
  - {{cssxref("bottom")}}
  - {{cssxref("left")}}

- Les propriétés qui définissent les autres décalages logiques

  - {{cssxref("inset-block-end")}}
  - {{cssxref("offset-inline-end")}}
  - {{cssxref("offset-inline-start")}}

- {{cssxref("writing-mode")}}
- {{cssxref("direction")}}
- {{cssxref("text-orientation")}}
