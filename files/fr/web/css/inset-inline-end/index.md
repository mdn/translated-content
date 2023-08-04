---
title: inset-inline-end
slug: Web/CSS/inset-inline-end
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`inset-inline-end`** définit la fin du décalage logique en ligne (_inline_) d'un élément, selon le mode d'écriture, la directionnalité et l'orientation. Elle correspond à une des propriétés parmi {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} ou {{cssxref("left")}} selon les valeurs des propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

> **Note :** Avant Firefox 63, cette propriété était implémentée avec le nom `offset-inline-end`. Firefox 63 a mis à jour son implémentation afin de suivre les modifications apportées à la spécification.

```css
/* Valeurs de longueur */
/* Type <length>       */
inset-inline-end: 3px;
inset-inline-end: 2.4em;

/* Valeurs relatives à la largeur */
/* du bloc englobant              */
/* Type <percentage>              */
inset-inline-end: 10%;

/* Valeurs avec un mot-clé */
inset-inline-end: auto;

/* Valeurs globales */
inset-inline-end: inherit;
inset-inline-end: initial;
inset-inline-end: unset;
```

Elle est liée aux propriétés {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}} et {{cssxref("inset-inline-start")}} qui permettent de définir les autres décalages de l'élément.

## Syntaxe

### Valeurs

La propriété `inset-inline-end` peut prendre les mêmes valeurs que la propriété {{cssxref("left")}}.

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
  inset-inline-end: 20px;
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

- {{cssxref("writing-mode")}}
- {{cssxref("direction")}}
- {{cssxref("text-orientation")}}
- Les propriétés qui définissent les autres décalages :

  - {{cssxref("inset-block-start")}},
  - {{cssxref("inset-block-end")}},
  - {{cssxref("inset-inline-start")}}
