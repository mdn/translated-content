---
title: inset-inline-start
slug: Web/CSS/inset-inline-start
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/inset-inline-start
original_slug: inset-inline-start
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`inset-inline-start`** définit le début du décalage logique en ligne (_inline_) d'un élément, selon le mode d'écriture, la directionnalité et l'orientation. Elle correspond à une des propriétés parmi {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} ou  {{cssxref("left")}} selon les valeurs des propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

> **Note :** Avant Firefox 63, cette propriété était implémentée avec le nom `offset-inline-start`. Firefox 63 a mis à jour son implémentation afin de suivre les modifications apportées à la spécification.

```css
/* Valeurs de longueur */
/* Type <length>       */
inset-inline-start: 3px;
inset-inline-start: 2.4em;

/* Valeurs relatives à la largeur */
/* du bloc englobant              */
/* Type <percentage>              */
inset-inline-start: 10%;

/* Valeurs avec un mot-clé */
inset-inline-start: auto;

/* Valeurs globales */
inset-inline-start: inherit;
inset-inline-start: initial;
inset-inline-start: unset;
```

Elle est liée aux propriétés {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}} et {{cssxref("inset-inline-end")}} qui permettent de définir les autres décalages de l'élément.

## Syntaxe

### Valeurs

La propriété `inset-inline-start` peut prendre les mêmes valeurs que la propriété {{cssxref("left")}}.

### Syntaxe formelle

{{csssyntax}}

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
  inset-inline-start: 20px;
  background-color: #c8c800;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 140, 140)}}

## Spécifications

| Spécification                                                                                                            | Statut                                           | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Logical Properties", "#propdef-inset-inline-start", "inset-inline-start")}} | {{Spec2("CSS Logical Properties")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.inset-inline-start")}}

## Voir aussi

- Les propriétés physiques correspondantes :

  - {{cssxref("top")}}
  - {{cssxref("right")}}
  - {{cssxref("bottom")}}
  - {{cssxref("left")}}

- Les autres propriétés qui définissent les autres décalages : {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}} et {{cssxref("inset-inline-end")}}
- {{cssxref("writing-mode")}}
- {{cssxref("direction")}}
- {{cssxref("text-orientation")}}
