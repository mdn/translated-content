---
title: inset-block-end
slug: Web/CSS/inset-block-end
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/inset-block-end
original_slug: inset-block-end
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`inset-block-end`** définit la fin du décalage logique en bloc (_block_) d'un élément, selon le mode d'écriture, la directionnalité et l'orientation. Elle correspond à une des propriétés parmi {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} ou  {{cssxref("left")}} selon les valeurs des propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

> **Note :** Avant Firefox 63, cette propriété était implémentée avec le nom `offset-block-end`. Firefox 63 a mis à jour le nom de la propriété afin de s'accorder avec les modifications apportées à la spécification.

```css
/* Valeurs de longueur */
/* Type <length>       */
inset-block-end: 3px;
inset-block-end: 2.4em;

/* Valeurs relatives à la largeur */
/* du bloc englobant              */
/* Type <percentage>              */
inset-block-end: 10%;

/* Valeurs avec un mot-clé */
inset-block-end: auto;

/* Valeurs globales */
inset-block-end: inherit;
inset-block-end: initial;
inset-block-end: unset;
```

Elle est liée aux propriétés {{cssxref("inset-block-start")}}, {{cssxref("inset-inline-end")}} et {{cssxref("inset-inline-start")}} qui permettent de définir les autres décalages de l'élément.

## Syntaxe

### Valeurs

La propriété `inset-block-end` peut prendre les mêmes valeurs que la propriété {{cssxref("left")}}.

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
  inset-block-end: 20px;
  background-color: #c8c800;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 140, 140)}}

## Spécifications

| Spécification                                                                                                    | Statut                                           | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Logical Properties", "#propdef-inset-block-end", "inset-block-end")}} | {{Spec2("CSS Logical Properties")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.inset-block-end")}}

## Voir aussi

- Les propriétés physiques correspondantes :

  - {{cssxref("top")}}
  - {{cssxref("right")}}
  - {{cssxref("bottom")}}
  - {{cssxref("left")}}

- Les autres propriétés qui définissent les décalages logiques

  - {{cssxref("inset-block-start")}}
  - {{cssxref("inset-inline-start")}}
  - {{cssxref("inset-inline-end")}}

- {{cssxref("writing-mode")}}
- {{cssxref("direction")}}
- {{cssxref("text-orientation")}}
